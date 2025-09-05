<<<<<<< HEAD
import React, { useEffect } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import SignupForm from '@/components/auth/SignupForm',
import { AuthButtons } from '@/components/AuthButtons',
import { fireEvent } from '@/lib/analytics',
import { logInfo } from '@/utils/productionLogger',
import { useRouter } from 'next/router',
const RegisterPage = () => {
  const router = useRouter(),

  useEffect(() => {
    fireEvent('signup_page_view')
  }, []),

  const handleSuccess = ({ email, emailVerificationRequired }: {
    email: string,
    emailVerificationRequired: boolean
  }) => {
    if (emailVerificationRequired) {
      router.push(`/verify-status?email=${encodeURIComponent(email)}`)
    } else {
      router.push('/auth/login?registrationSuccess=true')
    }
  },
=======
import React, {_useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SignupForm from '@/components/auth/SignupForm';

const _RegisterPage = () => {_const _router = useRouter();

  useEffect__(() => {
    fireEvent('signup_page_view');}, []);

  const _handleSuccess = (_{_email, _emailVerificationRequired}: {_email: string;
    emailVerificationRequired: boolean;}) => {_if (emailVerificationRequired) {
      router.push(`/verify-status?email=${encodeURIComponent(email)}`);
    } else {_router.push('/auth/login?registrationSuccess=true');}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>Create Account - Zion Tech Marketplace</title>
        <meta name=&quot;description&quot; content=&quot;Create your Zion Tech Marketplace account&quot; />
      </Head>

      <div className=&quot;min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-md w-full space-y-8&quot;>
          <div>
            <img
<<<<<<< HEAD
              className=&quot;mx-auto h-12 w-auto&quot;
              src=&quot;/logos/zion-logo.png&quot;
              alt=&quot;Zion Tech&quot;
              width={48}
              height={48}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement,
                target.style.display = 'none'
              }}
=======
              className="mx-auto h-12 w-auto"
              src="/logos/zion-logo.png"
              alt="Zion Tech"
              width={_48}
              height={_48}
              onError={_(e) => {
                const _target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
            <h2 className=&quot;mt-6 text-center text-3xl font-extrabold text-gray-900&quot;>
              Create your account
            </h2>
<<<<<<< HEAD
            <p className=&quot;mt-2 text-center text-sm text-gray-600&quot;>
              Or{' '}
=======
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{_' '}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Link
                href=&quot;/auth/login&quot;
                className=&quot;font-medium text-blue-600 hover:text-blue-500 underline&quot;
              >
                sign in if you already have an account
              </Link>
            </p>
          </div>

          <SignupForm onSuccess={_handleSuccess} />

<<<<<<< HEAD
          {/* Social signup options */}
          <div className=&quot;mt-6&quot;>
            <div className=&quot;relative&quot;>
              <div className=&quot;absolute inset-0 flex items-center&quot;>
                <div className=&quot;w-full border-t border-gray-300&quot; />
=======
          {_/* Social signup options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;relative flex justify-center text-sm&quot;>
                <span className=&quot;px-2 bg-gray-50 text-gray-500&quot;>Or continue with</span>
              </div>
            </div>
<<<<<<< HEAD
            <AuthButtons providers={[&quot;google&quot;, &quot;github&quot;]} />
          </div>

          <div className=&quot;text-center mt-4&quot;>
            <p className=&quot;text-xs text-gray-500&quot;>
              By creating an account, you agree to our{' '}
              <Link href=&quot;/legal/terms&quot; className=&quot;text-blue-600 hover:text-blue-500&quot;>
                Terms of Service
              </Link>{' '}
              and{' '}
<<<<<<< HEAD
              <Link href="/legal/privacy" className="text-blue-600 hover: text-blue-500">
=======
              <Link href=&quot;/legal/privacy&quot; className=&quot;text-blue-600 hover:text-blue-500&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <AuthButtons providers={_["google", _"github"]} />
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              By creating an account, you agree to our{_' '}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{_' '}
              and{_' '}
              <Link href="/legal/privacy" className="text-blue-600 hover:text-blue-500">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
},

export default RegisterPage,
