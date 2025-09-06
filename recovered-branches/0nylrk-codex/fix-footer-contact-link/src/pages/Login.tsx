<<<<<<< HEAD


import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer";
import { LoginContent } from "@/components/auth/login";
export default function Login() {
  const { isAuthenticated, user } = useAuth();
import { Footer } from "@/components/Footer",
import { LoginContent } from "@/components/auth/login",
export default function Login() {
  const { isAuthenticated, user } = useAuth(),
  

=======




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
  }
  return (
    <>
      <Header />
      <LoginContent />
      <Footer />
    </>
  )
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

  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }

  return (
    <>;
      <Header />;
      <LoginContent />;
      <Footer />;
<<<<<<< HEAD

    </>;
  );
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
