import {use_auth} from '@/hooks / use_auth';
import {use_resume} from '@/hooks / use_resume';
import {Tabs} from '@/components / ui / tabs';
import {Card, CardContent} from '@/components / ui / card';
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';

import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
'
import {Button} from '@/components / ui / button';'
import {Resume} from '@/types / resume';'
// Import components;import { useState, useEffect  } from 'react';'
import { useAuth  } from '@/hooks/useAuth';'
import { useResume  } from '@/hooks/useResume';'
import { Tabs  } from '@/components/ui/tabs';'
import { Card, CardContent  } from '@/components/ui/card';'
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';'
import { AlertCircle, FilePlus, Loader2  } from 'lucide-react';'
import { Button  } from '@/components/ui/button';'
import { Resume  } from '@/types/resume';'
// Import components,
import { ResumeProgress  } from './ResumeProgress';'
import { EmptyResumeState  } from './EmptyResumeState';'
import { CreateResumeForm  } from './CreateResumeForm';'
import { ResumeSteps  } from './ResumeSteps';'
import { ResumeStepContent  } from './ResumeStepContent';'
import { useResumeProgress  } from './useResumeProgress';'
import { ResumeVersionSelector  } from './ResumeVersionSelector';'
import { RESUME_STEPS } from './constants';'
export function ResumeWizard() {
}
import {useState, useEffect} from 'react';'
import {use_auth} from '@/hooks / use_auth';'
import {use_resume} from '@/hooks / use_resume';'
import {Tabs} from '@/components / ui / tabs';'
import {Card, CardContent} from '@/components / ui / card';'
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';'
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';'
import {Button} from '@/components/ui/button';'
import {Resume} from '@/types/resume';'
// Import components,
import {EmptyResumeState} from './EmptyResumeState';'
import {CreateResumeForm} from './CreateResumeForm';'
import {ResumeSteps} from './ResumeSteps';'
import {ResumeStepContent} from './ResumeStepContent';'
import {useResumeProgress} from './useResumeProgress';'
import {ResumeVersionSelector} from './ResumeVersionSelector';'
import {RESUME_STEPS} from './constants';  // Use the extracted hook for progress calculation'

import {Resume} from '@/types / resume';

// Import components;import { useState, useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useResume  } from '@/hooks/useResume';
import { Tabs  } from '@/components/ui/tabs';
import { Card, CardContent  } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2  } from 'lucide-react';
import { Button  } from '@/components/ui/button';

import { Resume  } from '@/types/resume';

import {useState, useEffect} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {use_resume} from '@/hooks / use_resume';
import {Tabs} from '@/components / ui / tabs';
import {Card, CardContent} from '@/components / ui / card';
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Resume} from '@/types/resume';
// Import components
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';
import {RESUME_STEPS} from './constants';  // Use the extracted hook for progress calculation

  const { user } = useAuth();
  const { ;
    isLoading;
    error, ;
    resume, ;
    fetchResume;
    createResume;
  } = useResume();

'
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);

  // Use the extracted hook for progress calculation


  } = useResume(),;'
  const [activeTab, setActiveTab] = useState('basic-info'),;
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )

  }
  if (showNewResumeForm) {
  if (!resume && !showNewResumeForm) {;
    }
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
  if (showNewResumeForm) {;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
      <Alert variant='destructive' className='mb-6'>;'
        <AlertCircle className='h-4 w-4' />;'
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
  }
  if (showNewResumeForm) {
    return (
      <CreateResumeForm
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />;
            {resume && (;
              <ResumeStepContent

              <ResumeStepContent 
