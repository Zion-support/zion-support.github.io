 export const useEmailAuth = (setUser: (user: UserProfile | null) => void;
setIsLoading: (loading: boolean) => void) => {
  const login = async ({
  email, password 
}: {
  email: string, password: string 
}) => {
  try {
  setIsLoading (true);
}return {
  data 
}
}catch (error: any) {
  
}finally {
  setIsLoading (false) 
}
};
const signup = async (email: string, password: string, userData?: any) => {
  try {
  setIsLoading (true);
//Attempt to sign out any existing session first to prevent conflicts try {
  
}data, error 
}= await supabase.auth.signUp ({
  email, password, options: {
  //Only store a simple display name in the profile data data: {
  if (error) {
  toast ({
  title: "Signup failed";
description: error.message;
}finally {
  setIsLoading (false) 
}
};
const resetPassword = async (email: string) => {
  try {
  setIsLoading (true);
const {
  error 
}= await supabase.auth.resetPasswordForEmail (email, {
  redirectTo: `$ {
  window.location.origin 
}/update-password` 
});
if (error) {
  toast ({
  title: "Password reset failed";
description: error.message;
}finally {
  setIsLoading (false) 
}
};
return {
  login, signup, resetPassword 
}
};
