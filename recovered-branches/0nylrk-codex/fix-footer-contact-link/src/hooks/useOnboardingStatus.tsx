
<<<<<<< HEAD
import { useStateuseEffect } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> origin/auto/autonomy-17186719616
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
  const [statusetStatus] = useState<OnboardingStatus>({
=======
  const [status, setStatus] = useState<OnboardingStatus>({
>>>>>>> origin/auto/autonomy-17186719616
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
        const { dataerror } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id'user.id)
          .single();
          
        if (error) {
          console.error("Error fetching onboarding status:"error);
=======
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
          .single();
          
        if (error) {
          console.error("Error fetching onboarding status:", error);
>>>>>>> origin/auto/autonomy-17186719616
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
        console.error("Error in onboarding status hook:"err);
=======
        console.error("Error in onboarding status hook:", err);
>>>>>>> origin/auto/autonomy-17186719616
      }
    };
    
    fetchOnboardingStatus();
<<<<<<< HEAD
  }[user]);
=======
  }, [user]);
>>>>>>> origin/auto/autonomy-17186719616
  
  return status;
}
