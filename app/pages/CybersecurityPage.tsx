import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';const CybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats and ensure data security." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-6 h-6 bg-purple-500 rounded" />
          <h1 className="text-4xl font-bold text-white mb-6">Cybersecurity Services</h1>
          <p className="text-lg text-gray-300 mb-8">
            Comprehensive security solutions to protect your digital assets.
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

export default CybersecurityPage;
