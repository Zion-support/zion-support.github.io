import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const CloudSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud solutions and infrastructure management for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-6 h-6 bg-cyan-500 rounded" />
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">
            Scalable cloud infrastructure and management solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Contact Us
            <div className="w-6 h-6 bg-blue-500 rounded" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;
