 interface EmailRequest {
  user id: string;
notification id: string 
}serve (async (req) => {
  //Handle CORS preflight requests 
}try {
  const {
  user id, notification id 
}= await req.json () as EmailRequest;
//Create Supabase client with the service role key const supabaseClient = createClient (Deno.env.get ("SUPABASE URL") ?? "";
Deno.env.get ("SUPABASE SERVICE ROLE KEY") ?? "");
data: notification, error: notificationError 
}= await supabaseClient .from ('notifications') .select ('title, message, type') .eq ('id', notification id) .single ();
const {
  data: userProfile, error: userError 
}= await supabaseClient .from ('profiles') .select ('display name, email') .eq ('id', user id) .single ();
return new Response (JSON.stringify ({
  success: true 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
}) return new Response (JSON.stringify ({
  error: error.message 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
}) 
}
});
