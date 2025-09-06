

<<<<<<< HEAD
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
=======



import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {toast} from 'sonner';
<<<<<<< HEAD
=======
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

<<<<<<< HEAD

<<<<<<< HEAD
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const useDeleteMilestone = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false;
export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
=======

'
import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from 'sonner',
export const useDeleteMilestone = () => {}
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  
  const deleteMilestone = async (milestoneId: string) => {}
    if (!user) return false,
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false,
    
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsSubmitting(true)
      const { error } = await supabase'
        .from('project_milestones')
<<<<<<< HEAD
        .delete()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        .eq('id', milestoneId);
      if (error) throw error;
      toast.success("Milestone deleted successfully");
      return true
    } catch (err: any) {
      console.error("Error deleting milestone:", err);
      toast.error("Failed to delete milestone: " + err.message)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return false
export const useDeleteMilestone = () =>: any {
=======
        .delete();
;
      return false;
export const useDeleteMilestone = () =>: any {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const delete_milestone = async (milestone_id: string) => {}
    // Check condition;
if (return false) {}
  $2;
}
    } finally {}
      setIsSubmitting (false);
    }'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
=======
      return false
export const useDeleteMilestone = () =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const delete_milestone = async (milestone_id: string) => {
    // Check condition
if (return false) {
  $2
}
    } finally {
      setIsSubmitting (false);
    }
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from 'sonner',;
export const useDeleteMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const deleteMilestone = async (milestoneId: string) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
<<<<<<< HEAD
      const { error } = await supabase;'
        .from('project_milestones');
        .delete();'
=======
      const { error } = await supabase;
        .from('project_milestones');
        .delete();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq('id', milestoneId),;
      if (error) throw error,;
      toast.success("Milestone deleted successfully"),;
      return true;
<<<<<<< HEAD
    } catch (err: any) {;"
      console.error("Error deleting milestone:", err),;"
=======
    } catch (err: any) {;
      console.error("Error deleting milestone:", err),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Failed to delete milestone: " + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    deleteMilestone;
    isSubmitting;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
      toast && toast.success("Milestone deleted successfully");
      
      return true
    } catch (err: any) {
      console && console.error("Error deleting milestone:", err);
      toast && toast.error("Failed to delete milestone: " + err && err.message),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
export const useDeleteMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const deleteMilestone = async (milestoneId: string) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
      const { error } = await supabase;
        .from('project_milestones');
        .delete();
        .eq('id', milestoneId),;
      if (error) throw error,;
      toast.success("Milestone deleted successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error deleting milestone:", err),;
      toast.error("Failed to delete milestone: " + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    deleteMilestone;
    isSubmitting;

  }
};
    } finally {
=======
      return false    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false    } finally {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      setIsSubmitting (false);
    }

=======
    } finally {}
      setIsSubmitting (false);
    }

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      return false
export const useDeleteMilestone = () =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const delete_milestone = async (milestone_id: string) => {
    // Check condition
if (return false) {
  $2
}
    try {
      setIsSubmitting (true),
      const { error } = await supabase;
        .from ('project_milestones');
        .delete ();
        .eq ('id', milestone_id);
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Milestone deleted successfully");
;
      return true;
    } catch (err: any) {
      console.error ("Error deleting milestone:", err);
      toast.error ("Failed to delete milestone: " + err.message),
      return false;
    } finally {
      setIsSubmitting (false);
    }


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq('id', milestoneId),
      
      if (error) throw error,
      "
      toast.success("Milestone deleted successfully"),
      
      return true;
    } catch (err: any) {"
      console.error("Error deleting milestone:", err),"
      toast.error("Failed to delete milestone: " + err.message),
      return false;
    } finally {}
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
    }
  };
  
  return {
    deleteMilestone;
    isSubmitting
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
export const useDeleteMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const deleteMilestone = async (milestoneId: string) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
      const { error } = await supabase;
        .from('project_milestones');
        .delete();
        .eq('id', milestoneId),;
      if (error) throw error,;
      toast.success("Milestone deleted successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error deleting milestone:", err),;
      toast.error("Failed to delete milestone: " + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    deleteMilestone;
    isSubmitting;
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


  }
;
  return {}
    delete_milestone;
    is_submitting;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
  }
};
  }
};
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
<<<<<<< HEAD
<<<<<<< HEAD
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;


  }
};

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
