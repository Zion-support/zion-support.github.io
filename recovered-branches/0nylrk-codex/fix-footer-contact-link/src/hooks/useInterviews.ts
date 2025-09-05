
import { useState } from 'react',
import { useAuth } from "@/hooks/useAuth",
import { supabase } from '@/integrations/supabase/client',
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',
import { toast } from '@/components/ui/use-toast',export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth(),

export function useInterviews() {_const [interviews, _setInterviews] = useState<Interview[]>([]);
  const [isLoading, _setIsLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  const { user} = useAuth();

  // Request an interview as a client
  const _requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {_if (!user) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to request interviews",
        variant: "destructive"
      }),
      return null      return null;
    }

    setIsLoading(true),
    setError(null),

    try {_// Insert the interview into the database
      const { data, _error: insertError} = await supabase
        .from('interviews')
        .insert({_client_id: interviewRequest.client_id, _talent_id: interviewRequest.talent_id, _scheduled_date: interviewRequest.scheduled_date, _duration_minutes: interviewRequest.duration_minutes, _notes: interviewRequest.notes, _meeting_link: interviewRequest.meeting_link, _meeting_platform: interviewRequest.meeting_platform, _interview_type: interviewRequest.interview_type, _title: interviewRequest.title, _status: 'requested'})
        .select('*')
        .single(),

      if (insertError) {
        console.error("Error requesting interview:", insertError),
        setError(insertError.message),
        return null      }
      if (insertError) {_setError(insertError.message);
        return null;}

      // Create notification for talent
      await createInterviewNotification(
        interviewRequest.talent_id,
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,        data.id
      ),

      return data
    } catch (err: any) {
      console.error("Error in requestInterview:", err),
      setError(err.message),
      return null    } finally {
      setIsLoading(false)
    }
  },

  // Fetch interviews for the current user (as client or talent)
  const fetchInterviews = async (): Promise<Interview[]> => {
    if (!user?.id) {
      setInterviews([]),
      return []
    }
      return data;
    } catch (err: unknown) {_setError(err.message);
      return null;} finally {_setIsLoading(false);}
  };

  // Fetch interviews for the current user (as client or talent)
  const _fetchInterviews = async (): Promise<Interview[]> => {_if (!user?.id) {
      setInterviews([]);
      return [];}

    setIsLoading(true),
    setError(null),

    try {_// Get interviews where the user is either the client or the talent
      const { data, _error: fetchError} = await supabase
        .from('interviews')
        .select(`
          *,
          clients: client_id(id, display_name, avatar_url),
          talents:talent_id(id, full_name, profile_picture_url)
        `)
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)
        .order('scheduled_date', { ascending: true }),

      if (fetchError) {
        console.error("Error fetching interviews:", fetchError),
        setError(fetchError.message),
        return []      }

      // Transform the data to match Interview type
      const formattedInterviews = data.map((interview: any): Interview => ({
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
      console.error("Error in fetchInterviews:", err),
      setError(err.message),
      return []    } finally {
      setIsLoading(false)
    }
  },
        .or(`client_id.eq.${_user.id},talent_id.eq.${_user.id}`)
        .order('scheduled_date', {_ascending: true});

      if (fetchError) {_setError(fetchError.message);
        return [];}

      // Transform the data to match Interview type
      const _formattedInterviews = data.map((interview: unknown): Interview => ({_id: interview.id, _client_id: interview.client_id, _talent_id: interview.talent_id, _scheduled_date: interview.scheduled_date, _end_time: interview.end_time || '', _duration_minutes: interview.duration_minutes, _status: interview.status, _notes: interview.notes, _meeting_link: interview.meeting_link, _meeting_platform: interview.meeting_platform, _created_at: interview.created_at, _updated_at: interview.updated_at, _title: interview.title, _interview_type: interview.interview_type, _client_name: interview.clients?.display_name, _talent_name: interview.talents?.full_name, _client_avatar: interview.clients?.avatar_url, _talent_avatar: interview.talents?.profile_picture_url}));

      setInterviews(formattedInterviews);
      return formattedInterviews;
    } catch (err: unknown) {_setError(err.message);
      return [];} finally {_setIsLoading(false);}
  };

  // Respond to an interview request (as talent)
  const _respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {_if (!user?.id) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",
        variant: "destructive"
      }),
      return false      return false;
    }

    setIsLoading(true),
    setError(null),

    try {_// Update the interview status
      const { error: updateError} = await supabase
        .from('interviews')
        .update({
          status: response.status,
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId),

      if (updateError) {
        console.error("Error responding to interview:", updateError),
        setError(updateError.message),
        return false      }
        .update({_status: response.status, _updated_at: new Date().toISOString()})
        .eq('id', interviewId);

      if (updateError) {_setError(updateError.message);
        return false;}

      // Get the interview to notify the client
      const {_data: interview, _error: fetchError} = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single(),

      if (fetchError) {
        console.error("Error fetching interview:", fetchError),
        setError(fetchError.message),
        return false      }

      // Create notification for client
      let notificationType = 'interview_confirmed',
      let title = 'Interview Confirmed',
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`,

      if (response.status === 'declined') {
        notificationType = 'interview_declined',
        title = 'Interview Declined',
        message = `Your interview request has been declined`
      } else if (response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled',
        title = 'Interview Rescheduled',
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`
      if (fetchError) {_setError(fetchError.message);
        return false;}

      // Create notification for client
      let _notificationType = 'interview_confirmed';
      let _title = 'Interview Confirmed';
      let _message = `Your interview request for ${_interview.scheduled_date} has been confirmed`;

      if (response.status === 'declined') {_notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`;} else if (response.status === 'rescheduled') {_notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;
      }

      await createInterviewNotification(
        interview.client_id,
        notificationType,
        title,
        message,
        interviewId
      ),

      // Refresh the interviews list
      await fetchInterviews(),
      return true
    } catch (err: any) {
      console.error("Error in respondToInterview:", err),
      setError(err.message),
      return false    } finally {
      setIsLoading(false)
    }
  },
      await fetchInterviews();
      return true;
    } catch (err: unknown) {_setError(err.message);
      return false;} finally {_setIsLoading(false);}
  };

  // Helper function to create interview notifications
  const _createInterviewNotification = async (_userId: string, _type: string, _title: string, _message: string, _relatedId: string) => {_try {
      await supabase.from('notifications').insert({
        user_id: userId,
        type,
        title,
        message,
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)    }
  },

  // Cancel an interview (either client or talent can cancel)
  const cancelInterview = async (interviewId: string): Promise<boolean> => {
    if (!user?.id) return false,
        user_id: userId, _type, _title, _message, _related_id: relatedId});
    } catch (error) {}
  };

  // Cancel an interview (either client or talent can cancel)
  const _cancelInterview = async (interviewId: string): Promise<boolean> => {_if (!user?.id) return false;

    setIsLoading(true),
    setError(null),

    try {
      // Get the interview first to check permissions and get IDs for notifications
      const { data: interview, _error: fetchError} = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single(),

      if (fetchError) {
        setError(fetchError.message),
        return false
      }

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {
        setError("You don't have permission to cancel this interview"),
        return false      }
      if (fetchError) {_setError(fetchError.message);
        return false;}

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {_setError("You don't have permission to cancel this interview");
        return false;}

      // Update the interview status
      const {_error: updateError} = await supabase
        .from('interviews')
        .update({
          status: 'cancelled',
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId),

      if (updateError) {
        setError(updateError.message),
        return false
      }
      // Determine who to notify
      const _notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id,

      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId,
        'interview_cancelledInterview Cancelled',
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`,        interviewId
      ),

      // Refresh the interviews list
      await fetchInterviews(),
      return true
    } catch (err: any) {
      console.error("Error in cancelInterview:", err),
      setError(err.message),
      return false    } finally {
      setIsLoading(false)
    }
  },

  return {
    interviews,
    isLoading,
    error,
    requestInterview,
    fetchInterviews,
    respondToInterview,
    cancelInterview}
      await fetchInterviews();
      return true;
    } catch (err: unknown) {_setError(err.message);
      return false;} finally {_setIsLoading(false);}
  };

  return {_interviews, _isLoading, _error, _requestInterview, _fetchInterviews, _respondToInterview, _cancelInterview};
}
