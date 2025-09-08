<<<<<<< HEAD


=======
import { useState, useEffect } from 'react''
import { useRouter } from 'next/router''
import { useAuth } from '@/hooks/useAuth''
import { Button } from '@/components/ui/button''


import { useState, useEffect  } from 'react';
import { useRouter  } from 'next/router';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
} from '@/components/ui/card''
  Rocket
  FileText
  Users
  Calendar
  Eye
  MessageSquare
} from 'lucide-react''
import { cn } from '@/lib/utils''
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card''
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react''
import { cn } from '@/lib/utils';
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

<<<<<<< HEAD
import { cn } from '@/lib/utils';
=======
interface WizardStep {;
  title: string;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface WizardStep {

<<<<<<< HEAD
  title: string;
  description: string;
  icon: React.ReactNode;
  action: {
    text: string;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  className?: string




import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/ card';
interface WizardStep {
  // TODO: Implement
  icon: React.ReactNode;,
  action: {
    text: string;,
  url: string;

  skipText?: string;
interface OnboardingWizardProps {
  // TODO: Implement
  };

interface OnboardingWizardProps {;

  type: 'client' | 'talent';',
  onComplete: () => void;
  onSkip: () => void;
  className?: string;
pr-12325
export function OnboardingWizard(): any ({;
  type,;
  onComplete,;
<<<<<<< HEAD



=======
  type,
  onComplete,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onSkip,;
  className,;
}:,  OnboardingWizardProps) {;,
  const [currentStep, setCurrentStep] = useState(0);
<<<<<<< HEAD


=======
  const router = useRouter(); // Changed from useNavigate to useRouter
  className,;)
}: OnboardingWizardProps) {;
  const router = useRouter(); // Changed from useNavigate to useRouter;
pr-12325
  const { user } = useAuth()
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
        </div>;
        <div className='flex flex-col items-center text-center p-4'>;
          <div className='bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4'>;

import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import { cn } from '@/lib/utils',;
interface WizardStep {;
  title: string,;
  description: string,;
  icon: React.ReactNode,;
  action: {;,
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
export function OnboardingWizard({ type, onComplete, onSkip, className }:,  OnboardingWizardProps) {,
  const [currentStep, setCurrentStep] = useState(0),
  const router = useRouter(), // Changed from useNavigate to useRouter
  const { user } = useAuth(),
  // Define steps based on user type,
  const clientSteps: WizardStep[] = [,
    {
      title: "Post your first job","
      description: "Describe the talent you need for your project","
      icon: <FileText className="h-6 w-6 text-zion-purple" />,"
      action: {,
        text: "Post a Job","
        url: "/post-job""
      },
      skipText: "I'll do this later""
    },
    {
      title: "View suggested matches","
      description: "Our AI system will find the best talent matches","
      icon: <Users className="h-6 w-6 text-zion-cyan" />,"
      action: {,
        text: "View Matches","
        url: "/talent""
      },
      skipText: "Skip for now""
    },
    {
      title: "Contact talent","
      description: "Reach out to the talent that fits your needs","
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,"
      action: {,
  const talentSteps: WizardStep[] = [,
    {
      title: "Complete your profile","
      description: "Add your skills, experience, and preferences","
      icon: <FileText className="h-6 w-6 text-zion-purple" />,"
      action: {,
        text: "Edit Profile","
        url: "/profile""
      },
      skipText: "I'll do this later""
    },
    {
      title: "Define skills & availability","
      description: "Let clients know when you're available and what you can do","
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,"
      action: {,
        text: "Set Availability","
        url: "/profile?tab=skills""
      },
      skipText: "Skip for now""
    },
    {
      title: "Preview your profile","
      description: "See how clients will view your profile","
      icon: <Eye className="h-6 w-6 text-zion-purple" />,"
      action: {,
        text: "Preview Profile","
        url: `/talent/${user?.id}``
      },
      skipText: "Skip for now""
    },
    {
      title: "Enable AI matchmaking","
      description: "Let our AI find the perfect opportunities for you","
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,"
      action: {
      <CardHeader>
        <CardTitle className="text-center text-white">"
          {type === 'client' ? '
            "Ready to find top IT talent?" : "
            "Let's build your professional profile"}"
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">"
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">"

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {

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
<<<<<<< HEAD

        text: 'Browse Talent',
        url: '/talent',
      },
    },
  ]

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

        text: 'Enable Matchmaking',
        url: '/talent-dashboard',
      },
    },
  ]
  const steps = type === 'client' ? clientSteps : talentSteps
  // Navigate to the specified URL
  const handleAction = () => {
    const currentStepData = steps[currentStep]
    if (!currentStepData) return;
    if (currentStep < steps.length - 1) {
      router.push(currentStepData.action.url); // Changed to router.push
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      router.push(currentStepData.action.url); // Changed to router.push
      onComplete()
    }
  }
  // Skip the current step
  const handleSkip = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      onSkip()
    }
  }
    >

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
=======
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle className='text-center text-white'>
          {type === 'client'
            ? 'Ready to find top IT talent?'
            : "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className='flex items-center mb-6'>;
          {/* Step dots */}


>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

          <div className='flex items-center justify-center flex-1'>
          <div className='flex items-center justify-center flex-1'>
          <div className="flex items-center justify-center flex-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  'h-2 w-2 rounded-full mx-1',                  index === currentStep
                    ? 'bg-zion-purple scale-125'


=======
          <div className="flex items-center justify-center flex-1">
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1","
                  index === currentStep
                    ? "bg-zion-purple scale-125""
                    : index < currentStep
                    ? "bg-zion-cyan""
                    : "bg-zion-blue-light""

            {steps[currentStep]?.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep]?.title}</h3>
          <p className="text-zion-slate-light mb-6">{steps[currentStep]?.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
                  "h-2 w-2 rounded-full mx-1",
}

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
                  index === currentStep
                    ? "bg-zion-purple scale-125"


        <Button;
          onClick={handleAction}>;

            variant='ghost
            className='text-zion-slate-light hover:text-white
            onClick={handleSkip}>;
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

<<<<<<< HEAD


            onClick={handleSkip}
          >;



=======
            variant="ghost"""
            className="text-zion-slate-light hover:text-white""
            onClick={handleSkip}
          >;
<<<<<<< HEAD
=======

    ;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      icon: <FileText className='h - 6 w - 6 text - zion - purple' />,

      icon: <Users className='h - 6 w - 6 text - zion - cyan' />,

      icon: <MessageSquare className='h - 6 w - 6 text - zion - purple' />,


      icon: <Calendar className='h - 6 w - 6 text - zion - cyan' />,

      icon: <Eye className='h - 6 w - 6 text - zion - purple' />,

      icon: <Rocket className='h - 6 w - 6 text - zion - cyan' />,

      <CardHeader>;

        <CardTitle className='text - center text - white'>;

      <CardContent>;

        <div className='flex items - center mb - 6'>;
          <div className='flex items - center justify - center flex - 1'>;
pr-12325
                className={cn (
                  'h - 2 w - 2 rounded - full mx - 1',                  index === current_step;
                    ? 'bg - zion - purple scale - 125';
                    : index < current_step;
                      ? 'bg - zion - cyan';
                      : 'bg - zion - blue - light')}              />))}'
          </div>;
        </div>;
        <div className='flex flex - col items - center text - center p - 4'>;
          <div className='bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4'>;,
            {steps[current_step]?.icon}
          </div>;
          <h3 className='text - xl font - bold text - white mb - 2'>;,
            {steps[current_step]?.title}
          </h3>;
          <p className='text - zion - slate - light mb - 6'>;,
            {steps[current_step]?.description}
          </p>;
        </div>;
      </CardContent>;
      <CardFooter className='flex flex - col space - y-2'>;
        <Button;
          className='w - full bg - zion - purple hover:bg - zion - purple - light';',
          on_click={handle_action}        >;,
          {steps[current_step]?.action.text}
        </Button>;
        {steps[current_step]?.skip_text && (,
          <Button;
            variant='ghost';
            className='text - zion - slate - light hover:text - white';',
            on_click={handle_skip}          >;,
            {steps[current_step]?.skip_text}
          </Button>)}
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
=======
;
}}}}}}}]]
;
      </CardFooter>
    </Card>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
                      ? 'bg - zion - cyan';')
                      : 'bg - zion - blue - light')}              />))}
        <div className='flex flex - col items - center text - center p - 4'>;
          <div className='bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4'>;
          <h3 className='text - xl font - bold text - white mb - 2'>;
          <p className='text - zion - slate - light mb - 6'>;
      <CardFooter className='flex flex - col space - y-2'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
            variant='ghost';
            className='text - zion - slate - light hover:text - white';
            on_click={handle_skip}          >;

    );
pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba
