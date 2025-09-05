
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { Button } from "@/components/ui/button",
=======
import React from 'react';
import { ResumeSelector, ResumeOption } from &quot;../resume-selector&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface ResumeTabProps {
  selectedResumeId?: string | null,
  onSelectResume?: (resumeId: string) => void,
  onResumeSelected?: (resume: ResumeOption) => void,
  onApply?: () => Promise<void>,
  isSubmitting?: boolean
=======
import React from 'react',;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { Button } from "@/components/ui/button",;
export interface ResumeTabProps {;
  selectedResumeId?: string | null,;
  onSelectResume?: (resumeId: string) => void,;
  onResumeSelected?: (resume: ResumeOption) => void,;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function ResumeTab({ selectedResumeId, onSelectResume, onResumeSelected, onApply, isSubmitting = false }: ResumeTabProps) {;
  const handleResumeSelected = (resume: ResumeOption) => {;
    if (onResumeSelected) {;
      onResumeSelected(resume);
    }
;
    if (onSelectResume) {;
      onSelectResume(resume.id);
    }
<<<<<<< HEAD
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
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          
          {!selectedResumeId && (
            <p className=&quot;text-sm text-muted-foreground mt-2&quot;>
              Please select a resume to continue
            </p>
=======
  };
  return (;
    <div className="space-y-4">;
      <ResumeSelector onResumeSelected={handleResumeSelected} />;
      {onApply && (;
        <div className="mt-6">;
          <Button;
            onClick={onApply} ;
            disabled={!selectedResumeId || isSubmitting}
            className="w-full";
          >;
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>;
          {!selectedResumeId && (;
            <p className="text-sm text-muted-foreground mt-2">;
              Please select a resume to continue;
            </p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        </div>;
      )}
    </div>;
  );
}
;