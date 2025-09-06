

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {useState} from 'react';
import {useLoadMilestones} from './useLoadMilestones';
import {useCreateMilestone} from './useCreateMilestone';
import {useUpdateMilestone} from './useUpdateMilestone';
import {useDeleteMilestone} from './useDeleteMilestone';
import {useUploadDeliverable} from './useUploadDeliverable';
import {MilestoneStatus} from './types';

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
    updateMilestone;
    deleteMilestone;
    uploadDeliverable: handleUploadDeliverable
    refetch

  }
};
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
