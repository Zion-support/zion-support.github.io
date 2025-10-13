import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for advanced AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for advanced AI and IT solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our contact page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}