serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Use service role key for admin privileges
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *;
        clients: client_id(*)
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now && now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow && thirtyMinutesFromNow.toISOString())
      .is('reminder_sent', null);
    if (error) throw error;
    const results = [];
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";
              subject: `Your interview with ${talentName} is starting soon!`;
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
              `});
          } catch (emailError) {
            console && console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        // Send email to talent
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";
              subject: `Your interview with ${clientName} is starting soon!`;
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
              `});
          } catch (emailError) {
            console && console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
          }
        }
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })
          .eq('id', interview && interview.id)
      }
    }
      status: 500})
  }
});

=======
              to: [talent_email],
              subject: `Your interview with ${client_name} is starting soon!`;
              html: `;
                <h1 > Interview Reminder</h1>;
                <p > Your scheduled interview with ${client_name} is starting in 30 minutes.</p>;
                <p><strong > Time:</strong> ${interview_date.toLocaleTimeString ()}</p>;
                <p><strong > Duration:</strong> ${interview.duration_minutes} minutes</p>;
                ${interview.meeting_link ? `<p><strong > Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p > Please be ready on time!</p>;
              `});
;
            results.push (`Reminder sent to talent: ${talent_email}`);
          } catch (email_error) {
            console.error (`Error sending reminder to talent ${talent_email}:`, email_error);
          }
        }
        // Mark the interview as reminder sent;
        await supabase;
          .from ('interviews');
          .update ({ reminder_sent: new Date ().toISOString () });
          .eq ('id', interview.id);
      }
    }
    return new Response (JSON.stringify ({ success: true, results }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {
    console.error ("Error in send - interview - reminder function:", error);
    return new Response (JSON.stringify ({ error: error.message }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
