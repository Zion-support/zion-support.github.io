



const AuthRoutes = () => {
const AuthRoutes = () => {;
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



},


export default AuthRoutes;
