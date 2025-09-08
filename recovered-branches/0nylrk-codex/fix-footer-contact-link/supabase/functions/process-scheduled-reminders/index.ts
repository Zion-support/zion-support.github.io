


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":


    "authorization, x-client-info, apikey, content-type"},






    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");






    



    // Process pending reminder jobs

    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "onboarding_reminder")


    const processedJobs = [],




            body: JSON && JSON.stringify(job && job.payload)}
        );
        if (reminderResponse && reminderResponse.ok) {

          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,







  } catch (error) {

        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )




serve (async (req: Request) => {





