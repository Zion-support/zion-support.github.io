
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",
import { Steps, Step } from "@/components/ui/steps",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export default function Onboarding() {
  const { user, updateProfile, isLoading } = useAuth(),
  const [currentStep, setCurrentStep] = useState(0),
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null),
  const navigate = useNavigate(),
=======
import { useState } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { UserTypeSelection } from &quot;@/components/onboarding/UserTypeSelection&quot;;
import { ProfileSetup } from &quot;@/components/onboarding/ProfileSetup&quot;;
import { Steps, Step } from &quot;@/components/ui/steps&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function Onboarding() {_const { user, _updateProfile, _isLoading} = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
<<<<<<< HEAD
  const [userType, setUserType] = useState<&quot;serviceProvider&quot; | &quot;talent&quot; | &quot;client&quot; | null>(null);
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Convert our user types to match what's expected in the database
  const mapUserTypeToDatabase = (type: &quot;serviceProvider&quot; | &quot;talent&quot; | &quot;client&quot;) => {
    switch (type) {
<<<<<<< HEAD
      case "serviceProvider": return "creator",
=======
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const _navigate = useNavigate();

  // Convert our user types to match what's expected in the database
  const _mapUserTypeToDatabase = (_type: "serviceProvider" | "talent" | "client") => {_switch (type) {
      case "serviceProvider":
        return "creator";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case "talent":
        return "jobSeeker",
      case "client":
        return "employer",
      default:
<<<<<<< HEAD
        return "buyer"
=======
      case &quot;serviceProvider&quot;:
        return &quot;creator&quot;;
      case &quot;talent&quot;:
        return &quot;jobSeeker&quot;;
      case &quot;client&quot;:
        return &quot;employer&quot;;
      default:
        return &quot;buyer&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

<<<<<<< HEAD
  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {
    setUserType(type),
=======
        return "buyer";}
  };

  const _handleUserTypeSelect = (_type: "serviceProvider" | "talent" | "client") => {_setUserType(type);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding'),
      return
    } else if (type === "talent") {
      navigate('/talent-onboarding'),
      return
=======
  const handleUserTypeSelect = (type: &quot;serviceProvider&quot; | &quot;talent&quot; | &quot;client&quot;) => {
    setUserType(type);
    
    // Direct to specific registration page based on user type
    if (type === &quot;serviceProvider&quot;) {
      navigate('/service-onboarding');
<<<<<<< HEAD
      return;
    } else if (type === &quot;talent&quot;) {
      navigate('/talent-onboarding');
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
=======
      return;} else if (type === "talent") {_navigate('/talent-onboarding');
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Continue with the onboarding flow for clients
    setCurrentStep(1)
  },

  const _handleProfileComplete = async (_data: {_displayName: string, _bio: string, _headline: string}) => {_if (!user || !userType) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication Error",
        description: "Your session may have expired. Please log in again.",
        variant: "destructive"}),
      navigate('/login'),
      return
=======
        title: &quot;Authentication Error&quot;,
        description: &quot;Your session may have expired. Please log in again.&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Authentication Error", _description: "Your session may have expired. Please log in again.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      navigate('/login');
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    const dbUserType = mapUserTypeToDatabase(userType),
    
    try {
      await updateProfile({ 
        id: user.id,
        displayName: data.displayName,
        bio: data.bio, // This is now valid since we added bio to UserDetails
        userType: dbUserType,
        headline: data.headline,
        profileComplete: true
      }),
      
      // Update onboarding milestone
      await supabase.rpc('update_onboarding_milestone', {
        _user_id: user.id,
        _milestone: 'profile_completed',
        _status: true
      }),
      
      toast({
        title: 'Profile completed!',
        description: 'Your profile has been set up successfully.'}),
      
      // Get the appropriate dashboard route based on user type
<<<<<<< HEAD
      const dashboardRoute = userType === "client" 
=======
    const _dbUserType = mapUserTypeToDatabase(userType);
    
    try {_await updateProfile({ 
        id: user.id, _displayName: data.displayName, _bio: data.bio, _// This is now valid since we added bio to UserDetails
        userType: dbUserType, _headline: data.headline, _profileComplete: true});
      
      // Update onboarding milestone
      await supabase.rpc('update_onboarding_milestone', {_user_id: user.id, _milestone: 'profile_completed', _status: true});
      
      toast({_title: 'Profile completed!', _description: 'Your profile has been set up successfully.'});
      
      // Get the appropriate dashboard route based on user type
      const _dashboardRoute = userType === "client" 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ? "/client-dashboard" 
        : "/talent-dashboard",
=======
      const dashboardRoute = userType === &quot;client&quot; 
        ? &quot;/client-dashboard&quot; 
        : &quot;/talent-dashboard&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Redirect to dashboard
      navigate(dashboardRoute)
      
<<<<<<< HEAD
    } catch (error) {
      console.error('Error updating profile:', error),
      toast({
        title: 'Error',
        description: 'There was a problem updating your profile. Please try again.',
        variant: 'destructive'})
=======
    } catch (error) {_toast({
        title: 'Error', _description: 'There was a problem updating your profile. Please try again.', _variant: 'destructive'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const steps = [
<<<<<<< HEAD
    { label: "Select Role", description: "Choose how you'll use the platform" },
    { label: "Create Profile", description: "Tell us about yourself" }],
=======
    { label: &quot;Select Role&quot;, description: &quot;Choose how you'll use the platform&quot; },
    { label: &quot;Create Profile&quot;, description: &quot;Tell us about yourself&quot; }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  if (!user) {
    navigate('/login'),
    return null
  }
=======
  const _steps = [
    {_label: "Select Role", _description: "Choose how you'll use the platform"},
    {_label: "Create Profile", _description: "Tell us about yourself"}];

  if (!user) {_navigate('/login');
    return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>
              Welcome to Zion
            </h1>
            <p className=&quot;text-zion-slate-light text-xl&quot;>
              Complete your profile to get started
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;mb-12&quot;>
            <Steps currentStep={currentStep} className=&quot;max-w-xl mx-auto&quot;>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  status={
                    currentStep > index
                      ? &quot;complete&quot;
                      : currentStep === index
                      ? &quot;current&quot;
                      : &quot;incomplete&quot;
                  }
                  label={step.label}
                  description={step.description}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              ))}
            </Steps>
          </div>

<<<<<<< HEAD
          <div className=&quot;bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light&quot;>
            {currentStep === 0 ? (
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />
=======
          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">
            {_currentStep === 0 ? (
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={_userType} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ) : (
              <ProfileSetup onComplete={_handleProfileComplete} userType={_userType!} />
            )}

<<<<<<< HEAD
            {currentStep === 1 && (
              <div className=&quot;mt-6&quot;>
=======
            {_currentStep === 1 && (_<div className="mt-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Button
                  variant=&quot;outline&quot;
                  className=&quot;w-full border-zion-blue-light text-white hover:bg-zion-blue-light&quot;
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
  )
}
