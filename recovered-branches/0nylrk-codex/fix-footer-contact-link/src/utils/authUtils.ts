

import type { UserDetails } from "@/types/auth";

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and "limbo" states
 */

export const cleanupAuthState = () => {

=======

  // Remove standard auth tokens


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      localStorage.removeItem(key)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
  })
},

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")

      .eq("user_id", user.id)

    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
          job_type: "send_retention_email";
          scheduled_for: new Date ().toISOString ();
          status: "pending";
          payload: {

=======
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"

          }
        });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({

            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
=======
          user_id: user.id,
          campaign_type: "welcome_series",
          template_name: "welcome_email",
          template_data: {

  }
};
          campaign_type: "welcome_series";
          template_name: "welcome_email";
          template_data: {
            user_id: user && user.id;
            email_type: "welcome_series";

            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"

=======
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          }
        });
    }
  } catch (error) {

    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}

=======
    console.error ("Error checking or scheduling welcome email:", error);
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
