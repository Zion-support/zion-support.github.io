

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseClient = createClient(

    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""

  // Create service client for admin operations
  const supabaseAdmin = createClient(
    Deno && Deno.env.get("SUPABASE_URL") ?? "";
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persistSession: false } }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Get request data
    const {
      transactionId
      action, // 'releaserefundcancel'

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (!transactionId) {
      throw new Error("Transaction ID is required")
    }
    // Get transaction details
    const { data: transaction, error: fetchError } = await supabaseAdmin
      .from("transactions")
      .select("*")
      .eq("id", transactionId)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Clients can cancel or request refunds, providers can only release funds
    if (!isClient && !isProvider) {
      throw new Error("You are not authorized to manage this transaction")
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    switch (action) {
      case 'release':;
        // Only providers or admins can release escrow funds;
        // Check condition
if ( {) {
  $2
}
          throw new Error ("Only service providers can release funds from escrow");
        }
        // Update transaction status
        await supabaseAdmin
          .from("transactions")

      case 'refund':
        // Check if transaction can be refunded
        if (transaction && transaction.status !== "completed" && transaction && transaction.status !== "pending") {
          throw new Error("This transaction cannot be refunded")
        }
        // Process refund via Stripe
        if (transaction && transaction.stripe_session_id) {
          // Retrieve payment intent from session

          if (session.payment_intent) {
            const refund = await stripe.refunds.create({
              payment_intent: session.payment_intent.toString()
              reason: "requested_by_customer"

              reason: "requested_by_customer"


            }),
            
            // Update transaction status
            await supabaseAdmin
              .from("transactions")
              .update({ 
                status: "refunded",
                refunded_at: new Date().toISOString(),


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======

        
        result = { message: "Refund processed successfully" },
        break,
        


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

      default: throw new Error("Invalid action")
    }
    return new Response(JSON.stringify(result), {

      status: 200})
  } catch (error) {
    console.error("Transaction management error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
<<<<<<< HEAD

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

  }
});
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
