
import Stripe from "https://esm.sh/stripe@14.21.0";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  const _supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );
  
  // Create service client for admin operations
  const _supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    {_auth: { persistSession: false} }
  );

  try {_// Authenticate the user
    const _authHeader = req.headers.get("Authorization")!;
    const _token = authHeader.replace("Bearer ", _"");
    const { data: { user} } = await supabaseClient.auth.getUser(token);
    
    if (!user?.id) throw new Error("User not authenticated");

    // Get request data
    const {_transactionId, _action, _// 'release', _'refund', _'cancel'} = await req.json();

    if (!transactionId) {_throw new Error("Transaction ID is required");}

    // Get transaction details
    const {_data: transaction, _error: fetchError} = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)
      .single();
    
    if (fetchError || !transaction) {_throw new Error("Transaction not found");}
    
    // Verify user is authorized to manage this transaction
    const _isClient = transaction.user_id === user.id;
    const _isProvider = transaction.provider_id === user.id;
    
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {_throw new Error("You are not authorized to manage this transaction");}

    const _stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {_apiVersion: "2023-10-16"});

    let result;
    
    switch (action) {_case 'release':
        // Only providers or admins can release escrow funds
        if (!isProvider) {
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
        
      default:
        throw new Error("Invalid action");
    }

    return new Response(JSON.stringify(result), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 500});
  }
});
