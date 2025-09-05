
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
import Stripe from "https://esm.sh/stripe@14.21.0";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  const _supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  ),
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Create service client for admin operations
<<<<<<< HEAD
  const supabaseAdmin = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;,
    { auth: { persistSession: false } }
  ),

  try {
    // Authenticate the user
<<<<<<< HEAD
    const authHeader = req.headers.get("Authorization")!,
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
    
    if (!user?.id) throw new Error("User not authenticated"),
=======
    const authHeader = req.headers.get(&quot;Authorization&quot;)!;
    const token = authHeader.replace(&quot;Bearer &quot;, "&quot;);
    const { data: { user } } = await supabaseClient.auth.getUser(token);
=======
  const _supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    {_auth: { persistSession: false} }
  );

  try {_// Authenticate the user
    const _authHeader = req.headers.get("Authorization")!;
    const _token = authHeader.replace("Bearer ", _"");
    const { data: { user} } = await supabaseClient.auth.getUser(token);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (!user?.id) throw new Error(&quot;User not authenticated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    // Get request data
<<<<<<< HEAD
    const { 
      transactionId, 
      action, // 'releaserefundcancel'
    } = await req.json(),

    if (!transactionId) {
<<<<<<< HEAD
      throw new Error("Transaction ID is required")
=======
      throw new Error(&quot;Transaction ID is required&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
<<<<<<< HEAD
=======
    const {_transactionId, _action, _// 'release', _'refund', _'cancel'} = await req.json();

    if (!transactionId) {_throw new Error("Transaction ID is required");}

    // Get transaction details
    const {_data: transaction, _error: fetchError} = await supabaseAdmin
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .from("transactions")
      .select("*")
      .eq("id", transactionId)
      .single(),
    
    if (fetchError || !transaction) {
      throw new Error("Transaction not found")
=======
      .from(&quot;transactions&quot;)
      .select(&quot;*&quot;)
      .eq(&quot;id&quot;, transactionId)
      .single();
    
<<<<<<< HEAD
    if (fetchError || !transaction) {
      throw new Error(&quot;Transaction not found&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Verify user is authorized to manage this transaction
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {
<<<<<<< HEAD
      throw new Error("You are not authorized to manage this transaction")
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),
=======
      throw new Error(&quot;You are not authorized to manage this transaction&quot;);
    }
=======
    if (fetchError || !transaction) {_throw new Error("Transaction not found");}
    
    // Verify user is authorized to manage this transaction
    const _isClient = transaction.user_id === user.id;
    const _isProvider = transaction.provider_id === user.id;
    
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {_throw new Error("You are not authorized to manage this transaction");}

    const _stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {_apiVersion: "2023-10-16"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const stripe = new Stripe(Deno.env.get(&quot;STRIPE_SECRET_KEY&quot;) || "&quot;, {
      apiVersion: &quot;2023-10-16&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    let result,
    
    switch (action) {_case 'release':
        // Only providers or admins can release escrow funds
        if (!isProvider) {
<<<<<<< HEAD
<<<<<<< HEAD
          throw new Error("Only service providers can release funds from escrow")
=======
          throw new Error(&quot;Only service providers can release funds from escrow&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
        
        // Update transaction status
        await supabaseAdmin
          .from(&quot;transactions&quot;)
          .update({ 
            status: &quot;completed&quot;,
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })
<<<<<<< HEAD
          .eq("id", transactionId),
        
        result = { message: "Funds released from escrow" },
        break,
        
      case 'refund':
        // Check if transaction can be refunded
        if (transaction.status !== "completed" && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")
=======
          .eq(&quot;id&quot;, transactionId);
        
        result = { message: &quot;Funds released from escrow&quot; };
        break;
        
      case 'refund':
        // Check if transaction can be refunded
        if (transaction.status !== &quot;completed&quot; && transaction.status !== &quot;pending&quot;) {
          throw new Error(&quot;This transaction cannot be refunded&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
        
        // Process refund via Stripe
        if (transaction.stripe_session_id) {
          // Retrieve payment intent from session
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          
          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString(),
<<<<<<< HEAD
              reason: "requested_by_customer"
            }),
=======
              reason: &quot;requested_by_customer&quot;
            });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            
            // Update transaction status
            await supabaseAdmin
              .from(&quot;transactions&quot;)
              .update({ 
                status: &quot;refunded&quot;,
                refunded_at: new Date().toISOString(),
                refund_id: refund.id
              })
<<<<<<< HEAD
              .eq("id", transactionId)
          }
        }
        
        result = { message: "Refund processed successfully" },
        break,
        
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== "pending") {
          throw new Error("Only pending transactions can be cancelled")
=======
              .eq(&quot;id&quot;, transactionId);
          }
        }
        
        result = { message: &quot;Refund processed successfully&quot; };
        break;
        
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== &quot;pending&quot;) {
          throw new Error(&quot;Only pending transactions can be cancelled&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
        
        // Update transaction status
        await supabaseAdmin
          .from(&quot;transactions&quot;)
          .update({ 
            status: &quot;cancelled&quot;,
            cancelled_at: new Date().toISOString() 
          })
<<<<<<< HEAD
          .eq("id", transactionId),
        
        result = { message: "Transaction cancelled successfully" },
        break,
=======
          throw new Error("Only service providers can release funds from escrow");}
        
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
          .update({_status: "completed", _in_escrow: false, _completed_at: new Date().toISOString()})
          .eq("id", transactionId);
        
        result = {_message: "Funds released from escrow"};
        break;
        
      case 'refund':
        // Check if transaction can be refunded
        if (transaction.status !== "completed" && transaction.status !== "pending") {_throw new Error("This transaction cannot be refunded");}
        
        // Process refund via Stripe
        if (transaction.stripe_session_id) {_// Retrieve payment intent from session
          const _session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id);
          
          if (session.payment_intent) {
            const _refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString(), _reason: "requested_by_customer"});
            
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({_status: "refunded", _refunded_at: new Date().toISOString(), _refund_id: refund.id})
              .eq("id", transactionId);
          }
        }
        
        result = {_message: "Refund processed successfully"};
        break;
        
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== "pending") {_throw new Error("Only pending transactions can be cancelled");}
        
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
          .update({_status: "cancelled", _cancelled_at: new Date().toISOString()})
          .eq("id", transactionId);
        
        result = {_message: "Transaction cancelled successfully"};
        break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      default: throw new Error("Invalid action")
    }

<<<<<<< HEAD
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
=======
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
=======
    return new Response(JSON.stringify(result), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      status: 500});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
