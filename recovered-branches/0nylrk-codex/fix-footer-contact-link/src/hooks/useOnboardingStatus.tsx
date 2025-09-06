<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx


<<<<<<< HEAD
import { useState, useEffect } from "react",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import {useState, useEffect} from "react";
import {useAuth} from "./useAuth";
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from "react",
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface OnboardingStatus {

  profileCompleted: boolean
  skillsAdded: boolean
  availabilitySet: boolean
  matchReceived: boolean
  jobPosted: boolean
  inviteSent: boolean

  responseReceived: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export function useOnboardingStatus() {
  const { user } = useAuth(),
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function useOnboardingStatus() {;
  const { user } = useAuth();
export function useOnboardingStatus() {
  const { user } = useAuth(),
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [status, setStatus] = useState<OnboardingStatus>({

    profileCompleted: false
    skillsAdded: false
    availabilitySet: false
    matchReceived: false
    jobPosted: false
    inviteSent: false

    responseReceived: false
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

  }),
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  useEffect(() => {

    const fetchOnboardingStatus = async () => {

<<<<<<< HEAD
=======
      if (!user) return,
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  });
  }),
  
  useEffect(() => {

    const fetchOnboardingStatus = async () => {
      if (!user) return;
      if (!user) return,
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

          .single(),
          


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        if (error) {
          console.error("Error fetching onboarding status:", error);
          return

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          .single();
          .single(),
          
        if (error) {
          console.error("Error fetching onboarding status:", error),
          return
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from "react",;
import { useAuth } from "./useAuth",;
import { supabase } from "@/integrations/supabase/client",;
interface OnboardingStatus {;
  profileCompleted: boolean,;
  skillsAdded: boolean,;
  availabilitySet: boolean,;
  matchReceived: boolean,;
  jobPosted: boolean,;
  inviteSent: boolean,;
  responseReceived: boolean;
}
;
export function useOnboardingStatus() {;
  const { user } = useAuth(),;
  const [status, setStatus] = useState<OnboardingStatus>({;
    profileCompleted: false,;
    skillsAdded: false,;
    availabilitySet: false,;
    matchReceived: false,;
    jobPosted: false,;
    inviteSent: false,;
    responseReceived: false;
  }),;
  useEffect(() => {;
    const fetchOnboardingStatus = async () => {;
      if (!user) return,;
      try {;
        // Get user onboarding progress from database;
        const { data, error } = await supabase;
          .from('user_onboarding');
          .select('*');
          .eq('user_id', user.id);
          .single(),;
        if (error) {;
          console.error("Error fetching onboarding status:", error),;
          return;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
        if (data) {
          setStatus({
            profileCompleted: data.profile_completed |false
            skillsAdded: data.skills_added |false
            availabilitySet: data.availability_set |false
            matchReceived: data.match_received |false
            jobPosted: data.job_posted |false
            inviteSent: data.talent_invited |false
            responseReceived: data.quote_received |false
          })
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx
import {useState, useEffect} from "react";
import {useAuth} from "./useAuth";
import {supabase} from "@/integrations/supabase/client";
interface OnboardingStatus {;
  profileCompleted: boolean,;
  skillsAdded: boolean,;
  availabilitySet: boolean,;
  matchReceived: boolean,;
  jobPosted: boolean,;
  inviteSent: boolean,;
  responseReceived: boolean;
}
export function useOnboardingStatus() {;
  const { user } = useAuth();
  const [status, setStatus] = useState<OnboardingStatus>({;
    profileCompleted: false,;
    skillsAdded: false,;
    availabilitySet: false,;
    matchReceived: false,;
    jobPosted: false,;
    inviteSent: false,;
    responseReceived: false;
  });
  useEffect(() => {;
    const fetchOnboardingStatus = async () => {;
      if (!user) return;
=======

import { useState, useEffect } from "react",;
import { useAuth } from "./useAuth",;
import { supabase } from "@/integrations/supabase/client",;
;
interface OnboardingStatus {;
  profileCompleted:boolean,;
  skillsAdded:boolean,;
  availabilitySet:boolean,;
  matchReceived:boolean,;
  jobPosted:boolean,;
  inviteSent:boolean,;
  responseReceived:boolean;
}
;
export function useOnboardingStatus() {;
  const { user } = useAuth(),;
  const [status, setStatus] = useState<OnboardingStatus>({;
    profileCompleted:false,;
    skillsAdded:false,;
    availabilitySet:false,;
    matchReceived:false,;
    jobPosted:false,;
    inviteSent:false,;
    responseReceived:false;
  }),;
  ;
  useEffect(() => {;
    const fetchOnboardingStatus = async () => {;
      if (!user) return,;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      try {;
        // Get user onboarding progress from database;
        const { data, error } = await supabase;
          .from('user_onboarding');
          .select('*');
<<<<<<< HEAD
          .eq('user_id', user && user.id);
          .single();
        if (error) {;
          console && console.error("Error fetching onboarding status:", error);
          return;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx

=======
      } catch (err) {
        console.error("Error in onboarding status hook:", err)

<<<<<<< HEAD
=======
        }
      } catch (err) {
        console.error("Error in onboarding status hook:", err)
      }
    }
    fetchOnboardingStatus()
  }, [user]);

  return status
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      } catch (err) {;
        console.error("Error in onboarding status hook:", err);
      }
<<<<<<< HEAD

========
        if (data) {;
          setStatus({;
            profileCompleted: data && data.profile_completed || false,;
            skillsAdded: data && data.skills_added || false,;
            availabilitySet: data && data.availability_set || false,;
            matchReceived: data && data.match_received || false,;
            jobPosted: data && data.job_posted || false,;
            inviteSent: data && data.talent_invited || false,;
            responseReceived: data && data.quote_received || false;
          });
        }
      } catch (err) {;
        console && console.error("Error in onboarding status hook:", err);
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    };
    fetchOnboardingStatus();
  }, [user]);
  return status;
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx
import { useState, useEffect } from './react';
import { use_auth } from './use_auth';
import { supabase } from '@/integrations / supabase / client';
interface OnboardingStatus {
  profile_completed: boolean,
  skills_added: boolean,
  availability_set: boolean,
  match_received: boolean,
  job_posted: boolean,
  invite_sent: boolean,
  response_received: boolean;
}
export /**
 * useOnboardingStatus - Function description
 */
function useOnboardingStatus() {
  const { user } = use_auth ();
  const [status, set_status] = useState < OnboardingStatus>({
    profile_completed: false,
    skills_added: false,
    availability_set: false,
    match_received: false,
    job_posted: false,
    invite_sent: false,
    response_received: false;
  });
;
  useEffect (() => {
    const fetchOnboardingStatus = async () => {
      // Check condition
if (return) {
  $2
}
      try {
        // Get user onboarding progress from database;
        const { data, error } = await supabase;
          .from ('user_onboarding');
          .select ('*');
          .eq ('user_id', user.id);
          .single ();
;
        // Check condition
if ( {) {
  $2
}
          console.error ("Error fetching onboarding status:", error);
          return;
        }
        // Check condition
if ( {) {
  $2
}
          set_status ({
            profile_completed: data.profile_completed || false,
            skills_added: data.skills_added || false,
            availability_set: data.availability_set || false,
            match_received: data.match_received || false,
            job_posted: data.job_posted || false,
            invite_sent: data.talent_invited || false,
            response_received: data.quote_received || false;
          });
        }
      } catch (err) {
        console.error ("Error in onboarding status hook:", err);
      }
    }
;
    fetchOnboardingStatus ();
  }, [user]);
;
  return status;
=======
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
    },;
    ;
    fetchOnboardingStatus(),;
  }, [user]),;
  ;
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

export function useOnboardingStatus() {const { user} = useAuth();
  const [status, setStatus] = useState<OnboardingStatus>({profileCompleted: false, skillsAdded: false, availabilitySet: false, matchReceived: false, jobPosted: false, inviteSent: false, responseReceived: false});
  
  useEffect_(() => {const fetchOnboardingStatus = async () => {
      if (!user) return;
      
      try {
        // Get user onboarding progress from database,
const { data, error} = await supabase
          .from('useronboarding')
          .select('*')
          .eq('userid', user.id)
          .single(),
          
        if (error) {
          console.error("Error fetching onboarding status:", error),
          return        }
        
        if (data) {
          setStatus({
            profileCompleted: data.profilecompleted || false,
            skillsAdded: data.skillsadded || false,
            availabilitySet: data.availabilityset || false,
            matchReceived: data.matchreceived || false,
            jobPosted: data.jobposted || false,
            inviteSent: data.talentinvited || false,
            responseReceived: data.quotereceived || false
          })
        }
      } catch (err) {
        console.error("Error in onboarding status hook:", err)      }
    },
        if (error) {return}
        
        if (data) {setStatus({
            profileCompleted: data.profilecompleted || false, skillsAdded: data.skillsadded || false, availabilitySet: data.availabilityset || false, matchReceived: data.matchreceived || false, jobPosted: data.jobposted || false, inviteSent: data.talentinvited || false, responseReceived: data.quotereceived || false})
        }
      } catch (err) {}
    };
    
    fetchOnboardingStatus()
  }, [user]),
  
  return status
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
}, [user]);
return status;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useOnboardingStatus.tsx
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
