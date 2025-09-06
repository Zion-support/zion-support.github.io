<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { SocialLogin } from "./SocialLogin";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { Link } from "react-router-dom",
<<<<<<< HEAD
import { LoginForm } from "./LoginForm";
import { SocialLogin } from "./SocialLogin";
=======
import { LoginForm } from "./LoginForm",
import { SocialLogin } from "./SocialLogin",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function LoginCard() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
=======
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
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
          <Link
            to="/signup"

            className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
=======
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

            Sign up;
          </Link>;
        </p>;
      </div>;


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