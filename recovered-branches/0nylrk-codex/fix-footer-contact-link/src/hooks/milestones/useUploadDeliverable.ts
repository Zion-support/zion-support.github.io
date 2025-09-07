

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {useRecordActivity} from './useRecordActivity';
export const useUploadDeliverable = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();

import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { useRecordActivity } from './useRecordActivity',
export const useUploadDeliverable = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),

  
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null,
    
    try {
  // TODO: Implement
}
      setIsSubmitting(true)
      // Get the current milestone;
      const { data: milestone, error: fetchError } = await supabase;
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
        id: crypto && crypto.randomUUID();,
  filename: file && file.name;
        size: file && file.size;,
  type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id;
      };
      
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];
      

      const { error } = await supabase;
        .update({ deliverables })
        .eq('id', milestoneId);
      if (error) throw error;
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestone) throw new Error("Milestone not found"),"
      // For this example, instead of actually uploading files (which would require storage setup),"
      // we'll just store the file metadata in the deliverables JSONB field;
      const newDeliverable = {
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_by: user.id;
      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],
      
        .eq('id', milestoneId),
      if (error) throw error,
      
      return null;
export const useUploadDeliverable = () =>: any {
  // TODO: Implement
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
  const upload_deliverable = async (milestone_id: string, project_id: string, file: File) => {
    // Check condition;
if (return null) {
  $2;
    } finally {
  // TODO: Implement
      setIsSubmitting (false);
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { useRecordActivity } from './useRecordActivity',;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {;
    if (!user || !projectId) return null,;
    try {;
      setIsSubmitting(true),;
      // Get the current milestone;
        .from('project_milestones');
        .select('*');
        .single(),;
      if (fetchError) throw fetchError,;
      if (!milestone) throw new Error("Milestone not found"),;"
      // For this example, instead of actually uploading files (which would require storage setup),;"
      // we'll just store the file metadata in the deliverables JSONB field;
      const newDeliverable = {;
        id: crypto.randomUUID(),;
        filename: file.name,;
        size: file.size,;
        type: file.type,;
        added_at: new Date().toISOString(),;
      },;
      const deliverables = [...(milestone.deliverables || []), newDeliverable],;
        .update({ deliverables });
        .eq('id', milestoneId),;
      if (error) throw error,;
      // Create activity record;
      await recordMilestoneActivity(;
        milestoneId,;
        'deliverable_added',;
        milestone.status,;
        `Deliverable added: ${file.name}`;)
      ),;
      toast.success("Deliverable added successfully"),;"
      return newDeliverable;
    } catch (err: any) {;"
      console.error("Error uploading deliverable:", err),;""
      toast.error("Failed to upload deliverable: " + err.message),;"
    } finally {;
      setIsSubmitting(false);
  return {;
    uploadDeliverable;
    isSubmitting;
      const { error } = await supabase;"

      
      // For this example, instead of actually uploading files (which would require storage setup),"
      // we'll just store the file metadata in the deliverables JSONB field;
      
      
      

      // Create activity record;
      await recordMilestoneActivity(

        milestoneId, 
        'deliverable_added',
        milestone && milestone.status, 
        milestone && milestone.status, `;
        `Deliverable added: ${file && file.name}`)
      );
      
      toast && toast.success("Deliverable added successfully");"
    } catch (err: any) {"
      console && console.error("Error uploading deliverable:", err);""
      toast && toast.error("Failed to upload deliverable: " + err && err.message),"
  // TODO: Implement
    // Check condition;
  // TODO: Implement
      setIsSubmitting (true),
      // Get the current milestone;
      const { data: milestone, error: fetch_error } = await supabase;"
        .from ('project_milestones');
        .select ('*');
        .eq ('id', milestone_id);
        .single ();
      // Check condition;
if (throw fetch_error) {
      if (throw new Error ("Milestone not found")) {"
      // For this example, instead of actually uploading files (which would require storage setup);"
      // we'll just store the file metadata in the deliverables JSONB field;
      const new_deliverable = {
        id: crypto.randomUUID ();,
  filename: file.name;
        size: file.size;,
  type: file.type;
        added_at: new Date ().toISOString (),
      const deliverables = [...(milestone.deliverables || []), new_deliverable];
        .update ({ deliverables });
      // Check condition;
if (throw error) {
      // Create activity record;
      await recordMilestoneActivity (
        milestone_id,
        milestone.status,
        milestone.status,)`;
        `Deliverable added: ${file.name}`);
      toast.success ("Deliverable added successfully");"
      return new_deliverable;
      console.error ("Error uploading deliverable:", err);""
      toast.error ("Failed to upload deliverable: " + err.message),"
  // TODO: Implement

      ),
      "
      toast.success("Deliverable added successfully"),"
      console.error("Error uploading deliverable:", err),""
      toast.error("Failed to upload deliverable: " + err.message),"
  // TODO: Implement
      setIsSubmitting(false)


  return {
  // TODO: Implement
    upload_deliverable;
    is_submitting;
  const uploadDeliverable = async (milestoneId:string, projectId:string, file:File) => {;
      // Get the current milestone;
      const { data:milestone, error:fetchError } = await supabase;
      // For this example, instead of actually uploading files (which would require storage setup),;"
      // we'll just store the file metadata in the deliverables JSONB field;
        id:crypto.randomUUID(),;
        filename:file.name,;
        size:file.size,;
        type:file.type,;
        added_at:new Date().toISOString(),;
        added_by:user.id;
      // Create activity record;
        milestoneId, ;
        'deliverable_added', ;
        milestone.status, ;
        milestone.status, ;`;
        `Deliverable added:${file.name}`;)
      return newDeliverable,;
    } catch (err:any) {;"
      toast.error("Failed to upload deliverable:" + err.message),;"
      setIsSubmitting(false),;
    uploadDeliverable,;
},; try {
  // TODO: Implement
  setIsSubmitting (true);
//Get the current milestone const {
  // TODO: Implement
  data: milestone, error: fetchError;"
}= await supabase .from ('project milestones') .select ('*') .eq ('id', milestoneId) .single ();
//For this example, instead of actually uploading files (which would require storage setup);
//we'll just store the file metadata in the deliverables JSONB field const {
  // TODO: Implement
  error;
}= await supabase .from ('project milestones') if (error) throw error;
// Create activity record await recordMilestoneActivity (milestoneId;
deliverable added';
milestone.status;
}finally {
  // TODO: Implement
})
  setIsSubmitting (false) 
  // TODO: Implement
`;