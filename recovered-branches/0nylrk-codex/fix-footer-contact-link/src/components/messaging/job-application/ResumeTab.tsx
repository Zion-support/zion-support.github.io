
<<<<<<< HEAD
import React from 'react',
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { Button } from "@/components/ui/button",
=======
import React from 'react';
<<<<<<< HEAD
import { ResumeSelector, ResumeOption } from &quot;../resume-selector&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface ResumeTabProps {
  selectedResumeId?: string | null,
  onSelectResume?: (resumeId: string) => void,
  onResumeSelected?: (resume: ResumeOption) => void,
  onApply?: () => Promise<void>,
  isSubmitting?: boolean
}
=======

export interface ResumeTabProps {_selectedResumeId?: string | null;
  onSelectResume?: (_resumeId: string) => void;
  onResumeSelected?: (_resume: ResumeOption) => void;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ResumeTab(_{_selectedResumeId, _onSelectResume, _onResumeSelected, _onApply, _isSubmitting = false}: ResumeTabProps) {_const _handleResumeSelected = (_resume: ResumeOption) => {
    if (onResumeSelected) {
<<<<<<< HEAD
      onResumeSelected(resume)
    }
    
    if (onSelectResume) {
      onSelectResume(resume.id)
    }
  },
  
  return (
    <div className=&quot;space-y-4&quot;>
      <ResumeSelector onResumeSelected={handleResumeSelected} />
      
      {onApply && (
        <div className=&quot;mt-6&quot;>
          <Button 
            onClick={onApply} 
            disabled={!selectedResumeId || isSubmitting}
            className=&quot;w-full&quot;
=======
      onResumeSelected(resume);}
    
    if (onSelectResume) {_onSelectResume(resume.id);}
  };
  
  return (
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={_handleResumeSelected} />
      
      {_onApply && (
        <div className="mt-6">
          <Button 
            onClick={onApply} 
            disabled={_!selectedResumeId || isSubmitting}
            className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          
<<<<<<< HEAD
          {!selectedResumeId && (
            <p className=&quot;text-sm text-muted-foreground mt-2&quot;>
=======
          {_!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Please select a resume to continue
            </p>
          )}
        </div>
      )}
    </div>
  )
}
