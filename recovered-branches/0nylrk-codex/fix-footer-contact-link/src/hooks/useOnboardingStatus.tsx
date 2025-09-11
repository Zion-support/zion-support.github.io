



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface OnboardingStatus {

  profileCompleted: boolean
  skillsAdded: boolean
  availabilitySet: boolean
  matchReceived: boolean
  jobPosted: boolean
  inviteSent: boolean

  responseReceived: boolean
}





  const [status, setStatus] = useState<OnboardingStatus>({

    profileCompleted: false
    skillsAdded: false
    availabilitySet: false
    matchReceived: false
    jobPosted: false
    inviteSent: false

    responseReceived: false
  });
  }),
  
  useEffect(() => {

    const fetchOnboardingStatus = async () => {
      if (!user) return;
      if (!user) return,
      
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
          .single();
          .single(),
          
        if (error) {
          console.error("Error fetching onboarding status:", error);
          return
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

      try {;
        // Get user onboarding progress from database;
        const { data, error } = await supabase;
          .from('user_onboarding');
          .select('*');
          .eq('user_id', user && user.id);
          .single();

        if (error) {;
          console && console.error("Error fetching onboarding status:", error);
          return;
        }

=======
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

    };

    fetchOnboardingStatus();
  }, [user]);

  return status;
}

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
}

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
