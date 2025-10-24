'use client'

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, ArrowRight } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra-Fast Connectivity',
      description: '5G networks providing 10x faster speeds and ultra-low latency for smart city applications'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      title: 'IoT Integration',
      description: 'Seamless integration of IoT devices for comprehensive city monitoring and management'
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Enhanced Security',
      description: 'Advanced security protocols ensuring safe and secure smart city operations'
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Real-time Analytics',
      description: 'Instant data processing and analytics for informed decision making'
    }
  ];

  return (
    <>
      <SEOOptimizer title="5G Smart City Solutions - ZionTechGroup"
        description="Revolutionary 5G-powered smart city solutions for modern urban development and management."
        keywords={['5G smart city', 'smart city solutions', 'IoT', 'urban technology']}
        canonicalUrl="https://ziontechgroup.com/5g-smart-city-solutions"
       />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                5G Smart City Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your city with cutting-edge 5G technology and smart infrastructure solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Learn More
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Schedule Demo
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="cyber-card p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Ready to Build the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join the smart city revolution with our 5G-powered solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="cyber-button px-8 py-4 text-lg inline-flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="cyber-button-outline px-8 py-4 text-lg">
                    Contact Us
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;