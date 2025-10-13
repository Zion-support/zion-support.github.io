'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Helmet>
        <title>Enhanced Footer - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced footer services by Zion Tech Group." />
      </Helmet>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional AI and IT solutions designed to help your business grow and succeed.
          </p>
          <div className="mt-8 text-sm text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>

