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
        <meta name="description" content="Terms of Service for Zion Tech Group's AI and IT solutions." />
        <meta name="keywords" content="terms of service, legal terms, user agreement" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Terms and conditions for using our services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: January 15, 2024
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Use License</h2>
                <p className="text-gray-300 mb-6">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                  website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Disclaimer</h2>
                <p className="text-gray-300 mb-6">
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Limitations</h2>
                <p className="text-gray-300 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of 
                  the use or inability to use the materials on Zion Tech Group's website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us at 
                  <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    legal@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsPage;
