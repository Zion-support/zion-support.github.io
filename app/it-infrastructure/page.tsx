
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Infrastructure - Enterprise Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure solutions for enterprise businesses. Scalable, secure, and reliable technology infrastructure." />
        <meta name="keywords" content="IT infrastructure, enterprise solutions, cloud infrastructure, network security, data center" />
        <link rel="canonical" href="https://ziontechgroup.com/it-infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Infrastructure
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Enterprise-grade infrastructure solutions
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Build and maintain robust, scalable IT infrastructure that supports your business growth and digital transformation.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITInfrastructurePage;
