 try {
  //Authenticate the request - should be called by a cron job or authorized system only if (cronSecret !== Deno.env.get ("CRON SECRET") ) {
  return new Response (JSON.stringify ({
  error: "Unauthorized" 
}), {
  status: 401;
}
}// Call the process-retention-emails function const result = await response.json ();
return new Response (JSON.stringify ({
  success: true;
message: "Daily retention process executed";
result 
}), {
  status: 200;
return new Response (JSON.stringify ({
  success: false;
error: error.message 
}) {
  status: 500;
}
});
