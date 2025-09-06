
import { useState } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase } from '@/integrations/supabase/client';
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview';
import { toast } from '@/components/ui/use-toast';
export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth($2);
  // Request an interview as a client
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast($2);
      return null
    }

    setIsLoading($2);
    setError($2);
    try {
      // Insert the interview into the database
      const { data, error: insertError} = await supabase
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
        .single($2);
      if (insertError) {
        console.error($2);
        setError($2);
        return null
      }

      // Create notification for talent
      await createInterviewNotification($2);
      return data
    } catch (err: any) {
      console.error($2);
      setError($2);
      return null
    } finally {
      setIsLoading(false)
    }
  },

  // Fetch interviews for the current user (as client or talent)
  const fetchInterviews = async (): Promise<Interview[]> => {
    if (!user?.id) {
      setInterviews($2);
      return []
    }

    setIsLoading($2);
    setError($2);
    try {
      // Get interviews where the user is either the client or the talent
      const { data, error: fetchError} = await supabase
        .from('interviews')
        .select($2);
          talents: talent_id(id, full_name, profile_picture_url)
        `)
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)
        .order($2);
      if (fetchError) {
        console.error($2);
        setError($2);
        return []
      }

      // Transform the data to match Interview type
      const formattedInterviews = $2;
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

      setInterviews($2);
      return formattedInterviews
    } catch (err: any) {
      console.error($2);
      setError($2);
      return []
    } finally {
      setIsLoading(false)
    }
  },

  // Respond to an interview request (as talent)
  const respondToInterview = $2;
    response: InterviewResponse): Promise<boolean> => {
    if (!user?.id) {
      toast($2);
      return false
    }

    setIsLoading($2);
    setError($2);
    try {
      // Update the interview status
      const { error: updateError} = await supabase
        .from('interviews')
        .update({
          status: response.status,
          updated_at: new Date().toISOString()
        })
        .eq($2);
      if (updateError) {
        console.error($2);
        setError($2);
        return false
      }

      // Get the interview to notify the client
      const { data: interview, error: fetchError} = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single($2);
      if (fetchError) {
        console.error($2);
        setError($2);
        return false
      }

      // Create notification for client
      let notificationType = $2;
      let title = $2;
      let message = $2;
      if (response.status = $2;
        title = $2;
        message = $2;
        title = $2;
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`
      }

      await createInterviewNotification($2);
      // Refresh the interviews list
      await fetchInterviews($2);
      return true
    } catch (err: any) {
      console.error($2);
      setError($2);
      return false
    } finally {
      setIsLoading(false)
    }
  },

  // Helper function to create interview notifications
  const createInterviewNotification = $2;
    type: string,
    title: string,
    message: string,
    relatedId: string) => {
    try {
      await supabase.from('notifications').insert({
        user_id: userId,
        type,
        title,
        message,
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)
    }
  },

  // Cancel an interview (either client or talent can cancel)
  const cancelInterview = $2;
    setIsLoading($2);
    setError($2);
    try {
      // Get the interview first to check permissions and get IDs for notifications
      const { data: interview, error: fetchError} = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single($2);
      if (fetchError) {
        setError($2);
        return false
      }

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {
        setError($2);
        return false
      }

      // Update the interview status
      const { error: updateError} = await supabase
        .from('interviews')
        .update({
          status: 'cancelled',
          updated_at: new Date().toISOString()
        })
        .eq($2);
      if (updateError) {
        setError($2);
        return false
      }

      // Determine who to notify
      const notifyUserId = $2;
      // Create notification for the other party
      await createInterviewNotification($2);
      // Refresh the interviews list
      await fetchInterviews($2);
      return true
    } catch (err: any) {
      console.error($2);
      setError($2);
      return false
    } finally {
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
}
