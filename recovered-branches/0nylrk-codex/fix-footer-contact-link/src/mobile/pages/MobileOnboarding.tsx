




import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {LanguageThemeSelector} from "../components/onboarding/LanguageThemeSelector";
import {RolePicker} from "../components/onboarding/RolePicker";
import {SignUpForm} from "../components/onboarding/SignUpForm";
type OnboardingStep = "language" | "role" | "signup";
<<<<<<< HEAD
<<<<<<< HEAD
export function MobileOnboarding() {

export function MobileOnboarding() {;
=======



export function MobileOnboarding() {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
import React, { useState } from "react",
import { useNavigate } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector",
import { RolePicker } from "../components/onboarding/RolePicker",
import { SignUpForm } from "../components/onboarding/SignUpForm",
type OnboardingStep = "language" | "role" | "signup",

export function MobileOnboarding() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language"),
  const navigate = useNavigate(),
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



export function MobileOnboarding() {;


  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
<<<<<<< HEAD
  
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const goToNextStep = () => {
    if (currentStep === "language") {
      setCurrentStep("role")
    } else if (currentStep === "role") {
      setCurrentStep("signup")
    } else {
      navigate("/mobile")
    }
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 py-8">
        {currentStep === "language" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>
              <p className="text-muted-foreground">Let's set up your experience</p>
            </div>
            <LanguageThemeSelector />
            <div className="px-4 mt-8">
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>
                Continue
              </Button>
            </div>
          </div>
        )}
        {currentStep === "role" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Tell us about you</h1>
              <p className="text-muted-foreground">Choose what brought you to Zion</p>
            </div>
            <RolePicker onSelect={handleRoleSelect} />
            <div className="px-4 mt-8">
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>
                Continue
              </Button>
            </div>
          </div>
        )}
        {currentStep === "signup" && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2">Almost there!</h1>
              <p className="text-muted-foreground">Create your account to get started</p>
            </div>
            <SignUpForm />
          </div>
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )}
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector",;
import { RolePicker } from "../components/onboarding/RolePicker",;
import { SignUpForm } from "../components/onboarding/SignUpForm",;
type OnboardingStep = "language" | "role" | "signup",;
<<<<<<< HEAD
<<<<<<< HEAD
export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language"),;
  const navigate = useNavigate(),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const goToNextStep = () => {;
    if (currentStep === "language") {;
      setCurrentStep("role");
    } else if (currentStep === "role") {;
      setCurrentStep("signup");
    } else {;
      navigate("/mobile");
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const handleRoleSelect = () => {;
    setCurrentStep("signup");
  };
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleRoleSelect = () => {;
    setCurrentStep("signup");
  };

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="min-h-screen flex flex-col">;
      <div className="flex-1 py-8">;
        {currentStep === "language" && (;
          <div className="space-y-6">;
            <div className="text-center mb-8">;
              <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>;
              <p className="text-muted-foreground">Let's set up your experience</p>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <LanguageThemeSelector />;
=======

            <LanguageThemeSelector />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <LanguageThemeSelector />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="px-4 mt-8">;
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {currentStep === "role" && (;
          <div className="space-y-6">;
            <div className="text-center mb-8">;
              <h1 className="text-3xl font-bold mb-2">Tell us about you</h1>;
              <p className="text-muted-foreground">Choose what brought you to Zion</p>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <RolePicker onSelect={handleRoleSelect} />;
=======

            <RolePicker onSelect={handleRoleSelect} />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <RolePicker onSelect={handleRoleSelect} />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="px-4 mt-8">;
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {currentStep === "signup" && (;
          <div className="space-y-6">;
            <div className="text-center mb-6">;
              <h1 className="text-3xl font-bold mb-2">Almost there!</h1>;
              <p className="text-muted-foreground">Create your account to get started</p>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <SignUpForm />;
          </div>;
        )}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from './react';
import { use_navigate } from './react-router-dom';
import { Button } from '@/components / ui / button';
import { LanguageThemeSelector } from '../components / onboarding / LanguageThemeSelector';
import { RolePicker } from '../components / onboarding / RolePicker';
import { SignUpForm } from '../components / onboarding / SignUpForm';
type OnboardingStep = "language" | "role" | "signup";
;
export /**
 * MobileOnboarding - Function description
 */
function MobileOnboarding() {
  const [current_step, setCurrentStep] = useState < OnboardingStep>("language");
  const navigate = use_navigate ();
;
  const goToNextStep = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep ("role");
    } else // Check condition
if ( {) {
  $2
}
      setCurrentStep ("signup");
    } else {
      navigate ("/mobile");
    }
  }
;
  const handleRoleSelect = () =>: any {
    setCurrentStep ("signup");
  }
;
  return (
    <div className="min - h-screen flex flex - col">;
      <div className="flex - 1 py - 8">;
        {current_step === "language" && (
          <div className="space - y-6">;
            <div className="text - center mb - 8">;
              <h1 className="text - 3xl font - bold mb - 2">Welcome to Zion</h1>;
              <p className="text - muted - foreground">Let's set up your experience</p>;
            </div>;
            <LanguageThemeSelector />;
            <div className="px - 4 mt - 8">;
              <Button size="lg" className="w - full py - 6" on_click={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>)}
        {current_step === "role" && (
          <div className="space - y-6">;
            <div className="text - center mb - 8">;
              <h1 className="text - 3xl font - bold mb - 2">Tell us about you</h1>;
              <p className="text - muted - foreground">Choose what brought you to Zion</p>;
            </div>;
            <RolePicker on_select={handleRoleSelect} />;
            <div className="px - 4 mt - 8">;
              <Button size="lg" className="w - full py - 6" on_click={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>)}
        {current_step === "signup" && (
          <div className="space - y-6">;
            <div className="text - center mb - 6">;
              <h1 className="text - 3xl font - bold mb - 2">Almost there!</h1>;
              <p className="text - muted - foreground">Create your account to get started</p>;
            </div>;
            <SignUpForm />;
          </div>)}
      </div>;
    </div>);
<<<<<<< HEAD

import React, { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector",;
import { RolePicker } from "../components/onboarding/RolePicker",;
import { SignUpForm } from "../components/onboarding/SignUpForm",;
;
type OnboardingStep = "language" | "role" | "signup",;
;
export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language"),;
  const navigate = useNavigate(),;
  ;
  const goToNextStep = () => {;
    if (currentStep === "language") {;
      setCurrentStep("role"),;
    } else if (currentStep === "role") {;
      setCurrentStep("signup"),;
    } else {;
      navigate("/mobile"),;
    }
  },;
  ;
  const handleRoleSelect = () => {;
    setCurrentStep("signup"),;
  },;
;
  return (;
    <div className="min-h-screen flex flex-col">;
      <div className="flex-1 py-8">;
        {currentStep === "language" && (;
          <div className="space-y-6">;
            <div className="text-center mb-8">;
              <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>;
              <p className="text-muted-foreground">Let's set up your experience</p>;
            </div>;
            ;
            <LanguageThemeSelector />;
            ;
            <div className="px-4 mt-8">;
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>;
        )}
        ;
        {currentStep === "role" && (;
          <div className="space-y-6">;
            <div className="text-center mb-8">;
              <h1 className="text-3xl font-bold mb-2">Tell us about you</h1>;
              <p className="text-muted-foreground">Choose what brought you to Zion</p>;
            </div>;
            ;
            <RolePicker onSelect={handleRoleSelect} />;
            ;
            <div className="px-4 mt-8">;
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>;
        )}
        ;
        {currentStep === "signup" && (;
          <div className="space-y-6">;
            <div className="text-center mb-6">;
              <h1 className="text-3xl font-bold mb-2">Almost there!</h1>;
              <p className="text-muted-foreground">Create your account to get started</p>;
            </div>;
            ;
            <SignUpForm />;
          </div>;
        )}
      </div>;
    </div>;
  ),; const goToNextStep = () => {
  if (currentStep === "language") {
  
}
;

<<<<<<< HEAD
};
const handleRoleSelect = () => {
  return (<div className="min-h-screen flex flex-col" > <div className="flex-1 py-8" > {
  currentStep === "language" && (<div className="space-y-6" > <div className="text-center mb-8" > <h1 className="text-3xl font-bold mb-2" >Welcome to Zion</h1> <p className="text-muted-foreground" >Let's set up your experience</p> px-4 mt-8"> <Button size=" lg"className=" w-full py-6" onClick= {
  goToNextStep 
}> Continue </Button> </div> </div>) 
}</div> <RolePicker onSelect= {
  handleRoleSelect 
}/> Continue </Button> </div> </div>) 
}</div> <SignUpForm /> </div>) 
}</div> </div>) 
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
