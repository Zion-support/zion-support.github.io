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
