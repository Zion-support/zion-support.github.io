<<<<<<< HEAD




=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector";
import { RolePicker } from "../components/onboarding/RolePicker";
import { SignUpForm } from "../components/onboarding/SignUpForm";
type OnboardingStep = "language" | "role" | "signup";

export function MobileOnboarding() {;


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
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5



export function MobileOnboarding() {;


  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const goToNextStep = () => {
    if (currentStep === "language") {
      setCurrentStep("role");
    } else if (currentStep === "role") {
      setCurrentStep("signup");
    } else {
      navigate("/mobile");
    }
<<<<<<< HEAD
=======
  };

  const handleRoleSelect = () => {
    setCurrentStep("signup");
  };
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector",;
import { RolePicker } from "../components/onboarding/RolePicker",;
import { SignUpForm } from "../components/onboarding/SignUpForm",;
type OnboardingStep = "language" | "role" | "signup",;
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
    setCurrentStep("signup");
  };
    <div className="min-h-screen flex flex-col">;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { useState } from './react';
import { use_navigate } from './react-router-dom';
import { Button } from '@/components / ui / button';
import { LanguageThemeSelector } from '../components / onboarding / LanguageThemeSelector';
import { RolePicker } from '../components / onboarding / RolePicker';
import { SignUpForm } from '../components / onboarding / SignUpForm';
type OnboardingStep = "language" | "role" | "signup";
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
