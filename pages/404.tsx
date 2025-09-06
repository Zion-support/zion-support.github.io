import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-2xl px-4">
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-8">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Go Back Home
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          >
            Go Home
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          </Link>
        </main>
      </div>
    </>
  );
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextPage } from 'next';
import Head from 'next/head';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const NotFoundPage: NextPage = () => {

  return (
    <div>
      <Head>
        <title>404 - Zion Tech Solutions</title>
        <meta name="description" content="404 page" />
      </Head>
      <main>
        <h1>404</h1>
        <p>This page is under construction.</p>
      </main>
    </div>

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
