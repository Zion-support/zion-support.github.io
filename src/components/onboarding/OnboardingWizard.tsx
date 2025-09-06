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



  type,
  onComplete,

  onSkip,;
  className,;
}: OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter(); // Changed from useNavigate to useRouter
  const { user } = useAuth()


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

          onClick={handleAction}>;
          {steps[currentStep]?.action && action.text}
        </Button>;

        {steps[currentStep]?.skipText && (;

          <Button
            variant='ghost'
            className='text-zion-slate-light hover:text-white'
            onClick={handleSkip}>;

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


;
}


      </CardFooter>;
    </Card>;
  );
}
