import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
interface OnboardingStatus {

  profileCompleted: boolean;
  skillsAdded: boolean;
  availabilitySet: boolean;
  matchReceived: boolean;
  jobPosted: boolean;
  inviteSent: boolean;
  responseReceived: boolean;
}

export function useOnboardingStatus() { return null; }
  const { user } = useAuth();
export function useOnboardingStatus() {}
  const { user } = useAuth(),

<<<<<<< HEAD


  const [status, setStatus] = useState<OnboardingStatus>({
    profileCompleted: false,
    skillsAdded: false,
    availabilitySet: false,
    matchReceived: false,
    jobPosted: false,
    inviteSent: false,
    responseReceived: false,
  });

    profileCompleted: false,
    skillsAdded: false,
    availabilitySet: false,
    matchReceived: false,
    jobPosted: false,
    inviteSent: false,
    responseReceived: false,;
  });

  useEffect(() => {}
    const fetchOnboardingStatus = async () => {}
      if (!user) return;

<<<<<<< HEAD


      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase

          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
=======
  });
  }),
  
  useEffect(() => {

    const fetchOnboardingStatus = async () => {
      if (!user) return;
      if (!user) return,
      
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from("user_onboarding")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error) {
          console.error("Error fetching onboarding status:", error);
          return;
        }

        if (error) {"
          console.error("Error fetching onboarding status:", error);
          return;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
        if (data) {
          setStatus({
            profileCompleted: data.profile_completed || false,
            skillsAdded: data.skills_added || false,
            availabilitySet: data.availability_set || false,
            matchReceived: data.match_received || false,
            jobPosted: data.job_posted || false,
            inviteSent: data.talent_invited || false,
            responseReceived: data.quote_received || false,
          });
        }

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    };
    fetchOnboardingStatus();
  }, [user]);
  return status;
}

<<<<<<< HEAD
import { useState, useEffect } from './react';
import { use_auth } from './use_auth';

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { supabase } from '@/integrations / supabase / client';
interface OnboardingStatus {}
  profile_completed: boolean,
  skills_added: boolean,
  availability_set: boolean,
  match_received: boolean,
  job_posted: boolean,
  invite_sent: boolean,
  response_received: boolean;
}
export /**;
 * useOnboardingStatus - Function description;
 */
function useOnboardingStatus() {}
  const { user } = use_auth ();
  const [status, set_status] = useState < OnboardingStatus>({}
    profile_completed: false,
    skills_added: false,
    availability_set: false,
    match_received: false,
    job_posted: false,
    invite_sent: false,
    response_received: false;
  });
;

'
          .eq('user_id', user.id);

          .single(),;

          return,;
pr-12325

        }
        ;
        if (data) {;
          setStatus({;
            profileCompleted:data.profile_completed || false,;
            skillsAdded:data.skills_added || false,;
            availabilitySet:data.availability_set || false,;
            matchReceived:data.match_received || false,;
            jobPosted:data.job_posted || false,;

            inviteSent:data.talent_invited || false,;
            responseReceived:data.quote_received || false;
          }),;
        }
      } catch (err) {;"
        console.error("Error in onboarding status hook:", err),;
            responseReceived:data.quote_received || false;)
          }),;
        }
      } catch (err) {;"
        console.error("Error in onboarding status hook:", err),;"

      }

<<<<<<< HEAD
    }
;
    fetchOnboardingStatus ();
  }, [user]);
;
  return status;
          .eq('user_id', user.id);
          .single(),;
          ;
        if (error) {;
          console.error("Error fetching onboarding status:", error),;
          return,;
        }
        ;
        if (data) {;
          setStatus({;
            profileCompleted:data.profile_completed || false,;
            skillsAdded:data.skills_added || false,;
            availabilitySet:data.availability_set || false,;
            matchReceived:data.match_received || false,;
            jobPosted:data.job_posted || false,;
            inviteSent:data.talent_invited || false,;
            responseReceived:data.quote_received || false;
          }),;
        }
      } catch (err) {;
        console.error("Error in onboarding status hook:", err),;
      }

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },;
    ;
    fetchOnboardingStatus(),;
  }, [user]),;
  ;

<<<<<<< HEAD
  return status,;}
}catch (err) {
  
  useEffect(() => {
    const fetchOnboardingStatus = async () => {
      if (!user) return,

interface OnboardingStatus {profileCompleted: boolean,
  skillsAdded: boolean,
  availabilitySet: boolean,
  matchReceived: boolean,
  jobPosted: boolean,
  inviteSent: boolean,
  responseReceived: boolean}





=======
};
}, [user]);
return status;
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
