import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap, Globe } from 'lucide-react';
export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence services',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Micro SAAS',
      description: 'Ready-to-use software solutions',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: '5G Solutions',
      description: 'Next-generation connectivity services',
      icon: <Globe className="w-8 h-8" />
    }
  ];
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group<div><div></title>
        <meta name="description" content="Explore our comprehensive AI and IT services designed to transform your business." /></div></div>
      </Helmet></div>
      <div><div><div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20"></div></div></div>
        <div className="max-w-7xl mx-auto px-4"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-gray-300">Comprehensive technology solutions for modern businesses<div><div></p>
          </div></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div></div></div></div></div>
            {services.map((service, index) => (
              <div><div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div></div></div>
                <div className="text-cyan-400 mb-4"></div>{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          <div><div></div>
        </div></div></div>
      </div><div></div>
    </></div></div>
  );
}