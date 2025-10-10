'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This page is under development. Please check back soon.
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
            >
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
