import React from 'react';;
import { Helmet } from 'react-helmet-async';;
'use client;
export default function Page() {
  return (
    <div className="min-h-screen bg-white">

      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Page;
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions;
              </h3>;
              <p className="text-blue-700">;
                Our team of experts delivers cutting-edge page solutions.;
              </p>;
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
              <p>Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
              <p>Description of feature 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

