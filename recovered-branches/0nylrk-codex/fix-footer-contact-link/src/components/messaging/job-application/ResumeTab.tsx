
<<<<<<< HEAD
import React from 'react',;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { Button } from "@/components/ui/button",;
;
export interface ResumeTabProps {;
  selectedResumeId?:string | null,;
  onSelectResume?:(resumeId:string) => void,;
  onResumeSelected?:(resume:ResumeOption) => void,;
  onApply?:() => Promise<void>,;
  isSubmitting?:boolean;
}
;
export function ResumeTab({ selectedResumeId, onSelectResume, onResumeSelected, onApply, isSubmitting = false } ResumeTabProps) {;
  const handleResumeSelected = (resume:ResumeOption) => {;
    if (onResumeSelected) {;
      onResumeSelected(resume);
    }
    ;
    if (onSelectResume) {;
      onSelectResume(resume.id),;
    }
  },;
  ;
  return (;
    <div className="space-y-4">;
      <ResumeSelector onResumeSelected={handleResumeSelected} />;
      ;
      {onApply && (;
        <div className="mt-6">;
          <Button ;
            onClick={onApply} ;
            disabled={!selectedResumeId || isSubmitting}
            className="w-full";
          >;
            {isSubmitting ? 'Submitting...' :'Submit Application'}
          </Button>;
          ;
          {!selectedResumeId && (;
            <p className="text-sm text-muted-foreground mt-2">;
              Please select a resume to continue;
            </p>;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          )}
        </div>;
      )}
<<<<<<< HEAD
    </div>;
  ),;
=======
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
