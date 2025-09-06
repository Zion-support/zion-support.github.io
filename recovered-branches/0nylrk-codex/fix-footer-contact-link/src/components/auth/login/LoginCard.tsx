



export function LoginCard() {
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
=======
  return (
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { SocialLogin } from "./SocialLogin";

import { Link } from "react-router-dom",
import { LoginForm } from "./LoginForm";
import { SocialLogin } from "./SocialLogin";
import { LoginForm } from "./LoginForm",
import { SocialLogin } from "./SocialLogin",
export function LoginCard() {
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-zion-slate-light">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">
            Sign up
          </Link>
        </p>
      </div>
      <div className="bg-zion-blue-dark rounded-lg p-6">
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  );
}
  )
import { Link } from "react-router-dom",;
import { LoginForm } from "./LoginForm",;
import { SocialLogin } from "./SocialLogin";
export function LoginCard() {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="mx-auto w-full max-w-sm lg:w-96">;
      <div className="text-center mb-10">;
        <h2 className="text-3xl font-bold tracking-tight text-white">;
          Welcome back;
        </h2>;
        <p className="mt-2 text-sm text-zion-slate-light">;
          Don't have an account?{" "}
<<<<<<< HEAD
          <Link
            to="/signup"

            className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
=======
=======
className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Link  } from './react-router-dom';
import { LoginForm  } from './LoginForm';
import { SocialLogin  } from './SocialLogin';
export /**
 * LoginCard - Function description
 */
function LoginCard() {
  return (
    <div className="mx - auto w - full max - w-sm lg:w - 96">;
      <div className="text - center mb - 10">;
        <h2 className="text - 3xl font - bold tracking - tight text - white">;
          Welcome back;
        </h2>;
        <p className="mt - 2 text - sm text - zion - slate - light">;
          Don't have an account?{" "}
          <Link;
            to="/signup";
            className="font - medium text - zion - cyan hover: text - zion - cyan - light";
          >;

<<<<<<< HEAD
=======
import { Link } from "react-router-dom",;
import { LoginForm } from "./LoginForm",;
import { SocialLogin } from "./SocialLogin",;
;
export function LoginCard() {;
  return (;
    <div className="mx-auto w-full max-w-sm lg:w-96">;
      <div className="text-center mb-10">;
        <h2 className="text-3xl font-bold tracking-tight text-white">;
          Welcome back;
        </h2>;
        <p className="mt-2 text-sm text-zion-slate-light">;
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
          <Link to="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            Sign up;
          </Link>;
        </p>;
      </div>;
<<<<<<< HEAD


    </div>


    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
=======
      <div className="bg - zion - blue - dark rounded - lg p - 6">;
        <LoginForm />;
        <SocialLogin />;
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
    </div>);
}
;
      <div className="bg-zion-blue-dark rounded-lg p-6">;
        <LoginForm />;
        <SocialLogin />;
      </div>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
