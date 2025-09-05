import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
<<<<<<< HEAD
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
=======
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;The page you're looking for doesn't exist.&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
      </Head>
      <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <h1 className=&quot;text-6xl font-bold mb-4&quot;>404</h1>
          <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Page Not Found</h2>
          <p className=&quot;text-slate-300 mb-8&quot;>
            The page you're looking for doesn't exist.
          </p>
          <Link
            href=&quot;/&quot;
            className=&quot;px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
=======
}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
import type { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 - Zion Tech Solutions</title>
        <meta name=&quot;description&quot; content=&quot;404 page&quot; />
      </Head>
      
      <main>
        <h1>404</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default NotFoundPage;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
