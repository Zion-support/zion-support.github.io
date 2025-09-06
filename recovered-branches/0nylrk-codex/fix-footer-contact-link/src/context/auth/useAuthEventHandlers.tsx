 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 /** * Custom hook for auth event handling */ const handleSignedIn = (mappedUser: UserProfile) => {
  toast ({
  //Check for new registration and send welcome email if needed setTimeout ( () => {
  if (mappedUser) {
  checkNewRegistration (mappedUser) 
}
}, 0);
//Check if user needs to complete onboarding if (!mappedUser.profileComplete && navigate) {
  setOnboardingStep ('profile');
toast ({
  navigate ('/onboarding');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
};
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}