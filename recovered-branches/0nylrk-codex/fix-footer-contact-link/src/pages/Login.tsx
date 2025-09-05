<<<<<<< HEAD
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { LoginContent } from "@/components/auth/login",;
;
export default function Login() {;
  const { isAuthenticated, user } = useAuth(),;
  ;
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />,;
  }
  ;
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />,;
  }
;
  return (;
    <>;
      <Header />;
      <LoginContent />;
      <Footer />;
    </>;
  ),;
=======
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { LoginContent } from "@/components/auth/login",export default function Login() {
  const { isAuthenticated, user } = useAuth(),
  
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />  }
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />  }

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
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}