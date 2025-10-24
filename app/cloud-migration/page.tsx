'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Brain, Globe, Zap } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Safe and secure migration of your applications and data to the cloud'
    },
    {
      icon: Zap,
      title: 'Automated Migration',
      description: 'Streamlined migration process with minimal downtime and maximum efficiency'
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent analysis and optimization of your cloud infrastructure'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'Support for AWS, Azure, Google Cloud, and other major cloud providers'
    }
  ];



  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Migration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional cloud migration services by Zion Tech Group. 
              Seamlessly migrate your applications and data to the cloud with our expert team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive cloud migration solutions tailored to your business needs.
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

export default CloudMigrationPage;