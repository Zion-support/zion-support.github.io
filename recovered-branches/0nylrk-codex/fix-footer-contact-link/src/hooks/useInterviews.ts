
import { useState } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase } from '@/integrations/supabase/client';
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview';
import { toast } from '@/components/ui/use-toast';

export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  // Request an interview as a client
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to request interviews",
        variant: "destructive"
      });
      return null;
    }

    setIsLoading(true);
    setError(null);

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
