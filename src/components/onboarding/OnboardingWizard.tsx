
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
  Rocket
  FileText
  Users
  Calendar
  Eye
  MessageSquare
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils';
interface WizardStep {;
  title: string;
  description: string;
  icon: React && React.ReactNode;
  action: {;
    text: string;

import { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
  Rocket,
  FileText,
  Users,
  Calendar,
  Eye,
  MessageSquare,
} from 'lucide-react';
import { cn } from '@/lib / utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react';

interface WizardStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: {
    text: string;
    url: string;

  }
  skipText?: string
interface OnboardingWizardProps {

    url: string;
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

  onSkip,;
  className,;
}: OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0);

          </div>;
        </div>;

        <div className='flex flex-col items-center text-center p-4'>;
          <div className='bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4'>;

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

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0),
  const router = useRouter(), // Changed from useNavigate to useRouter
  const { user } = useAuth(),

  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
      title: "Post your first job",
      description: "Describe the talent you need for your project",
      icon: <FileText className="h-6 w-6 text-zion-purple" />,
      action: {
        text: "Post a Job",
        url: "/post-job"
      },
      skipText: "I'll do this later"
    },
    {
      title: "View suggested matches",
      description: "Our AI system will find the best talent matches",
      icon: <Users className="h-6 w-6 text-zion-cyan" />,
      action: {
        text: "View Matches",
        url: "/talent"
      },
      skipText: "Skip for now"
    },
    {
      title: "Contact talent",
      description: "Reach out to the talent that fits your needs",
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,
      action: {
        text: "Browse Talent",
        url: "/talent"
      }
    }
  ],

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
      <CardHeader>
        <CardTitle className="text-center text-white">
          {type === 'client' ? 
            "Ready to find top IT talent?" : 
            "Let's build your professional profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          {/* Step dots */}
          <div className='flex items-center justify-center flex-1'>
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  'h-2 w-2 rounded-full mx-1',                  index === currentStep
                    ? 'bg-zion-purple scale-125'

                  "h-2 w-2 rounded-full mx-1",
                  index === currentStep
                    ? "bg-zion-purple scale-125"
                    : index < currentStep
                    ? "bg-zion-cyan"
                    : "bg-zion-blue-light"
                )}
              />;
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">

            {steps[currentStep]?.icon}
          </div>;
          <h3 className='text-xl font-bold text-white mb-2'>;
            {steps[currentStep]?.title}
          </h3>;
          <p className='text-zion-slate-light mb-6'>;
            {steps[currentStep]?.description}
          </p>;
        </div>;
      </CardContent>;
      <CardFooter className='flex flex-col space-y-2'>;
        <Button
          className='w-full bg-zion-purple hover:bg-zion-purple-light'
          onClick={handleAction}        >
          {steps[currentStep]?.action.text}
        </Button>
        {steps[currentStep]?.skipText && (
          <Button
            variant='ghost'
            className='text-zion-slate-light hover:text-white'

          className="w-full bg-zion-purple hover:bg-zion-purple-light"
          onClick={handleAction}
        >;
          {steps[currentStep]?.action.text}
        </Button>
        
        {steps[currentStep]?.skipText && (
          <Button
            variant="ghost"
            className="text-zion-slate-light hover:text-white"
            onClick={handleSkip}
          >;
            {steps[currentStep]?.skipText}
          </Button>
        )}

            {steps[currentStep]?.skipText}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
;
}
      </CardFooter>;

;
}

      </CardFooter>;
    </Card>;
  );
}

  type: 'client' | 'talent';
  on_complete: () => void;
  on_skip: () => void;
  class_name?: string;
export /**
 * OnboardingWizard - Function description
 */
function OnboardingWizard() {
  const [current_step, setCurrentStep] = useState (0);
  const router = use_router (); // Changed from use_navigate to use_router;
  const { user } = use_auth ();
  // Define steps based on user type;
  const client_steps: WizardStep[] = [;
    {
      title: 'Post your first job',
      description: 'Describe the talent you need for your project',
      icon: <FileText className='h - 6 w - 6 text - zion - purple' />,
      action: {
        text: 'Post a Job',
        url: '/post - job',
      },
      skip_text: "I'll do this later",
    },
    {
      title: 'View suggested matches',
      description: 'Our AI system will find the best talent matches',
      icon: <Users className='h - 6 w - 6 text - zion - cyan' />,
      action: {
        text: 'View Matches',
        url: '/talent',
      },
      skip_text: 'Skip for now',
    },
    {
      title: 'Contact talent',
      description: 'Reach out to the talent that fits your needs',
      icon: <MessageSquare className='h - 6 w - 6 text - zion - purple' />,
      action: {
        text: 'Browse Talent',
        url: '/talent',
      },
    },
  ];
  const talent_steps: WizardStep[] = [;
    {
      title: 'Complete your profile',
      description: 'Add your skills, experience, and preferences',
      icon: <FileText className='h - 6 w - 6 text - zion - purple' />,
      action: {
        text: 'Edit Profile',
        url: '/profile',
      },
      skip_text: "I'll do this later",
    },
    {
      title: 'Define skills & availability',
      description: "Let clients know when you're available and what you can do",
      icon: <Calendar className='h - 6 w - 6 text - zion - cyan' />,
      action: {
        text: 'Set Availability',
        url: '/profile?tab = skills',
      },
      skip_text: 'Skip for now',
    },
    {
      title: 'Preview your profile',
      description: 'See how clients will view your profile',
      icon: <Eye className='h - 6 w - 6 text - zion - purple' />,
      action: {
        text: 'Preview Profile',
        url: `/talent/${user?.id}`,
      },
      skip_text: 'Skip for now',
    },
    {
      title: 'Enable AI matchmaking',
      description: 'Let our AI find the perfect opportunities for you',
      icon: <Rocket className='h - 6 w - 6 text - zion - cyan' />,
      action: {
        text: 'Enable Matchmaking',
        url: '/talent - dashboard',
      },
    },
  ];
  const steps = type === 'client' ? client_steps : talent_steps;
  // Navigate to the specified URL;
  const handle_action = () =>: any {
    const currentStepData = steps[current_step];
    // Check condition
if (return) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      router.push (currentStepData.action.url); // Changed to router.push;
      setCurrentStep (current_step + 1);
    } else {
      // Last step;
      router.push (currentStepData.action.url); // Changed to router.push;
      on_complete ();
    }
  }
  // Skip the current step;
  const handle_skip = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep (current_step + 1);
    } else {
      // Last step;
      on_skip ();
    }
  }
    >;
      <CardHeader>;
        <CardTitle className='text - center text - white'>;
          {type === 'client';
            ? 'Ready to find top IT talent?';
            : "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className='flex items - center mb - 6'>;
          {/* Step dots */}
          <div className='flex items - center justify - center flex - 1'>;
            {steps.map ((_, index) => (
              <div;
                key={index}
                className={cn (
                  'h - 2 w - 2 rounded - full mx - 1',                  index === current_step;
                    ? 'bg - zion - purple scale - 125';
                    : index < current_step;
                      ? 'bg - zion - cyan';
                      : 'bg - zion - blue - light')}              />))}
          </div>;
        </div>;
        <div className='flex flex - col items - center text - center p - 4'>;
          <div className='bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4'>;
            {steps[current_step]?.icon}
          </div>;
          <h3 className='text - xl font - bold text - white mb - 2'>;
            {steps[current_step]?.title}
          </h3>;
          <p className='text - zion - slate - light mb - 6'>;
            {steps[current_step]?.description}
          </p>;
        </div>;
      </CardContent>;
      <CardFooter className='flex flex - col space - y-2'>;
        <Button;
          className='w - full bg - zion - purple hover:bg - zion - purple - light';
          on_click={handle_action}        >;
          {steps[current_step]?.action.text}
        </Button>;
        {steps[current_step]?.skip_text && (
          <Button;
            variant='ghost';
            className='text - zion - slate - light hover:text - white';
            on_click={handle_skip}          >;
            {steps[current_step]?.skip_text}
          </Button>)}
      </CardFooter>;
    </Card>);
}

