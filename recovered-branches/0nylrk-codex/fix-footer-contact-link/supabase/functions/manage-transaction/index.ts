
serve(async (req) => {

    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(;
  // Create service client for admin operations;
  const supabaseAdmin = createClient("
    Deno && Deno.env.get("SUPABASE_URL") ?? "";"
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persistSession: false } }

  try {
    // Authenticate the user
    const authHeader = req && req.headers.get("Authorization")!;
    const token = authHeader && authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient && supabaseClient.auth.getUser(token);

  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }

  ),

  try {}
    // Authenticate the user"
    const authHeader = req.headers.get("Authorization")!,"
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),

    if (fetchError || !transaction) {

  );
  try {
    // Authenticate the user
    const authHeader = req && req.headers.get("Authorization")!;
    const token = authHeader && authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient && supabaseClient.auth.getUser(token);
    if (!user?.id) throw new Error("User not authenticated");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );
  ),
  
  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );
  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient.auth.getUser(token);
    if (!user?.id) throw new Error("User not authenticated");

  ),

  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!,
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
    if (!user?.id) throw new Error("User not authenticated"),


    // Get request data
    const {
      transactionId
      action, // 'releaserefundcancel'


    if (!transactionId) {
      throw new Error("Transaction ID is required")
    }
    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)

    } = await req && req.json();
    if (!transactionId) {
      throw new Error("Transaction ID is required")

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import Stripe from "https://esm.sh/stripe@14.21.0",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import Stripe from "https://esm.sh/stripe@14.21.0",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
    Deno.env.get("SUPABASE_URL") ?? "",;"
    Deno.env.get("SUPABASE_ANON_KEY") ?? "";"
  ),;
  // Create service client for admin operations;
    Deno.env.get("SUPABASE_URL") ?? "",;"
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;"
    { auth:{ persistSession:false } }
  try {;
    // Authenticate the user;"
    const authHeader = req.headers.get("Authorization")!,;""
    const token = authHeader.replace("Bearer ", ""),;"
    const { data:{ user } } = await supabaseClient.auth.getUser(token),;
    ;"
    if (!user?.id) throw new Error("User not authenticated"),;"
    // Get request data;
    const { ;
      transactionId, ;"
      action, // 'releaserefund', 'cancel';
    } = await req.json(),;
    if (!transactionId) {;
      throw new Error("Transaction ID is required"),;"

    }
    // Get transaction details;
      .from("transactions");"
      .select("*");"
      .eq("id", transactionId);"
      .single(),;
    if (fetchError || !transaction) {;"
      throw new Error("Transaction not found"),;"
pr-12325
    }
;
    // Verify user is authorized to manage this transaction;
    // Clients can cancel or request refunds, providers can only release funds;
    if (!isClient && !isProvider) {;
      }
      throw new Error("You are not authorized to manage this transaction");"
    }
;
      }
      "apiVersion": "2023-10-16"}),;"
    switch (action) {;
      }
      case 'release':;'
        // Only providers or admins can release escrow funds;
        if (!isProvider) {;
          }
          throw new Error("Only service providers can release funds from escrow");"
        }
        // Process refund via Stripe
        if (transaction.stripe_session_id) {
          // Retrieve payment intent from session
          const session = await stripe.checkout.sessions.retrieve($2);
          if (session.payment_intent) {
            const refund = await stripe.refunds.create($2);
              reason: "requested_by_customer"
            }),
            
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString($2);
                refund_id: refund.id
              })
              .eq("id", transactionId)
          }
        }
        
        result = $2;
        break,
        
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== "pending") {
          throw new Error("Only pending transactions can be cancelled")
        }

    const isClient = transaction.user_id === user.id;
    const isProvider = transaction.provider_id === user.id;
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,


    // Clients can cancel or request refunds, providers can only release funds

    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }

    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }

    const stripe = new Stripe(Deno && Deno.env.get("STRIPE_SECRET_KEY") || "", {

      apiVersion: "2023-10-16"});
    let result;
const stripe = new Stripe(Deno && Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"});
    let result;

import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';
import Stripe from "https://esm.sh / stripe@14.21.0",

import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {}
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  const supabase_client = create_client ("
    Deno.env.get ("SUPABASE_URL") ?? "";"
    Deno.env.get ("SUPABASE_ANON_KEY") ?? "");
;
  // Create service client for admin operations;
  const supabase_admin = create_client ("
    Deno.env.get ("SUPABASE_URL") ?? "";"
    Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "";

    if (!transactionId) {"
      throw new Error("Transaction ID is required")"
    }
    // Get transaction details;
    const { data: transaction, error: fetchError } = await supabaseAdmin;"
      .from("transactions")""
      .select("*")""
      .eq("id", transactionId)"
    const isClient = transaction && transaction.user_id === user && user.id;
    const isProvider = transaction && transaction.provider_id === user && user.id;

      .single(),
    if (fetchError || !transaction) {
"
      throw new Error("Transaction not found")"
    }
    // Verify user is authorized to manage this transaction;
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
"
      throw new Error("Transaction not found")"
    }
    // Verify user is authorized to manage this transaction;
      .single();
    if (fetchError |!transaction) {
      .single(),
    if (fetchError || !transaction) {"
      throw new Error("Transaction not found")"
    }
    // Verify user is authorized to manage this transaction;
    const isClient = transaction.user_id === user.id;
    const isProvider = transaction.provider_id === user.id;
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    // Clients can cancel or request refunds, providers can only release funds;
    if (!isClient && !isProvider) {"
      throw new Error("You are not authorized to manage this transaction")"
    }

"
    const stripe = new Stripe(Deno && Deno.env.get("STRIPE_SECRET_KEY") || "", {""
      apiVersion: "2023-10-16"});"
    let result;"
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';''
import Stripe from "https://esm.sh / stripe@14.21.0",""
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';'
const cors_headers = {'
  "Access - Control - Allow - Origin": "*",""
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}"
;
serve (async (req) => {
  // Check condition;
if ( {) {
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  const supabase_client = create_client ()"
    Deno.env.get ("SUPABASE_URL") ?? "";""
    Deno.env.get ("SUPABASE_ANON_KEY") ?? "");"
;
  // Create service client for admin operations;
  const supabase_admin = create_client ()"
    Deno.env.get ("SUPABASE_URL") ?? "";""
    Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "";"

    { auth: { persist_session: false } });
;
  try {}
    // Authenticate the user;"
    const auth_header = req.headers.get ("Authorization")!;"
    const token = auth_header.replace ("Bearer ", "");
    const { data: { user } } = await supabase_client.auth.get_user (token);
;"
    if (throw new Error ("User not authenticated")) {}
  $2;
}
    // Get request data;
    const {}
      transaction_id,'
      action, // 'releaserefundcancel';
    } = await req.json ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Transaction ID is required");
    }
    // Get transaction details;
    const { data: transaction, error: fetch_error } = await supabase_admin;"
      .from ("transactions");"
      .select ("*");"
      .eq ("id", transaction_id);
      .single ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Transaction not found");

  // TODO: Implement
}
    // Authenticate the user;"
    const auth_header = req.headers.get ("Authorization")!;""
    const token = auth_header.replace ("Bearer ", "");"
    const { data: { user } } = await supabase_client.auth.get_user (token);
;"
    if (throw new Error ("User not authenticated")) {"
  $2;
}
    // Get request data;
    const {
  // TODO: Implement
}
      transaction_id,"
      action, // 'releaserefundcancel';'
    } = await req.json ();
;
    // Check condition;
if ( {) {
  $2;
}'
      throw new Error ("Transaction ID is required");"
    }
    // Get transaction details;
    const { data: transaction, error: fetch_error } = await supabase_admin;"
      .from ("transactions");""
      .select ("*");""
      .eq ("id", transaction_id);"
      .single ();
;
    // Check condition;
if ( {) {
  $2;
}"
      throw new Error ("Transaction not found");"

    }
    // Verify user is authorized to manage this transaction;
    const is_client = transaction.user_id === user.id;
    const is_provider = transaction.provider_id === user.id;
;
    // Clients can cancel or request refunds, providers can only release funds;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("You are not authorized to manage this transaction");
    }"
    const stripe = new Stripe (Deno.env.get ("STRIPE_SECRET_KEY") || "", {"
      api_version: "2023 - 10 - 16"});
;
    let result;
;


    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") |"", {
      apiVersion: "2023-10-16"});
    let result;

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {

      apiVersion: "2023-10-16"}),

    let result,


      case 'release':;
        // Only providers or admins can release escrow funds;
        // Check condition;
if ( {) {}
  $2;
}"
          throw new Error ("Only service providers can release funds from escrow");

        // Update transaction status
        await supabaseAdmin
          .from("transactions")
          .update({
            status: "cancelled"
            cancelled_at: new Date().toISOString()
          })
          .eq($2);
        result = $2;
          .update({ 

            status: "completed",
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })"
          .eq("id", transactionId),
        "
        result = { message: "Funds released from escrow" },
        break,


      case 'refund':
        // Check if transaction can be refunded"
        if (transaction && transaction.status !== "completed" && transaction && transaction.status !== "pending") {"
          throw new Error("This transaction cannot be refunded")
        }

          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()

              reason: "requested_by_customer"
            });
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({
                status: "refunded";
                refunded_at: new Date().toISOString()

          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),

          if (session.payment_intent) {}
            const refund = await stripe.refunds.create({}
              payment_intent: session.payment_intent.toString()

          const session = await stripe && stripe.checkout.sessions && sessions.retrieve(transaction && transaction.stripe_session_id);
          
          if (session && session.payment_intent) {}
            const refund = await stripe && stripe.refunds.create({}
              payment_intent: session && session.payment_intent.toString(),
"
              reason: "requested_by_customer"


            }),
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString(),

              reason: "requested_by_customer"
            });
            // Update transaction status;
            await supabaseAdmin"
              .from("transactions")
              .update({"
                status: "refunded";


                refunded_at: new Date().toISOString(),

              })

              .eq("id", transactionId)
        // Update transaction status;
        await supabase_admin;"
          .from ("transactions");
          .update ({"
            status: "completed";
            in_escrow: false,
            completed_at: new Date ().toISOString ();
          });"
          .eq ("id", transaction_id);
;"
        result = { message: "Funds released from escrow" }
        break;
;'
      case 'refund':;
        // Check if transaction can be refunded;
        // Check condition;
if ( {) {}
  $2;
}"
          throw new Error ("This transaction cannot be refunded");
        }
        // Process refund via Stripe;
        // Check condition;
if ( {) {}
  $2;

}
          // Retrieve payment intent from session;
          const session = await stripe.checkout.sessions.retrieve (transaction.stripe_session_id);
;

              reason: "requested_by_customer";
            });
;
            // Update transaction status;


          }
        }"
        result = { message: "Refund processed successfully" }
        break;


        result = { message: "Refund processed successfully" },
        break,

      case 'cancel':
        // Only allow cancellation for pending transactions"
        if (transaction && transaction.status !== "pending") {}
"
          throw new Error("Only pending transactions can be cancelled")
        }
        // Update transaction status;
        await supabaseAdmin"
          .from("transactions")
          .update({"
            status: "cancelled"
            cancelled_at: new Date().toISOString()
          })
"
          .eq("id", transactionId),
        "
        result = { message: "Transaction cancelled successfully" },
        break,
        
"
      headers: { ...corsHeaders, "Content-Type": "application/json" },


      status: 200})

    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {

      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {

      status: 500})
  }
});

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import Stripe from "https://esm.sh/stripe@14.21.0",;

import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;"
  if (req.method === "OPTIONS") {;

      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction && transaction.status !== "pending") {
case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== "pending") {
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction && transaction.status !== "pending") {
          throw new Error("Only pending transactions can be cancelled")
        }
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
          .update({
            status: "cancelled"
            cancelled_at: new Date().toISOString()
          })


.eq("id", transactionId);
        result = { message: "Transaction cancelled successfully" }
        break;
          .eq("id", transactionId),
        result = { message: "Transaction cancelled successfully" },
        break,

      default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {

      headers: { ...corsHeaders, "Content-Type": "application/json" },

      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {

default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
        }  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {

      status: 500})
  }
});

;
default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
        }  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {

      status: 500})
  }
});

;
;
      case 'cancel':;
        // Only allow cancellation for pending transactions;
        // Check condition
if ( {) {
  $2
}
          throw new Error ("Only pending transactions can be cancelled");
        }
        // Update transaction status;
        await supabase_admin;
          .from ("transactions");
          .update ({
            status: "cancelled",
            cancelled_at: new Date ().toISOString ();
          });
          .eq ("id", transaction_id);
;
        result = { message: "Transaction cancelled successfully" }
        break;
;
      default: throw new Error ("Invalid action");
    }
    return new Response (JSON.stringify (result), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {
    console.error ("Transaction management error:", error.message);
    return new Response (JSON.stringify ({ error: error.message }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});

"
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})

    // Check condition;
