<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> pr-12243
import { Facebook, Twitter, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Web3Login } from "./Web3Login";
import { useState } from "react";
import { openAuthPopup } from "@/api/authSocial";
=======
import { Facebook, Twitter, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Web3Login } from './Web3Login';
import { useState } from 'react';
import { openAuthPopup } from '@/api/authSocial';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export function SocialLogin() {
=======
import { Facebook, Twitter, Loader2 } from "lucide-react";"
import { Button } from "@/components/ui/button";"
import { Web3Login } from "./Web3Login";"
import { useState } from "react";"
import { openAuthPopup } from "@/api/authSocial";
export function SocialLogin() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/SocialLogin.tsx
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogle = () => {}
    setIsLoading(true);"
    window.location.href = "/auth/google";
  };

<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zion-blue-light" />
<<<<<<< HEAD
=======
=======


  return (
    <div className="mt-6">"
      <div className="relative">"
        <div className="absolute inset-0 flex items-center">"
          <div className="w-full border-t border-zion-blue-light" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">
return (
    <div className='mt-6'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-zion-blue-light' />
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-zion-blue-dark text-zion-slate-light'>
=======
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-zion-blue-dark text-zion-slate-light'>

        <div className="relative flex justify-center text-sm">"
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
            Or continue with
          </span>
        </div>
      </div>


import { Facebook, Twitter, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Web3Login } from './Web3Login';
import { useState } from 'react';
import { openAuthPopup } from '@/api/authSocial';
export function SocialLogin() {;
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogle = () => {;
    setIsLoading(true);
    window && window.location.href = '/auth/google';
  };

  return (
    <div className='mt-6'>;
      <div className='relative'>;
        <div className='absolute inset-0 flex items-center'>;
          <div className='w-full border-t border-zion-blue-light' />;
        </div>;
        <div className='relative flex justify-center text-sm'>;
          <span className='px-2 bg-zion-blue-dark text-zion-slate-light'>;
import { Facebook, Twitter, Loader2 } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Web3Login } from './Web3Login';
import { useState } from 'react';
import { openAuthPopup } from '@/api / auth_social';
export /**
 * SocialLogin - Function description
 */
function SocialLogin() {
  const [is_loading, setIsLoading] = useState (false);
  const handle_google = () =>: any {
    setIsLoading (true);
    window.location.href = '/auth / google';
  }
  return (
    <div className='mt - 6'>;
      <div className='relative'>;
        <div className='absolute inset - 0 flex items - center'>;
          <div className='w - full border - t border - zion - blue - light' />;
        </div>;
        <div className='relative flex justify - center text - sm'>;
          <span className='px - 2 bg - zion - blue - dark text - zion - slate - light'>;
            Or continue with;
          </span>;
        </div>;
      </div>;
      <div className="mt-6 grid grid-cols-4 gap-3">

<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD
=======
=======
      <div className="mt-6 grid grid-cols-4 gap-3">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx

        <Button
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"",
          onClick={handleGoogle}
          disabled={isLoading}
        >
<span className="sr-only">Sign in with Google</span>"
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />"
          ) : (
            <svg
              className="h-5 w-5""
              aria-hidden="true""
              fill="currentColor""
              viewBox="0 0 24 24""
            >
              <path
                d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z""
                fill="#EA4335""
              />
              <path
                d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z""
                fill="#4285F4""
              />
              <path
                d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z""
                fill="#FBBC05""
              />
              <path
                d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z""
                fill="#34A853""
              />
{isLoading ? (
import { Facebook, Twitter, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Web3Login } from "./Web3Login",
import { useState } from "react",
import { openAuthPopup } from "@/api/authSocial",
export function SocialLogin() {
  const [isLoading, setIsLoading] = useState(false),

<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
=======
  return ("
    <div className="mt-6">"
      <div className="relative">"
        <div className="absolute inset-0 flex items-center">"
          <div className="w-full border-t border-zion-blue-light" />
        </div>"
        <div className="relative flex justify-center text-sm">"
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">
            Or continue with;
          </span>
        </div>
      </div>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/SocialLogin.tsx
=======
  const handleGoogle = () => {
    setIsLoading(true),
    window.location.href = '/auth/google'
  },

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zion-blue-light" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>
        </div>
      </div>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
      <div className="mt-6 grid grid-cols-4 gap-3">
        <Button"
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={handleGoogle}
          disabled={isLoading}
        >"
          <span className="sr-only">Sign in with Google</span>
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
          {isLoading ? ("
=======
          {isLoading ? (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <svg"
              className="h-5 w-5""
              aria-hidden="true""
              fill="currentColor""
              viewBox="0 0 24 24"
            >
              <path"
                d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z""
                fill="#EA4335"
              />
              <path"
                d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z""
                fill="#4285F4"
              />
              <path"
                d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z""
                fill="#FBBC05"
              />
              <path"
                d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z""
                fill="#34A853"
              />


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
              <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
            </svg>
          )}
<<<<<<< HEAD
=======
        </Button>;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
        <Button"
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan""
=======
        <Button
</Button>
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
          onClick={() => openAuthPopup("facebook")}


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        </Button>
        <Web3Login />
      </div>
    </div>;
  );
};

<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD
=======
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => openAuthPopup('facebook')}
          disabled={isLoading}
        >"
          <span className="sr-only">Sign in with Facebook</span>"
          <Facebook className="h-5 w-5" />
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
            </svg>
          )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
        </Button>
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
          onClick={() => openAuthPopup('twitter')}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> pr-12243
=======
        <Button"
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan""
          onClick={() => openAuthPopup("twitter")}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/SocialLogin.tsx
=======
          onClick={() => openAuthPopup('facebook')}

          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"",
          onClick={() => openAuthPopup("facebook")}"

          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Facebook</span>"
          <Facebook className="h-5 w-5" />"
        </Button>
        <Button
onClick={() => openAuthPopup('twitter')}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Facebook</span>
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => openAuthPopup('twitter')}
main
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
          disabled={isLoading}
        >"
          <span className="sr-only">Sign in with Twitter</span>"
          <Twitter className="h-5 w-5" />


<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx

<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======
          type="button""
          variant="outline""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"",
          onClick={() => openAuthPopup("twitter")}"
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Twitter</span>"
          <Twitter className="h-5 w-5" />"

main
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
        </Button>
        <Web3Login />
      </div>
    </div>
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
  )
          disabled={isLoading}        >;
          <span className='sr-only'>Sign in with Twitter</span>;'
          <Twitter className='h-5 w-5' />;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx

'
import { Facebook, Twitter, Loader2 } from 'lucide-react';"
import { Button } from "@/components/ui/button",;"
import { Web3Login } from "./Web3Login",;"
import { useState } from "react",;"
=======
import { Facebook, Twitter, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Web3Login } from "./Web3Login",;
import { useState } from "react",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
import { openAuthPopup } from "@/api/authSocial",;
export function SocialLogin() { return null; }
  };
  return (;"
    <div className="mt-6">;"
      <div className="relative">;"
        <div className="absolute inset-0 flex items-center">;"
          <div className="w-full border-t border-zion-blue-light" />;
        </div>;"
        <div className="relative flex justify-center text-sm">;"
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;
        </div>;
      </div>;"
      <div className="mt-6 grid grid-cols-4 gap-3">;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
        <Button;"
          type="button";"
          variant="outline";"
=======
        <Button;
          type="button";
          variant="outline";
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
          onClick={handleGoogle}
          disabled={isLoading}
        >;"
          <span className="sr-only">Sign in with Google</span>;
          {isLoading ? (;"
            <Loader2 className="h-5 w-5 animate-spin" />;
          ) : (;"
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">;"
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />;"
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />;"
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />;"
              <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />;
            </svg>;
          )}
        </Button>;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
        <Button;"
          type="button";"
          variant="outline";"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";'
=======
        <Button;
          type="button";
          variant="outline";
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";",
          onClick={() => openAuthPopup('facebook')}'
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
          onClick={() => openAuthPopup('facebook')}
          disabled={isLoading}
        >;"
          <span className="sr-only">Sign in with Facebook</span>;"
          <Facebook className="h-5 w-5" />;
        </Button>;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
        <Button;"
          type="button";"
          variant="outline";"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";'
=======
        <Button;
          type="button";
          variant="outline";
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";",
          onClick={() => openAuthPopup('twitter')}'
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
          onClick={() => openAuthPopup('twitter')}
          disabled={isLoading}
        >;"
          <span className="sr-only">Sign in with Twitter</span>;"
          <Twitter className="h-5 w-5" />;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
        </Button>;
        <Web3Login />;
      </div>;
    </div>;
  );
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> pr-12243

}


'
      <div className='mt - 6 grid grid - cols - 4 gap - 3'>;
        <Button;'
          type='button';'
          variant='outline';'
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';
=======



}
pr-12243

}



    setIsLoading(true);"
    window.location.href = "/auth/google";"
  };

  return ("
    <div className="mt-6">"
</div>"
      <div className="relative">"
        <div className="absolute inset-0 flex items-center">"
          <div className="w-full border-t border-zion-blue-light" />"
</div>
        <div className="relative flex justify-center text-sm">"
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">"
</span>
"
      <div className="mt-6 grid grid-cols-4 gap-3">"
        <Button;"
          type="button"""
          variant="outline"""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan""
          onClick={handleGoogle}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Google</span>""
            <Loader2 className="h-5 w-5 animate-spin" />"
</Loader2>
            <svg;"
              className="h-5 w-5"""
              aria-hidden="true"""
              fill="currentColor"""
              viewBox="0 0 24 24""
</svg>
              <path;"
                d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"""
                fill="#EA4335""
              />
</path>
                d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"""
                fill="#4285F4""
                d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"""
                fill="#FBBC05""
                d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z"""
                fill="#34A853""
        ;
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"")"
          onClick={() => openAuthPopup("facebook")}"
          <span className="sr-only">Sign in with Facebook</span>""
          <Facebook className="h-5 w-5" />"

          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"""
          onClick={() => openAuthPopup("twitter")}"
          <span className="sr-only">Sign in with Twitter</span>""
          <Twitter className="h-5 w-5" />"

        <Web3Login />
</Web3Login>
          <span className='sr-only'>Sign in with Twitter</span>;
          <Twitter className='h-5 w-5' />;

    <div className="mt-6">;"
      <div className="relative">;"
        <div className="absolute inset-0 flex items-center">;"
          <div className="w-full border-t border-zion-blue-light" />;"
        </div>;"
        <div className="relative flex justify-center text-sm">;"
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;"
        </div>;
      <div className="mt-6 grid grid-cols-4 gap-3">;"
          type="button";""
          variant="outline";""
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";"
        >;
          <span className="sr-only">Sign in with Google</span>;""
            <Loader2 className="h-5 w-5 animate-spin" />;"
</Loader2>"
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">;"
</svg>"
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />;"
</path>"
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />;"
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />;"
              <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />;"
            </svg>;
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";""
          onClick={() => openAuthPopup('facebook')}

          <span className="sr-only">Sign in with Facebook</span>;""
          <Facebook className="h-5 w-5" />;"

          onClick={() => openAuthPopup('twitter')}

          <span className="sr-only">Sign in with Twitter</span>;""
          <Twitter className="h-5 w-5" />;"

        <Web3Login />;
pr-12325
      <div className='mt - 6 grid grid - cols - 4 gap - 3'>;
        <Button;
          type='button';
          variant='outline';
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
          on_click={handle_google}
          disabled={is_loading}        >;'
          <span className='sr - only'>Sign in with Google</span>;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
          {is_loading ? ('
=======
          {is_loading ? (
            <Loader2 className='h - 5 w - 5 animate - spin' />) : ('

          <span className='sr - only'>Sign in with Google</span>;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
            <Loader2 className='h - 5 w - 5 animate - spin' />) : (
            <svg;'
              className='h - 5 w - 5';'
              aria - hidden='true';'
              fill='current_color';'
              view_box='0 0 24 24';
            >;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
              <path;'
                d='M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z';'
=======
pr-12325
              <path;
                d='M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
                fill='#EA4335';
              />;
              <path;'
                d='M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z';'
                fill='#4285F4';
              />;
              <path;'
                d='M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z';'
                fill='#FBBC05';
              />;
              <path;'
                d='M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z';'
                fill='#34A853';
              />;
            </svg>)}
        </Button>;
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
        <Button;'
          type='button';'
          variant='outline';'
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';'
          on_click={() => openAuthPopup ('facebook')}
          disabled={is_loading}        >;'
          <span className='sr - only'>Sign in with Facebook</span>;'
          <Facebook className='h - 5 w - 5' />;
        </Button>;
        <Button;'
          type='button';'
          variant='outline';'
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';'
          on_click={() => openAuthPopup ('twitter')}
          disabled={is_loading}        >;'
          <span className='sr - only'>Sign in with Twitter</span>;'
=======
        <Button;
          type='button';
          variant='outline';
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';',
          on_click={() => openAuthPopup ('facebook')}'
          disabled={is_loading}        >;
          <span className='sr - only'>Sign in with Facebook</span>;
          <Facebook className='h - 5 w - 5' />;
        </Button>;
        <Button;
          type='button';
          variant='outline';
          className='w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan';',
          on_click={() => openAuthPopup ('twitter')}'
          disabled={is_loading}        >;
          <span className='sr - only'>Sign in with Twitter</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
          <Twitter className='h - 5 w - 5' />;
        </Button>;
        <Web3Login />;
      </div>;
    </div>);
}
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
<<<<<<< HEAD:src_backup/components/auth/login/SocialLogin.tsx
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/SocialLogin.tsx
=======
;
}
;
  );
origin/cursor/automate-test-improve-and-merge-code-2533
                d='M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z';
                fill='#4285F4';
                d='M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z';
                fill='#FBBC05';
                d='M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z';
                fill='#34A853';
</path>)
            </svg>)}
          on_click={() => openAuthPopup ('facebook')}

          <span className='sr - only'>Sign in with Facebook</span>;
          <Facebook className='h - 5 w - 5' />;

          on_click={() => openAuthPopup ('twitter')}

          <span className='sr - only'>Sign in with Twitter</span>;
          <Twitter className='h - 5 w - 5' />;

    </div>);
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/SocialLogin.tsx
