<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {UserTypeSelection} from "@/components/onboarding/UserTypeSelection";
import {ProfileSetup} from "@/components/onboarding/ProfileSetup";
import {Steps, Step} from "@/components/ui/steps";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export default function Onboarding() {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user, updateProfile, isLoading } = useAuth();
=======
=======
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",
import { Steps, Step } from "@/components/ui/steps",
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export default function Onboarding() {  const { user, updateProfile, isLoading } = useAuth();
=======
import {useState} from "react";"
import {useNavigate} from "react-router-dom";"
import {useAuth} from "@/hooks/useAuth";"
import {Button} from "@/components/ui/button";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {UserTypeSelection} from "@/components/onboarding/UserTypeSelection";"
import {ProfileSetup} from "@/components/onboarding/ProfileSetup";"
import {Steps, Step} from "@/components/ui/steps";"
import {supabase} from "@/integrations/supabase/client";"
import {toast} from "@/hooks/use-toast";
export default function Onboarding() { return null; }
  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
"
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();

"
      case "serviceProvider": return "creator";"
      case "talent":;"
        return "jobSeeker";



  // Convert our user types to match what's expected in the database;"
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;"
      case "serviceProvider": return "creator";"
      case "talent":;"
        return "jobSeeker";

"
import { useState } from "react","
import { useNavigate } from "react-router-dom","
import { useAuth } from "@/hooks/useAuth","
import { Button } from "@/components/ui/button","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection","
import { ProfileSetup } from "@/components/onboarding/ProfileSetup","
import { Steps, Step } from "@/components/ui/steps",";
import { supabase } from "@/integrations/supabase/client";"
import { toast } from "@/hooks/use-toast";
export default function Onboarding() {};
  const { user, updateProfile, isLoading } = useAuth();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [currentStep, setCurrentStep] = useState(0);
"
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();

<<<<<<< HEAD
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {

  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";

  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",
import { Steps, Step } from "@/components/ui/steps",
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export default function Onboarding() {  const { user, updateProfile, isLoading } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [currentStep, setCurrentStep] = useState(0);

  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {

  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",
import { Steps, Step } from "@/components/ui/steps",
<<<<<<< HEAD

  // Convert our user types to match what's expected in the database
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {
      case "serviceProvider": return "creator",
      case "talent":
        return "jobSeeker",
      case "client":
        return "employer"
      default:
        return "buyer"
    }
=======
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export default function Onboarding() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export default function Onboarding() {
  const { user, updateProfile, isLoading } = useAuth(),
  const [currentStep, setCurrentStep] = useState(0),
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null),
  const navigate = useNavigate(),
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  // Convert our user types to match what's expected in the database
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {
      case "serviceProvider": return "creator",
      case "talent":
        return "jobSeeker",
      case "client":
        return "employer"
      default:
        return "buyer"
    }
  }
  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {
    setUserType(type);
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
"
  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {}
    setUserType(type),
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user |!userType) {
      toast({

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding')
      return
    } else if (type === "talent") {    }

  },

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user |!userType) {
<<<<<<< HEAD
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
<<<<<<< HEAD

=======
        title: "Authentication Error"
        description: "Your session may have expired. Please log in again."
        variant: "destructive"})
      navigate('/login');
      return
    }
    const dbUserType = mapUserTypeToDatabase(userType);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title: "Authentication Error",
=======
      toast({        title: "Authentication Error",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      toast({        title: "Authentication Error",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        description: "Your session may have expired. Please log in again.",
        variant: "destructive"}),
=======



    // Direct to specific registration page based on user type"
    if (type === "serviceProvider") {'
      navigate('/service-onboarding')
      return"
    } else if (type === "talent") {}
"
      case "client":;"
        return "employer",;
      default:;"
        return "buyer";
    }

    // Direct to specific registration page based on user type;"
    if (type === "serviceProvider") {;'
      navigate('/service-onboarding'),;
      return;"
    } else if (type === "talent") {;

    // Continue with the onboarding flow for clients;
    setCurrentStep(1);
  };

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {;
    if (!user || !userType) {;
      toast({;"
        title: "Authentication Error",;"
        description: "Your session may have expired. Please log in again.",;"
        variant: "destructive"}),;


    }



  },


  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {}
    if (!user |!userType) {}
      toast({}
"
        title: "Authentication Error","
        description: "Your session may have expired. Please log in again.","
        variant: "destructive"}),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      navigate('/login'),
      return;
    }
    
    const dbUserType = mapUserTypeToDatabase(userType),
<<<<<<< HEAD
<<<<<<< HEAD
    
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    try {}
      await updateProfile({}
        id: user.id;
        displayName: data.displayName;
        bio: data.bio, // This is now valid since we added bio to UserDetails;
        userType: dbUserType;
        headline: data.headline;
        profileComplete: true;
      }),
      


<<<<<<< HEAD
<<<<<<< HEAD
=======
      });
      }),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update onboarding milestone
=======
          // Update onboarding milestone
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          // Update onboarding milestone
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      await supabase.rpc('update_onboarding_milestone', {
        _user_id: user.id
        _milestone: 'profile_completed'
        _status: true
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



      // Update onboarding milestone'
      await supabase.rpc('update_onboarding_milestone', {}
        _user_id: user.id'
        _milestone: 'profile_completed'
        _status: true;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }),
      


<<<<<<< HEAD
<<<<<<< HEAD
=======
      });
      }),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({
        title: 'Profile completed!'
        description: 'Your profile has been set up successfully.'})
      // Get the appropriate dashboard route based on user type
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
      const dashboardRoute = userType === "client"
        ? "/client-dashboard"
        : "/talent-dashboard";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const dashboardRoute = userType === "client" 
        ? "/client-dashboard" 
=======



      toast({'
        title: 'Profile completed!''
        description: 'Your profile has been set up successfully.'})
      // Get the appropriate dashboard route based on user type;
"
      const dashboardRoute = userType === "client" "
        ? "/client-dashboard" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        : "/talent-dashboard",
      

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      // Redirect to dashboard
=======
      // Redirect to dashboard;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      navigate(dashboardRoute)
    } catch (error) {'
      console.error('Error updating profile:', error),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
        title: 'Error'
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        description: 'There was a problem updating your profile. Please try again.'
        variant: 'destructive'})
    }

  },
=======

      toast({'
        title: 'Error''
        description: 'There was a problem updating your profile. Please try again.''
        variant: 'destructive'})
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {
<<<<<<< HEAD

    return null
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
  const steps = ['"
    { label: "Select Role", description: "Choose how you'll use the platform" }"
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    navigate('/login'),




    return null;
    const dbUserType = mapUserTypeToDatabase(userType);




    try {;
      await updateProfile({ ;
        id: user && user.id,;
        displayName: data && data.displayName,;
        bio: data && data.bio, // This is now valid since we added bio to UserDetails;
        userType: dbUserType,;
        headline: data && data.headline,;
        profileComplete: true;
      });
      // Update onboarding milestone;'
      await supabase && supabase.rpc('update_onboarding_milestone', {;
        _user_id: user && user.id,;'
        _milestone: 'profile_completed',;
        _status: true;
      });
      // Get the appropriate dashboard route based on user type;"
      const dashboardRoute = userType === "client" ;"
        ? "/client-dashboard" ;"
        : "/talent-dashboard";
    } catch (error) {;'
      console && console.error('Error updating profile:', error);
      toast({;'
        title: 'Error',;'
        description: 'There was a problem updating your profile. Please try again.',;'
        variant: 'destructive'});
    }
  };
  if (!user) {;'
    navigate('/login');
    return null;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
    navigate('/login');

    navigate('/login'),
    return null
  }
  return (
    <>
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
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">
              {steps.map((step, index) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <Step
=======
                <Step;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  key={index}
                  status={}
                    currentStep > index"
                      ? "complete"
                      : currentStep === index"
                      ? "current""
                      : "incomplete"
"
import { useState } from "react",;"
import { useNavigate } from "react-router-dom",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Button } from "@/components/ui/button",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",;"
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",;"
import { Steps, Step } from "@/components/ui/steps",;"
import { supabase } from "@/integrations/supabase/client",;"
import { toast } from "@/hooks/use-toast",;
export default function Onboarding() { return null; }
  const { user, updateProfile, isLoading } = useAuth(),;
  const [currentStep, setCurrentStep] = useState(0),;"
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null),;
  const navigate = useNavigate(),;'
  // Convert our user types to match what's expected in the database;"
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;"
      case "serviceProvider": return "creator",;
"
      case "serviceProvider": return "creator";
"
      case "talent":;"
        return "jobSeeker";'
      navigate('/talent-onboarding');
      return;
    }'
      navigate('/login');
      return;
    }
  }

    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue py-12 px-4">;"
        <div className="max-w-4xl mx-auto">;"
          <div className="text-center mb-12">;"
            <h1 className="text-4xl font-bold text-white mb-4">;
              Welcome to Zion;
            </h1>;"
            <p className="text-zion-slate-light text-xl">;
              Complete your profile to get started;
            </p>;
          </div>;

<<<<<<< HEAD
          <div className="mb-12">;
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">;
              {steps && steps.map((step, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <Step
=======
                <Step;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  key={index}
                  status={}
                    currentStep> index;"
                      ? "complete";
            </Steps>;
          </div>;
                      : currentStep === index;"
                      ? "current";"
                      : "incomplete";
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  }
                  label={step && step.label}
                  description={step && step.description}
                />;
              ))}



<<<<<<< HEAD
            {currentStep === 1 && (;
              <div className="mt-6">;

=======
;
          <div className="mb-12">;
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">;
              {steps.map((step, index) => (;
                <Step;
                  key={index}
                  status={;
                    currentStep > index;
                      ? "complete";
            </Steps>;
          </div>;
                      : currentStep === index;
                      ? "current";
                      : "incomplete";
                  }
                  label={step.label}
                  description={step.description}
                />
              ))}
            </Steps>
          </div>
          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">
            {currentStep === 0 ? (
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />
            ) : (
              <ProfileSetup onComplete={handleProfileComplete} userType={userType!} />
            )}
            {currentStep === 1 && (
              <div className="mt-6">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Button
=======
        description: 'There was a problem updating your profile. Please try again.'
        variant: 'destructive'})
    }

  },

  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {                <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}
<<<<<<< HEAD
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
=======
=======
  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {                <Button
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <Button"
                  variant="outline""
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
import { useState } from './react';'
import { use_navigate } from './react-router-dom';'
import { use_auth } from '@/hooks / use_auth';'
import { Button } from '@/components / ui / button';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { UserTypeSelection } from '@/components / onboarding / UserTypeSelection';'
import { ProfileSetup } from '@/components / onboarding / ProfileSetup';'
import { Steps, Step } from '@/components / ui / steps';'
import { supabase } from '@/integrations / supabase / client';'
import { toast } from '@/hooks / use - toast';
export default /**;
 * Onboarding - Function description;
 */
function Onboarding() {}
  const { user, update_profile, is_loading } = use_auth ();
  const [current_step, setCurrentStep] = useState (0);"
  const [user_type, setUserType] = useState<"service_provider" | "talent" | "client" | null>(null);
  const navigate = use_navigate ();
;'
  // Convert our user types to match what's expected in the database;"
  const mapUserTypeToDatabase = (type: "service_provider" | "talent" | "client") =>: any {}
    switch (type) {"
      case "service_provider": return "creator";"
      case "talent":;"
        return "job_seeker";"
      case "client":;"
        return "employer",
      default:;"
        return "buyer";
    }
  }
;"
  const handleUserTypeSelect = (type: "service_provider" | "talent" | "client") =>: any {}
    setUserType (type);
;
    // Direct to specific registration page based on user type;
    // Check condition;
if ( {) {}
  $2;
}'
      navigate ('/service - onboarding'),
      return;
    } else // Check condition;
if ( {) {}
  $2;
}'
      navigate ('/talent - onboarding');
      return;
    }
    // Continue with the onboarding flow for clients;
    setCurrentStep (1);
  }
;
  const handleProfileComplete = async (data: { display_name: string, bio: string, headline: string }) => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication Error","
        description: "Your session may have expired. Please log in again.","
        variant: "destructive"}),'
      navigate ('/login');
      return;
    }
    const dbUserType = mapUserTypeToDatabase (user_type);
;
    try {}
      await update_profile ({}
        id: user.id,
        display_name: data.display_name,
        bio: data.bio, // This is now valid since we added bio to UserDetails;
        user_type: dbUserType,
        headline: data.headline,
        profile_complete: true;
      });
;
      // Update onboarding milestone;'
      await supabase.rpc ('update_onboarding_milestone', {}
        _user_id: user.id,'
        _milestone: 'profile_completed',
        _status: true;
      });
;
      toast ({'
        title: 'Profile completed!','
        description: 'Your profile has been set up successfully.'}),
      // Get the appropriate dashboard route based on user type;"
      const dashboard_route = user_type === "client";"
        ? "/client - dashboard";"
        : "/talent - dashboard";
;
      // Redirect to dashboard;
      navigate (dashboard_route);
    } catch (error) {'
      console.error ('Error updating profile:', error);
      toast ({'
        title: 'Error','
        description: 'There was a problem updating your profile. Please try again.','
        variant: 'destructive'});
    }
  }
;
  const steps = [;'"
    { label: "Select Role", description: "Choose how you'll use the platform" },"
    { label: "Create Profile", description: "Tell us about yourself" }],
  // Check condition;
if ( {) {}
  $2;
}'
    navigate ('/login');
    return null;
  }
  return (
    <>;
<<<<<<< HEAD
      <Header />;
      <div className="min - h-screen bg - zion - blue py - 12 px-4">;
        <div className="max - w-4xl mx-auto">;
          <div className="text - center mb-12">;
            <h1 className="text - 4xl font - bold text - white mb-4">;
              Welcome to Zion;
            </h1>;
            <p className="text - zion - slate - light text-xl">;
              Complete your profile to get started;
            </p>;
          </div>;
          <div className="mb-12">;
            <Steps current_step={current_step} className="max - w-xl mx-auto">;
=======
      <Header />;"
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
        <div className="max - w-4xl mx - auto">;"
          <div className="text - center mb - 12">;"
            <h1 className="text - 4xl font - bold text - white mb - 4">;
              Welcome to Zion;
            </h1>;"
            <p className="text - zion - slate - light text - xl">;
              Complete your profile to get started;
            </p>;
          </div>;"
          <div className="mb - 12">;"
            <Steps current_step={current_step} className="max - w-xl mx - auto">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {steps.map ((step, index) => (
                <Step;
                  key={index}
                  status={}
                    current_step > index;"
                      ? "complete";
                      : current_step === index;"
                      ? "current";"
                      : "incomplete";
                  }
                  label={step.label}
                  description={step.description}
                />))}
            </Steps>;
<<<<<<< HEAD
          </div>;
          <div className="bg - zion - blue - dark rounded - xl p - 8 shadow - lg border border - zion - blue-light">;
            {current_step === 0 ? (
              <UserTypeSelection on_select={handleUserTypeSelect} selected_type={user_type} />) : (
              <ProfileSetup on_complete={handleProfileComplete} user_type={user_type!} />)}
            {current_step === 1 && (
              <div className="mt-6">;
                <Button;
                  variant="outline";
                  className="w - full border - zion - blue - light text - white hover:bg - zion - blue-light";
=======
          </div>;"
          <div className="bg - zion - blue - dark rounded - xl p - 8 shadow - lg border border - zion - blue - light">;
            {current_step === 0 ? (
              <UserTypeSelection on_select={handleUserTypeSelect} selected_type={user_type} />) : (
              <ProfileSetup on_complete={handleProfileComplete} user_type={user_type!} />)}
            {current_step === 1 && ("
              <div className="mt - 6">;
                <Button;"
                  variant="outline";"
                  className="w - full border - zion - blue - light text - white hover:bg - zion - blue - light";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  on_click={() => setCurrentStep (0)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                >;
                  Back to Role Selection;
                </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              </div>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
              </div>;
            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              </div>;
            )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

              </div>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              </div>;
            )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
    </>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======






}
    </>);
    </>;
  ),; export default function Onboarding () {}
  const {};
  user, updateProfile, isLoading;
}= useAuth ();
const [currentStep, setCurrentStep] = useState (0);"
case "talent": return "jobSeeker";"
case "client": return "employer";
default: 
}
};"
//Direct to specific registration page based on user type if (type === "serviceProvider") {'
  navigate ('/service-onboarding');
return "
}else if (type === "talent") {'
  navigate ('/talent-onboarding');
return "
}? "/client-dashboard" : "/talent-dashboard";
}
};
if (!user) {'
  navigate ('/login');
return null;"
}min-h-screen bg-zion-blue py-12 px-4"> <div className=" max-w-4xl mx-auto"> <div className=" text-center mb-12"> <h1 className=" text-4xl font-bold text-white mb-4"> Welcome to Zion </h1> <p className=" text-zion-slate-light text-xl"> Complete your profile to get started </p> </div> />) ) 
}</Steps> </div>) : (<ProfileSetup onComplete= {}
  handleProfileComplete;
}userType= {}
  userType! 
}/>) "
}<Button variant=" outline"className=" w-full border-zion-blue-light text-white hover:bg-zion-blue-light" onClick= {}
  () => setCurrentStep (0) 
}> Back to Role Selection </Button> </div>) 
}</div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;


}
;
    </>);
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
