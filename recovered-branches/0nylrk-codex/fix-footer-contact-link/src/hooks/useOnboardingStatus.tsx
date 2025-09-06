

import { useState, useEffect } from "react",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
  const { user } = useAuth(),

  const [status, setStatus] = useState<OnboardingStatus>({

    profileCompleted: false
    skillsAdded: false
    availabilitySet: false
    matchReceived: false
    jobPosted: false
    inviteSent: false

    responseReceived: false

=======

  }),
  

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  useEffect(() => {

    const fetchOnboardingStatus = async () => {

      try {
        // Get user onboarding progress from database
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)

        if (error) {
          console.error("Error fetching onboarding status:", error);
          return

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
