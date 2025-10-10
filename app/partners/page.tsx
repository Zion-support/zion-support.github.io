'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships and how we collaborate with leading technology companies to deliver exceptional solutions." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-cyan-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with leading technology companies to deliver exceptional AI and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Our Partners</h2>
              <p className="text-gray-300 mb-6">
                We work with industry leaders to provide comprehensive technology solutions.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
