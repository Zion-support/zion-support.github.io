<<<<<<< HEAD
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",
=======
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/Header";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Footer } from "@/components/Footer";
import { LoginContent } from "@/components/auth/login";
export default function Login() {
  const { isAuthenticated, user } = useAuth();
<<<<<<< HEAD
import { Footer } from "@/components/Footer",
import { LoginContent } from "@/components/auth/login",
export default function Login() {
  const { isAuthenticated, user } = useAuth(),
  



=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
<<<<<<< HEAD
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
  }
  }
=======
    return <Navigate to="/" />;
  }

  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />;
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
  }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
    <>;
      <Header />;
      <LoginContent />;
      <Footer />;

    </>);
}

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
