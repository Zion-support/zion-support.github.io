

export const _useMilestones = (_projectId?: string) => {_const { milestones, _activities, _isLoading, _error, _refetch} = useLoadMilestones(projectId);
  const {_createMilestone, _isSubmitting: isCreating} = useCreateMilestone(projectId);
  const {_updateMilestoneStatus, _updateMilestone, _isSubmitting: isUpdating} = useUpdateMilestone();
  const {_deleteMilestone, _isSubmitting: isDeleting} = useDeleteMilestone();
  const {_uploadDeliverable, _isSubmitting: isUploading} = useUploadDeliverable();
  
  // Combine all loading states
  const _isSubmitting = isCreating || isUpdating || isDeleting || isUploading;
  
  // Function to upload deliverable with project_id
  const _handleUploadDeliverable = async (_milestoneId: string, _file: File) => {_if (!projectId) return null;
    return await uploadDeliverable(milestoneId, _projectId, _file);};
  
  return {_milestones, _activities, _isLoading, _error, _isSubmitting, _createMilestone, _updateMilestoneStatus, _updateMilestone, _deleteMilestone, _uploadDeliverable: handleUploadDeliverable, _refetch};
};
