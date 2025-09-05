
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import Stripe from &quot;https://esm.sh/stripe@14.21.0&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;) ?? "&quot;
  );
  
  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;,
    { auth: { persistSession: false } }
  );

  try {
    // Authenticate the user
    const authHeader = req.headers.get(&quot;Authorization&quot;)!;
    const token = authHeader.replace(&quot;Bearer &quot;, "&quot;);
    const { data: { user } } = await supabaseClient.auth.getUser(token);
    
    if (!user?.id) throw new Error(&quot;User not authenticated&quot;);

    // Get request data
    const { 
      transactionId, 
      action, // 'release', 'refund', 'cancel'
    } = await req.json();

    if (!transactionId) {
      throw new Error(&quot;Transaction ID is required&quot;);
    }

    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from(&quot;transactions&quot;)
      .select(&quot;*&quot;)
      .eq(&quot;id&quot;, transactionId)
      .single();
    
    if (fetchError || !transaction) {
      throw new Error(&quot;Transaction not found&quot;);
    }
    
    // Verify user is authorized to manage this transaction
    const isClient = transaction.user_id === user.id;
    const isProvider = transaction.provider_id === user.id;
    
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {
      throw new Error(&quot;You are not authorized to manage this transaction&quot;);
    }

    const stripe = new Stripe(Deno.env.get(&quot;STRIPE_SECRET_KEY&quot;) || "&quot;, {
      apiVersion: &quot;2023-10-16&quot;});

    let result;
    
    switch (action) {
      case 'release':
        // Only providers or admins can release escrow funds
        if (!isProvider) {
          throw new Error(&quot;Only service providers can release funds from escrow&quot;);
        }
        
        // Update transaction status
        await supabaseAdmin
          .from(&quot;transactions&quot;)
          .update({ 
            status: &quot;completed&quot;,
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })
          .eq(&quot;id&quot;, transactionId);
        
        result = { message: &quot;Funds released from escrow&quot; };
        break;
        
      case 'refund':
        // Check if transaction can be refunded
        if (transaction.status !== &quot;completed&quot; && transaction.status !== &quot;pending&quot;) {
          throw new Error(&quot;This transaction cannot be refunded&quot;);
        }
        
        // Process refund via Stripe
        if (transaction.stripe_session_id) {
          // Retrieve payment intent from session
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id);
          
          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString(),
              reason: &quot;requested_by_customer&quot;
            });
            
            // Update transaction status
            await supabaseAdmin
              .from(&quot;transactions&quot;)
              .update({ 
                status: &quot;refunded&quot;,
                refunded_at: new Date().toISOString(),
                refund_id: refund.id
              })
              .eq(&quot;id&quot;, transactionId);
          }
        }
        
        result = { message: &quot;Refund processed successfully&quot; };
        break;
        
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== &quot;pending&quot;) {
          throw new Error(&quot;Only pending transactions can be cancelled&quot;);
        }
        
        // Update transaction status
        await supabaseAdmin
          .from(&quot;transactions&quot;)
          .update({ 
            status: &quot;cancelled&quot;,
            cancelled_at: new Date().toISOString() 
          })
          .eq(&quot;id&quot;, transactionId);
        
        result = { message: &quot;Transaction cancelled successfully&quot; };
        break;
        
      default:
        throw new Error(&quot;Invalid action&quot;);
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    console.error(&quot;Transaction management error:&quot;, error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 500});
  }
});
