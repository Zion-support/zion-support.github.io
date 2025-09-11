

import {useState} from 'react';
import {useAuth} from "@/hooks/useAuth";
import {supabase} from '@/integrations/supabase/client';
import {Interview, InterviewRequest, InterviewResponse} from '@/types/interview';
import {toast} from '@/components/ui/use-toast';
export function useInterviews() {;
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Request an interview as a client

  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({
        title: "Authentication required";
        description: "You must be logged in to request interviews"
        title: "Authentication required",
        description: "You must be logged in to request interviews",
        variant: "destructive"
      }),
      return null
    }
    setIsLoading(true);
    setError(null);

    setIsLoading(true),
    setError(null),

    try {
      // Insert the interview into the database
      const { data, error: insertError } = await supabase
        .from('interviews')
        .insert({
          client_id: interviewRequest.client_id;
          talent_id: interviewRequest.talent_id;
          scheduled_date: interviewRequest.scheduled_date;
          duration_minutes: interviewRequest.duration_minutes;
          notes: interviewRequest.notes;
          meeting_link: interviewRequest.meeting_link;
          meeting_platform: interviewRequest.meeting_platform;
          interview_type: interviewRequest.interview_type;
          title: interviewRequest.title
          status: 'requested'})
        .select('*')
        .single();
          client_id: interviewRequest.client_id,
          talent_id: interviewRequest.talent_id,
          scheduled_date: interviewRequest.scheduled_date,
          duration_minutes: interviewRequest.duration_minutes,
          notes: interviewRequest.notes,
          meeting_link: interviewRequest.meeting_link,
          meeting_platform: interviewRequest.meeting_platform,
          interview_type: interviewRequest.interview_type,
          title: interviewRequest.title,
          status: 'requested'})
        .select('*')
        .single(),

      if (insertError) {
        console && console.error("Error requesting interview:", insertError);
        setError(insertError && insertError.message);
        return null
      }
      // Create notification for talent
      await createInterviewNotification(

        interviewRequest.talent_id,
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id
      );
      ),

      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
      return null
    } finally {
      setIsLoading(false)


=======
import { useState } from 'react',;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from '@/integrations/supabase/client',;
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;
import { toast } from '@/components/ui/use-toast',;
export function useInterviews() {;
  const [interviews, setInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const { user } = useAuth(),;
  // Request an interview as a client;
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {;
    if (!user) {;
      toast({;
        title: "Authentication required",;
        description: "You must be logged in to request interviews",;
        variant: "destructive";
      }),;
      return null;
    }

;
  // Fetch interviews for the current user (as client or talent);
  const fetch_interviews = async (): Promise < Interview[]> => {
    // Check condition
if ( {) {
  $2
}
      set_interviews ([]);
      return [];
    }





    setIsLoading(true),
    setError(null),

    try {
      // Get interviews where the user is either the client or the talent;
      const { data, error: fetch_error } = await supabase;
        .from ('interviews');
        .select (`;
          *;

        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)
        .order('scheduled_date', { ascending: true });
        .order('scheduled_date', { ascending: true }),

      if (fetchError) {
        console && console.error("Error fetching interviews:", fetchError);
        setError(fetchError && fetchError.message);
        return []
      }
      // Transform the data to match Interview type
      const formattedInterviews = data.map((interview: any): Interview => ({
        id: interview.id;
        client_id: interview.client_id;
        talent_id: interview.talent_id;
        scheduled_date: interview.scheduled_date;
        end_time: interview.end_time |'';
        duration_minutes: interview.duration_minutes;
        status: interview.status;
        notes: interview.notes;
        meeting_link: interview.meeting_link;
        meeting_platform: interview.meeting_platform;
        created_at: interview.created_at;
        updated_at: interview.updated_at;
        title: interview.title;
        interview_type: interview.interview_type;
        client_name: interview.clients?.display_name;
        talent_name: interview.talents?.full_name;
        client_avatar: interview.clients?.avatar_url
        talent_avatar: interview.talents?.profile_picture_url}));

      const formattedInterviews = data && data.map((interview: any): Interview => ({
        id: interview && interview.id;
        client_id: interview && interview.client_id;
        talent_id: interview && interview.talent_id;
        scheduled_date: interview && interview.scheduled_date;
        end_time: interview && interview.end_time || '';
        duration_minutes: interview && interview.duration_minutes;
        status: interview && interview.status;
        notes: interview && interview.notes;
        meeting_link: interview && interview.meeting_link;
        meeting_platform: interview && interview.meeting_platform;
        created_at: interview && interview.created_at;
        updated_at: interview && interview.updated_at;
        title: interview && interview.title;
        interview_type: interview && interview.interview_type;
        client_name: interview && interview.clients?.display_name;
        talent_name: interview && interview.talents?.full_name;
        client_avatar: interview && interview.clients?.avatar_url,
        talent_avatar: interview && interview.talents?.profile_picture_url}));


      setInterviews(formattedInterviews);
        id: interview.id,
        client_id: interview.client_id,
        talent_id: interview.talent_id,
        scheduled_date: interview.scheduled_date,
        end_time: interview.end_time || '',
        duration_minutes: interview.duration_minutes,
        status: interview.status,
        notes: interview.notes,
        meeting_link: interview.meeting_link,
        meeting_platform: interview.meeting_platform,
        created_at: interview.created_at,
        updated_at: interview.updated_at,
        title: interview.title,
        interview_type: interview.interview_type,
        client_name: interview.clients?.display_name,
        talent_name: interview.talents?.full_name,
        client_avatar: interview.clients?.avatar_url,
        talent_avatar: interview.talents?.profile_picture_url})),

      setInterviews(formattedInterviews),
      return formattedInterviews
    } catch (err: any) {
      console && console.error("Error in fetchInterviews:", err);
      setError(err && err.message);
      return []
    } finally {
      setIsLoading(false)
    }
  }
  },

  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {
      toast({
        title: "Authentication required";
        description: "You must be logged in to respond to interviews"
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",
        variant: "destructive"
      }),
      return false
    }
    setIsLoading(true);
    setError(null);

    setIsLoading(true),
    setError(null),

    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
        .update({

          status: response && response.status,

          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);
        .eq('id', interviewId),

      if (updateError) {
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);
        return false
      }
      // Get the interview to notify the client
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)

    setIsLoading (true);
    set_error (null);
;
    try {
      // Update the interview status;
      const { error: update_error } = await supabase;
        .from ('interviews');
        .update ({
          status: response.status,
          updated_at: new Date ().toISOString ();
        });
        .eq ('id', interview_id);
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error responding to interview:", update_error);
        set_error (update_error.message);
        return false;
      }
      // Get the interview to notify the client;
      const { data: interview, error: fetch_error } = await supabase;
        .from ('interviews');
        .select ('*');
        .eq ('id', interview_id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error fetching interview:", fetch_error);
        set_error (fetch_error.message);
        return false;
      }
      // Create notification for client;
      let notification_type = 'interview_confirmed';

      let title = 'Interview Confirmed';

      let message = `Your interview request for ${interview && interview.scheduled_date} has been confirmed`;

      if (response && response.status === 'declined') {

        notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`
      } else if (response && response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
        message = `Your interview has been rescheduled to ${response.alternative_date |'a new time'}`
      }
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      await createInterviewNotification(
        interview && interview.client_id;
        notificationType;
        title;
        message;
        interviewId
      );
      ),

      // Refresh the interviews list
      await fetchInterviews();
      return true
    } catch (err: any) {
      console && console.error("Error in respondToInterview:", err);
      setError(err && err.message);
      return false

;
      // Check condition
if ( {) {
  $2
}
        notification_type = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`;
      } else // Check condition
if ( {) {
  $2
}
        notification_type = 'interview_rescheduled';
        title = 'Interview Rescheduled';
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;
      }
      await createInterviewNotification (
        interview.client_id;
        notification_type;
        title;
        message;
        interview_id);
;
      // Refresh the interviews list;
      await fetch_interviews ();
      return true;
    } catch (err: any) {
      console.error ("Error in respondToInterview:", err);
      set_error (err.message);
      return false;

    } finally {
      setIsLoading (false);
    }
  }

;
  // Helper function to create interview notifications;

  const createInterviewNotification = async (
    user_id: string;
    type: string;
    title: string;
    message: string;
    related_id: string) => {
    try {

    } finally {
      setIsLoading(false)
    }
  }
  },

  // Helper function to create interview notifications
  const createInterviewNotification = async (
    userId: string,
    type: string,
    title: string,
    message: string,
    relatedId: string
  ) => {
    try {
      await supabase.from('notifications').insert({


      }

      // Check if user is part of this interview
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {
        setError("You don't have permission to cancel this interview");
        return false

      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;


=======



=======
;
      // Check if user is part of this interview;
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {;
        setError("You don't have permission to cancel this interview"),;
        return false;
      }
;
      // Update the interview status;
      const { error: updateError } = await supabase;
        .from('interviews');
        .update({;
          status: 'cancelled',;
          updated_at: new Date().toISOString();
        });
        .eq('id', interviewId),;
      if (updateError) {;
        setError(updateError.message),;
        return false;
      }



      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id,

      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId;
        'interview_cancelledInterview Cancelled';
        `The scheduled interview for ${interview && interview.scheduled_date} has been cancelled`;
        interviewId
      );
      ),

      // Refresh the interviews list
      await fetchInterviews();
      return true
    } catch (err: any) {
      console && console.error("Error in cancelInterview:", err);
      setError(err && err.message);
      return false
    } finally {
      setIsLoading(false)
    }
  }
  return {
    interviews;
    isLoading;
    error;
    requestInterview;
;
  // Cancel an interview (either client or talent can cancel);
  const cancel_interview = async (interview_id: string): Promise < boolean> => {
    // Check condition
if (return false) {
  $2
}
    setIsLoading (true);
    set_error (null),
    try {
      // Get the interview first to check permissions and get IDs for notifications;
      const { data: interview, error: fetch_error } = await supabase;
        .from ('interviews');
        .select ('*');
        .eq ('id', interview_id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        set_error (fetch_error.message);
        return false;
      }
      // Check if user is part of this interview;
      // Check condition
if ( {) {
  $2
}
        set_error ("You don't have permission to cancel this interview");
        return false;
      }
      // Update the interview status;
      const { error: update_error } = await supabase;
        .from ('interviews');
        .update ({
          status: 'cancelled',
          updated_at: new Date ().toISOString ();
        });
        .eq ('id', interview_id);
;
      // Check condition
if ( {) {
  $2
}
        set_error (update_error.message);
        return false;
      }
      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
        : interview.client_id;
;
      // Create notification for the other party;
      await createInterviewNotification (
        notifyUserId;
        'interview_cancelledInterview Cancelled';
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`;
        interview_id);
;
      // Refresh the interviews list;
      await fetch_interviews ();
      return true;
    } catch (err: any) {
      console.error ("Error in cancel_interview:", err);
      set_error (err.message);
      return false;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }

;

  return {
    interviews;
    is_loading;
    error;
    request_interview;
    fetch_interviews;
=======
  },;
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;

    fetchInterviews;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    respondToInterview;

    cancelInterview}
}
}
;
