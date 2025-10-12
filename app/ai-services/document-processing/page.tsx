'use client';

import { Helmet } from 'react-helmet-async';

const DocumentprocessingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Document Processing - Zion Tech Group</title>
        <meta name="description" content="Professional document processing services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Document Processing
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional document processing services coming soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentprocessingPage;