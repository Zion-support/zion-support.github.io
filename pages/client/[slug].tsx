import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | Zion Tech Group</title>
        <meta name="description" content="Dynamic page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {slug}
            </h1>
            <p className="text-xl text-gray-600">
              This is a dynamic page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}