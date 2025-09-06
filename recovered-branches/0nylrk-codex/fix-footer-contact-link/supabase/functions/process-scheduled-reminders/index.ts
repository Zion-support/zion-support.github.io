 serve (async (req: Request) => {
  //Handle CORS if (req.method === "OPTIONS") {
  return new Response (null, {
  status: 204;
headers: corsHeaders 
}) 
}try {
  const supabase = createClient (supabaseUrl;
supabaseServiceKey);
//Run the database function to create scheduled reminders return new Response (JSON.stringify ({
  error: "Failed to create scheduled reminders", details: error 
});
{
  status: 500;
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}//Process pending reminder jobs .from ("scheduled jobs") .select ("id, payload") .eq ("job type", "onboarding reminder") .eq ("status", "pending") .lt ("scheduled for", new Date () .toISOString () );
return new Response (JSON.stringify ({
  error: "Failed to fetch pending jobs", details: jobsError 
});
{
  status: 500;
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}if (pendingJobs && pendingJobs.length > 0) {
  for (const job of pendingJobs) {
  //Call the send-onboarding-reminder function for each job 
}else {
  processedJobs.push (job.id) 
}
}else {
  //Update job status to failed scheduled jobs") .update ({
  
}
}
}return new Response (
}catch (error) {
  console.error (error);
return new Response (JSON.stringify ({
  error: " Internal server error", details: error.message 
});
{
  status: 500;
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
