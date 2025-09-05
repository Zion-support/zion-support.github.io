

export default function Onboarding() {_const { user, _updateProfile, _isLoading} = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const _navigate = useNavigate();

  // Convert our user types to match what's expected in the database
  const _mapUserTypeToDatabase = (_type: "serviceProvider" | "talent" | "client") => {_switch (type) {
      case "serviceProvider":
        return "creator";
      case "talent":
        return "jobSeeker";
      case "client":
        return "employer";
      default:
        return "buyer";}
  };

  const _handleUserTypeSelect = (_type: "serviceProvider" | "talent" | "client") => {_setUserType(type);
    
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding');
      return;} else if (type === "talent") {_navigate('/talent-onboarding');
      return;}
    
    // Continue with the onboarding flow for clients
    setCurrentStep(1);
  };

  const _handleProfileComplete = async (_data: {_displayName: string, _bio: string, _headline: string}) => {_if (!user || !userType) {
      toast({
        title: "Authentication Error", _description: "Your session may have expired. Please log in again.", _variant: "destructive"});
      navigate('/login');
      return;
    }
    
    const _dbUserType = mapUserTypeToDatabase(userType);
    
    try {_await updateProfile({ 
        id: user.id, _displayName: data.displayName, _bio: data.bio, _// This is now valid since we added bio to UserDetails
        userType: dbUserType, _headline: data.headline, _profileComplete: true});
      
      // Update onboarding milestone
      await supabase.rpc('update_onboarding_milestone', {_user_id: user.id, _milestone: 'profile_completed', _status: true});
      
      toast({_title: 'Profile completed!', _description: 'Your profile has been set up successfully.'});
      
      // Get the appropriate dashboard route based on user type
      const _dashboardRoute = userType === "client" 
        ? "/client-dashboard" 
        : "/talent-dashboard";
      
      // Redirect to dashboard
      navigate(dashboardRoute);
      
    } catch (error) {_toast({
        title: 'Error', _description: 'There was a problem updating your profile. Please try again.', _variant: 'destructive'});
    }
  };

  const _steps = [
    {_label: "Select Role", _description: "Choose how you'll use the platform"},
    {_label: "Create Profile", _description: "Tell us about yourself"}];

  if (!user) {_navigate('/login');
    return null;}

  return (_<>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Zion
            </h1>
            <p className="text-zion-slate-light text-xl">
              Complete your profile to get started
            </p>
          </div>

          <div className="mb-12">
            <Steps currentStep={_currentStep} className="max-w-xl mx-auto">
              {_steps.map((step, _index) => (
                <Step
                  key={index}
                  status={_currentStep > index
                      ? "complete"
                      : currentStep === index
                      ? "current"
                      : "incomplete"}
                  label={_step.label}
                  description={_step.description}
                />
              ))}
            </Steps>
          </div>

          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">
            {_currentStep === 0 ? (
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={_userType} />
            ) : (
              <ProfileSetup onComplete={_handleProfileComplete} userType={_userType!} />
            )}

            {_currentStep === 1 && (_<div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}
                >
                  Back to Role Selection
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
