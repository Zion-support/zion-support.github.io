

// Import components

export function ResumeWizard() {_const { user} = useAuth();
  const {_isLoading, _error, _resume, _fetchResume, _createResume} = useResume();
  
  const [activeTab, setActiveTab] = useState('basic-info');
  const [showNewResumeForm, setShowNewResumeForm] = useState(false);
  
  // Use the extracted hook for progress calculation
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
      setActiveTab(RESUME_STEPS[currentIndex + 1].id);}
  };
  
  const _prevStep = () => {_const _currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(RESUME_STEPS[currentIndex - 1].id);}
  };

  const _handleResumeChange = (_resumeId: string) => {_fetchResume(resumeId);};
  
  if (isLoading) {_return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );}
  
  if (error) {_return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  
  if (!resume && !showNewResumeForm) {_return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />;
  }
  
  if (showNewResumeForm) {_return (_<CreateResumeForm 
        onCreateResume={handleCreateNewResume}
        onCancel={_() => setShowNewResumeForm(false)}
        isLoading={_isLoading}
      />
    );
  }
  
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
          >
            <FilePlus className="h-4 w-4" /> 
            Create New
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{_resume?.basic_info?.title || 'My Resume'}</h2>
            <ResumeProgress resume={_resume} progress={_progress} />
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
  );
}
