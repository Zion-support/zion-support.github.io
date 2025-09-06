<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector";
import { RolePicker } from "../components/onboarding/RolePicker";
import { SignUpForm } from "../components/onboarding/SignUpForm";
type OnboardingStep = "language" | "role" | "signup";
<<<<<<< HEAD
export function MobileOnboarding() {

export function MobileOnboarding() {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function MobileOnboarding() {
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2


export function MobileOnboarding() {;

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


export function MobileOnboarding() {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  

export function MobileOnboarding() {;

  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const goToNextStep = () => {
    if (currentStep === "language") {
      setCurrentStep("role");
    } else if (currentStep === "role") {
      setCurrentStep("signup");
    } else {
      navigate("/mobile");
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  },
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  };

  const handleRoleSelect = () => {
<<<<<<< HEAD
    setCurrentStep("signup");
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 py-8">
        {currentStep === "language" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>
              <p className="text-muted-foreground">
                Let's set up your experience
              </p>
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
              <p className="text-muted-foreground">
                Choose what brought you to Zion
              </p>
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
              <p className="text-muted-foreground">
                Create your account to get started
              </p>
            </div>

            <SignUpForm />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

=======
        )}
      </div>
    </div>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    setCurrentStep("signup")
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  };

  const handleRoleSelect = () => {
    setCurrentStep("signup")
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector",;
import { RolePicker } from "../components/onboarding/RolePicker",;
import { SignUpForm } from "../components/onboarding/SignUpForm",;
type OnboardingStep = "language" | "role" | "signup",;

export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
  const goToNextStep = () => {;
    if (currentStep === "language") {;
      setCurrentStep("role");
    } else if (currentStep === "role") {;
      setCurrentStep("signup");
    } else {;
      navigate("/mobile");
    }
  };

  const handleRoleSelect = () => {;
    setCurrentStep("signup")
};

  return (    <div className="min-h-screen flex flex-col">;
      <div className="flex-1 py-8">;
        {currentStep === "language" && (;
          <div className="space-y-6">;
            <div className="text-center mb-8">;
              <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>;
              <p className="text-muted-foreground">Let's set up your experience</p>;
            </div>;

            <LanguageThemeSelector />;

            <div className="px-4 mt-8">;
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>;
        )}
      </div>
    </div>
  );
}
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
    <div className="min - h-screen flex flex-col">;
      <div className="flex - 1 py-8">;
        {current_step === "language" && (
          <div className="space-y-6">;
            <div className="text - center mb-8">;
              <h1 className="text - 3xl font - bold mb-2">Welcome to Zion</h1>;
              <p className="text - muted-foreground">Let's set up your experience</p>;
            </div>;
            <LanguageThemeSelector />;
            <div className="px - 4 mt-8">;
              <Button size="lg" className="w - full py-6" on_click={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>)}
        {current_step === "role" && (
          <div className="space-y-6">;
            <div className="text - center mb-8">;
              <h1 className="text - 3xl font - bold mb-2">Tell us about you</h1>;
              <p className="text - muted-foreground">Choose what brought you to Zion</p>;
            </div>;
            <RolePicker on_select={handleRoleSelect} />;
            <div className="px - 4 mt-8">;
              <Button size="lg" className="w - full py-6" on_click={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>)}
        {current_step === "signup" && (
          <div className="space-y-6">;
            <div className="text - center mb-6">;
              <h1 className="text - 3xl font - bold mb-2">Almost there!</h1>;
              <p className="text - muted-foreground">Create your account to get started</p>;
            </div>;
            <SignUpForm />;
          </div>)}
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
