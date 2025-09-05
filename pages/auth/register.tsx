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

  return (_<>
      <Head>
        <title>Create Account - Zion Tech Marketplace</title>
        <meta name="description" content="Create your Zion Tech Marketplace account" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logos/zion-logo.png"
              alt="Zion Tech"
              width={_48}
              height={_48}
              onError={_(e) => {
                const _target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';}}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{_' '}
              <Link
                href="/auth/login"
                className="font-medium text-blue-600 hover:text-blue-500 underline"
              >
                sign in if you already have an account
              </Link>
            </p>
          </div>

          <SignupForm onSuccess={_handleSuccess} />

          {_/* Social signup options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>
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
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
