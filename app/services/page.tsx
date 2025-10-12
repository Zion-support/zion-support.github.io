import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap, Globe } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Micro SAAS',
      description: 'Ready-to-use software solutions',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation connectivity services',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, cybersecurity, and IT services to transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to transform your business with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br ${service.color} text-white transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}