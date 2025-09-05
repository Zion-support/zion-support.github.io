 interface OnboardingStatus {
  profileCompleted: boolean;
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
}catch (err) {
  
}
};
}, [user]);
return status;
}