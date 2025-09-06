
import { ResumeSelector, ResumeOption } from "../resume-selector";
import { Button } from "@/components/ui/button";
export interface ResumeTabProps {;
  selectedResumeId?: string | null;
  onSelectResume?: (resumeId: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean
}

export function ResumeTab({
  selectedResumeId
  onSelectResume
  onResumeSelected
  onApply
  isSubmitting = false
}: ResumeTabProps) {
  const handleResumeSelected = (resume: ResumeOption) => {
    if (onResumeSelected) {;
      onResumeSelected(resume);
    }
    if (onSelectResume) {
      onSelectResume(resume.id);
    }
  }

  return (
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />

import { ResumeSelector, ResumeOption } from "../resume-selector",
import { Button } from "@/components/ui/button",
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
  },

  return (
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />

      {onApply && (
        <div className="mt-6">
          <Button
            onClick={onApply}
            disabled={!selectedResumeId || isSubmitting}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          {!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>
          )}
        </div>;
      )}

=======

    </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}