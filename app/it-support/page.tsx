'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItSupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Support Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Get comprehensive IT support services including help desk, troubleshooting, and technical assistance." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Support Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive IT support services including help desk, troubleshooting, and technical assistance for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Help Desk</h3>
              <p className="text-gray-600">Round-the-clock technical support for all your IT needs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Remote Support</h3>
              <p className="text-gray-600">Quick resolution of issues through secure remote access.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Proactive Monitoring</h3>
              <p className="text-gray-600">Monitor your systems to prevent issues before they occur.</p>
            </div>
          </div>
=======
        <meta name="description" content="Get reliable IT support and maintenance services to keep your systems running smoothly and efficiently." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">IT Support Services</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Get reliable IT support and maintenance services to keep your systems running smoothly.
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default ItSupportPage;