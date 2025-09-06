
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
interface OnboardingStatus {

  profileCompleted: boolean
  skillsAdded: boolean
  availabilitySet: boolean
  matchReceived: boolean
  jobPosted: boolean
  inviteSent: boolean

  responseReceived: boolean
}
export function useOnboardingStatus() {
  const { user } = useAuth();
  const [status, setStatus] = useState<OnboardingStatus>({

    profileCompleted: false
    skillsAdded: false
    availabilitySet: false
    matchReceived: false
    jobPosted: false
    inviteSent: false

    responseReceived: false
  });
  useEffect(() => {

    const fetchOnboardingStatus = async () => {
      if (!user) return;
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
          .single();
        if (error) {
          console.error("Error fetching onboarding status:", error);
          return
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      } catch (err) {;
        console && console.error("Error in onboarding status hook:", err);
      }
<<<<<<< HEAD
    }
    fetchOnboardingStatus()
  }, [user]);

  return status
}
=======
    };

    fetchOnboardingStatus();
  }, [user]);

  return status;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
