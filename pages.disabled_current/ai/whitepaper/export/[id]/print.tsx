import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperPrint() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Print Whitepaper - AI Generated</title>
        <meta name="description" content="Print AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Print Whitepaper</h1>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Ready to print whitepaper ID: {id}</p>
              <button
                onClick={() => window.print()}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Print Now
              </button>
            </div>
            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Print Preview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600">This is where the print preview of the whitepaper would be displayed.</p>
                <p className="mt-4">The actual whitepaper content would be rendered here in a print-friendly format.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}