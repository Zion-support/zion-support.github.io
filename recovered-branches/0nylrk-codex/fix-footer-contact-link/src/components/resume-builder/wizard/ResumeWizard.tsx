
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState, useEffect} from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {useState, useEffect} from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {use_auth} from '@/hooks / use_auth';
import {use_resume} from '@/hooks / use_resume';
import {Tabs} from '@/components / ui / tabs';
import {Card, CardContent} from '@/components / ui / card';
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';
=======
import {useState, useEffect} from 'react';'
import {use_auth} from '@/hooks / use_auth';'
import {use_resume} from '@/hooks / use_resume';'
import {Tabs} from '@/components / ui / tabs';'
import {Card, CardContent} from '@/components / ui / card';'
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
'
import {Button} from '@/components / ui / button';'
import {Resume} from '@/types / resume';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Import components;


'
import {Button} from '@/components / ui / button';'
import {Resume} from '@/types / resume';
// Import components;

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect  } from 'react';
=======
// Import components;import { useState, useEffect  } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Import components;import { useState, useEffect  } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Import components;

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


import { useState, useEffect  } from 'react';
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useAuth  } from '@/hooks/useAuth';
import { useResume  } from '@/hooks/useResume';
import { Tabs  } from '@/components/ui/tabs';
import { Card, CardContent  } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2  } from 'lucide-react';
import { Button  } from '@/components/ui/button';
=======

'
import { useState, useEffect  } from 'react';'
import { useAuth  } from '@/hooks/useAuth';'
import { useResume  } from '@/hooks/useResume';'
import { Tabs  } from '@/components/ui/tabs';'
import { Card, CardContent  } from '@/components/ui/card';'
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';'
import { AlertCircle, FilePlus, Loader2  } from 'lucide-react';'
import { Button  } from '@/components/ui/button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Resume  } from '@/types/resume';
<<<<<<< HEAD
// Import components'
import { ResumeProgress  } from './ResumeProgress';'
import { EmptyResumeState  } from './EmptyResumeState';'
import { CreateResumeForm  } from './CreateResumeForm';'
import { ResumeSteps  } from './ResumeSteps';'
import { ResumeStepContent  } from './ResumeStepContent';'
import { useResumeProgress  } from './useResumeProgress';'
import { ResumeVersionSelector  } from './ResumeVersionSelector';'
import { RESUME_STEPS } from './constants';
<<<<<<< HEAD
export function ResumeWizard() {
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
import {ResumeProgress} from './ResumeProgress';
import {EmptyResumeState} from './EmptyResumeState';
import {CreateResumeForm} from './CreateResumeForm';
import {ResumeSteps} from './ResumeSteps';
import {ResumeStepContent} from './ResumeStepContent';
import {useResumeProgress} from './useResumeProgress';
import {ResumeVersionSelector} from './ResumeVersionSelector';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {RESUME_STEPS} from './constants';
<<<<<<< HEAD
export function ResumeWizard() {;
=======
=======
// Import components
// Import components;
pr-12325
import { ResumeProgress  } from './ResumeProgress';
import { EmptyResumeState  } from './EmptyResumeState';
import { CreateResumeForm  } from './CreateResumeForm';
import { ResumeSteps  } from './ResumeSteps';
import { ResumeStepContent  } from './ResumeStepContent';
import { useResumeProgress  } from './useResumeProgress';
import { ResumeVersionSelector  } from './ResumeVersionSelector';
import { RESUME_STEPS } from './constants';

  }

import {useState, useEffect} from 'react';''
import {use_auth} from '@/hooks / use_auth';''
import {use_resume} from '@/hooks / use_resume';''
import {Tabs} from '@/components / ui / tabs';''
import {Card, CardContent} from '@/components / ui / card';''
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';''
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';''
import {Button} from '@/components / ui / button';''
import {Resume} from '@/types / resume';'
// Import components;

  };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function ResumeWizard() { return null; }
import {useState, useEffect} from 'react';'
import {use_auth} from '@/hooks / use_auth';'
import {use_resume} from '@/hooks / use_resume';'
import {Tabs} from '@/components / ui / tabs';'
import {Card, CardContent} from '@/components / ui / card';'
import {Alert, AlertDescription, AlertTitle} from '@/components / ui / alert';'
import {AlertCircle, FilePlus, Loader2} from 'lucide-react';
'
import {ResumeProgress} from './ResumeProgress';'
import {EmptyResumeState} from './EmptyResumeState';'
import {CreateResumeForm} from './CreateResumeForm';'
import {ResumeSteps} from './ResumeSteps';'
import {ResumeStepContent} from './ResumeStepContent';'
import {useResumeProgress} from './useResumeProgress';'
import {ResumeVersionSelector} from './ResumeVersionSelector';'
import {RESUME_STEPS} from './constants';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

=======

  };

=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Use the extracted hook for progress calculation
=======
import {RESUME_STEPS} from './constants';  // Use the extracted hook for progress calculation
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {RESUME_STEPS} from './constants';  // Use the extracted hook for progress calculation
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
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
=======
  // Use the extracted hook for progress calculation;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  // Use the extracted hook for progress calculation;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
  const handleResumeChange = (resumeId: string) => {}
    fetchResume(resumeId)

  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect } from 'react',;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useState, useEffect } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useAuth } from '@/hooks/useAuth',;
import { useResume } from '@/hooks/useResume',;
import { Tabs } from '@/components/ui/tabs',;
import { Card, CardContent } from '@/components/ui/card',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;
import { Button } from '@/components/ui/button',;
=======
'
import { useState, useEffect } from 'react',;'
import { useAuth } from '@/hooks/useAuth',;'
import { useResume } from '@/hooks/useResume',;'
import { Tabs } from '@/components/ui/tabs',;'
import { Card, CardContent } from '@/components/ui/card',;'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;'
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;'
import { Button } from '@/components/ui/button',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Resume } from '@/types/resume',;
// Import components;'
import { ResumeProgress } from './ResumeProgress',;'
import { EmptyResumeState } from './EmptyResumeState',;'
import { CreateResumeForm } from './CreateResumeForm',;'
import { ResumeSteps } from './ResumeSteps',;'
import { ResumeStepContent } from './ResumeStepContent',;'
import { useResumeProgress } from './useResumeProgress',;'
import { ResumeVersionSelector } from './ResumeVersionSelector',;'
import { RESUME_STEPS } from './constants',;
<<<<<<< HEAD
export function ResumeWizard() { return null; }
=======

  }
  const handleResumeChange = (
    fetchResume(resumeId)) => {
  return $3;}
}
  }


  };'
import { useState, useEffect } from 'react',;''
import { useAuth } from '@/hooks/useAuth',;''
import { useResume } from '@/hooks/useResume',;''
import { Tabs } from '@/components/ui/tabs',;''
import { Card, CardContent } from '@/components/ui/card',;''
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;''
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;''
import { Button } from '@/components/ui/button',;''
import { Resume } from '@/types/resume',;'
// Import components;'
import { ResumeProgress } from './ResumeProgress',;''
import { EmptyResumeState } from './EmptyResumeState',;''
import { CreateResumeForm } from './CreateResumeForm',;''
import { ResumeSteps } from './ResumeSteps',;''
import { ResumeStepContent } from './ResumeStepContent',;''
import { useResumeProgress } from './useResumeProgress',;''
import { ResumeVersionSelector } from './ResumeVersionSelector',;''
import { RESUME_STEPS } from './constants',;'
export function ResumeWizard() {;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { user } = useAuth(),;
  const {;
    isLoading,;
    error,;
    resume,;

    fetchResume,;
    createResume;
  } = useResume(),;'
  const [activeTab, setActiveTab] = useState('basic-info'),;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;

<<<<<<< HEAD
  // Use the extracted hook for progress calculation;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const progress = useResumeProgress(resume);
<<<<<<< HEAD
  useEffect(() => {
    if (user) {
      fetchResume()
=======

=======
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  useEffect(() => {;
    if (user) {;
      fetchResume();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
  },

  if (isLoading) {
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
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
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
  if (showNewResumeForm) {;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h-4 w-4" />;
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

  } = useResume(),;'
  const [activeTab, setActiveTab] = useState('basic-info'),;'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;

  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);

const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume);
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);
  };

  if (isLoading) {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  };
  const handleResumeChange = (resumeId: string) => {;
    fetchResume(resumeId);
  };
  if (isLoading) {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return (
      <div className="flex justify-center items-center h-64">;"
=======
    return (
      <div className="flex justify-center items-center h-64">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
    return ("
      <Alert variant="destructive" className="mb-6">;"
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (error) {;

if (error) {;
    return (
      <Alert variant="destructive" className="mb-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
    );
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
<<<<<<< HEAD
  
<<<<<<< HEAD
  if (isLoading) {}
    return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (isLoading) {
    return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (error) {
=======
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;  if (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;  if (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  if (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
  if (showNewResumeForm) {
=======

  }
  if (showNewResumeForm) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

  }
  if (showNewResumeForm) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (showNewResumeForm) {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
  if (showNewResumeForm) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
      <div className="flex justify-center items-center h-64">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    return (
=======
return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
    return ('
      <div className="flex justify-center items-center h-64">;"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;"
</Loader2>
      </div>;"
      <Alert variant="destructive" className="mb-6">;"
</Alert>"
        <AlertCircle className="h-4 w-4" />;"
</AlertCircle>
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;"
      <div className="flex justify-center items-center h-64">"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />"
</Loader2>
      </div>"
      <Alert variant="destructive" className="mb-6">"
</Alert>"
        <AlertCircle className="h-4 w-4" />"
</AlertCircle>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>)
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
</EmptyResumeState>
      <CreateResumeForm;"
import { useState, useEffect } from 'react',;''
import { useAuth } from '@/hooks/useAuth',;''
import { useResume } from '@/hooks/useResume',;''
import { Tabs } from '@/components/ui/tabs',;''
import { Card, CardContent } from '@/components/ui/card',;''
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;''
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react',;''
import { Button } from '@/components/ui/button',;''
import { Resume } from '@/types/resume',;'
;
// Import components;'
import { ResumeProgress } from './ResumeProgress',;''
import { EmptyResumeState } from './EmptyResumeState',;''
import { CreateResumeForm } from './CreateResumeForm',;''
import { ResumeSteps } from './ResumeSteps',;''
import { ResumeStepContent } from './ResumeStepContent',;''
import { useResumeProgress } from './useResumeProgress',;''
import { ResumeVersionSelector } from './ResumeVersionSelector',;''
import { RESUME_STEPS } from './constants',;'
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
  ;'
  const [activeTab, setActiveTab] = useState('basic-info'),;'
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;
  ;
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
  ;
  useEffect(() => {;
</CreateResumeForm>
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }"
      <Alert variant="destructive" className="mb-6">;"
        <AlertCircle className="h-4 w-4" />;
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;
  }
<<<<<<< HEAD
  if (showNewResumeForm) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  if (!resume && !showNewResumeForm) {;
=======
if (!resume && !showNewResumeForm) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }

  if (showNewResumeForm) {;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  if (showNewResumeForm) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
        isLoading={isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      />;
    );
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      />;
    );
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
<<<<<<< HEAD
=======

      />;
    );
  }
  return ("
    <div className="space-y-6">;"
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;"
        <h1 className="text-2xl font-bold">Resume Builder</h1>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="flex gap-4 flex-wrap items-center">;
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            onClick={() => setShowNewResumeForm(true)}

<<<<<<< HEAD
=======
        <div className="flex gap-4 flex-wrap items-center">;
    return (;'
      <div className="flex justify-center items-center h-64">;"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;"
</Loader2>
      </div>;"
      <Alert variant="destructive" className="mb-6">;"
</Alert>"
        <AlertCircle className="h-4 w-4" />;"
</AlertCircle>
        <AlertTitle>Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>;)
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
</EmptyResumeState>
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        onCancel={() => setShowNewResumeForm(false)}
</CreateResumeForm>"
    <div className="space-y-6">;"
</div>"
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;"
</div>"
        <h1 className="text-2xl font-bold">Resume Builder</h1>;""
        <div className="flex gap-4 flex-wrap items-center">;"
</div>
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
</ResumeVersionSelector>
          <Button;
            onClick={() => setShowNewResumeForm(true)}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <ResumeSteps
<<<<<<< HEAD
<<<<<<< HEAD
=======
      />
    )
  }
  
=======
/>
    )
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
              steps={RESUME_STEPS}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            {resume && (
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
</Tabs>
            <ResumeSteps;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              steps={RESUME_STEPS} 
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              steps={RESUME_STEPS} 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />;
            {resume && (;
<<<<<<< HEAD
              <ResumeStepContent

              <ResumeStepContent 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
activeTab={activeTab}
</ResumeSteps>
              <ResumeStepContent;
              <ResumeStepContent;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
              <ResumeStepContent 
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <ResumeStepContent;
              <ResumeStepContent;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <ResumeStepContent
</ResumeStepContent>
              <ResumeStepContent;
              <ResumeStepContent;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                activeTab={activeTab}

                resume={resume as Resume}
                onNextStep={nextStep}
                onPrevStep={prevStep}
<<<<<<< HEAD
<<<<<<< HEAD
              />;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

=======
              />
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              />;
            )}

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
/>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;'
  const [active_tab, setActiveTab] = useState ('basic - info');
  const [showNewResumeForm, setShowNewResumeForm] = useState (false);
;
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress (resume);
;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      fetch_resume ();
    }
  }, [user, fetch_resume]);
;
  const handleCreateNewResume = async (title: string) => {}
    const resume_id = await create_resume ({ title: title.trim () }),
    // Check condition;
if ( {) {}
  $2;
}
      await fetch_resume (resume_id);
      setShowNewResumeForm (false);
    }
  }
;
  const next_step = () =>: any {}
    const current_index = RESUME_STEPS.find_index (step => step.id === active_tab);
    // Check condition;
if ( {) {}
  $2;
}
      setActiveTab (RESUME_STEPS[current_index + 1].id);
    }
  }
;
  const prev_step = () =>: any {}
    const current_index = RESUME_STEPS.find_index (step => step.id === active_tab);
    // Check condition;
if ( {) {}
  $2;
}
      setActiveTab (RESUME_STEPS[current_index - 1].id);
    }
  }
;
  const handleResumeChange = (resume_id: string) =>: any {}
    fetch_resume (resume_id);
  }
;
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="flex justify - center items - center h-64">;
        <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
=======
    return ("
      <div className="flex justify - center items - center h - 64">;"
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <div className="flex justify - center items - center h - 64">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className="flex justify - center items - center h-64">;
        <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h - 4 w-4" />;
=======
    return ("
      <Alert variant="destructive" className="mb - 6">;"
        <AlertCircle className="h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <Alert variant="destructive" className="mb - 6">;
        <AlertCircle className="h - 4 w - 4" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <Alert variant="destructive" className="mb-6">;
        <AlertCircle className="h - 4 w-4" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <AlertTitle > Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm (true)} />;
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        on_cancel={() => setShowNewResumeForm (false)}
        is_loading={is_loading}
      />);
  }
<<<<<<< HEAD
  return (
    <div className="space-y-6">;
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap-4">;
        <h1 className="text - 2xl font-bold">Resume Builder</h1>;
        <div className="flex gap - 4 flex - wrap items-center">;
          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            on_click={() => setShowNewResumeForm (true)}
            variant="outline";
            size="sm";
            className="gap-2";
          >;
<<<<<<< HEAD
<<<<<<< HEAD
            <FilePlus className="h - 4 w-4" />;
=======
  return ("
    <div className="space - y-6">;"
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4">;"
        <h1 className="text - 2xl font - bold">Resume Builder</h1>;"
        <div className="flex gap - 4 flex - wrap items - center">;
          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}
          <Button;
            on_click={() => setShowNewResumeForm (true)}"
            variant="outline";"
            size="sm";"
            className="gap - 2";
          >;"
            <FilePlus className="h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <FilePlus className="h - 4 w - 4" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <FilePlus className="h - 4 w-4" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Create New;

</ResumeStepContent>
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;'
      <div className="flex justify - center items - center h - 64">;"
</div>"
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;"
</Loader2>
      </div>);"
      <Alert variant="destructive" className="mb - 6">;"
</Alert>"
        <AlertCircle className="h - 4 w - 4" />;"
</AlertCircle>
        <AlertTitle > Error</AlertTitle>;
        <AlertDescription>{error}</AlertDescription>;
      </Alert>);
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm (true)} />;
</EmptyResumeState>
      <CreateResumeForm;
        onCreateResume={handleCreateNewResume}
        on_cancel={() => setShowNewResumeForm (false)}
</CreateResumeForm>"
    <div className="space - y-6">;"
</div>"
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4">;"
</div>"
        <h1 className="text - 2xl font - bold">Resume Builder</h1>;""
        <div className="flex gap - 4 flex - wrap items - center">;"
</div>

          {resume && <ResumeVersionSelector current_resume={resume} onResumeChange={handleResumeChange} />}
</ResumeVersionSelector>
          <Button;

            on_click={() => setShowNewResumeForm (true)}
</Button>"
            <FilePlus className="h - 4 w - 4" />;"
</FilePlus>
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
      <Card>;
<<<<<<< HEAD
<<<<<<< HEAD
        <CardContent className="pt-6">;
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb-6">;
            <h2 className="text - xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
=======
      <Card>;"
        <CardContent className="pt - 6">;"
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;'"
            <h2 className="text - xl font - semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <CardContent className="pt - 6">;
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;
            <h2 className="text - xl font - semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        <CardContent className="pt-6">;
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb-6">;
            <h2 className="text - xl font-semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <ResumeProgress resume={resume} progress={progress} />;
          </div>;
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
</Card>"
        <CardContent className="pt - 6">;"
</CardContent>"
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;"
</div>"
            <h2 className="text - xl font - semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;'

            <ResumeProgress resume={resume} progress={progress} />;
</ResumeProgress>
          </div>;

          <Tabs value={active_tab} onValueChange={setActiveTab}>;
</Tabs>

            <ResumeSteps;
              steps={RESUME_STEPS}
              active_tab={active_tab}
              on_change={setActiveTab}
            />;
            {resume && (

</ResumeSteps>
              <ResumeStepContent;

                active_tab={active_tab}
                resume={resume as Resume}
                onNextStep={next_step}
                onPrevStep={prev_step}
              />)}
</ResumeStepContent>
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>);'
  ),; const [activeTab, setActiveTab] = useState ('basic-info');
const [showNewResumeForm, setShowNewResumeForm] = useState (false);
//Use the extracted hook for progress calculation <AlertTitle>Error</AlertTitle> <AlertDescription> {}
  error;
}</AlertDescription> </Alert>) 
}
}if (showNewResumeForm) {}
  return (<CreateResumeForm onCreateResume= {}
  handleCreateNewResume;
}onCancel= {}
  () => setShowNewResumeForm (false) 
}isLoading= {}
  isLoading;
}/>) "
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {}
  activeTab;
}onValueChange= {}
  setActiveTab;
}> <ResumeSteps steps= {}
  RESUME STEPS;
}activeTab= {}
  activeTab;
}onChange= {}
  setActiveTab;
}/> {}
  resume && (<ResumeStepContent activeTab= {}
  activeTab;
}resume= {}
  resume as Resume;
}onNextStep= {}
  nextStep;
}onPrevStep= {}
  prevStep;
}/>) 
}</Tabs> </CardContent> </Card> </div>) 
}
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
=======
=======
              />;
=======
/>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              />;
            )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export /**
 * ResumeWizard - Function description
=======

export /**;
 * ResumeWizard - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  },


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


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

//Use the extracted hook for progress calculation <AlertTitle>Error</AlertTitle> <AlertDescription> {
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
pr-12325
</ResumeStepContent>
}</Tabs> </CardContent> </Card> </div>) "

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
