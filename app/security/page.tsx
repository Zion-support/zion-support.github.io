
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Security Solutions - Enterprise Security | Zion Tech Group</title>
        <meta name="description" content="Comprehensive security solutions for enterprise businesses. Advanced cybersecurity, data protection, and compliance services." />
        <meta name="keywords" content="cybersecurity, enterprise security, data protection, compliance, security solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Security Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Advanced cybersecurity and data protection
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Protect your business with comprehensive security solutions designed to safeguard your data, systems, and operations.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SecurityPage;

