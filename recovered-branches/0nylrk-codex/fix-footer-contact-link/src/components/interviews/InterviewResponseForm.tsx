
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

      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline" onClick={_onClose} disabled={_isLoading}>
          Cancel
        </Button>
        <Button onClick={_onConfirm} disabled={_isLoading}>
          {_isLoading ? "Confirming..." : "Confirm Interview"}
        </Button>
      </div>
    </div>
  );
}
