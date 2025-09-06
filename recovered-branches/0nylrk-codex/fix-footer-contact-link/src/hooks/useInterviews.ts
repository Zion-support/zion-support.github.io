

  const { user } = useAuth();

  // Request an interview as a client

  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({

        variant: "destructive"
      }),
      return null
    }

      });
      return null;
    }



    setIsLoading(true),
    setError(null),



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      // Insert the interview into the database
      const { data, error: insertError } = await supabase
        .from('interviews')
        .insert({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
      return null
    } finally {
      setIsLoading(false)
    } finally {

=======
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




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    setIsLoading(true),
    setError(null),

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      // Get interviews where the user is either the client or the talent;
      const { data, error: fetch_error } = await supabase;
        .from ('interviews');
        .select (`;
          *;

        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)

      if (fetchError) {
        console && console.error("Error fetching interviews:", fetchError);
        setError(fetchError && fetchError.message);
        return []
      }
      // Transform the data to match Interview type
      const formattedInterviews = data.map((interview: any): Interview => ({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return formattedInterviews
    } catch (err: any) {
      console && console.error("Error in fetchInterviews:", err);
      setError(err && err.message);
      return []
    } finally {
      setIsLoading(false)
    }

    } finally {
      setIsLoading (false);
    }

;
  // Respond to an interview request (as talent);

  const respondToInterview = async (
    interview_id: string;
    response: InterviewResponse): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required";


  },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {
      toast({

        variant: "destructive"
      }),
      return false
    }

      });
      return false;
    }



    setIsLoading(true),
    setError(null),



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
        .update({

          status: response && response.status,

          updated_at: new Date().toISOString()
        })

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

        console.error("Error fetching interview:", fetchError);
        setError(fetchError.message);
        return false
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      await createInterviewNotification(
        interview && interview.client_id;
        notificationType;
        title;
        message;
        interviewId

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
        setError(fetchError.message);
        return false

;
      await createInterviewNotification(;
        interview.client_id,;
        notificationType,;
        title,;
        message,;
        interviewId;
      ),;
      // Refresh the interviews list;
      await fetchInterviews(),;
      return true;
    } catch (err: any) {;
      console.error("Error in respondToInterview:", err),;
      setError(err.message),;
      return false;
    } finally {;
      setIsLoading(false);
    }
  },;
  // Helper function to create interview notifications;
  const createInterviewNotification = async (;
    userId: string,;
    type: string,;
    title: string,;
    message: string,;
    relatedId: string;
  ) => {;
    try {;
      await supabase.from('notifications').insert({;
        user_id: userId,;
        type,;
        title,;
        message,;
        related_id: relatedId});
    } catch (error) {;
      console.error("Error creating notification:", error);
    }
  },;
  // Cancel an interview (either client or talent can cancel);
  const cancelInterview = async (interviewId: string): Promise<boolean> => {;
    if (!user?.id) return false,;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Get the interview first to check permissions and get IDs for notifications;
      const { data: interview, error: fetchError } = await supabase;
        .from('interviews');
        .select('*');
        .eq('id', interviewId);
        .single(),;
      if (fetchError) {;
        setError(fetchError.message),;
        return false;

      }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Check if user is part of this interview
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {
        setError("You don't have permission to cancel this interview");
        return false

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId;
        'interview_cancelledInterview Cancelled';
        `The scheduled interview for ${interview && interview.scheduled_date} has been cancelled`;
        interviewId

      // Refresh the interviews list
      await fetchInterviews();
      return true
    } catch (err: any) {
      console && console.error("Error in cancelInterview:", err);
      setError(err && err.message);
      return false
    } finally {
      setIsLoading(false)

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    fetchInterviews;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    respondToInterview;

    cancelInterview}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
