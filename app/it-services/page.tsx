'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Code, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load balancing', 'Disaster recovery']
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      features: ['Threat detection', 'Firewall management', 'Security audits', 'Compliance']
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: 'Server Management',
      description: 'Complete server administration and maintenance',
      features: ['24/7 monitoring', 'Performance optimization', 'Backup solutions', 'Updates']
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Database Management',
      description: 'Expert database design and administration',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration']
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: 'Custom Development',
      description: 'Tailored software solutions for your business needs',
      features: ['Web applications', 'API development', 'Integration', 'Maintenance']
    },
    {
      icon: <Network className="w-8 h-8 text-pink-400" />,
      title: 'Network Solutions',
      description: 'Reliable network infrastructure and support',
      features: ['Network design', 'VPN setup', 'Wireless solutions', 'Troubleshooting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '99',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        '24/7 Help Desk',
        'Remote Support',
        'Basic Security',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      price: '99',
      period: '/month',
      description: 'Comprehensive IT services for growing companies',
      features: [
        'Everything in Basic',
        'On-site Support',
        'Advanced Security',
        'Priority Support',
        'Monthly Reports'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-service IT solutions for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated Team',
        'Custom Solutions',
        'SLA Guarantee',
        '24/7 Phone Support'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, server management, and custom development." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete technology solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${index === 1 ? 'border-cyan-500/40' : 'border-cyan-500/20'} hover:border-cyan-500/40 transition-all duration-300`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help your business thrive.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
