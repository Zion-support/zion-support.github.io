 setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('resume skills') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not add skill') 
}finally {
  setIsLoading (false) 
}
};
const deleteSkill = async (skillId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to delete skills');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('resume skills') .delete () .eq ('id', skillId);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not delete skill') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
addSkill;
deleteSkill 
}
}