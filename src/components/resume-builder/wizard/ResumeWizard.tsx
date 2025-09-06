<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useResume  } from '@/hooks/useResume';
import { Tabs  } from '@/components/ui/tabs';
import { Card, CardContent  } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Resume  } from '@/types/resume';
<<<<<<< HEAD
=======
  import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useResume } from '@/hooks/useResume'
import { Tabs } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'import { Button } from '@/components/ui/button'
import { Resume } from '@/types/resume'
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

  const { user } = useAuth()
  const {
    isLoading
    error
    resume
    fetchResume

    createResume
  } = useResume();
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation

  const progress = useResumeProgress(resume)
  useEffect((,) => {
    if (user) {
      fetchResume()
    }
  }, [user, fetchResume])
  const handleCreateNewResume = async (title: string,) => {
    const resumeId = await createResume({ title: title.trim() })
    if (resumeId) {
      await fetchResume(resumeId)
      setShowNewResumeForm(false)
    }
  }
  const nextStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab)
    if (currentIndex < RESUME_STEPS.length - 1) {
      const nextStep = RESUME_STEPS[currentIndex + 1]
      if (nextStep) {
        setActiveTab(nextStep.id)
      }
    }
  }
  const prevStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab)
    if (currentIndex > 0) {
      const prevStep = RESUME_STEPS[currentIndex - 1]
      if (prevStep) {
        setActiveTab(prevStep.id)
      }
    }
  }
  const handleResumeChange = (resumeId: string,) => {
    fetchResume(resumeId)
  }
import { useState, useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useResume  } from '@/hooks/useResume';
import { Tabs  } from '@/components/ui/tabs';
import { Card, CardContent  } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Resume  } from '@/types/resume';


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
<<<<<<< HEAD
  

  if (error) {;
    return (
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
    );
  }


  


=======
if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  
ursor/fix-website-loading-errors-and-merge-6662
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
  if (error) {

  if (error) {;
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
  }
  if (showNewResumeForm) {
    return (
      <CreateResumeForm
        onCreateResume = {handleCreateNewResume,}
        onCancel = {(,) => setShowNewResumeForm(false),}
        isLoading = {isLoading,}
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
    );
  }

<<<<<<< HEAD


  

=======
  return (
  
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick = {(,) => setShowNewResumeForm(true),}
      />
    )
  }
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  


  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
<<<<<<< HEAD
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}


          <Button;
            onClick={() => setShowNewResumeForm(true)}


=======
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick = {(,) => setShowNewResumeForm(true),}
          <Button;
            onClick={() => setShowNewResumeForm(true)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


=======
ursor/fix-website-loading-errors-and-merge-6662
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


      <Card>
<<<<<<< HEAD
        <CardContent className="pt-6">
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title |'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <ResumeSteps
              steps = {RESUME_STEPS,}
              activeTab = {activeTab,}
              onChange = {setActiveTab,}
            />
            {resume && (
              <ResumeStepContent
  prevStep
}/>)
}</Tabs> </CardContent> </Card> </div>)
}'"}
            
            {resume && (
              <ResumeStepContent 
                activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
ursor/fix-website-loading-errors-and-merge-6662
          <Tabs value={activeTab} onValueChange={setActiveTab}>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          


          <Tabs value={activeTab} onValueChange={setActiveTab}>
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
        onCreateResume = {handleCreateNewResume, }
        on_cancel = {(, ) => setShowNewResumeForm (false), }
        is_loading = {is_loading, }
      />);
  }
  return (
    <div className="space - y-6">;
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4">;
        <h1 className="text - 2xl font - bold">Resume Builder</h1>;
        <div className="flex gap - 4 flex - wrap items - center">;
          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            on_click = {(, ) => setShowNewResumeForm (true), }
            variant="outline";
            size="sm";
            className="gap - 2";
          >;
            <FilePlus className="h - 4 w - 4" />;
            Create New;
          </Button>;
        </div>;
      </div>;

            />;

            {resume && (;

<<<<<<< HEAD
<<<<<<< HEAD
              <ResumeStepContent
=======
            {resume && (
              <ResumeStepContent
            {resume && (
              <ResumeStepContent
            {resume && (
              <ResumeStepContent 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              <ResumeStepContent
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <ResumeSteps
              steps = {RESUME_STEPS,}
              activeTab = {activeTab,}
              onChange = {setActiveTab,}
            />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                activeTab = {activeTab,}
                resume = {resume as Resume,}
                onNextStep = {nextStep,}
                onPrevStep = {prevStep,}
            )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
}
<AlertTitle>Error</AlertTitle> <AlertDescription> {
  error
}</AlertDescription> </Alert>)
}if (showNewResumeForm) {
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
}'"}
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <ResumeSteps 
              steps={RESUME_STEPS} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />
  prevStep 
}/>) ;
}</Tabs> </CardContent> </Card> </div>) ;
}'"};
            
            {resume && (
              <ResumeStepContent 
                activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />;
            )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

};

};
<AlertTitle>Error</AlertTitle> <AlertDescription> {;
  error ;
}</AlertDescription> </Alert>) ;

}if (showNewResumeForm) {;

  () => setShowNewResumeForm (false) ;
}isLoading= {;
  isLoading ;
}/>) ;
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabsvalue= {
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
        <CardContent className="pt - 6">;
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;
            <h2 className="text - xl font - semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
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
;


  prev_step;
}/>);
}</Tabs> </CardContent> </Card> </div>);
}'"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
