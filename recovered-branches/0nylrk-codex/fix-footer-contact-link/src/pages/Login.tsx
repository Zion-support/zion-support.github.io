<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Login.tsx

<<<<<<< HEAD
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Navigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginContent} from "@/components/auth/login";
export default function Login() {;
  const { isAuthenticated, user } = useAuth();
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Login.tsx
import {Navigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {LoginContent} from "@/components/auth/login";
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  return (
    <>
      <Header />
      <LoginContent />
      <Footer />
    </>
  )
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { LoginContent } from "@/components/auth/login",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function Login() {;
  const { isAuthenticated, user } = useAuth();
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />;
  }
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
  }
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>;
      <Header />;
      <LoginContent />;
      <Footer />;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Login.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Login.tsx
    </>);
=======
    </>;
  ),; export default function Login () {
  const {
  isAuthenticated, user 
}= useAuth ();
//Redirect if user is already logged in and has completed profile if (isAuthenticated && user?.profileComplete) {
  
}// Redirect to onboarding if user is authenticated but hasn't completed profile if (isAuthenticated && !user?.profileComplete) {
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Login.tsx

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Login.tsx
=======
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
