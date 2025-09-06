<<<<<<< HEAD



<<<<<<< HEAD

=======
import {Navigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginContent} from "@/components/auth/login";
export default function Login() {;
  const { isAuthenticated, user } = useAuth();
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
<<<<<<< HEAD

<<<<<<< HEAD
import {Navigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginContent} from "@/components/auth/login";
=======

=======
  }
  return (
    <>
      <Header />
      <LoginContent />
      <Footer />
    </>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { LoginContent } from "@/components/auth/login",;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function Login() {;
  const { isAuthenticated, user } = useAuth();

  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />;
  }
<<<<<<< HEAD

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
=======
=======
  }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  return (
<<<<<<< HEAD
=======
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
;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <>;
      <Header />;
      <LoginContent />;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    </>);
}

}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </>;
  ),; export default function Login () {
  const {
  isAuthenticated, user 
}= useAuth ();
//Redirect if user is already logged in and has completed profile if (isAuthenticated && user?.profileComplete) {
  
}// Redirect to onboarding if user is authenticated but hasn't completed profile if (isAuthenticated && !user?.profileComplete) {
  
}

}
}
    </>;
  );
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
