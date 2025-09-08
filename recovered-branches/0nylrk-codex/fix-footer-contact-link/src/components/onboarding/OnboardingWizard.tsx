import { useState, useEffect  } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';
import {cn} from '@/lib/utils';
  action: {'
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';''
import {cn} from '@/lib/utils';'

interface WizardStep {;
  title: string,,
  description: string,;
  icon: React && React.ReactNode,;
  action: {;
    text: string,;
    url: string
};
  skipText?: string;


export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;import { useState, useEffect } from 'react',;
import { useNavigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import Rocket from 'lucide-react/dist/esm/icons/rocket',;
import { FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react';;

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
interface OnboardingWizardProps {;'
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;
    {
      title: "Preview your profile"
      description: "See how clients will view your profile"
      },
      skipText: "Skip for now"
    },
  
  
  
  return (

    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
      <CardHeader>"
        <CardTitle className="text-center text-white">'
          {type === 'client' ?"
            "Ready to find top IT talent?" :

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
      action: {;"
        text: "Browse Talent",;"
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
      action: {;"
        text: "Enable Matchmaking",;"
        url: "/talent-dashboard";
      }
    }
  ];

    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";            "Ready to find top IT talent?" :;
            {steps[currentStep].icon}
          </div>;"
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;"
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;
        </div>;
      </CardContent>;"
      <CardFooter className="flex flex-col space-y-2">;
        <Button
          className="w-full bg-zion-purple hover:bg-zion-purple-light"
        {steps[currentStep].skipText && (;
  );
};