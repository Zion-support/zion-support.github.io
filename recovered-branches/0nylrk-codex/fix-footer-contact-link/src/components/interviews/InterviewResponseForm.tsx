
import React from "react";
import { Button } from "@/components/ui/button";
import { Interview } from "@/types/interview";
<<<<<<< HEAD
import { formatparseISO } from "date-fns";
=======
import { format, parseISO } from "date-fns";
>>>>>>> origin/auto/autonomy-17186719616

interface InterviewResponseFormProps {
  interview: Interview;
  onConfirm: () => Promise<void>;
  onClose: () => void;
  isLoading: boolean;
}

<<<<<<< HEAD
export function InterviewResponseForm({ interviewonConfirmonCloseisLoading }: InterviewResponseFormProps) {
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate'EEEEMMMM d');
  const formattedTime = format(interviewDate'h:mm a');
=======
export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading }: InterviewResponseFormProps) {
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date);
  const formattedDate = format(interviewDate, 'EEEE, MMMM d');
  const formattedTime = format(interviewDate, 'h:mm a');
>>>>>>> origin/auto/autonomy-17186719616

  // Calculate when interview ends
  const endTime = new Date(interviewDate);
  endTime.setMinutes(endTime.getMinutes() + interview.duration_minutes);
<<<<<<< HEAD
  const formattedEndTime = format(endTime'h:mm a');
=======
  const formattedEndTime = format(endTime, 'h:mm a');
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="space-y-4">
      <div className="p-4 bg-zion-blue-light/20 rounded-md">
        <h3 className="font-medium text-lg mb-2">{interview.title}</h3>
        <p className="text-sm text-zion-slate-light mb-4">
          Interview requested by {interview.client_name || 'Client'}
        </p>
        
        <div className="grid gap-3">
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Date:</div>
            <div>{formattedDate}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Time:</div>
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
  );
}
