
<<<<<<< HEAD
=======
import type { UserDetails } from "@/types/auth";"
import { supabase } from "@/integrations/supabase/client","
import type { UserDetails } from "@/types/auth",import {supabase} from "@/integrations/supabase/client";"
import type { UserDetails } from "@/types/auth","
import type { UserDetails } from "@/types/auth";

>>>>>>> origin/cursor/delete-old-data-records-6bba

import {supabase} from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";


<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
/**
 * Utility function to clean up authentication state";
 * This helps prevent auth state inconsistencies and "limbo" states;
 */

<<<<<<< HEAD

export const cleanupAuthState = () => {


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      localStorage.removeItem(key)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }

  Object && Object.keys(sessionStorage || {}).forEach((key) => {'
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {}
      sessionStorage && sessionStorage.removeItem(key)

    }
  })
}
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client",;

import type { UserDetails } from "@/types/auth",;

=======
import { supabase } from "@/integrations/supabase/client";"
import { supabase } from "@/integrations/supabase/client",;

import type { UserDetails } from "@/types/auth",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
/**;
 * Utility function to clean up authentication state;"
 * This helps prevent auth state inconsistencies and "limbo" states;
 */;
export const cleanupAuthState = () => {;
  // Remove standard auth tokens;'
  localStorage.removeItem('supabase.auth.token'),;
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {;'
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      localStorage.removeItem(key);
    }
  }),;
  // Remove from sessionStorage if in use;
  Object.keys(sessionStorage || {}).forEach((key) => {;'
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  })
},


<<<<<<< HEAD



/**
 * Utility function to check new user registration and schedule welcome emails;
 */

export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")
=======
/**
 * Utility function to check new user registration and schedule welcome emails;
 */
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Check if user has received welcome email already;
    const { data: existingCampaign } = await supabase"
      .from("email_campaigns")"
      .select("id")

    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {}
      // Create a scheduled job for the welcome email;

          job_type: "send_retention_email";
          scheduled_for: new Date ().toISOString ();"
          status: "pending";

          }
        });

<<<<<<< HEAD
=======

            user_id: user.id,"
            email_type: "welcome_series","
            user_type: user.userType || "unknown","
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
        





      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({


          user_id: user.id,
          campaign_type: "welcome_series",
          template_name: "welcome_email",
          template_data: {



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
            user_id: user.id,

            email_type: "welcome_series",
            user_type: user.userType || "unknown",

            display_name: user.displayName || user.email?.split("@")[0] || "User"
  });
},;
/**;
 * Utility function to check new user registration and schedule welcome emails;
 */;
export const checkNewRegistration = async (user: UserDetails) => {;
  try {;
    // Check if user has received welcome email already;
    const { data: existingCampaign } = await supabase;"
      .from("email_campaigns");"
      .select("id");"
      .eq("user_id", user.id);"
      .eq("campaign_type", "welcome_series");
      .maybeSingle(),;
    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {;
      // Create a scheduled job for the welcome email;
      await supabase;"
        .from("scheduled_jobs");
        .insert({;"
          job_type: "send_retention_email",;
          scheduled_for: new Date().toISOString(),;"
          status: "pending",;
          payload: {;

            display_name: user.displayName || user.email?.split("@")[0] || "User";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }
        });
;
      // Create entry in email_campaigns table;

          campaign_type: "welcome_series";

          template_name: "welcome_email";
          template_data: {}
            user_id: user && user.id;"
            email_type: "welcome_series";"
            user_type: user.user_type || "unknown","
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

          }
        });
    }
<<<<<<< HEAD
  } catch (error) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);

  }
}

"
    console.error ("Error checking or scheduling welcome email:", error);
"
import { supabase } from "@/integrations/supabase/client",;"
import type { UserDetails } from "@/types/auth",;
;
<<<<<<< HEAD
=======

/**;
 * Utility function to clean up authentication state;"
 * This helps prevent auth state inconsistencies and "limbo" states;
 */;
export const cleanupAuthState = () => {;
  // Remove standard auth tokens;'
  localStorage.removeItem('supabase.auth.token'),;
  ;
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {;'
>>>>>>> origin/cursor/delete-old-data-records-6bba





<<<<<<< HEAD
=======
            display_name: user.displayName || user.email?.split("@")[0] || "User";
          }
        });

    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
