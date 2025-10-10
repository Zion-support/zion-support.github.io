'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainWeb3Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Web3 - Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Web3 services and solutions. Transform your business with our expert Blockchain Web3 implementation and support." />
        <meta name="keywords" content="blockchain web3, ai solutions, enterprise technology, zion tech group" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain Web3
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Professional Blockchain Web3 services and solutions. Transform your business with our expert Blockchain Web3 implementation and support.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">About This Service</h2>
            <p className="text-gray-300 mb-6">
              Our Blockchain Web3 solutions are designed to help businesses leverage cutting-edge technology 
              to achieve their goals. We provide comprehensive support and implementation services 
              to ensure your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced AI-powered solutions</li>
                  <li>• Enterprise-grade security</li>
                  <li>• 24/7 support and monitoring</li>
                  <li>• Scalable infrastructure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Benefits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Increased efficiency and productivity</li>
                  <li>• Cost reduction and optimization</li>
                  <li>• Enhanced user experience</li>
                  <li>• Future-proof technology</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlockchainWeb3Page;