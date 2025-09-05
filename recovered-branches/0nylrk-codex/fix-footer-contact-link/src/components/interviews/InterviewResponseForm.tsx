
<<<<<<< HEAD
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
    <div className="space-y-4">;
      <div className="p-4 bg-zion-blue-light/20 rounded-md">;
        <h3 className="font-medium text-lg mb-2">{interview.title}</h3>;
        <p className="text-sm text-zion-slate-light mb-4">;
          Interview requested by {interview.client_name || 'Client'}
        </p>;
        ;
        <div className="grid gap-3">;
          <div className="flex items-center gap-3">;
            <div className="w-24 text-sm text-zion-slate-light">Date:</div>;
            <div>{formattedDate}</div>;
          </div>;
          <div className="flex items-center gap-3">;
            <div className="w-24 text-sm text-zion-slate-light">Time:</div>;
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
            </div>;
          )}
        </div>;
      </div>;
;
      <div className="flex justify-end gap-3 pt-4">;
        <Button variant="outline" onClick={onClose} disabled={isLoading}>;
          Cancel;
        </Button>;
        <Button onClick={onConfirm} disabled={isLoading}>;
          {isLoading ? "Confirming..." :"Confirm Interview"}
        </Button>;
      </div>;
    </div>;
  ),;
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { Interview } from "@/types/interview",
import { format, parseISO } from "date-fns",
interface InterviewResponseFormProps {
  interview: Interview,
  onConfirm: () => Promise<void>,
  onClose: () => void,
  isLoading: boolean
}

export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading }: InterviewResponseFormProps) {
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date),
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),
  const formattedTime = format(interviewDate, 'h: mm a'),

  // Calculate when interview ends
  const endTime = new Date(interviewDate),
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes),
  const formattedEndTime = format(endTime, 'h: mm a'),

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;p-4 bg-zion-blue-light/20 rounded-md&quot;>
        <h3 className=&quot;font-medium text-lg mb-2&quot;>{interview.title}</h3>
        <p className=&quot;text-sm text-zion-slate-light mb-4&quot;>
          Interview requested by {interview.client_name || 'Client'}
        </p>
        
        <div className=&quot;grid gap-3&quot;>
          <div className=&quot;flex items-center gap-3&quot;>
            <div className=&quot;w-24 text-sm text-zion-slate-light&quot;>Date:</div>
            <div>{formattedDate}</div>
          </div>
          <div className=&quot;flex items-center gap-3&quot;>
            <div className=&quot;w-24 text-sm text-zion-slate-light&quot;>Time:</div>
            <div>{formattedTime} - {formattedEndTime}</div>
          </div>
          <div className=&quot;flex items-center gap-3&quot;>
            <div className=&quot;w-24 text-sm text-zion-slate-light&quot;>Duration:</div>
            <div>{interview.duration_minutes} minutes</div>
          </div>
          {interview.meeting_platform && (
            <div className=&quot;flex items-center gap-3&quot;>
              <div className=&quot;w-24 text-sm text-zion-slate-light&quot;>Platform:</div>
              <div className=&quot;capitalize&quot;>{interview.meeting_platform}</div>
            </div>
          )}
          {interview.notes && (
            <div className=&quot;flex gap-3&quot;>
              <div className=&quot;w-24 text-sm text-zion-slate-light&quot;>Notes:</div>
              <div className=&quot;text-sm&quot;>{interview.notes}</div>
import React from "react";

interface InterviewResponseFormProps {_interview: Interview;
  onConfirm: () => Promise<void>;
  onClose: () => void;
  isLoading: boolean;}

export function InterviewResponseForm(_{_interview, _onConfirm, _onClose, _isLoading}: InterviewResponseFormProps) {_// Format interview date and time
  const _interviewDate = parseISO(interview.scheduled_date);
  const _formattedDate = format(interviewDate, _'EEEE, _MMMM d');
  const _formattedTime = format(interviewDate, _'h:mm a');

  // Calculate when interview ends
  const _endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
  const _formattedEndTime = format(endTime, _'h:mm a');

  return (
    <div className="space-y-4">
      <div className="p-4 bg-zion-blue-light/20 rounded-md">
        <h3 className="font-medium text-lg mb-2">{interview.title}</h3>
        <p className="text-sm text-zion-slate-light mb-4">
          Interview requested by {_interview.client_name || 'Client'}
        </p>
        
        <div className="grid gap-3">
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Date:</div>
            <div>{_formattedDate}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Time:</div>
            <div>{_formattedTime} - {_formattedEndTime}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Duration:</div>
            <div>{_interview.duration_minutes} minutes</div>
          </div>
          {_interview.meeting_platform && (
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm text-zion-slate-light">Platform:</div>
              <div className="capitalize">{interview.meeting_platform}</div>
            </div>
          )}
          {_interview.notes && (
            <div className="flex gap-3">
              <div className="w-24 text-sm text-zion-slate-light">Notes:</div>
              <div className="text-sm">{interview.notes}</div>
            </div>
          )}
        </div>
      </div>

      <div className=&quot;flex justify-end gap-3 pt-4&quot;>
        <Button variant=&quot;outline&quot; onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button onClick={onConfirm} disabled={isLoading}>
          {isLoading ? &quot;Confirming...&quot; : &quot;Confirm Interview&quot;}        </Button>
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
