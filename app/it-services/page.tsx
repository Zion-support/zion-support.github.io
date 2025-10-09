import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Services - Comprehensive Technology Solutions | Zion Tech Group',
  description: 'Professional IT services including infrastructure management, cloud solutions, cybersecurity, and technical support for businesses of all sizes.',
  keywords: 'IT services, infrastructure management, cloud solutions, cybersecurity, technical support, managed IT services',
  openGraph: {
    title: 'IT Services - Comprehensive Technology Solutions',
    description: 'Professional IT services including infrastructure management, cloud solutions, cybersecurity, and technical support.',
    type: 'website',
  },
};

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Infrastructure Management',
      description: 'Complete management of your IT infrastructure including servers, networks, and data centers.',
      icon: <Server className="h-8 w-8" />,
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Disaster recovery'],
      price: 'Starting at $999/month'
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization services for modern businesses.',
      icon: <Cloud className="h-8 w-8" />,
      features: ['Cloud migration', 'Multi-cloud management', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $799/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: <Shield className="h-8 w-8" />,
      features: ['Threat detection', 'Security audits', 'Incident response', 'Compliance management'],
      price: 'Starting at $1,299/month'
    },
    {
      title: 'Technical Support',
      description: 'Expert technical support and help desk services for your team.',
      icon: <Users className="h-8 w-8" />,
      features: ['24/7 support', 'Remote assistance', 'On-site support', 'Knowledge base'],
      price: 'Starting at $399/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to keep your business running smoothly and securely.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-purple-400 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-400 mb-4">{service.price}</div>
                  <a 
                    href="/contact" 
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-200 mb-8 text-lg">
              Our team of IT experts is ready to help you optimize your technology infrastructure and improve your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;