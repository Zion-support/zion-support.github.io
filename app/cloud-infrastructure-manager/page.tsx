'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Settings, BarChart, Zap } from 'lucide-react';

const CloudInfrastructureManagerPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Manage and monitor your infrastructure across AWS, Azure, Google Cloud, and other platforms from a single dashboard.'
    },
    {
      icon: Settings,
      title: 'Automated Scaling',
      description: 'Intelligent auto-scaling based on demand to optimize costs and performance automatically.'
    },
    {
      icon: BarChart,
      title: 'Cost Optimization',
      description: 'Advanced analytics and recommendations to reduce cloud costs while maintaining performance.'
    },
    {
      icon: Zap,
      title: 'DevOps Integration',
      description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.'
    }
  ];


  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Infrastructure Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your cloud operations with our comprehensive infrastructure management platform. 
              Monitor, optimize, and scale your cloud resources across multiple providers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Platform Features</h2>
              <p className="text-gray-300 mb-6">
                Our cloud infrastructure manager provides everything you need to optimize your cloud operations.
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

export default CloudInfrastructureManagerPage;