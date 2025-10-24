'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: "Wifi",
    title: 'Smart Infrastructure',
    description: 'Connect and manage city infrastructure with 5G-powered IoT solutions.'
  },
  {
    icon: "Smartphone",
    title: 'Mobile Connectivity',
    description: 'Ultra-fast mobile internet for citizens and visitors.'
  },
  {
    icon: "Shield",
    title: 'Security Systems',
    description: 'Advanced surveillance and security monitoring with 5G.'
  },
  {
    icon: "Zap",
    title: 'Energy Management',
    description: 'Smart grid and energy optimization systems.'
  }
];

export default function FiveGSmartCitySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="5G Smart City Solutions - ZionTechGroup"
        description="Transform your city with cutting-edge 5G smart city solutions. IoT, connectivity, and infrastructure management."
      />
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Smart City</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your city with cutting-edge 5G technology. Connect infrastructure, 
            enhance citizen services, and build the smart cities of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon as any;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Smart City?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our 5G experts help you design and implement smart city solutions 
            that will transform your urban environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}