'use client';

import { Helmet } from 'react-helmet-async';

const zioninventorysmartPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Inventory Smart - Zion Tech Group</title>
        <meta name="description" content="Professional Zion Inventory Smart services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Inventory Smart
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional Zion Inventory Smart services coming soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default zioninventorysmartPage;
