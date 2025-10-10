'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Server, Shield, Zap, Settings, Phone, ArrowRight, Database, Cloud, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITInfrastructurePage: React.FC = () => {
  return(<>)
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>)
    </>)
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
      price: '$2,500',
      period: '/month',
      features: ['Server monitoring', 'Basic maintenance', 'Email support', 'Monthly reports'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      features: ['24/7 monitoring', 'Priority support', 'Advanced security', 'Weekly reports', 'Backup management'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      features: ['Dedicated team', 'Custom solutions', 'SLA guarantee', 'Real-time monitoring', 'Disaster recovery'],
      popular: false
    }
  ];

  const stats = [
    { icon: CheckCircle, value: '99.9%', label: 'Uptime Guarantee' },
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

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Infrastructure Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive IT infrastructure solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-white">
                    <stat.icon className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-xl">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Infrastructure Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that best fits your infrastructure needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg mb-6 -mt-8">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our experts help you build a robust, scalable, and secure IT infrastructure 
                that supports your business growth.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
  };

export default ITInfrastructurePage;