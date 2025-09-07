import { useState  } from 'react';

<<<<<<< HEAD
import { toast  } from '@/components/ui/use-toast';
export function useInterviews() {};
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
=======
<<<<<<< HEAD
import { useState  } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase  } from '@/integrations/supabase/client';
import { Interview, InterviewRequest, InterviewResponse  } from '@/types/interview';
import { toast  } from '@/components/ui/use-toast';
export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {useAuth} from "@/hooks/useAuth";
import {supabase} from '@/integrations/supabase/client';
import {Interview, InterviewRequest, InterviewResponse} from '@/types/interview';
import {toast} from '@/components/ui/use-toast';
export function useInterviews() {;
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const { user } = useAuth();
import { useState } from 'react',
import { useAuth } from "@/hooks/useAuth",
import { supabase } from '@/integrations/supabase/client',
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',
import { toast } from '@/components/ui/use-toast',
export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth(),

=======

  const { user } = useAuth();
<<<<<<< HEAD
import { useState } from 'react',
import { useAuth } from "@/hooks/useAuth",
import { supabase } from '@/integrations/supabase/client',
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',

import { toast } from '@/components/ui/use-toast',
export function useInterviews() {}

  const [interviews, setInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth(),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Request an interview as a client

  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({
<<<<<<< HEAD
        title: "Authentication required";
        description: "You must be logged in to request interviews"
        title: "Authentication required",
        description: "You must be logged in to request interviews",
        variant: "destructive"
      }),
      return null
    }
=======

<<<<<<< HEAD
        variant: "destructive"
      }),
      return null
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        title: "Authentication required",
        description: "You must be logged in to request interviews",

        variant: "destructive"
<<<<<<< HEAD

=======
<<<<<<< HEAD
    setIsLoading(true);
    setError(null);
=======
=======
import {useState} from 'react';
import { use_auth } from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import {Interview, InterviewRequest, InterviewResponse} from '@/types / interview';
import {toast} from '@/components / ui / use - toast';
export /**
 * use_interviews - Function description
 */
function use_interviews() {
  const [interviews, set_interviews] = useState < Interview[]>([]);
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const { user } = use_auth ();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
  // Request an interview as a client;
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {}
    if (!user) {}
      toast({}
"
        title: "Authentication required","
        description: "You must be logged in to request interviews",

"
        variant: "destructive"

      });
      return null;
    }

<<<<<<< HEAD
    setIsLoading(true);
    setError(null);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    try {}
      // Insert the interview into the database;
      const { data, error: insertError } = await supabase'
        .from('interviews')
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      // Insert the interview into the database
      const { data, error: insertError } = await supabase
        .from('interviews')
        .insert({

          client_id: interviewRequest && interviewRequest.client_id;
          talent_id: interviewRequest && interviewRequest.talent_id;
          scheduled_date: interviewRequest && interviewRequest.scheduled_date;
          duration_minutes: interviewRequest && interviewRequest.duration_minutes;
          notes: interviewRequest && interviewRequest.notes;
          meeting_link: interviewRequest && interviewRequest.meeting_link;
          meeting_platform: interviewRequest && interviewRequest.meeting_platform;
          interview_type: interviewRequest && interviewRequest.interview_type;
          title: interviewRequest && interviewRequest.title,
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
          status: 'requested'})
        .select('*')
        .single();
=======

          status: 'requested'})
        .select('*')
        .single();
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          client_id: interviewRequest.client_id,
          talent_id: interviewRequest.talent_id,
          scheduled_date: interviewRequest.scheduled_date,
          duration_minutes: interviewRequest.duration_minutes,
          notes: interviewRequest.notes,
          meeting_link: interviewRequest.meeting_link,
          meeting_platform: interviewRequest.meeting_platform,
          interview_type: interviewRequest.interview_type,
          title: interviewRequest.title,'
          status: 'requested'})'
        .select('*')
        .single(),

<<<<<<< HEAD
=======
<<<<<<< HEAD
      if (insertError) {
        console.error("Error requesting interview:", insertError),
        setError(insertError.message),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (insertError) {

        console && console.error("Error requesting interview:", insertError);
        setError(insertError && insertError.message);
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return null
      }
      // Create notification for talent
      await createInterviewNotification(
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        interviewRequest.talent_id,
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id

      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
<<<<<<< HEAD

        return null;
      }
      // Create notification for talent;
      await createInterviewNotification(

      );

      ),

=======
      return null
    setIsLoading (true);
    set_error (null);
;
    try {
      // Insert the interview into the database;
      const { data, error: insert_error } = await supabase;
        .from ('interviews');
        .insert ({
          client_id: interview_request.client_id;
          talent_id: interview_request.talent_id;
          scheduled_date: interview_request.scheduled_date;
          duration_minutes: interview_request.duration_minutes;
          notes: interview_request.notes;
          meeting_link: interview_request.meeting_link;
          meeting_platform: interview_request.meeting_platform;
          interview_type: interview_request.interview_type;
          title: interview_request.title,
          status: 'requested'});
        .select ('*');
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error requesting interview:", insert_error);
        set_error (insert_error.message);
        return null;
      }
      // Create notification for talent;
      await createInterviewNotification (
        interview_request.talent_id;
        'interview_requestNew Interview Request';
        `You have received an interview request for ${interview_request.scheduled_date}`;
        data.id);
;
      return data;
    } catch (err: any) {
      console.error ("Error in request_interview:", err);
      set_error (err.message);
      return null;
    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsLoading(false)
    setIsLoading(true);
    setError(null);

<<<<<<< HEAD
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({    try {
      // Insert the interview into the database
      const { data, error: insertError } = await supabase
        .from('interviews')
        .insert({      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
<<<<<<< HEAD
      return null    } finally {import { useState } from 'react';'
import { supabase } from '@/integrations/supabase/client',;'
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;'
import { toast } from '@/components/ui/use-toast',;'
export function useInterviews() {;
  }
  const [interviews, setInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
=======

=======

<<<<<<< HEAD
      );
      ),

      return data
    } catch (err: any) {
      console.error("Error in requestInterview:", err),
      setError(err.message),
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from '@/integrations/supabase/client',;
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;

import { toast } from '@/components/ui/use-toast',;
export function useInterviews() { return null; }
>>>>>>> origin/chore/fix-lint-and-merge
  const { user } = useAuth(),;
  // Request an interview as a client;
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {;
    if (!user) {;

        variant: "destructive";
      }),;
      return null;
    }
<<<<<<< HEAD
      setIsLoading (false);
    }
  }
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Fetch interviews for the current user (as client or talent);

}
      set_interviews ([]);
      return [];
    }

<<<<<<< HEAD
;
    setIsLoading(true),;
    setError(null),;
<<<<<<< HEAD
    try {;
      // Insert the interview into the database;
      }
        .from('interviews');'
=======
    try {;}
      // Insert the interview into the database;}
      const { data, error: insertError } = await supabase;
        .from('interviews');
>>>>>>> origin/chore/fix-lint-and-merge
=======



<<<<<<< HEAD
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Insert the interview into the database;
      const { data, error: insertError } = await supabase;
        .from('interviews');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        .insert({;
          client_id: interviewRequest.client_id,;
          talent_id: interviewRequest.talent_id,;
          scheduled_date: interviewRequest.scheduled_date,;
          duration_minutes: interviewRequest.duration_minutes,;
          notes: interviewRequest.notes,;
          meeting_link: interviewRequest.meeting_link,;
          meeting_platform: interviewRequest.meeting_platform,;
<<<<<<< HEAD
          interview_type: interviewRequest.interview_type,;}
          title: interviewRequest.title,;}
=======
          interview_type: interviewRequest.interview_type,;
          title: interviewRequest.title,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          status: 'requested'});
        .select('*');
        .single(),;
      if (insertError) {;
<<<<<<< HEAD
        console.error(\"Error requesting interview:\", insertError),;
        setError(insertError.message),;}
        return null;}
=======
        console.error("Error requesting interview:", insertError),;
        setError(insertError.message),;
        return null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      console.error(\"Error in requestInterview:\", err),;
      setError(err.message),;}
      return null;}
    } finally {;}
      setIsLoading(false);}
    }
  },;
  // Fetch interviews for the current user (as client or talent);
  const fetchInterviews = async (): Promise<Interview[] /> => {;
    if (!user?.id) {;
      setInterviews([]),;}
      return [];}
    }
    setIsLoading(true),
    setError(null),
      setIsLoading (false);
    }
  }    setIsLoading (true);
    set_error (null);
;
      setIsLoading (false);
    }
  }
=======
      console.error("Error in requestInterview:", err),;
      setError(err.message),;
      return null;
    } finally {;
      setIsLoading(false);
    }
  },;
  // Fetch interviews for the current user (as client or talent);
  const fetchInterviews = async (): Promise<Interview[]> => {;
    if (!user?.id) {;
      setInterviews([]),;
      return [];
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    setIsLoading (true);
    set_error (null);
;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {

  const [error, setError] = useState<string | null>(null),
</string>

  const [error, setError] = useState<string | null>(null);
  const [interviews, setInterviews] = useState<Interview[]>([]),

  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {

  const [interviews, setInterviews] = useState<Interview[]>([]),;

  const [error, setError] = useState<string | null>(null),;
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {;

  const fetch_interviews = async (): Promise < Interview[]> => {
    // Check condition;
if ( {) {
  $2;
}
      set_interviews ([]);
      return [];

    set_error (null);
;
      setIsLoading (false);
    }
  }
    try {

      // Get interviews where the user is either the client or the talent;
      const { data, error: fetch_error } = await supabase;'
        .from ('interviews');`
        .select (`;
          *;

<<<<<<< HEAD
'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        .order('scheduled_date', { ascending: true }),

      if (fetchError) {
<<<<<<< HEAD
=======
        console && console.error("Error fetching interviews:", fetchError);
        setError(fetchError && fetchError.message);
        return []
      }
      // Transform the data to match Interview type

          clients:client_id (id, display_name, avatar_url);
          talents:talent_id (id, full_name, profile_picture_url);
        `);
        .or (`client_id.eq.${user.id}, talent_id.eq.${user.id}`);
        .order ('scheduled_date', { ascending: true });
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error fetching interviews:", fetch_error);
        set_error (fetch_error.message);
        return [];
      }
      // Transform the data to match Interview type;
      const formatted_interviews = data.map ((interview: any): Interview => ({
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
        .order('scheduled_date', { ascending: true });
        .order('scheduled_date', { ascending: true }),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
      if (fetchError) {
        console.error("Error fetching interviews:", fetchError),
        setError(fetchError.message),
        return []
      }
      // Transform the data to match Interview type
      const formattedInterviews = data.map((interview: any): Interview => ({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        id: interview.id;
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      const formattedInterviews = data.map((interview: any): Interview => ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
      setInterviews(formattedInterviews);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        id: interview.id,
        client_id: interview.client_id,
        talent_id: interview.talent_id,
        scheduled_date: interview.scheduled_date,'

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
<<<<<<< HEAD
=======

      return formattedInterviews
    } catch (err: any) {

      console && console.error("Error in fetchInterviews:", err);
      setError(err && err.message);
      return []
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {"
      console.error ("Error in fetch_interviews:", err);
      set_error (err.message);
      return [];
<<<<<<< HEAD

    } finally {}
      setIsLoading (false);
    }

=======
    } finally {
      setIsLoading (false);
    }
  }
;
  // Respond to an interview request (as talent);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const respondToInterview = async (
    interview_id: string;
    response: InterviewResponse): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
      toast ({"

        title: "Authentication required";

  },

    } catch (err: any) {
      console.error("Error in fetchInterviews:", err),
      setError(err.message),
      return []
    } finally {
      setIsLoading(false)
    }
=======
      toast ({
        title: "Authentication required";
      return formattedInterviews
    } catch (err: any) {
      console.error("Error in fetchInterviews:", err),
      setError(err.message),
      return []
    } finally {
      setIsLoading(false)
    }
  }
  },

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {
<<<<<<< HEAD

=======
      toast({
<<<<<<< HEAD
        title: "Authentication required";
        description: "You must be logged in to respond to interviews"
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"
      }),
      return false
    }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",

        variant: "destructive"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        description: "You must be logged in to respond to interviews",

        variant: "destructive";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      });
      return false;
    }
<<<<<<< HEAD
    setIsLoading(true);
    setError(null);
=======

<<<<<<< HEAD
    setIsLoading(true);
    setError(null);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
        description: "You must be logged in to respond to interviews",
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        variant: "destructive"
        description: "You must be logged in to respond to interviews",
        variant: "destructive";
      });
      return false;
    }
setIsLoading(true);
    setError(null);

      toast({        title: "Authentication required",
        description: "You must be logged in to respond to interviews",

        variant: "destructive"
    setIsLoading(true),
    setError(null),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
<<<<<<< HEAD

=======
        .update({
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          status: response && response.status,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          updated_at: new Date().toISOString()
        })

'

      if (updateError) {"
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);

        return false;
      }

      if (updateError) {
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);
status: response.status
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);
        .eq('id', interviewId),

      if (updateError) {
        console.error("Error responding to interview:", updateError),
        setError(updateError.message),
      if (updateError) {
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);
<<<<<<< HEAD
          status: response.status
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);
        .eq('id', interviewId),

      if (updateError) {
        console.error("Error responding to interview:", updateError),
        setError(updateError.message),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return false
      }

      // Get the interview to notify the client
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')
<<<<<<< HEAD

}
      // Create notification for client
      let notificationType = 'interview_confirmed';
=======
        .eq('id', interviewId)
<<<<<<< HEAD
      }
      // Create notification for client
      let notificationType = 'interview_confirmed';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsLoading (true);
    set_error (null);
;

        console.error ("Error fetching interview:", fetch_error);
        set_error (fetch_error.message);
        return false;
      }
<<<<<<< HEAD
=======
      // Create notification for client;
      let notification_type = 'interview_confirmed';
<<<<<<< HEAD
      let title = 'Interview Confirmed';
      let message = `Your interview request for ${interview && interview.scheduled_date} has been confirmed`;
      if (response && response.status === 'declined') {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        .single(),

      if (fetchError) {

        console.error("Error fetching interview:", fetchError),
        setError(fetchError.message),
        return false;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`
      } else if (response && response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
<<<<<<< HEAD
        message = `Your interview has been rescheduled to ${response && response.alternative_date || 'a new time'}`
      }

        .single();
      if (fetchError) {
        console.error("Error fetching interview:", fetchError);
        setError(fetchError.message);
        return false
      }
      // Create notification for client
      let notificationType = 'interview_confirmed';
      let title = 'Interview Confirmed';
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`;
      if (response.status === 'declined') {
        notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`
      } else if (response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
        message = `Your interview has been rescheduled to ${response.alternative_date |'a new time'}`
      }
        .single(),

      if (fetchError) {
        console.error("Error fetching interview:", fetchError),
        setError(fetchError.message),
        return false
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Get interviews where the user is either the client or the talent;
<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

        variant: "destructive";
      }),;
      return false;
    }
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Update the interview status;

        .from('interviews');
        .update({;
          status: response.status,;
          updated_at: new Date().toISOString();

        console.error("Error responding to interview:", updateError),;
        setError(updateError.message),;
        return false;
      }
;
      // Get the interview to notify the client;

        console.error("Error fetching interview:", fetchError),;
        setError(fetchError.message),;
        return false;
      }
;

      }

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      await createInterviewNotification(
        interview && interview.client_id;
        notificationType;
        title;
        message;

      // Refresh the interviews list

      await fetchInterviews();
      return true;
    } catch (err: any) {"
      console && console.error("Error in respondToInterview:", err);
      setError(err && err.message);
<<<<<<< HEAD
      return false;
=======
      return false
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

        message = `Your interview request has been declined`;
      } else // Check condition;
if ( {) {}
  $2;
}'
        notification_type = 'interview_rescheduled';'
        title = 'Interview Rescheduled';'`
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;
      }
      await createInterviewNotification (
        interview.client_id;
        notification_type;
        title;
        message;
    set_error (null);
;
      setIsLoading (false);
    }
  }

    try {
  // TODO: Implement
}
      // Get interviews where the user is either the client or the talent;
      const { data, error: fetch_error } = await supabase;'
        .from ('interviews');'
        .select (`;
          *;
)
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)
'
        .order('scheduled_date', { ascending: true }),'
      if (fetchError) {'
        console && console.error("Error fetching interviews:", fetchError);"
        setError(fetchError && fetchError.message);
        return []
      }
      // Transform the data to match Interview type;
          clients:client_id (id, display_name, avatar_url);
          talents:talent_id (id, full_name, profile_picture_url);
        `);
        .or (`client_id.eq.${user.id}, talent_id.eq.${user.id}`);"
        .order ('scheduled_date', { ascending: true });'
;
      // Check condition;
if ( {) {
  $2;
}'
        console.error ("Error fetching interviews:", fetch_error);"
        set_error (fetch_error.message);
        return [];
      }
      // Transform the data to match Interview type;
      const formatted_interviews = data.map ((interview: any): Interview => ({,
  id: interview.id;
        client_id: interview.client_id;,
  talent_id: interview.talent_id;
        scheduled_date: interview.scheduled_date;,"
  end_time: interview.end_time |'';'
        duration_minutes: interview.duration_minutes;,
  status: interview.status;
        notes: interview.notes;,
  meeting_link: interview.meeting_link;
        meeting_platform: interview.meeting_platform;,
  created_at: interview.created_at;
        updated_at: interview.updated_at;,
  title: interview.title;
        interview_type: interview.interview_type;,
  client_name: interview.clients?.display_name;
        talent_name: interview.talents?.full_name;,
  client_avatar: interview.clients?.avatar_url;)
        talent_avatar: interview.talents?.profile_picture_url}));

      const formattedInterviews = data && data.map((interview: any): Interview => ({,
  id: interview && interview.id;
        client_id: interview && interview.client_id;,
  talent_id: interview && interview.talent_id;
        scheduled_date: interview && interview.scheduled_date;,'
  end_time: interview && interview.end_time || '';'
        duration_minutes: interview && interview.duration_minutes;,
  status: interview && interview.status;
        notes: interview && interview.notes;,
  meeting_link: interview && interview.meeting_link;
        meeting_platform: interview && interview.meeting_platform;,
  created_at: interview && interview.created_at;
        updated_at: interview && interview.updated_at;,
  title: interview && interview.title;
        interview_type: interview && interview.interview_type;,
  client_name: interview && interview.clients?.display_name;
        talent_name: interview && interview.talents?.full_name;,
  client_avatar: interview && interview.clients?.avatar_url,)
        talent_avatar: interview && interview.talents?.profile_picture_url}));

      setInterviews(formattedInterviews);
      const formattedInterviews = data.map((interview: any): Interview => ({,
  id: interview.id,
        client_id: interview.client_id,
        talent_id: interview.talent_id,
        scheduled_date: interview.scheduled_date,'
        end_time: interview.end_time || '','
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
        client_avatar: interview.clients?.avatar_url,)
        talent_avatar: interview.talents?.profile_picture_url})),

      setInterviews(formattedInterviews),

      return formattedInterviews;
    } catch (err: any) {'
      console && console.error("Error in fetchInterviews:", err);"
      setError(err && err.message);
      return []
;
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {"
      console.error ("Error in fetch_interviews:", err);"
      set_error (err.message);
      return [];
    } finally {
  // TODO: Implement
}
      setIsLoading (false);
    }

;
  // Respond to an interview request (as talent);

  const respondToInterview = async (
    interview_id: string;,)
  response: InterviewResponse): Promise < boolean> => {
    // Check condition;
if ( {) {
  $2;
}
      toast ({"
        title: "Authentication required";"
  },

  },

)
  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse;)
  ): Promise<boolean> => {
</boolean>
  ): Promise<boolean> => {;
</boolean>
  const cancelInterview = async (interviewId: string): Promise<boolean> => {
</boolean>
  const cancelInterview = async (interviewId: string): Promise<boolean> => {;
</boolean>
  const cancel_interview = async (interview_id: string): Promise < boolean> => {
    // Check condition;
if (return false) {
  $2;
}
    setIsLoading (true);
    set_error (null),
    try {
  // TODO: Implement
}
      // Get the interview first to check permissions and get IDs for notifications;
      const { data: interview, error: fetch_error } = await supabase;"
        .from ('interviews');''
        .select ('*');''
        .eq ('id', interview_id);'
        .single ();
;
      // Check condition;
if ( {) {
  $2;
}
        set_error (fetch_error.message);
        return false;
      }
      // Check if user is part of this interview;
      // Check condition;
if ( {) {
  $2;
}'
        set_error ("You don't have permission to cancel this interview");"
        return false;
      }
      // Update the interview status;
      const { error: update_error } = await supabase;"
        .from ('interviews');'
        .update ({'
          status: 'cancelled',')
          updated_at: new Date ().toISOString ();
        });'
        .eq ('id', interview_id);'
;
      // Check condition;
if ( {) {
  $2;
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
        notifyUserId;'
        'interview_cancelledInterview Cancelled';'
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`;)
        interview_id);
;
      // Refresh the interviews list;
      await fetch_interviews ();
      return true;
    } catch (err: any) {"
      console.error ("Error in respondToInterview:", err);
      set_error (err.message);
      return false;
<<<<<<< HEAD

=======
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

      await createInterviewNotification(
        interview.client_id,
        notificationType,
        title,
        message,
        interviewId
      );
      ),

      // Refresh the interviews list
      await fetchInterviews(),
      return true
    } catch (err: any) {
      console.error("Error in respondToInterview:", err),
      setError(err.message),
      return false
    } finally {
      setIsLoading(false)
    }

  },


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Helper function to create interview notifications

  const createInterviewNotification = async (
    userId: string,
    type: string,
    title: string,
    message: string,

    relatedId: string
  ) => {
    try {
<<<<<<< HEAD
      // Get the interview first to check permissions and get IDs for notifications
}
        .from('interviews')'
        .select('*')'
        .eq('id', interviewId)'
        .single();
      if (fetchError) {
        }
        setError(fetchError.message);
return false;
      }
        "user_id": userId,
        type,
        title,
        message,
        "related_id": relatedId})
=======
      await supabase.from('notifications').insert({
<<<<<<< HEAD
        user_id: userId;
        type;
        title;
        message
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)
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
      }
        user_id: userId,
        type,
        title,
        message,
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)
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
=======

<<<<<<< HEAD
        user_id: userId;
        type;
        title;
        message
        related_id: relatedId})
>>>>>>> origin/chore/fix-lint-and-merge
    } catch (error) {
      console.error("Error creating notification:", error)

    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      }
<<<<<<< HEAD
      await supabase.from('notifications').insert({;'
        }
        "user_id": userId,;
        type,;
        title,;
        message,;
        "related_id": relatedId});
    } catch (error) {;
      }
      console.error("Error creating "notification":", error);"
    }
  },;
  // Cancel an interview (either client or talent can cancel);
  const cancelInterview = async ("interviewId": string): Promise<boolean> => {;
    }
    if (!user?.id) return false,;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Get the interview first to check permissions and get IDs for notifications;
      }
        .from('interviews');'
        .select('*');'
        .eq('id', interviewId);'
        .single(),;
      if (fetchError) {;
        }
        setError(fetchError.message),;
        return false;      // Check if user is part of this interview,
if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {
        }
        setError("You don't have permission to cancel this interview");"
return false;
      // Determine who to notify,
const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;

;
      // Check if user is part of this interview;
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {;
        }
        setError("You don't have permission to cancel this interview"),;"
        return false;
      }
;
      // Update the interview status;
        .from('interviews');'
        .update({;
          }
          "status": 'cancelled',;'
          "updated_at": new Date().toISOString();
        });
        .eq('id', interviewId),;'
      if (updateError) {;
        }
        setError(updateError.message),;
        return false;
      }
      // Determine who to notify,
const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id,
  return {
    }
    interviews;
    is_loading;
    error;
    request_interview;
    }
  },

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Check if user is part of this interview
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {
        setError("You don't have permission to cancel this interview");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return false
      }

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {
        setError($2);
=======

      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {

        setError("You don't have permission to cancel this interview");
        return false;
      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
        : interview.client_id;

        : interview && interview.client_id;

>>>>>>> origin/chore/fix-lint-and-merge
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
        setError(updateError.message);
        return false
      }
      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id;

      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;

}

<<<<<<< HEAD
=======
<<<<<<< HEAD



      }

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {
        setError("You don't have permission to cancel this interview"),
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
        setError(updateError.message);
        return false
      }
      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id;

=======
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
      // Check if user is part of this interview;
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {;'"
        setError("You don't have permission to cancel this interview"),;
        return false;
      }
;
      // Update the interview status;
      const { error: updateError } = await supabase;'
        .from('interviews');
        .update({;'
          status: 'cancelled',;
          updated_at: new Date().toISOString();
        });'
        .eq('id', interviewId),;
      if (updateError) {;
        setError(updateError.message),;
        return false;
      }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id

        : interview.client_id,

<<<<<<< HEAD
      // Create notification for the other party

      await createInterviewNotification(
        notifyUserId;'
        'interview_cancelledInterview Cancelled';`
        `The scheduled interview for ${interview && interview.scheduled_date} has been cancelled`;

      await fetchInterviews();
      return true;
    } catch (err: any) {"
      console && console.error("Error in cancelInterview:", err);
      setError(err && err.message);

;
  // Cancel an interview (either client or talent can cancel);
  const cancel_interview = async (interview_id: string): Promise < boolean> => {}
    // Check condition;
if (return false) {}
  $2;
}
    setIsLoading (true);
    set_error (null),
    try {}
      // Get the interview first to check permissions and get IDs for notifications;
      const { data: interview, error: fetch_error } = await supabase;'
        .from ('interviews');'
        .select ('*');'
        .eq ('id', interview_id);
        .single ();
;
      // Check condition;
if ( {) {}
  $2;

const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;
=======
<<<<<<< HEAD
      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId;
        'interview_cancelledInterview Cancelled';
        `The scheduled interview for ${interview && interview.scheduled_date} has been cancelled`;
        interviewId
      // Refresh the interviews list
      await fetchInterviews();
      return true
        .order('scheduled_date', { ascending: true }),
      if (fetchError) {
        console && console.error("Error fetching interviews:", fetchError);"
        setError(fetchError && fetchError.message);
        return []
      // Transform the data to match Interview type;
          clients:client_id (id, display_name, avatar_url);
          talents:talent_id (id, full_name, profile_picture_url);`;
        `);`;
        .or (`client_id.eq.${user.id}, talent_id.eq.${user.id}`);"
        .order ('scheduled_date', { ascending: true });
      // Check condition;
        console.error ("Error fetching interviews:", fetch_error);"
        set_error (fetch_error.message);
      // Transform the data to match Interview type;
      const formatted_interviews = data.map ((interview: any): Interview => ({,
  id: interview.id;
        client_id: interview.client_id;,
  talent_id: interview.talent_id;
        scheduled_date: interview.scheduled_date;,"
  end_time: interview.end_time |;
        duration_minutes: interview.duration_minutes;,
  status: interview.status;
        notes: interview.notes;,
  meeting_link: interview.meeting_link;
        meeting_platform: interview.meeting_platform;,
  created_at: interview.created_at;
        updated_at: interview.updated_at;,
  title: interview.title;
        interview_type: interview.interview_type;,
  client_name: interview.clients?.display_name;
        talent_name: interview.talents?.full_name;,
  client_avatar: interview.clients?.avatar_url;)
        talent_avatar: interview.talents?.profile_picture_url}));

      const formattedInterviews = data && data.map((interview: any): Interview => ({,
  id: interview && interview.id;
        client_id: interview && interview.client_id;,
  talent_id: interview && interview.talent_id;
        scheduled_date: interview && interview.scheduled_date;,
  end_time: interview && interview.end_time || ;
        duration_minutes: interview && interview.duration_minutes;,
  status: interview && interview.status;
        notes: interview && interview.notes;,
  meeting_link: interview && interview.meeting_link;
        meeting_platform: interview && interview.meeting_platform;,
  created_at: interview && interview.created_at;
        updated_at: interview && interview.updated_at;,
  title: interview && interview.title;
        interview_type: interview && interview.interview_type;,
  client_name: interview && interview.clients?.display_name;
        talent_name: interview && interview.talents?.full_name;,
  client_avatar: interview && interview.clients?.avatar_url,)
        talent_avatar: interview && interview.talents?.profile_picture_url}));

      setInterviews(formattedInterviews);
      const formattedInterviews = data.map((interview: any): Interview => ({,
  id: interview.id,
        client_id: interview.client_id,
        talent_id: interview.talent_id,
        scheduled_date: interview.scheduled_date,
        end_time: interview.end_time || ,
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
        client_avatar: interview.clients?.avatar_url,)
        talent_avatar: interview.talents?.profile_picture_url})),

      setInterviews(formattedInterviews),

      return formattedInterviews;
    } catch (err: any) {
      console && console.error("Error in fetchInterviews:", err);"
      setError(err && err.message);
<<<<<<< HEAD
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {"
      console.error ("Error in fetch_interviews:", err);"
    } catch (err: any) {'
      console.error ("Error in cancel_interview:", err);"
      set_error (err.message);
=======
      return false

      await supabase.from ('notifications').insert ({
        user_id: user_id;
        type;
        title;
        message,
        related_id: related_id});
    } catch (error) {
      console.error ("Error creating notification:", error);
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } finally {
  // TODO: Implement

  // Respond to an interview request (as talent);

  const respondToInterview = async (
    interview_id: string;,)
  response: InterviewResponse): Promise < boolean> => {
    // Check condition;
      toast ({"
        title: "Authentication required";"
  },

)
  // Respond to an interview request (as talent)
    interviewId: string,
    response: InterviewResponse;)
  ): Promise<boolean> => {
</boolean>
  ): Promise<boolean> => {;
  const cancelInterview = async (interviewId: string): Promise<boolean> => {
  const cancelInterview = async (interviewId: string): Promise<boolean> => {;
  const cancel_interview = async (interview_id: string): Promise < boolean> => {
    // Check condition;
if (return false) {
    set_error (null),
  // TODO: Implement
      // Get the interview first to check permissions and get IDs for notifications;
      const { data: interview, error: fetch_error } = await supabase;"
        .select ('*');
        .eq ('id', interview_id);
        .single ();

        return false;
      // Check if user is part of this interview;

        set_error ("You don't have permission to cancel this interview");
        return false;
      }
      // Update the interview status;

        .update ({
          status: 'cancelled',')
          updated_at: new Date ().toISOString ();
        });

        set_error (update_error.message);
      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
        : interview.client_id;
      // Create notification for the other party;
      await createInterviewNotification (

        `The scheduled interview for ${interview.scheduled_date} has been cancelled`;

        interview_id);
      // Refresh the interviews list;
      await fetch_interviews ();
      return true;
<<<<<<< HEAD

      setIsLoading (false);
    }

=======
    } catch (err: any) {
      console.error ("Error in cancel_interview:", err);
      set_error (err.message);
      return false;
    } finally {
      setIsLoading (false);
    }
  }
;
  return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    interviews;
    is_loading;
    error;

    request_interview;
<<<<<<< HEAD

=======
    fetch_interviews;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },;
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;

<<<<<<< HEAD
}
;

    respondToInterview;
    cancel_interview}

"
import { useState } from 'react',;
import { useAuth } from "@/hooks/useAuth",;""
import { supabase } from '@/integrations/supabase/client',;
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;
import { toast } from '@/components/ui/use-toast',;
export function useInterviews() {;

  const requestInterview = async (interviewRequest:InterviewRequest):Promise<Interview | null> => {;

  const fetchInterviews = async ():Promise<Interview[]> => {;

  ):Promise<boolean> => {;
  const cancelInterview = async (interviewId:string):Promise<boolean> => {;
</boolean>`;
pr-12325
</boolean>'

  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;

=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    fetchInterviews;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    respondToInterview;

    cancel_interview}

}

}
;

<<<<<<< HEAD
    fetchInterviews;
    respondToInterview;

    cancelInterview}
=======
<<<<<<< HEAD
    respondToInterview;
    cancel_interview}

import { useState } from 'react',;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from '@/integrations/supabase/client',;
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;
import { toast } from '@/components/ui/use-toast',;
;
export function useInterviews() {;
  const [interviews, setInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const { user } = useAuth(),;
;
  // Request an interview as a client;
  const requestInterview = async (interviewRequest:InterviewRequest):Promise<Interview | null> => {;
    if (!user) {;
      toast({;
        title:"Authentication required",;
        description:"You must be logged in to request interviews",;
        variant:"destructive";
      }),;
      return null,;
    }
;
    setIsLoading(true),;
    setError(null),;
;
    try {;
      // Insert the interview into the database;
      const { data, error:insertError } = await supabase;
        .from('interviews');
        .insert({;
          client_id:interviewRequest.client_id,;
          talent_id:interviewRequest.talent_id,;
          scheduled_date:interviewRequest.scheduled_date,;
          duration_minutes:interviewRequest.duration_minutes,;
          notes:interviewRequest.notes,;
          meeting_link:interviewRequest.meeting_link,;
          meeting_platform:interviewRequest.meeting_platform,;
          interview_type:interviewRequest.interview_type,;
          title:interviewRequest.title,;
          status:'requested'});
        .select('*');
        .single(),;
;
      if (insertError) {;
        console.error("Error requesting interview:", insertError),;
        setError(insertError.message),;
        return null,;
      }
;
      // Create notification for talent;
      await createInterviewNotification(;
        interviewRequest.talent_id,;
        'interview_requestNew Interview Request',;
        `You have received an interview request for ${interviewRequest.scheduled_date}`,;
        data.id;
      ),;
;
      return data,;
    } catch (err:any) {;
      console.error("Error in requestInterview:", err),;
      setError(err.message),;
      return null,;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  // Fetch interviews for the current user (as client or talent);
  const fetchInterviews = async ():Promise<Interview[]> => {;
    if (!user?.id) {;
      setInterviews([]),;
      return [],;
    }
;
    setIsLoading(true),;
    setError(null),;
;
    try {;
      // Get interviews where the user is either the client or the talent;
      const { data, error:fetchError } = await supabase;
        .from('interviews');
        .select(`;
          *,;
          clients:client_id(id, display_name, avatar_url),;
          talents:talent_id(id, full_name, profile_picture_url);
        `);
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`);
        .order('scheduled_date', { ascending:true }),;
;
      if (fetchError) {;
        console.error("Error fetching interviews:", fetchError),;
        setError(fetchError.message),;
        return [],;
      }
;
      // Transform the data to match Interview type;
      const formattedInterviews = data.map((interview:any):Interview => ({;
        id:interview.id,;
        client_id:interview.client_id,;
        talent_id:interview.talent_id,;
        scheduled_date:interview.scheduled_date,;
        end_time:interview.end_time || '',;
        duration_minutes:interview.duration_minutes,;
        status:interview.status,;
        notes:interview.notes,;
        meeting_link:interview.meeting_link,;
        meeting_platform:interview.meeting_platform,;
        created_at:interview.created_at,;
        updated_at:interview.updated_at,;
        title:interview.title,;
        interview_type:interview.interview_type,;
        client_name:interview.clients?.display_name,;
        talent_name:interview.talents?.full_name,;
        client_avatar:interview.clients?.avatar_url,;
        talent_avatar:interview.talents?.profile_picture_url})),;
;
      setInterviews(formattedInterviews),;
      return formattedInterviews,;
    } catch (err:any) {;
      console.error("Error in fetchInterviews:", err),;
      setError(err.message),;
      return [],;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  // Respond to an interview request (as talent);
  const respondToInterview = async (;
    interviewId:string,;
    response:InterviewResponse;
  ):Promise<boolean> => {;
    if (!user?.id) {;
      toast({;
        title:"Authentication required",;
        description:"You must be logged in to respond to interviews",;
        variant:"destructive";
      }),;
      return false,;
    }
;
    setIsLoading(true),;
    setError(null),;
;
    try {;
      // Update the interview status;
      const { error:updateError } = await supabase;
        .from('interviews');
        .update({;
          status:response.status,;
          updated_at:new Date().toISOString();
        });
        .eq('id', interviewId),;
;
      if (updateError) {;
        console.error("Error responding to interview:", updateError),;
        setError(updateError.message),;
        return false,;
      }
;
      // Get the interview to notify the client;
      const { data:interview, error:fetchError } = await supabase;
        .from('interviews');
        .select('*');
        .eq('id', interviewId);
        .single(),;
;
      if (fetchError) {;
        console.error("Error fetching interview:", fetchError),;
        setError(fetchError.message),;
        return false,;
      }
;
      // Create notification for client;
      let notificationType = 'interview_confirmed',;
      let title = 'Interview Confirmed',;
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`,;
;
      if (response.status === 'declined') {;
        notificationType = 'interview_declined',;
        title = 'Interview Declined',;
        message = `Your interview request has been declined`,;
      } else if (response.status === 'rescheduled') {;
        notificationType = 'interview_rescheduled',;
        title = 'Interview Rescheduled',;
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`,;
      }
;
      await createInterviewNotification(;
        interview.client_id,;
        notificationType,;
        title,;
        message,;
        interviewId;
      ),;
;
      // Refresh the interviews list;
      await fetchInterviews(),;
      return true,;
    } catch (err:any) {;
      console.error("Error in respondToInterview:", err),;
      setError(err.message),;
      return false,;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  // Helper function to create interview notifications;
  const createInterviewNotification = async (;
    userId:string,;
    type:string,;
    title:string,;
    message:string,;
    relatedId:string;
  ) => {;
    try {;
      await supabase.from('notifications').insert({;
        user_id:userId,;
        type,;
        title,;
        message,;
        related_id:relatedId}),;
    } catch (error) {;
      console.error("Error creating notification:", error),;
    }
  },;
;
  // Cancel an interview (either client or talent can cancel);
  const cancelInterview = async (interviewId:string):Promise<boolean> => {;
    if (!user?.id) return false,;
;
    setIsLoading(true),;
    setError(null),;
;
    try {;
      // Get the interview first to check permissions and get IDs for notifications;
      const { data:interview, error:fetchError } = await supabase;
        .from('interviews');
        .select('*');
        .eq('id', interviewId);
        .single(),;
;
      if (fetchError) {;
        setError(fetchError.message),;
        return false,;
      }
;
      // Check if user is part of this interview;
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {;
        setError("You don't have permission to cancel this interview"),;
        return false,;
      }
;
      // Update the interview status;
      const { error:updateError } = await supabase;
        .from('interviews');
        .update({;
          status:'cancelled',;
          updated_at:new Date().toISOString();
        });
        .eq('id', interviewId),;
;
      if (updateError) {;
        setError(updateError.message),;
        return false,;
      }
      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId,
        'interview_cancelledInterview Cancelled',
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`,
        interviewId
      );
      ),

      // Refresh the interviews list
      await fetchInterviews(),
      return true
    } catch (err: any) {
      console.error("Error in cancelInterview:", err),
      setError(err.message),
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
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
