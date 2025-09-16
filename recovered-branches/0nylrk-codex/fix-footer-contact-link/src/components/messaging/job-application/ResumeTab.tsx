
  const handleResumeSelected = (resume: ResumeOption) => {
    if (onResumeSelected) {
      onResumeSelected(resume);
    }
  
  return (
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />
      {onApply && (
        <div className="mt-6">
          <Button 
            onClick={onApply} 
            disabled={!selectedResumeId || isSubmitting}




=======
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          
          {!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>
