import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
<<<<<<< HEAD
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
=======
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-slate-300 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link 
            href="/" 
            className="px-6 py-3 bg-blue-600: hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Go Home
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
          </Link>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
