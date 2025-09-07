<<<<<<< HEAD
import {use_auth} from '@/hooks / use_auth';'
import {use_resume} from '@/hooks / use_resume';'
import {Tabs} from '@/components / ui / tabs';'
import {Card, CardContent} from '@/components / ui / card';'
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';'
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';'
=======
<<<<<<< HEAD
import {useState, useEffect} from 'react';

=======
<<<<<<< HEAD

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useResume } from '@/hooks/useResume';
import { Tabs } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Resume } from '@/types/resume';
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
  const { user } = useAuth($2);
  const { 
    isLoading,
    error, 
    resume, 
    fetchResume,
    createResume
  } = useResume($2);
  const [activeTab, setActiveTab] = useState($2);
  const [showNewResumeForm, setShowNewResumeForm] = useState($2);
  // Use the extracted hook for progress calculation
  const progress = useResumeProgress($2);
  useEffect(() => {
    if (user) {
      fetchResume()
    }
  }, [user, fetchResume]),
  
  const handleCreateNewResume = $2;
    if (resumeId) {
      await fetchResume($2);
      setShowNewResumeForm(false)
    }
  },
  
  const nextStep = () => {
    const currentIndex = RESUME_STEPS.findIndex($2);
    if (currentIndex < RESUME_STEPS.length - 1) {
      setActiveTab(RESUME_STEPS[currentIndex + 1].id)
    }
  },
  
  const prevStep = () => {
    const currentIndex = RESUME_STEPS.findIndex($2);
    if (currentIndex > 0) {
      setActiveTab(RESUME_STEPS[currentIndex - 1].id)
    }
  },

  const handleResumeChange = $2;
  if (isLoading) {
    return (
=======
import {useState, useEffect} from 'react';

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {use_auth} from '@/hooks / use_auth';
import {use_resume} from '@/hooks / use_resume';
import {Tabs} from '@/components / ui / tabs';
import {Card, CardContent} from '@/components / ui / card';
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';

import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
'
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
import {Button} from '@/components/ui/button';
import {Resume} from '@/types/resume';
// Import components
=======
<<<<<<< HEAD
import {Button} from '@/components/ui/button';
import {Resume} from '@/types/resume';
// Import components
=======

import {Button} from '@/components / ui / button';
import {Resume} from '@/types / resume';

// Import components;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {ResumeProgress} from './ResumeProgress';
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';

import {RESUME_STEPS} from './constants';
<<<<<<< HEAD

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

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
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

>>>>>>> origin/chore/fix-lint-and-merge
  }
  const nextStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex < RESUME_STEPS.length - 1) {
      setActiveTab(RESUME_STEPS[currentIndex + 1].id)
    }
=======
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
>>>>>>> origin/resolved-merge-conflicts
  }
  const handleResumeChange = ('resumeId': string) => {
    }
    fetchResume(resumeId)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
import { useAuth } from '@/hooks/useAuth';'
import { useResume } from '@/hooks/useResume';'
import { Tabs } from '@/components/ui/tabs',;'
import { Card, CardContent } from '@/components/ui/card',;'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;'
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;'
import { Button } from '@/components/ui/button',;'
import { Resume } from '@/types/resume',;'
// Import components;
=======
<<<<<<< HEAD

=======
=======

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

>>>>>>> origin/chore/fix-lint-and-merge
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
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
  } = useResume(),;
  const [activeTab, setActiveTab] = useState('basic-info'),;'
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;  if (error) {
}
return (;
      <Alert variant='destructive' className='mb-6'>'
        <AlertCircle className='h-4 w-4' />'
=======
  } = useResume(),;'
  const [activeTab, setActiveTab] = useState('basic-info'),;

  useEffect(() => {;
    if (user) {;
      fetchResume();

    }

  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {;
    if (user) {;
      fetchResume();
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },

<<<<<<< HEAD
=======


<<<<<<< HEAD

  };
  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);
  };
  if (isLoading) {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);
  };

  if (isLoading) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  };
  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);
  };
  if (isLoading) {;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (
      <div className="flex justify-center items-center h-64">;"

        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD

  if (error) {;

if (error) {;
=======
<<<<<<< HEAD
  if (error) {;
=======

  if (error) {;

<<<<<<< HEAD
if (error) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  if (isLoading) {
    return (

<<<<<<< HEAD
=======
=======
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  },
  
  if (isLoading) {
    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
  if (error) {
=======
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
>>>>>>> origin/resolved-merge-conflicts
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
<<<<<<< HEAD
=======

<<<<<<< HEAD
  if (showNewResumeForm) {
=======
<<<<<<< HEAD
  if (showNewResumeForm) {
=======

<<<<<<< HEAD
  }
<<<<<<< HEAD
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
>>>>>>> origin/resolved-merge-conflicts
  }
  if (showNewResumeForm) {
  }
<<<<<<< HEAD
=======
  if (showNewResumeForm) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
  if (!resume && !showNewResumeForm) {;
    }
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
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
<<<<<<< HEAD
=======
=======

  if (showNewResumeForm) {;

<<<<<<< HEAD
    return (
>>>>>>> origin/chore/fix-lint-and-merge
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}

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

=======
=======
  if (showNewResumeForm) {;
<<<<<<< HEAD
    return (
      <CreateResumeForm

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
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
      />;



  

  return (
    ),;
  }
  ;
  return (;
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button ;
            onClick={() => setShowNewResumeForm(true)}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
</Card>"
        <CardContent className="pt-6">;"
</CardContent>"
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;"
</div>"
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;'
=======
        <CardContent className="pt-6">;
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <ResumeProgress resume={resume} progress={progress} />;
</ResumeProgress>
          </div>;
<<<<<<< HEAD
=======
  }
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
  }
  if (showNewResumeForm) {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return (
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        on_cancel={() => setShowNewResumeForm (false)}
        is_loading={is_loading}
      />);
  }
return (;
    <div className='space-y-6'>;'
      <div className='flex flex - col 'sm':flex - row justify - between items - start 'sm':items - center gap-4'>;'
        <h1 className='text - 2xl font-bold'>Resume Builder</h1>;'
        <div className='flex gap - 4 flex - wrap items-center'>;'
          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            on_click={() => setShowNewResumeForm (true)}
            variant='outline';'
            size='sm';'
            className='gap-2';'
          >;
            <FilePlus className='h - 4 w-4' />;'
            Create New;
          </Button>;
        </div>;
      </div>;
      <Card>;
        <CardContent className='pt-6'>;'
          <div className='flex flex - col 'sm':flex - row justify - between items - start 'sm':items - center gap - 4 mb-6'>;'
            <h2 className='text - xl font-semibold'>{resume?.basic_info?.title || 'My Resume'}</h2>;'
            <ResumeProgress resume={resume} progress={progress} />;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
            <ResumeSteps;
              steps={RESUME_STEPS}
              active_tab={active_tab}
              on_change={setActiveTab} />;
            {resume && (
              <ResumeStepContent;
                }
                active_tab={active_tab}
                resume={resume as Resume}
                onNextStep={next_step}
                onPrevStep={prev_step} />)}
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>);
  ),; const [activeTab, setActiveTab] = useState ('basic-info');'
const [showNewResumeForm, setShowNewResumeForm] = useState (false);
//Use the extracted hook for progress calculation <AlertTitle>Error</AlertTitle> <AlertDescription> {
  }
  error 
}</AlertDescription> </Alert>) 
}
}if (showNewResumeForm) {
  }
  return (<CreateResumeForm onCreateResume= {
  }
  handleCreateNewResume 
}onCancel= {
  () => setShowNewResumeForm (false) 
}isLoading= {
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
}</Tabs> </CardContent> </Card> </div>) 
}
  );
}
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
      />
    )
  }
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
=======

              steps={RESUME_STEPS} 

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
              <ResumeStepContent
                activeTab={activeTab}
                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />
            )}
<<<<<<< HEAD
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
=======

export /**
 * ResumeWizard - Function description

 */
function ResumeWizard() {}
  const { user } = use_auth ();
  const {}
    is_loading;
    error,
    resume,
    fetch_resume;
    create_resume;
  } = use_resume ();

;

;
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

<<<<<<< HEAD
  },
=======
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
