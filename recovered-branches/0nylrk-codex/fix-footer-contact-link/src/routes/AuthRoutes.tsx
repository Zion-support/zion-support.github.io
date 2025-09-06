



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const AuthRoutes = () => {
=======
const AuthRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Auth Routes */}

      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/forgot-password" element={<ForgotPassword />} />;
      <Route path="/update-password" element={<UpdatePassword />} />;

      {/* Onboarding Routes */}
      <Route
        path="/onboarding" 
        element={
          <ProtectedRoute>;
            <Onboarding />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/talent-onboarding" 
        element={
          <ProtectedRoute>;
            <TalentOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/service-onboarding" 
        element={
          <ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
  );
};


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default AuthRoutes;
