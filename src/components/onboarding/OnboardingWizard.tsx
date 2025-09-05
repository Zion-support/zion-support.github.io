
import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils',;
interface WizardStep {;
  title: string,;
  description: string,;
  icon: React.ReactNode,;
  action: {;
    text: string,;
    url: string;
  },;
  skipText?: string;
}
;
interface OnboardingWizardProps {;
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;
}
<<<<<<< HEAD

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0),
  const router = useRouter(), // Changed from useNavigate to useRouter
  const { user } = useAuth(),
  
  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
      title: &quot;Post your first job&quot;,
      description: &quot;Describe the talent you need for your project&quot;,
      icon: <FileText className=&quot;h-6 w-6 text-zion-purple&quot; />,
      action: {
        text: &quot;Post a Job&quot;,
        url: &quot;/post-job&quot;
      },
      skipText: &quot;I'll do this later&quot;
    },
    {
      title: &quot;View suggested matches&quot;,
      description: &quot;Our AI system will find the best talent matches&quot;,
      icon: <Users className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      action: {
        text: &quot;View Matches&quot;,
        url: &quot;/talent&quot;
      },
      skipText: &quot;Skip for now&quot;
    },
    {
      title: &quot;Contact talent&quot;,
      description: &quot;Reach out to the talent that fits your needs&quot;,
      icon: <MessageSquare className=&quot;h-6 w-6 text-zion-purple&quot; />,
      action: {
        text: &quot;Browse Talent&quot;,
        url: &quot;/talent&quot;
      }
    }
  ],

  const talentSteps: WizardStep[] = [
    {
      title: &quot;Complete your profile&quot;,
      description: &quot;Add your skills, experience, and preferences&quot;,
      icon: <FileText className=&quot;h-6 w-6 text-zion-purple&quot; />,
      action: {
        text: &quot;Edit Profile&quot;,
        url: &quot;/profile&quot;
      },
      skipText: &quot;I'll do this later&quot;
    },
    {
      title: &quot;Define skills & availability&quot;,
      description: &quot;Let clients know when you're available and what you can do&quot;,
      icon: <Calendar className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      action: {
        text: &quot;Set Availability&quot;,
        url: &quot;/profile?tab=skills&quot;
      },
      skipText: &quot;Skip for now&quot;
    },
    {
      title: &quot;Preview your profile&quot;,
      description: &quot;See how clients will view your profile&quot;,
      icon: <Eye className=&quot;h-6 w-6 text-zion-purple&quot; />,
      action: {
        text: &quot;Preview Profile&quot;,
        url: `/talent/${user?.id}`
      },
      skipText: &quot;Skip for now&quot;
    },
    {
      title: &quot;Enable AI matchmaking&quot;,
      description: &quot;Let our AI find the perfect opportunities for you&quot;,
      icon: <Rocket className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      action: {
        text: &quot;Enable Matchmaking&quot;,
        url: &quot;/talent-dashboard&quot;
=======
;
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0),;
  const router = useRouter(), // Changed from useNavigate to useRouter;
  const { user } = useAuth(),;
  // Define steps based on user type;
  const clientSteps: WizardStep[] = [;
    {;
      title: "Post your first job",;
      description: "Describe the talent you need for your project",;
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Post a Job",;
        url: "/post-job";
      },;
      skipText: "I'll do this later";
    },;
    {;
      title: "View suggested matches",;
      description: "Our AI system will find the best talent matches",;
      icon: <Users className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "View Matches",;
        url: "/talent";
      },;
      skipText: "Skip for now";
    },;
    {;
      title: "Contact talent",;
      description: "Reach out to the talent that fits your needs",;
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Browse Talent",;
        url: "/talent";
      }
    }
  ],;
  const talentSteps: WizardStep[] = [;
    {;
      title: "Complete your profile",;
      description: "Add your skills, experience, and preferences",;
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Edit Profile",;
        url: "/profile";
      },;
      skipText: "I'll do this later";
    },;
    {;
      title: "Define skills & availability",;
      description: "Let clients know when you're available and what you can do",;
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "Set Availability",;
        url: "/profile?tab=skills";
      },;
      skipText: "Skip for now";
    },;
    {;
      title: "Preview your profile",;
      description: "See how clients will view your profile",;
      icon: <Eye className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Preview Profile",;
        url: `/talent/${user?.id}`;
      },;
      skipText: "Skip for now";
    },;
    {;
      title: "Enable AI matchmaking",;
      description: "Let our AI find the perfect opportunities for you",;
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "Enable Matchmaking",;
        url: "/talent-dashboard";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    }
  ],;
  const steps = type === 'client' ? clientSteps : talentSteps,;
  // Navigate to the specified URL;
  const handleAction = () => {;
    const currentStepData = steps[currentStep],;
    if (!currentStepData) return,;
    if (currentStep < steps.length - 1) {;
      router.push(currentStepData.action.url), // Changed to router.push;
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      router.push(currentStepData.action.url), // Changed to router.push;
      onComplete();
    }
  },;
  // Skip the current step;
  const handleSkip = () => {;
    if (currentStep < steps.length - 1) {;
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      onSkip();
    }
<<<<<<< HEAD
  },
  
  return (
    <Card className={cn(&quot;border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md&quot;, className)}>
      <CardHeader>
        <CardTitle className=&quot;text-center text-white&quot;>
          {type === 'client' ? 
            &quot;Ready to find top IT talent?&quot; : 
            &quot;Let's build your professional profile&quot;}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className=&quot;flex items-center mb-6&quot;>
          {/* Step dots */}
          <div className=&quot;flex items-center justify-center flex-1&quot;>
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  &quot;h-2 w-2 rounded-full mx-1&quot;,
                  index === currentStep
                    ? &quot;bg-zion-purple scale-125&quot;
                    : index < currentStep
                    ? &quot;bg-zion-cyan&quot;
                    : &quot;bg-zion-blue-light&quot;
=======
  };
  return (;
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;
      <CardHeader>;
        <CardTitle className="text-center text-white">;
          {type === 'client' ?;
            "Ready to find top IT talent?" :;
            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="flex items-center mb-6">;
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">;
            {steps.map((_, index) => (;
              <div;
                key={index}
                className={cn(;
                  "h-2 w-2 rounded-full mx-1";
                  index === currentStep;
                    ? "bg-zion-purple scale-125";
                    : index < currentStep;
                    ? "bg-zion-cyan";
                    : "bg-zion-blue-light";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              />;
            ))}
<<<<<<< HEAD
          </div>
        </div>

        <div className=&quot;flex flex-col items-center text-center p-4&quot;>
          <div className=&quot;bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4&quot;>
            {steps[currentStep]?.icon}
          </div>
          <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{steps[currentStep]?.title}</h3>
          <p className=&quot;text-zion-slate-light mb-6&quot;>{steps[currentStep]?.description}</p>
        </div>
      </CardContent>
      <CardFooter className=&quot;flex flex-col space-y-2&quot;>
        <Button
          className=&quot;w-full bg-zion-purple hover:bg-zion-purple-light&quot;
=======
          </div>;
        </div>;
        <div className="flex flex-col items-center text-center p-4">;
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;
            {steps[currentStep]?.icon}
          </div>;
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep]?.title}</h3>;
          <p className="text-zion-slate-light mb-6">{steps[currentStep]?.description}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex-col space-y-2">;
        <Button;
          className="w-full bg-zion-purple hover:bg-zion-purple-light";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          onClick={handleAction}
        >;
          {steps[currentStep]?.action.text}
<<<<<<< HEAD
        </Button>
        
        {steps[currentStep]?.skipText && (
          <Button
            variant=&quot;ghost&quot;
            className=&quot;text-zion-slate-light hover:text-white&quot;
=======
        </Button>;
        {steps[currentStep]?.skipText && (;
          <Button;
            variant="ghost";
            className="text-zion-slate-light hover:text-white";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            onClick={handleSkip}
          >;
            {steps[currentStep]?.skipText}
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  );
}
;