

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useWorkExperience() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;


  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
</string>
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
</boolean>
  const [error, setError] = useState<string | null>(null),;
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {;
  const [error, set_error] = useState < string | null>(null);
;
  const addWorkExperience = async (resume_id: string, work: WorkExperience): Promise < boolean> => {
    // Check condition;
if ( {) {
  $2;
}
      set_error ('You must be logged in to update work experience'),
      return false;
    setIsLoading (true);
    set_error (null);
    try {
  // TODO: Implement
      const { error } = await supabase;
        .from ('work_history');
        .insert ({
          resume_id: resume_id;,
  company_name: work.company_name;
          role_title: work.role_title;,)
  start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);,
  is_current: work.is_current;
          description: work.description;,
  company_name: work && work.company_name;
          role_title: work && work.role_title;,
  start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);,
  is_current: work && work.is_current;
          description: work && work.description;,
  company_logo_url: work && work.company_logo_url,
          location: work && work.location;
        });
      if (error) throw error;

          resume_id: resumeId,
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location;
        }),
      
      if (error) throw error,
      

      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")"
      // Check condition;
if (throw error) {
}"
      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");"
    } catch (e: any) {"
      return handleResumeError (e, 'Could not add work experience');
    } finally {
  // TODO: Implement
      setIsLoading(false)


      return handleResumeError(e, 'Could not add work experience')
  // TODO: Implement
    setIsLoading(true);
    setError(null);


    setIsLoading(true),;
    setError(null),;
    try {;
        .from('work_history');
        .insert({;
          resume_id: resumeId,;
          company_name: work.company_name,;
          role_title: work.role_title,;)
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
          is_current: work.is_current,;
          description: work.description,;
          company_logo_url: work.company_logo_url,;
        }),;
      if (error) throw error,;
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume");"
    } catch (e: any) {;"
      return handleResumeError(e, 'Could not add work experience');
    } finally {;
      setIsLoading(false);
  },;
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {;
  const updateWorkExperience = async (work_id: string, work: WorkExperience): Promise < boolean> => {
    // Check condition;
  // TODO: Implement
        .update ({

          company_name: work.company_name;,
  role_title: work.role_title;)
          start_date: formatDateForDB (work.start_date);,
  end_date: work.is_current ? null: formatDateForDB (work.end_date);,
        })
        .eq('id', workId);
        .eq('id', workId),
      

      return showSuccessToast("Work experience updated", "Your work experience has been updated")"
        });"
        .eq ('id', work_id);
      // Check condition;
      return showSuccessToast ("Work experience updated", "Your work experience has been updated");"
      return handleResumeError (e, 'Could not update work experience');
  // TODO: Implement


      return handleResumeError(e, 'Could not update work experience')
  // TODO: Implement


        .update({;
        .eq('id', workId),;
      return showSuccessToast("Work experience updated", "Your work experience has been updated");"
      return handleResumeError(e, 'Could not update work experience');
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {;
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to delete work experience'),
      setIsLoading (false);
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete work experience');
  // TODO: Implement
  return {
  // TODO: Implement
    is_loading;
    error;
    addWorkExperience;
    updateWorkExperience;



        .delete();
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");"
      return handleResumeError(e, 'Could not delete work experience');
  return {;
    isLoading,;
    error,;
    deleteWorkExperience;


