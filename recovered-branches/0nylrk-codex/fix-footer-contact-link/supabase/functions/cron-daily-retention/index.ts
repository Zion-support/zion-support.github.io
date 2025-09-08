      

    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {

    const result = await response && response.json();

    return new Response(JSON && JSON.stringify({
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,


    return new Response (JSON.stringify ({
      success: true;
      message: "Daily retention process executed"


        "Content-Type": "application/json",



      success: false

      error: error.message}), {
      status: 500
    console && console.error("Error in cron-daily-retention:", error);
    return new Response(JSON && JSON.stringify({


      result}), {
      status: 200
      headers: { "Content-Type": "application/json" }})
  } catch (error) {
    console.error("Error in cron-daily-retention:", error);
    console.error("Error in cron-daily-retention:", error),

    return new Response(JSON.stringify({
      success: false
      error: error.message}), {
      status: 500
      headers: { "Content-Type": "application/json" }})
  }
});


      status: 500,;
      headers: { "Content-Type": "application/json" }});


  }
});
;


