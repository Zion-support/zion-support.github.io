 try {
  setIsSubmitting (true);
const {
  error 
}= await supabase .from ('project milestones') .delete () .eq ('id', milestoneId);
if (error) throw error;
}finally {
  setIsSubmitting (false) 
}
};
return {
  deleteMilestone;
isSubmitting 
}
};
