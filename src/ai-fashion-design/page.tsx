import React from 'react';
import { Helmet } from 'react-helmet-async';

const pagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <p className="text-lg text-gray-600">
          This page is under construction. Please check back later for updates.
        </p>
      </div>
    </div>
  );
};

export default pagePage;