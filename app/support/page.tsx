'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Our expert team is here to help you succeed." />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              24/7 <span className="text-cyan-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert support team is available around the clock to help you succeed with our AI and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
                <p className="text-gray-300 mb-4">Get help via email within 24 hours</p>
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  support@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">Phone Support</h3>
                <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  (302) 464-0950
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-gray-300 mb-4">Chat with our support team in real-time</p>
                <a href="/contact" className="text-cyan-400 hover:text-cyan-300">
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
