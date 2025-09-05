
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
    }
  };
  
  const handleRoleSelect = () => {
    setCurrentStep(&quot;signup&quot;);
  };

  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <div className=&quot;flex-1 py-8&quot;>
        {currentStep === &quot;language&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-8&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Welcome to Zion</h1>
              <p className=&quot;text-muted-foreground&quot;>Let's set up your experience</p>
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
              <p className=&quot;text-muted-foreground&quot;>Choose what brought you to Zion</p>
            </div>
            
            <RolePicker onSelect={handleRoleSelect} />
            
            <div className=&quot;px-4 mt-8&quot;>
              <Button size=&quot;lg&quot; className=&quot;w-full py-6&quot; onClick={goToNextStep}>
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === &quot;signup&quot; && (
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;text-center mb-6&quot;>
              <h1 className=&quot;text-3xl font-bold mb-2&quot;>Almost there!</h1>
              <p className=&quot;text-muted-foreground&quot;>Create your account to get started</p>
            </div>
            
            <SignUpForm />
          </div>
        )}
      </div>
    </div>
  );
}
