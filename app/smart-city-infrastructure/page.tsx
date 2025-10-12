

import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SmartcityinfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <title>Smart City Infrastructure - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4 xl font-boldtext-whitemb-6">Smart City Infrastructure</h1>
        <p className="text-lgtext-gray-300mb-8">Professional smart city infrastructure services coming soon.</p>
          <Link to="/contact" className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 transition-all duration-300">

            Contact Us

          </Link>
        </div>
      </div>
    </>
  );

