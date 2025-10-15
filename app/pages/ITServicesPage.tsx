import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your IT environment.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and data breaches.',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance Management']
    },
    {
      icon: Wrench,
      title: 'IT Support',
      description: 'Round-the-clock technical support and maintenance services for all your IT needs.',
      features: ['24/7 Support', 'Remote Assistance', 'System Updates', 'Troubleshooting']
    },
    {
      icon: Monitor,
      title: 'Network Solutions',
      description: 'Robust networking solutions for seamless connectivity and optimal performance.',
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Bandwidth Optimization']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data management solutions for storage, backup, and recovery.',
      features: ['Data Backup', 'Recovery Planning', 'Storage Solutions', 'Data Migration']
    }
  ];

  const benefits = [
    { title: '24/7 Support', description: 'Round-the-clock technical assistance' },
    { title: 'Expert Team', description: 'Experienced IT professionals' },
    { title: 'Cost Effective', description: 'Competitive pricing with maximum value' },
    { title: 'Scalable Solutions', description: 'Grow with your business needs' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support for businesses." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Comprehensive IT solutions to keep your business running smoothly
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Let our experts help you implement the perfect IT solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a
              href="/case-studies"
              className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;