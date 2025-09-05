
import React from 'react';

export interface ResumeTabProps {_selectedResumeId?: string | null;
  onSelectResume?: (_resumeId: string) => void;
  onResumeSelected?: (_resume: ResumeOption) => void;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean;}

export function ResumeTab(_{_selectedResumeId, _onSelectResume, _onResumeSelected, _onApply, _isSubmitting = false}: ResumeTabProps) {_const _handleResumeSelected = (_resume: ResumeOption) => {
    if (onResumeSelected) {
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
          >
            {_isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          
          {_!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>
          )}
        </div>
      )}
    </div>
  );
}
