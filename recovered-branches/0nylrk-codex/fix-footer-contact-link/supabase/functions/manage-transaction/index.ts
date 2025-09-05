
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })  }

  const _supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  ),
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
  ),

  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!,
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
    
    if (!user?.id) throw new Error("User not authenticated"),    
    if (!user?.id) throw new Error(&quot;User not authenticated&quot;);

    // Get request data
    const { 
      transactionId, 
      action, // 'releaserefundcancel'
    } = await req.json(),

    if (!transactionId) {
      throw new Error("Transaction ID is required")    }

    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
    const {_transactionId, _action, _// 'release', _'refund', _'cancel'} = await req.json();

    if (!transactionId) {_throw new Error("Transaction ID is required");}

    // Get transaction details
    const {_data: transaction, _error: fetchError} = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)
      .single(),
    
    if (fetchError || !transaction) {
      throw new Error("Transaction not found")    }
    
    // Verify user is authorized to manage this transaction
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),
    const stripe = new Stripe(Deno.env.get(&quot;STRIPE_SECRET_KEY&quot;) || "&quot;, {
      apiVersion: &quot;2023-10-16&quot;});

    let result,
    
    switch (action) {_case 'release':
        // Only providers or admins can release escrow funds
        if (!isProvider) {
          throw new Error("Only service providers can release funds from escrow")        }
        
        // Update transaction status
        await supabaseAdmin
          .from(&quot;transactions&quot;)
          .update({ 
            status: &quot;completed&quot;,
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })
          .eq("id", transactionId),
        
        result = { message: "Funds released from escrow" },
        break,
        
      case 'refund':
        // Check if transaction can be refunded
        if (transaction.status !== "completed" && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")        }
        
        // Process refund via Stripe
        if (transaction.stripe_session_id) {
          // Retrieve payment intent from session
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          
          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString(),
              reason: "requested_by_customer"
            }),            
            // Update transaction status
            await supabaseAdmin
              .from(&quot;transactions&quot;)
              .update({ 
                status: &quot;refunded&quot;,
                refunded_at: new Date().toISOString(),
                refund_id: refund.id
              })
              .eq("id", transactionId)
          }
        }
        
        result = { message: "Refund processed successfully" },
        break,
        
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== "pending") {
          throw new Error("Only pending transactions can be cancelled")        }
        
        // Update transaction status
        await supabaseAdmin
          .from(&quot;transactions&quot;)
          .update({ 
            status: &quot;cancelled&quot;,
            cancelled_at: new Date().toISOString() 
          })
          .eq("id", transactionId),
        
        result = { message: "Transaction cancelled successfully" },
        break,        
      default: throw new Error("Invalid action")
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})      status: 500});
  }
}),
