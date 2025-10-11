'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, CheckCircle, ArrowRight, Shield, Zap, Users, BarChart, Target, TrendingUp, Database, Settings, Globe, Server, Lock } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Scalable Cloud Solutions',
      description: 'Build and deploy applications that scale automatically with your business needs.',
      benefits: ['Auto-scaling', 'Load balancing', 'Resource optimization', 'Cost efficiency']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures to protect your data and applications.',
      benefits: ['Data encryption', 'Access controls', 'Compliance standards', 'Security monitoring']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized infrastructure for maximum performance and reliability.',
      benefits: ['99.9% uptime', 'Fast response times', 'Global CDN', 'Performance monitoring']
    },
    {
      icon: Database,
      title: 'Managed Databases',
      description: 'Fully managed database services with automated backups and scaling.',
      benefits: ['Automated backups', 'Auto-scaling', 'High availability', 'Performance tuning']
    }
  ];

  const cloudServices = [
    {
      icon: Server,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud',
      benefits: ['Zero-downtime migration', 'Data validation', 'Performance optimization', 'Cost analysis']
    },
    {
      icon: Settings,
      title: 'Infrastructure as Code',
      description: 'Manage your cloud infrastructure using code and automation',
      benefits: ['Version control', 'Automated deployment', 'Consistency', 'Disaster recovery']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Distribute workloads across multiple cloud providers for optimal performance',
      benefits: ['Vendor independence', 'Risk mitigation', 'Cost optimization', 'Performance optimization']
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Ensure your cloud infrastructure meets security and compliance requirements',
      benefits: ['Security audits', 'Compliance monitoring', 'Threat detection', 'Incident response']
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Improve application performance by 60%',
    'Achieve 99.9% uptime guarantee',
    'Scale resources automatically based on demand',
    'Enhanced security and compliance',
    '24/7 monitoring and support'
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '40%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Monitoring', icon: Zap },
    { number: '50+', label: 'Enterprise Clients', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Build and deploy scalable cloud infrastructure solutions. Enterprise-grade security, high performance, and managed services for your applications." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, infrastructure as code, cloud security, managed services" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build and deploy scalable cloud infrastructure solutions. Enterprise-grade security, high performance, and managed services for your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud infrastructure services to support your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud infrastructure solutions deliver unmatched performance, security, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cloud infrastructure and achieve unprecedented scalability and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your cloud journey today and build scalable, secure, and high-performance applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CloudInfrastructurePage;