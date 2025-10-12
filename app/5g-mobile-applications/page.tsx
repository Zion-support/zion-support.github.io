import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function FiveGMobileApplications() {
  return (
    <>
      <Helmet>
        <title>FiveGMobileApplications - Zion Tech Group</title>
        <meta name="description" content="Professional fivegmobileapplications services at Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">FiveGMobileApplications</h1>
          <p className="text-lg text-gray-300 mb-8">Professional fivegmobileapplications services coming soon.</p>
          <div className="space-x-4">
            <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Go Home
            </Link>
            <Link to="/contact" className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}