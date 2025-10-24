<<<<<<< HEAD
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Comprehensive page solutions for modern businesses.',
  keywords: 'page, AI solutions, technology services',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Comprehensive page solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/5g-solutions',
  },
};
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: '5G Network Infrastructure',
    description: 'Deploy high-speed 5G networks with ultra-low latency and massive connectivity.',
    icon: <Wifi className="w-8 h-8" />,
  },
  {
    title: 'Edge Computing',
    description: 'Process data at the edge for real-time applications and reduced latency.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'IoT Connectivity',
    description: 'Connect millions of devices with reliable 5G IoT solutions.',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive security for 5G networks and connected devices.',
    icon: <Shield className="w-8 h-8" />,
  },
];
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea

const PagePage = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive page solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEOOptimizer
        title="5G Solutions - ZionTechGroup"
        description="Comprehensive 5G solutions for businesses. Network infrastructure, edge computing, IoT connectivity, and security."
        keywords="5G solutions, network infrastructure, edge computing, IoT connectivity, 5G security"
      />
      <Navigation />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Unlock the power of 5G technology with our comprehensive solutions for businesses and organizations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
