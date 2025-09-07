<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect  } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
<<<<<<< HEAD

import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';

import Rocket from 'lucide-react/dist/esm/icons/rocket';
'
import {useState, useEffect} from 'react';'
import {use_navigate} from 'react-router-dom';'
import {use_auth} from '@/hooks / use_auth';'
import {Button} from '@/components / ui / button';'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components / ui / card';'
import Rocket from 'lucide-react / dist / esm / icons / rocket';'
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';'
import {cn} from '@/lib / utils';

  title: string,
  description: string,
  icon: React.ReactNode,
=======
<<<<<<< HEAD
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
=======
<<<<<<< HEAD
=======
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
<<<<<<< HEAD
=======

import Rocket from 'lucide-react/dist/esm/icons/rocket';
'
import {useState, useEffect} from 'react';'
import {use_navigate} from 'react-router-dom';'
import {use_auth} from '@/hooks / use_auth';'
import {Button} from '@/components / ui / button';'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components / ui / card';'
import Rocket from 'lucide-react / dist / esm / icons / rocket';'
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';'
import {cn} from '@/lib / utils';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
  title: string,
  description: string,
  icon: React.ReactNode,

=======
interface WizardStep {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string
  description: string
  icon: React.ReactNode
  action: {
<<<<<<< HEAD

=======
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {cn} from '@/lib/utils';
  action: {'
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';''
import {cn} from '@/lib/utils';'

interface WizardStep {;
  title: string,,
  description: string,;
  icon: React && React.ReactNode,;

  action: {;,
  text: string,;
    url: string;
  };
  skipText?: string;
<<<<<<< HEAD
pr-12325

interface OnboardingWizardProps {;
  type: 'client' | 'talent',;
interface OnboardingWizardProps {;'
  type: 'client' | 'talent',;'

  onComplete: () => void,;
  onSkip: () => void,;}
  className?: string;}
}

=======
}
interface OnboardingWizardProps {;
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;
}
export function OnboardingWizard(): any ({ type, onComplete, onSkip, className }: OnboardingWizardProps) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import { FileText, Users, Calendar, Eye, MessageSquare  } from 'lucide-react';
import { cn } from '@/lib/utils';
interface WizardStep {
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  title: string,
  description: string,
  icon: React.ReactNode,
  action: {
    text: string,
<<<<<<< HEAD
    url: string},
  skipText?: string
=======
    url: string
  };
  skipText?: string
}

interface OnboardingWizardProps {

  type: 'client' | 'talent',
  onComplete: () => void,
  onSkip: () => void,
  className?: string;
}

export function OnboardingWizard() { return null; }
  const { user } = useAuth();
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
interface OnboardingWizardProps {;'
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  title: string
  description: string
  icon: React.ReactNode
  action: {

import {cn} from '@/lib/utils';
  action: {'
import {FileText, Users, Calendar, Eye, MessageSquare} from 'lucide-react';''
import {cn} from '@/lib/utils';'

interface WizardStep {;
  title: string,,
  description: string,;
  icon: React && React.ReactNode,;

  action: {;,
  text: string,;
    url: string;
  };
  skipText?: string;
pr-12325

interface OnboardingWizardProps {;
  type: 'client' | 'talent',;
interface OnboardingWizardProps {;'
  type: 'client' | 'talent',;'

  onComplete: () => void,;
  onSkip: () => void,;}
  className?: string;}
}

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

<<<<<<< HEAD
  type: 'client' | 'talent',
  onComplete: () => void,
  onSkip: () => void,
  className?: string;
}
=======
  type: 'client' | 'talent'
  onComplete: () => void
  onSkip: () => void
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function OnboardingWizard() { return null; }
  const { user } = useAuth();

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
interface OnboardingWizardProps {;'
  type: 'client' | 'talent',;
  onComplete: () => void,;
  onSkip: () => void,;
  className?: string;

}
export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0),
  const navigate = useNavigate(),
  const { user } = useAuth(),
<<<<<<< HEAD

  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
=======
  
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
<<<<<<< HEAD
      title: "Post your first job",
      description: "Describe the talent you need for your project",
      icon: <FileText className = $2;
      action: {
        text: "Post a Job"
        url: "/post-job"
      }
      skipText: "I'll do this later"
    }
    {
      title: "View suggested matches",
      description: "Our AI system will find the best talent matches",
      icon: <Users className = $2;
      action: {
        text: "View Matches"
        url: "/talent"
      }
      skipText: "Skip for now"
    }
    {
      title: "Contact talent",
      description: "Reach out to the talent that fits your needs",
      icon: <MessageSquare className = $2;
      action: {
        text: "Browse Talent"
        url: "/talent"
      }
    }
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      title: "Post your first job"
      description: "Describe the talent you need for your project"
      icon: <FileText className="h-6 w-6 text-zion-purple" />
      action: {
        text: "Post a Job"
        url: "/post-job"

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      },
      skipText: "I'll do this later"
    },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
      }
      skipText: "I'll do this later"
    }
      },
      skipText: "I'll do this later"
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      },
      skipText: "Skip for now"
    },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      title: "Contact talent"
      description: "Reach out to the talent that fits your needs"
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />
      action: {
        text: "Browse Talent"
        url: "/talent"
<<<<<<< HEAD
=======
      }
    }

  // Define steps based on user type;
<<<<<<< HEAD
  const clientSteps: WizardStep[] = []
    {}
      title: "Post your first job""
      description: "Describe the talent you need for your project""
      icon: <FileText className="h-6 w-6 text-zion-purple" />
      action: {"
        text: "Post a Job""
        url: "/post-job"

      },'"
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
    }

  // Define steps based on user type;
  const clientSteps: WizardStep[] = []
    {}
      title: "Post your first job""
      description: "Describe the talent you need for your project""
      icon: <FileText className="h-6 w-6 text-zion-purple" />
      action: {"
        text: "Post a Job""
        url: "/post-job"

      },'"
      skipText: "I'll do this later"
    },

    {"
      title: "View suggested matches""
      description: "Our AI system will find the best talent matches""
      icon: <Users className="h-6 w-6 text-zion-cyan" />
      action: {"
        text: "View Matches""
        url: "/talent"

      },"
      skipText: "Skip for now"
    },

    {"
      title: "Contact talent""
      description: "Reach out to the talent that fits your needs""
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />
      action: {"
        text: "Browse Talent""
        url: "/talent"
      }
    }

  ],

  const talentSteps: WizardStep[] = []
    {"
      title: "Complete your profile","
      description: "Add your skills, experience, and preferences","
      icon: <FileText className="h-6 w-6 text-zion-purple" />,

    {
      title: "Define skills & availability"
      description: "Let clients know when you're available and what you can do"

      icon: <Calendar className="h-6 w-6 text-zion-cyan" />
      action: {"
        text: "Set Availability""
        url: "/profile?tab=skills"

      },

      skipText: "Skip for now"
    },

    {
      title: "Preview your profile"
      description: "See how clients will view your profile"

      icon: <Eye className="h-6 w-6 text-zion-purple" />
      action: {"
        text: "Preview Profile"
        url: `/talent/${user?.id}`

      },"
      skipText: "Skip for now"
    },

    {
      title: "Enable AI matchmaking"
      description: "Let our AI find the perfect opportunities for you"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />
      action: {

        text: "Enable Matchmaking"
        url: "/talent-dashboard"
      }
    }

  ];
<<<<<<< HEAD

  const steps = type === 'client' ? clientSteps : talentSteps;
  // Navigate to the specified URL;
  const handleAction = () => {}
    if (currentStep < steps.length - 1) {}
      navigate(steps[currentStep].action.url);
      setCurrentStep(currentStep + 1)
    } else {}
      // Last step;
=======
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
>>>>>>> merged-prs-20250907-203621
  ],

  const talentSteps: WizardStep[] = [
    {
      title: "Complete your profile",
      description: "Add your skills, experience, and preferences",
<<<<<<< HEAD
      icon: <FileText className = $2;
=======
      icon: <FileText className="h-6 w-6 text-zion-purple" />,
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      action: {
        text: "Edit Profile"
        url: "/profile"
      }
      skipText: "I'll do this later"
    }
<<<<<<< HEAD
    {
      title: "Define skills & availability",
      description: "Let clients know when you're available and what you can do",
      icon: <Calendar className = $2;
      action: {
        text: "Set Availability",
        url: "/profile?tab = $2;
      skipText: "Skip for now"
    }
    {
      title: "Preview your profile",
      description: "See how clients will view your profile",
      icon: <Eye className = $2;
      action: {
        text: "Preview Profile"
        url: `/talent/${user?.id}`
      }
      skipText: "Skip for now"
    }
    {
      title: "Enable AI matchmaking",
      description: "Let our AI find the perfect opportunities for you",
      icon: <Rocket className = $2;
      action: {
=======
      },
      skipText: "I'll do this later"
    },
      },
      skipText: "I'll do this later"
    },
=======

      action: {
        text: "Edit Profile"
        url: "/profile"

      },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      skipText: "I'll do this later"
    },

    {"
      title: "View suggested matches""
      description: "Our AI system will find the best talent matches""
      icon: <Users className="h-6 w-6 text-zion-cyan" />
      action: {"
        text: "View Matches""
        url: "/talent"

      },"
      skipText: "Skip for now"
    },

    {"
      title: "Contact talent""
      description: "Reach out to the talent that fits your needs""
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />
      action: {"
        text: "Browse Talent""
        url: "/talent"
      }
    }

  ],

  const talentSteps: WizardStep[] = []
    {"
      title: "Complete your profile","
      description: "Add your skills, experience, and preferences","
      icon: <FileText className="h-6 w-6 text-zion-purple" />,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      title: "Define skills & availability"
      description: "Let clients know when you're available and what you can do"

      icon: <Calendar className="h-6 w-6 text-zion-cyan" />
      action: {"
        text: "Set Availability""
        url: "/profile?tab=skills"

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      },

      skipText: "Skip for now"
    },

<<<<<<< HEAD
=======

<<<<<<< HEAD
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {
      title: "Preview your profile"
      description: "See how clients will view your profile"

      icon: <Eye className="h-6 w-6 text-zion-purple" />
      action: {"
        text: "Preview Profile"
        url: `/talent/${user?.id}`
<<<<<<< HEAD
      }
      skipText: "Skip for now"
    }
      },
      skipText: "Skip for now"
    },
=======

<<<<<<< HEAD
      },"
      skipText: "Skip for now"
    },

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {
      title: "Enable AI matchmaking"
      description: "Let our AI find the perfect opportunities for you"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />
      action: {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        text: "Enable Matchmaking"
        url: "/talent-dashboard"
      }
    }
<<<<<<< HEAD
  ],
  
  const steps = $2;
  // Navigate to the specified URL
  const handleAction = () => {
    if (currentStep < steps.length - 1) {
      navigate($2);
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      navigate($2);
      onComplete()
    }
  },
  
  // Skip the current step
  const handleSkip = $2;
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle className="text-center text-white">
          {type === 'client' ?
            "Ready to find top IT talent?" :
=======
  ];
  const steps = type === 'client' ? clientSteps : talentSteps;
  // Navigate to the specified URL
  const handleAction = () => {
    if (currentStep < steps.length - 1) {
      navigate(steps[currentStep].action.url);
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      navigate(steps[currentStep].action.url);
      onComplete()
    }
  }
<<<<<<< HEAD
  // Skip the current step;
  const handleSkip = () => {}
    if (currentStep < steps.length - 1) {}
      setCurrentStep(currentStep + 1)
    } else {}
      // Last step;
      onSkip()
    }
  }"
        text: "Enable Matchmaking","
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        url: "/talent-dashboard"
      }
    }
  };
<<<<<<< HEAD
  ],;'
=======
  ],;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;
      action: {;"
        text: "Browse Talent",;"
        url: "/talent";
      }
    }
  ];
  const talentSteps: WizardStep[] = [;

      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;
      action: {;"
        text: "Enable Matchmaking",;"
        url: "/talent-dashboard";
=======
=======

<<<<<<< HEAD
        text: "Enable Matchmaking"
        url: "/talent-dashboard"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  ];

  const steps = type === 'client' ? clientSteps : talentSteps;
  // Navigate to the specified URL;
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
  const handleAction = () => {}
    if (currentStep < steps.length - 1) {}
      navigate(steps[currentStep].action.url);
      setCurrentStep(currentStep + 1)
    } else {}
      // Last step;
      navigate(steps[currentStep].action.url);
      onComplete()
    }
  }
  // Skip the current step;
  const handleSkip = () => {}
    if (currentStep < steps.length - 1) {}
      setCurrentStep(currentStep + 1)
    } else {}
      // Last step;
      onSkip()
    }
  }"
        text: "Enable Matchmaking","
        url: "/talent-dashboard"
      }
    }
  };
  ],;'
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
=======
<<<<<<< HEAD
  
  
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>
      <CardHeader>"
        <CardTitle className="text-center text-white">'
          {type === 'client' ?"
            "Ready to find top IT talent?" :
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";
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

      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;
      action: {;"
        text: "Browse Talent",;"
        url: "/talent";
      }
    }
  ];
  const talentSteps: WizardStep[] = [;

      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;
      action: {;"
        text: "Enable Matchmaking",;"
        url: "/talent-dashboard";
      }
    }
  ];
<<<<<<< HEAD
=======
  const steps = type === 'client' ? clientSteps : talentSteps;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Navigate to the specified URL;
<<<<<<< HEAD
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
  const handleAction = () => {;

  return ()'
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>"
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="text-center text-white">"
</CardTitle>"
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;"
</FileText>"
      icon: <Users className="h-6 w-6 text-zion-cyan" />,;"
</Users>"
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;"
</MessageSquare>"
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;"
</FileText>"
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,;"
</Calendar>"
      icon: <Eye className="h-6 w-6 text-zion-purple" />,;"
</Eye>"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;"
</Rocket>

>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
    }
=======
  const handleSkip = () => {;
>>>>>>> origin/chore/fix-lint-and-merge
    if (currentStep < steps && steps.length - 1) {;
      setCurrentStep(currentStep + 1);
    } else {;
      // Last step;
      onSkip();
    }
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      <CardHeader>;
        <CardTitle className="text-center text-white">;
          {type === 'client' ? ;
            "Ready to find top IT talent?" : ;
"Ready to find top IT talent?" :;
    {
      title: "Complete your profile"

<<<<<<< HEAD
=======
=======
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
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;
      <CardHeader>;
        <CardTitle className="text-center text-white">;
          {type === 'client' ? ;
            "Ready to find top IT talent?" :;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="flex items-center mb-6">;
          {/* Step dots */}"
          <div className="flex items-center justify-center flex-1">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {steps && steps.map((_, index) => (;

                  "h-2 w-2 rounded-full mx-1",

<<<<<<< HEAD
            {steps[currentStep].icon}
          </div>;"
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;"
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;
        </div>;
      </CardContent>;"
      <CardFooter className="flex flex-col space-y-2">;
=======
=======


                  "h-2 w-2 rounded-full mx-1"

                  "h-2 w-2 rounded-full mx-1",

<<<<<<< HEAD
                  "h-2 w-2 rounded-full mx-1"
>>>>>>> merged-prs-20250907-203621
            "Let's build your professional profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">
            {steps.map((_, index) => (
              <div
<<<<<<< HEAD
                key = $2;
=======
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1";

                  "h-2 w-2 rounded-full mx-1",
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  index === currentStep
                    ? "bg-zion-purple scale-125"
                    : index < currentStep
                    ? "bg-zion-cyan"
                    : "bg-zion-blue-light"
                )}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {steps[currentStep].icon}
          </div>;"
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;"
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;
        </div>;
      </CardContent>;"
      <CardFooter className="flex flex-col space-y-2">;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        {steps[currentStep].skipText && (;

onClick={handleAction}>;
<<<<<<< HEAD
          {steps[currentStep].action && action.text}
        </Button>;
        {steps[currentStep].skipText && (;
=======
          {steps[currentStep].action && action.text}
        </Button>;
        {steps[currentStep].skipText && (;
=======
          onClick={handleAction}>;
          {steps[currentStep].action && action.text}
        </Button>;
        {steps[currentStep].skipText && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <Button
            variant="ghost"
            className="text-zion-slate-light hover:text-white"
            onClick={handleSkip}>;
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
<<<<<<< HEAD
  );
}

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      onComplete();
  // Skip the current step;
  const handleSkip = () => {;
      // Last step;
      onSkip();
  },

  return ()
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>"

      <CardHeader>
        <CardTitle className="text-center text-white">"
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;"
      icon: <Users className="h-6 w-6 text-zion-cyan" />,;"
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;"
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,;"
      icon: <Eye className="h-6 w-6 text-zion-purple" />,;"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;"

    if (currentStep < steps && steps.length - 1) {;
      navigate(steps[currentStep].action && action.url);
      // Last step;
  // Skip the current step;
      // Last step;

  return ()"
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;"

      <CardHeader>;
        <CardTitle className="text-center text-white">;"

      <CardContent>;
        <div className="flex items-center mb-6">;"
</div>"
          <div className="flex items-center justify-center flex-1">;"
</div>
              <div;
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1","
                  index === currentStep;"
                    ? "bg-zion-purple scale-125""
                    : index < currentStep;"
                    ? "bg-zion-cyan"""
                    : "bg-zion-blue-light"")
                )}
              />;
          </div>;
        </div>;"
        <div className="flex flex-col items-center text-center p-4">;"
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;"
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;""
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;"
      ;"
      <CardFooter className="flex flex-col space-y-2">;"

        <Button;"
          className="w-full bg-zion-purple hover:bg-zion-purple-light""
          onClick={handleAction}>;

            variant="ghost"""
            className="text-zion-slate-light hover:text-white""
            onClick={handleSkip}>;

      icon: <Calendar className="h - 6 w - 6 text - zion - cyan" />,"
      icon: <Eye className="h - 6 w - 6 text - zion - purple" />,"
      icon: <Rocket className="h - 6 w - 6 text - zion - cyan" />,"
    <Card className={cn ("border border - zion - blue - light bg - zion - blue - dark / 80 backdrop - blur - sm w - full max - w-md", class_name)}>;"

        <CardTitle className="text - center text - white">;"

        <div className="flex items - center mb - 6">;"
          <div className="flex items - center justify - center flex - 1">;"
                className={cn ("
                  "h - 2 w - 2 rounded - full mx - 1";"
                  index === current_step;"
                    ? "bg - zion - purple scale - 125";"
                    : index < current_step;"
                    ? "bg - zion - cyan";")"
                    : "bg - zion - blue - light")}"
              />))}
        <div className="flex flex - col items - center text - center p - 4">;"
          <div className="bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4">;"
          <h3 className="text - xl font - bold text - white mb - 2">{steps[current_step].title}</h3>;""
          <p className="text - zion - slate - light mb - 6">{steps[current_step].description}</p>;"
      <CardFooter className="flex flex - col space - y-2">;"

          className="w - full bg - zion - purple hover:bg - zion - purple - light";"
          on_click={handle_action}
        >;

            variant="ghost";""
            className="text - zion - slate - light hover:text - white";"
            on_click={handle_skip}
          >;
            {steps[current_step].skip_text}
          </Button>)}
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
  ),;}
=======
<<<<<<< HEAD
  ),;}
 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

    );"
: index < currentStep ? "bg-zion-cyan" : "bg-zion-blue-light")"
}/>) ) "
}</div> </div> </div>  <CardFooter className="flex flex-col space-y-2" > <Button > {"

} {"
  steps[currentStep].skipText && (<Button variant="ghost" className="text-zion-slate-light hover:text-white" onClick= {"
  handleSkip;
}> {
)
}) 
} ) 
        <div className="flex flex-col items-center text-center p-4">"
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">"
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>""
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>"
      <CardFooter className="flex flex-col space-y-2">"

          onClick={handleAction}
        >

            onClick={handleSkip}

pr-12325
          >
</Button>
          </Button>
      </CardFooter>
    </Card>
  )
}
=======
}> {
  steps[currentStep].skipText 
}</Button>) 
}</CardFooter> </Card>) 
}
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button
            variant="ghost"
            className="text-zion-slate-light hover:text-white"
            onClick={handleSkip}>;
            {steps[currentStep].skipText}
          </Button>;
        )}

      </CardFooter>;
    </Card>;
  );
}

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
      onComplete();
  // Skip the current step;
  const handleSkip = () => {;
      // Last step;
      onSkip();
  },

  return ()
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>"

      <CardHeader>
        <CardTitle className="text-center text-white">"
      icon: <FileText className="h-6 w-6 text-zion-purple" />,;"
      icon: <Users className="h-6 w-6 text-zion-cyan" />,;"
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,;"
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,;"
      icon: <Eye className="h-6 w-6 text-zion-purple" />,;"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,;"

    if (currentStep < steps && steps.length - 1) {;
      navigate(steps[currentStep].action && action.url);
      // Last step;
  // Skip the current step;
      // Last step;

  return ()"
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>;"

      <CardHeader>;
        <CardTitle className="text-center text-white">;"

      <CardContent>;
        <div className="flex items-center mb-6">;"
</div>"
          <div className="flex items-center justify-center flex-1">;"
</div>
              <div;
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1","
                  index === currentStep;"
                    ? "bg-zion-purple scale-125""
                    : index < currentStep;"
                    ? "bg-zion-cyan"""
                    : "bg-zion-blue-light"")
                )}
              />;
          </div>;
        </div>;"
        <div className="flex flex-col items-center text-center p-4">;"
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">;"
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;""
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;"
      ;"
      <CardFooter className="flex flex-col space-y-2">;"

        <Button;"
          className="w-full bg-zion-purple hover:bg-zion-purple-light""
          onClick={handleAction}>;

            variant="ghost"""
            className="text-zion-slate-light hover:text-white""
            onClick={handleSkip}>;

      icon: <Calendar className="h - 6 w - 6 text - zion - cyan" />,"
      icon: <Eye className="h - 6 w - 6 text - zion - purple" />,"
      icon: <Rocket className="h - 6 w - 6 text - zion - cyan" />,"
    <Card className={cn ("border border - zion - blue - light bg - zion - blue - dark / 80 backdrop - blur - sm w - full max - w-md", class_name)}>;"

        <CardTitle className="text - center text - white">;"

        <div className="flex items - center mb - 6">;"
          <div className="flex items - center justify - center flex - 1">;"
                className={cn ("
                  "h - 2 w - 2 rounded - full mx - 1";"
                  index === current_step;"
                    ? "bg - zion - purple scale - 125";"
                    : index < current_step;"
                    ? "bg - zion - cyan";")"
                    : "bg - zion - blue - light")}"
              />))}
        <div className="flex flex - col items - center text - center p - 4">;"
          <div className="bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4">;"
          <h3 className="text - xl font - bold text - white mb - 2">{steps[current_step].title}</h3>;""
          <p className="text - zion - slate - light mb - 6">{steps[current_step].description}</p>;"
      <CardFooter className="flex flex - col space - y-2">;"

          className="w - full bg - zion - purple hover:bg - zion - purple - light";"
          on_click={handle_action}
        >;

            variant="ghost";""
            className="text - zion - slate - light hover:text - white";"
            on_click={handle_skip}
          >;
            {steps[current_step].skip_text}
          </Button>)}
      </CardFooter>;
    </Card>);
}
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

    );"
: index < currentStep ? "bg-zion-cyan" : "bg-zion-blue-light")"
}/>) ) "
}</div> </div> </div>  <CardFooter className="flex flex-col space-y-2" > <Button > {"

} {"
  steps[currentStep].skipText && (<Button variant="ghost" className="text-zion-slate-light hover:text-white" onClick= {"
  handleSkip;
}> {
)
}) 
} ) 
        <div className="flex flex-col items-center text-center p-4">"
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">"
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>""
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>"
      <CardFooter className="flex flex-col space-y-2">"

          onClick={handleAction}
        >

            onClick={handleSkip}

pr-12325
          >
</Button>
          </Button>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
