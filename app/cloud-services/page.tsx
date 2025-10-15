import React from 'react';
import SEOHead from '../components/SEOHead';
import { Cloud, Server, Database, Shield, Zap, CheckCircle } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to the cloud with zero downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for your business needs.',
      features: ['Server Setup', 'Load Balancing', 'Auto Scaling', 'Resource Optimization']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Cloud Databases',
      description: 'Managed database services with high availability and performance.',
      features: ['Database Setup', 'Backup & Recovery', 'Performance Tuning', 'Monitoring']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cloud Security',
      description: 'Comprehensive security measures to protect your cloud environment.',
      features: ['Access Controls', 'Encryption', 'Security Monitoring', 'Compliance']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cloud Optimization',
      description: 'Continuous optimization to improve performance and reduce costs.',
      features: ['Cost Optimization', 'Performance Tuning', 'Resource Right-sizing', 'Monitoring']
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Cloud Support',
      description: '24/7 support and maintenance for your cloud infrastructure.',
      features: ['24/7 Monitoring', 'Technical Support', 'Maintenance', 'Updates']
    }
  ];

  return (
    <>
      <SEOHead
        title="Cloud Services - Zion Tech Group"
        description="Comprehensive cloud services including migration, infrastructure management, security, and optimization for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with scalable, secure, and cost-effective cloud solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Cloud Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Cloud Architects</h3>
                <p className="text-gray-300">Certified professionals with deep cloud expertise</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                <p className="text-gray-300">Reduce cloud costs by up to 40% with our optimization strategies</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support for your cloud infrastructure</p>
              </div>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Start Your Cloud Journey
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;