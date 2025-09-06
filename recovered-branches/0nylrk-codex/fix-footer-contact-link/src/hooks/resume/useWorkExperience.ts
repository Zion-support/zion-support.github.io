 setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('work history') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not add work experience') 
}finally {
  setIsLoading (false) 
}
};
const updateWorkExperience = async (workId: string, work: WorkExperience) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to update work experience');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('work history') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update work experience') 
}finally {
  setIsLoading (false) 
}
};
const deleteWorkExperience = async (workId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to delete work experience');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('work history') .delete () .eq ('id', workId);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not delete work experience') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
addWorkExperience;
updateWorkExperience;
deleteWorkExperience 
}
}