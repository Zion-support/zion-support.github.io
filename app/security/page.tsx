import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and prevention systems.',
      icon: AlertTriangle,
      features: ['Real-time monitoring', 'Behavioral analysis', 'Anomaly detection', 'Automated response']
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data encryption and access control solutions.',
      icon: Lock,
      features: ['End-to-end encryption', 'Access management', 'Data classification', 'Compliance monitoring']
    },
    {
      title: 'Security Audits',
      description: 'Regular security assessments and vulnerability testing.',
      icon: Eye,
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance audits', 'Risk assessment']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Protect your business with enterprise-grade security solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive security solutions to protect your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">
                  <service.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
