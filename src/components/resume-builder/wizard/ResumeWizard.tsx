
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="flex gap-4 flex-wrap items-center">
          {resume && <ResumeVersionSelector currentResume={resume} onResumeChange={handleResumeChange} />}

            variant="outline"
            size="sm"
            className="gap-2"
          >
            <FilePlus className="h-4 w-4" />
            Create New
          </Button>
        </div>
      </div>
=======
      


      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title |'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
          </div>


          


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

              <ResumeStepContent
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                activeTab = {activeTab,}
                resume = {resume as Resume,}
                onNextStep = {nextStep,}
                onPrevStep = {prevStep,}
<<<<<<< HEAD
              />
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
