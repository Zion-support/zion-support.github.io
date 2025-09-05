 // Determine overall loading state const isLoading = fetchResumeOperations.isLoading || resumeActions.isLoading || workOperations.isLoading || educationOperations.isLoading || skillsOperations.isLoading || certOperations.isLoading || resumeListOperations.isLoading;
// Determine overall error state (use first non-null error) const error = fetchResumeOperations.error || resumeActions.error || workOperations.error || educationOperations.error || skillsOperations.isLoading || certOperations.error || resumeListOperations.error;
// Override the fetch resume function to update local state 
}// Export all hooks export * from './useFetchResume';
export * from './useResumeActions';
export * from './useWorkExperience';
export * from './useEducation';
export * from './useSkills';
export * from './useCertifications';
export * from './useResumeList';
export * from './useResumeUtils';
