<<<<<<< HEAD
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

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { useRecordActivity } from './useRecordActivity';
export const useUploadDeliverable = () => {
  const { user } = useAuth($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { recordMilestoneActivity } = useRecordActivity($2);
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null,
    
    try {
      setIsSubmitting($2);
      // Get the current milestone
      const { data: milestone, error: fetchError} = await supabase
=======

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const useUploadDeliverable = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
'
import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
import { toast } from 'sonner','
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useRecordActivity } from './useRecordActivity',
export const useUploadDeliverable = () => {}

  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null,
    
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {
      setIsSubmitting(true)
      // Get the current milestone
      const { data: milestone, error: fetchError } = await supabase
<<<<<<< HEAD
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)

        id: crypto && crypto.randomUUID();
        filename: file && file.name;
        size: file && file.size;
        type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id
      };
      
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];

      const { error } = await supabase'
        .from('project_milestones')
=======
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
<<<<<<< HEAD
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
=======

        id: crypto && crypto.randomUUID();
        filename: file && file.name;
        size: file && file.size;
        type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id
      };
      
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];

<<<<<<< HEAD
      const { error } = await supabase'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const { error } = await supabase
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
        .from('project_milestones')
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        .update({ deliverables })'

        .eq('id', milestoneId);
      if (error) throw error;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestone) throw new Error("Milestone not found"),
<<<<<<< HEAD

=======
      
      // For this example, instead of actually uploading files (which would require storage setup),
      // we'll just store the file metadata in the deliverables JSONB field
      const newDeliverable = {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_at: new Date().toISOString(),
<<<<<<< HEAD

      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],

        .eq('id', milestoneId),
        
      if (error) throw error,

=======
        added_by: user.id
      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],
      
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
<<<<<<< HEAD
        .eq($2);
=======
        .eq('id', milestoneId),
        
>>>>>>> merged-prs-20250907-203621
      if (error) throw error,
      
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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

  }
=======
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
        id: crypto && crypto.randomUUID();
        filename: file && file.name;
        size: file && file.size;
        type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id
      };
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
        .eq('id', milestoneId);
      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

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
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      // Create activity record
      await recordMilestoneActivity(
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ),
      
      toast.success("Deliverable added successfully"),
      
      return newDeliverable
    } catch (err: any) {
      console.error("Error uploading deliverable:", err),
      toast.error("Failed to upload deliverable: " + err.message),
      return null
    } finally {
      setIsSubmitting(false)

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

    upload_deliverable;
    is_submitting;
  }
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
