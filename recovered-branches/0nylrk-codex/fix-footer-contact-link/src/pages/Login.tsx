<<<<<<< HEAD
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { LoginContent } from "@/components/auth/login",
=======
import { Navigate } from &quot;react-router-dom&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { LoginContent } from &quot;@/components/auth/login&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function Login() {
  const { isAuthenticated, user } = useAuth(),
  
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
<<<<<<< HEAD
    return <Navigate to="/" />
=======
    return <Navigate to=&quot;/&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
<<<<<<< HEAD
    return <Navigate to="/onboarding" />
=======
    return <Navigate to=&quot;/onboarding&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  return (
    <>
      <Header />
      <LoginContent />
      <Footer />
    </>
  )
}