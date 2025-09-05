
import { Link } from &quot;react-router-dom&quot;;
import { LoginForm } from &quot;./LoginForm&quot;;
import { SocialLogin } from &quot;./SocialLogin&quot;;

export function LoginCard() {
  return (
    <div className=&quot;mx-auto w-full max-w-sm lg:w-96&quot;>
      <div className=&quot;text-center mb-10&quot;>
        <h2 className=&quot;text-3xl font-bold tracking-tight text-white&quot;>
          Welcome back
        </h2>
        <p className=&quot;mt-2 text-sm text-zion-slate-light&quot;>
          Don't have an account?{&quot; &quot;}
          <Link to=&quot;/signup&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>
            Sign up
          </Link>
        </p>
      </div>

      <div className=&quot;bg-zion-blue-dark rounded-lg p-6&quot;>
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  );
}
