import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
<<<<<<< HEAD
        <meta
          name='description'
          content="The page you're looking for doesn't exist."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold mb-4'>404</h1>
          <h2 className='text-2xl font-semibold mb-4'>Page Not Found</h2>
          <p className='text-slate-300 mb-8'>
            The page you're looking for doesn't exist.
          </p>
          <Link
            href='/'
            className='px-6 py-3 bg-blue-600: hover:bg-blue-700 rounded-lg font-semibold transition-colors'
=======
        <meta name="description" content="Page not found" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
};

export default Custom404;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
