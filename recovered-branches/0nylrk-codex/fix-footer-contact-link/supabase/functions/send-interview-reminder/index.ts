
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;

import {Resend} from "npm: resend@2.0.0";


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
"
const resend = new Resend(Deno && Deno.env.get("RESEND_API_KEY"));"
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";"
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";


<<<<<<< HEAD

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Use service role key for admin privileges
<<<<<<< HEAD


    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);


=======
    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const { data: interviews, error } = await supabase

      .from('interviews')
      .select(`
        *;

<<<<<<< HEAD
        clients: client_id(*)
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Use service role key for admin privileges;
    const supabase = create_client (supabase_url, supabaseServiceKey);
;
    // Get upcoming interviews in the next hour;
    const now = new Date ();
    const thirtyMinutesFromNow = new Date (now.get_time () + 30 * 60000);
;

    console.log (`Found ${interviews?.length || 0} interviews to send reminders for`);
;
    const results = [];
;

}

    const supabase = createClient(supabaseUrl, supabaseServiceKey),

    // Get upcoming interviews in the next hour
    const now = new Date(),
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000),
    const { data: interviews, error } = await supabase
      .from('interviews')

      .select(`
        *,
        clients:client_id(*),
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString())
<<<<<<< HEAD



=======
      .is('reminder_sent', null);
    if (error) throw error;
    console.log(`Found ${interviews?.length |0} interviews to send reminders for`);
    const results = [];
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
        const clientEmail = interview.clients?.email;
        const talentName = interview.talents?.display_name |interview.talents?.full_name |"Talent";
        const interviewDate = new Date(interview.scheduled_date);
        if (clientEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>";
              to: [clientEmail]
              subject: `Your interview with ${talentName} is starting soon!`;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      .is('reminder_sent', null),
    
    if (error) throw error,

<<<<<<< HEAD
    
    // // // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`),
    
    const results = [],
    
    if (interviews && interviews.length > 0) {

=======
    `

          try {
            await resend.emails.send ({

              from: "Zion Marketplace <onboarding@resend.dev>";


>>>>>>> origin/cursor/delete-old-data-records-6bba
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [clientEmail],
              subject: `Your interview with ${talentName} is starting soon!`;
              html: `
<<<<<<< HEAD

                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>


=======


`
>>>>>>> origin/cursor/delete-old-data-records-6bba
              `}),

`
            results.push(`Reminder sent to client: ${clientEmail}`)
            
<<<<<<< HEAD

              `});
            results && results.push(`Reminder sent to client: ${clientEmail}`)

=======

`
            results && results.push(`Reminder sent to client: ${clientEmail}`)

>>>>>>> origin/cursor/delete-old-data-records-6bba
          } catch (emailError) {
            console && console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        // Send email to talent
              to: [client_email],
              subject: `Your interview with ${talent_name} is starting soon!`;

              html: `;
                <h1 > Interview Reminder</h1>;
                <p > Your scheduled interview with ${talent_name} is starting in 30 minutes.</p>;
                <p><strong > Time:</strong> ${interview_date.toLocaleTimeString ()}</p>;

            console.error (`Error sending reminder to client ${client_email}:`, email_error);
          }
        }
        // Send email to talent;

<<<<<<< HEAD

        const talentEmail = interview.talents?.email,
        const clientName = interview.clients?.display_name || "Client",

        
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";
        const talentEmail = interview && interview.talents?.email;
        const clientName = interview && interview.clients?.display_name || "Client";
        if (talentEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [talentEmail],
              subject: `Your interview with ${clientName} is starting soon!`;

=======

        if (talentEmail) {

>>>>>>> origin/cursor/delete-old-data-records-6bba
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>

<<<<<<< HEAD
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
            
            results && results.push(`Reminder sent to talent: ${talentEmail}`)

              `});
            results && results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
            console && console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }
        }
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })

<<<<<<< HEAD

      }
    }
    return new Response(JSON.stringify({ success: true, results }), {

    const { data: interviews, error } = await supabase;'
      .from('interviews');`
      .select(`;
        *,;
        clients:client_id(*),;
        talents:talent_id(*);`
      `);'
      .eq('statusconfirmed');'

      .gte('scheduled_date', now.toISOString());'
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString());'
      .is('reminder_sent', null),;
    if (error) throw error,;`
=======
    const { data: interviews, error } = await supabase;
      .from('interviews');
      .select(`;
        *,;
        clients:client_id(*),;
        talents:talent_id(*);
      `);
      .eq('statusconfirmed');
      .gte('scheduled_date', now.toISOString());
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString());
      .is('reminder_sent', null),;
    if (error) throw error,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // // // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`),;
    const results = [],;
    if (interviews && interviews.length > 0) {;
      for (const interview of interviews) {;
        // Send email to client;
        const clientEmail = interview.clients?.email,;"
        const talentName = interview.talents?.display_name || interview.talents?.full_name || "Talent",;
        const interviewDate = new Date(interview.scheduled_date),;
        if (clientEmail) {;
          try {;
            await resend.emails.send({;"
              from: "Zion Marketplace <onboarding@resend.dev>",;
              to: [clientEmail],;`
              subject: `Your interview with ${talentName} is starting soon!`,;`
              html: `;
                <h1>Interview Reminder</h1>;
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>;
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>;
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>;'"`
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>;`
              `}),;`
            results.push(`Reminder sent to client: ${clientEmail}`);
          } catch (emailError) {;`
            console.error(`Error sending reminder to client ${clientEmail}:`, emailError);
          }
        }
;
        // Send email to talent;
        const talentEmail = interview.talents?.email,;"
        const clientName = interview.clients?.display_name || "Client",;
        if (talentEmail) {;
          try {;
            await resend.emails.send({;"
              from: "Zion Marketplace <onboarding@resend.dev>",;
              to: [talentEmail],;`
              subject: `Your interview with ${clientName} is starting soon!`,;`
              html: `;
                <h1>Interview Reminder</h1>;
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>;
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>;
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>;'"`
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>;`
              `}),;`
            results.push(`Reminder sent to talent: ${talentEmail}`);
          } catch (emailError) {;`
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError);
          }
        }
;
        // Mark the interview as reminder sent;
        await supabase;'
          .from('interviews');

      }

    }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      status: 200})
  } catch (error) {"
    console.error("Error in send-interview-reminder function:", error);

<<<<<<< HEAD
    return new Response(JSON.stringify({ error: error.message }), {
      status: 200})
  } catch (error) {
=======
          .eq('id', interview && interview.id)
      }
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba

              html: `;
                <h1 > Interview Reminder</h1>;
                <p > Your scheduled interview with ${client_name} is starting in 30 minutes.</p>;
                <p><strong > Time:</strong> ${interview_date.toLocaleTimeString ()}</p>;
                <p><strong > Duration:</strong> ${interview.duration_minutes} minutes</p>;'"`
                ${interview.meeting_link ? `<p><strong > Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p > Please be ready on time!</p>;`
              `});
;`
            results.push (`Reminder sent to talent: ${talent_email}`);
          } catch (email_error) {}`
            console.error (`Error sending reminder to talent ${talent_email}:`, email_error);
          }
        }
        // Mark the interview as reminder sent;
        await supabase;'
          .from ('interviews');
          .update ({ reminder_sent: new Date ().toISOString () });'
          .eq ('id', interview.id);
      }
    }
    return new Response (JSON.stringify ({ success: true, results }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {"
    console.error ("Error in send - interview - reminder function:", error);
    return new Response (JSON.stringify ({ error: error.message }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});
<<<<<<< HEAD


      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})

  }
});
;



=======

  }
});

    return new Response(JSON.stringify({ error:error.message }), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:500}),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  //Use service role key for admin privileges const supabase = createClient (supabaseUrl, supabaseServiceKey);
//Get upcoming interviews in the next hour const now = new Date ();
const thirtyMinutesFromNow = new Date (now.getTime () + 30 * 60000);
data: interviews, error 
}= await supabase .from ('interviews') .select (`*;
clients: client id (*);
talents:talent id (*) `) .eq ('statusconfirmed') .gte ('scheduled date', now.toISOString () ) .lt ('scheduled date', thirtyMinutesFromNow.toISOString () ) .is ('reminder sent', null);
if (error) throw error;
const results = [];
if (interviews && interviews.length > 0) {
  for (const interview of interviews) {
  //Send email to client try {
  await resend.emails.send ({


  <p>Please be ready on time!</p> ` 
});
try {
  await resend.emails.send ({
  <p>Please be ready on time!</p> ` 
});
}//Mark the interview as reminder sent await supabase .from ('interviews') status: 500 
});
}
});
  }
});
  }

});
>>>>>>> origin/cursor/delete-old-data-records-6bba
