
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import Stripe from "https://esm && esm.sh/stripe@14 && 14.21.0",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

>>>>>>> main
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======
<<<<<<< HEAD
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";

>>>>>>> main
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import Stripe from "https://esm.sh/stripe@14.21.0",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
<<<<<<< HEAD
  );
=======
  ),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
<<<<<<< HEAD
  );
  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient.auth.getUser(token);
    if (!user?.id) throw new Error("User not authenticated");
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(

    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""

  ),
  


  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno && Deno.env.get("SUPABASE_URL") ?? "";
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persistSession: false } }

    const authHeader = req && req.headers.get("Authorization")!;
    const token = authHeader && authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseClient && supabaseClient.auth.getUser(token);
    

    if (!user?.id) throw new Error("User not authenticated");
=======

>>>>>>> main
  ),

  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization")!,
    const token = authHeader.replace("Bearer ", ""),
    const { data: { user } } = await supabaseClient.auth.getUser(token),
    
    if (!user?.id) throw new Error("User not authenticated"),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    // Get request data
    const {
      transactionId
      action, // 'releaserefundcancel'
<<<<<<< HEAD
<<<<<<< HEAD
    } = await req.json();
=======
    } = await req.json(),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    } = await req && req.json();


=======

    } = await req.json(),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    if (!transactionId) {
      throw new Error("Transaction ID is required")
    }
    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)
<<<<<<< HEAD
<<<<<<< HEAD
      .single();
    if (fetchError |!transaction) {
=======
      .single(),
    
    if (fetchError || !transaction) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction
<<<<<<< HEAD
    const isClient = transaction.user_id === user.id;
    const isProvider = transaction.provider_id === user.id;
=======
    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    const isClient = transaction && transaction.user_id === user && user.id;
    const isProvider = transaction && transaction.provider_id === user && user.id;
    

=======

      .single(),
    
    if (fetchError || !transaction) {

      throw new Error("Transaction not found")
    }
    // Verify user is authorized to manage this transaction

    const isClient = transaction.user_id === user.id,
    const isProvider = transaction.provider_id === user.id,
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }
<<<<<<< HEAD
<<<<<<< HEAD
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") |"", {
      apiVersion: "2023-10-16"});
    let result;
=======
=======


    const stripe = new Stripe(Deno && Deno.env.get("STRIPE_SECRET_KEY") || "", {

      apiVersion: "2023-10-16"});
    let result;
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';
import Stripe from "https://esm.sh / stripe@14.21.0",
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  const supabase_client = create_client (
    Deno.env.get ("SUPABASE_URL") ?? "";
    Deno.env.get ("SUPABASE_ANON_KEY") ?? "");
;
  // Create service client for admin operations;
  const supabase_admin = create_client (
    Deno.env.get ("SUPABASE_URL") ?? "";
    Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persist_session: false } }
  );
;
  try {
    // Authenticate the user;
    const auth_header = req.headers.get ("Authorization")!;
    const token = auth_header.replace ("Bearer ", "");
    const { data: { user } } = await supabase_client.auth.get_user (token);
;
    if (throw new Error ("User not authenticated")) {
  $2
}
    // Get request data;
    const {
      transaction_id,
      action, // 'releaserefundcancel';
    } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Transaction ID is required");
    }
    // Get transaction details;
    const { data: transaction, error: fetch_error } = await supabase_admin;
      .from ("transactions");
      .select ("*");
      .eq ("id", transaction_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Transaction not found");
    }
    // Verify user is authorized to manage this transaction;
    const is_client = transaction.user_id === user.id;
    const is_provider = transaction.provider_id === user.id;
;
    // Clients can cancel or request refunds, providers can only release funds;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("You are not authorized to manage this transaction");
    }
    const stripe = new Stripe (Deno.env.get ("STRIPE_SECRET_KEY") || "", {
      api_version: "2023 - 10 - 16"});
;
    let result;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> main

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16"}),

    let result,
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    switch (action) {
      case 'release':
        // Only providers or admins can release escrow funds
        if (!isProvider) {
          throw new Error("Only service providers can release funds from escrow")
        }
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
<<<<<<< HEAD
          .update({
            status: "completed";
            in_escrow: false
            completed_at: new Date().toISOString()
          })
          .eq("id", transactionId);
        result = { message: "Funds released from escrow" }
        break;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    switch (action) {
      case 'release':;
        // Only providers or admins can release escrow funds;
        // Check condition
if ( {) {
  $2
}
          throw new Error ("Only service providers can release funds from escrow");
        }


>>>>>>> main
          .update({ 
            status: "completed",
            in_escrow: false,
            completed_at: new Date().toISOString() 
          })
          .eq("id", transactionId),
        
        result = { message: "Funds released from escrow" },
        break,
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      case 'refund':
        // Check if transaction can be refunded
        if (transaction.status !== "completed" && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")
        }
        // Process refund via Stripe
        if (transaction.stripe_session_id) {
          // Retrieve payment intent from session
<<<<<<< HEAD
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id);
=======
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()
              reason: "requested_by_customer"
<<<<<<< HEAD
            });
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({
                status: "refunded";
                refunded_at: new Date().toISOString()
=======
=======


      case 'refund':
        // Check if transaction can be refunded
        if (transaction && transaction.status !== "completed" && transaction && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")
        }
        // Process refund via Stripe
        if (transaction && transaction.stripe_session_id) {
          // Retrieve payment intent from session


          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),
          


          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()
=======
          const session = await stripe && stripe.checkout.sessions && sessions.retrieve(transaction && transaction.stripe_session_id);
          
          if (session && session.payment_intent) {
            const refund = await stripe && stripe.refunds.create({
              payment_intent: session && session.payment_intent.toString(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              reason: "requested_by_customer"


>>>>>>> main
            }),
            
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString(),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                refund_id: refund.id
              })
              .eq("id", transactionId)
          }
        }
<<<<<<< HEAD
        result = { message: "Refund processed successfully" }
        break;
=======
=======


                refund_id: refund.id
=======
                refunded_at: new Date().toISOString(),
                refund_id: refund && refund.id
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              })
              .eq("id", transactionId)
=======
        // Update transaction status;
        await supabase_admin;
          .from ("transactions");
          .update ({
            status: "completed";
            in_escrow: false,
            completed_at: new Date ().toISOString ();
          });
          .eq ("id", transaction_id);
;
        result = { message: "Funds released from escrow" }
        break;
;
      case 'refund':;
        // Check if transaction can be refunded;
        // Check condition
if ( {) {
  $2
}
          throw new Error ("This transaction cannot be refunded");
        }
        // Process refund via Stripe;
        // Check condition
if ( {) {
  $2
}
          // Retrieve payment intent from session;
          const session = await stripe.checkout.sessions.retrieve (transaction.stripe_session_id);
;
          // Check condition
if ( {) {
  $2
}
            const refund = await stripe.refunds.create ({
              payment_intent: session.payment_intent.to_string (),
              reason: "requested_by_customer";
            });
;
            // Update transaction status;
            await supabase_admin;
              .from ("transactions");
              .update ({
                status: "refunded";
                refunded_at: new Date ().toISOString (),
                refund_id: refund.id;
              });
              .eq ("id", transaction_id);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          }
        }


>>>>>>> main
        
        result = { message: "Refund processed successfully" },
        break,
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction.status !== "pending") {
=======


      case 'cancel':
        // Only allow cancellation for pending transactions
        if (transaction && transaction.status !== "pending") {
>>>>>>> main
          throw new Error("Only pending transactions can be cancelled")
        }
        // Update transaction status
        await supabaseAdmin
          .from("transactions")
          .update({
            status: "cancelled"
            cancelled_at: new Date().toISOString()
          })
<<<<<<< HEAD
<<<<<<< HEAD
          .eq("id", transactionId);
        result = { message: "Transaction cancelled successfully" }
        break;
=======
=======


>>>>>>> main
          .eq("id", transactionId),
        
        result = { message: "Transaction cancelled successfully" },
        break,
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
      headers: { ...corsHeaders, "Content-Type": "application/json" },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" }
=======

      default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {

      headers: { ...corsHeaders, "Content-Type": "application/json" },


      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {


    return new Response(JSON && JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Transaction management error:", error && error.message);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };

>>>>>>> main
      status: 500})
  }
});

=======
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import Stripe from "https://esm.sh/stripe@14.21.0",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  const supabaseClient = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_ANON_KEY") ?? "";
  ),;
  // Create service client for admin operations;
  const supabaseAdmin = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
    { auth: { persistSession: false } }
  ),;
  try {;
    // Authenticate the user;
    const authHeader = req.headers.get("Authorization")!,;
    const token = authHeader.replace("Bearer ", ""),;
    const { data: { user } } = await supabaseClient.auth.getUser(token),;
    if (!user?.id) throw new Error("User not authenticated"),;
    // Get request data;
    const {;
      transactionId,;
      action, // 'releaserefundcancel';
    } = await req.json(),;
    if (!transactionId) {;
      throw new Error("Transaction ID is required");
    }
;
    // Get transaction details;
    const { data: transaction, error: fetchError } = await supabaseAdmin;
      .from("transactions");
      .select("*");
      .eq("id", transactionId);
      .single(),;
    if (fetchError || !transaction) {;
      throw new Error("Transaction not found");
    }
;
    // Verify user is authorized to manage this transaction;
    const isClient = transaction.user_id === user.id,;
    const isProvider = transaction.provider_id === user.id,;
    // Clients can cancel or request refunds, providers can only release funds;
    if (!isClient && !isProvider) {;
      throw new Error("You are not authorized to manage this transaction");
    }
;
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {;
      apiVersion: "2023-10-16"}),;
    let result,;
    switch (action) {;
      case 'release':;
        // Only providers or admins can release escrow funds;
        if (!isProvider) {;
          throw new Error("Only service providers can release funds from escrow");
        }
;
        // Update transaction status;
        await supabaseAdmin;
          .from("transactions");
          .update({;
            status: "completed",;
            in_escrow: false,;
            completed_at: new Date().toISOString();
          });
          .eq("id", transactionId),;
        result = { message: "Funds released from escrow" },;
        break,;
      case 'refund':;
        // Check if transaction can be refunded;
        if (transaction.status !== "completed" && transaction.status !== "pending") {;
          throw new Error("This transaction cannot be refunded");
        }
;
        // Process refund via Stripe;
        if (transaction.stripe_session_id) {;
          // Retrieve payment intent from session;
          const session = await stripe.checkout.sessions.retrieve(transaction.stripe_session_id),;
          if (session.payment_intent) {;
            const refund = await stripe.refunds.create({;
              payment_intent: session.payment_intent.toString(),;
              reason: "requested_by_customer";
            }),;
            // Update transaction status;
            await supabaseAdmin;
              .from("transactions");
              .update({;
                status: "refunded",;
                refunded_at: new Date().toISOString(),;
                refund_id: refund.id;
              });
              .eq("id", transactionId);
          }
        }
;
        result = { message: "Refund processed successfully" },;
        break,;
      case 'cancel':;
        // Only allow cancellation for pending transactions;
        if (transaction.status !== "pending") {;
          throw new Error("Only pending transactions can be cancelled");
        }
;
        // Update transaction status;
        await supabaseAdmin;
          .from("transactions");
          .update({;
            status: "cancelled",;
            cancelled_at: new Date().toISOString();
          });
          .eq("id", transactionId),;
        result = { message: "Transaction cancelled successfully" },;
        break,;
      default: throw new Error("Invalid action");
    }
;
    return new Response(JSON.stringify(result), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    console.error("Transaction management error:", error.message),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 500});
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
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
=======

      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
