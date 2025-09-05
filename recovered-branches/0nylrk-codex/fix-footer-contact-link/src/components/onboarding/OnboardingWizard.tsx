
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { useNavigate } from 'react-router-dom',
import { useAuth } from '@/hooks/useAuth',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import Rocket from 'lucide-react/dist/esm/icons/rocket',
import { FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react',
import { cn } from '@/lib/utils',
interface WizardStep {
  title: string,
  description: string,
  icon: React.ReactNode,
  action: {
    text: string,
    url: string
  },
  skipText?: string
}

interface OnboardingWizardProps {
  type: 'client' | 'talent',
  onComplete: () => void,
  onSkip: () => void,
  className?: string
}

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
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
=======
import Rocket from 'lucide-react/dist/esm/icons/rocket';

interface WizardStep {_title: string;
  description: string;
  icon: React.ReactNode;
  action: {
    text: string;
    url: string;};
  skipText?: string;
}

interface OnboardingWizardProps {_type: 'client' | 'talent';
  onComplete: () => void;
  onSkip: () => void;
  className?: string;}

export function OnboardingWizard(_{_type, _onComplete, _onSkip, _className}: OnboardingWizardProps) {_const [currentStep, _setCurrentStep] = useState(0);
  const _navigate = useNavigate();
  const { user} = useAuth();
  
  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {_title: "Post your first job", _description: "Describe the talent you need for your project", _icon: <FileText className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Post a Job", _url: "/post-job"},
      skipText: "I'll do this later"
    },
    {_title: "View suggested matches", _description: "Our AI system will find the best talent matches", _icon: <Users className="h-6 w-6 text-zion-cyan" />, _action: {
        text: "View Matches", _url: "/talent"},
      skipText: "Skip for now"
    },
    {_title: "Contact talent", _description: "Reach out to the talent that fits your needs", _icon: <MessageSquare className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Browse Talent", _url: "/talent"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  ],

  const talentSteps: WizardStep[] = [
<<<<<<< HEAD
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
=======
    {_title: "Complete your profile", _description: "Add your skills, _experience, _and preferences", _icon: <FileText className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Edit Profile", _url: "/profile"},
      skipText: "I'll do this later"
    },
    {_title: "Define skills & availability", _description: "Let clients know when you're available and what you can do", _icon: <Calendar className="h-6 w-6 text-zion-cyan" />, _action: {
        text: "Set Availability", _url: "/profile?tab=skills"},
      skipText: "Skip for now"
    },
    {_title: "Preview your profile", _description: "See how clients will view your profile", _icon: <Eye className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Preview Profile", _url: `/talent/${user?.id}`
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      },
      skipText: &quot;Skip for now&quot;
    },
<<<<<<< HEAD
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
      }
=======
    {_title: "Enable AI matchmaking", _description: "Let our AI find the perfect opportunities for you", _icon: <Rocket className="h-6 w-6 text-zion-cyan" />, _action: {
        text: "Enable Matchmaking", _url: "/talent-dashboard"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  ],
  
<<<<<<< HEAD
  const steps = type === 'client' ? clientSteps : talentSteps,

  // Navigate to the specified URL
  const handleAction = () => {
    if (currentStep < steps.length - 1) {
      navigate(steps[currentStep].action.url),
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      navigate(steps[currentStep].action.url),
      onComplete()
    }
  },
  
  // Skip the current step
  const handleSkip = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      onSkip()
    }
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
=======
  const _steps = type === 'client' ? clientSteps : talentSteps;

  // Navigate to the specified window.URL
  const _handleAction = () => {_if (currentStep < steps.length - 1) {
      navigate(steps[currentStep].action.url);
      setCurrentStep(currentStep + 1);} else {_// Last step
      navigate(steps[currentStep].action.url);
      onComplete();}
  };
  
  // Skip the current step
  const _handleSkip = () => {_if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);} else {_// Last step
      onSkip();}
  };
  
  return (
    <Card className={_cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", _className)}>
      <CardHeader>
        <CardTitle className="text-center text-white">
          {_type === 'client' ? 
            "Ready to find top IT talent?" : 
            "Let's build your professional profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          {_/* Step dots */}
          <div className="flex items-center justify-center flex-1">
            {_steps.map(_(_, _index) => (
              <div
                key={index}
                className={_cn(
                  "h-2 w-2 rounded-full mx-1", _index === currentStep
                    ? "bg-zion-purple scale-125"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    : index < currentStep
                    ? &quot;bg-zion-cyan&quot;
                    : &quot;bg-zion-blue-light&quot;
                )}
              />
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div className=&quot;flex flex-col items-center text-center p-4&quot;>
          <div className=&quot;bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4&quot;>
            {steps[currentStep].icon}
          </div>
          <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{steps[currentStep].title}</h3>
          <p className=&quot;text-zion-slate-light mb-6&quot;>{steps[currentStep].description}</p>
=======
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">
            {_steps[currentStep].icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{_steps[currentStep].title}</h3>
          <p className="text-zion-slate-light mb-6">{_steps[currentStep].description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </CardContent>
      <CardFooter className=&quot;flex flex-col space-y-2&quot;>
        <Button
<<<<<<< HEAD
          className=&quot;w-full bg-zion-purple hover:bg-zion-purple-light&quot;
          onClick={handleAction}
=======
          className="w-full bg-zion-purple hover:bg-zion-purple-light"
          onClick={_handleAction}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_steps[currentStep].action.text}
        </Button>
        
        {_steps[currentStep].skipText && (
          <Button
            variant=&quot;ghost&quot;
            className=&quot;text-zion-slate-light hover:text-white&quot;
            onClick={handleSkip}
          >
            {_steps[currentStep].skipText}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
