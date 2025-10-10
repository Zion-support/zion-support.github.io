'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Database, Shield, CheckCircle, ArrowRight, Zap, Globe, Lock, Settings, Activity, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'AI-Powered Cloud Management',
      description: 'Intelligent cloud resource optimization and automated scaling based on demand patterns.',
      benefits: ['Auto-scaling', 'Cost optimization', 'Performance monitoring', 'Resource allocation']
    },
    {
      icon: Server,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud infrastructure with AI-driven optimization.',
      benefits: ['Hybrid architecture', 'Data migration', 'Workload balancing', 'Unified management']
    },
    {
      icon: Database,
      title: 'Smart Data Management',
      description: 'AI-powered data storage, backup, and recovery solutions with predictive analytics.',
      benefits: ['Automated backups', 'Data analytics', 'Disaster recovery', 'Storage optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security monitoring and compliance management for cloud infrastructure.',
      benefits: ['Security monitoring', 'Compliance management', 'Threat detection', 'Access control']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'AI-driven performance tuning and optimization for maximum efficiency and speed.',
      benefits: ['Performance tuning', 'Load balancing', 'Caching strategies', 'Speed optimization']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Worldwide cloud infrastructure with intelligent content delivery and edge computing.',
      benefits: ['Global CDN', 'Edge computing', 'Low latency', 'High availability']
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Migration',
      description: 'Seamlessly migrate enterprise workloads to the cloud with AI optimization',
      icon: '🏢'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Scalable cloud infrastructure for high-traffic e-commerce applications',
      icon: '🛒'
    },
    {
      title: 'SaaS Applications',
      description: 'Multi-tenant cloud solutions for software-as-a-service platforms',
      icon: '💻'
    },
    {
      title: 'Data Analytics',
      description: 'Big data processing and analytics on cloud infrastructure',
      icon: '📊'
    },
    {
      title: 'IoT Solutions',
      description: 'Cloud infrastructure for Internet of Things applications and data processing',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Backend cloud services for mobile applications and APIs',
      icon: '📱'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 50%',
    'Improve performance by 80%',
    'Increase reliability by 99.9%',
    'Scale automatically with demand',
    'Enable global deployment',
    'Automate management tasks',
    'Enhance security posture',
    'Optimize resource utilization'
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Intelligent cloud infrastructure solutions powered by AI. Automated scaling, optimization, and management for modern applications." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, hybrid cloud, cloud optimization, cloud security, cloud migration" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mb-8">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent cloud infrastructure solutions powered by AI. Automated scaling, optimization, 
              and management for modern applications and enterprise workloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-sky-400 text-sky-300 px-8 py-4 rounded-lg font-semibold hover:bg-sky-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI-powered cloud solutions that adapt and optimize automatically
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Perfect for businesses of all sizes and industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that drive efficiency and cost savings
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-sky-100 mb-8">
                Join thousands of organizations using our AI cloud infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICloudInfrastructurePage;