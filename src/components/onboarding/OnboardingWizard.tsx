import { useState, useEffect } from 'react
import { useRouter } from 'next/router
import { useAuth } from '@/hooks/useAuth
import { Button } from '@/components/ui/button
import {
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
import { cn } from '@/lib/utils';
interface WizardStep {;
  title: string;,
  description: string;
  icon: React && React.ReactNode;,
  action: {;
    text: string;

import { useState, useEffect } from 'react';
import { use_router } from 'next/router';
import { use_auth } from '@/hooks/ use_auth';
import { Button } from '@/components/ui/ button';
  // TODO: Implement
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/ card';
  Rocket,
  FileText,
  Users,
  Calendar,
  Eye,
  MessageSquare,
} from 'lucide-react';
import { cn } from '@/lib / utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/ card';
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react';
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
export function OnboardingWizard(): any ({;
  type,;
  onComplete,;



  type,
  onComplete,

  onSkip,;
  className,;)
}: OnboardingWizardProps) {;
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter(); // Changed from useNavigate to useRouter;
  const { user } = useAuth()


          </div>;
        <div className='flex flex-col items-center text-center p-4'>;
</div>
          <div className='bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4'>;
      icon: <FileText className="h-6 w-6 text-zion-purple" />,"
"
      icon: <Users className="h-6 w-6 text-zion-cyan" />,"
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,"
      icon: <Calendar className="h-6 w-6 text-zion-cyan" />,"
      icon: <Eye className="h-6 w-6 text-zion-purple" />,"
      icon: <Rocket className="h-6 w-6 text-zion-cyan" />,"

      <CardHeader>
        <CardTitle className="text-center text-white">"

        
      
      <CardContent>
        <div className="flex items-center mb-6">"
</div>"
          <div className="flex items-center justify-center flex-1">"
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
        <div className="flex flex-col items-center text-center p-4">"
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">"
          </div>;"
          <h3 className='text-xl font-bold text-white mb-2'>;
</h3>
          </h3>;
          <p className='text-zion-slate-light mb-6'>;
</p>
          </p>;
      ;
      <CardFooter className='flex flex-col space-y-2'>;

        <Button;
          onClick={handleAction}>;

            variant='ghost
            className='text-zion-slate-light hover:text-white
            onClick={handleSkip}>;

        
            variant="ghost"""
            className="text-zion-slate-light hover:text-white""
            onClick={handleSkip}
          >;

          
    ;"
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
                className={cn (
                  'h - 2 w - 2 rounded - full mx - 1',                  index === current_step;
                    ? 'bg - zion - purple scale - 125';
                    : index < current_step;
                      ? 'bg - zion - cyan';')
                      : 'bg - zion - blue - light')}              />))}
        <div className='flex flex - col items - center text - center p - 4'>;
          <div className='bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4'>;
          <h3 className='text - xl font - bold text - white mb - 2'>;
          <p className='text - zion - slate - light mb - 6'>;
      <CardFooter className='flex flex - col space - y-2'>;

          className='w - full bg - zion - purple hover:bg - zion - purple - light';
          on_click={handle_action}        >;

            variant='ghost';
            className='text - zion - slate - light hover:text - white';
            on_click={handle_skip}          >;

    );