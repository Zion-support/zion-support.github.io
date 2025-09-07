

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume, ResumeBasicInfo  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useResumeActions() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume, ResumeBasicInfo} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() {;


  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
</string>
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
  const [error, setError] = useState<string | null>(null),;
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {;
  const [error, set_error] = useState < string | null>(null);
;
  const create_resume = async (basic_info: ResumeBasicInfo): Promise < string | null> => {
    // Check condition;
if ( {) {
  $2;
}
      set_error ('You must be logged in to create a resume'),
      return null;
    setIsLoading (true);
    set_error (null);
    try {
  // TODO: Implement
      const { data, error } = await supabase;
        .from ('talent_resumes');
        .insert ({
          user_id: user.id;,
  title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;)
        });
        .select ('id');
        .single ();
      // Check condition;
if (throw error) {
      showSuccessToast ("Resume created", "Your resume has been created successfully");"
      return data.id;
    } catch (e: any) {"
      return handleResumeError (e, 'Could not create resume') ? null : null;
    } finally {
  // TODO: Implement
      setIsLoading (false);


          user_id: user.id,
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary;
        })
        .select('id')
        .single(),
      
      if (error) throw error,
      
      showSuccessToast("Resume created", "Your resume has been created successfully"),"
      return handleResumeError(e, 'Could not create resume') ? null : null;
  // TODO: Implement
      setIsLoading(false)


    setIsLoading(true),;
    setError(null),;
    try {;
        .from('talent_resumes');
        .insert({;
          user_id: user.id,;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;)
        .select('id');
        .single(),;
      if (error) throw error,;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;"
    } catch (e: any) {;"
    } finally {;
      setIsLoading(false);
  },;
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {;
</boolean>
  const updateBasicInfo = async (resume_id: string, basic_info: ResumeBasicInfo): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to update a resume'),
      return false;
  // TODO: Implement
      const { error } = await supabase;
        .update ({
          title: basic_info.title;,
        .eq ('id', resume_id);
        .eq ('user_id', user.id);
      // Check condition;
      return showSuccessToast ("Resume updated", "Your resume information has been updated");"
      return handleResumeError (e, 'Could not update resume');
  // TODO: Implement


    setIsLoading(true);
    setError(null);


        .update({;
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      return showSuccessToast("Resume updated", "Your resume information has been updated");"
      return handleResumeError(e, 'Could not update resume');
  const setActiveResume = async (resumeId: string): Promise<boolean> => {;
  const setActiveResume = async (resume_id: string): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to set active resume'),
  // TODO: Implement
      // First, set all user's resumes to inactive;
      const { error: reset_error } = await supabase;
        .update ({ is_active: false });
      // Check condition;
if (throw reset_error) {
      // Then, set the selected resume as active;
        .update ({ is_active: true });
      // Check condition;
      return showSuccessToast ("Active resume set", "Your selected resume is now marked as active");"
      return handleResumeError (e, 'Could not set active resume');
  // TODO: Implement


  return {
  // TODO: Implement
    is_loading;
    error;
    create_resume;
    updateBasicInfo;
    setActiveResume}
    createResume;



  // TODO: Implement
    isLoading;
      // First, set all user's resumes to inactive;
      const { error: resetError } = await supabase;
        .update({ is_active: false });
      if (resetError) throw resetError,;
      // Then, set the selected resume as active;
        .update({ is_active: true });
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active");"
      return handleResumeError(e, 'Could not set active resume');
  return {;
    isLoading,;
    error,;



import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume, ResumeBasicInfo } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const createResume = async (basicInfo:ResumeBasicInfo):Promise<string | null> => {;
  const updateBasicInfo = async (resumeId:string, basicInfo:ResumeBasicInfo):Promise<boolean> => {;
  const setActiveResume = async (resumeId:string):Promise<boolean> => {;
const setActiveResume = async (resumeId: string) : Promise<boolean> => {