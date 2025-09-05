 try {
  setIsSubmitting (true);
const {
  data, error 
}= await supabase .from ('project milestones') .insert ({
  ...milestoneData, project id: projectId, created by: user.id 
}) .select () .single ();
if (error) throw error;
// Create activity record await recordMilestoneActivity (data.id, 'created', null, 'pendingMilestone created');
}finally {
  setIsSubmitting (false) 
}
};
return {
  createMilestone;
isSubmitting 
}
};
