
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {useAuth} from "./useAuth";
import {supabase} from "@/integrations/supabase/client";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
<<<<<<< HEAD
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
=======
import { useAuth } from "./useAuth",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======

<<<<<<< HEAD
export function useOnboardingStatus() {;
  const { user } = useAuth();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function useOnboardingStatus() {
  const { user } = useAuth(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const [status, setStatus] = useState<OnboardingStatus>({

    profileCompleted: false
    skillsAdded: false
    availabilitySet: false
    matchReceived: false
    jobPosted: false
    inviteSent: false

    responseReceived: false
<<<<<<< HEAD
  });
=======
  }),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {

    const fetchOnboardingStatus = async () => {
<<<<<<< HEAD
      if (!user) return;
=======
      if (!user) return,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
<<<<<<< HEAD
          .single();
=======
          .single(),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (error) {
          console.error("Error fetching onboarding status:", error),
          return
<<<<<<< HEAD
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
        }
      } catch (err) {
        console.error("Error in onboarding status hook:", err)
<<<<<<< HEAD
      }
    }
    fetchOnboardingStatus()
  }, [user]);

  return status
}
=======
      } catch (err) {;
        console.error("Error in onboarding status hook:", err);
      }
    };
    fetchOnboardingStatus();
  }, [user]);
  return status;
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
