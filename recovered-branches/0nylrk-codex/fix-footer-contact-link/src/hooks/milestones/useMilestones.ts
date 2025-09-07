<<<<<<< HEAD
import { useState  } from 'react';
import { useLoadMilestones  } from './useLoadMilestones';
import { useCreateMilestone  } from './useCreateMilestone';
import { useUpdateMilestone  } from './useUpdateMilestone';
import { useDeleteMilestone  } from './useDeleteMilestone';
import { useUploadDeliverable  } from './useUploadDeliverable';
import { MilestoneStatus } from './types';
export const useMilestones = (projectId?: string) => {
  const { milestones, activities, isLoading, error, refetch } = useLoadMilestones($2);
  const { createMilestone, isSubmitting: isCreating} = useCreateMilestone($2);
  const { updateMilestoneStatus, updateMilestone, isSubmitting: isUpdating} = useUpdateMilestone($2);
  const { deleteMilestone, isSubmitting: isDeleting} = useDeleteMilestone($2);
  const { uploadDeliverable, isSubmitting: isUploading} = useUploadDeliverable($2);
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD


=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from 'react';
import {useLoadMilestones} from './useLoadMilestones';
import {useCreateMilestone} from './useCreateMilestone';
import {useUpdateMilestone} from './useUpdateMilestone';
import {useDeleteMilestone} from './useDeleteMilestone';
import {useUploadDeliverable} from './useUploadDeliverable';

import {MilestoneStatus} from './types';
<<<<<<< HEAD
=======

<<<<<<< HEAD
  return {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    milestones;
    activities;
    is_loading;
    error;
    is_submitting;
    create_milestone;
    updateMilestoneStatus;
<<<<<<< HEAD
export const useMilestones = (projectId?: string) => {;
  const { milestones, activities, isLoading, error, refetch } = useLoadMilestones(projectId);
  const { createMilestone, isSubmitting: isCreating } = useCreateMilestone(projectId);
  const { updateMilestoneStatus, updateMilestone, isSubmitting: isUpdating } = useUpdateMilestone();
  const { deleteMilestone, isSubmitting: isDeleting } = useDeleteMilestone();
  const { uploadDeliverable, isSubmitting: isUploading } = useUploadDeliverable();
>>>>>>> merged-prs-20250907-203621
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
    updateMilestone;
    deleteMilestone;
    uploadDeliverable: handleUploadDeliverable
    refetch
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    update_milestone;
    delete_milestone;
    upload_deliverable: handleUploadDeliverable,
    refetch;

<<<<<<< HEAD
=======

<<<<<<< HEAD
  }
}

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
};
<<<<<<< HEAD
import { useState } from 'react',;'
import { useLoadMilestones } from './useLoadMilestones',;'
;
<<<<<<< HEAD
export const useMilestones = (projectId?:string) => {;
  }
  const { createMilestone, "isSubmitting":isCreating } = useCreateMilestone(projectId),;
  const { updateMilestoneStatus, updateMilestone, "isSubmitting":isUpdating } = useUpdateMilestone(),;
  const { deleteMilestone, "isSubmitting":isDeleting } = useDeleteMilestone(),;
  const { uploadDeliverable, "isSubmitting":isUploading } = useUploadDeliverable(),;
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
  ;
  // Combine all loading states;
=======
  ;
  // Combine all loading states;
  const isSubmitting = isCreating || isUpdating || isDeleting || isUploading,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
