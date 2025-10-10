'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Database, Shield, CheckCircle, ArrowRight, Zap, Globe, Lock, Settings, Activity, Users, Star, Phone, Mail, MapPin, Building, Smartphone } from 'lucide-react';

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

  const benefits = [
    'Reduce infrastructure costs by 60%',
    'Improve performance by 80%',
    'Increase uptime to 99.9%',
    'Scale automatically with demand',
    'Enhance security by 95%',
    'Reduce management overhead by 70%',
    'Enable global deployment',
    'Optimize resource utilization'
  ];

  const useCases = [
    {
      title: 'Enterprise Migration',
      description: 'Seamless migration of enterprise applications to cloud infrastructure',
      icon: Building
    },
    {
      title: 'SaaS Platforms',
      description: 'Scalable cloud infrastructure for software-as-a-service applications',
      icon: Cloud
    },
    {
      title: 'Mobile Backend',
      description: 'Robust cloud backend for mobile applications and APIs',
      icon: Smartphone
    },
    {
      title: 'Data Analytics',
      description: 'High-performance cloud infrastructure for big data analytics',
      icon: Database
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure solutions. Intelligent cloud management, hybrid solutions, and enterprise-grade security for modern applications." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, hybrid cloud, cloud security, cloud optimization, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cloud
              <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered cloud infrastructure solutions. Intelligent cloud management, 
              hybrid solutions, and enterprise-grade security for modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
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
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Cloud Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for intelligent cloud infrastructure management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of cloud computing with our revolutionary AI technology
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

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From enterprise migration to SaaS platforms, our cloud infrastructure adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Scale Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building with our AI-powered cloud infrastructure platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
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