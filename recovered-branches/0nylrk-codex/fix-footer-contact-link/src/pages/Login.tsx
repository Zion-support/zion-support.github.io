import { Navigate } from &quot;react-router-dom&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { LoginContent } from &quot;@/components/auth/login&quot;;

export default function Login() {
  const { isAuthenticated, user } = useAuth();
  
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to=&quot;/&quot; />;
  }
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to=&quot;/onboarding&quot; />;
  }

  return (
    <>
      <Header />
      <LoginContent />
      <Footer />
    </>
  );
}