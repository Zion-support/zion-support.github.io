<<<<<<< HEAD
className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Sign up;
          </Link>;
        </p>;
      </div>;
<<<<<<< HEAD
      <div className="bg - zion - blue - dark rounded - lg p - 6">;
        <LoginForm />;
        <SocialLogin />;
      </div>;
    </div>);
}
=======
;
      <div className="bg-zion-blue-dark rounded-lg p-6">;
        <LoginForm />;
        <SocialLogin />;
      </div>;
    </div>;
  );}
 export function LoginCard () {
  return (<div className="mx-auto w-full max-w-sm lg:w-96" > <div className="text-center mb-10" > <h2 className="text-3xl font-bold tracking-tight text-white" > bg-zion-blue-dark rounded-lg p-6" > <LoginForm /> <SocialLogin /> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
