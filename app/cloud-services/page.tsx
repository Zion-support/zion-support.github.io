'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Cloud Services',
      description: 'Comprehensive cloud services with enterprise-grade security and reliability'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast cloud services with optimized performance and scalability'
    },
    {
      icon: Brain,
      title: 'AI-Powered Management',
      description: 'Intelligent cloud management powered by advanced AI technology'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide cloud services deployment and support'
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Security Implementation']
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure tailored to your needs.',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery']
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed database solutions for optimal performance and security.',
      features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Monitoring']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment.',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection']
    }
  ];

  const benefits = [
    'Advanced cloud technology integration',
    'Real-time monitoring and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible cloud solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
    'Reduced infrastructure costs',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Faster deployment times',
    'Better disaster recovery'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud services, cloud computing, IT services, Zion Tech Group, cloud solutions" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud services. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cloud services deliver unmatched performance, security, and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Professional cloud services including migration, infrastructure, and security solutions by Zion Tech Group." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, GCP" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Transform your business with our comprehensive cloud services. From migration to optimization, we help you leverage the power of the cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Cloud Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your cloud service needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud computing with our expert guidance and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our experts help you plan and execute your cloud migration strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Start Your Cloud Journey
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;