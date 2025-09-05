
export default function Login() {_const { isAuthenticated, _user} = useAuth();
  
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {_return <Navigate to="/" />;}
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {_return <Navigate to="/onboarding" />;}

  return (
    <>
      <Header />
      <LoginContent />
      <Footer />
    </>
  );
}