 // If running in the browser, bail out early when offline if (typeof navigator !== 'undefined' && !navigator.onLine) {
  // Build the query parameters const params = externalSubdomain ? `?subdomain=$ {
  encodeURIComponent (externalSubdomain) 
}` const {
  data, error: functionError 
}= await supabase.functions.invoke (`$ {
  functionName 
}$ {
  params 
}`;
{
  headers: {
  'Content-Type': 'application/json' 
}
});
if (message.includes ('Failed to send a request to the Edge Function') || message.includes ('Failed to connect to Supabase') || message.includes ('No internet connection') ) {
  loadTenant () 
}, [externalSubdomain]);
useEffect ( () => {
  const checkAdminStatus = async () => {
  if (!tenantId) {
  .from ('tenant administrators') .select ('*') .eq ('tenant id', tenantId) .eq ('user id', userId) .single ();
checkAdminStatus () 
}, [tenantId]);
}