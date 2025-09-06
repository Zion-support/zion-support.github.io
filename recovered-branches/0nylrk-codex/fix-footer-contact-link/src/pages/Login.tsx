<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Navigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginContent} from "@/components/auth/login";
export default function Login() {;
  const { isAuthenticated, user } = useAuth();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",
<<<<<<< HEAD
import { Footer } from "@/components/Footer";
import { LoginContent } from "@/components/auth/login";
export default function Login() {
  const { isAuthenticated, user } = useAuth();
=======
import { Footer } from "@/components/Footer",
import { LoginContent } from "@/components/auth/login",
export default function Login() {
  const { isAuthenticated, user } = useAuth(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
<<<<<<< HEAD
  }
  return (
    <>
      <Header />
      <LoginContent />
      <Footer />
    </>
  )
=======
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { LoginContent } from "@/components/auth/login",;
export default function Login() {;
  const { isAuthenticated, user } = useAuth();
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />;
  }
;
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
  }
;
  return (;
    <>;
      <Header />;
      <LoginContent />;
      <Footer />;
    </>;
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}