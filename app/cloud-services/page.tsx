'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure, and cost-effective cloud infrastructure solutions.',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Cloud Databases',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
      features: ['Automated backups', 'Performance monitoring', 'Security encryption', '24/7 support']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity management', 'Data encryption', 'Compliance auditing', 'Threat detection']
    }
  ];

  const benefits = [
    'Scalable infrastructure that grows with your business',
    'Reduced operational costs and improved efficiency',
    'Enhanced security with enterprise-grade protection',
    '24/7 monitoring and support services',
    'Easy integration with existing systems',
    'Compliance with industry standards and regulations',
    'Disaster recovery and business continuity',
    'Expert guidance and best practices'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999/month',
      description: 'Perfect for small businesses getting started with cloud services',
      features: [
        'Basic cloud infrastructure setup',
        'Email support',
        'Monthly monitoring reports',
        'Standard security features'
      ]
    },
    {
      name: 'Professional',
      price: '$2,999/month',
      description: 'Ideal for growing businesses with advanced cloud needs',
      features: [
        'Advanced cloud architecture',
        'Priority support',
        'Real-time monitoring',
        'Enhanced security features',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large enterprises with complex requirements',
      features: [
        'Custom cloud solutions',
        'Dedicated support team',
        'Advanced analytics',
        'Full compliance support',
        'Custom integrations'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services including migration, infrastructure, security, and managed solutions." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud solutions. Scalable, secure, and cost-effective infrastructure designed for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to meet your business needs and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of modern cloud infrastructure with our expert guidance and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our expert support and guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-lg shadow-sm p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-600">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Choose Plan
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you design and implement the perfect cloud solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Start Your Cloud Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;