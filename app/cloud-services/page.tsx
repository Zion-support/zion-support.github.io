'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, Globe, Database, Server } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime and minimal disruption to your business operations.',
      benefits: ['Zero Downtime', 'Cost Optimization', 'Scalability', 'Security']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance for all cloud services with advanced threat protection.',
      benefits: ['Data Encryption', 'Access Control', 'Compliance', 'Monitoring']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'High Performance',
      description: 'Optimized cloud infrastructure designed for maximum performance and reliability.',
      benefits: ['Auto-scaling', 'Load Balancing', 'CDN', 'Monitoring']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Global Reach',
      description: 'Worldwide cloud infrastructure to ensure low latency and high availability.',
      benefits: ['Multi-region', 'Edge Computing', '99.9% Uptime', 'Global CDN']
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      title: 'Data Management',
      description: 'Comprehensive data storage, backup, and recovery solutions for your business.',
      benefits: ['Automated Backups', 'Data Recovery', 'Storage Optimization', 'Analytics']
    },
    {
      icon: <Server className="w-8 h-8 text-red-400" />,
      title: 'Infrastructure as Code',
      description: 'Manage your cloud infrastructure using code for better version control and automation.',
      benefits: ['Version Control', 'Automation', 'Consistency', 'Documentation']
    }
  ];

  const services = [
    {
      name: 'AWS Solutions',
      description: 'Complete Amazon Web Services implementation and management',
      features: ['EC2, S3, RDS', 'Lambda Functions', 'CloudFormation', 'CloudWatch']
    },
    {
      name: 'Azure Services',
      description: 'Microsoft Azure cloud platform services and solutions',
      features: ['Virtual Machines', 'Azure SQL', 'App Service', 'Azure Functions']
    },
    {
      name: 'Google Cloud',
      description: 'Google Cloud Platform services and infrastructure',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Cloud Functions']
    },
    {
      name: 'Multi-Cloud',
      description: 'Hybrid and multi-cloud strategies for maximum flexibility',
      features: ['Cross-Platform', 'Data Sync', 'Disaster Recovery', 'Cost Optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services and solutions by Zion Tech Group. AWS, Azure, Google Cloud, and multi-cloud strategies." />
        <meta name="keywords" content="cloud services, AWS, Azure, Google Cloud, cloud migration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional cloud services and solutions by Zion Tech Group. AWS, Azure, Google Cloud, and multi-cloud strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to meet your business needs and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of cloud services and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let us help you migrate to the cloud and transform your business operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Start Migration
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Get Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CloudServicesPage;