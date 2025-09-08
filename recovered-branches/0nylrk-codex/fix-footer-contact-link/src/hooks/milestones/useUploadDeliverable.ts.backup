
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {useRecordActivity} from './useRecordActivity';

export const useUploadDeliverable = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user |!projectId) return null;

<<<<<<< HEAD


=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {useRecordActivity} from './useRecordActivity';
export const useUploadDeliverable = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user |!projectId) return null;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export const useUploadDeliverable = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();

<<<<<<< HEAD

=======
'
import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
import { toast } from 'sonner','
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useRecordActivity } from './useRecordActivity',
export const useUploadDeliverable = () => {}

  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),

<<<<<<< HEAD




=======
  
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null,
    
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      setIsSubmitting(true)
      // Get the current milestone
      const { data: milestone, error: fetchError } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        id: crypto && crypto.randomUUID();
        filename: file && file.name;
        size: file && file.size;
        type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id
      };
      
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];

<<<<<<< HEAD


=======
      const { error } = await supabase'
        .from('project_milestones')
      const { error } = await supabase
      const { error } = await supabase'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .from('project_milestones')
        .update({ deliverables })'

        .eq('id', milestoneId);
      if (error) throw error;


<<<<<<< HEAD
=======
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestone) throw new Error("Milestone not found"),

        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_at: new Date().toISOString(),

      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],

        .eq('id', milestoneId),
        
      if (error) throw error,

>>>>>>> origin/cursor/delete-old-data-records-6bba
      return null
export const useUploadDeliverable = () =>: any {

  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
  const upload_deliverable = async (milestone_id: string, project_id: string, file: File) => {}
    // Check condition;
if (return null) {}
  $2;
}
    } finally {}
      setIsSubmitting (false);
    }'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
import { toast } from 'sonner',;'
import { useRecordActivity } from './useRecordActivity',;
export const useUploadDeliverable = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {;
    if (!user || !projectId) return null,;
    try {;
      setIsSubmitting(true),;
      // Get the current milestone;
      const { data: milestone, error: fetchError } = await supabase;'
        .from('project_milestones');'
        .select('*');'
        .eq('id', milestoneId);
        .single(),;
      if (fetchError) throw fetchError,;"
      if (!milestone) throw new Error("Milestone not found"),;
      // For this example, instead of actually uploading files (which would require storage setup),;'
      // we'll just store the file metadata in the deliverables JSONB field;
      const newDeliverable = {;
        id: crypto.randomUUID(),;
        filename: file.name,;
        size: file.size,;
        type: file.type,;
        added_at: new Date().toISOString(),;
        added_by: user.id;
      },;
      const deliverables = [...(milestone.deliverables || []), newDeliverable],;
      const { error } = await supabase;'
        .from('project_milestones');
        .update({ deliverables });'
        .eq('id', milestoneId),;
      if (error) throw error,;
      // Create activity record;
      await recordMilestoneActivity(;
        milestoneId,;'
        'deliverable_added',;
        milestone.status,;
        milestone.status,;
        `Deliverable added: ${file.name}`;
      ),;"
      toast.success("Deliverable added successfully"),;
      return newDeliverable;
    } catch (err: any) {;"
      console.error("Error uploading deliverable:", err),;"
      toast.error("Failed to upload deliverable: " + err.message),;
      return null;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    uploadDeliverable;
    isSubmitting;

        milestoneId, '
        'deliverable_added', 
        milestone && milestone.status, 
        milestone && milestone.status, `
        `Deliverable added: ${file && file.name}`
      );
      "
      toast && toast.success("Deliverable added successfully");
      
      return newDeliverable;
    } catch (err: any) {"
      console && console.error("Error uploading deliverable:", err);"
      toast && toast.error("Failed to upload deliverable: " + err && err.message),

      return null;
export const useUploadDeliverable = () =>: any {};

  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;

        id: crypto.randomUUID ();
        filename: file.name;
        size: file.size;
        type: file.type;
        added_at: new Date ().toISOString (),
        added_by: user.id;
      }
;
      const deliverables = [...(milestone.deliverables || []), new_deliverable];
;
<<<<<<< HEAD

      const { error } = await supabase;
        .from ('project_milestones');
        .update ({ deliverables });
        .eq ('id', milestone_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Create activity record;
      await recordMilestoneActivity (
        milestone_id,
        'deliverable_added',
        milestone.status,
        milestone.status,
        `Deliverable added: ${file.name}`);
;
      toast.success ("Deliverable added successfully");
;
      return new_deliverable;
    } catch (err: any) {
      console.error ("Error uploading deliverable:", err);
      toast.error ("Failed to upload deliverable: " + err.message),
      return null;
    } finally {
      setIsSubmitting (false);
    }


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
;

    upload_deliverable;
    is_submitting;
  }
}
;
<<<<<<< HEAD



=======


import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { useRecordActivity } from './useRecordActivity',;
;
export const useUploadDeliverable = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;
  ;
  const uploadDeliverable = async (milestoneId:string, projectId:string, file:File) => {;
    if (!user || !projectId) return null,;
    ;
    try {;
      setIsSubmitting(true),;
      ;
      // Get the current milestone;
      const { data:milestone, error:fetchError } = await supabase;
        .from('project_milestones');
        .select('*');
        .eq('id', milestoneId);
        .single(),;
      ;
      if (fetchError) throw fetchError,;
      if (!milestone) throw new Error("Milestone not found"),;
      ;
      // For this example, instead of actually uploading files (which would require storage setup),;
      // we'll just store the file metadata in the deliverables JSONB field;
      const newDeliverable = {;
        id:crypto.randomUUID(),;
        filename:file.name,;
        size:file.size,;
        type:file.type,;
        added_at:new Date().toISOString(),;
        added_by:user.id;
      },;
      ;
      const deliverables = [...(milestone.deliverables || []), newDeliverable],;
      ;
      const { error } = await supabase;
        .from('project_milestones');
        .update({ deliverables });
        .eq('id', milestoneId),;
        ;
      if (error) throw error,;
      ;
      // Create activity record;
      await recordMilestoneActivity(;
        milestoneId, ;
        'deliverable_added', ;
        milestone.status, ;
        milestone.status, ;
        `Deliverable added:${file.name}`;
      ),;
      ;
      toast.success("Deliverable added successfully"),;
      ;
      return newDeliverable,;
    } catch (err:any) {;
      console.error("Error uploading deliverable:", err),;
      toast.error("Failed to upload deliverable:" + err.message),;
      return null;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  return {;
    uploadDeliverable,;
    isSubmitting;


  },;
},; try {
  setIsSubmitting (true);
//Get the current milestone const {
  data: milestone, error: fetchError 
}= await supabase .from ('project milestones') .select ('*') .eq ('id', milestoneId) .single ();
//For this example, instead of actually uploading files (which would require storage setup);
//we'll just store the file metadata in the deliverables JSONB field const {
  error 
}= await supabase .from ('project milestones') if (error) throw error;
// Create activity record await recordMilestoneActivity (milestoneId;
'deliverable added';
milestone.status;
milestone.status;
}finally {
  setIsSubmitting (false) 
}
};
return {
  uploadDeliverable;
isSubmitting 
}
};
  }
};
  }

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
