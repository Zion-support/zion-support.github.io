<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD:src/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import { useState, useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { useResume } from '@/hooks/useResume',;
import { Tabs } from '@/components/ui/tabs',;
import { Card, CardContent } from '@/components/ui/card',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react';
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
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
  useEffect(() => {;
    if (user) {;
      fetchResume();
    }
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
      const nextStep = RESUME_STEPS[currentIndex + 1],;
      if (nextStep) {;
        setActiveTab(nextStep.id);
      }
    }
  },;
  const prevStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex > 0) {;
      const prevStep = RESUME_STEPS[currentIndex - 1],;
      if (prevStep) {;
        setActiveTab(prevStep.id);
      }
    }
  },

  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  },
  
  if (isLoading) {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
  

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  if (error) {

  if (error) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  if (error) {
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx


import { useState, useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useResume  } from '@/hooks/useResume';
import { Tabs  } from '@/components/ui/tabs';
import { Card, CardContent  } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'
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
  const { user } = useAuth();
  const { 
    isLoading;

    error;
    resume;
    fetchResume;
    createResume
  } = useResume();
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation
  const progress = null;

  if (isLoading) {
<<<<<<< HEAD:src/components/resume-builder/wizard/ResumeWizard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
    return (
      <div className="flex justify-center items-center h-64">"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />"
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
=======

  
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
<<<<<<< HEAD
=======
  if (showNewResumeForm) {
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
  if (showNewResumeForm) {;
    return (
      <CreateResumeForm
        onCreateResume = {handleCreateNewResume,}
        onCancel = {(,) => setShowNewResumeForm(false),}
        isLoading = {isLoading,}
      />;
    );

import { useState, useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { useResume } from '@/hooks/useResume',;
import { Tabs } from '@/components/ui/tabs',;
import { Card, CardContent } from '@/components/ui/card',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react';
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
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
  useEffect(() => {;
    if (user) {;
      fetchResume();
    }
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
      const nextStep = RESUME_STEPS[currentIndex + 1],;
      if (nextStep) {;
        setActiveTab(nextStep.id);
      }
    }
  },;
  const prevStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex > 0) {;
      const prevStep = RESUME_STEPS[currentIndex - 1],;
      if (prevStep) {;
        setActiveTab(prevStep.id);
      }
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
  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }
  }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
;
  if (showNewResumeForm) {;
    return (;
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
      />;
    );
  }
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
;
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
;
  if (showNewResumeForm) {;
    return (;
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
      />;
    );
  }
<<<<<<< HEAD
  

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
<<<<<<< HEAD
=======

=======
  return (
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx
  return (
    <div className="space-y-6">"
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">"
        <h1 className="text-2xl font-bold">Resume Builder</h1>"
        <div className="flex gap-4 flex-wrap items-center">"
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            onClick={() => setShowNewResumeForm(true)}
            variant="outline""
            size="sm""
            className="gap-2""
          >
            <FilePlus className="h-4 w-4" />"
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            onClick={() => setShowNewResumeForm(true)}

  return (

          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (

          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button;
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

<<<<<<< HEAD
<<<<<<< HEAD
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <Card>
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>
=======
        <CardContent className="pt-6">"
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">"
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title |'My Resume'}</h2>'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx
            <ResumeProgress resume={resume} progress={progress} />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          
=======

          

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <Tabs value={activeTab} onValueChange={setActiveTab}>
<<<<<<< HEAD
            <ResumeSteps 
              steps={RESUME_STEPS} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />
            
            {resume && (
              <ResumeStepContent 
                activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />;
=======
            variant="outline";
            size="sm";
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" /> ;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center h-64">;
        <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h - 4 w-4" />;
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
        onCreateResume = {handleCreateNewResume, }
        on_cancel = {(, ) => setShowNewResumeForm (false), }
        is_loading = {is_loading, }
      />);
  }
  return (
    <div className="space-y-6">;
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap-4">;
        <h1 className="text - 2xl font-bold">Resume Builder</h1>;
        <div className="flex gap - 4 flex - wrap items-center">;
          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            on_click = {(, ) => setShowNewResumeForm (true), }
            variant="outline";
            size="sm";
            className="gap-2";
          >;
            <FilePlus className="h - 4 w-4" />;
            Create New;
          </Button>;
        </div>;
      </div>;
            />;
            {resume && (;
              <ResumeStepContent
                activeTab = {activeTab,}
                resume = {resume as Resume,}
                onNextStep = {nextStep,}
                onPrevStep = {prevStep,}
              />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD:src/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx
          </Tabs>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD:src/components/resume-builder/wizard/ResumeWizard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
  );
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD
}
;
=======

=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx
};
};
<AlertTitle>Error</AlertTitle> <AlertDescription> {;
  error ;
}</AlertDescription> </Alert>) ;
}if (showNewResumeForm) {;

origin/cursor/automate-test-improve-and-merge-code-2533
  () => setShowNewResumeForm (false) ;
}isLoading= {;
  isLoading ;
}/>) ;
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabsvalue= {"
  activeTab
}onValueChange= {
  setActiveTab
}> <ResumeStepssteps= {
  RESUME STEPS
}activeTab= {
  activeTab
}onChange= {
  setActiveTab
}/> {;
  resume && (<ResumeStepContentactiveTab= {
  activeTab
      <Card>;
        <CardContent className="pt-6">;
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb-6">;
            <h2 className="text - xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
            <ResumeProgress resume={resume} progress={progress} />;
          </div>;
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
            <ResumeSteps;
              steps = {RESUME_STEPS, }
              active_tab = {active_tab, }
              on_change = {setActiveTab, }
            />;
            {resume && (
              <ResumeStepContent;
                active_tab = {active_tab, }
                resume = {resume as Resume, }
                onNextStep = {next_step, }
                onPrevStep = {prev_step, }
              />)}
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>);
}
}
<AlertTitle > Error</AlertTitle> <AlertDescription> {
  error;
}</AlertDescription> </Alert>);
}// Check condition
if ( {) {
  $2
}
  () => setShowNewResumeForm (false);
}is_loading= {
  is_loading;
}/>);
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
}> <FilePlus className="h - 4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {
=======
}> <FilePlus className="h - 4 w - 4" /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx
  active_tab;
}onValueChange= {
  setActiveTab;
}> <ResumeSteps steps= {
  RESUME STEPS;
}active_tab= {
  active_tab;
}on_change= {
  setActiveTab;
}/> {
  resume && (<ResumeStepContent active_tab= {
  active_tab;
}resume= {
  resume as Resume;
}onNextStep= {
  next_step;
}onPrevStep= {

  prev_step;
}/>);
}</Tabs> </CardContent> </Card> </div>);
}'"}
<<<<<<< HEAD:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
=======
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <ResumeSteps 
              steps={RESUME_STEPS} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />
            {resume && (
              <ResumeStepContent 
                activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />;
            )}
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/wizard/ResumeWizard.tsx
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {;
  activeTab ;
}onValueChange= {;
  setActiveTab ;
}> <ResumeSteps steps= {;
  RESUME STEPS ;
}activeTab= {;
  activeTab ;
}onChange= {;
  setActiveTab ;
}/> {;
  resume && (<ResumeStepContent activeTab= {;
  activeTab ;
}resume= {;
  resume as Resume ;
}onNextStep= {;
  nextStep ;
}onPrevStep= {;
  prevStep ;
}/>) ;
}</Tabs> </CardContent> </Card> </div>) ;
}'"
<<<<<<< HEAD:src/components/resume-builder/wizard/ResumeWizard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/wizard/ResumeWizard.tsx
