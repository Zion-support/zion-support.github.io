
import { Facebook, Twitter } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Web3Login } from &quot;./Web3Login&quot;;

export function SocialLogin() {
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading } = useAuth();

  return (
    <div className=&quot;mt-6&quot;>
      <div className=&quot;relative&quot;>
        <div className=&quot;absolute inset-0 flex items-center&quot;>
          <div className=&quot;w-full border-t border-zion-blue-light&quot; />
        </div>
        <div className=&quot;relative flex justify-center text-sm&quot;>
          <span className=&quot;px-2 bg-zion-blue-dark text-zion-slate-light&quot;>Or continue with</span>
        </div>
      </div>

      <div className=&quot;mt-6 grid grid-cols-4 gap-3&quot;>
        <Button
          type=&quot;button&quot;
          variant=&quot;outline&quot;
          className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
          onClick={() => loginWithGoogle()}
          disabled={isLoading}
        >
          <span className=&quot;sr-only&quot;>Sign in with Google</span>
          <svg className=&quot;h-5 w-5&quot; aria-hidden=&quot;true&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
            <path d=&quot;M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z&quot; fill=&quot;#EA4335&quot; />
            <path d=&quot;M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z&quot; fill=&quot;#4285F4&quot; />
            <path d=&quot;M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z&quot; fill=&quot;#FBBC05&quot; />
            <path d=&quot;M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z&quot; fill=&quot;#34A853&quot; />
          </svg>
        </Button>
        <Button
          type=&quot;button&quot;
          variant=&quot;outline&quot;
          className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
          onClick={() => loginWithFacebook()}
          disabled={isLoading}
        >
          <span className=&quot;sr-only&quot;>Sign in with Facebook</span>
          <Facebook className=&quot;h-5 w-5&quot; />
        </Button>
        <Button
          type=&quot;button&quot;
          variant=&quot;outline&quot;
          className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
          onClick={() => loginWithTwitter()}
          disabled={isLoading}
        >
          <span className=&quot;sr-only&quot;>Sign in with Twitter</span>
          <Twitter className=&quot;h-5 w-5&quot; />
        </Button>
        <Web3Login />
      </div>
    </div>
  );
}
