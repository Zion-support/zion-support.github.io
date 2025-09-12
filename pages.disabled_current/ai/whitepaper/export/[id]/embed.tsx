import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperEmbed() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Embed Whitepaper - AI Generated</title>
        <meta name="description" content="Embed AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Embed Whitepaper</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Embed Code</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">HTML Embed Code</label>
                  <textarea
                    rows={4}
                    value={`<iframe src="${window.location.origin}/ai/whitepaper/preview/${id}" width="100%" height="600" frameborder="0"></iframe>`}
                    readOnly
                    className="w-full border rounded-lg px-3 py-2 font-mono text-sm"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">React Component</label>
                  <textarea
                    rows={4}
                    value={`<WhitepaperEmbed id="${id}" />`}
                    readOnly
                    className="w-full border rounded-lg px-3 py-2 font-mono text-sm"
                  ></textarea>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Copy HTML
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Copy React
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="border rounded-lg p-4 h-64 overflow-y-auto">
                <p className="text-gray-600">Embed preview for whitepaper ID: {id}</p>
                <p className="mt-4">This is where the actual embedded whitepaper would be displayed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}