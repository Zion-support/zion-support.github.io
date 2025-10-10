'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Learn about our service terms and conditions." />
        <meta name="keywords" content="terms of service, terms and conditions, service agreement, legal terms" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of our materials for personal, 
                non-commercial transitory viewing only.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
                out of the use or inability to use the materials on our website.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at 
                legal@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;