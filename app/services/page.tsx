'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, CheckCircle, Star, Phone, Mail } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-services'
    },
    {
      title: 'AI Analytics',
      description: 'Advanced data insights and business intelligence',
      icon: BarChart,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization'],
      href: '/ai-analytics'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation solutions',
      icon: Zap,
      features: ['Workflow Automation', 'RPA', 'API Integration', 'Smart Scheduling'],
      href: '/ai-automation'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      href: '/ai-cybersecurity'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', '99.9% Uptime', 'Cost Optimization'],
      href: '/cloud-infrastructure'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications and platforms',
      icon: Code,
      features: ['React/Next.js', 'Node.js', 'Database Design', 'API Development'],
      href: '/web-development'
    },
    {
      title: 'Mobile Development',
      description: 'iOS and Android applications',
      icon: Users,
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      href: '/mobile-development'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and infrastructure management',
      icon: Zap,
      features: ['Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring', 'Infrastructure as Code'],
      href: '/devops-cicd'
    }
  ];

  const microSaasServices = [
    {
      title: 'Zion Analytics Pro',
      description: 'Business intelligence platform with AI insights',
      icon: BarChart,
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
      href: '/zion-analytics-pro'
    },
    {
      title: 'Zion Chat AI',
      description: 'AI-powered customer support solution',
      icon: Brain,
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      href: '/zion-chat-ai'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      href: '/zion-security-shield'
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and recovery',
      icon: Cloud,
      features: ['Automated Backups', 'Data Encryption', 'Disaster Recovery', 'Compliance'],
      href: '/zion-cloud-vault'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, IT services, cloud computing, web development, mobile development, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ServicesPage;
