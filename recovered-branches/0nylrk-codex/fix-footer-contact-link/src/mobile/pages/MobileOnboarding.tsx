
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
  ),;
=======
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
  const _goToNextStep = () => {
    if (currentStep === "language") {
      setCurrentStep("role")
    } else if (currentStep === "role") {
      setCurrentStep("signup")
    } else {
      navigate("/mobile")    }
  },
  
  const handleRoleSelect = () => {
    setCurrentStep("signup")
  },
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <div className=&quot;flex-1 py-8&quot;>
        {currentStep === &quot;language&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-8&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Welcome to Zion</h1>
              <p className=&quot;text-muted-foreground&quot;>Let's set up your experience</p>
      setCurrentStep("role");} else if (currentStep === "role") {_setCurrentStep("signup");} else {_navigate("/mobile");}
  };
  
  const _handleRoleSelect = () => {_setCurrentStep("signup");};

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 py-8">
        {_currentStep === "language" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>
              <p className="text-muted-foreground">Let's set up your experience</p>
            </div>
            
            <LanguageThemeSelector />
            
            <div className=&quot;px-4 mt-8&quot;>
              <Button size=&quot;lg&quot; className=&quot;w-full py-6&quot; onClick={goToNextStep}>
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === &quot;role&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-8&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Tell us about you</h1>
              <p className=&quot;text-muted-foreground&quot;>Choose what brought you to Zion</p>            </div>
            
            <RolePicker onSelect={handleRoleSelect} />
            
            <div className=&quot;px-4 mt-8&quot;>
              <Button size=&quot;lg&quot; className=&quot;w-full py-6&quot; onClick={goToNextStep}>                Continue
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === &quot;signup&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-6&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Almost there!</h1>
              <p className=&quot;text-muted-foreground&quot;>Create your account to get started</p>            </div>
            
            <SignUpForm />
          </div>
        )}
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
