'use client';

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Shield, Brain, Globe, Zap } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Professional Service',
      description: 'High-quality professional services tailored to your business needs'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI solutions to enhance your business operations'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and efficient delivery of solutions and services'
    }
  ];



  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services by Zion Tech Group. 
              Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PagePage;