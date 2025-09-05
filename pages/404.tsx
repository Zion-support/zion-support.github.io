import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Custom404() {
  return (
    <>
      <Head>
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
          >
            Go Home
          </Link>
        </div>
      </main>
    </>
  );
}
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
