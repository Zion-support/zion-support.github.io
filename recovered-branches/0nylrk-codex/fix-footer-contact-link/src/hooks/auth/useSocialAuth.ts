 export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
  try {
  const {
  error 
}= await supabase.auth.signInWithOAuth ({
  if (error) {
  toast ({
  title: "Google login failed";
description: error.message;
}
};
if (error) {
  toast ({
  title: "Facebook login failed";
description: error.message;
}
};
if (error) {
  toast ({
  title: "Twitter login failed";
description: error.message;
}
};
