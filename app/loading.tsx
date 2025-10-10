'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const LoadingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Loading - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;