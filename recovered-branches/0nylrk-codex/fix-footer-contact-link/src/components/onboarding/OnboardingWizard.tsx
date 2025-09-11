
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import Rocket from 'lucide-react/dist/esm/icons/rocket';

import {useState, useEffect} from 'react';
import {use_navigate} from 'react-router-dom';
import {use_auth} from '@/hooks / use_auth';
import {Button} from '@/components / ui / button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components / ui / card';
import Rocket from 'lucide-react / dist / esm / icons / rocket';
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';
import {cn} from '@/lib / utils';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface WizardStep {
  title: string
  description: string
  icon: React.ReactNode
  action: {
=======

interface WizardStep {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface OnboardingWizardProps {;
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;
}
<<<<<<< HEAD
export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();
<<<<<<< HEAD
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import { FileText, Users, Calendar, Eye, MessageSquare  } from 'lucide-react';
import { cn } from '@/lib/utils';
interface WizardStep {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;

  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {

  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
  const { user } = useAuth(),

  

<<<<<<< HEAD
}

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
  const { user } = useAuth(),
  
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
      title: "Post your first job"
      description: "Describe the talent you need for your project"
      icon: <FileText className="h-6 w-6 text-zion-purple" />
      action: {
        text: "Post a Job"
        url: "/post-job"
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },
      skipText: "I'll do this later"
    },


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      skipText: "I'll do this later"
    }
      },
      skipText: "I'll do this later"
    },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "View suggested matches"
      description: "Our AI system will find the best talent matches"
      icon: <Users className="h-6 w-6 text-zion-cyan" />
      action: {
        text: "View Matches"
        url: "/talent"
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },
      skipText: "Skip for now"
    },


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Contact talent"
      description: "Reach out to the talent that fits your needs"
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />
      action: {
        text: "Browse Talent"
        url: "/talent"
      }
    }
<<<<<<< HEAD

    text: string,
    url: string;
  }
  skip_text?: string;
}
interface OnboardingWizardProps {
  type: 'client' | 'talent',
  on_complete: () => void,
  on_skip: () => void,
  class_name?: string;
}
export /**
 * OnboardingWizard - Function description
 */
function OnboardingWizard() {
  const [current_step, setCurrentStep] = useState (0);
  const navigate = use_navigate ();
  const { user } = use_auth ();
;
  // Define steps based on user type;
  const client_steps: WizardStep[] = [;
    {
      title: "Post your first job",
      description: "Describe the talent you need for your project",
      icon: <FileText className="h - 6 w - 6 text - zion - purple" />,
      action: {
        text: "Post a Job",
        url: "/post - job";
      }
      skip_text: "I'll do this later";
    }
    {
      title: "View suggested matches",
      description: "Our AI system will find the best talent matches",
      icon: <Users className="h - 6 w - 6 text - zion - cyan" />,
      action: {
        text: "View Matches",
        url: "/talent";
      }
      skip_text: "Skip for now";
    }
    {
      title: "Contact talent",
      description: "Reach out to the talent that fits your needs",
      icon: <MessageSquare className="h - 6 w - 6 text - zion - purple" />,
      action: {
        text: "Browse Talent",
        url: "/talent";
      }
    }
  ];
;
  const talent_steps: WizardStep[] = [;
  ];
  const talentSteps: WizardStep[] = [
    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";
<<<<<<< HEAD
      icon: <FileText className="h-6 w-6 text-zion-purple" />
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];
;
  const talent_steps: WizardStep[] = [;

    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";
      icon: <FileText className="h-6 w-6 text-zion-purple" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ],

  const talentSteps: WizardStep[] = [
    {
      title: "Complete your profile",
      description: "Add your skills, experience, and preferences",
      icon: <FileText className="h-6 w-6 text-zion-purple" />,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      action: {
        text: "Edit Profile"
        url: "/profile"
      }
      skipText: "I'll do this later"
    }
      },
      skipText: "I'll do this later"
    },
<<<<<<< HEAD
      },
      skipText: "I'll do this later"
    },
=======

      action: {
        text: "Edit Profile"
        url: "/profile"

      },
      skipText: "I'll do this later"
    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Define skills & availability"
      description: "Let clients know when you're available and what you can do"
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />
      action: {
        text: "Set Availability"
        url: "/profile?tab=skills"
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },
      skipText: "Skip for now"
    },


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Preview your profile"
      description: "See how clients will view your profile"
      icon: <Eye className="h-6 w-6 text-zion-purple" />
      action: {
        text: "Preview Profile"
        url: `/talent/${user?.id}`
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      },
      skipText: "Skip for now"
    },


<<<<<<< HEAD
      },
      skipText: "Skip for now"
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Enable AI matchmaking"
      description: "Let our AI find the perfect opportunities for you"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />
      action: {
<<<<<<< HEAD
<<<<<<< HEAD
        text: "Enable Matchmaking"
        url: "/talent-dashboard"
      }
    }
  ];
  const steps = type === 'client' ? clientSteps : talentSteps;
  // Navigate to the specified URL
  const handleAction = () => {
    if (currentStep < steps.length - 1) {
      navigate(steps[currentStep].action.url);
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      navigate(steps[currentStep].action.url);
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
        text: "Enable Matchmaking",
        url: "/talent-dashboard"
      }
    }
  };
  ],;
  const steps = type === 'client' ? clientSteps : talentSteps,;
  // Navigate to the specified URL;
  const handleAction = () => {;
    if (currentStep < steps.length - 1) {;
      navigate(steps[currentStep].action.url),;
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      navigate(steps[currentStep].action.url),;
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  

<<<<<<< HEAD
  
  
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle className="text-center text-white">
          {type === 'client' ?
            "Ready to find top IT talent?" :
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Define steps based on user type;
  const clientSteps: WizardStep[] = [;
    {;
      title: "Post your first job",;
      description: "Describe the talent you need for your project",;
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Post a Job",;
        url: "/post-job";
      };
      skipText: "I'll do this later";
    };
    {;
      title: "View suggested matches",;
      description: "Our AI system will find the best talent matches",;
      icon: <Users className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "View Matches",;
        url: "/talent";
      };
      skipText: "Skip for now";
    };
    {;
      title: "Contact talent",;
      description: "Reach out to the talent that fits your needs",;
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Browse Talent",;
        url: "/talent";
      }
    }
  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  const steps = type === 'client' ? clientSteps : talentSteps;
=======

  const steps = type === 'client' ? clientSteps : talentSteps;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Skip the current step;
  const handleSkip = () => {;
    if (currentStep < steps && steps.length - 1) {;
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      onSkip();
    }
  };
<<<<<<< HEAD
  return (

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

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;
      <CardHeader>;
        <CardTitle className="text-center text-white">;
          {type === 'client' ? ;
<<<<<<< HEAD
            "Ready to find top IT talent?" :;
=======
            "Ready to find top IT talent?" : ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="flex items-center mb-6">;
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">;
<<<<<<< HEAD


                  "h-2 w-2 rounded-full mx-1"

                  "h-2 w-2 rounded-full mx-1",

<<<<<<< HEAD
                  "h-2 w-2 rounded-full mx-1"
            "Let's build your professional profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">
            {steps.map((_, index) => (
=======
            {steps && steps.map((_, index) => (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1";

                  "h-2 w-2 rounded-full mx-1",
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  index === currentStep
                    ? "bg-zion-purple scale-125"
                    : index < currentStep
                    ? "bg-zion-cyan"
                    : "bg-zion-blue-light"
                )}
<<<<<<< HEAD
<<<<<<< HEAD
            {steps.map((_, index) => (;
              <div;
                key={index}
                className={cn(;
                  "h-2 w-2 rounded-full mx-1",;
                  index === currentStep;
                    ? "bg-zion-purple scale-125";
                    :index < currentStep;
                    ? "bg-zion-cyan";
                    :"bg-zion-blue-light";                )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />;
            ))}
          </div>;
        </div>;
;
        <div className="flex flex-col items-center text-center p-4">;
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;
=======
              />;
            ))}

          </div>;
        </div>;

        <div className="flex flex-col items-center text-center p-4">;
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {steps[currentStep].icon}
          </div>;
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex-col space-y-2">;
<<<<<<< HEAD
          onClick={handleAction}>;
          {steps[currentStep].action && action.text}
        </Button>;
        {steps[currentStep].skipText && (;
=======
        <Button
          className="w-full bg-zion-purple hover:bg-zion-purple-light"

          onClick={handleAction}>;
          {steps[currentStep].action && action.text}
        </Button>;

        {steps[currentStep].skipText && (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button
            variant="ghost"
            className="text-zion-slate-light hover:text-white"
            onClick={handleSkip}>;
<<<<<<< HEAD
        <Button;
          className="w-full bg-zion-purple hover:bg-zion-purple-light";
          onClick={handleAction}
        >;
          {steps[currentStep].action.text}
        </Button>;
        ;
        {steps[currentStep].skipText && (;
          <Button;
            variant="ghost";
            className="text-zion-slate-light hover:text-white";
            onClick={handleSkip}
          >;
            {steps[currentStep].skipText}
          </Button>;
        )}
      </CardFooter>;
    </Card>;
=======
            {steps[currentStep].skipText}
          </Button>;
        )}

      </CardFooter>;
    </Card>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <FileText className="h - 6 w - 6 text - zion - purple" />,
      action: {
        text: "Edit Profile",
        url: "/profile";
      }
      skip_text: "I'll do this later";
    }
    {
      title: "Define skills & availability",
      description: "Let clients know when you're available and what you can do",
      icon: <Calendar className="h - 6 w - 6 text - zion - cyan" />,
      action: {
        text: "Set Availability",
        url: "/profile?tab = skills";
      }
      skip_text: "Skip for now";
    }
    {
      title: "Preview your profile",
      description: "See how clients will view your profile",
      icon: <Eye className="h - 6 w - 6 text - zion - purple" />,
      action: {
        text: "Preview Profile",
        url: `/talent/${user?.id}`;
      }
      skip_text: "Skip for now";
    }
    {
      title: "Enable AI matchmaking",
      description: "Let our AI find the perfect opportunities for you",
      icon: <Rocket className="h - 6 w - 6 text - zion - cyan" />,
      action: {
        text: "Enable Matchmaking",
        url: "/talent - dashboard";
      }
    }
  ];
;
  const steps = type === 'client' ? client_steps : talent_steps;
;
  // Navigate to the specified URL;
  const handle_action = () =>: any {
    // Check condition
if ( {) {
  $2
}
      navigate (steps[current_step].action.url);
      setCurrentStep (current_step + 1);
    } else {
      // Last step;
      navigate (steps[current_step].action.url);
      on_complete ();
    }
  }
;
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
;
  return (
    <Card className={cn ("border border - zion - blue - light bg - zion - blue - dark / 80 backdrop - blur - sm w - full max - w-md", class_name)}>;
      <CardHeader>;
        <CardTitle className="text - center text - white">;
          {type === 'client' ?;
            "Ready to find top IT talent?" :;
            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="flex items - center mb - 6">;
          {/* Step dots */}
          <div className="flex items - center justify - center flex - 1">;
            {steps.map ((_, index) => (
              <div;
                key={index}
                className={cn (
                  "h - 2 w - 2 rounded - full mx - 1";
                  index === current_step;
                    ? "bg - zion - purple scale - 125";
                    : index < current_step;
                    ? "bg - zion - cyan";
                    : "bg - zion - blue - light")}
              />))}
          </div>;
        </div>;
        <div className="flex flex - col items - center text - center p - 4">;
          <div className="bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4">;
            {steps[current_step].icon}
          </div>;
          <h3 className="text - xl font - bold text - white mb - 2">{steps[current_step].title}</h3>;
          <p className="text - zion - slate - light mb - 6">{steps[current_step].description}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex - col space - y-2">;
        <Button;
          className="w - full bg - zion - purple hover:bg - zion - purple - light";
          on_click={handle_action}
        >;
          {steps[current_step].action.text}
        </Button>;
        {steps[current_step].skip_text && (
          <Button;
            variant="ghost";
            className="text - zion - slate - light hover:text - white";
            on_click={handle_skip}
          >;
            {steps[current_step].skip_text}
          </Button>)}
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 
}];
const talentSteps: WizardStep[] = [ 
};
skipText: "Skip for now" 
};
}];
: index < currentStep ? "bg-zion-cyan" : "bg-zion-blue-light") 
}/>) ) 
}</div> </div> </div> </CardContent> <CardFooter className="flex flex-col space-y-2" > <Button > {
  steps[currentStep].action.text 
}</Button> {
  steps[currentStep].skipText && (<Button variant="ghost" className="text-zion-slate-light hover:text-white" onClick= {
  handleSkip 
}> {
  steps[currentStep].skipText 
}</Button>) 
}</CardFooter> </Card>) 
}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">
            {steps[currentStep].icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          className="w-full bg-zion-purple hover:bg-zion-purple-light"
          onClick={handleAction}
        >
          {steps[currentStep].action.text}
        </Button>
        {steps[currentStep].skipText && (
          <Button
            variant="ghost"
            className="text-zion-slate-light hover:text-white"
            onClick={handleSkip}
          >
            {steps[currentStep].skipText}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
