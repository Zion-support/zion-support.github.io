
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

  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();
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



  // Convert our user types to match what's expected in the database
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {

  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";


  },

  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {
    setUserType(type),
    
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding')
      return
    } else if (type === "talent") {
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
        return "employer",;
      default:;
        return "buyer";
    }
  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {;
    setUserType(type);
    // Direct to specific registration page based on user type;
    if (type === "serviceProvider") {;
      navigate('/service-onboarding'),;
      return;
    } else if (type === "talent") {;

    // Continue with the onboarding flow for clients;
    setCurrentStep(1);
  };
  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {;
    if (!user || !userType) {;
      toast({;
        title: "Authentication Error",;
        description: "Your session may have expired. Please log in again.",;
        variant: "destructive"}),;
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
      navigate('/login');
      return;
    }


  },


  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user |!userType) {
      toast({
        description: "Your session may have expired. Please log in again.",
        variant: "destructive"}),
      navigate('/login'),
      return
    }
    
    const dbUserType = mapUserTypeToDatabase(userType),
    
    try {
      await updateProfile({
        id: user.id
        displayName: data.displayName
        bio: data.bio, // This is now valid since we added bio to UserDetails
        userType: dbUserType
        headline: data.headline
        profileComplete: true
      }),
      



    navigate('/login'),


    return null
      navigate('/login');
      return;
    }
    const dbUserType = mapUserTypeToDatabase(userType);
    navigate('/login');

    navigate('/login'),
    return null=======

    const dbUserType = mapUserTypeToDatabase(userType);
      // Update onboarding milestone;
      await supabase && supabase.rpc('update_onboarding_milestone', {;
        _user_id: user && user.id,;
        _milestone: 'profile_completed',;
        _status: true;
      });
      toast({;
        title: 'Profile completed!',;
        description: 'Your profile has been set up successfully.'}),;

  }
  return (

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
export default function Onboarding() {;
  const { user, updateProfile, isLoading } = useAuth(),;
  const [currentStep, setCurrentStep] = useState(0),;
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null),;
  const navigate = useNavigate(),;
  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider": return "creator",;
      case "talent":;
        return "jobSeeker",;
      case "client":;
        return "employer",;
      default:;
        return "buyer";
    }
  },;
  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {;
    setUserType(type),;
    // Direct to specific registration page based on user type;
    if (type === "serviceProvider") {;
      navigate('/service-onboarding'),;
      return;
    } else if (type === "talent") {;
      navigate('/talent-onboarding'),;
      return;
    }
;
    // Continue with the onboarding flow for clients;
    setCurrentStep(1);
  },;
  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {;
    if (!user || !userType) {;
      toast({;
        title: "Authentication Error",;
        description: "Your session may have expired. Please log in again.",;
        variant: "destructive"}),;
      navigate('/login'),;
      return;
    }
;
    const dbUserType = mapUserTypeToDatabase(userType),;
    try {;
      await updateProfile({;
        id: user.id,;
        displayName: data.displayName,;
        bio: data.bio, // This is now valid since we added bio to UserDetails;
        userType: dbUserType,;
        headline: data.headline,;
        profileComplete: true;
      }),;
      // Update onboarding milestone;
      await supabase.rpc('update_onboarding_milestone', {;
        _user_id: user.id,;
        _milestone: 'profile_completed',;
        _status: true;
      }),;
      toast({;
        title: 'Profile completed!',;
        description: 'Your profile has been set up successfully.'}),;
      // Get the appropriate dashboard route based on user type;
      const dashboardRoute = userType === "client";
        ? "/client-dashboard";
        : "/talent-dashboard",;
      // Redirect to dashboard;
      navigate(dashboardRoute);
    } catch (error) {;
      console.error('Error updating profile:', error),;
      toast({;
        title: 'Error',;
        description: 'There was a problem updating your profile. Please try again.',;
        variant: 'destructive'});
    }
  },;
  const steps = [;
    { label: "Select Role", description: "Choose how you'll use the platform" },;
    { label: "Create Profile", description: "Tell us about yourself" }];
  if (!user) {;
    navigate('/login');
    return null;
  }
;
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="max-w-4xl mx-auto">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-white mb-4">;
              Welcome to Zion;
            </h1>;
            <p className="text-zion-slate-light text-xl">;
              Complete your profile to get started;
            </p>;
          </div>;
          <div className="mb-12">;
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">;
              {steps && steps.map((step, index) => (;                <Step
                  key={index}
                  status={
                    currentStep> index;

                  }
                  label={step && step.label}
                  description={step && step.description}
                />;
              ))}

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
                >;
                  Back to Role Selection;
                </Button>;
              </div>;
            )}



import { useState } from './react';
import { use_navigate } from './react-router-dom';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { UserTypeSelection } from '@/components / onboarding / UserTypeSelection';
import { ProfileSetup } from '@/components / onboarding / ProfileSetup';
import { Steps, Step } from '@/components / ui / steps';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export default /**
 * Onboarding - Function description
 */
function Onboarding() {
  const { user, update_profile, is_loading } = use_auth ();
  const [current_step, setCurrentStep] = useState (0);
  const [user_type, setUserType] = useState<"service_provider" | "talent" | "client" | null>(null);
  const navigate = use_navigate ();
;
  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "service_provider" | "talent" | "client") =>: any {
    switch (type) {
      case "service_provider": return "creator";
      case "talent":;
        return "job_seeker";
      case "client":;
        return "employer",
      default:;
        return "buyer";
    }
  }
;
  const handleUserTypeSelect = (type: "service_provider" | "talent" | "client") =>: any {
    setUserType (type);
;
    // Direct to specific registration page based on user type;
    // Check condition
if ( {) {
  $2
}
      navigate ('/service - onboarding'),
      return;
    } else // Check condition
if ( {) {
  $2
}
      navigate ('/talent - onboarding');
      return;
    }
    // Continue with the onboarding flow for clients;
    setCurrentStep (1);
  }
;
  const handleProfileComplete = async (data: { display_name: string, bio: string, headline: string }) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication Error",
        description: "Your session may have expired. Please log in again.",
        variant: "destructive"}),
      navigate ('/login');
      return;
    }
    const dbUserType = mapUserTypeToDatabase (user_type);
;
    try {
      await update_profile ({
        id: user.id,
        display_name: data.display_name,
        bio: data.bio, // This is now valid since we added bio to UserDetails;
        user_type: dbUserType,
        headline: data.headline,
        profile_complete: true;
      });
;
      // Update onboarding milestone;
      await supabase.rpc ('update_onboarding_milestone', {
        _user_id: user.id,
        _milestone: 'profile_completed',
        _status: true;
      });
;
      toast ({
        title: 'Profile completed!',
        description: 'Your profile has been set up successfully.'}),
      // Get the appropriate dashboard route based on user type;
      const dashboard_route = user_type === "client";
        ? "/client - dashboard";
        : "/talent - dashboard";
;
      // Redirect to dashboard;
      navigate (dashboard_route);
    } catch (error) {
      console.error ('Error updating profile:', error);
      toast ({
        title: 'Error',
        description: 'There was a problem updating your profile. Please try again.',
        variant: 'destructive'});
    }
  }
;
  const steps = [;
    { label: "Select Role", description: "Choose how you'll use the platform" },
    { label: "Create Profile", description: "Tell us about yourself" }],
  // Check condition
if ( {) {
  $2
}
    navigate ('/login');
    return null;
  }
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
        <div className="max - w-4xl mx - auto">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - white mb - 4">;
              Welcome to Zion;
            </h1>;
            <p className="text - zion - slate - light text - xl">;
              Complete your profile to get started;
            </p>;
          </div>;
          <div className="mb - 12">;
            <Steps current_step={current_step} className="max - w-xl mx - auto">;
              {steps.map ((step, index) => (
                <Step;
                  key={index}
                  status={
                    current_step > index;
                      ? "complete";
                      : current_step === index;
                      ? "current";
                      : "incomplete";
                  }
                  label={step.label}
                  description={step.description}
                />))}
            </Steps>;
          </div>;
          <div className="bg - zion - blue - dark rounded - xl p - 8 shadow - lg border border - zion - blue - light">;
            {current_step === 0 ? (
              <UserTypeSelection on_select={handleUserTypeSelect} selected_type={user_type} />) : (
              <ProfileSetup on_complete={handleProfileComplete} user_type={user_type!} />)}
            {current_step === 1 && (
              <div className="mt - 6">;
                <Button;
                  variant="outline";
                  className="w - full border - zion - blue - light text - white hover:bg - zion - blue - light";
                  on_click={() => setCurrentStep (0)}
                >;
                  Back to Role Selection;
                </Button>;
              </div>)}


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
    </>);
}
}
;
