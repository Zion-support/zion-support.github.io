
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';

import Rocket from 'lucide-react/dist/esm/icons/rocket';

import {useState, useEffect} from 'react';
import {use_navigate} from 'react-router-dom';
import {use_auth} from '@/hooks / use_auth';
import {Button} from '@/components / ui / button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components / ui / card';
import Rocket from 'lucide-react / dist / esm / icons / rocket';
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';
import {cn} from '@/lib / utils';
interface WizardStep {
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';
import {cn} from '@/lib/utils';
interface WizardStep {;
  title: string,;
  description: string,;
  icon: React && React.ReactNode,;
  action: {;
    text: string,;
    url: string;
  };
  skipText?: string;
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface OnboardingWizardProps {;
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;
}
=======

export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;

  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();

  title: string,
  description: string,
  icon: React.ReactNode,
  action: {
    text: string,
    url: string
  };
  skipText?: string
}

interface OnboardingWizardProps {
  type: 'client' | 'talent',
  onComplete: () => void,
  onSkip: () => void,
  className?: string
}

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from 'react',;
import { useNavigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import Rocket from 'lucide-react/dist/esm/icons/rocket',;
import { FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react',;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {

  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
  const { user } = useAuth(),

  

  title: string
  description: string
  icon: React.ReactNode
  action: {
    text: string

    url: string
  }
  skipText?: string
}
interface OnboardingWizardProps {

  type: 'client' | 'talent'
  onComplete: () => void
  onSkip: () => void

  className?: string
=======
}
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
  const { user } = useAuth(),
  
    {
      title: "Define skills & availability"
      description: "Let clients know when you're available and what you can do"
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />
      action: {
        text: "Set Availability"
        url: "/profile?tab=skills"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },
      skipText: "Skip for now"
    },


      },
      skipText: "Skip for now"
    },


  const talentSteps: WizardStep[] = [;
    {;
      title: "Complete your profile",;
      description: "Add your skills, experience, and preferences";
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Edit Profile",;
        url: "/profile";
      };
      skipText: "I'll do this later";
    };
    {;
      title: "Define skills & availability",;
      description: "Let clients know when you're available and what you can do",;
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "Set Availability",;
        url: "/profile?tab=skills";
      };
      skipText: "Skip for now";
    };
    {;
      title: "Preview your profile",;
      description: "See how clients will view your profile",;
      icon: <Eye className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Preview Profile",;
        url: `/talent/${user?.id}`;
      };
      skipText: "Skip for now";
    };
    {;
      title: "Enable AI matchmaking",;
      description: "Let our AI find the perfect opportunities for you",;
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "Enable Matchmaking",;
        url: "/talent-dashboard";
      }
    }
  ];
  const steps = type === 'client' ? clientSteps : talentSteps;
  // Navigate to the specified URL;
  const handleAction = () => {;
    if (currentStep < steps && steps.length - 1) {;
      navigate(steps[currentStep].action && action.url);
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      navigate(steps[currentStep].action && action.url);
      onComplete();
    }
  };  // Skip the current step;
  const handleSkip = () => {;
    if (currentStep < steps && steps.length - 1) {;
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      onSkip();
    }
  };
import { useState, useEffect } from 'react',;
import { useNavigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import Rocket from 'lucide-react/dist/esm/icons/rocket',;
import { FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react',;
import { cn } from '@/lib/utils',;
;
interface WizardStep {;
  title:string,;
  description:string,;
  icon:React.ReactNode,;
  action:{;
    text:string,;
    url:string;
  },;
  skipText?:string,;}
;
interface OnboardingWizardProps {;
  type:'client' | 'talent',;
  onComplete:() => void,;
  onSkip:() => void,;
  className?:string;
}
;
export function OnboardingWizard({ type, onComplete, onSkip, className } OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0),;
  const navigate = useNavigate(),;
  const { user } = useAuth(),;
  ;
  // Define steps based on user type;
  const clientSteps:WizardStep[] = [;
    {;
      title:"Post your first job",;
      description:"Describe the talent you need for your project",;
      icon:<FileText className="h-6 w-6 text-zion-purple" />,;
      action:{;
        text:"Post a Job",;
        url:"/post-job";
      },;
      skipText:"I'll do this later";
    },;
    {;
      title:"View suggested matches",;
      description:"Our AI system will find the best talent matches",;
      icon:<Users className="h-6 w-6 text-zion-cyan" />,;
      action:{;
        text:"View Matches",;
        url:"/talent";
      },;
      skipText:"Skip for now";
    },;
    {;
      title:"Contact talent",;
      description:"Reach out to the talent that fits your needs",;
      icon:<MessageSquare className="h-6 w-6 text-zion-purple" />,;
      action:{;
        text:"Browse Talent",;
        url:"/talent";
      }
    }
  ],;
;
  const talentSteps:WizardStep[] = [;
    {;
      title:"Complete your profile",;
      description:"Add your skills, experience, and preferences",;
      icon:<FileText className="h-6 w-6 text-zion-purple" />,;
      action:{;
        text:"Edit Profile",;
        url:"/profile";
      },;
      skipText:"I'll do this later";
    },;
    {;
      title:"Define skills & availability",;
      description:"Let clients know when you're available and what you can do",;
      icon:<Calendar className="h-6 w-6 text-zion-cyan" />,;
      action:{;
        text:"Set Availability",;
        url:"/profile?tab=skills";
      },;
      skipText:"Skip for now";
    },;
    {;
      title:"Preview your profile",;
      description:"See how clients will view your profile",;
      icon:<Eye className="h-6 w-6 text-zion-purple" />,;
      action:{;
        text:"Preview Profile",;
        url:`/talent/${user?.id}`;
      },;
      skipText:"Skip for now";
    },;
    {;
      title:"Enable AI matchmaking",;
      description:"Let our AI find the perfect opportunities for you",;
      icon:<Rocket className="h-6 w-6 text-zion-cyan" />,;
      action:{;
        text:"Enable Matchmaking",;
        url:"/talent-dashboard";
      }
    }
  ],;
  ;
  const steps = type === 'client' ? clientSteps :talentSteps,;
;
  // Navigate to the specified URL;
  const handleAction = () => {;
    if (currentStep < steps.length - 1) {;
      navigate(steps[currentStep].action.url),;
      setCurrentStep(currentStep + 1),;
    } else {;
      // Last step;
      navigate(steps[currentStep].action.url),;
      onComplete(),;
    }
  },;
  ;
  // Skip the current step;
  const handleSkip = () => {;
    if (currentStep < steps.length - 1) {;
      setCurrentStep(currentStep + 1),;
    } else {;
      // Last step;
      onSkip(),;
    }
  },;
  ;
  return (;
=======

  return (    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;
      <CardHeader>;
        <CardTitle className="text-center text-white">;
          {type === 'client' ? ;

                  "h-2 w-2 rounded-full mx-1"

                  "h-2 w-2 rounded-full mx-1",

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
