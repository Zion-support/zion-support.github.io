
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


  const { user } = useAuth();
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = useAuth();
import { useState } from 'react',
import { useAuth } from "@/hooks/useAuth",
import { supabase } from '@/integrations/supabase/client',
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview',
<<<<<<< HEAD
=======
'
import {useState} from 'react';"
import {useAuth} from "@/hooks/useAuth";'
import {supabase} from '@/integrations/supabase/client';'
import {Interview, InterviewRequest, InterviewResponse} from '@/types/interview';'
import {toast} from '@/components/ui/use-toast';
export function useInterviews() { return null; }
  const { user } = useAuth();'
import { useState } from 'react',"
import { useAuth } from "@/hooks/useAuth",'
import { supabase } from '@/integrations/supabase/client','
import { Interview, InterviewRequest, InterviewResponse } from '@/types/interview','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Request an interview as a client

  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!user) {
      toast({
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        title: "Authentication required";
        description: "You must be logged in to request interviews"
        title: "Authentication required",
        description: "You must be logged in to request interviews",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        variant: "destructive"
      }),
      return null
    }
<<<<<<< HEAD

      });
      return null;
    }
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        title: "Authentication required",
        description: "You must be logged in to request interviews",


        variant: "destructive"
<<<<<<< HEAD
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
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsLoading(true);
    setError(null);




    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    try {}
      // Insert the interview into the database;
      const { data, error: insertError } = await supabase'
        .from('interviews')
<<<<<<< HEAD
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      if (insertError) {
=======


      if (insertError) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        console && console.error("Error requesting interview:", insertError);
        setError(insertError && insertError.message);

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        interviewRequest.talent_id,
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id
<<<<<<< HEAD
=======
=======

      ),



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
<<<<<<< HEAD
      return null
=======
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return null;
      }
      // Create notification for talent;
      await createInterviewNotification(

<<<<<<< HEAD
=======
      setIsLoading(false)


=======
=======
      setIsLoading(false)


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      );
=======
        interviewRequest.talent_id,'
        'interview_requestNew Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      ),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
      return data
    } catch (err: any) {
      console.error("Error in requestInterview:", err),
      setError(err.message),
      return null
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======




      return data;
    } catch (err: any) {"
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);

    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading(false)
    setIsLoading(true);
    setError(null);


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from 'react',;
=======
=======

  // Request an interview as a client

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

    setIsLoading(true),
    setError(null),



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
      if (insertError) {
        console.error("Error requesting interview:", insertError),
        setError(insertError.message),
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

      ),



      return data
    } catch (err: any) {
      console && console.error("Error in requestInterview:", err);
      setError(err && err.message);
<<<<<<< HEAD
      return null    } finally {import { useState } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
      return null    } finally {import { useState } from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      return null
    } finally {

      setIsLoading(false)
    setIsLoading(true);
    setError(null);


import { useState } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Authentication required",,
  description: "You must be logged in to request interviews",;
=======
      toast({;"
        title: "Authentication required",;"
        description: "You must be logged in to request interviews",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Authentication required",;
        description: "You must be logged in to request interviews",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      }),;
      return null;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    setIsLoading (true);
=======
    setIsLoading(true),
    setError(null),

      setIsLoading (false);
    }
  }    setIsLoading (true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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


      setIsLoading (false);
    }
  }

    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      // Get interviews where the user is either the client or the talent;
      const { data, error: fetch_error } = await supabase;'
        .from ('interviews');`
        .select (`;
          *;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
        .order('scheduled_date', { ascending: true }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
      // Transform the data to match Interview type
<<<<<<< HEAD
=======
      // Transform the data to match Interview type
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD

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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
<<<<<<< HEAD
      setInterviews(formattedInterviews);
      const formattedInterviews = data.map((interview: any): Interview => ({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
      setInterviews(formattedInterviews);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      const formattedInterviews = data && data.map((interview: any): Interview => ({}
        id: interview && interview.id;
        client_id: interview && interview.client_id;
        talent_id: interview && interview.talent_id;
        scheduled_date: interview && interview.scheduled_date;'
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
      const formattedInterviews = data.map((interview: any): Interview => ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return formattedInterviews
    } catch (err: any) {
=======
      return formattedInterviews;
    } catch (err: any) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
      return formattedInterviews
    } catch (err: any) {
      console.error("Error in fetchInterviews:", err),
      setError(err.message),
      return []
    } finally {
      setIsLoading(false)
    }

<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!user?.id) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      toast({
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        title: "Authentication required";
        description: "You must be logged in to respond to interviews"
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        variant: "destructive"
      }),
      return false
    }
<<<<<<< HEAD

      });
      return false;
    }
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",


        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        description: "You must be logged in to respond to interviews",
=======

  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse;
  ): Promise<boolean> => {}
    if (!user?.id) {}
      toast({}
"
        title: "Authentication required","
        description: "You must be logged in to respond to interviews",

"
        variant: "destructive"
"
        description: "You must be logged in to respond to interviews","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive";

      });
      return false;
    }


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setIsLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      toast({        title: "Authentication required",
=======
      toast({


        title: "Authentication required",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        description: "You must be logged in to respond to interviews",


        variant: "destructive"
        description: "You must be logged in to respond to interviews",
        variant: "destructive";
      });
      return false;
    }



    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      toast({        title: "Authentication required",
        description: "You must be logged in to respond to interviews",

        variant: "destructive"
    setIsLoading(true),
    setError(null),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .update({
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
          status: response && response.status,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



    try {}
      // Update the interview status;
      const { error: updateError } = await supabase'
        .from('interviews')
        .update({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          updated_at: new Date().toISOString()
        })

'
=======
        .update({

          status: response && response.status,

          updated_at: new Date().toISOString()
        })


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq('id', interviewId),



<<<<<<< HEAD
      if (updateError) {"
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);
<<<<<<< HEAD
<<<<<<< HEAD
=======
          status: response.status
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);
        .eq('id', interviewId),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      if (updateError) {"
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);

        return false;
      }
<<<<<<< HEAD
=======
        .update({      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .update({      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      if (updateError) {
        console && console.error("Error responding to interview:", updateError);
        setError(updateError && updateError.message);
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
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('id', interviewId)
<<<<<<< HEAD
        .single();
      if (fetchError) {
        console.error("Error fetching interview:", fetchError);
        setError(fetchError.message);
        return false
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Get the interview to notify the client;
      const { data: interview, error: fetchError } = await supabase'
        .from('interviews')'
        .select('*')'
        .eq('id', interviewId)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
        .eq('id', interviewId)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        console.error ("Error fetching interview:", fetch_error);
        set_error (fetch_error.message);
        return false;
      }
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        .single(),

      if (fetchError) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
        notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`
      } else if (response && response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
        console.error("Error fetching interview:", fetchError),
        setError(fetchError.message),
        return false
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Get interviews where the user is either the client or the talent;
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
        scheduled_date: interview.scheduled_date,;'
=======
        scheduled_date: interview.scheduled_date,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    } catch (err: any) {;"
=======
    } catch (err: any) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      toast({;"
        title: "Authentication required",;"
        description: "You must be logged in to respond to interviews",;"
=======
      toast({;
        title: "Authentication required",;
        description: "You must be logged in to respond to interviews",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      }),;
      return false;
    }
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Update the interview status;
<<<<<<< HEAD
      const { error: updateError } = await supabase;'
=======
      const { error: updateError } = await supabase;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .from('interviews');
        .update({;
          status: response.status,;
          updated_at: new Date().toISOString();
<<<<<<< HEAD
        });'
        .eq('id', interviewId),;
      if (updateError) {;"
=======
        });
        .eq('id', interviewId),;
      if (updateError) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        console.error("Error responding to interview:", updateError),;
        setError(updateError.message),;
        return false;
      }
;
      // Get the interview to notify the client;
<<<<<<< HEAD
      const { data: interview, error: fetchError } = await supabase;'
        .from('interviews');'
        .select('*');'
        .eq('id', interviewId);
        .single(),;
      if (fetchError) {;"
=======
      const { data: interview, error: fetchError } = await supabase;
        .from('interviews');
        .select('*');
        .eq('id', interviewId);
        .single(),;
      if (fetchError) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        console.error("Error fetching interview:", fetchError),;
        setError(fetchError.message),;
        return false;
      }
;
<<<<<<< HEAD
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      await createInterviewNotification(
        interview && interview.client_id;
        notificationType;
        title;
        message;
<<<<<<< HEAD
<<<<<<< HEAD
        interviewId
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Refresh the interviews list
=======
        interviewId;
      // Refresh the interviews list;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      await fetchInterviews();
      return true;
    } catch (err: any) {"
      console && console.error("Error in respondToInterview:", err);
      setError(err && err.message);
      return false;
;
<<<<<<< HEAD
=======
        .eq('id', interviewId);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
    } finally {
      setIsLoading (false);
    }
  }  const createInterviewNotification = async (
=======



    } finally {}
      setIsLoading (false);
    }
  }



  const createInterviewNotification = async (
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    } finally {
      setIsLoading (false);
    }
  }

;
  // Helper function to create interview notifications;

  const createInterviewNotification = async (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    user_id: string;
    type: string;
    title: string;
    message: string;
<<<<<<< HEAD
    related_id: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    try {
<<<<<<< HEAD
=======
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },


<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    relatedId: string
  ) => {
    try {
      await supabase.from('notifications').insert({
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        user_id: userId;
        type;
        title;
        message
        related_id: relatedId})
    } catch (error) {
      console.error("Error creating notification:", error)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
        return false;
<<<<<<< HEAD
<<<<<<< HEAD
      }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        return false;

      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




      }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Check if user is part of this interview
=======
        return false;      // Check if user is part of this interview
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        return false;      // Check if user is part of this interview
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
=======

      const notifyUserId = interview && interview.client_id === user && user.id;
        ? interview && interview.talent_id;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        : interview && interview.client_id;

<<<<<<< HEAD
<<<<<<< HEAD




<<<<<<< HEAD
=======
=======



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

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;


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
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      const notifyUserId = interview && interview.client_id === user && user.id
        ? interview && interview.talent_id
        : interview && interview.client_id;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
        interviewId
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Refresh the interviews list
=======
        interviewId;
      // Refresh the interviews list;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      await fetchInterviews();
      return true;
    } catch (err: any) {"
      console && console.error("Error in cancelInterview:", err);
      setError(err && err.message);
<<<<<<< HEAD
      return false
<<<<<<< HEAD
    } finally {
      setIsLoading(false)

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
      return false;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

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
    } catch (err: any) {
      console && console.error("Error in cancelInterview:", err);
      setError(err && err.message);
      return false
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        set_error (fetch_error.message);
        return false;
      }
      // Check if user is part of this interview;
<<<<<<< HEAD
      // Check condition;
if ( {) {}
  $2;
}'"
=======
      // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        set_error ("You don't have permission to cancel this interview");
        return false;
      }
      // Update the interview status;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
        notifyUserId;'
        'interview_cancelledInterview Cancelled';`
=======
        notifyUserId;
        'interview_cancelledInterview Cancelled';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`;
        interview_id);
;
      // Refresh the interviews list;
      await fetch_interviews ();
      return true;
<<<<<<< HEAD
    } catch (err: any) {"
      console.error ("Error in cancel_interview:", err);
      set_error (err.message);
      return false;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
=======
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading (false);
    }


<<<<<<< HEAD
=======
  }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return {
=======

  return {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    interviews;
    is_loading;
    error;
    request_interview;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    fetch_interviews;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  },;
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    fetch_interviews;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },;
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;

<<<<<<< HEAD



<<<<<<< HEAD
=======
    fetchInterviews;
    respondToInterview;

    cancel_interview}

}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    fetchInterviews;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

    fetchInterviews;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    respondToInterview;

    cancel_interview}

}
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

}
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    fetchInterviews;
    respondToInterview;

    cancelInterview}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    respondToInterview;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
