


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {LanguageThemeSelector} from "../components/onboarding/LanguageThemeSelector";
import {RolePicker} from "../components/onboarding/RolePicker";
import {SignUpForm} from "../components/onboarding/SignUpForm";
type OnboardingStep = "language" | "role" | "signup";

<<<<<<< HEAD
export function MobileOnboarding() {

export function MobileOnboarding() {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


export function MobileOnboarding() {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
  
  const goToNextStep = () => {
    if (currentStep === "language") {
      setCurrentStep("role")
    } else if (currentStep === "role") {
      setCurrentStep("signup")
    } else {
      navigate("/mobile")
    }
  }
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  }
  },
  
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  },

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
        )}
      </div>
    </div>
  )
}
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
    setCurrentStep("signup");
  };

  return (
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

        {currentStep === "role" && (;
          <div className="space-y-6">;
            <div className="text-center mb-8">;
              <h1 className="text-3xl font-bold mb-2">Tell us about you</h1>;
              <p className="text-muted-foreground">Choose what brought you to Zion</p>;
            </div>;

            <RolePicker onSelect={handleRoleSelect} />;

            <div className="px-4 mt-8">;
              <Button size="lg" className="w-full py-6" onClick={goToNextStep}>;
                Continue;
              </Button>;
            </div>;
          </div>;
        )}

        {currentStep === "signup" && (;
          <div className="space-y-6">;
            <div className="text-center mb-6">;
              <h1 className="text-3xl font-bold mb-2">Almost there!</h1>;
              <p className="text-muted-foreground">Create your account to get started</p>;
            </div>;

            <SignUpForm />;
          </div>;
        )}
      </div>;
    </div>;
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
}

<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
