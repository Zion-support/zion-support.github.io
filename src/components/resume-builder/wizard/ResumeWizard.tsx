    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  if (!resume && !showNewResumeForm) {
    return <EmptyResumeState onCreateClick={() => setShowNewResumeForm(true)} />
  }
  if (showNewResumeForm) {
    return (
      <CreateResumeForm
        onCreateResume = {handleCreateNewResume,}
        onCancel = {(,) => setShowNewResumeForm(false),}
        isLoading = {isLoading,}
  return (
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">;
        <h1 className="text-2xl font-bold">Resume Builder</h1>;
        <div className="flex gap-4 flex-wrap items-center">;
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
      <Card>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">{resume?.basic_info?.title |'My Resume'}</h2>
            <ResumeProgress resume={resume} progress={progress} />
          </div>
                activeTab = {activeTab,}
                resume = {resume as Resume,}
                onNextStep = {nextStep,}
                onPrevStep = {prevStep,}
            )}
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>;
  );
