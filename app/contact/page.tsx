'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Get in touch with our team for AI and IT solutions.
              </p>
              <p className="text-gray-300">
                Phone: (302) 464-0950<br />
                Email: kleber@ziontechgroup.com<br />
                Address: 364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;