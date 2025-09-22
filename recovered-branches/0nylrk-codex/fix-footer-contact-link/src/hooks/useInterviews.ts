
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState  } from 'react';
import { useAuth } from "@/hooks/useAuth";'
import { supabase  } from '@/integrations/supabase/client';'
import { Interview, InterviewRequest, InterviewResponse  } from '@/types/interview';'
import { toast  } from '@/components/ui/use-toast';
export function useInterviews() {};
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {useAuth} from "@/hooks/useAuth";
import {supabase} from '@/integrations/supabase/client';
import {Interview, InterviewRequest, InterviewResponse} from '@/types/interview';
import {toast} from '@/components/ui/use-toast';
export function useInterviews() {;
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
import { useState } from 'react',
import { useAuth } from "@/hooks/useAuth",
import { supabase } from '@/integrations/supabase/client',
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',

import { toast } from '@/components/ui/use-toast',
export function useInterviews() {}
=======
import { toast } from '@/components/ui/use-toast',
export function useInterviews() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [interviews, setInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth(),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
    }
    setIsLoading(true);
    setError(null);

    setIsLoading(true),
    setError(null),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    try {}
      // Insert the interview into the database;
      const { data, error: insertError } = await supabase'
        .from('interviews')
.insert({
<<<<<<< HEAD

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

          status: 'requested'})
        .select('*')
        .single();
=======
        .insert({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
return null
        return null;
      }
      // Create notification for talent;
      await createInterviewNotification(

      );
=======
        interviewRequest.talent_id,'
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      ),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

return data
    } catch (err: any) {
      console.error("Error in requestInterview:", err),
      setError(err.message),
      return null
    } finally {
      setIsLoading(false)

      setIsLoading(false)
    setIsLoading(true);
    setError(null);

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from 'react',;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
return null    } finally {import { useState } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return null    } finally {import { useState } from 'react',;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from '@/integrations/supabase/client',;
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;
=======
'
import { useState } from 'react',;"
import { useAuth } from "@/hooks/useAuth",;'
import { supabase } from '@/integrations/supabase/client',;'
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from '@/components/ui/use-toast',;
export function useInterviews() { return null; }
  const { user } = useAuth(),;
  // Request an interview as a client;
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {;
    if (!user) {;
toast({;
<<<<<<< HEAD
        title: "Authentication required",,
  description: "You must be logged in to request interviews",;
=======
        title: "Authentication required",,
  description: "You must be logged in to request interviews",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive";
      }),;
      return null;
    }

  // Fetch interviews for the current user (as client or talent);
const fetch_interviews = async (): Promise < Interview[]> => {}
    // Check condition;
if ( {) {}
  $2;
}
      set_interviews ([]);
      return [];
    }
<<<<<<< HEAD

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
    }
  },;
  // Fetch interviews for the current user (as client or talent);
  const fetchInterviews = async (): Promise<Interview[]> => {;
    if (!user?.id) {;
      setInterviews([]),;
      return [];
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

;
    setIsLoading(true),;
    setError(null),;
    try {;}
      // Insert the interview into the database;}
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    setIsLoading(true),
    setError(null),

      setIsLoading (false);
    }
  }    setIsLoading (true);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    setIsLoading(true),
    setError(null),

    setIsLoading (true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    set_error (null);
;
      setIsLoading (false);
    }
  }
    try {

=======
  // TODO: Implement
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Get interviews where the user is either the client or the talent;
      const { data, error: fetch_error } = await supabase;'
        .from ('interviews');`
        .select (`;
          *;
<<<<<<< HEAD
<<<<<<< HEAD
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)

'
        .order('scheduled_date', { ascending: true }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      if (fetchError) {
=======
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)      if (fetchError) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)      if (fetchError) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      if (fetchError) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)

        .order('scheduled_date', { ascending: true }),

      if (fetchError) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        console && console.error("Error fetching interviews:", fetchError);
        setError(fetchError && fetchError.message);
        return []
      }
<<<<<<< HEAD
<<<<<<< HEAD
      // Transform the data to match Interview type
<<<<<<< HEAD

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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      // Transform the data to match Interview type;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        id: interview.id;
=======
      // Transform the data to match Interview type        id: interview.id;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // Transform the data to match Interview type        id: interview.id;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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

      if (fetchError) {
        console.error("Error fetching interviews:", fetchError),
        setError(fetchError.message),
        return []
      }
      // Transform the data to match Interview type
      const formattedInterviews = data.map((interview: any): Interview => ({
        id: interview.id;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        client_id: interview.client_id;
        talent_id: interview.talent_id;
        scheduled_date: interview.scheduled_date;'
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
        client_avatar: interview.clients?.avatar_url;
        talent_avatar: interview.talents?.profile_picture_url}));
setInterviews(formattedInterviews);
      const formattedInterviews = data.map((interview: any): Interview => ({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
        id: interview.id,
        client_id: interview.client_id,
        talent_id: interview.talent_id,
        scheduled_date: interview.scheduled_date,'
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

      setInterviews(formattedInterviews);
      const formattedInterviews = data.map((interview: any): Interview => ({

setInterviews(formattedInterviews);
        id: interview.id,
        client_id: interview.client_id,
        talent_id: interview.talent_id,
        scheduled_date: interview.scheduled_date,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return formattedInterviews
    } catch (err: any) {
      console && console.error("Error in fetchInterviews:", err);
      setError(err && err.message);
      return []

;
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {"
      console.error ("Error in fetch_interviews:", err);
      set_error (err.message);
      return [];

    } finally {}
      setIsLoading (false);
    }

  const respondToInterview = async (
    interview_id: string;
    response: InterviewResponse): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
=======
      return formattedInterviews
    } catch (err: any) {
      console && console.error("Error in fetchInterviews:", err);
      setError(err && err.message);
      return []
;
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {
      console.error ("Error in fetch_interviews:", err);
      set_error (err.message);
      return [];
    } finally {
      setIsLoading (false);
    }

;
  // Respond to an interview request (as talent);

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title: "Authentication required";

  },

<<<<<<< HEAD
    } catch (err: any) {
      console.error("Error in fetchInterviews:", err),
      setError(err.message),
      return []
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
=======
  },

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  }
  },

  },
      setInterviews(formattedInterviews);
      const formattedInterviews = data.map((interview: any): Interview => ({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        variant: "destructive"
      }),
      return false
    }
});
      return false;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    setIsLoading(true),
    setError(null),

=======
      toast({        title: "Authentication required",
=======
      toast({

title: "Authentication required";
        description: "You must be logged in to respond to interviews"
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",
        variant: "destructive"
      }),
      return false
    }
        title: "Authentication required",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
<<<<<<< HEAD
        .update({
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          updated_at: new Date().toISOString()
        })

'
=======
        .update({

          status: response && response.status,

status: response && response.status,
          updated_at: new Date().toISOString()
        })

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq('id', interviewId),

if (updateError) {"
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);
<<<<<<< HEAD
<<<<<<< HEAD

      if (updateError) {"
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);

        return false;
      }

=======
        .update({      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
        .eq('id', interviewId),

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Get the interview to notify the client
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')
<<<<<<< HEAD
        .eq('id', interviewId)
<<<<<<< HEAD
        .single();
      if (fetchError) {
        console.error("Error fetching interview:", fetchError);
        setError(fetchError.message);
        return false
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

}
      // Create notification for client
      let notificationType = 'interview_confirmed';
    setIsLoading (true);
    set_error (null);
;
try {}
      // Update the interview status;
      const { error: update_error } = await supabase;'
        .from ('interviews');
        .update ({}
          status: response.status,
          updated_at: new Date ().toISOString ();
        });'
        .eq ('id', interview_id);
;
      // Check condition;
if ( {) {}
  $2;
}"
        console.error ("Error responding to interview:", update_error);
        set_error (update_error.message);
        return false;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
      // Get the interview to notify the client;
      const { data: interview, error: fetch_error } = await supabase;'
        .from ('interviews');'
        .select ('*');'
        .eq ('id', interview_id);
        .single ();
;
      // Check condition;
if ( {) {}
  $2;
}"
        console.error ("Error fetching interview:", fetch_error);
        set_error (fetch_error.message);
        return false;
      }
// Create notification for client;'
      let notification_type = 'interview_confirmed';

'
      let title = 'Interview Confirmed';
'
        notificationType = 'interview_declined';'
        title = 'Interview Declined';`
        message = `Your interview request has been declined`'
      } else if (response && response.status === 'rescheduled') {'
        notificationType = 'interview_rescheduled';'
        title = 'Interview Rescheduled';
<<<<<<< HEAD
<<<<<<< HEAD
        .single(),

      if (fetchError) {
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        console.error("Error fetching interview:", fetchError),
        setError(fetchError.message),
        return false;
=======
      // Create notification for client;
      let notification_type = 'interview_confirmed';

      let title = 'Interview Confirmed';

      let message = `Your interview request for ${interview && interview.scheduled_date} has been confirmed`;

      if (response && response.status === 'declined') {

      let title = 'Interview Confirmed';
let message = `Your interview request for ${interview && interview.scheduled_date} has been confirmed`;
      if (response && response.status === 'declined') {
      let title = 'Interview Confirmed';
        notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`
      } else if (response && response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Get interviews where the user is either the client or the talent;
const { data, error: fetchError } = await supabase;'
        .from('interviews');`
        .select(`;
          *,;
          clients:client_id(id, display_name, avatar_url),;
          talents:talent_id(id, full_name, profile_picture_url);`
        `);`
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`);'
        .order('scheduled_date', { ascending: true }),;
      if (fetchError) {;"
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
scheduled_date: interview.scheduled_date,;'
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
} catch (err: any) {;"
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
toast({;"
        title: "Authentication required",;"
        description: "You must be logged in to respond to interviews",;"
        variant: "destructive";
      }),;
      return false;
    }
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Update the interview status;
const { error: updateError } = await supabase;'
        .from('interviews');
        .update({;
          status: response.status,;
          updated_at: new Date().toISOString();
});'
        .eq('id', interviewId),;
      if (updateError) {;"
        console.error("Error responding to interview:", updateError),;
        setError(updateError.message),;
        return false;
      }
;
      // Get the interview to notify the client;
const { data: interview, error: fetchError } = await supabase;'
        .from('interviews');'
        .select('*');'
        .eq('id', interviewId);
        .single(),;
      if (fetchError) {;"
        console.error("Error fetching interview:", fetchError),;
        setError(fetchError.message),;
        return false;
      }
;
// Create notification for client;'
      let notificationType = 'interview_confirmed',;'
      let title = 'Interview Confirmed',;`
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`,;'
      if (response.status === 'declined') {;'
        notificationType = 'interview_declined',;'
        title = 'Interview Declined',;`
        message = `Your interview request has been declined`;'
      } else if (response.status === 'rescheduled') {;'
        notificationType = 'interview_rescheduled',;'
        title = 'Interview Rescheduled',;'`
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;
      }
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      await createInterviewNotification(
        interview && interview.client_id;
        notificationType;
        title;
        message;
interviewId
<<<<<<< HEAD
      // Refresh the interviews list
      await fetchInterviews();
      return true;
    } catch (err: any) {"
      console && console.error("Error in respondToInterview:", err);
      setError(err && err.message);
      return false;
;

=======
        .eq('id', interviewId);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        interviewId
      // Refresh the interviews list
      await fetchInterviews();
      return true
    } catch (err: any) {
      console && console.error("Error in respondToInterview:", err);
      setError(err && err.message);
      return false

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Check condition
if ( {) {
  $2
}
        notification_type = 'interview_declined';
        title = 'Interview Declined';
=======
      // Check condition;
if ( {) {}
  $2;
}'
        notification_type = 'interview_declined';'
        title = 'Interview Declined';`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
} finally {
      setIsLoading (false);
    }
  }  const createInterviewNotification = async (
    user_id: string;
    type: string;
    title: string;
    message: string;
related_id: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
    try {
<<<<<<< HEAD

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
<<<<<<< HEAD

  },

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Helper function to create interview notifications
=======
    related_id: string) => {}
    try {}
  // Helper function to create interview notifications;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  // Helper function to create interview notifications
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const createInterviewNotification = async (
    userId: string,
    type: string,
    title: string,
    message: string,
relatedId: string
  ) => {
    try {
      await supabase.from('notifications').insert({
<<<<<<< HEAD
        user_id: userId;
        type;
        title;
        message
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)
=======
    relatedId: string;
  ) => {}
    try {'
      await supabase.from('notifications').insert({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
=======
    try {    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    try {    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

user_id: userId;
        type;
        title;
        message
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  // Cancel an interview (either client or talent can cancel)
  const cancelInterview = async (interviewId: string): Promise<boolean> => {}
    if (!user?.id) return false;
    setIsLoading(true);
    setError(null)
    try {}
      // Get the interview first to check permissions and get IDs for notifications;
      const { data: interview, error: fetchError } = await supabase'
        .from('interviews')'
        .select('*')'
        .eq('id', interviewId)
        .single();
      if (fetchError) {}
        setError(fetchError.message);
        return false;
      }
        user_id: userId,
        type,
        title,
        message,
        related_id: relatedId})
    } catch (error) {"
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
    } catch (err: any) {;"
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
    try {;'
      await supabase.from('notifications').insert({;
        user_id: userId,;
        type,;
        title,;
        message,;
        related_id: relatedId});
    } catch (error) {;"
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
      const { data: interview, error: fetchError } = await supabase;'
        .from('interviews');'
        .select('*');'
        .eq('id', interviewId);
        .single(),;
      if (fetchError) {;
        setError(fetchError.message),;
<<<<<<< HEAD
        return false;
<<<<<<< HEAD
<<<<<<< HEAD
      }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      }
=======
        return false;

      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Check if user is part of this interview
=======
      // Check if user is part of this interview
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {
=======

      // Check if user is part of this interview;
      if (interview && interview.client_id !== user && user.id && interview && interview.talent_id !== user && user.id) {'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setError("You don't have permission to cancel this interview");
        return false;
      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
        : interview.client_id;

const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;

<<<<<<< HEAD
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

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;

}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
=======

      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        : interview.client_id,
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Create notification for the other party
=======

      // Create notification for the other party;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      await createInterviewNotification(
        notifyUserId;'
        'interview_cancelledInterview Cancelled';`
        `The scheduled interview for ${interview && interview.scheduled_date} has been cancelled`;
interviewId
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Refresh the interviews list
      await fetchInterviews();
      return true;
    } catch (err: any) {"
      console && console.error("Error in cancelInterview:", err);
      setError(err && err.message);
return false
} finally {
      setIsLoading(false)

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
      set_interviews (formatted_interviews);
      return formatted_interviews;
    } catch (err: any) {"
      console.error ("Error in fetch_interviews:", err);"
    } catch (err: any) {'
      console.error ("Error in cancel_interview:", err);"
      set_error (err.message);
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
;
      // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        set_error (fetch_error.message);
        return false;
      // Check if user is part of this interview;
// Check condition;
if ( {) {}
  $2;
}'"
        set_error ("You don't have permission to cancel this interview");
        return false;
      }
      // Update the interview status;
const { error: update_error } = await supabase;'
        .from ('interviews');
        .update ({'
          status: 'cancelled',
          updated_at: new Date ().toISOString ();
        });'
        .eq ('id', interview_id);
;
      // Check condition;
if ( {) {}
  $2;
        .update ({
          status: 'cancelled',')
          updated_at: new Date ().toISOString ();
        });
.eq ('id', interview_id);
;
      // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        set_error (update_error.message);
      // Determine who to notify;
      const notifyUserId = interview.client_id === user.id;
        ? interview.talent_id;
        : interview.client_id;
      // Create notification for the other party;
      await createInterviewNotification (
notifyUserId;'
        'interview_cancelledInterview Cancelled';`
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`;
        interview_id);
      // Refresh the interviews list;
      await fetch_interviews ();
      return true;
} catch (err: any) {"
      console.error ("Error in cancel_interview:", err);
      set_error (err.message);
      return false;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
      setIsLoading (false);
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    } catch (err: any) {
      console.error ("Error in cancel_interview:", err);
      set_error (err.message);
      return false;
    } finally {
      setIsLoading (false);
    }
      console.error ("Error in cancel_interview:", err);"
  // TODO: Implement

}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return {
=======
  return {
  // TODO: Implement
pr-12325
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    interviews;
    is_loading;
    error;

    request_interview;
<<<<<<< HEAD
    fetch_interviews;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    fetch_interviews;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
},;
    fetch_interviews;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  },;
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    fetchInterviews;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    respondToInterview;

    cancel_interview}

}

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    fetchInterviews;
    respondToInterview;

    cancelInterview}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    fetch_interviews;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    fetch_interviews;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
}
;
    respondToInterview;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
