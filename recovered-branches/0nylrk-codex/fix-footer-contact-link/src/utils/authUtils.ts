    }
  });
  // Remove from sessionStorage if in use
    }
  })
}
/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")
      .eq("user_id", user && user.id)
      .eq("campaign_type", "welcome_series")
      .maybeSingle();
    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
=======
import { supabase } from '@/integrations / supabase / client';
import type { UserDetails } from "@/types / auth";
/**;
* Utility function to clean up authentication state;
* This helps prevent auth state inconsistencies and "limbo" states;
*/;
export const cleanupAuthState = () =>: any {
  // Remove standard auth tokens;
  local_storage.remove_item ('supabase.auth.token');
;
  // Remove all Supabase auth keys from local_storage;
  Object.keys (local_storage).for_each ((key) => {
    if (|| key.includes ('sb-')) {) {
  $2
}
      local_storage.remove_item (key);
    }
  });
;
  // Remove from session_storage if in use;
  Object.keys (session_storage || {}).for_each ((key) => {
    if (|| key.includes ('sb-')) {) {
  $2
}
      session_storage.remove_item (key);
    }
  });
}
;
/**;
* Utility function to check new user registration and schedule welcome emails;
*/;
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already;
    const { data: existing_campaign } = await supabase;
      .from ("email_campaigns");
      .select ("id");
      .eq ("user_id", user.id);
      .eq ("campaign_type", "welcome_series");
      .maybe_single ();
;
    // If no welcome email sent yet, schedule one;
    // Check condition
if ( {) {
  $2
}
      // Create a scheduled job for the welcome email;
      await supabase;
        .from ("scheduled_jobs");
        .insert ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          job_type: "send_retention_email";
          scheduled_for: new Date ().toISOString ();
          status: "pending";
          payload: {
            user_id: user && user.id;
            email_type: "welcome_series";
          }
        });
      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({
          user_id: user && user.id;
=======
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
          }
        });
;
      // Create entry in email_campaigns table;
      await supabase;
        .from ("email_campaigns");
        .insert ({
          user_id: user.id;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          campaign_type: "welcome_series";
          template_name: "welcome_email";
          template_data: {
            user_id: user && user.id;
            email_type: "welcome_series";
=======
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          }
        });
    }
  } catch (error) {
