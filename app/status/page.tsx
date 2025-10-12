import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Status() {
  return (
    <>
      <Helmet>
        <title>Status - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Status</h1>
            <p className="text-lg text-gray-300 mb-8">Professional status services coming soon.</p>
            
              <Link to="/contact" className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 transition-all duration-300">

            
                Contact Us

            
              </Link>
        </div>
      </div>
    </>
  );

