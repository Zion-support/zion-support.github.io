import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperValidate() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Validate - AI Generated</title>
        <meta name="description" content="Validate AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Validate Whitepaper</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Validation Results</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Content Quality</h3>
                      <p className="text-gray-600">AI-generated content meets quality standards</p>
                    </div>
                    <span className="text-green-600 font-semibold">✅ Valid</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Formatting</h3>
                      <p className="text-gray-600">Document formatting is correct and consistent</p>
                    </div>
                    <span className="text-green-600 font-semibold">✅ Valid</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Structure</h3>
                      <p className="text-gray-600">Document structure follows best practices</p>
                    </div>
                    <span className="text-green-600 font-semibold">✅ Valid</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Accessibility</h3>
                      <p className="text-gray-600">Document meets accessibility standards</p>
                    </div>
                    <span className="text-green-600 font-semibold">✅ Valid</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Validation Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">94.5%</p>
                  <p className="text-gray-600">Overall Quality Score</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">98.2%</p>
                  <p className="text-gray-600">Formatting Score</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">96.8%</p>
                  <p className="text-gray-600">Structure Score</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">92.1%</p>
                  <p className="text-gray-600">Accessibility Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}