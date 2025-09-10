import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperExport() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Export Whitepaper - AI Generated</title>
        <meta name="description" content="Export AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Export Whitepaper</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Export Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600">
                  <div className="text-2xl mb-2">📄</div>
                  <div>Export as PDF</div>
                </button>
                <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
                  <div className="text-2xl mb-2">📝</div>
                  <div>Export as Word</div>
                </button>
                <button className="bg-gray-500 text-white p-4 rounded-lg hover:bg-gray-600">
                  <div className="text-2xl mb-2">📋</div>
                  <div>Export as Markdown</div>
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="border rounded-lg p-4 h-64 overflow-y-auto">
                <p className="text-gray-600">Whitepaper preview for ID: {id}</p>
                <p className="mt-4">This is where the actual whitepaper content would be displayed for preview before export.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}