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

  const { user, updateProfile, isLoading } = useAuth();
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const [currentStep, setCurrentStep] = useState(0);

  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();

<<<<<<< HEAD




  // Convert our user types to match what's expected in the database
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  },

  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {
    setUserType(type),
    

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding')
      return
<<<<<<< HEAD
    } else if (type === "talent") {
      case "client":;
        return "employer",;
      default:;
        return "buyer";
    }
  };

  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {;
    setUserType(type);

    // Direct to specific registration page based on user type;
    if (type === "serviceProvider") {;
      navigate('/service-onboarding'),;
      return;
    } else if (type === "talent") {;
      navigate('/talent-onboarding');
      return;
    }


    // Continue with the onboarding flow for clients;
    setCurrentStep(1);
  };

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {;
    if (!user || !userType) {;
      toast({;
        title: "Authentication Error",;
        description: "Your session may have expired. Please log in again.",;
        variant: "destructive"}),;

      navigate('/login');
      return;
    }


    }


  },


  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user |!userType) {
      toast({


        title: "Authentication Error",
=======
    } else if (type === "talent") {    }

  },

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user |!userType) {
      toast({        title: "Authentication Error",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        description: "Your session may have expired. Please log in again.",
        variant: "destructive"}),
      navigate('/login'),
      return
    }
    
    const dbUserType = mapUserTypeToDatabase(userType),
<<<<<<< HEAD
    


    try {
      await updateProfile({
        id: user.id
        displayName: data.displayName
        bio: data.bio, // This is now valid since we added bio to UserDetails
        userType: dbUserType
        headline: data.headline
        profileComplete: true


      }),
      


      // Update onboarding milestone
=======
          // Update onboarding milestone
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      await supabase.rpc('update_onboarding_milestone', {
        _user_id: user.id
        _milestone: 'profile_completed'
        _status: true

<<<<<<< HEAD

      }),
      


      toast({
        title: 'Profile completed!'
        description: 'Your profile has been set up successfully.'})
      // Get the appropriate dashboard route based on user type


      const dashboardRoute = userType === "client" 
        ? "/client-dashboard" 
        : "/talent-dashboard",
      


      // Redirect to dashboard
      navigate(dashboardRoute)
    } catch (error) {
      console.error('Error updating profile:', error);
      // Redirect to dashboard
      navigate(dashboardRoute)
    } catch (error) {
      console.error('Error updating profile:', error),
      toast({
        title: 'Error'
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        description: 'There was a problem updating your profile. Please try again.'
        variant: 'destructive'})
    }

<<<<<<< HEAD

  },



  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {


    navigate('/login'),


    return null

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
      // Update onboarding milestone;
      await supabase && supabase.rpc('update_onboarding_milestone', {;
        _user_id: user && user.id,;
        _milestone: 'profile_completed',;
        _status: true;
      });
      // Get the appropriate dashboard route based on user type;
      const dashboardRoute = userType === "client" ;
        ? "/client-dashboard" ;
        : "/talent-dashboard";
    } catch (error) {;
      console && console.error('Error updating profile:', error);
      toast({;
        title: 'Error',;
        description: 'There was a problem updating your profile. Please try again.',;
        variant: 'destructive'});
    }
  };
  if (!user) {;
    navigate('/login');
    return null;
  }
  return (

                <Step
                  key={index}
                  status={
                    currentStep > index
                      ? "complete"
                      : currentStep === index
                      ? "current"
                      : "incomplete"

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
export default function Onboarding() {;
  const { user, updateProfile, isLoading } = useAuth(),;
  const [currentStep, setCurrentStep] = useState(0),;
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null),;
  const navigate = useNavigate(),;
  // Convert our user types to match what's expected in the database;
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {;
    switch (type) {;
      case "serviceProvider": return "creator",;
      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";
      navigate('/talent-onboarding');
      return;
    }
      navigate('/login');
      return;
    }
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
              {steps && steps.map((step, index) => (;
  return (
                <Step
                  key={index}
                  status={
                    currentStep> index;
                      ? "complete";
            </Steps>;
          </div>;
                      : currentStep === index;
                      ? "current";
                      : "incomplete";
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

                <Button
=======
  },

  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {                <Button
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          <div className="bg - zion - blue - dark rounded - xl p - 8 shadow - lg border border - zion - blue - light">;
=======
          <div className="bg - zion - blue - dark rounded - xl p - 8 shadow - lg border border - zion - blue-light">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {current_step === 0 ? (
              <UserTypeSelection on_select={handleUserTypeSelect} selected_type={user_type} />) : (
              <ProfileSetup on_complete={handleProfileComplete} user_type={user_type!} />)}
            {current_step === 1 && (
<<<<<<< HEAD
              <div className="mt - 6">;
                <Button;
                  variant="outline";
                  className="w - full border - zion - blue - light text - white hover:bg - zion - blue - light";
=======
              <div className="mt-6">;
                <Button;
                  variant="outline";
                  className="w - full border - zion - blue - light text - white hover:bg - zion - blue-light";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  on_click={() => setCurrentStep (0)}
                >;
                  Back to Role Selection;
                </Button>;
<<<<<<< HEAD
              </div>)}

=======
              </div>;
            )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
<<<<<<< HEAD
              </div>;
            )}
          </div>;
        </div>;
      </div>;
      <Footer />;




}
    </>);
}
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
}
;
    </>);
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
