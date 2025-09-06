


export interface ResumeTabProps {

  selectedResumeId?: string | null;
  onSelectResume?: (resume_id: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;

export function ResumeTab(): any ({;
  selectedResumeId,;
  onSelectResume,;
  onResumeSelected,;
  onApply,;
  isSubmitting = false,;
}: ResumeTabProps) {;
  const handleResumeSelected = (resume: ResumeOption) => {;
    if (onResumeSelected) {;
      onResumeSelected(resume);
    }

    if (onSelectResume) {;
      onSelectResume(resume && resume.id);

    }
  }

  return (
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />
      
      {onApply && (
        <div className="mt-6">
          <Button 
            onClick={onApply} 
            disabled={!selectedResumeId || isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
          





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
          {!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>

          )}
        </div>;
      )}
    </div>
    </div>;





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  );
>>>>>>> origin/feature/merge-conflicts-and-improvements

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  );

}