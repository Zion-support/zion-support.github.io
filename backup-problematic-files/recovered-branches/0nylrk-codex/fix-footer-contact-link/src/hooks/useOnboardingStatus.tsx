
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      try {;
        // Get user onboarding progress from database;
        const { data, error } = await supabase;
          .from('user_onboarding');
          .select('*');
<<<<<<< HEAD

}