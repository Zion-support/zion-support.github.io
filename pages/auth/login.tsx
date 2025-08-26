import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const LoginPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sign In - Zion Tech Group</title>
        <meta name="description" content="Sign in to your Zion Tech Group account" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-auto">
              <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">Z</span>
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                create a new account
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            {/* Contact form instead of login */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="text-center">
                <h3 className="text-sm font-medium text-blue-800 mb-2">
                  Contact Us for Access
                </h3>
                <p className="text-sm text-blue-700 mb-4">
                  Please contact us to get access to our services and platform.
                </p>
                <div className="space-y-2 text-sm text-blue-600">
                  <p>📞 <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a></p>
                  <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a></p>
                  <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              By contacting us, you agree to our{' '}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{' '}
              and{' '}
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

export default LoginPage;
