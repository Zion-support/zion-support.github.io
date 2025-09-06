
import React from 'react',
import { ResumeSelector, ResumeOption } from "../resume-selector";
import { Button } from "@/components/ui/button";
export interface ResumeTabProps {;
  selectedResumeId?: string | null;
  onSelectResume?: (resumeId: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean
}

<<<<<<< HEAD
export function ResumeTab({
  selectedResumeId
  onSelectResume
  onResumeSelected
  onApply
  isSubmitting = false
}: ResumeTabProps) {
  const handleResumeSelected = (resume: ResumeOption) => {
    if (onResumeSelected) {
      onResumeSelected(resume);
    }
    if (onSelectResume) {
      onSelectResume(resume.id);
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
<<<<<<< HEAD
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />
      {onApply && (
        <div className="mt-6">
          <Button
            onClick={onApply}
            disabled={!selectedResumeId |isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
          {!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>
=======
    <div className="space-y-4">;
      <ResumeSelector onResumeSelected={handleResumeSelected} />;

      {onApply && (;
        <div className="mt-6">;
          <Button
            onClick={onApply}
            disabled={!selectedResumeId || isSubmitting}
            className="w-full">;
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>;

          {!selectedResumeId && (;
            <p className="text-sm text-muted-foreground mt-2">;
              Please select a resume to continue;
            </p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          )}
        </div>;
      )}
    </div>;
  );
}