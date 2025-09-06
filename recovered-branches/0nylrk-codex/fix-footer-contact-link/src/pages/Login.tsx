<<<<<<< HEAD
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
=======




>>>>>>> main
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
<<<<<<< HEAD
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
=======

import {Navigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginContent} from "@/components/auth/login";
=======

>>>>>>> main
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { LoginContent } from "@/components/auth/login",;
<<<<<<< HEAD
export default function Login() {;
  const { isAuthenticated, user } = useAuth();
=======

export default function Login() {;
  const { isAuthenticated, user } = useAuth();

>>>>>>> main
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />;
  }
<<<<<<< HEAD
;
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
  }
;
  return (;
=======

  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
=======
import { Navigate } from './react-router-dom';
import { use_auth } from '@/hooks / use_auth';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { LoginContent } from '@/components / auth / login';
export default /**
 * Login - Function description
 */
function Login() {
  const { is_authenticated, user } = use_auth ();
;
  // Redirect if user is already logged in and has completed profile;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/" />;
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/onboarding" />;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
>>>>>>> main
    <>;
      <Header />;
      <LoginContent />;
      <Footer />;
<<<<<<< HEAD
    </>;
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======

    </>);
}

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
