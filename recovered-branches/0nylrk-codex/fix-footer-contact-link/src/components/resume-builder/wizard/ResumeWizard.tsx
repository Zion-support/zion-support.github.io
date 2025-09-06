<<<<<<< HEAD

<<<<<<< HEAD
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
=======
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import {useState, useEffect} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {use_resume} from '@/hooks / use_resume';
import {Tabs} from '@/components / ui / tabs';
import {Card, CardContent} from '@/components / ui / card';
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
// Import components;
import {ResumeProgress} from './ResumeProgress';
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';
import {RESUME_STEPS} from './constants';
<<<<<<< HEAD
<<<<<<< HEAD
export function ResumeWizard() {;
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
  // Use the extracted hook for progress calculation

<<<<<<< HEAD
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
  }
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  }

  };
=======
=======

  };

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);

  useEffect(() => {;
    if (user) {;
      fetchResume();
    }
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  },

  },
  
  if (isLoading) {
=======
    fetchResume;
    createResume;
  } = useResume();
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    return (
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
    return (
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
    );
  }
<<<<<<< HEAD

  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
<<<<<<< HEAD
  }
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
  if (showNewResumeForm) {
=======

  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }

  if (showNewResumeForm) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    return (
      <CreateResumeForm
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
      />;
    );
  }
<<<<<<< HEAD
  
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick={() => setShowNewResumeForm(true)}
<<<<<<< HEAD

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
            <ResumeSteps
              steps={RESUME_STEPS}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            {resume && (
              <ResumeStepContent
              <ResumeStepContent 
=======
              <ResumeStepContent
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
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
<<<<<<< HEAD
=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
