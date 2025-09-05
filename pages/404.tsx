import React from 'react';
<<<<<<< HEAD
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found">
=======
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
<<<<<<< HEAD
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
=======
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
  );
}