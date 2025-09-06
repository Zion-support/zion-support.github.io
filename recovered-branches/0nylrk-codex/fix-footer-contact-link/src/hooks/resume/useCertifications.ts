 setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('certifications') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not add certification') 
}finally {
  setIsLoading (false) 
}
};
const updateCertification = async (certId: string, cert: Certification) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to update certifications');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('certifications') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update certification') 
}finally {
  setIsLoading (false) 
}
};
const deleteCertification = async (certId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to delete certifications');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('certifications') .delete () .eq ('id', certId);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not delete certification') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
addCertification;
updateCertification;
deleteCertification 
}
}