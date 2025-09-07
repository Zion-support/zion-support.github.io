<<<<<<< HEAD
<<<<<<< HEAD
import type { UserDetails } from "@/types/auth";"
import { supabase } from "@/integrations/supabase/client","
import type { UserDetails } from "@/types/auth",import {supabase} from "@/integrations/supabase/client";"
import type { UserDetails } from "@/types/auth","
=======
import type { UserDetails } from "@/types/auth";
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {supabase} from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";

<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
import type { UserDetails } from "@/types/auth";

import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",

>>>>>>> origin/chore/fix-lint-and-merge
=======
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",



<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**
 * Utility function to clean up authentication state";
 * This helps prevent auth state inconsistencies and "limbo" states;
 */

<<<<<<< HEAD
=======
export const cleanupAuthState = () => {

<<<<<<< HEAD
  // Remove standard auth tokens


  // Remove standard auth tokens;
  localStorage.removeItem('supabase.auth.token');
  // Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token');
  localStorage.removeItem('supabase.auth.token'),
  
=======

  // Remove standard auth tokens


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      localStorage.removeItem(key)
<<<<<<< HEAD
  localStorage && localStorage.removeItem('supabase && supabase.auth.token');
  
    }
  });
  // Remove from sessionStorage if in use
  Object && Object.keys(sessionStorage || {}).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      sessionStorage && sessionStorage.removeItem(key)
    }
  });
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage |{}).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      sessionStorage.removeItem(key)
    }
  })
}
=======

    }

  Object && Object.keys(sessionStorage || {}).forEach((key) => {'
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {}
      sessionStorage && sessionStorage.removeItem(key)

    }
  })
}
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";"
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { supabase } from "@/integrations/supabase/client",;

import type { UserDetails } from "@/types/auth",;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  })
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**
 * Utility function to check new user registration and schedule welcome emails;
 */
<<<<<<< HEAD
=======
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")
<<<<<<< HEAD
      .eq("campaign_type", "welcome_series")


      .eq("user_id", user.id)
      .eq("campaign_type", "welcome_series");
      .maybeSingle();
      .eq("campaign_type", "welcome_series")
      .maybeSingle();
      .maybeSingle(),
      
=======

      .eq("user_id", user.id)

      .eq("campaign_type", "welcome_series")

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
<<<<<<< HEAD
=======
<<<<<<< HEAD
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"

            user_id: user && user.id;
            email_type: "welcome_series";
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"
          }
        });

          job_type: "send_retention_email",
          scheduled_for: new Date().toISOString(),
          status: "pending",
          payload: {
            user_id: user.id;
            email_type: "welcome_series";
            user_type: user.userType |"unknown"
            display_name: user.displayName |user.email?.split("@")[0] |"User"
          }
        });
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
            user_id: user.id,"
            email_type: "welcome_series","
            user_type: user.userType || "unknown","
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),

      // Create entry in email_campaigns table

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
        
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({
<<<<<<< HEAD
          user_id: user && user.id;
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
=======

            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          user_id: user.id,
          campaign_type: "welcome_series",
          template_name: "welcome_email",
          template_data: {

<<<<<<< HEAD
            user_id: user.id;
            email_type: "welcome_series";
            user_type: user.userType |"unknown"
            display_name: user.displayName |user.email?.split("@")[0] |"User"
          }
        })
    }
  } catch (error) {
    console.error("Error checking or scheduling welcome email:", error)
  }
}

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
          }
        });
    }
  } catch (error) {


  }
}

    console.error ("Error checking or scheduling welcome email:", error);

import { supabase } from "@/integrations/supabase/client",;
import type { UserDetails } from "@/types/auth",;
;
/**;
 * Utility function to clean up authentication state;
 * This helps prevent auth state inconsistencies and "limbo" states;
 */;
export const cleanupAuthState = () => {;
  // Remove standard auth tokens;
  localStorage.removeItem('supabase.auth.token'),;
  ;
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {;
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      localStorage.removeItem(key),;
    }
  }),;
  ;
  // Remove from sessionStorage if in use;
  Object.keys(sessionStorage || {}).forEach((key) => {;
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      sessionStorage.removeItem(key),;
    }
  }),;
},;
;
/**;
 * Utility function to check new user registration and schedule welcome emails;
 */;
export const checkNewRegistration = async (user:UserDetails) => {;
  try {;
    // Check if user has received welcome email already;
    const { data:existingCampaign } = await supabase;
      .from("email_campaigns");
      .select("id");
      .eq("user_id", user.id);
      .eq("campaign_type", "welcome_series");
      .maybeSingle(),;
      ;
    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {;
      // Create a scheduled job for the welcome email;
      await supabase;
        .from("scheduled_jobs");
        .insert({;
          job_type:"send_retention_email",;
          scheduled_for:new Date().toISOString(),;
          status:"pending",;
          payload:{;
            user_id:user.id,;
            email_type:"welcome_series",;
            user_type:user.userType || "unknown",;
            display_name:user.displayName || user.email?.split("@")[0] || "User";
          }
        }),;
        ;
          }
        }),;
      // Create entry in email_campaigns table;
      await supabase;
        .from("email_campaigns");
        .insert({;
};
          user_id: user.id,;
          campaign_type: "welcome_series",;
          template_name: "welcome_email",;
          template_data: {;
            user_id: user.id,;
            email_type: "welcome_series",;
            user_type: user.userType || "unknown";
            display_name: user.displayName || user.email?.split("@")[0] || "User";
=======

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

          }
        });
    }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }
        });
    }
  } catch (error) {
<<<<<<< HEAD
    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);
  }
};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      localStorage.removeItem(key),;
    }
  }),;
  ;
  // Remove from sessionStorage if in use;

    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      sessionStorage.removeItem(key),;
    }
  }),;
},;
;
/**;
 * Utility function to check new user registration and schedule welcome emails;
 */;
export const checkNewRegistration = async (user:UserDetails) => {;
  try {;
    // Check if user has received welcome email already;

      .eq("campaign_type", "welcome_series");
      .maybeSingle(),;
      ;
    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {;
      // Create a scheduled job for the welcome email;

            display_name:user.displayName || user.email?.split("@")[0] || "User";
          }
        }),;
        ;
          }
        }),;
      // Create entry in email_campaigns table;

            display_name: user.displayName || user.email?.split("@")[0] || "User";
          }
        });
    }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
