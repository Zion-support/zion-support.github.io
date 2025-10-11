import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure solutions.',
      benefits: ['Auto-scaling', 'High Availability', 'Global Reach', 'Cost Optimization'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Server Management',
      description: 'Professional server management and maintenance services.',
      benefits: ['24/7 Monitoring', 'Security Updates', 'Performance Tuning', 'Backup Solutions'],
      icon: <Server className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Security Solutions',
      description: 'Comprehensive cloud security and compliance solutions.',
      benefits: ['Data Encryption', 'Access Control', 'Threat Detection', 'Compliance'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Performance Optimization',
      description: 'Advanced performance optimization and monitoring.',
      benefits: ['Load Balancing', 'Caching', 'CDN Integration', 'Real-time Monitoring'],
      icon: <Zap className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services and infrastructure solutions." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cloud services and infrastructure solutions for modern businesses. 
              Scale your operations with our reliable cloud platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CloudServicesPage;
