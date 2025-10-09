'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Server, Shield, Zap, Settings, Phone, ArrowRight, Database, Cloud, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server setup, configuration, and maintenance services',
      features: ['24/7 monitoring', 'Performance optimization', 'Security hardening', 'Backup solutions']
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Expert database design, optimization, and management services',
      features: ['Performance tuning', 'Data migration', 'Backup & recovery', 'Security management']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern business needs',
      features: ['AWS/Azure/GCP', 'Hybrid cloud', 'Cost optimization', 'Disaster recovery']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Advanced security solutions to protect your infrastructure',
      features: ['Firewall management', 'Intrusion detection', 'VPN setup', 'Security audits']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system administration and maintenance services',
      features: ['User management', 'Software updates', 'Performance monitoring', 'Troubleshooting']
    },
    {
      icon: Cpu,
      title: 'Hardware Solutions',
      description: 'Professional hardware procurement and configuration services',
      features: ['Server procurement', 'Network equipment', 'Storage solutions', 'Hardware maintenance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$800',
      period: '/month',
      description: 'Essential infrastructure support',
      features: [
        'Up to 5 servers',
        'Basic monitoring',
        'Email support',
        'Monthly maintenance',
        'Backup solutions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,600',
      period: '/month',
      description: 'Comprehensive infrastructure management',
      features: [
        'Up to 20 servers',
        'Advanced monitoring',
        'Priority support',
        'Weekly maintenance',
        'Security management',
        'Cloud integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,200',
      period: '/month',
      description: 'Full-scale infrastructure solutions',
      features: [
        'Unlimited servers',
        '24/7 monitoring',
        'Dedicated support',
        'Daily maintenance',
        'Advanced security',
        'Custom solutions',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Server, value: '500+', label: 'Servers Managed' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Zap, value: '50%', label: 'Cost Reduction' },
    { icon: CheckCircle, value: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Infrastructure Services - Server Management & Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional IT infrastructure services including server management, cloud solutions, database administration, and network security. 99.9% uptime guarantee." />
        <meta name="keywords" content="IT infrastructure, server management, cloud services, database administration, network security, system administration" />
        <link rel="canonical" href="https://ziontechgroup.com/it-infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                IT Infrastructure Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive infrastructure solutions for modern businesses
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                From server management to cloud solutions, we provide end-to-end IT infrastructure services 
                that ensure reliability, security, and optimal performance for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  View Demo
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-lg">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Infrastructure Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Infrastructure Support Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg p-8 shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Optimize Your Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get professional IT infrastructure support and ensure your systems run smoothly, 
                securely, and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITInfrastructurePage;