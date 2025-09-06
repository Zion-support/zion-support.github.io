
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


import {Button} from '@/components / ui / button';
import {Resume} from '@/types / resume';
// Import components;

import { useState, useEffect  } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  // Use the extracted hook for progress calculation
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
  }

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useState, useEffect } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
export function ResumeWizard() { return null; }
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
    return ("
      <Alert variant="destructive" className="mb-6">;"
=======

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

  },
  
<<<<<<< HEAD
  if (isLoading) {}
    return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======

  }
  if (showNewResumeForm) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
  if (showNewResumeForm) {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (!resume && !showNewResumeForm) {;
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
  if (showNewResumeForm) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
      <div className="flex justify-center items-center h-64">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  if (!resume && !showNewResumeForm) {;
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
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button
            onClick={() => setShowNewResumeForm(true)}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
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
              steps={RESUME_STEPS}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            {resume && (
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                activeTab={activeTab}
                resume={resume as Resume}
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
                onNextStep={nextStep}
                onPrevStep={prevStep}
              />;
            )}
              <ResumeStepContent
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return (
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
            Create New;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
      <Card>;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
=======
=======
              />;
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
