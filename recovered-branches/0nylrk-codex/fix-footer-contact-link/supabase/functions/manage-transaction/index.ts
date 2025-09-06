 
}const supabaseClient = createClient (Deno.env.get ("SUPABASE URL") ?? "";
Deno.env.get ("SUPABASE ANON KEY") ?? "");
User not authenticated");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Get request data 
}//Get transaction details const {
  data: transaction, error: fetchError 
}= await supabaseAdmin .from ("transactions") .select ("*") .eq ("id", transactionId) .single ();
if (fetchError || !transaction) {
  throw new Error ("Transaction not found") switch (action) {
  case 'release': //Only providers or admins can release escrow funds if (!isProvider) {
  
}//Update transaction status await supabaseAdmin .from ("transactions") .update ({
  status: "completed";
in escrow: false;
completed at: new Date () .toISOString () 
}) 
}//Process refund via Stripe if (transaction.stripe session id) {
  //Retrieve payment intent from session const session = await stripe.checkout.sessions.retrieve (transaction.stripe session id);
if (session.payment intent) {
  const refund = await stripe.refunds.create ({
  payment intent: session.payment intent.toString ();
//Update transaction status await supabaseAdmin .from ("transactions") .update ({
  status: "refunded";
refunded at: new Date () .toISOString ();
refund id: refund.id 
}) 
}//Update transaction status await supabaseAdmin .from ("transactions") .update ({
  status: "cancelled";
cancelled at: new Date () .toISOString () 
}) default: throw new Error ("Invalid action") 
}status: 500 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
