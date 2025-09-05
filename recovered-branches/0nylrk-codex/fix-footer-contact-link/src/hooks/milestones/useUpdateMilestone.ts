 try {
  setIsSubmitting (true);
//Get the current status const {
  data: milestoneData, error: fetchError 
}= await supabase .from ('project milestones') .select ('status') .eq ('id', milestoneId) .single ();
//Update the milestone status const {
  error 
}= await supabase .from ('project milestones') if (error) throw error;
//Create activity record await recordMilestoneActivity (milestoneId, 'status changed', previousStatus, newStatus, comment);
}finally {
  setIsSubmitting (false) 
}
};
const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
  if (!user) return false;
setIsSubmitting (true);
const {
  error 
}= await supabase .from ('project milestones') .update (data) .eq ('id', milestoneId);
if (error) throw error;
// Create activity record await recordMilestoneActivity (milestoneId, 'updated', null, 'updatedMilestone details updated');
}finally {
  setIsSubmitting (false) 
}
};
return {
  updateMilestoneStatus;
updateMilestone;
isSubmitting 
}
};
