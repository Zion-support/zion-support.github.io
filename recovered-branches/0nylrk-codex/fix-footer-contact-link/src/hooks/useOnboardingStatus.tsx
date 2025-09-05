
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useAuth } from "./useAuth",
import { supabase } from "@/integrations/supabase/client",
=======
import { useState, useEffect } from &quot;react&quot;;
import { useAuth } from &quot;./useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface OnboardingStatus {
  profileCompleted: boolean,
  skillsAdded: boolean,
  availabilitySet: boolean,
  matchReceived: boolean,
  jobPosted: boolean,
  inviteSent: boolean,
  responseReceived: boolean
}

export function useOnboardingStatus() {
  const { user } = useAuth(),
  const [status, setStatus] = useState<OnboardingStatus>({
    profileCompleted: false,
    skillsAdded: false,
    availabilitySet: false,
    matchReceived: false,
    jobPosted: false,
    inviteSent: false,
    responseReceived: false
  }),
  
  useEffect(() => {
    const fetchOnboardingStatus = async () => {
      if (!user) return,
      
      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
          .single(),
          
        if (error) {
<<<<<<< HEAD
          console.error("Error fetching onboarding status:", error),
          return
=======
          console.error(&quot;Error fetching onboarding status:&quot;, error);
          return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
        console.error("Error in onboarding status hook:", err)
=======
        console.error(&quot;Error in onboarding status hook:&quot;, err);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    },
    
    fetchOnboardingStatus()
  }, [user]),
  
  return status
}
