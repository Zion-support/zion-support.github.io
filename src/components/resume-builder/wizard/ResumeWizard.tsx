<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
<<<<<<< HEAD
  import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useResume } from '@/hooks/useResume'
import { Tabs } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'import { Button } from '@/components/ui/button'
import { Resume } from '@/types/resume'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  const { user } = useAuth()
  const {
    isLoading
    error
    resume
    fetchResume

<<<<<<< HEAD
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
  const next_step = () =>: any {
    const current_index = RESUME_STEPS.find_index (step => step.id === active_tab);
    // Check condition
if ( {) {
  $2
}
      const next_step = RESUME_STEPS[current_index + 1];
      // Check condition
if ( {) {
  $2
}
        setActiveTab (next_step.id);
      }
    }
  }
  const prev_step = () =>: any {
    const current_index = RESUME_STEPS.find_index (step => step.id === active_tab);
    // Check condition
if ( {) {
  $2
}
      const prev_step = RESUME_STEPS[current_index - 1];
      // Check condition
if ( {) {
  $2
}
        setActiveTab (prev_step.id);
      }
    }
  }
  const handleResumeChange = (resume_id: string, ) =>: any {
    fetch_resume (resume_id);
  }

=======
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (isLoading) {
  import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useResume } from '@/hooks/useResume';
import { Tabs } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'import { Button } from '@/components/ui/button';
import { Resume } from '@/types/resume';
// Import components;
import {ResumeProgress} from './ResumeProgress';
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';
import {RESUME_STEPS} from './constants';
export function ResumeWizard() {;
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
  const progress = useResumeProgress(resume);

  useEffect((,) => {;
    if (user) {;
      fetchResume();
    }
  }, [user, fetchResume]);

  const handleCreateNewResume = async (title: string,) => {;
    const resumeId = await createResume({ title: title && title.trim() }),;
    if (resumeId) {;
      await fetchResume(resumeId);
      setShowNewResumeForm(false);
    }
  };

  const nextStep = () => {;
    const currentIndex = RESUME_STEPS && RESUME_STEPS.findIndex(step => step && step.id === activeTab);
    if (currentIndex < RESUME_STEPS && RESUME_STEPS.length - 1) {;
      const nextStep = RESUME_STEPS[currentIndex + 1];
      if (nextStep) {;
        setActiveTab(nextStep && nextStep.id);
      }
    }
  };

  const prevStep = () => {;
    const currentIndex = RESUME_STEPS && RESUME_STEPS.findIndex(step => step && step.id === activeTab);
    if (currentIndex > 0) {;
      const prevStep = RESUME_STEPS[currentIndex - 1];
      if (prevStep) {;
        setActiveTab(prevStep && prevStep.id);
      }
    }
  };

  const handleResumeChange = (resumeId: string,) => {;
    fetchResume(resumeId);
  };

  if (isLoading) {;
    return (
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
  if (error) {
<<<<<<< HEAD
=======
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

  if (error) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    return (
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
    );
  }
<<<<<<< HEAD
=======


  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
  }
  if (showNewResumeForm) {
    return (
      <CreateResumeForm
        onCreateResume = {handleCreateNewResume,}
        onCancel = {(,) => setShowNewResumeForm(false),}
        isLoading = {isLoading,}
      />
    )
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      />;
    );
  }
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick = {(,) => setShowNewResumeForm(true),}
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
=======


      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title |'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
          </div>
<<<<<<< HEAD
          <Tabs value={activeTab} onValueChange={setActiveTab}>
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
          
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Tabs value={activeTab} onValueChange={setActiveTab}>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            <ResumeSteps
              steps = {RESUME_STEPS,}
              activeTab = {activeTab,}
              onChange = {setActiveTab,}
            />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            {resume && (
              <ResumeStepContent
=======
<<<<<<< HEAD
            {resume && (
              <ResumeStepContent 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                activeTab = {activeTab,}
                resume = {resume as Resume,}
                onNextStep = {nextStep,}
                onPrevStep = {prevStep,}
              />
            )}
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
<<<<<<< HEAD
  prevStep
}/>)
}</Tabs> </CardContent> </Card> </div>)
}'"}
=======
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <ResumeSteps 
              steps={RESUME_STEPS} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />
=======
  prevStep 
}/>) ;
}</Tabs> </CardContent> </Card> </div>) ;
}'"};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            
            {resume && (
              <ResumeStepContent 
                activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />;
            )}
<<<<<<< HEAD
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
}resume= {
  resume as Resume;
}onNextStep= {
  next_step;
}onPrevStep= {
  prevStep 
}/>) ;
}</Tabs> </CardContent> </Card> </div>) ;
}'"}

  prev_step;
}/>);
}</Tabs> </CardContent> </Card> </div>);
}'"}
=======

          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
