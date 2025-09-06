import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="Page not found" />
      </Head>
      
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">This page is under construction.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Go Home
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          </Link>
        </main>
      </div>
    </>
  );
}

export default NotFoundPage;