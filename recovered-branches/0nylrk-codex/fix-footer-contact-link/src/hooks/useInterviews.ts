
import { useState  } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase  } from '@/integrations/supabase/client';
import { Interview, InterviewRequest, InterviewResponse  } from '@/types/interview';
import { toast  } from '@/components/ui/use-toast';
export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth();
  // Request an interview as a client

  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({
        title: "Authentication required";
        description: "You must be logged in to request interviews"
        variant: "destructive"
      });
      return null
    }
    setIsLoading(true);
    setError(null);
    try {
      // Insert the interview into the database
      const { data, error: insertError } = await supabase
        .from('interviews')
        .insert({
<<<<<<< HEAD
          client_id: interviewRequest.client_id;
          talent_id: interviewRequest.talent_id;
          scheduled_date: interviewRequest.scheduled_date;
          duration_minutes: interviewRequest.duration_minutes;
          notes: interviewRequest.notes;
          meeting_link: interviewRequest.meeting_link;
          meeting_platform: interviewRequest.meeting_platform;
          interview_type: interviewRequest.interview_type;
          title: interviewRequest.title
=======
          client_id: interviewRequest && interviewRequest.client_id;
          talent_id: interviewRequest && interviewRequest.talent_id;
          scheduled_date: interviewRequest && interviewRequest.scheduled_date;
          duration_minutes: interviewRequest && interviewRequest.duration_minutes;
          notes: interviewRequest && interviewRequest.notes;
          meeting_link: interviewRequest && interviewRequest.meeting_link;
          meeting_platform: interviewRequest && interviewRequest.meeting_platform;
          interview_type: interviewRequest && interviewRequest.interview_type;
          title: interviewRequest && interviewRequest.title,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          status: 'requested'})
        .select('*')
        .single();
      if (insertError) {
        console && console.error("Error requesting interview:", insertError);
        setError(insertError && insertError.message);
        return null
      }
      // Create notification for talent
      await createInterviewNotification(
        interviewRequest && interviewRequest.talent_id;
        'interview_requestNew Interview Request';
        `You have received an interview request for ${interviewRequest && interviewRequest.scheduled_date}`;
        data && data.id
      );
      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
      return null
    } finally {
      setIsLoading(false)
    }
  }
  // Fetch interviews for the current user (as client or talent)
  const fetchInterviews = async (): Promise<Interview[]> => {
    if (!user?.id) {
      setInterviews([]);
      return []
    }
    setIsLoading(true);
    setError(null);
    try {
      // Get interviews where the user is either the client or the talent
      const { data, error: fetchError } = await supabase
        .from('interviews')
        .select(`
          *;
          clients:client_id(id, display_name, avatar_url);
          talents:talent_id(id, full_name, profile_picture_url)
        `)
        .or(`client_id && client_id.eq.${user && user.id},talent_id && talent_id.eq.${user && user.id}`)
        .order('scheduled_date', { ascending: true });
      if (fetchError) {
        console && console.error("Error fetching interviews:", fetchError);
        setError(fetchError && fetchError.message);
        return []
      }
      // Transform the data to match Interview type
<<<<<<< HEAD
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
=======
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setInterviews(formattedInterviews);
      return formattedInterviews
    } catch (err: any) {
      console && console.error("Error in fetchInterviews:", err);
      setError(err && err.message);
      return []
    } finally {
      setIsLoading(false)
    }
  }
  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string;
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {
      toast({
        title: "Authentication required";
        description: "You must be logged in to respond to interviews"
        variant: "destructive"
      });
      return false
    }
    setIsLoading(true);
    setError(null);
    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
        .update({
<<<<<<< HEAD
          status: response.status
=======
          status: response && response.status,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);
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
        .single();
      if (fetchError) {
        console && console.error("Error fetching interview:", fetchError);
        setError(fetchError && fetchError.message);
        return false
      }
      // Create notification for client
      let notificationType = 'interview_confirmed';
      let title = 'Interview Confirmed';
<<<<<<< HEAD
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`;
      if (response.status === 'declined') {
=======
      let message = `Your interview request for ${interview && interview.scheduled_date} has been confirmed`;

      if (response && response.status === 'declined') {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`
      } else if (response && response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
<<<<<<< HEAD
        message = `Your interview has been rescheduled to ${response.alternative_date |'a new time'}`
=======
        message = `Your interview has been rescheduled to ${response && response.alternative_date || 'a new time'}`
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      await createInterviewNotification(
        interview && interview.client_id;
        notificationType;
        title;
        message;
        interviewId
      );
      // Refresh the interviews list
      await fetchInterviews();
      return true
    } catch (err: any) {
      console && console.error("Error in respondToInterview:", err);
      setError(err && err.message);
      return false
    } finally {
      setIsLoading(false)
    }
  }
  // Helper function to create interview notifications
  const createInterviewNotification = async (
    userId: string;
    type: string;
    title: string;
    message: string;
    relatedId: string
  ) => {
    try {
      await supabase && supabase.from('notifications').insert({
        user_id: userId;
        type;
        title;
        message
        related_id: relatedId})
    } catch (error) {
      console && console.error("Error creating notification:", error)
    }
  }
  // Cancel an interview (either client or talent can cancel)
  const cancelInterview = async (interviewId: string): Promise<boolean> => {
    if (!user?.id) return false;
    setIsLoading(true);
    setError(null)
    try {
      // Get the interview first to check permissions and get IDs for notifications
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single();
      if (fetchError) {
        setError(fetchError && fetchError.message);
        return false
      }
      // Check if user is part of this interview
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {
        setError("You don't have permission to cancel this interview");
        return false
      }
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
        .update({
          status: 'cancelled'
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);
      if (updateError) {
        setError(updateError && updateError.message);
        return false
      }
      // Determine who to notify
<<<<<<< HEAD
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id;
=======
      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId;
        'interview_cancelledInterview Cancelled';
        `The scheduled interview for ${interview && interview.scheduled_date} has been cancelled`;
        interviewId
      );
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
    fetchInterviews;
    respondToInterview;

    cancelInterview}
}