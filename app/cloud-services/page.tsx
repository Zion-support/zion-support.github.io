'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Database, Shield } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure solutions for your business needs'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Professional server management and maintenance services'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Secure and optimized database solutions for your applications'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment'
    }
  ];



  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional cloud services by Zion Tech Group. 
              Comprehensive cloud solutions to accelerate your digital transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive cloud services tailored to your business needs.
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

export default CloudServicesPage;