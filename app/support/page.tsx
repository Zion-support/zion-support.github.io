'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get 24/7 support for your AI and IT solutions. Contact our expert team for technical assistance and customer service." />
        <meta name="keywords" content="support, customer service, technical support, AI support, IT support, help desk" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Support</h1>
          <p className="text-xl text-gray-300 text-center mb-12">24/7 support for all your AI and IT needs</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SupportPage;
