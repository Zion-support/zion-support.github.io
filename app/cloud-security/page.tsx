'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Zap } from 'lucide-react';

const CloudSecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Comprehensive security measures to protect your cloud infrastructure from cyber threats'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit to ensure maximum security'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring and threat detection across your entire cloud environment'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Intelligent security automation to quickly respond to and mitigate security incidents'
    }
  ];


  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional cloud security services by Zion Tech Group. 
              Advanced security solutions to protect your cloud infrastructure and data.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive cloud security solutions tailored to your business needs.
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

export default CloudSecurityPage;
