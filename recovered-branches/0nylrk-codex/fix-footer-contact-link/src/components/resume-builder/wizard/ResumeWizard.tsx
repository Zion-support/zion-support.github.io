<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx

<<<<<<< HEAD
=======
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
import {useState, useEffect} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {use_resume} from '@/hooks / use_resume';
import {Tabs} from '@/components / ui / tabs';
import {Card, CardContent} from '@/components / ui / card';
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx

import {Button} from '@/components / ui / button';
import {Resume} from '@/types / resume';

========
import {Button} from '@/components / ui / button';
import {Resume} from '@/types / resume';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
// Import components;
=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {ResumeProgress} from './ResumeProgress';
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';
import {RESUME_STEPS} from './constants';
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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

<<<<<<< HEAD
=======
export function ResumeWizard() {;
  const { user } = useAuth();
  const {
    isLoading;

    error
    resume

    fetchResume;
    createResume
  } = useResume();
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  }

  };
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { useResume } from '@/hooks/useResume',;
import { Tabs } from '@/components/ui/tabs',;
import { Card, CardContent } from '@/components/ui/card',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;
import { Button } from '@/components/ui/button',;
import { Resume } from '@/types/resume',;
// Import components;
import { ResumeProgress } from './ResumeProgress',;
import { EmptyResumeState } from './EmptyResumeState',;
import { CreateResumeForm } from './CreateResumeForm',;
import { ResumeSteps } from './ResumeSteps',;
import { ResumeStepContent } from './ResumeStepContent',;
import { useResumeProgress } from './useResumeProgress',;
import { ResumeVersionSelector } from './ResumeVersionSelector',;
import { RESUME_STEPS } from './constants',;
export function ResumeWizard() {;
  const { user } = useAuth(),;
  const {;
    isLoading,;
    error,;
    resume,;
    fetchResume,;
    createResume;
  } = useResume(),;
  const [activeTab, setActiveTab] = useState('basic-info'),;
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;
<<<<<<< HEAD

========
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);
=======
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    if (user) {;
      fetchResume();
    }
<<<<<<< HEAD
  }, [user, fetchResume]);
  const handleCreateNewResume = async (title: string) => {;
    const resumeId = await createResume({ title: title && title.trim() }),;
    if (resumeId) {;
      await fetchResume(resumeId);
      setShowNewResumeForm(false);
    }
  };
  const nextStep = () => {;
    const currentIndex = RESUME_STEPS && RESUME_STEPS.findIndex(step => step && step.id === activeTab);
    if (currentIndex < RESUME_STEPS && RESUME_STEPS.length - 1) {;
      setActiveTab(RESUME_STEPS[currentIndex + 1].id);
    }
  };
  const prevStep = () => {;
    const currentIndex = RESUME_STEPS && RESUME_STEPS.findIndex(step => step && step.id === activeTab);
    if (currentIndex > 0) {;
      setActiveTab(RESUME_STEPS[currentIndex - 1].id);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD
  },
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  },

<<<<<<< HEAD
  if (isLoading) {
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

========
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);
  };
  if (isLoading) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
    return (
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx


  if (error) {;

========
  if (error) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
    return (
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx

=======
  }, [user, fetchResume]),;
  const handleCreateNewResume = async (title: string) => {;
    const resumeId = await createResume({ title: title.trim() }),;
    if (resumeId) {;
      await fetchResume(resumeId),;
      setShowNewResumeForm(false);
    }
  },;
  const nextStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex < RESUME_STEPS.length - 1) {;
      setActiveTab(RESUME_STEPS[currentIndex + 1].id);
    }
  },;
  const prevStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex > 0) {;
      setActiveTab(RESUME_STEPS[currentIndex - 1].id);
    }
  },

  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  },
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  if (showNewResumeForm) {
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
  if (showNewResumeForm) {;
    return (
      <CreateResumeForm
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
      />;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx

<<<<<<< HEAD
=======


=======

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
  return (
=======
    ),;
  }
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button ;
            onClick={() => setShowNewResumeForm(true)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
            variant="outline";
            size="sm";
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" /> ;
            Create New;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <Card>;
        <CardContent className="pt-6">;
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
            <ResumeProgress resume={resume} progress={progress} />;
          </div>;
<<<<<<< HEAD
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <ResumeSteps
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
  }
  if (showNewResumeForm) {
    return (
      <CreateResumeForm
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
      />
    )
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick={() => setShowNewResumeForm(true)}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <FilePlus className="h-4 w-4" />
            Create New
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title |'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <ResumeSteps
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              steps={RESUME_STEPS}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            {resume && (
<<<<<<< HEAD
<<<<<<< HEAD

=======
              steps={RESUME_STEPS} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />;
            {resume && (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
              <ResumeStepContent
=======

              <ResumeStepContent 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                activeTab={activeTab}
                resume={resume as Resume}
=======
          ;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <ResumeSteps ;
              steps={RESUME_STEPS} ;
              activeTab={activeTab} ;
              onChange={setActiveTab} ;
            />;
            ;
            {resume && (;
              <ResumeStepContent ;
                activeTab={activeTab}                resume={resume as Resume}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <ResumeStepContent
              <ResumeStepContent 
                activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
export /**
 * ResumeWizard - Function description
 */
function ResumeWizard() {
  const { user } = use_auth ();
  const {
    is_loading;
    error,
    resume,
    fetch_resume;
    create_resume;
  } = use_resume ();
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  const [active_tab, setActiveTab] = useState ('basic - info');
  const [showNewResumeForm, setShowNewResumeForm] = useState (false);
;
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress (resume);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_resume ();
    }
  }, [user, fetch_resume]);
;
  const handleCreateNewResume = async (title: string) => {
    const resume_id = await create_resume ({ title: title.trim () }),
    // Check condition
if ( {) {
  $2
}
      await fetch_resume (resume_id);
      setShowNewResumeForm (false);
    }
  }
;
  const next_step = () =>: any {
    const current_index = RESUME_STEPS.find_index (step => step.id === active_tab);
    // Check condition
if ( {) {
  $2
}
      setActiveTab (RESUME_STEPS[current_index + 1].id);
    }
  }
;
  const prev_step = () =>: any {
    const current_index = RESUME_STEPS.find_index (step => step.id === active_tab);
    // Check condition
if ( {) {
  $2
}
      setActiveTab (RESUME_STEPS[current_index - 1].id);
    }
  }
;
  const handleResumeChange = (resume_id: string) =>: any {
    fetch_resume (resume_id);
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center h - 64">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Alert variant="destructive" className="mb - 6">;
        <AlertCircle className="h - 4 w - 4" />;
        <AlertTitle > Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>);
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm (true)} />;
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        on_cancel={() => setShowNewResumeForm (false)}
        is_loading={is_loading}
      />);
  }
  return (
    <div className="space - y-6">;
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4">;
        <h1 className="text - 2xl font - bold">Resume Builder</h1>;
        <div className="flex gap - 4 flex - wrap items - center">;
          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            on_click={() => setShowNewResumeForm (true)}
            variant="outline";
            size="sm";
            className="gap - 2";
          >;
            <FilePlus className="h - 4 w - 4" />;
            Create New;
          </Button>;
        </div>;
      </div>;
      <Card>;
        <CardContent className="pt - 6">;
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;
            <h2 className="text - xl font - semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
            <ResumeProgress resume={resume} progress={progress} />;
          </div>;
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
            <ResumeSteps;
              steps={RESUME_STEPS}
              active_tab={active_tab}
              on_change={setActiveTab}
            />;
            {resume && (
              <ResumeStepContent;
                active_tab={active_tab}
                resume={resume as Resume}
                onNextStep={next_step}
                onPrevStep={prev_step}
              />)}
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>);
=======
  ),; const [activeTab, setActiveTab] = useState ('basic-info');
const [showNewResumeForm, setShowNewResumeForm] = useState (false);
//Use the extracted hook for progress calculation <AlertTitle>Error</AlertTitle> <AlertDescription> {
  error 
}</AlertDescription> </Alert>) 
}
}if (showNewResumeForm) {
  return (<CreateResumeForm onCreateResume= {
  handleCreateNewResume 
}onCancel= {
  () => setShowNewResumeForm (false) 
}isLoading= {
  isLoading 
}/>) 
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {
  activeTab 
}onValueChange= {
  setActiveTab 
}> <ResumeSteps steps= {
  RESUME STEPS 
}activeTab= {
  activeTab 
}onChange= {
  setActiveTab 
}/> {
  resume && (<ResumeStepContent activeTab= {
  activeTab 
}resume= {
  resume as Resume 
}onNextStep= {
  nextStep 
}onPrevStep= {
  prevStep 
}/>) 
}</Tabs> </CardContent> </Card> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeWizard.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
