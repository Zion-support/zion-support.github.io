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
}
import { useState } from "react","
import { useNavigate } from "react-router-dom","
import { useAuth } from "@/hooks/useAuth","
import { Button } from "@/components/ui/button","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection","
import { ProfileSetup } from "@/components/onboarding/ProfileSetup","
import { Steps, Step } from "@/components/ui/steps","
import { supabase } from "@/integrations/supabase/client";"
import { toast } from "@/hooks/use-toast";"
export default function Onboarding() {  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);"
  const navigate = useNavigate();
  const mapUserTypeToDatabase = ("type": "serviceProvider" | "talent" | "client") => {"
    }
    switch (type) {
  // Convert our user types to match what's expected in the database;'
  }
  const mapUserTypeToDatabase = ("type": "serviceProvider" | "talent" | "client") => {;"
    }
    switch (type) {;
      }
      case "serviceProvider": return "creator";"
      case "talent":;"
        return "jobSeeker";"
  // Convert our user types to match what's expected in the database;'
    }
    switch (type) {;
      }
      case "serviceProvider": return "creator";"
      case "talent":;"
        return "jobSeeker";"
export default function Onboarding() {
  }
  const { user, updateProfile, isLoading } = useAuth();
  // Convert our user types to match what's expected in the database'
    }
    switch (type) {
      }
      case "serviceProvider": return "creator","
      case "talent":"
return "jobSeeker",;"
      case "client":"
return "employer";"
      "default":
return "buyer";"
    }
  }
  const handleUserTypeSelect = ("type": "serviceProvider" | "talent" | "client") => {"
    }
    setUserType(type);
  },
    }
    setUserType(type),
    // Direct to specific registration page based on user type,
if (type === "serviceProvider") {"
      }
      navigate('/service-onboarding')'
return;
    } else if (type === "talent") {    }"
  },
  const handleProfileComplete = async ("data": { "displayName": string, "bio": string, "headline": string }) => {
    }
    if (!user |!userType) {
      }
      toast({        "title": "Authentication Error","
        }
        "description": "Your session may have expired. Please log in again.","
"variant": "destructive"}),;"
      navigate('/login'),'
return;
    }
const dbUserType = mapUserTypeToDatabase(userType),;
          // Update onboarding milestone,
await supabase.rpc('update_onboarding_milestone', {'
        }
        "_user_id": user.id;
    "_milestone": "_milestone","
    "_status": true,
"description": 'There was a problem updating your profile. Please try again.''
"variant": 'destructive'});'
    }
=======
=======
  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";
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
export default function Onboarding() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { user, updateProfile, isLoading } = useAuth();

  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
"
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();
>>>>>>> origin/chore/fix-lint-and-merge

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

  const [currentStep, setCurrentStep] = useState(0);

  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export default function Onboarding() {
  const { user, updateProfile, isLoading } = useAuth(),
  const [currentStep, setCurrentStep] = useState(0),
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null),
  const navigate = useNavigate(),

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

import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",
import { Steps, Step } from "@/components/ui/steps",

  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
"
  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {}
    setUserType(type),
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding')
      return
    } else if (type === "talent") {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      navigate('/talent-onboarding'),
      return
    }
    // Continue with the onboarding flow for clients
    setCurrentStep(1)

import { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",;
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",;
import { Steps, Step } from "@/components/ui/steps",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
;
export default function Onboarding() {;
  const { user, updateProfile, isLoading } = useAuth(),;
  const [currentStep, setCurrentStep] = useState(0),;
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null),;
  const navigate = useNavigate(),;
;
  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type:"serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider":return "creator",;
      case "talent":;
        return "jobSeeker",;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      case "client":;
        return "employer",;
      default:;
        return "buyer";
    }
<<<<<<< HEAD
  },;
;
  const handleUserTypeSelect = (type:"serviceProvider" | "talent" | "client") => {;
    setUserType(type),;
    ;
=======
  };

  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {;
    setUserType(type);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Direct to specific registration page based on user type;
    if (type === "serviceProvider") {;
      navigate('/service-onboarding'),;
      return;
    } else if (type === "talent") {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    // Continue with the onboarding flow for clients;
    setCurrentStep(1);
  };
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      navigate('/talent-onboarding');
      return;
    }

    // Continue with the onboarding flow for clients;
    setCurrentStep(1);
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {;
    if (!user || !userType) {;
      toast({;
        title: "Authentication Error",
        description: "Your session may have expired. Please log in again.",;
        variant: "destructive"}),;
<<<<<<< HEAD
  }
  },

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user |!userType) {
      toast({
        title: "Authentication Error"
        description: "Your session may have expired. Please log in again."
        variant: "destructive"})
      navigate('/login');
      return
    }
    const dbUserType = mapUserTypeToDatabase(userType);
=======

      navigate('/login');
      return;
    }

    }

  },

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user |!userType) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Authentication Error",

        description: "Your session may have expired. Please log in again.",
        variant: "destructive"}),

      navigate('/login'),
      return;
    }
    
    const dbUserType = mapUserTypeToDatabase(userType),
<<<<<<< HEAD

    try {}
      await updateProfile({}
        id: user.id;
        displayName: data.displayName;
        bio: data.bio, // This is now valid since we added bio to UserDetails;
        userType: dbUserType;
        headline: data.headline;
        profileComplete: true;
=======
    
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      await updateProfile({
        id: user.id
        displayName: data.displayName
        bio: data.bio, // This is now valid since we added bio to UserDetails
        userType: dbUserType
        headline: data.headline
        profileComplete: true

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),

<<<<<<< HEAD
      });
      }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Update onboarding milestone

      await supabase.rpc('update_onboarding_milestone', {
        _user_id: user.id
        _milestone: 'profile_completed'
        _status: true

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }),

<<<<<<< HEAD
      });
      }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: 'Profile completed!'
        description: 'Your profile has been set up successfully.'})
      // Get the appropriate dashboard route based on user type

<<<<<<< HEAD
=======
<<<<<<< HEAD
      const dashboardRoute = userType === "client"
        ? "/client-dashboard"
        : "/talent-dashboard";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const dashboardRoute = userType === "client" 
        ? "/client-dashboard" 

        : "/talent-dashboard",
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
      // Redirect to dashboard
      navigate(dashboardRoute)
    } catch (error) {
      console.error('Error updating profile:', error),
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      navigate(dashboardRoute)
<<<<<<< HEAD
    } catch (error) {'
      console.error('Error updating profile:', error),

=======
    } catch (error) {
      console.error('Error updating profile:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: 'Error'

        description: 'There was a problem updating your profile. Please try again.'
        variant: 'destructive'})
    }

  },

<<<<<<< HEAD
=======


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {

<<<<<<< HEAD
    navigate('/login'),

    return null;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    navigate('/login'),


    return null
<<<<<<< HEAD

    const dbUserType = mapUserTypeToDatabase(userType);

      navigate('/login');
      return;
    }
    const dbUserType = mapUserTypeToDatabase(userType);
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const dbUserType = mapUserTypeToDatabase(userType);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {;
      await updateProfile({ ;
        id: user && user.id,;
        displayName: data && data.displayName,;
        bio: data && data.bio, // This is now valid since we added bio to UserDetails;
        userType: dbUserType,;
        headline: data && data.headline,;
        profileComplete: true;
      });
<<<<<<< HEAD
      // Update onboarding milestone;'
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Update onboarding milestone;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      await supabase && supabase.rpc('update_onboarding_milestone', {;
        _user_id: user && user.id,;'
        _milestone: 'profile_completed',;
        _status: true;
      });
<<<<<<< HEAD
      // Get the appropriate dashboard route based on user type;"
      const dashboardRoute = userType === "client" ;"
        ? "/client-dashboard" ;"
        : "/talent-dashboard";
    } catch (error) {;'
=======
<<<<<<< HEAD
      toast({;
        title: 'Profile completed!',;
        description: 'Your profile has been set up successfully.'}),;
=======

      toast({;
        title: 'Profile completed!',;
        description: 'Your profile has been set up successfully.'}),;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Get the appropriate dashboard route based on user type;
      const dashboardRoute = userType === "client" ;
        ? "/client-dashboard" ;
        : "/talent-dashboard";
<<<<<<< HEAD
      // Redirect to dashboard;
      navigate(dashboardRoute);
=======

      // Redirect to dashboard;
      navigate(dashboardRoute);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console && console.error('Error updating profile:', error);
      toast({;'
        title: 'Error',;'
        description: 'There was a problem updating your profile. Please try again.',;'
        variant: 'destructive'});
    }
  };
<<<<<<< HEAD
  if (!user) {;'
=======
<<<<<<< HEAD
  const steps = [;
    { label: "Select Role", description: "Choose how you'll use the platform" },;
    { label: "Create Profile", description: "Tell us about yourself" }],;
  if (!user) {;
    navigate('/login');
    return null;
  }
  return (
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
=======

  const steps = [;
    { label: "Select Role", description: "Choose how you'll use the platform" },;
    { label: "Create Profile", description: "Tell us about yourself" }],;

  if (!user) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    navigate('/login');
    return null;

  }
  return (

<<<<<<< HEAD
                <Step

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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Step
                  key={index}
                  status={
                    currentStep > index
                      ? "complete"
                      : currentStep === index
                      ? "current"
                      : "incomplete"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",;
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",;
import { Steps, Step } from "@/components/ui/steps",;
import { supabase } from "@/integrations/supabase/client",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
;
    { "label": "Select Role", "description": "Choose how you'll use the platform" },"
    { "label": "Create Profile", "description": "Tell us about yourself" }],"
  // Check condition,
if ( {) {
  $2
}
    navigate ('/login');'
    return null;
  }
<<<<<<< HEAD
return (;
=======

>>>>>>> origin/chore/fix-lint-and-merge
=======
;
  return (;
<<<<<<< HEAD
      navigate('/talent-onboarding'),;
      return,;
    }
    ;
    // Continue with the onboarding flow for clients;
    setCurrentStep(1),;
  },;
;
  const handleProfileComplete = async (data:{ displayName:string, bio:string, headline:string }) => {;
    if (!user || !userType) {;
      toast({;
        title:"Authentication Error",;
        description:"Your session may have expired. Please log in again.",;
        variant:"destructive"}),;
      navigate('/login'),;
      return,;
    }
    ;
    const dbUserType = mapUserTypeToDatabase(userType),;
    ;
    try {;
      await updateProfile({ ;
        id:user.id,;
        displayName:data.displayName,;
        bio:data.bio, // This is now valid since we added bio to UserDetails;
        userType:dbUserType,;
        headline:data.headline,;
        profileComplete:true;
      }),;
      ;
      // Update onboarding milestone;
      await supabase.rpc('update_onboarding_milestone', {;
        _user_id:user.id,;
        _milestone:'profile_completed',;
        _status:true;
      }),;
      ;
      toast({;
        title:'Profile completed!',;
        description:'Your profile has been set up successfully.'}),;
      ;
      // Get the appropriate dashboard route based on user type;
      const dashboardRoute = userType === "client" ;
        ? "/client-dashboard" ;
        :"/talent-dashboard",;
      ;
      // Redirect to dashboard;
      navigate(dashboardRoute),;
      ;
    } catch (error) {;
      console.error('Error updating profile:', error),;
      toast({;
        title:'Error',;
        description:'There was a problem updating your profile. Please try again.',;
        variant:'destructive'}),;
    }
  },;
;
  const steps = [;
    { label:"Select Role", description:"Choose how you'll use the platform" },;
    { label:"Create Profile", description:"Tell us about yourself" }],;
;
  if (!user) {;
    navigate('/login'),;
    return null,;
  }
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
;
          <div className="mb-12">;
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">;
              {steps.map((step, index) => (;
                <Step;
                  key={index}
                  status={;
                    currentStep > index;
=======

                <Step

                  key={index}
<<<<<<< HEAD
                  status={}
                    currentStep> index;"
                      ? "complete";
            </Steps>;
          </div>;
                      : currentStep === index;"
                      ? "current";"
=======
                  status={
                    currentStep> index;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      ? "complete";
            </Steps>;
          </div>;
                      : currentStep === index;
                      ? "current";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      : "incomplete";
<<<<<<< HEAD
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
=======

                  }
                  label={step && step.label}
                  description={step && step.description}
                />;
              ))}

<<<<<<< HEAD
=======
            </Steps>;
          </div>;

          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">;
            {currentStep === 0 ? (;
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />;
            ) : (;
              <ProfileSetup onComplete={handleProfileComplete} userType={userType!} />;
            )}

            {currentStep === 1 && (;
              <div className="mt-6">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Button

        description: 'There was a problem updating your profile. Please try again.'
        variant: 'destructive'})
    }

  },

  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]

                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}

<<<<<<< HEAD
=======
<<<<<<< HEAD


;
          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">;
            {currentStep === 0 ? (;
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />;
            ) :(;
              <ProfileSetup onComplete={handleProfileComplete} userType={userType!} />;
            )}
;
            {currentStep === 1 && (;
              <div className="mt-6">;
                <Button;
                  variant="outline";
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light";                  onClick={() => setCurrentStep(0)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                >
                  Back to Role Selection
                </Button>
              </div>
            )}
<<<<<<< HEAD
</Step>
            </Steps>;
          </div>;"
          <div className="bg - zion - blue - dark rounded - xl p - 8 shadow - lg border border - zion - blue - light">;"
</div>)
=======
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
                >;
                  Back to Role Selection;
                </Button>;
              </div>;
            )}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              <UserTypeSelection on_select={handleUserTypeSelect} selected_type={user_type} />) : (
</UserTypeSelection>)
              <ProfileSetup on_complete={handleProfileComplete} user_type={user_type!} />)}

</ProfileSetup>"
              <div className="mt - 6">;"
</div>
                <Button;"
                  variant="outline";""
                  className="w - full border - zion - blue - light text - white hover:bg - zion - blue - light";"
                  on_click={() => setCurrentStep (0)}
</Button>
                </Button>;
              </div>)}"
          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">;"
</div>

              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />;
</UserTypeSelection>
              <ProfileSetup onComplete={handleProfileComplete} userType={userType!} />;

</ProfileSetup>"
              <div className="mt-6">;"
</div>
                <Button;"
                  variant="outline";""
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light";                  onClick={() => setCurrentStep(0)}"
</Button>

                </Button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
</Footer>
    </>
  )
}

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

                  on_click={() => setCurrentStep (0)}

                >;
                  Back to Role Selection;
                </Button>;
<<<<<<< HEAD

=======
              </div>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>;
        </div>;
      </div>;
      <Footer />;

<<<<<<< HEAD
=======



<<<<<<< HEAD
}
    </>);
    </>;
  ),; export default function Onboarding () {
  const {
  user, updateProfile, isLoading 
}= useAuth ();
const [currentStep, setCurrentStep] = useState (0);
case "talent": return "jobSeeker";
case "client": return "employer";
default: 
}
};
//Direct to specific registration page based on user type if (type === "serviceProvider") {
  navigate ('/service-onboarding');
return 
}else if (type === "talent") {
  navigate ('/talent-onboarding');
return 
}? "/client-dashboard" : "/talent-dashboard";
}
};
if (!user) {
  navigate ('/login');
return null;
}min-h-screen bg-zion-blue py-12 px-4"> <div className=" max-w-4xl mx-auto"> <div className=" text-center mb-12"> <h1 className=" text-4xl font-bold text-white mb-4"> Welcome to Zion </h1> <p className=" text-zion-slate-light text-xl"> Complete your profile to get started </p> </div> />) ) 
}</Steps> </div>) : (<ProfileSetup onComplete= {
  handleProfileComplete 
}userType= {
  userType! 
}/>) 
}<Button variant=" outline"className=" w-full border-zion-blue-light text-white hover:bg-zion-blue-light" onClick= {
  () => setCurrentStep (0) 
}> Back to Role Selection </Button> </div>) 
}</div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

}
}
    </>);
    </>;
  ),; export default function Onboarding () {
  const {
  // TODO: Implement
  user, updateProfile, isLoading;
}= useAuth ();
const [currentStep, setCurrentStep] = useState (0);"
case "talent": return "jobSeeker";""
case "client": return "employer";"
default: 
};"
//Direct to specific registration page based on user type if (type === "serviceProvider") {""
  navigate ('/service-onboarding');
}else if (type === "talent") {""
  navigate ('/talent-onboarding');
}? "/client-dashboard" : "/talent-dashboard";"
if (!user) {"
}min-h-screen bg-zion-blue py-12 px-4"> <div className=" max-w-4xl mx-auto"> <div className=" text-center mb-12"> <h1 className=" text-4xl font-bold text-white mb-4"> Welcome to Zion </h1> <p className=" text-zion-slate-light text-xl"> Complete your profile to get started </p> </div> />) )"
} </div>) : (<ProfileSetup onComplete= {
  handleProfileComplete;
}userType= {
  userType! )
}/>) 

  () => setCurrentStep (0) 

}> Back to Role Selection  </div>) 
}</div> </div> </div> <Footer /> </>) 

  );
pr-12325
}
<<<<<<< HEAD
;

}
;
    </>);
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
