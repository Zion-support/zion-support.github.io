

import {Button} from '@/components / ui / button';
import {Resume} from '@/types / resume';
// Import components;

import { useState, useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useResume  } from '@/hooks/useResume';
import { Tabs  } from '@/components/ui/tabs';
import { Card, CardContent  } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2  } from 'lucide-react';
import { Button  } from '@/components/ui/button';
import { Resume  } from '@/types/resume';
// Import components
import { ResumeProgress  } from './ResumeProgress';
import { EmptyResumeState  } from './EmptyResumeState';
import { CreateResumeForm  } from './CreateResumeForm';
import { ResumeSteps  } from './ResumeSteps';
import { ResumeStepContent  } from './ResumeStepContent';
import { useResumeProgress  } from './useResumeProgress';
import { ResumeVersionSelector  } from './ResumeVersionSelector';
import { RESUME_STEPS } from './constants';
export function ResumeWizard() {
import {useState, useEffect} from 'react';
import {useAuth} from '@/hooks/useAuth';
import {useResume} from '@/hooks/useResume';
import {Tabs} from '@/components/ui/tabs';
import {Card, CardContent} from '@/components/ui/card';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Resume} from '@/types/resume';
// Import components
=======
==============

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState, useEffect} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {use_resume} from '@/hooks / use_resume';
import {Tabs} from '@/components / ui / tabs';
import {Card, CardContent} from '@/components / ui / card';
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';

import {Button} from '@/components / ui / button';
import {Resume} from '@/types / resume';

// Import components;
    error
    resume

    fetchResume;
    createResume
  } = useResume();
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation

  const progress = useResumeProgress(resume);
  useEffect(() => {
    if (user) {
      fetchResume()
    }
  }, [user, fetchResume]);
  const handleCreateNewResume = async (title: string) => {
    const resumeId = await createResume({ title: title.trim() })
    if (resumeId) {
      await fetchResume(resumeId);
      setShowNewResumeForm(false)
    }
  }
  const nextStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex < RESUME_STEPS.length - 1) {
      setActiveTab(RESUME_STEPS[currentIndex + 1].id)
    }
  }
  const prevStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(RESUME_STEPS[currentIndex - 1].id)
    }

  };

  }
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  }

  };
=======
=======


  const { user } = useAuth();
  const { ;
    isLoading;
    error, ;
    resume, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    fetchResume;
    createResume;
  } = useResume();


  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
=======

  };

=======
  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )

  }
  if (showNewResumeForm) {
=======
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
import { useState, useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { useResume } from '@/hooks/useResume',;
import { Tabs } from '@/components/ui/tabs',;
import { Card, CardContent } from '@/components/ui/card',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;
import { Button } from '@/components/ui/button',;
import { Resume } from '@/types/resume',;
;
// Import components;
import { ResumeProgress } from './ResumeProgress',;
import { EmptyResumeState } from './EmptyResumeState',;
import { CreateResumeForm } from './CreateResumeForm',;
import { ResumeSteps } from './ResumeSteps',;
import { ResumeStepContent } from './ResumeStepContent',;
import { useResumeProgress } from './useResumeProgress',;
import { ResumeVersionSelector } from './ResumeVersionSelector',;
import { RESUME_STEPS } from './constants',;
;
export function ResumeWizard() {;
  const { user } = useAuth(),;
  const { ;
    isLoading,;
    error, ;
    resume, ;
    fetchResume,;
    createResume;
  } = useResume(),;
  ;
  const [activeTab, setActiveTab] = useState('basic-info'),;
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;
  ;
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
  ;
  useEffect(() => {;
    if (user) {;
      fetchResume(),;
    }
  }, [user, fetchResume]),;
  ;
  const handleCreateNewResume = async (title:string) => {;
    const resumeId = await createResume({ title:title.trim() }),;
    if (resumeId) {;
      await fetchResume(resumeId),;
      setShowNewResumeForm(false),;
    }
  },;
  ;
  const nextStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex < RESUME_STEPS.length - 1) {;
      setActiveTab(RESUME_STEPS[currentIndex + 1].id),;
    }
  },;
  ;
  const prevStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex > 0) {;
      setActiveTab(RESUME_STEPS[currentIndex - 1].id),;
    }
  },;
;
  const handleResumeChange = (resumeId:string) => {;
    fetchResume(resumeId);
  },;
  ;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    ),;
  }
  ;
  if (error) {;
    return (;
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
    ),;
  }
  ;
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />,;
  }
  ;
  if (showNewResumeForm) {;
    return (;
      <CreateResumeForm ;
=======

  if (showNewResumeForm) {;    return (
      <CreateResumeForm        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
      />;

  

  return (
    ),;
  }
  ;
  return (;
=======
    );
  }
  
  return (    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            variant="outline";
            size="sm";
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" /> ;
            Create New;
          </Button>;
        </div>;
      </div>;

=======

  
  return (
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick={() => setShowNewResumeForm(true)}

            variant="outline";
            size="sm";
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" /> ;
            Create New;
          </Button>;
        </div>;
      </div>;

      <Card>;
        <CardContent className="pt-6">;
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
            <ResumeProgress resume={resume} progress={progress} />;
          </div>;

          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <ResumeSteps              steps={RESUME_STEPS} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />;
            {resume && (;
              <ResumeStepContent

              <ResumeStepContent 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
