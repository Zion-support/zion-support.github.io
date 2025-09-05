
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React, {_useState} from "react";

type OnboardingStep = "language" | "role" | "signup";

export function MobileOnboarding() {_const [currentStep, _setCurrentStep] = useState<OnboardingStep>("language");
  const _navigate = useNavigate();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _goToNextStep = () => {
    if (currentStep === "language") {
<<<<<<< HEAD
      setCurrentStep("role")
    } else if (currentStep === "role") {
      setCurrentStep("signup")
    } else {
      navigate("/mobile")
=======
import React, { useState } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { LanguageThemeSelector } from &quot;../components/onboarding/LanguageThemeSelector&quot;;
import { RolePicker } from &quot;../components/onboarding/RolePicker&quot;;
import { SignUpForm } from &quot;../components/onboarding/SignUpForm&quot;;

type OnboardingStep = &quot;language&quot; | &quot;role&quot; | &quot;signup&quot;;

export function MobileOnboarding() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(&quot;language&quot;);
  const navigate = useNavigate();
  
  const goToNextStep = () => {
    if (currentStep === &quot;language&quot;) {
      setCurrentStep(&quot;role&quot;);
    } else if (currentStep === &quot;role&quot;) {
      setCurrentStep(&quot;signup&quot;);
    } else {
      navigate(&quot;/mobile&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const handleRoleSelect = () => {
<<<<<<< HEAD
    setCurrentStep("signup")
  },
=======
    setCurrentStep(&quot;signup&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <div className=&quot;flex-1 py-8&quot;>
        {currentStep === &quot;language&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-8&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Welcome to Zion</h1>
              <p className=&quot;text-muted-foreground&quot;>Let's set up your experience</p>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
            <LanguageThemeSelector />
            
            <div className=&quot;px-4 mt-8&quot;>
              <Button size=&quot;lg&quot; className=&quot;w-full py-6&quot; onClick={goToNextStep}>
                Continue
              </Button>
            </div>
          </div>
        )}
        
<<<<<<< HEAD
        {currentStep === &quot;role&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-8&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Tell us about you</h1>
              <p className=&quot;text-muted-foreground&quot;>Choose what brought you to Zion</p>
=======
        {_currentStep === "role" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Tell us about you</h1>
              <p className="text-muted-foreground">Choose what brought you to Zion</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
            <RolePicker onSelect={handleRoleSelect} />
            
<<<<<<< HEAD
            <div className=&quot;px-4 mt-8&quot;>
              <Button size=&quot;lg&quot; className=&quot;w-full py-6&quot; onClick={goToNextStep}>
=======
            <div className="px-4 mt-8">
              <Button size="lg" className="w-full py-6" onClick={_goToNextStep}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Continue
              </Button>
            </div>
          </div>
        )}
        
<<<<<<< HEAD
        {currentStep === &quot;signup&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-6&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Almost there!</h1>
              <p className=&quot;text-muted-foreground&quot;>Create your account to get started</p>
=======
        {_currentStep === "signup" && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2">Almost there!</h1>
              <p className="text-muted-foreground">Create your account to get started</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
            <SignUpForm />
          </div>
        )}
      </div>
    </div>
  )
}
