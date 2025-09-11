import {supabase} from "@/integrations/supabase/client";

import type { UserDetails } from "@/types/auth";

=======


import {supabase} from "@/integrations/supabase/client";

import type { UserDetails } from "@/types/auth";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",



import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and "limbo" states
 */

export const cleanupAuthState = () => {

=======  // Remove standard auth tokens;
  localStorage.removeItem('supabase.auth.token');
  // Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token');
  localStorage.removeItem('supabase.auth.token'),
  
  // Remove standard auth tokens

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      localStorage.removeItem(key)
  localStorage && localStorage.removeItem('supabase && supabase.auth.token');
  
  // Remove all Supabase auth keys from localStorage
  Object && Object.keys(localStorage).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      localStorage && localStorage.removeItem(key)

=======    }
  });
  // Remove from sessionStorage if in use

  Object && Object.keys(sessionStorage || {}).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      sessionStorage && sessionStorage.removeItem(key)

    }
  })
}
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  })
},

=======
      .eq("user_id", user.id)
      .eq("campaign_type", "welcome_series");
      .maybeSingle();
      .eq("campaign_type", "welcome_series")
      .maybeSingle();
      .maybeSingle(),
      
      .eq("user_id", user.id)

      .eq("campaign_type", "welcome_series")

=======    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
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
==============
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
          }
        });
=======
=======
            user_id: user.id;
            email_type: "welcome_series";
            user_type: user.userType |"unknown"
            display_name: user.displayName |user.email?.split("@")[0] |"User"
          }
        });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
        
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
=======
=======

==============

=======            user_id: user.id,
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
=======
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

            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"

=======
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);


  }
=======
    console.error ("Error checking or scheduling welcome email:", error);
  }
}
;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
