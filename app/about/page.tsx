import React from 'react';
import { Helmet } from 'react-helmet-async';

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading provider of AI-powered solutions, 5G technology, and enterprise IT services." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Leading provider of AI-powered solutions, 5G technology, and enterprise IT services.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                Expert Solutions
              </h3>
              <p className="text-gray-300">
                Our team of experts delivers cutting-edge technology solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Implementation
              </h3>
              <p className="text-gray-300">
                Tailored implementations for your specific requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-300">
                Round-the-clock support for all your technology needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;