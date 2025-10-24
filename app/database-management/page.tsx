'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DatabaseManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Database Management - Zion Tech Group</title>
        <meta name="description" content="Professional Database Management services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5 xl font-bold text-white mb-6">Database Management</h1>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Professional Database Management services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default DatabaseManagementPage;