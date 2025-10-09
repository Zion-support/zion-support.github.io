'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Please read these terms carefully before using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Terms of Service
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-700 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                <p className="text-gray-700 mb-6">
                  The materials on our website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
                <p className="text-gray-700 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us at 
                  <a href="mailto:legal@ziontechgroup.com" className="text-blue-600 hover:underline">
                    legal@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;