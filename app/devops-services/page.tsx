import React from "react";
import { Helmet } from 'react-helmet-async';

const DevopsServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>DevopsServices - Zion Tech Group</title>
        <meta name="description" content="Advanced devopsservices service coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">DevopsServices</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
};

export default DevopsServices;