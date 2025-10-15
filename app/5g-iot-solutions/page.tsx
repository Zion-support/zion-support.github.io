import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGIotSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G IoT solutions for modern businesses. Connect and manage IoT devices with cutting-edge 5G technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">5G IoT Solutions</h1>
          <p className="text-gray-300 text-lg">Advanced solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default FiveGIotSolutionsPage;