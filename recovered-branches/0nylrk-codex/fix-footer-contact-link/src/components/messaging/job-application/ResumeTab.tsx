
import React from 'react',
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { Button } from "@/components/ui/button",export interface ResumeTabProps {
  selectedResumeId?: string | null,
  onSelectResume?: (resumeId: string) => void,
  onResumeSelected?: (resume: ResumeOption) => void,
  onApply?: () => Promise<void>,
  isSubmitting?: boolean
}

export interface ResumeTabProps {_selectedResumeId?: string | null;
  onSelectResume?: (_resumeId: string) => void;
  onResumeSelected?: (_resume: ResumeOption) => void;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean;}

export function ResumeTab(_{_selectedResumeId, _onSelectResume, _onResumeSelected, _onApply, _isSubmitting = false}: ResumeTabProps) {_const _handleResumeSelected = (_resume: ResumeOption) => {
    if (onResumeSelected) {
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
            className=&quot;w-full&quot;          >
            {_isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          
          {!selectedResumeId && (
            <p className=&quot;text-sm text-muted-foreground mt-2&quot;>              Please select a resume to continue
            </p>
          )}
        </div>
      )}
    </div>
  )
}
