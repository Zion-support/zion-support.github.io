
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect  } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
<<<<<<< HEAD
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
interface WizardStep {
=======
  title: string,
  description: string,
  icon: React.ReactNode,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  title: string
  description: string
  icon: React.ReactNode
  action: {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';
=======
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {cn} from '@/lib/utils';
interface WizardStep {;
  title: string,,
  description: string,;
  icon: React && React.ReactNode,;
  action: {;
    text: string,;
    url: string
};
  skipText?: string;
}

interface OnboardingWizardProps {;
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;
}

<<<<<<< HEAD
export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;

=======
export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();
<<<<<<< HEAD
<<<<<<< HEAD


=======
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import { FileText, Users, Calendar, Eye, MessageSquare  } from 'lucide-react';
import { cn } from '@/lib/utils';
interface WizardStep {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

=======
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from 'react',;
=======
export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;import { useState, useEffect } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useNavigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import Rocket from 'lucide-react/dist/esm/icons/rocket',;
import { FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react',;
import { cn } from '@/lib/utils',;
interface WizardStep {;
  title: string,,
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {

  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
  const { user } = useAuth(),

  

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
  const { user } = useAuth(),
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      },
      skipText: "I'll do this later"
    },


<<<<<<< HEAD
=======
      }
      skipText: "I'll do this later"
    }
      },
      skipText: "I'll do this later"
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: "View suggested matches"
      description: "Our AI system will find the best talent matches"
      icon: <Users className="h-6 w-6 text-zion-cyan" />
      action: {
        text: "View Matches"
        url: "/talent"
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      },
      skipText: "Skip for now"
    },


<<<<<<< HEAD
=======
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

      action: {
        text: "Edit Profile"
        url: "/profile"

=======
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
<<<<<<< HEAD

    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";


=======
  ];
  const talentSteps: WizardStep[] = [
    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";
      icon: <FileText className="h-6 w-6 text-zion-purple" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ],

  const talentSteps: WizardStep[] = [
    {
      title: "Complete your profile",
      description: "Add your skills, experience, and preferences",
      icon: <FileText className="h-6 w-6 text-zion-purple" />,
<<<<<<< HEAD

      action: {
        text: "Edit Profile"
        url: "/profile"

      },
      skipText: "I'll do this later"
    },


=======
      action: {
        text: "Edit Profile"
        url: "/profile"
      }
      skipText: "I'll do this later"
    }
      },
      skipText: "I'll do this later"
    },
      },
      skipText: "I'll do this later"
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: "Define skills & availability"
      description: "Let clients know when you're available and what you can do"
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />
      action: {
        text: "Set Availability"
        url: "/profile?tab=skills"
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      },
      skipText: "Skip for now"
    },


<<<<<<< HEAD
=======
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      },
      skipText: "Skip for now"
    },

<<<<<<< HEAD

<<<<<<< HEAD
=======
      },
      skipText: "Skip for now"
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: "Enable AI matchmaking"
      description: "Let our AI find the perfect opportunities for you"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />
      action: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        text: "Enable Matchmaking"
        url: "/talent-dashboard"
      }
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  
  
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle className="text-center text-white">
          {type === 'client' ?
            "Ready to find top IT talent?" :
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  // Define steps based on user type;
  const clientSteps: WizardStep[] = [;
    {;
      title: "Post your first job",,
  description: "Describe the talent you need for your project",;
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Post a Job",;
        url: "/post-job"
};
      skipText: "I'll do this later"
};
    {;
      title: "View suggested matches",,
  description: "Our AI system will find the best talent matches",;
      icon: <Users className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "View Matches",;
        url: "/talent"
};
      skipText: "Skip for now"
};
    {;
      title: "Contact talent",,
  description: "Reach out to the talent that fits your needs",;
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Browse Talent",;
        url: "/talent";
      }
    }
  ];
  const talentSteps: WizardStep[] = [;
    {;
      title: "Complete your profile",,
  description: "Add your skills, experience, and preferences";
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Edit Profile",;
        url: "/profile"
};
      skipText: "I'll do this later"
};
    {;
      title: "Define skills & availability",,
  description: "Let clients know when you're available and what you can do",;
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "Set Availability",;
        url: "/profile?tab=skills"
};
      skipText: "Skip for now"
};
    {;
      title: "Preview your profile",,
  description: "See how clients will view your profile",;
      icon: <Eye className="h-6 w-6 text-zion-purple" />,;
      action: {;
        text: "Preview Profile",;
        url: `/talent/${user?.id}`
};
      skipText: "Skip for now"
};
    {;
      title: "Enable AI matchmaking",,
  description: "Let our AI find the perfect opportunities for you",;
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;
      action: {;
        text: "Enable Matchmaking",;
        url: "/talent-dashboard";
      }
    }
  ];
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
  // Skip the current step;
  const handleSkip = () => {;
    if (currentStep < steps && steps.length - 1) {;
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      onSkip();
    }
  };

  return (    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;
      <CardHeader>;
        <CardTitle className="text-center text-white">;
          {type === 'client' ? ;
    {
      title: "Complete your profile"
<<<<<<< HEAD
      description: "Add your skills, experience, and preferences";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="flex items-center mb-6">;
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {steps && steps.map((_, index) => (;
              <div
                key={index}
                className={cn(
<<<<<<< HEAD
=======


                  "h-2 w-2 rounded-full mx-1"

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                  "h-2 w-2 rounded-full mx-1",

                  "h-2 w-2 rounded-full mx-1"
            "Let's build your professional profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                  "h-2 w-2 rounded-full mx-1",
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  index === currentStep
                    ? "bg-zion-purple scale-125"
                    : index < currentStep
                    ? "bg-zion-cyan"
                    : "bg-zion-blue-light"
                )}
<<<<<<< HEAD
<<<<<<< HEAD
              />;
            ))}

          </div>;
        </div>;

        <div className="flex flex-col items-center text-center p-4">;
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;

=======
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
              />;
            ))}
          </div>;
        </div>;
;
        <div className="flex flex-col items-center text-center p-4">;
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      description: "Add your skills, experience, and preferences";            "Ready to find top IT talent?" :;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            {steps[currentStep].icon}
          </div>;
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex-col space-y-2">;
        <Button
          className="w-full bg-zion-purple hover:bg-zion-purple-light"

          onClick={handleAction}>;
          {steps[currentStep].action && action.text}
        </Button>;

        {steps[currentStep].skipText && (;