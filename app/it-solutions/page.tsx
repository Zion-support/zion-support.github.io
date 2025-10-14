'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  ServerIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response']
    },
    {
      icon: CogIcon,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology investments.',
      features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'Change Management']
    },
    {
      icon: ServerIcon,
      title: 'Network Solutions',
      description: 'Robust network infrastructure for reliable connectivity.',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring']
    }
  ];

  const benefits = [
    'Reduced IT costs by up to 40%',
    'Improved system reliability and uptime',
    'Enhanced security posture',
    'Scalable infrastructure for growth',
    '24/7 expert support',
    'Compliance with industry standards'
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  ];
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and software development. Expert IT services for modern businesses." />
        <meta name="keywords" content="IT solutions, cloud computing, cybersecurity, network infrastructure, software development, IT consulting" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our IT Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our IT Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our IT solutions can help you optimize your technology stack and achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

      </div>"""
        <meta name=description content=Comprehensive IT solutions including infrastructure management, cloud migration, cybersecurity, database management, and more. Expert IT services for modern businesses. />"""
        <meta name=keywords content=IT solutions, infrastructure management, cloud migration, cybersecurity, database management, IT support, network security />""
      </Helmet>

      {/* Hero Section */}

              IT Solutions
            </h1>"""
            <p className=text-xl text-gray-300 mb-8 leading-relaxed>
              Comprehensive IT solutions to power your business infrastructure
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">"""
              From infrastructure management to cybersecurity, our expert IT solutions 
              ensure your technology infrastructure is secure, scalable, and optimized for performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionsPage;
