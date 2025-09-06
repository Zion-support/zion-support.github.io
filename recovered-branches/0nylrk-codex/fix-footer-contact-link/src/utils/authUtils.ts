<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts


<<<<<<< HEAD
=======
import {supabase} from "@/integrations/supabase/client";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { UserDetails } from "@/types/auth";

import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
=======
import {supabase} from "@/integrations/supabase/client";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { UserDetails } from "@/types/auth";
=======
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and "limbo" states
 */

export const cleanupAuthState = () => {
<<<<<<< HEAD

<<<<<<< HEAD
=======

  // Remove standard auth tokens


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  // Remove standard auth tokens;
  localStorage.removeItem('supabase.auth.token');
=======
  // Remove standard auth tokens
<<<<<<< HEAD
  localStorage.removeItem('supabase.auth.token');
=======
  localStorage.removeItem('supabase.auth.token'),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      localStorage.removeItem(key)
<<<<<<< HEAD

<<<<<<< HEAD
=======
  localStorage && localStorage.removeItem('supabase && supabase.auth.token');
  
========
<<<<<<< HEAD
localStorage && localStorage.removeItem('supabase && supabase.auth.token');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
  // Remove all Supabase auth keys from localStorage
  Object && Object.keys(localStorage).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      localStorage && localStorage.removeItem(key)
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts

    }
  });
  // Remove from sessionStorage if in use

  Object && Object.keys(sessionStorage || {}).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      sessionStorage && sessionStorage.removeItem(key)

========
    }
  });
  // Remove from sessionStorage if in use
  Object && Object.keys(sessionStorage || {}).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      sessionStorage && sessionStorage.removeItem(key)
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
=======
<<<<<<< HEAD
    }
  });
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage |{}).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      sessionStorage.removeItem(key)
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  })
}
=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { supabase } from "@/integrations/supabase/client",;
import type { UserDetails } from "@/types/auth",;
/**;
 * Utility function to clean up authentication state;
 * This helps prevent auth state inconsistencies and "limbo" states;
 */;
export const cleanupAuthState = () => {;
  // Remove standard auth tokens;
  localStorage.removeItem('supabase.auth.token'),;
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {;
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      localStorage.removeItem(key);
    }
  }),;
  // Remove from sessionStorage if in use;
  Object.keys(sessionStorage || {}).forEach((key) => {;
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      sessionStorage.removeItem(key);
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  })
},

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")
<<<<<<< HEAD

      .eq("user_id", user.id)

<<<<<<< HEAD
=======
      .eq("campaign_type", "welcome_series")


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      .eq("user_id", user.id)
<<<<<<< HEAD
      .eq("campaign_type", "welcome_series");
      .maybeSingle();
=======
      .eq("campaign_type", "welcome_series")
<<<<<<< HEAD
      .maybeSingle();
=======
      .maybeSingle(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
<<<<<<< HEAD
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
          job_type: "send_retention_email";
          scheduled_for: new Date ().toISOString ();
          status: "pending";
          payload: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts

<<<<<<< HEAD
=======
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"

========
            user_id: user && user.id;
            email_type: "welcome_series";
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
          }
        });
=======

=======
          job_type: "send_retention_email",
          scheduled_for: new Date().toISOString(),
          status: "pending",
          payload: {
<<<<<<< HEAD
            user_id: user.id;
            email_type: "welcome_series";
            user_type: user.userType |"unknown"
            display_name: user.displayName |user.email?.split("@")[0] |"User"
          }
        });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
        
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts

========
          user_id: user && user.id;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          user_id: user.id,
          campaign_type: "welcome_series",
          template_name: "welcome_email",
          template_data: {
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
  }
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    const { data: existingCampaign } = await supabase;
      .from("email_campaigns");
      .select("id");
      .eq("user_id", user.id);
      .eq("campaign_type", "welcome_series");
      .maybeSingle(),;
    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {;
      // Create a scheduled job for the welcome email;
      await supabase;
        .from("scheduled_jobs");
        .insert({;
          job_type: "send_retention_email",;
          scheduled_for: new Date().toISOString(),;
          status: "pending",;
          payload: {;
            user_id: user.id,;
            email_type: "welcome_series",;
            user_type: user.userType || "unknown",;
            display_name: user.displayName || user.email?.split("@")[0] || "User";
<<<<<<< HEAD

          }
        });
;
      // Create entry in email_campaigns table;
      await supabase;
        .from ("email_campaigns");
        .insert ({
          user_id: user.id;
          campaign_type: "welcome_series";
          template_name: "welcome_email";
          template_data: {
            user_id: user && user.id;
            email_type: "welcome_series";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts

            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"

=======
========
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
          }
        });
    }
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts

    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);

<<<<<<< HEAD
  }
};

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
    console.error ("Error checking or scheduling welcome email:", error);
=======

import { supabase } from "@/integrations/supabase/client",;
import type { UserDetails } from "@/types/auth",;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======
          }
        }),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Create entry in email_campaigns table;
      await supabase;
        .from("email_campaigns");
        .insert({;
<<<<<<< HEAD
          user_id:user.id,;
          campaign_type:"welcome_series",;
          template_name:"welcome_email",;
          template_data:{;
            user_id:user.id,;
            email_type:"welcome_series",;
            user_type:user.userType || "unknown",;
            display_name:user.displayName || user.email?.split("@")[0] || "User";
          }
        }),;
    }
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
},;   if (key.startsWith ('supabase.auth.') || key.includes ('sb-') ) {
  /** * Utility function to check new user registration and schedule welcome emails */export const checkNewRegistration = async (user: UserDetails) => {
  try {
  //Check if user has received welcome email already .from ("email campaigns") .select ("id") .eq ("user id", user.id) .eq ("campaign type", "welcome series") .maybeSingle ();
// Create a scheduled job for the welcome email await supabase .from ("scheduled jobs") .insert ({
  
}
<<<<<<< HEAD
;
=======
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/authUtils.ts
=======
          user_id: user.id,;
          campaign_type: "welcome_series",;
          template_name: "welcome_email",;
          template_data: {;
            user_id: user.id,;
            email_type: "welcome_series",;
            user_type: user.userType || "unknown";
            display_name: user.displayName || user.email?.split("@")[0] || "User";
          }
        });
    }
  } catch (error) {
    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
