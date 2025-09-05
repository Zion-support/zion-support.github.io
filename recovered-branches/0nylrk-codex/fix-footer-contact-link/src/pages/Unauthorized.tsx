
import { Link } from &quot;react-router-dom&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { ShieldAlert } from &quot;lucide-react&quot;;

export default function Unauthorized() {
  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12&quot;>
        <div className=&quot;bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light&quot;>
          <div className=&quot;flex justify-center mb-6&quot;>
            <div className=&quot;bg-zion-purple/20 p-4 rounded-full&quot;>
              <ShieldAlert className=&quot;h-12 w-12 text-zion-purple&quot; />
            </div>
          </div>
          <h1 className=&quot;text-3xl font-bold text-white mb-3&quot;>Access Denied</h1>
          <p className=&quot;text-zion-slate-light mb-6&quot;>
            You don't have permission to access this page. This could be because your account doesn't have the required permissions or you need to complete your profile.
          </p>
          <div className=&quot;flex flex-col gap-3&quot;>
            <Link
              to=&quot;/&quot;
              className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center&quot;
            >
              Return to Home
            </Link>
            <Link
              to=&quot;/login&quot;
              className=&quot;w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center&quot;
            >
              Login with Different Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
