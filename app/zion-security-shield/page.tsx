import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function ZionSecurityShield() {
  const features = [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered security monitoring and threat analysis',
      icon: Shield
    },
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data transmission',
      icon: Lock
    },
    {
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring and alert system',
      icon: Eye
    },
    {
      title: 'Incident Response',
      description: 'Automated incident detection and response',
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <Helmet>
        <title>Zion Security Shield - Advanced Security Solutions</title>
        <meta name="description" content="Protect your business with Zion Security Shield - advanced AI-powered security solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Zion Security Shield
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered security solutions to protect your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <feature.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
