
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/pages/MobileOnboarding.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {LanguageThemeSelector} from "../components/onboarding/LanguageThemeSelector";
import {RolePicker} from "../components/onboarding/RolePicker";
import {SignUpForm} from "../components/onboarding/SignUpForm";
type OnboardingStep = "language" | "role" | "signup";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function MobileOnboarding() {

export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======



export function MobileOnboarding() {;


  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  },
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

<<<<<<< HEAD
=======

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { LanguageThemeSelector } from "../components/onboarding/LanguageThemeSelector",;
import { RolePicker } from "../components/onboarding/RolePicker",;
import { SignUpForm } from "../components/onboarding/SignUpForm",;
type OnboardingStep = "language" | "role" | "signup",;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/pages/MobileOnboarding.tsx
export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language");
  const navigate = useNavigate();
=======
export function MobileOnboarding() {;
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("language"),;
  const navigate = useNavigate(),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  return (
=======
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/pages/MobileOnboarding.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/pages/MobileOnboarding.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/pages/MobileOnboarding.tsx

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/pages/MobileOnboarding.tsx
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
