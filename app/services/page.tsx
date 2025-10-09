'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive AI solutions for every business need',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-services'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform data into actionable insights',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Data Visualization', 'Business Intelligence'],
      link: '/ai-data-analytics'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: 'Revolutionary AI-powered customer service',
      features: ['24/7 Chatbots', 'Smart Routing', 'Predictive Support', 'Omnichannel'],
      link: '/ai-customer-support'
    },
    {
      icon: TrendingUp,
      title: 'AI Sales Automation',
      description: 'Automate and optimize your sales process',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Segmentation', 'Automated Follow-ups'],
      link: '/ai-sales-automation'
    },
    {
      icon: Eye,
      title: 'AI Data Visualization',
      description: 'Create stunning, interactive data visualizations',
      features: ['Interactive Dashboards', 'AI-Powered Insights', 'Multi-Source Integration', 'Custom Reports'],
      link: '/ai-data-visualization'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes',
      features: ['Process Automation', 'AI Decision Making', 'Performance Analytics', 'Custom Integrations'],
      link: '/ai-workflow-automation'
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Scalability', 'Security'],
      link: '/cloud-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      link: '/cybersecurity'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      link: '/database'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      link: '/devops'
    }
  ];

  const microSaasServices = [
    {
      icon: Code,
      title: 'Micro SAAS Solutions',
      description: '50+ ready-to-use AI-powered applications',
      features: ['Business Apps', 'Productivity Tools', 'Marketing Tools', 'Developer Tools'],
      link: '/micro-saas'
    },
    {
      icon: BarChart3,
      title: 'Analytics Tools',
      description: 'Advanced business intelligence and analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
      link: '/analytics-tools'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'AI-powered mobile applications',
      features: ['iOS & Android', 'Cross-platform', 'AI Integration', 'Performance Optimization'],
      link: '/ai-mobile-app-development'
    }
  ];

  const emergingTech = [
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Next-generation computing solutions',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development'],
      link: '/quantum-computing'
    },
    {
      icon: Globe,
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions and smart contracts',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'DApp Development'],
      link: '/blockchain-web3'
    },
    {
      icon: Target,
      title: 'Autonomous Systems',
      description: 'Self-managing intelligent systems',
      features: ['Autonomous Vehicles', 'Smart Infrastructure', 'IoT Integration', 'Machine Learning'],
      link: '/autonomous-systems'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects' },
    { number: '100+', label: 'Happy Clients' },
    { number: '300%', label: 'Average ROI' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Leading provider of AI solutions, IT services, cloud infrastructure, and emerging technologies. Transform your business with cutting-edge technology."
        keywords={['AI services', 'IT services', 'cloud computing', 'digital transformation', 'technology solutions', 'automation']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Comprehensive Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform your business with cutting-edge AI, IT, and emerging technologies
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                From AI-powered solutions to cloud infrastructure, we provide comprehensive technology 
                services that drive innovation, efficiency, and growth for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                AI Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Section */}
          <section className="mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Micro SAAS Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {microSaasServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Emerging Technologies Section */}
          <section className="mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Emerging Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {emergingTech.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology services can drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;