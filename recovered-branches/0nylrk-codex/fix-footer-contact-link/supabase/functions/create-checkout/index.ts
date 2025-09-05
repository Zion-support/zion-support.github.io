 
}const supabaseClient = createClient (Deno.env.get ("SUPABASE URL") ?? "";
Deno.env.get ("SUPABASE ANON KEY") ?? "");
//Check if customer exists const customers = await stripe.customers.list ({
  email: user.email, limit: 1 
});
let customerId;
if (customers.data.length > 0) {
  customerId = customers.data[0].id 
}//Determine product name and description based on the request ? "Service Payment": "Premium Subscription";
const productDescription = escrow ? "Payment held in escrow until service completion": "Direct payment for services";
customer: customerId, customer email: customerId ? undefined : user.email, line items: [ {
  price data: {
  currency: currency, product data: {
  name: productName, description: productDescription 
};
unit amount: amount * 100, //Convert to cents status: 500 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
