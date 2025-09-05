
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom",
import { LoginForm } from "./LoginForm",
import { SocialLogin } from "./SocialLogin",
=======
import { Link } from &quot;react-router-dom&quot;;
import { LoginForm } from &quot;./LoginForm&quot;;
import { SocialLogin } from &quot;./SocialLogin&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function LoginCard() {
  return (
    <div className=&quot;mx-auto w-full max-w-sm lg:w-96&quot;>
      <div className=&quot;text-center mb-10&quot;>
        <h2 className=&quot;text-3xl font-bold tracking-tight text-white&quot;>
          Welcome back
        </h2>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-zion-slate-light">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">
=======
        <p className=&quot;mt-2 text-sm text-zion-slate-light&quot;>
          Don't have an account?{&quot; &quot;}
          <Link to=&quot;/signup&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Sign up
          </Link>
        </p>
      </div>

      <div className=&quot;bg-zion-blue-dark rounded-lg p-6&quot;>
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  )
=======
import { Link } from "react-router-dom",;
import { LoginForm } from "./LoginForm",;
import { SocialLogin } from "./SocialLogin";
export function LoginCard() {;
  return (;
    <div className="mx-auto w-full max-w-sm lg:w-96">;
      <div className="text-center mb-10">;
        <h2 className="text-3xl font-bold tracking-tight text-white">;
          Welcome back;
        </h2>;
        <p className="mt-2 text-sm text-zion-slate-light">;
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
            Sign up;
          </Link>;
        </p>;
      </div>;
      <div className="bg-zion-blue-dark rounded-lg p-6">;
        <LoginForm />;
        <SocialLogin />;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;