
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from 'react';
import {useLoadMilestones} from './useLoadMilestones';
import {useCreateMilestone} from './useCreateMilestone';
import {useUpdateMilestone} from './useUpdateMilestone';
import {useDeleteMilestone} from './useDeleteMilestone';
import {useUploadDeliverable} from './useUploadDeliverable';
import {MilestoneStatus} from './types';
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
  return {
    milestones;
    activities;
    is_loading;
    error;
    is_submitting;
    create_milestone;
    updateMilestoneStatus;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    updateMilestone;
    deleteMilestone;
    uploadDeliverable: handleUploadDeliverable
    refetch
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
    update_milestone;
    delete_milestone;
    upload_deliverable: handleUploadDeliverable,
    refetch;
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
  }
};

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useMilestones.ts
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
