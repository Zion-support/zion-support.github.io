'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI and IT solutions, consultations, and support." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our team for AI and IT solutions, consultations, and support.
            </p>
            <div className="mt-8">
              <p className="text-gray-300 mb-2">Phone: +1 302 464 0950</p>
              <p className="text-gray-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
