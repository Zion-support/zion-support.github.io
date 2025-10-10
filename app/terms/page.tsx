'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, AlertTriangle, Shield } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, service agreement" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FileText className="w-8 h-8 text-cyan-400 mr-3" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                <p className="text-gray-300">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Scale className="w-8 h-8 text-cyan-400 mr-3" />
                  Use License
                </h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on our website 
                  for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-300">
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 text-cyan-400 mr-3" />
                  Disclaimer
                </h2>
                <p className="text-gray-300 mb-4">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties including, 
                  without limitation, implied warranties or conditions of merchantability, fitness for 
                  a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                  Limitations
                </h2>
                <p className="text-gray-300 mb-4">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use the materials 
                  on our website, even if we or our authorized representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these Terms of Service, 
              please contact us for clarification.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;