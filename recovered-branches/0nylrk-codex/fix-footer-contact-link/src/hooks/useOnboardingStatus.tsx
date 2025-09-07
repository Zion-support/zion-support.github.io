import { useState, useEffect } from "react",
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
interface OnboardingStatus {
  profileCompleted: boolean,
  skillsAdded: boolean,
  availabilitySet: boolean,
  matchReceived: boolean,
  jobPosted: boolean,
  inviteSent: boolean,
  responseReceived: boolean}

  profileCompleted: boolean
  skillsAdded: boolean
  availabilitySet: boolean
  matchReceived: boolean
  jobPosted: boolean
  inviteSent: boolean

  responseReceived: boolean
}
export function useOnboardingStatus() {
  const { user } = useAuth($2);
  const [status, setStatus] = useState<OnboardingStatus>({
    profileCompleted: false,
    skillsAdded: false,
    availabilitySet: false,
    matchReceived: false,
    jobPosted: false,
    inviteSent: false,
    responseReceived: false}),
  
  useEffect(() => {
    const fetchOnboardingStatus = $2;
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
          .single($2);
        if (error) {
          console.error($2);
          return
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
          })
        }
      } catch (err) {
        console.error("Error in onboarding status hook:", err)
      }
    },
    
    fetchOnboardingStatus()
  }, [user]),
  
  return status
}
