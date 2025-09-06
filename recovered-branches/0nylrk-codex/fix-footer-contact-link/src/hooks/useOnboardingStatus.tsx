<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {useAuth} from "./useAuth";
import {supabase} from "@/integrations/supabase/client";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from "react",
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface OnboardingStatus {
  profileCompleted: boolean;
  skillsAdded: boolean;
  availabilitySet: boolean;
  matchReceived: boolean;
  jobPosted: boolean;
  inviteSent: boolean;
  responseReceived: boolean;
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function useOnboardingStatus() {;
  const { user } = useAuth();
export function useOnboardingStatus() {
  const { user } = useAuth(),
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======





>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [status, setStatus] = useState<OnboardingStatus>({
<<<<<<< HEAD

    profileCompleted: false
    skillsAdded: false
    availabilitySet: false
    matchReceived: false
    jobPosted: false
    inviteSent: false

    responseReceived: false
<<<<<<< HEAD

  useEffect(() => {

    const fetchOnboardingStatus = async () => {

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }),
  
=======
    profileCompleted: false,
    skillsAdded: false,
    availabilitySet: false,
    matchReceived: false,
    jobPosted: false,
    inviteSent: false,
    responseReceived: false,
  });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  useEffect(() => {

    const fetchOnboardingStatus = async () => {
      if (!user) return;

<<<<<<< HEAD
=======
  });
  }),
  
  useEffect(() => {

    const fetchOnboardingStatus = async () => {
      if (!user) return;
      if (!user) return,
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
<<<<<<< HEAD
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          .single(),
          


        if (error) {
          console.error("Error fetching onboarding status:", error);
          return


<<<<<<< HEAD
=======
          .single();
          .single(),
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (error) {
          console.error("Error fetching onboarding status:", error),
          return
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          .from("user_onboarding")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error) {
          console.error("Error fetching onboarding status:", error);
          return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        }

        if (data) {
          setStatus({
<<<<<<< HEAD
            profileCompleted: data.profile_completed |false
            skillsAdded: data.skills_added |false
            availabilitySet: data.availability_set |false
            matchReceived: data.match_received |false
            jobPosted: data.job_posted |false
            inviteSent: data.talent_invited |false
            responseReceived: data.quote_received |false
          })
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      try {;
        // Get user onboarding progress from database;
        const { data, error } = await supabase;
          .from('user_onboarding');
          .select('*');
<<<<<<< HEAD
<<<<<<< HEAD
          .eq('user_id', user && user.id);
          .single();

        if (error) {;
          console && console.error("Error fetching onboarding status:", error);
          return;
=======
            profileCompleted: data.profile_completed || false,
            skillsAdded: data.skills_added || false,
            availabilitySet: data.availability_set || false,
            matchReceived: data.match_received || false,
            jobPosted: data.job_posted || false,
            inviteSent: data.talent_invited || false,
            responseReceived: data.quote_received || false,
          });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        }

=======
      } catch (err) {
        console.error("Error in onboarding status hook:", err);
      }

=======
      } catch (err) {
        console.error("Error in onboarding status hook:", err)

        }
      } catch (err) {
        console.error("Error in onboarding status hook:", err)
      }
    }
    fetchOnboardingStatus()
  }, [user]);

  return status
}
      } catch (err) {;
        console.error("Error in onboarding status hook:", err);
      }
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    };

    fetchOnboardingStatus();
  }, [user]);

  return status;
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      } catch (err) {;
        console && console.error("Error in onboarding status hook:", err);
      }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
<<<<<<< HEAD
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
;

};
}, [user]);
return status;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
