
import { useState, useEffect } from "react",
import { useAuth } from "./useAuth";
import { supabase } from "@/integrations/supabase/client";
interface OnboardingStatus {
<<<<<<< HEAD
  profileCompleted: boolean;
<<<<<<< HEAD
  skillsAdded: boolean;
  availabilitySet: boolean;
  matchReceived: boolean;
  jobPosted: boolean;
  inviteSent: boolean;
=======
  profileCompleted: boolean
  skillsAdded: boolean
  availabilitySet: boolean
  matchReceived: boolean
  jobPosted: boolean
  inviteSent: boolean
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  responseReceived: boolean
}
=======
skillsAdded: boolean;
availabilitySet: boolean;
matchReceived: boolean;
jobPosted: boolean;
inviteSent: boolean;
responseReceived: boolean 
}export function useOnboardingStatus () {
  const {
  user 
}= useAuth ();
const [status, setStatus] = useState<OnboardingStatus> ({
  profileCompleted: false;
skillsAdded: false;
availabilitySet: false;
matchReceived: false;
jobPosted: false;
inviteSent: false;
responseReceived: false 
});
useEffect ( () => {
  const fetchOnboardingStatus = async () => {
  if (!user) return;
// Get user onboarding progress from database const {
  data, error 
}= await supabase .from ('user onboarding') .select ('*') .eq ('user id', user.id) .single ();
}if (data) {
  setStatus ({
  profileCompleted: data.profile completed || false;
skillsAdded: data.skills added || false;
availabilitySet: data.availability set || false;
matchReceived: data.match received || false;
jobPosted: data.job posted || false;
inviteSent: data.talent invited || false;
responseReceived: data.quote received || false 
})
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function useOnboardingStatus() {
  const { user } = useAuth();
  const [status, setStatus] = useState<OnboardingStatus>({
<<<<<<< HEAD
    profileCompleted: false;
    skillsAdded: false;
    availabilitySet: false;
    matchReceived: false;
    jobPosted: false;
    inviteSent: false;
=======
    profileCompleted: false
    skillsAdded: false
    availabilitySet: false
    matchReceived: false
    jobPosted: false
    inviteSent: false
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    responseReceived: false
  });
  useEffect(() => {
<<<<<<< HEAD
    const fetchOnboardingStatus = null;
=======
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
        }
      } catch (err) {
        console.error("Error in onboarding status hook:", err)
      }
    }
    fetchOnboardingStatus()
  }, [user]);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return status
}