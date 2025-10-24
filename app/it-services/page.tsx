import React from 'react';
import Link from 'next/link';
import { Server, Shield, Settings, CheckCircle, ArrowRight, Users, Globe, Database, Cloud, Zap } from 'lucide-react';

const ITServicesPage = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure management to keep your systems running smoothly.',
      features: ['Server Management', 'Network Administration', 'Hardware Support', 'System Monitoring'],
    },
    {
      icon: Shield,
      title: 'IT Security',
      description: 'Protect your IT infrastructure with comprehensive security solutions.',
      features: ['Firewall Management', 'Antivirus Protection', 'Security Audits', 'Incident Response'],
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Expert system administration services for all your IT needs.',
      features: ['User Management', 'System Configuration', 'Backup & Recovery', 'Performance Tuning'],
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration and management services for modern IT infrastructure.',
      features: ['Cloud Migration', 'Cloud Management', 'Hybrid Solutions', 'Cost Optimization'],
    },
  ];

  const supportTypes = [
    {
      icon: Users,
      title: 'Help Desk Support',
      description: '24/7 technical support for all your IT issues and questions.',
    },
    {
      icon: Globe,
      title: 'Remote Support',
      description: 'Quick and efficient remote support for immediate problem resolution.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database administration and optimization services.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your IT systems for maximum performance and efficiency.',
    },
  ];

  const benefits = [
    'Reduced Downtime',
    'Improved Security',
    'Cost Savings',
    'Expert Support',
    'Scalable Solutions',
    'Peace of Mind',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to keep your business running smoothly. From infrastructure 
              management to security, we provide all the IT support you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different types of IT support to meet your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTypes.map((support, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <support.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {support.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {support.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional IT services that keep your business running smoothly and securely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need IT Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get professional IT support that keeps your business running smoothly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get IT Support
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;