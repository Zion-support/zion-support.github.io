import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart, Shield, Zap } from 'lucide-react';
export default function AIServicesPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  const services = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by AI',
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: 'AI Security',
      description: 'AI-powered cybersecurity solutions',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation',
      icon: <Zap className="w-8 h-8" />
    };
  ];
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>AI Services - Zion Tech Group</title>
        <meta name = "description" content="Comprehensive AI solutions for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">AI Services</h1>
            <p className="text-lg text-gray-300">Comprehensive artificial intelligence solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>;
  );
}