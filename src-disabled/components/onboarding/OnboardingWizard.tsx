interface WizardStep {;
  title: string;,
  description: string;,
  icon: React && React.ReactNode;,
  action: {;,
    text: string;,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

origin/cursor/automate-test-improve-and-merge-code-2533
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils';
interface WizardStep {;
  title: string,
  description: string;
  icon: React && React.ReactNode;
import { useState, useEffect } from 'react
import { useRouter } from 'next/router
import { useAuth } from '@/hooks/useAuth
import { Button } from '@/components/ui/button
  // TODO: Implement
}
  Card;
  CardContent;
  CardFooter;
  CardHeader;
  CardTitle;
} from '@/components/ui/card
  Rocket;
  FileText;
  Users;
  Calendar;
  Eye;
  MessageSquare;
} from 'lucide-react
import { cn } from '@/lib/utils
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react
interface WizardStep {;
  title: string;,
  description: string;
  icon: React && React.ReactNode;,
pr-12325
  action: {;
    text: string;

interface WizardStep {
  title: string,
  }
  skipText?: string
interface OnboardingWizardProps {

    url: string
};
  skipText?: string;

interface OnboardingWizardProps {;

  type: 'client' | 'talent';
  onComplete: () => void;
  onSkip: () => void;
  className?: string

export function OnboardingWizard(): any ({;
  type,;
  onComplete,;

  type,
  onComplete,
  onSkip,;
  className,;
}:,  OnboardingWizardProps) {;,
  const [currentStep, setCurrentStep] = useState(0);



  const talentSteps: WizardStep[] = [
    {
      title: "Complete your profile",
      description: "Add your skills, experience, and preferences",
      icon: <FileText className="h-6 w-6 text-zion-purple" />,
      action: {
        text: "Edit Profile",
        url: "/profile"
      },
      skipText: "I'll do this later"
    },
    {
      title: "Define skills & availability",
      description: "Let clients know when you're available and what you can do",
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,
      action: {
        text: "Set Availability",
        url: "/profile?tab=skills"
      },
      skipText: "Skip for now"
    },
    {
      title: "Preview your profile",
      description: "See how clients will view your profile",
      icon: <Eye className="h-6 w-6 text-zion-purple" />,
      action: {
        text: "Preview Profile",
        url: `/talent/${user?.id}`
      },
      skipText: "Skip for now"
    },
    {
      title: "Enable AI matchmaking",
      description: "Let our AI find the perfect opportunities for you",
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,
      action: {
        text: "Enable Matchmaking",
        url: "/talent-dashboard"
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
  },
