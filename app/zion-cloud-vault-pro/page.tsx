import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional Page services for businesses" />
      </Helmet>

      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>

        </div>
      </div>
    </div>
  );
}
