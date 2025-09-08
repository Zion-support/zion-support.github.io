import { useState  } from 'react';

<<<<<<< HEAD
=======

import { toast  } from '@/components/ui/use-toast';
export function useInterviews() {};
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba


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
=======

  const { user } = useAuth();
import { useState } from 'react',
import { useAuth } from "@/hooks/useAuth",
import { supabase } from '@/integrations/supabase/client',
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const [interviews, setInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth(),


>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Request an interview as a client

  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
<<<<<<< HEAD

      toast({

=======
      toast({

        variant: "destructive"
      }),
      return null
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba

        title: "Authentication required",
        description: "You must be logged in to request interviews",

        variant: "destructive"

<<<<<<< HEAD

=======
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

    setIsLoading(true);
    setError(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD


=======
    try {}
      // Insert the interview into the database;
      const { data, error: insertError } = await supabase'
        .from('interviews')

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (insertError) {

        console && console.error("Error requesting interview:", insertError);
        setError(insertError && insertError.message);
<<<<<<< HEAD


        return null
      }
      // Create notification for talent
      await createInterviewNotification(




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
        interviewRequest.talent_id,
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id

      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);

<<<<<<< HEAD
=======
        return null;
      }
        variant: "destructive"
      }),
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return null
    }

        title: "Authentication required",
        description: "You must be logged in to request interviews",

        variant: "destructive"


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
<<<<<<< HEAD
    } finally {
=======
    }


    setIsLoading(true);
    setError(null);

    setIsLoading(true),
    setError(null),



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


      if (insertError) {

        console && console.error("Error requesting interview:", insertError);
        setError(insertError && insertError.message);


        interviewRequest.talent_id,
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id

      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
>>>>>>> origin/cursor/delete-old-data-records-6bba

      setIsLoading(false)
    setIsLoading(true);
    setError(null);


<<<<<<< HEAD


=======
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
      return null    } finally {import { useState } from 'react';'
import { supabase } from '@/integrations/supabase/client',;'
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;'
import { toast } from '@/components/ui/use-toast',;'
export function useInterviews() {;
  }
  const [interviews, setInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
import { useState } from 'react',;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from '@/integrations/supabase/client',;
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;

import { toast } from '@/components/ui/use-toast',;
export function useInterviews() { return null; }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth(),;
  // Request an interview as a client;
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {;
    if (!user) {;

        variant: "destructive";
      }),;
      return null;
    }

<<<<<<< HEAD


=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Fetch interviews for the current user (as client or talent);

}
      set_interviews ([]);
      return [];
    }


<<<<<<< HEAD
    try {;}
      // Insert the interview into the database;}
      const { data, error: insertError } = await supabase;
        .from('interviews');




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



        .order('scheduled_date', { ascending: true }),

      if (fetchError) {

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

          interview_type: interviewRequest.interview_type,;}
          title: interviewRequest.title,;}
          status: 'requested'});
        .select('*');
        .single(),;
      if (insertError) {;

        console.error(\"Error requesting interview:\", insertError),;
        setError(insertError.message),;}
        return null;}
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


      if (fetchError) {
        console.error("Error fetching interviews:", fetchError),
        setError(fetchError.message),
        return []
      }
      // Transform the data to match Interview type
      const formattedInterviews = data.map((interview: any): Interview => ({
        id: interview.id;


      setInterviews(formattedInterviews);
>>>>>>> origin/cursor/delete-old-data-records-6bba
        id: interview.id,
        client_id: interview.client_id,
        talent_id: interview.talent_id,
        scheduled_date: interview.scheduled_date,'

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

      setInterviews(formattedInterviews),
=======
      setInterviews($2);
      return formattedInterviews
    } catch (err: any) {
      console.error($2);
      setError($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {"
      console.error ("Error in fetch_interviews:", err);
      set_error (err.message);
      return [];

<<<<<<< HEAD
    } finally {
      setIsLoading (false);
    }
  }
;
  // Respond to an interview request (as talent);

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const respondToInterview = async (
    interview_id: string;
    response: InterviewResponse): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}


<<<<<<< HEAD
=======
  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {


        variant: "destructive"
      }),
      return false
    }


        title: "Authentication required",
        description: "You must be logged in to respond to interviews",

        variant: "destructive"


        description: "You must be logged in to respond to interviews",

        variant: "destructive";

      });
      return false;
    }
    setIsLoading(true);
    setError(null);
    setIsLoading(true);
    setError(null);

    setIsLoading(true),
    setError(null),


        description: "You must be logged in to respond to interviews",

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

    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')


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
        return false
      }

      // Get the interview to notify the client
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')


}
      // Create notification for client
      let notificationType = 'interview_confirmed';

    setIsLoading (true);
    set_error (null);
;

        console.error ("Error fetching interview:", fetch_error);
        set_error (fetch_error.message);
        return false;
      }


        .single(),

      if (fetchError) {

        console.error("Error fetching interview:", fetchError),
        setError(fetchError.message),
        return false;



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
>>>>>>> origin/cursor/delete-old-data-records-6bba

      }


<<<<<<< HEAD
      // Check if user is part of this interview
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {
        setError("You don't have permission to cancel this interview");
=======
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

      return false;
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


  // Helper function to create interview notifications

  const createInterviewNotification = async (
    userId: string,
    type: string,
    title: string,
    message: string,

    relatedId: string
  ) => {
    try {
      // Get the interview first to check permissions and get IDs for notifications
}
        .from('interviews')'
        .select('*')'
        .eq('id', interviewId)'
        .single();
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
        user_id: userId;
        type;
        title;
        message
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)

    }

      }
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

>>>>>>> origin/cursor/delete-old-data-records-6bba

        return false
      }

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {
        setError($2);

<<<<<<< HEAD
=======
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {

        setError("You don't have permission to cancel this interview");
        return false;
      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
        : interview.client_id;

        : interview && interview.client_id;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id

        : interview.client_id,

<<<<<<< HEAD
=======

      // Create notification for the other party
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId;
        'interview_cancelledInterview Cancelled';
        `The scheduled interview for ${interview && interview.scheduled_date} has been cancelled`;
        interviewId
      // Refresh the interviews list
      await fetchInterviews();
<<<<<<< HEAD
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

=======
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {"
      console.error ("Error in fetch_interviews:", err);"
    } catch (err: any) {'
      console.error ("Error in cancel_interview:", err);"
      set_error (err.message);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    interviews;
    is_loading;
    error;

    request_interview;

<<<<<<< HEAD
    fetch_interviews;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },;
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;


<<<<<<< HEAD

    fetchInterviews;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    respondToInterview;

    cancel_interview}

}

}
;

<<<<<<< HEAD




=======

    fetchInterviews;
    respondToInterview;

    cancelInterview}
>>>>>>> origin/cursor/delete-old-data-records-6bba
