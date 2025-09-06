

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {useRecordActivity} from './useRecordActivity';
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {useRecordActivity} from './useRecordActivity';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const useUploadDeliverable = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user |!projectId) return null;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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



import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';'
import {toast} from 'sonner';'
import {useRecordActivity} from './useRecordActivity';



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export const useUploadDeliverable = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'
import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
import { toast } from 'sonner','
import { useRecordActivity } from './useRecordActivity',
export const useUploadDeliverable = () => {}
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),

  
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {}
    if (!user || !projectId) return null,
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

      // Create activity record
      await recordMilestoneActivity(
        milestoneId
        'deliverable_added'
        milestone.status
        milestone.status
        `Deliverable added: ${file.name}`

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

  }
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        id: crypto && crypto.randomUUID();
        filename: file && file.name;
        size: file && file.size;
        type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id
      };
      
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];
      
<<<<<<< HEAD
<<<<<<< HEAD
=======



    try {};
      setIsSubmitting(true);
      // Get the current milestone;
      const { data: milestone, error: fetchError } = await supabase'
        .from('project_milestones')'
        .select('*')'
        .eq('id', milestoneId)

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      const { error } = await supabase'
        .from('project_milestones')
        .update({ deliverables })'
        .eq('id', milestoneId);
      if (error) throw error;

        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestone) throw new Error("Milestone not found"),
      
      // For this example, instead of actually uploading files (which would require storage setup),'
      // we'll just store the file metadata in the deliverables JSONB field;
      const newDeliverable = {}
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_at: new Date().toISOString(),
        added_by: user.id;
      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],
      
      const { error } = await supabase'
        .from('project_milestones')
        .update({ deliverables })'
        .eq('id', milestoneId),
        
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Create activity record
      await recordMilestoneActivity(
        milestoneId
        'deliverable_added'
        milestone.status
        milestone.status
        `Deliverable added: ${file.name}`
      );
      toast.success("Deliverable added successfully");
      return newDeliverable
    } catch (err: any) {
      console.error("Error uploading deliverable:", err);
      toast.error("Failed to upload deliverable: " + err.message)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return null
export const useUploadDeliverable = () =>: any {
=======

      return null;
export const useUploadDeliverable = () =>: any {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  const upload_deliverable = async (milestone_id: string, project_id: string, file: File) => {}
    // Check condition;
if (return null) {}
  $2;
}
    try {}
      setIsSubmitting (true),
      // Get the current milestone;
      const { data: milestone, error: fetch_error } = await supabase;'
        .from ('project_milestones');'
        .select ('*');'
        .eq ('id', milestone_id);
        .single ();
;
      // Check condition;
if (throw fetch_error) {}
  $2;
}"
      if (throw new Error ("Milestone not found")) {}
  $2;
}
      // For this example, instead of actually uploading files (which would require storage setup);'
      // we'll just store the file metadata in the deliverables JSONB field;
      const new_deliverable = {}
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
      const { error } = await supabase;'
        .from ('project_milestones');
        .update ({ deliverables });'
        .eq ('id', milestone_id);
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Create activity record;
      await recordMilestoneActivity (
        milestone_id,'
        'deliverable_added',
        milestone.status,
        milestone.status,`
        `Deliverable added: ${file.name}`);
;"
      toast.success ("Deliverable added successfully");
;
      return new_deliverable;
    } catch (err: any) {"
      console.error ("Error uploading deliverable:", err);"
      toast.error ("Failed to upload deliverable: " + err.message),
      return null;

    } finally {}
      setIsSubmitting (false);
    }


      ),
      "
      toast.success("Deliverable added successfully"),
      
      return newDeliverable;
    } catch (err: any) {"
      console.error("Error uploading deliverable:", err),"
      toast.error("Failed to upload deliverable: " + err.message),
      return null;
    } finally {}
      setIsSubmitting(false)
<<<<<<< HEAD
    }
  };
  
=======


  }
;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return {
=======
  return {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    upload_deliverable;
    is_submitting;
  }
}
;

<<<<<<< HEAD
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
<<<<<<< HEAD
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      // Create activity record
      await recordMilestoneActivity(
      return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // Create activity record
      await recordMilestoneActivity(
      return null
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  }
};

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
