'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion AI | Legal Terms & Conditions</title>
        <meta name="description" content="Read our terms of service and understand the legal terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 text-center">
                Please read these terms carefully before using our services.
              </p>
              
              <div className="bg-white/5 rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p className="text-gray-300">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                <p className="text-gray-300">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
                <p className="text-gray-300">
                  In no event shall Zion AI or its suppliers be liable for any damages arising out of 
                  the use or inability to use the materials on our website.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-300">
                  The materials appearing on our website could include technical, typographical, or 
                  photographic errors. We do not warrant that any of the materials are accurate, 
                  complete, or current.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at 
                  <a href="mailto:legal@zionai.com" className="text-cyan-400 hover:text-cyan-300">
                    legal@zionai.com
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
