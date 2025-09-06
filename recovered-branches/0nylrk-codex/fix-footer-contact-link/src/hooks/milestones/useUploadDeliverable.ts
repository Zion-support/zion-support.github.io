
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {useRecordActivity} from './useRecordActivity';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const useUploadDeliverable = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { useRecordActivity } from './useRecordActivity',
export const useUploadDeliverable = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null,

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null,
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      setIsSubmitting(true)
      // Get the current milestone
      const { data: milestone, error: fetchError } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .single();
      if (fetchError) throw fetchError;
      if (!milestone) throw new Error("Milestone not found");
      // For this example, instead of actually uploading files (which would require storage setup);
      // we'll just store the file metadata in the deliverables JSONB field
      const newDeliverable = {
        id: crypto.randomUUID();
        filename: file.name;
        size: file.size;
        type: file.type;
        added_at: new Date().toISOString()
        added_by: user.id
      }
      const deliverables = [...(milestone.deliverables |[]), newDeliverable];
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
        .eq('id', milestoneId);
      if (error) throw error;
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestone) throw new Error("Milestone not found"),
      
      // For this example, instead of actually uploading files (which would require storage setup),
      // we'll just store the file metadata in the deliverables JSONB field
      const newDeliverable = {
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_at: new Date().toISOString(),
        added_by: user.id
      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],
      
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
        .eq('id', milestoneId),
        
      if (error) throw error,
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Create activity record
      await recordMilestoneActivity(
        milestoneId
        'deliverable_added'
        milestone.status
        milestone.status
        `Deliverable added: ${file.name}`
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      );
      toast.success("Deliverable added successfully");
      return newDeliverable
    } catch (err: any) {
      console.error("Error uploading deliverable:", err);
      toast.error("Failed to upload deliverable: " + err.message)
      return null
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    uploadDeliverable;
    isSubmitting
  }
}

      ),
      
      toast.success("Deliverable added successfully"),
      
      return newDeliverable
    } catch (err: any) {
      console.error("Error uploading deliverable:", err),
      toast.error("Failed to upload deliverable: " + err.message),
      return null
    } finally {
      setIsSubmitting(false)
    }
  };
  
  return {
    uploadDeliverable;
    isSubmitting
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
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
      const { data: milestone, error: fetchError } = await supabase;
        .from('project_milestones');
        .select('*');
        .eq('id', milestoneId);
        .single(),;
      if (fetchError) throw fetchError,;
      if (!milestone) throw new Error("Milestone not found"),;
      // For this example, instead of actually uploading files (which would require storage setup),;
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
      const { error } = await supabase;
        .from('project_milestones');
        .update({ deliverables });
        .eq('id', milestoneId),;
      if (error) throw error,;
      // Create activity record;
      await recordMilestoneActivity(;
        milestoneId,;
        'deliverable_added',;
        milestone.status,;
        milestone.status,;
        `Deliverable added: ${file.name}`;
      ),;
      toast.success("Deliverable added successfully"),;
      return newDeliverable;
    } catch (err: any) {;
      console.error("Error uploading deliverable:", err),;
      toast.error("Failed to upload deliverable: " + err.message),;
      return null;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    uploadDeliverable;
    isSubmitting;
<<<<<<< HEAD
<<<<<<< HEAD

  }
};

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
        id: crypto && crypto.randomUUID();
        filename: file && file.name;
        size: file && file.size;
        type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id
      };
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
      

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
        .eq('id', milestoneId);
      if (error) throw error;
=======

        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestone) throw new Error("Milestone not found"),
      
      // For this example, instead of actually uploading files (which would require storage setup),
      // we'll just store the file metadata in the deliverables JSONB field
      const newDeliverable = {
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_at: new Date().toISOString(),
        added_by: user.id
      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],
      
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
        .eq('id', milestoneId),
        
      if (error) throw error,
      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Create activity record
      await recordMilestoneActivity(
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
        milestoneId, 
        'deliverable_added', 
        milestone && milestone.status, 
        milestone && milestone.status, 
        `Deliverable added: ${file && file.name}`
      );
      toast && toast.success("Deliverable added successfully");
      return newDeliverable
    } catch (err: any) {
      console && console.error("Error uploading deliverable:", err);
      toast && toast.error("Failed to upload deliverable: " + err && err.message),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
      return null
export const useUploadDeliverable = () =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
  const upload_deliverable = async (milestone_id: string, project_id: string, file: File) => {
    // Check condition
if (return null) {
  $2
}
    try {
      setIsSubmitting (true),
      // Get the current milestone;
      const { data: milestone, error: fetch_error } = await supabase;
        .from ('project_milestones');
        .select ('*');
        .eq ('id', milestone_id);
        .single ();
;
      // Check condition
if (throw fetch_error) {
  $2
}
      if (throw new Error ("Milestone not found")) {
  $2
}
      // For this example, instead of actually uploading files (which would require storage setup);
      // we'll just store the file metadata in the deliverables JSONB field;
      const new_deliverable = {
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts

=======

      ),
      
      toast.success("Deliverable added successfully"),
      
      return newDeliverable
    } catch (err: any) {
      console.error("Error uploading deliverable:", err),
      toast.error("Failed to upload deliverable: " + err.message),
      return null
    } finally {
      setIsSubmitting(false)


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
  }
;
  return {
    upload_deliverable;
    is_submitting;
  }
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUploadDeliverable.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
