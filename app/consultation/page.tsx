'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI and IT solutions. Schedule a free consultation with our technology experts." />
        <meta name="keywords" content="IT consultation, AI consulting, technology consulting, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-cyan-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice from our technology experts to transform your business with AI and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Schedule Your Free Consultation</h2>
              <p className="text-gray-300 mb-6">
                Contact us to schedule a free consultation and discover how we can help transform your business.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;
