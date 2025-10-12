import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Zap, Database, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function CloudServicesPage() {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Hybrid Solutions'],
      path: '/cloud-migration'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure design and management',
      icon: <Server className="w-8 h-8" />,
      features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Monitoring'],
      path: '/cloud-infrastructure'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud environments',
      icon: <Shield className="w-8 h-8" />,
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection'],
      path: '/cloud-security'
    },
    {
      title: 'Cloud Optimization',
      description: 'Cost optimization and performance tuning for cloud resources',
      icon: <Zap className="w-8 h-8" />,
      features: ['Cost Analysis', 'Performance Tuning', 'Resource Optimization', 'Monitoring'],
      path: '/cloud-cost-optimization'
    },
    {
      title: 'Cloud Database',
      description: 'Managed database services in the cloud',
      icon: <Database className="w-8 h-8" />,
      features: ['Database Migration', 'Backup & Recovery', 'Performance Tuning', 'Scaling'],
      path: '/database-services'
    },
    {
      title: 'Multi-Cloud Solutions',
      description: 'Hybrid and multi-cloud strategies for maximum flexibility',
      icon: <Globe className="w-8 h-8" />,
      features: ['Multi-Cloud Strategy', 'Hybrid Cloud', 'Cloud Governance', 'Integration'],
      path: '/multi-cloud-solutions'
    }
  ];

  const benefits = [
    'Reduced infrastructure costs',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Faster deployment and updates',
    'Disaster recovery and backup'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure, security, and optimization solutions for modern businesses." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with comprehensive cloud solutions. 
                Scalable, secure, and cost-effective cloud infrastructure for the modern enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Benefits
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Why businesses are moving to the cloud
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                End-to-end cloud services for every stage of your cloud journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-purple-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Providers
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We work with all major cloud platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Amazon Web Services</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive AWS services including EC2, S3, Lambda, and more
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    EC2 & ECS
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    S3 & RDS
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Lambda Functions
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Microsoft Azure</h3>
                <p className="text-gray-300 mb-6">
                  Enterprise-grade Azure solutions for Windows and Linux workloads
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Virtual Machines
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Azure SQL
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    App Services
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Google Cloud</h3>
                <p className="text-gray-300 mb-6">
                  Advanced AI and machine learning capabilities with Google Cloud
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compute Engine
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cloud Storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    AI Platform
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our cloud experts help you design and implement the perfect cloud solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Cloud Consultation
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}