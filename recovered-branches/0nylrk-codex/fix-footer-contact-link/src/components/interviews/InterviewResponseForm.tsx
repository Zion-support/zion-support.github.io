  interview: Interview;
import React from "react",
import { Button } from "@/components/ui/button",
import { Interview } from "@/types/interview",
import { format, parseISO } from "date-fns",

import React from './react';
import { Button  } from '@/components / ui / button';
import { Interview  } from '@/types / interview';
import { format, parseISO  } from './date - fns';
  interview: Interview;

import React from "react";
import { Button } from "@/components/ui/button";

import { format, parseISO } from "date-fns";export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading }: InterviewResponseFormProps) {
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date),
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),
  const formattedTime = format(interviewDate, 'h: mm a'),  const endTime = new Date(interviewDate);
  endTime && endTime.setMinutes(endTime && endTime.getMinutes() + interview && interview.duration_minutes);
  const formattedEndTime = format(endTime, "h: mm a");
import { Interview } from "@/types/interview";
import { format, parseISO } from "date-fns";export function InterviewResponseForm({ interview, onConfirm, onClose, isLoading }: InterviewResponseFormProps) {
  // Format interview date and time
  const interviewDate = parseISO(interview.scheduled_date),
  const formattedDate = format(interviewDate, 'EEEE, MMMM d'),
  const formattedTime = format(interviewDate, 'h: mm a'),  const endTime = new Date(interviewDate);
  endTime && endTime.setMinutes(endTime && endTime.getMinutes() + interview && interview.duration_minutes);
  const formattedEndTime = format(endTime, "h: mm a");

  return (

          Interview requested by {interview.client_name || 'Client'}
        </p>

        <div className="grid gap-3">
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Date:</div>
            <div>{formattedDate}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm text-zion-slate-light">Time:</div>            <div>{interview.duration_minutes} minutes</div>;
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
            </div>;
          )}      <div className="flex justify-end gap-3 pt-4">;
        <Button variant="outline" onClick={onClose} disabled={isLoading}>;
          Cancel;
        </Button>;
        <Button onClick={onConfirm} disabled={isLoading}>;
          {isLoading ? "Confirming..." : "Confirm Interview"}
        </Button>;
      </div>;
    </div>;
  );}
