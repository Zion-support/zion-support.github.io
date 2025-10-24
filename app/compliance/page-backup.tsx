'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';

const PageBackup: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Backup - Zion Tech Group</title>
        <meta name="description" content="Page Backup" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Page Backup</h1>
            <p className="text-xl text-gray-300">This is a backup page</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBackup;