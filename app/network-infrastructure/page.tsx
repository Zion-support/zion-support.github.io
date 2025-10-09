'use client';
import React from 'react';
import { Globe, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const NetworkInfrastructurePage: React.FC = () => {
  const features = [
    'Network Design & Architecture',
    'Security Implementation',
    'Performance Optimization',
    '24/7 Monitoring',
    'SD-WAN Solutions',
    'Network Automation'
  ];

  const benefits = [
    '99.9% uptime guarantee',
    '50% faster network speeds',
    'Zero security breaches',
    'Automated management'
  ];

  return (
    <>
      <SEOOptimizer
        title="Network Infrastructure - Zion Tech Group"
        description="Design and implement robust network infrastructure solutions with security and performance optimization. Enterprise-grade networking for modern businesses."
        keywords={['network infrastructure', 'network design', 'sd-wan', 'network security', 'network monitoring', 'network automation']}
        canonicalUrl="https://ziontechgroup.com/network-infrastructure"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Network Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Build robust, secure, and high-performance network infrastructure that scales 
              with your business and ensures reliable connectivity.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Enterprise Network Solutions
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our network experts design and implement comprehensive infrastructure solutions 
                  that provide secure, high-performance connectivity for your entire organization.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <div className="text-center mb-6">
                  <Globe className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Starting at</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-4">$1,400/month</div>
                  <p className="text-gray-300">Complete network infrastructure</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Network design and planning</li>
                    <li>• Hardware and software setup</li>
                    <li>• Security configuration</li>
                    <li>• Performance monitoring</li>
                    <li>• 24/7 support</li>
                    <li>• Regular maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Network Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Build Your Network?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our network experts help you design and implement a robust, 
                secure network infrastructure for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                  Get Network Assessment
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NetworkInfrastructurePage;