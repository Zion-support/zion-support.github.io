
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',
import { useAuth } from "@/hooks/useAuth",
import { supabase } from '@/integrations/supabase/client',
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',
import { toast } from '@/components/ui/use-toast',
=======
import { useState } from 'react';
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from '@/integrations/supabase/client';
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview';
import { toast } from '@/components/ui/use-toast';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth(),

  // Request an interview as a client
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "You must be logged in to request interviews",
        variant: "destructive"
      }),
      return null
=======
        title: &quot;Authentication required&quot;,
        description: &quot;You must be logged in to request interviews&quot;,
        variant: &quot;destructive&quot;
      });
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsLoading(true),
    setError(null),

    try {
      // Insert the interview into the database
      const { data, error: insertError } = await supabase
        .from('interviews')
        .insert({
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
<<<<<<< HEAD
        console.error("Error requesting interview:", insertError),
        setError(insertError.message),
        return null
=======
        console.error(&quot;Error requesting interview:&quot;, insertError);
        setError(insertError.message);
        return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      // Create notification for talent
      await createInterviewNotification(
        interviewRequest.talent_id,
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id
      ),

      return data
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error in requestInterview:", err),
      setError(err.message),
      return null
=======
      console.error(&quot;Error in requestInterview:&quot;, err);
      setError(err.message);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    setIsLoading(true),;
    setError(null),;
    try {;
      // Insert the interview into the database;
      const { data, error: insertError } = await supabase;
        .from('interviews');
        .insert({;
          client_id: interviewRequest.client_id,;
          talent_id: interviewRequest.talent_id,;
          scheduled_date: interviewRequest.scheduled_date,;
          duration_minutes: interviewRequest.duration_minutes,;
          notes: interviewRequest.notes,;
          meeting_link: interviewRequest.meeting_link,;
          meeting_platform: interviewRequest.meeting_platform,;
          interview_type: interviewRequest.interview_type,;
          title: interviewRequest.title,;
          status: 'requested'});
        .select('*');
        .single(),;
      if (insertError) {;
        console.error("Error requesting interview:", insertError),;
        setError(insertError.message),;
        return null;
      }
;
      // Create notification for talent;
      await createInterviewNotification(;
        interviewRequest.talent_id,;
        'interview_requestNew Interview Request',;
        `You have received an interview request for ${interviewRequest.scheduled_date}`,;
        data.id;
      ),;
      return data;
    } catch (err: any) {;
      console.error("Error in requestInterview:", err),;
      setError(err.message),;
      return null;
    } finally {;
      setIsLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  // Fetch interviews for the current user (as client or talent);
  const fetchInterviews = async (): Promise<Interview[]> => {;
    if (!user?.id) {;
      setInterviews([]),;
      return [];
    }
<<<<<<< HEAD

    setIsLoading(true),
    setError(null),

    try {
      // Get interviews where the user is either the client or the talent
      const { data, error: fetchError } = await supabase
        .from('interviews')
        .select(`
          *,
          clients:client_id(id, display_name, avatar_url),
          talents:talent_id(id, full_name, profile_picture_url)
        `)
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)
        .order('scheduled_date', { ascending: true }),

      if (fetchError) {
<<<<<<< HEAD
        console.error("Error fetching interviews:", fetchError),
        setError(fetchError.message),
        return []
=======
        console.error(&quot;Error fetching interviews:&quot;, fetchError);
        setError(fetchError.message);
        return [];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

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
<<<<<<< HEAD
      console.error("Error in fetchInterviews:", err),
      setError(err.message),
      return []
=======
      console.error(&quot;Error in fetchInterviews:&quot;, err);
      setError(err.message);
      return [];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",
        variant: "destructive"
      }),
      return false
=======
        title: &quot;Authentication required&quot;,
        description: &quot;You must be logged in to respond to interviews&quot;,
        variant: &quot;destructive&quot;
      });
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsLoading(true),
    setError(null),

    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
        .update({
          status: response.status,
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId),

      if (updateError) {
<<<<<<< HEAD
        console.error("Error responding to interview:", updateError),
        setError(updateError.message),
        return false
=======
        console.error(&quot;Error responding to interview:&quot;, updateError);
        setError(updateError.message);
        return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      // Get the interview to notify the client
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single(),

      if (fetchError) {
<<<<<<< HEAD
        console.error("Error fetching interview:", fetchError),
        setError(fetchError.message),
        return false
=======
        console.error(&quot;Error fetching interview:&quot;, fetchError);
        setError(fetchError.message);
        return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Get interviews where the user is either the client or the talent;
      const { data, error: fetchError } = await supabase;
        .from('interviews');
        .select(`;
          *,;
          clients:client_id(id, display_name, avatar_url),;
          talents:talent_id(id, full_name, profile_picture_url);
        `);
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`);
        .order('scheduled_date', { ascending: true }),;
      if (fetchError) {;
        console.error("Error fetching interviews:", fetchError),;
        setError(fetchError.message),;
        return [];
      }
;
      // Transform the data to match Interview type;
      const formattedInterviews = data.map((interview: any): Interview => ({;
        id: interview.id,;
        client_id: interview.client_id,;
        talent_id: interview.talent_id,;
        scheduled_date: interview.scheduled_date,;
        end_time: interview.end_time || '',;
        duration_minutes: interview.duration_minutes,;
        status: interview.status,;
        notes: interview.notes,;
        meeting_link: interview.meeting_link,;
        meeting_platform: interview.meeting_platform,;
        created_at: interview.created_at,;
        updated_at: interview.updated_at,;
        title: interview.title,;
        interview_type: interview.interview_type,;
        client_name: interview.clients?.display_name,;
        talent_name: interview.talents?.full_name,;
        client_avatar: interview.clients?.avatar_url,;
        talent_avatar: interview.talents?.profile_picture_url})),;
      setInterviews(formattedInterviews),;
      return formattedInterviews;
    } catch (err: any) {;
      console.error("Error in fetchInterviews:", err),;
      setError(err.message),;
      return [];
    } finally {;
      setIsLoading(false);
    }
  },;
  // Respond to an interview request (as talent);
  const respondToInterview = async (;
    interviewId: string,;
    response: InterviewResponse;
  ): Promise<boolean> => {;
    if (!user?.id) {;
      toast({;
        title: "Authentication required",;
        description: "You must be logged in to respond to interviews",;
        variant: "destructive";
      }),;
      return false;
    }
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Update the interview status;
      const { error: updateError } = await supabase;
        .from('interviews');
        .update({;
          status: response.status,;
          updated_at: new Date().toISOString();
        });
        .eq('id', interviewId),;
      if (updateError) {;
        console.error("Error responding to interview:", updateError),;
        setError(updateError.message),;
        return false;
      }
;
      // Get the interview to notify the client;
      const { data: interview, error: fetchError } = await supabase;
        .from('interviews');
        .select('*');
        .eq('id', interviewId);
        .single(),;
      if (fetchError) {;
        console.error("Error fetching interview:", fetchError),;
        setError(fetchError.message),;
        return false;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      // Create notification for client;
      let notificationType = 'interview_confirmed',;
      let title = 'Interview Confirmed',;
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`,;
      if (response.status === 'declined') {;
        notificationType = 'interview_declined',;
        title = 'Interview Declined',;
        message = `Your interview request has been declined`;
      } else if (response.status === 'rescheduled') {;
        notificationType = 'interview_rescheduled',;
        title = 'Interview Rescheduled',;
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;
      }
<<<<<<< HEAD

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
<<<<<<< HEAD
      console.error("Error in respondToInterview:", err),
      setError(err.message),
      return false
=======
      console.error(&quot;Error in respondToInterview:&quot;, err);
      setError(err.message);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
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
        user_id: userId,
        type,
        title,
        message,
        related_id: relatedId})
    } catch (error) {
<<<<<<< HEAD
      console.error("Error creating notification:", error)
=======
      console.error(&quot;Error creating notification:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {
<<<<<<< HEAD
        setError("You don't have permission to cancel this interview"),
        return false
=======
        setError(&quot;You don't have permission to cancel this interview&quot;);
        return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
      // Check if user is part of this interview;
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {;
        setError("You don't have permission to cancel this interview"),;
        return false;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD

      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id,

      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId,
        'interview_cancelledInterview Cancelled',
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`,
        interviewId
      ),

      // Refresh the interviews list
      await fetchInterviews(),
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error in cancelInterview:", err),
      setError(err.message),
      return false
=======
      console.error(&quot;Error in cancelInterview:&quot;, err);
      setError(err.message);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
=======
;
      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
        : interview.client_id,;
      // Create notification for the other party;
      await createInterviewNotification(;
        notifyUserId,;
        'interview_cancelledInterview Cancelled',;
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`,;
        interviewId;
      ),;
      // Refresh the interviews list;
      await fetchInterviews(),;
      return true;
    } catch (err: any) {;
      console.error("Error in cancelInterview:", err),;
      setError(err.message),;
      return false;
    } finally {;
      setIsLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;
    fetchInterviews;
    respondToInterview;
    cancelInterview}
}
;