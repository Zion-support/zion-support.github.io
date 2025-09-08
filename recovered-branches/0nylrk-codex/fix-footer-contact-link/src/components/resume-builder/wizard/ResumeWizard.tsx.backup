<<<<<<< HEAD

import {useState, useEffect} from 'react';


=======
import {use_auth} from '@/hooks / use_auth';'
import {use_resume} from '@/hooks / use_resume';'
import {Tabs} from '@/components / ui / tabs';'
import {Card, CardContent} from '@/components / ui / card';'
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';'
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';'
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

import { useState, useEffect  } from 'react';

import { useState, useEffect  } from 'react';

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {ResumeProgress} from './ResumeProgress';
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';

import {RESUME_STEPS} from './constants';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

};

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

<<<<<<< HEAD

=======
  }
  const nextStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex < RESUME_STEPS.length - 1) {
      setActiveTab(RESUME_STEPS[currentIndex + 1].id)
    }
  }
  const handleResumeChange = ('resumeId': string) => {
    }
    fetchResume(resumeId)
  }
  const prevStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(RESUME_STEPS[currentIndex - 1].id)
    }

  }
  const handleResumeChange = (resumeId: string) => {}
    fetchResume(resumeId)

  };
import { useAuth } from '@/hooks/useAuth';'
import { useResume } from '@/hooks/useResume';'
import { Tabs } from '@/components/ui/tabs',;'
import { Card, CardContent } from '@/components/ui/card',;'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;'
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;'
import { Button } from '@/components/ui/button',;'
import { Resume } from '@/types/resume',;'
// Import components;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  }
  const handleResumeChange = (resumeId: string) => {}
    fetchResume(resumeId)

  };


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect } from 'react',;

import { useAuth } from '@/hooks/useAuth',;
import { useResume } from '@/hooks/useResume',;
import { Tabs } from '@/components/ui/tabs',;
import { Card, CardContent } from '@/components/ui/card',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;
import { Button } from '@/components/ui/button',;

import { Resume } from '@/types/resume',;
// Import components;'
import { ResumeProgress } from './ResumeProgress',;'
import { EmptyResumeState } from './EmptyResumeState',;'
import { CreateResumeForm } from './CreateResumeForm',;'
import { ResumeSteps } from './ResumeSteps',;'
import { ResumeStepContent } from './ResumeStepContent',;'
import { useResumeProgress } from './useResumeProgress',;'
import { ResumeVersionSelector } from './ResumeVersionSelector',;'
import { RESUME_STEPS } from './constants',;'
export function ResumeWizard() {;
  }
  const { user } = useAuth(),;
  const {;
    }
    isLoading,;
    error,;
    resume,;
    fetchResume,;
    createResume;
<<<<<<< HEAD
  } = useResume(),;'
  const [activeTab, setActiveTab] = useState('basic-info'),;

  useEffect(() => {;
    if (user) {;
      fetchResume();

    }

  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;

=======
  } = useResume(),;
  const [activeTab, setActiveTab] = useState('basic-info'),;'
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;  if (error) {
}
return (;
      <Alert variant='destructive' className='mb-6'>'
        <AlertCircle className='h-4 w-4' />'
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);


<<<<<<< HEAD
=======
const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  useEffect(() => {;
    if (user) {;
      fetchResume();
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


  },





=======

  },


  },


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);
  };

  if (isLoading) {;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <div className="flex justify-center items-center h-64">;"

        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD


  if (error) {;


=======

  if (error) {;

if (error) {;
if (error) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <Alert variant="destructive" className="mb-6">;

        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
    );
  }

<<<<<<< HEAD
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  },
  
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
  },

>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (isLoading) {
    return (


      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
<<<<<<< HEAD





=======
  }
  if (showNewResumeForm) {
  }
  if (showNewResumeForm) {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (!resume && !showNewResumeForm) {;
    }
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
<<<<<<< HEAD
=======
  if (showNewResumeForm) {;
        <Loader2 className='h-8 w-8 animate-spin text-primary' />;'
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
}
return (;
      <CreateResumeForm,
onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />;
            {resume && (;
              <ResumeStepContent
              <ResumeStepContent
}
activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep} />;
            )}
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
  const [active_tab, setActiveTab] = useState ('basic - info');'
  const [showNewResumeForm, setShowNewResumeForm] = useState (false);
;
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress (resume);
;
  useEffect (() => {
    // Check condition
}
if ( {) {
  $2
}
      fetch_resume ();
    }
  }, [user, fetch_resume]);
;
  const handleCreateNewResume = async ('title': string) => {
}
const resume_id = await create_resume ({ 'title': title.trim () }),;
    // Check condition,
if ( {) {
  $2
}
      await fetch_resume (resume_id);
      setShowNewResumeForm (false);
    }
  }
;
  const next_step = () =>: any {
    }
    const current_index = RESUME_STEPS.find_index (step => { return step.id === active_tab); }
    // Check condition,
if ( {) {
  $2
}
      setActiveTab (RESUME_STEPS[current_index + 1].id);
    }
  }
;
  const prev_step = () =>: any {
    }
    const current_index = RESUME_STEPS.find_index (step => { return step.id === active_tab); }
    // Check condition,
if ( {) {
  $2
}
      setActiveTab (RESUME_STEPS[current_index - 1].id);
    }
  }
;
  const handleResumeChange = ('resume_id': string) =>: any {
    }
    fetch_resume (resume_id);
  }
;
  // Check condition,
if ( {) {
  $2
}
return (;
      <div className='flex justify - center items - center h-64'>;'
        <Loader2 className='h - 8 w - 8 animate - spin text-primary' />;'
      </div>);
  }
  // Check condition,
if ( {) {
  $2
}
return (;
      <Alert variant='destructive' className='mb-6'>;'
        <AlertCircle className='h - 4 w-4' />;'
        <AlertTitle > Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>);
  }
  // Check condition,
if ( {) {
  $2
}
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm (true)} />;
  }
  // Check condition,
if ( {) {
  $2
}
return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba


  if (showNewResumeForm) {;

<<<<<<< HEAD

    return (

=======
    return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}

<<<<<<< HEAD

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
=======
      />;
    );
  }

  return (
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;

        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            onClick={() => setShowNewResumeForm(true)}

            variant="outline";
            size="sm";
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" /> ;
            Create New;
</Button>"
            <FilePlus className="h-4 w-4" /> ;"
</FilePlus>
          </Button>;
        </div>;
      </div>;
      ;
      <Card>;
</Card>"
        <CardContent className="pt-6">;"
</CardContent>"
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;"
</div>"
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;'
            <ResumeProgress resume={resume} progress={progress} />;
</ResumeProgress>
          </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
            <ResumeSteps;
              steps={RESUME_STEPS}
              active_tab={active_tab}
<<<<<<< HEAD
              on_change={setActiveTab}
            />;
            {resume && (
              <ResumeStepContent;
                active_tab={active_tab}
                resume={resume as Resume}
                onNextStep={next_step}
                onPrevStep={prev_step}
              />)}
=======
              on_change={setActiveTab} />;
            {resume && (
              <ResumeStepContent;
                }
                active_tab={active_tab}
                resume={resume as Resume}
                onNextStep={next_step}
                onPrevStep={prev_step} />)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>);
<<<<<<< HEAD
  ),; const [activeTab, setActiveTab] = useState ('basic-info');
const [showNewResumeForm, setShowNewResumeForm] = useState (false);
//Use the extracted hook for progress calculation <AlertTitle>Error</AlertTitle> <AlertDescription> {

=======
  ),; const [activeTab, setActiveTab] = useState ('basic-info');'
const [showNewResumeForm, setShowNewResumeForm] = useState (false);
//Use the extracted hook for progress calculation <AlertTitle>Error</AlertTitle> <AlertDescription> {
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  error 
}</AlertDescription> </Alert>) 
}
}if (showNewResumeForm) {
<<<<<<< HEAD

  return (<CreateResumeForm onCreateResume= {

=======
  }
  return (<CreateResumeForm onCreateResume= {
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  handleCreateNewResume 
}onCancel= {
  () => setShowNewResumeForm (false) 
}isLoading= {
<<<<<<< HEAD

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

=======
  }
  isLoading 
}/>) 
}> <FilePlus className='h-4 w-4' /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {'
  }
  activeTab 
}onValueChange= {
  }
  setActiveTab 
}> <ResumeSteps steps= {
  }
  RESUME STEPS 
}activeTab= {
  }
  activeTab 
}onChange= {
  }
  setActiveTab 
} /> {
  }
  resume && (<ResumeStepContent activeTab= {
  }
  activeTab 
}resume= {
  }
  resume as Resume 
}onNextStep= {
  }
  nextStep 
}onPrevStep= {
  }
  prevStep 
} />) 
>>>>>>> origin/cursor/delete-old-data-records-6bba
}</Tabs> </CardContent> </Card> </div>) 
}
  );
}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export /**
 * ResumeWizard - Function description
 */
function ResumeWizard() {
  }
  const { user } = use_auth ();
  const {
    }
    is_loading;
    error,
    resume,
    fetch_resume;
    create_resume;
  } = use_resume ();
;
<<<<<<< HEAD

      />
    )
  }

=======
      />
    )
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className='space-y-6'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        <h1 className='text-2xl font-bold'>Resume Builder</h1>
        <div className='flex gap-4 flex-wrap items-center'>
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick={() => setShowNewResumeForm(true)}
            variant='outline'
            size='sm'
            className='gap-2'
          >
            <FilePlus className='h-4 w-4' />
            Create New
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className='pt-6'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
            <h2 className='text-xl font-semibold'>{resume?.basic_info?.title |'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <ResumeSteps
              steps={RESUME_STEPS}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            {resume && (

<<<<<<< HEAD
              steps={RESUME_STEPS} 




=======
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />;
            {resume && (;

                activeTab={activeTab}
                resume={resume as Resume}
          ;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
</ResumeStepContent>
            <ResumeSteps ;
              steps={RESUME_STEPS} ;
              activeTab={activeTab} ;
              onChange={setActiveTab} ;
            />;
</ResumeSteps>
              <ResumeStepContent ;
                activeTab={activeTab}                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />;
            )}
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
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba
