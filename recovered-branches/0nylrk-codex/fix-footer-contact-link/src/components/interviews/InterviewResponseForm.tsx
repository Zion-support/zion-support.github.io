<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
=======
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Interview } from "@/types/interview";
import { format, parseISO } from "date-fns";
interface InterviewResponseFormProps {
  interview: Interview;
  onConfirm: () => Promise<void>;
  onClose: () => void;
  isLoading: boolean
}
export function InterviewResponseForm({
  interview
  onConfirm
  onClose
  isLoading
}: InterviewResponseFormProps) {
  // Format interview date and time

  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, "EEEE, MMMM d");
  const formattedTime = format(interviewDate, "h: mm a");
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Interview } from "@/types/interview";
import { format, parseISO } from "date-fns";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React from "react",
import { Button } from "@/components/ui/button",
import { Interview } from "@/types/interview",
import { format, parseISO } from "date-fns",

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
import React from './react';
import { Button  } from '@/components / ui / button';
import { Interview  } from '@/types / interview';
import { format, parseISO  } from './date - fns';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
interface InterviewResponseFormProps {
interface InterviewResponseFormProps {;
  interview: Interview;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
export function InterviewResponseForm(): any ({;
  interview,;
  onConfirm,;
  onClose,;
  isLoading,;
}: InterviewResponseFormProps) {;
  // Format interview date and time;
  const interviewDate = parseISO(interview && interview.scheduled_date);
  const formattedDate = format(interviewDate, "EEEE, MMMM d");
  const formattedTime = format(interviewDate, "h: mm a");
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Interview } from "@/types/interview";
import { format, parseISO } from "date-fns";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface InterviewResponseFormProps {
  interview: Interview,
  onConfirm: () => Promise<void>,
  onClose: () => void,
  isLoading: boolean
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
export function InterviewResponseForm({
  interview,
  onConfirm,
  onClose,
  isLoading,
}: InterviewResponseFormProps) {
  // Format interview date and time;
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, "EEEE, MMMM d");
  const formattedTime = format(interviewDate, "h: mm a");
=======
export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading }: InterviewResponseFormProps) {
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date),
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),
  const formattedTime = format(interviewDate, 'h: mm a'),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Calculate when interview ends
  const endTime = new Date(interviewDate),
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes),
  const formattedEndTime = format(endTime, 'h: mm a'),

  return (
    <div className="space-y-4">
      <div className="p-4 bg-zion-blue-light/20 rounded-md">
        <h3 className="font-medium text-lg mb-2">{interview.title}</h3>
        <p className="text-sm text-zion-slate-light mb-4">
<<<<<<< HEAD

=======

export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading }: InterviewResponseFormProps) {
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date),
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),
  const formattedTime = format(interviewDate, 'h: mm a'),



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
  // Calculate when interview ends;
  const endTime = new Date(interviewDate);
  endTime && endTime.setMinutes(endTime && endTime.getMinutes() + interview && interview.duration_minutes);
  const formattedEndTime = format(endTime, "h: mm a");
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx


          Interview requested by {interview.client_name || 'Client'}
        </p>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          Interview requested by {interview.client_name |"Client"}
        </p>
=======
          Interview requested by {interview.client_name || 'Client'}
        </p>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid gap-3">
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Date:</div>
            <div>{formattedDate}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Time:</div>
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div>{formattedTime} - {formattedEndTime}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Duration:</div>
            <div>{interview.duration_minutes} minutes</div>
          </div>
          {interview.meeting_platform && (
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm text-zion-slate-light">Platform:</div>
              <div className="capitalize">{interview.meeting_platform}</div>
            </div>
          )}
          {interview.notes && (
            <div className="flex gap-3">
              <div className="w-24 text-sm text-zion-slate-light">Notes:</div>
              <div className="text-sm">{interview.notes}</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline" onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button onClick={onConfirm} disabled={isLoading}>
          {isLoading ? "Confirming..." : "Confirm Interview"}
        </Button>
      </div>
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  )
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Interview } from "@/types/interview",;
import { format, parseISO } from "date-fns",;
interface InterviewResponseFormProps {;
  interview: Interview,;
  onConfirm: () => Promise<void>,;
  onClose: () => void,;
  isLoading: boolean;
}
;
export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading }: InterviewResponseFormProps) {;
  // Format interview date and time;
  const interviewDate = parseISO(interview.scheduled_date),;
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),;
  const formattedTime = format(interviewDate, 'h: mm a'),;
  // Calculate when interview ends;
  const endTime = new Date(interviewDate),;
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const formattedEndTime = format(endTime, 'h: mm a');
  return (;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
    <div className="space-y-4">;
      <div className="p-4 bg-zion-blue-light/20 rounded-md">;
        <h3 className="font-medium text-lg mb-2">{interview && interview.title}</h3>;
        <p className="text-sm text-zion-slate-light mb-4">;
          Interview requested by {interview && interview.client_name || "Client"}
        </p>;
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Interview } from "@/types/interview",;
import { format, parseISO } from "date-fns",;
;
interface InterviewResponseFormProps {;
  interview:Interview,;
  onConfirm:() => Promise<void>,;
  onClose:() => void,;
  isLoading:boolean;
}
;
export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading } InterviewResponseFormProps) {;
  // Format interview date and time;
  const interviewDate = parseISO(interview.scheduled_date),;
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),;
  const formattedTime = format(interviewDate, 'h:mm a'),;
;
  // Calculate when interview ends;
  const endTime = new Date(interviewDate),;
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes),;
  const formattedEndTime = format(endTime, 'h:mm a'),;
;
  return (;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-4">;
      <div className="p-4 bg-zion-blue-light/20 rounded-md">;
        <h3 className="font-medium text-lg mb-2">{interview.title}</h3>;
        <p className="text-sm text-zion-slate-light mb-4">;
          Interview requested by {interview.client_name || 'Client'}
        </p>;
<<<<<<< HEAD
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid gap-3">;
          <div className="flex items-center gap-3">;
            <div className="w-24 text-sm text-zion-slate-light">Date:</div>;
            <div>{formattedDate}</div>;
          </div>;
          <div className="flex items-center gap-3">;
            <div className="w-24 text-sm text-zion-slate-light">Time:</div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div>;
              {formattedTime} - {formattedEndTime}
            </div>;
          </div>;
          <div className="flex items-center gap-3">;
            <div className="w-24 text-sm text-zion-slate-light">Duration:</div>;
            <div>{interview && interview.duration_minutes} minutes</div>;
          </div>;
          {interview && interview.meeting_platform && (;
            <div className="flex items-center gap-3">;
              <div className="w-24 text-sm text-zion-slate-light">;
                Platform:;
              </div>;
              <div className="capitalize">{interview && interview.meeting_platform}</div>;
            </div>;
          )}
          {interview && interview.notes && (;
            <div className="flex gap-3">;
              <div className="w-24 text-sm text-zion-slate-light">Notes:</div>;
              <div className="text-sm">{interview && interview.notes}</div>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div>{formattedTime} - {formattedEndTime}</div>;
          </div>;
          <div className="flex items-center gap-3">;
            <div className="w-24 text-sm text-zion-slate-light">Duration:</div>;
            <div>{interview.duration_minutes} minutes</div>;
          </div>;
          {interview.meeting_platform && (;
            <div className="flex items-center gap-3">;
              <div className="w-24 text-sm text-zion-slate-light">Platform:</div>;
              <div className="capitalize">{interview.meeting_platform}</div>;
            </div>;
          )}
          {interview.notes && (;
            <div className="flex gap-3">;
              <div className="w-24 text-sm text-zion-slate-light">Notes:</div>;
              <div className="text-sm">{interview.notes}</div>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
        </div>;
      </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            </div>;
          )}
        </div>;
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex justify-end gap-3 pt-4">;
        <Button variant="outline" onClick={onClose} disabled={isLoading}>;
          Cancel;
        </Button>;
        <Button onClick={onConfirm} disabled={isLoading}>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {isLoading ? "Confirming..." : "Confirm Interview"}
        </Button>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
  on_confirm: () => Promise < void>;
  on_close: () => void;
  is_loading: boolean;
}
export /**
 * InterviewResponseForm - Function description
 */
function InterviewResponseForm() {
  // Format interview date and time;
  const interview_date = parseISO (interview.scheduled_date);
  const formatted_date = format (interview_date, "EEEE, MMMM d");
  const formatted_time = format (interview_date, "h: mm a");
;
  // Calculate when interview ends;
  const end_time = new Date (interview_date);
  end_time.set_minutes (end_time.get_minutes () + interview.duration_minutes);
  const formattedEndTime = format (end_time, "h: mm a");
;
  return (
    <div className="space - y-4">;
      <div className="p - 4 bg - zion - blue - light / 20 rounded - md">;
        <h3 className="font - medium text - lg mb - 2">{interview.title}</h3>;
        <p className="text - sm text - zion - slate - light mb - 4">;
          Interview requested by {interview.client_name || "Client"}
        </p>;
        <div className="grid gap - 3">;
          <div className="flex items - center gap - 3">;
            <div className="w - 24 text - sm text - zion - slate - light">Date:</div>;
            <div>{formatted_date}</div>;
          </div>;
          <div className="flex items - center gap - 3">;
            <div className="w - 24 text - sm text - zion - slate - light">Time:</div>;
            <div>;
              {formatted_time} - {formattedEndTime}
            </div>;
          </div>;
          <div className="flex items - center gap - 3">;
            <div className="w - 24 text - sm text - zion - slate - light">Duration:</div>;
            <div>{interview.duration_minutes} minutes</div>;
          </div>;
          {interview.meeting_platform && (
            <div className="flex items - center gap - 3">;
              <div className="w - 24 text - sm text - zion - slate - light">;
                Platform:;
              </div>;
              <div className="capitalize">{interview.meeting_platform}</div>;
            </div>)}
          {interview.notes && (
            <div className="flex gap - 3">;
              <div className="w - 24 text - sm text - zion - slate - light">Notes:</div>;
              <div className="text - sm">{interview.notes}</div>;
            </div>)}
        </div>;
      </div>;
      <div className="flex justify - end gap - 3 pt - 4">;
        <Button variant="outline" on_click={on_close} disabled={is_loading}>;
          Cancel;
        </Button>;
        <Button on_click={on_confirm} disabled={is_loading}>;
          {is_loading ? "Confirming..." : "Confirm Interview"}
        </Button>;
      </div>;
    </div>);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx

}
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======
          {isLoading ? "Confirming..." :"Confirm Interview"}
        </Button>;
      </div>;
    </div>;
  ),;}
 interface InterviewResponseFormProps {
  interview: Interview;
onConfirm: () => Promise<void>;
onClose: () => void;
isLoading: boolean 
}export function InterviewResponseForm ({
  interview, onConfirm, onClose, isLoading 
}: InterviewResponseFormProps) {
  //Format interview date and time const interviewDate = parseISO (interview.scheduled date);
const formattedDate = format (interviewDate, 'EEEE, MMMM d');
const formattedTime = format (interviewDate, 'h: mm a');
//Calculate when interview ends const endTime = new Date (interviewDate);
endTime.setMinutes (endTime.getMinutes () + interview.duration minutes);
const formattedEndTime = format (endTime, 'h: mm a');
return (<div className="space-y-4" > <div className="p-4 bg-zion-blue-light/20 rounded-md" > <h3 className="font-medium text-lg mb-2" > {
  interview.title 
}</h3> <p className="text-sm text-zion-slate-light mb-4" > Interview requested by {
  interview.client name || 'Client' 
}</p> <div className="grid gap-3" > <div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Date:</div> <div> {
  formattedDate 
}</div> </div> <div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Time:</div> <div> {
  formattedTime 
}- {
  formattedEndTime 
}</div> </div> <div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Duration:</div> <div> {
  interview.duration minutes 
}minutes</div> </div> {
  interview.meeting platform && (<div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Platform:</div> <div className="capitalize" > {
  interview.meeting platform 
}</div> </div>) 
}{
  interview.notes && (<div className="flex gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Notes:</div> <div className="text-sm" > {
  interview.notes 
}</div> 
}</div> </div> </Button> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/interviews/InterviewResponseForm.tsx
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
