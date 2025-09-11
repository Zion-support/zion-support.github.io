



export function LoginCard() {
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
=======  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="mx-auto w-full max-w-sm lg:w-96">;
      <div className="text-center mb-10">;
        <h2 className="text-3xl font-bold tracking-tight text-white">;
          Welcome back;
        </h2>;
        <p className="mt-2 text-sm text-zion-slate-light">;
          Don't have an account?{" "}
            className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
=======

    </div>


    </div>;  );
=======
      <div className="bg - zion - blue - dark rounded - lg p - 6">;
        <LoginForm />;
        <SocialLogin />;
      </div>;
<<<<<<< HEAD
    </div>);}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </div>;
  );
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
