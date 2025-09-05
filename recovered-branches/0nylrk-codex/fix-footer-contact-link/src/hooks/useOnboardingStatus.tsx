

interface OnboardingStatus {_profileCompleted: boolean;
  skillsAdded: boolean;
  availabilitySet: boolean;
  matchReceived: boolean;
  jobPosted: boolean;
  inviteSent: boolean;
  responseReceived: boolean;}

export function useOnboardingStatus() {_const { user} = useAuth();
  const [status, setStatus] = useState<OnboardingStatus>({_profileCompleted: false, _skillsAdded: false, _availabilitySet: false, _matchReceived: false, _jobPosted: false, _inviteSent: false, _responseReceived: false});
  
  useEffect__(() => {_const _fetchOnboardingStatus = async () => {
      if (!user) return;
      
      try {
        // Get user onboarding progress from database
        const { data, _error} = await supabase
          .from('user_onboarding')
          .select('*')
          .eq('user_id', user.id)
          .single();
          
        if (error) {_return;}
        
        if (data) {_setStatus({
            profileCompleted: data.profile_completed || false, _skillsAdded: data.skills_added || false, _availabilitySet: data.availability_set || false, _matchReceived: data.match_received || false, _jobPosted: data.job_posted || false, _inviteSent: data.talent_invited || false, _responseReceived: data.quote_received || false});
        }
      } catch (err) {}
    };
    
    fetchOnboardingStatus();
  }, [user]);
  
  return status;
}
