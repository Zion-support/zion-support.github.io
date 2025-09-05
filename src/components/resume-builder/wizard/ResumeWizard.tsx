
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { useAuth } from '@/hooks/useAuth',
import { useResume } from '@/hooks/useResume',
import { Tabs } from '@/components/ui/tabs',
import { Card, CardContent } from '@/components/ui/card',
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Resume } from '@/types/resume',
// Import components
import { ResumeProgress } from './ResumeProgress',
import { EmptyResumeState } from './EmptyResumeState',
import { CreateResumeForm } from './CreateResumeForm',
import { ResumeSteps } from './ResumeSteps',
import { ResumeStepContent } from './ResumeStepContent',
import { useResumeProgress } from './useResumeProgress',
import { ResumeVersionSelector } from './ResumeVersionSelector',
import { RESUME_STEPS } from './constants',
export function ResumeWizard() {
  const { user } = useAuth(),
  const { 
    isLoading,
    error, 
    resume, 
    fetchResume,
    createResume
  } = useResume(),
=======

// Import components

export function ResumeWizard() {_const { user} = useAuth();
  const {_isLoading, _error, _resume, _fetchResume, _createResume} = useResume();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const [activeTab, setActiveTab] = useState('basic-info'),
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),
  
  // Use the extracted hook for progress calculation
<<<<<<< HEAD
  const progress = useResumeProgress(resume),
  
  useEffect(() => {
    if (user) {
      fetchResume()
    }
  }, [user, fetchResume]),
  
  const handleCreateNewResume = async (title: string) => {
    const resumeId = await createResume({ title: title.trim() }),
    if (resumeId) {
      await fetchResume(resumeId),
      setShowNewResumeForm(false)
    }
  },
  
  const nextStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),
    if (currentIndex < RESUME_STEPS.length - 1) {
      const nextStep = RESUME_STEPS[currentIndex + 1],
      if (nextStep) {
        setActiveTab(nextStep.id)
      }
=======
  const _progress = useResumeProgress(resume);
  
  useEffect__(() => {_if (user) {
      fetchResume();}
  }, [user, fetchResume]);
  
  const _handleCreateNewResume = async (_title: string) => {_const _resumeId = await createResume({ title: title.trim()});
    if (resumeId) {_await fetchResume(resumeId);
      setShowNewResumeForm(false);}
  };
  
  const _nextStep = () => {_const _currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex < RESUME_STEPS.length - 1) {
      const _nextStep = RESUME_STEPS[currentIndex + 1];
      if (nextStep) {
        setActiveTab(nextStep.id);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const prevStep = () => {
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),
    if (currentIndex > 0) {
      const prevStep = RESUME_STEPS[currentIndex - 1],
      if (prevStep) {
        setActiveTab(prevStep.id)
      }
=======
  const _prevStep = () => {_const _currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex > 0) {
      const _prevStep = RESUME_STEPS[currentIndex - 1];
      if (prevStep) {
        setActiveTab(prevStep.id);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  },
  
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center h-64&quot;>
        <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
      </div>
    )
  }
  
  if (error) {
    return (
      <Alert variant=&quot;destructive&quot; className=&quot;mb-6&quot;>
        <AlertCircle className=&quot;h-4 w-4&quot; />
=======
  const _handleResumeChange = (_resumeId: string) => {_fetchResume(resumeId);};
  
  if (isLoading) {_return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );}
  
  if (error) {_return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }
  
<<<<<<< HEAD
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
=======
  if (!resume && !showNewResumeForm) {_return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  if (showNewResumeForm) {_return (_<CreateResumeForm 
        onCreateResume={handleCreateNewResume}
        onCancel={_() => setShowNewResumeForm(false)}
        isLoading={_isLoading}
      />
    )
  }
  
<<<<<<< HEAD
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>Resume Builder</h1>
        <div className=&quot;flex gap-4 flex-wrap items-center&quot;>
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}
          <Button 
            onClick={() => setShowNewResumeForm(true)}
            variant=&quot;outline&quot;
            size=&quot;sm&quot;
            className=&quot;gap-2&quot;
=======
  return (_<div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {_resume && <ResumeVersionSelector currentResume={resume} onResumeChange={_handleResumeChange} />}
          <Button 
            onClick={_() => setShowNewResumeForm(true)}
            variant="outline"
            size="sm"
            className="gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <FilePlus className=&quot;h-4 w-4&quot; /> 
            Create New
          </Button>
        </div>
      </div>
      
      <Card>
<<<<<<< HEAD
        <CardContent className=&quot;pt-6&quot;>
          <div className=&quot;flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6&quot;>
            <h2 className=&quot;text-xl font-semibold&quot;>{resume?.basic_info?.title || 'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
=======
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{_resume?.basic_info?.title || 'My Resume'}</h2>
            <ResumeProgress resume={_resume} progress={_progress} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          
          <Tabs value={_activeTab} onValueChange={_setActiveTab}>
            <ResumeSteps 
              steps={_RESUME_STEPS} 
              activeTab={_activeTab} 
              onChange={_setActiveTab} 
            />
            
            {_resume && (
              <ResumeStepContent 
                activeTab={activeTab}
                resume={_resume as Resume}
                onNextStep={_nextStep}
                onPrevStep={_prevStep}
              />
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
