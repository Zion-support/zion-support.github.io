<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {useLoadMilestones} from './useLoadMilestones';
import {useCreateMilestone} from './useCreateMilestone';
import {useUpdateMilestone} from './useUpdateMilestone';
import {useDeleteMilestone} from './useDeleteMilestone';
import {useUploadDeliverable} from './useUploadDeliverable';
import {MilestoneStatus} from './types';
<<<<<<< HEAD
<<<<<<< HEAD

export const use_milestones = (project_id?: string) =>: any {
  const { milestones, activities, is_loading, error, refetch } = useLoadMilestones (project_id);
  const { create_milestone, is_submitting: is_creating } = useCreateMilestone (project_id);
  const { updateMilestoneStatus, update_milestone, is_submitting: is_updating } = useUpdateMilestone ();
  const { delete_milestone, is_submitting: is_deleting } = useDeleteMilestone ();
  const { upload_deliverable, is_submitting: is_uploading } = useUploadDeliverable ();
;
  // Combine all loading states;
  const is_submitting = is_creating || is_updating || is_deleting || is_uploading;
;
  // Function to upload deliverable with project_id;
  const handleUploadDeliverable = async (milestone_id: string, file: File) => {
    // Check condition
if (return null, ) {
  $2
}
    return await upload_deliverable (milestone_id, project_id, file);
  }
;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return {
    milestones;
    activities;
    is_loading;
    error;
    is_submitting;
    create_milestone;
    updateMilestoneStatus;
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
=======
export const use_milestones = (project_id?: string) =>: any {
  const { milestones, activities, is_loading, error, refetch } = useLoadMilestones (project_id);
  const { create_milestone, is_submitting: is_creating } = useCreateMilestone (project_id);
  const { updateMilestoneStatus, update_milestone, is_submitting: is_updating } = useUpdateMilestone ();
  const { delete_milestone, is_submitting: is_deleting } = useDeleteMilestone ();
  const { upload_deliverable, is_submitting: is_uploading } = useUploadDeliverable ();
;
  // Combine all loading states;
  const is_submitting = is_creating || is_updating || is_deleting || is_uploading;
;
  // Function to upload deliverable with project_id;
  const handleUploadDeliverable = async (milestone_id: string, file: File) => {
    // Check condition
if (return null, ) {
  $2
}
    return await upload_deliverable (milestone_id, project_id, file);
  }
;
  return {
    milestones;
    activities;
    is_loading;
    error;
    is_submitting;
    create_milestone;
    updateMilestoneStatus;
export const useMilestones = (projectId?: string) => {;
  const { milestones, activities, isLoading, error, refetch } = useLoadMilestones(projectId);
  const { createMilestone, isSubmitting: isCreating } = useCreateMilestone(projectId);
  const { updateMilestoneStatus, updateMilestone, isSubmitting: isUpdating } = useUpdateMilestone();
  const { deleteMilestone, isSubmitting: isDeleting } = useDeleteMilestone();
  const { uploadDeliverable, isSubmitting: isUploading } = useUploadDeliverable();
  // Combine all loading states
  const isSubmitting = isCreating |isUpdating |isDeleting |isUploading;
  // Function to upload deliverable with project_id
  const handleUploadDeliverable = async (milestoneId: string, file: File) => {
    if (!projectId) return null
    return await uploadDeliverable(milestoneId, projectId, file)
  }
  return {
    milestones;
    activities;
    isLoading;
    error;
    isSubmitting;
    createMilestone;
    updateMilestoneStatus;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    updateMilestone;
    deleteMilestone;
    uploadDeliverable: handleUploadDeliverable
    refetch
<<<<<<< HEAD
<<<<<<< HEAD

  }
};
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    update_milestone;
    delete_milestone;
    upload_deliverable: handleUploadDeliverable,
    refetch;


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from 'react',;
import { useLoadMilestones } from './useLoadMilestones',;
import { useCreateMilestone } from './useCreateMilestone',;
import { useUpdateMilestone } from './useUpdateMilestone',;
import { useDeleteMilestone } from './useDeleteMilestone',;
import { useUploadDeliverable } from './useUploadDeliverable',;
import { MilestoneStatus } from './types',;
export const useMilestones = (projectId?: string) => {;
  const { milestones, activities, isLoading, error, refetch } = useLoadMilestones(projectId),;
  const { createMilestone, isSubmitting: isCreating } = useCreateMilestone(projectId),;
  const { updateMilestoneStatus, updateMilestone, isSubmitting: isUpdating } = useUpdateMilestone(),;
  const { deleteMilestone, isSubmitting: isDeleting } = useDeleteMilestone(),;
  const { uploadDeliverable, isSubmitting: isUploading } = useUploadDeliverable(),;
  // Combine all loading states;
  const isSubmitting = isCreating || isUpdating || isDeleting || isUploading,;
  // Function to upload deliverable with project_id;
  const handleUploadDeliverable = async (milestoneId: string, file: File) => {;
    if (!projectId) return null,;
    return await uploadDeliverable(milestoneId, projectId, file);
  },;
  return {;
    milestones,;
    activities,;
    isLoading,;
    error,;
    isSubmitting,;
    createMilestone,;
    updateMilestoneStatus,;
    updateMilestone,;
    deleteMilestone,;
    uploadDeliverable: handleUploadDeliverable;
    refetch;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


  }
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import { useState } from 'react',;
import { useLoadMilestones } from './useLoadMilestones',;
import { useCreateMilestone } from './useCreateMilestone',;
import { useUpdateMilestone } from './useUpdateMilestone',;
import { useDeleteMilestone } from './useDeleteMilestone',;
import { useUploadDeliverable } from './useUploadDeliverable',;
import { MilestoneStatus } from './types',;
;
export const useMilestones = (projectId?:string) => {;
  const { milestones, activities, isLoading, error, refetch } = useLoadMilestones(projectId),;
  const { createMilestone, isSubmitting:isCreating } = useCreateMilestone(projectId),;
  const { updateMilestoneStatus, updateMilestone, isSubmitting:isUpdating } = useUpdateMilestone(),;
  const { deleteMilestone, isSubmitting:isDeleting } = useDeleteMilestone(),;
  const { uploadDeliverable, isSubmitting:isUploading } = useUploadDeliverable(),;
  ;
  // Combine all loading states;
  const isSubmitting = isCreating || isUpdating || isDeleting || isUploading,;
  ;
  // Function to upload deliverable with project_id;
  const handleUploadDeliverable = async (milestoneId:string, file:File) => {;
    if (!projectId) return null,;
    return await uploadDeliverable(milestoneId, projectId, file),;
  },;
  ;
  return {;
    milestones,;
    activities,;
    isLoading,;
    error,;
    isSubmitting,;
    createMilestone,;
    updateMilestoneStatus,;
    updateMilestone,;
    deleteMilestone,;
    uploadDeliverable:handleUploadDeliverable,;
    refetch;
  },;
},; 
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
