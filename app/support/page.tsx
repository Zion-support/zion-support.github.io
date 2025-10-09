
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Customer Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for our services. Contact our technical support team for assistance." />
        <meta name="keywords" content="customer support, technical support, help, assistance, contact support" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Support
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              We're here to help
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Get the support you need for our services. Our technical team is ready to assist you.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SupportPage;

