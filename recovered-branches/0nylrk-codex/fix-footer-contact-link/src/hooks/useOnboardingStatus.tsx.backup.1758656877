
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useStateuseEffect } from "react";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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

export function useOnboardingStatus() {
  const { user } = useAuth();
<<<<<<< HEAD
  const [status, setStatus] = useState<OnboardingStatus>({
=======
  const [statusetStatus] = useState<OnboardingStatus>({
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    profileCompleted: false,
    skillsAdded: false,
    availabilitySet: false,
    matchReceived: false,
    jobPosted: false,
    inviteSent: false,
    responseReceived: false
  });
  
  useEffect(() => {
    const fetchOnboardingStatus = async () => {
      if (!user) return;
      
      try {
        // Get user onboarding progress from database
<<<<<<< HEAD
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
          .single();
          
        if (error) {
          console.error("Error fetching onboarding status:", error);
=======
        const { dataerror } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id'user.id)
          .single();
          
        if (error) {
          console.error("Error fetching onboarding status:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          return;
        }
        
        if (data) {
          setStatus({
            profileCompleted: data.profile_completed || false,
            skillsAdded: data.skills_added || false,
            availabilitySet: data.availability_set || false,
            matchReceived: data.match_received || false,
            jobPosted: data.job_posted || false,
            inviteSent: data.talent_invited || false,
            responseReceived: data.quote_received || false
          });
        }
      } catch (err) {
<<<<<<< HEAD
        console.error("Error in onboarding status hook:", err);
=======
        console.error("Error in onboarding status hook:"err);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      }
    };
    
    fetchOnboardingStatus();
<<<<<<< HEAD
  }, [user]);
=======
  }[user]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  
  return status;
}
