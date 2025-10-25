'use client';

import React from 'react';
import Head from 'next/head';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, cloud services, and digital transformation services." />
        <meta name="keywords" content="AI solutions, cloud services, digital transformation, enterprise technology" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of enterprise AI solutions, cloud services, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive AI and IT solutions for modern businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'AI Solutions', description: 'Advanced artificial intelligence services' },
                { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions' },
                { title: 'Digital Transformation', description: 'Complete digital modernization' },
                { title: 'Data Analytics', description: 'Insights-driven business intelligence' },
                { title: 'Cybersecurity', description: 'Enterprise-grade security solutions' },
                { title: 'DevOps', description: 'Streamlined development and operations' }
              ].map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;