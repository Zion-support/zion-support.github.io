<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx

<<<<<<< HEAD
import { ResumeSelector, ResumeOption } from "../resume-selector";
import { Button } from "@/components/ui/button";
export interface ResumeTabProps {;
========
<<<<<<< HEAD
import React from './react';
import { ResumeSelector, ResumeOption  } from '../resume - selector';
import { Button  } from '@/components / ui / button';
export interface ResumeTabProps {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx
  selectedResumeId?: string | null;
  onSelectResume?: (resumeId: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx
=======
<<<<<<< HEAD

import React from 'react',
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ResumeSelector, ResumeOption } from "../resume-selector";
import { Button } from "@/components/ui/button";
export interface ResumeTabProps {;
  selectedResumeId?: string | null;
  onSelectResume?: (resumeId: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

import { ResumeSelector, ResumeOption } from "../resume-selector",
import { Button } from "@/components/ui/button",
=======

import React from './react';
import { ResumeSelector, ResumeOption  } from '../resume - selector';
import { Button  } from '@/components / ui / button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export interface ResumeTabProps {

  selectedResumeId?: string | null;
  onSelectResume?: (resume_id: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx
export function ResumeTab(): any ({;
  selectedResumeId,;
  onSelectResume,;
  onResumeSelected,;
  onApply,;
  isSubmitting = false,;
}: ResumeTabProps) {;
=======
<<<<<<< HEAD
      {onApply && (
        <div className="mt-6">
          <Button
            onClick={onApply}
            disabled={!selectedResumeId |isSubmitting}
=======
=======
=======

import React from 'react',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { Button } from "@/components/ui/button",
export interface ResumeTabProps {
  selectedResumeId?: string | null,
  onSelectResume?: (resumeId: string) => void,
  onResumeSelected?: (resume: ResumeOption) => void,
  onApply?: () => Promise<void>,
  isSubmitting?: boolean
import React from 'react',;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { Button } from "@/components/ui/button",;
export interface ResumeTabProps {;
  selectedResumeId?: string | null,;
  onSelectResume?: (resumeId: string) => void,;
  onResumeSelected?: (resume: ResumeOption) => void,;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean;
}
;
export function ResumeTab({ selectedResumeId, onSelectResume, onResumeSelected, onApply, isSubmitting = false }: ResumeTabProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleResumeSelected = (resume: ResumeOption) => {;
    if (onResumeSelected) {;
      onResumeSelected(resume);
    }
<<<<<<< HEAD
    if (onSelectResume) {;
      onSelectResume(resume && resume.id);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx
    }
  }
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx
<<<<<<< HEAD
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
;
    if (onSelectResume) {;
      onSelectResume(resume.id);
    }
  },
  
  return (
    <div className="space-y-4">
      <ResumeSelector onResumeSelected={handleResumeSelected} />
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {onApply && (
        <div className="mt-6">
          <Button 
            onClick={onApply} 
            disabled={!selectedResumeId || isSubmitting}
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>

<<<<<<< HEAD
=======

          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
<<<<<<< HEAD
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/ResumeTab.tsx
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
          )}
        </div>;
      )}

<<<<<<< HEAD
=======

    </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
  on_apply?: () => Promise < void>;
  is_submitting?: boolean;
}
export /**
 * ResumeTab - Function description
 */
function ResumeTab() {
  const handleResumeSelected = (resume: ResumeOption) =>: any {
    // Check condition
if ( {) {
  $2
}
      onResumeSelected (resume);
    }
    // Check condition
if ( {) {
  $2
}
      onSelectResume (resume.id);
    }
  }
;
  return (
    <div className="space - y-4">;
      <ResumeSelector onResumeSelected={handleResumeSelected} />;
      {on_apply && (
        <div className="mt - 6">;
          <Button;
            on_click={on_apply}
            disabled={!selectedResumeId || is_submitting}
            className="w - full";
          >;
            {is_submitting ? "Submitting..." : "Submit Application"}
          </Button>;
          {!selectedResumeId && (
            <p className="text - sm text - muted - foreground mt - 2">;
              Please select a resume to continue;
            </p>)}
        </div>)}
    </div>);
}
=======

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
            </p>;          )}
        </div>;
      )}
    </div>;
  ),;}
 export interface ResumeTabProps {
  selectedResumeId?: string | null;
onSelectResume?: (resumeId: string) => void;
onResumeSelected?: (resume: ResumeOption) => void;
onApply?: () => Promise<void>;
isSubmitting?: boolean 
}selectedResumeId, onSelectResume, onResumeSelected, onApply, isSubmitting = false 
}: ResumeTabProps) {
  const handleResumeSelected = (resume: ResumeOption) => {
  if (onResumeSelected) {
  > {
  isSubmitting ? 'Submitting...' : 'Submit Application' 
}</Button> Please select a resume to continue </p>) 
}</div>) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          )}
        </div>
      )}
<<<<<<< HEAD
    </div>
=======
    </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
