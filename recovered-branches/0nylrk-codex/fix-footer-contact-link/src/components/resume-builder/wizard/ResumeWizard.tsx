
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
// Import components;
import { ResumeProgress  } from './ResumeProgress';
import { EmptyResumeState  } from './EmptyResumeState';
import { CreateResumeForm  } from './CreateResumeForm';
import { ResumeSteps  } from './ResumeSteps';
import { ResumeStepContent  } from './ResumeStepContent';
import { useResumeProgress  } from './useResumeProgress';
import { ResumeVersionSelector  } from './ResumeVersionSelector';
import { RESUME_STEPS } from './constants';
export function ResumeWizard() {
import {Button} from '@/components/ui/button';
import {Resume} from '@/types/resume';
// Import components;
import {ResumeProgress} from './ResumeProgress';
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';
import {RESUME_STEPS} from './constants';
  const { user } = useAuth();
  const { ;
    isLoading;
    error, ;
    resume, ;
    fetchResume;
    createResume;
  } = useResume();


  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);

  // Use the extracted hook for progress calculation;
  }
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)

  };
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
  } = useResume(),;
  const [activeTab, setActiveTab] = useState('basic-info'),;
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;

  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);

  useEffect(() => {;
    if (user) {;
      fetchResume();
  }, [user, fetchResume]);

  const handleCreateNewResume = async (title: string) => {;
    const resumeId = await createResume({ title: title && title.trim() }),;
    if (resumeId) {;
      await fetchResume(resumeId);
      setShowNewResumeForm(false);

  const nextStep = () => {;
    const currentIndex = RESUME_STEPS && RESUME_STEPS.findIndex(step => step && step.id === activeTab);
    if (currentIndex < RESUME_STEPS && RESUME_STEPS.length - 1) {;
      setActiveTab(RESUME_STEPS[currentIndex + 1].id);

  const prevStep = () => {;
    if (currentIndex > 0) {;
      setActiveTab(RESUME_STEPS[currentIndex - 1].id);

  },




  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);

  if (isLoading) {;

    return (
      <div className="flex justify-center items-center h-64">;"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;"
</Loader2>
      </div>;"
      <Alert variant="destructive" className="mb-6">;"
"
        <AlertCircle className="h-4 w-4" />;"

        <AlertTitle>Error;
        <AlertDescription>{error};
      ;"
      <div className="flex justify-center items-center h-64">"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />"
      <Alert variant="destructive" className="mb-6">"
        <AlertCircle className="h-4 w-4" />"

        <AlertTitle>Error
        <AlertDescription>{error}
      )
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;

      <CreateResumeForm;"
;
// Import components;
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;

    if (currentIndex < RESUME_STEPS.length - 1) {;
      setActiveTab(RESUME_STEPS[currentIndex + 1].id),;
  },;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
      setActiveTab(RESUME_STEPS[currentIndex - 1].id),;
  const handleResumeChange = (resumeId:string) => {;
    return (;

      ;)

      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
    <div className="space-y-6">;"
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;"
        <h1 className="text-2xl font-bold">Resume Builder</h1>;""
        <div className="flex gap-4 flex-wrap items-center">;"
</div>
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}

          <Button;
            onClick={() => setShowNewResumeForm(true)}
            <FilePlus className="h-4 w-4" /> ;"

        </div>;
      <Card>;
        <CardContent className="pt-6">;"
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;"
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
            <ResumeProgress resume={resume} progress={progress} />;

          <Tabs value={activeTab} onValueChange={setActiveTab}>;

            <ResumeSteps;
              steps={RESUME_STEPS} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />;

              <ResumeStepContent;
                resume={resume as Resume}

            <ResumeSteps ;
              steps={RESUME_STEPS} ;
              activeTab={activeTab} ;
              onChange={setActiveTab} ;

              <ResumeStepContent ;
                activeTab={activeTab}                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}


      <div className="flex justify - center items - center h - 64">;"
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;"
      </div>);"
      <Alert variant="destructive" className="mb - 6">;"
        <AlertCircle className="h - 4 w - 4" />;"

        <AlertTitle > Error;
      );
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm (true)} />;

        on_cancel={() => setShowNewResumeForm (false)}
    <div className="space - y-6">;"
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4">;"
        <h1 className="text - 2xl font - bold">Resume Builder</h1>;""
        <div className="flex gap - 4 flex - wrap items - center">;"
          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}

            on_click={() => setShowNewResumeForm (true)}
            <FilePlus className="h - 4 w - 4" />;"

        <CardContent className="pt - 6">;"
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;"
            <h2 className="text - xl font - semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;

          <Tabs value={active_tab} onValueChange={setActiveTab}>;

              active_tab={active_tab}
              on_change={setActiveTab}

                onNextStep={next_step}
                onPrevStep={prev_step}
              />)}

    </div>);
//Use the extracted hook for progress calculation <AlertTitle>Error <AlertDescription> {
  error;
} ) 
  return (<CreateResumeForm onCreateResume= {
  handleCreateNewResume;
}onCancel= {)
  () => setShowNewResumeForm (false) 

}> <FilePlus className="h-4 w-4" /> Create New  </div> </div> <Card> </div> <Tabs value= {"

}> <ResumeSteps steps= {
  RESUME STEPS;
}activeTab= {
  activeTab;
}onChange= {
  setActiveTab;
}/> {

  resume && (<ResumeStepContent activeTab= {
}resume= {
  resume as Resume;
}onNextStep= {
  nextStep;
}onPrevStep= {
  prevStep;)
}/>) 

}   </div>) "