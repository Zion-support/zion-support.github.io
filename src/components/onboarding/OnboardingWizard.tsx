
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
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
interface WizardStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: {
    text: string;
    url: string
  }
  skipText?: string
interface OnboardingWizardProps {
  type: 'client' | 'talent';
  onComplete: () => void;
  onSkip: () => void;
  className?: string

export function OnboardingWizard({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  type
  onComplete
  onSkip
  className
}: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter(); // Changed from useNavigate to useRouter
  const { user } = useAuth()
  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
      title: 'Post your first job'
      description: 'Describe the talent you need for your project'
      icon: <FileText className='h-6 w-6 text-zion-purple' />
      action: {
        text: 'Post a Job'
        url: '/post-job'
      }
      skipText: "I'll do this later"
    }
    {
      title: 'View suggested matches'
      description: 'Our AI system will find the best talent matches'
      icon: <Users className='h-6 w-6 text-zion-cyan' />
      action: {
        text: 'View Matches'
        url: '/talent'
      }
      skipText: 'Skip for now'
    }
    {
      title: 'Contact talent'
      description: 'Reach out to the talent that fits your needs'
      icon: <MessageSquare className='h-6 w-6 text-zion-purple' />
      action: {
        text: 'Browse Talent'
        url: '/talent'
      }
    }
  ]
  const talentSteps: WizardStep[] = [
    {
      title: 'Complete your profile'
      description: 'Add your skills, experience, and preferences'
      icon: <FileText className='h-6 w-6 text-zion-purple' />
      action: {
        text: 'Edit Profile'
        url: '/profile'
      }
      skipText: "I'll do this later"
    }
    {
      title: 'Define skills & availability'
      description: "Let clients know when you're available and what you can do"
      icon: <Calendar className='h-6 w-6 text-zion-cyan' />
      action: {
        text: 'Set Availability'
        url: '/profile?tab=skills'
      }
      skipText: 'Skip for now'
    }
    {
      title: 'Preview your profile'
      description: 'See how clients will view your profile'
      icon: <Eye className='h-6 w-6 text-zion-purple' />
      action: {
        text: 'Preview Profile'
        url: `/talent/${user?.id}`
      }
      skipText: 'Skip for now'
    }
    {
      title: 'Enable AI matchmaking'
      description: 'Let our AI find the perfect opportunities for you'
      icon: <Rocket className='h-6 w-6 text-zion-cyan' />
      action: {
        text: 'Enable Matchmaking'
        url: '/talent-dashboard'
      }
    }
  ]
  const steps = type === 'client' ? clientSteps : talentSteps
  // Navigate to the specified URL
  const handleAction = () => {
    const currentStepData = steps[currentStep]
    if (!currentStepData) return
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
  
>>>>>>>   // Define steps based on user type
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Define steps based on user type
>>>>>>>   const clientSteps: WizardStep[] = [
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

=======
        text: 'Browse Talent',
        url: '/talent',
      },
    },
  ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        text: "Browse Talent",
        url: "/talent"
      }
    }
  ],

<<<<<<< HEAD
  const talentSteps: WizardStep[] = [
=======
>>>>>>>   const talentSteps: WizardStep[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {
      title: "Complete your profile",
      description: "Add your skills, experience, and preferences",
      icon: <FileText className="h-6 w-6 text-zion-purple" />,
      action: {
        text: "Edit Profile",
        url: "/profile"
=======
=======
=======
  type,
  onComplete,
  onSkip,;
  className,;
}: OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter(); // Changed from useNavigate to useRouter
  const { user } = useAuth()
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
      title: "Post your first job",
      description: "Describe the talent you need for your project",
      icon: <FileText className="h-6 w-6 text-zion-purple" />,
      action: {
        text: "Post a Job",
        url: "/post-job"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      },
      skipText: "I'll do this later"
    },
    {
<<<<<<< HEAD
      title: "Define skills & availability",
      description: "Let clients know when you're available and what you can do",
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,
      action: {
        text: "Set Availability",
        url: "/profile?tab=skills"
=======
      title: "View suggested matches",
      description: "Our AI system will find the best talent matches",
      icon: <Users className="h-6 w-6 text-zion-cyan" />,
      action: {
        text: "View Matches",
        url: "/talent"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      },
      skipText: "Skip for now"
    },
    {
<<<<<<< HEAD
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

=======
=======
      title: "Contact talent",
      description: "Reach out to the talent that fits your needs",
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,
      action: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        text: 'Browse Talent',
        url: '/talent',
      },
    },
  ]
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        text: "Browse Talent",
        url: "/talent"
      }
    }
  ],

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
<<<<<<< HEAD
<<<<<<< HEAD

      <CardHeader>
=======
>>>>>>>       <CardHeader>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(

=======
          <div className='flex items-center justify-center flex-1'>
>>>>>>>             {steps.map((_, index) => (
=======
          <div className='flex items-center justify-center flex-1'>
=======
          <div className="flex items-center justify-center flex-1">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {steps.map((_, index) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div
                key={index}
                className={cn(
<<<<<<< HEAD
                  'h-2 w-2 rounded-full mx-1',                  index === currentStep
                    ? 'bg-zion-purple scale-125'

                    : index < currentStep
                      ? 'bg-zion-cyan'
                      : 'bg-zion-blue-light'
                )}              />
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center text-center p-4'>
          <div className='bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4'>
<<<<<<< HEAD
>>>>>>>             {steps[currentStep]?.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep]?.title}</h3>
          <p className="text-zion-slate-light mb-6">{steps[currentStep]?.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          className='w-full bg-zion-purple hover:bg-zion-purple-light'
          onClick={handleAction}        >
          {steps[currentStep]?.action.text}
        </Button>
        {steps[currentStep]?.skipText && (
          <Button
            variant='ghost'
            className='text-zion-slate-light hover:text-white'
            onClick={handleSkip}          >
>>>>>>>             {steps[currentStep]?.skipText}
          </Button>
        )}
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(

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

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
          onClick={handleAction}>;
          {steps[currentStep]?.action && action.text}
        </Button>;

        {steps[currentStep]?.skipText && (;

          <Button
            variant='ghost'
            className='text-zion-slate-light hover:text-white'
            onClick={handleSkip}>;
=======
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {steps[currentStep]?.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep]?.title}</h3>
          <p className="text-zion-slate-light mb-6">{steps[currentStep]?.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
<<<<<<< HEAD
          className='w-full bg-zion-purple hover:bg-zion-purple-light'
          onClick={handleAction}        >
          {steps[currentStep]?.action.text}
        </Button>
        {steps[currentStep]?.skipText && (
          <Button
            variant='ghost'
            className='text-zion-slate-light hover:text-white'
            onClick={handleSkip}          >
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {steps[currentStep]?.skipText}
          </Button>
        )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
      </CardFooter>
    </Card>
  )
}
<<<<<<< HEAD
=======
;
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </CardFooter>;
=======

;
}


>>>>>>>       </CardFooter>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
