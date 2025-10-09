'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link, Share, Package } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709'
  };

  const aiServices = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports'],
      path: '/ai-services/business-intelligence'
    },
    {
      icon: Bot,
      title: 'AI Customer Service',
      description: 'Intelligent chatbots and automated customer support solutions',
      features: ['24/7 Support', 'Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis'],
      path: '/ai-services/customer-experience'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable business insights',
      features: ['Machine Learning Models', 'Pattern Recognition', 'Anomaly Detection', 'Automated Reporting'],
      path: '/ai-services/business-intelligence'
    },
    {
      icon: Search,
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communications',
      features: ['Blog Posts', 'Social Media Content', 'Email Campaigns', 'Product Descriptions'],
      path: '/ai-services/content-generation'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security automation',
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring'],
      path: '/ai-services/cybersecurity'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns and customer segmentation',
      features: ['Customer Segmentation', 'Campaign Optimization', 'Lead Scoring', 'ROI Tracking'],
      path: '/ai-services/marketing-automation'
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Migration Services', 'Auto-scaling', 'Disaster Recovery'],
      path: '/cloud-infrastructure'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Comprehensive database design, optimization, and maintenance',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
      path: '/it-services/database-management'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions and compliance',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      path: '/it-services/cybersecurity'
    },
    {
      icon: Settings,
      title: 'IT Support',
      description: '24/7 technical support and system administration',
      features: ['Help Desk', 'Remote Support', 'System Monitoring', 'Proactive Maintenance'],
      path: '/it-services/it-support'
    },
    {
      icon: Building,
      title: 'IT Infrastructure',
      description: 'Complete infrastructure design and implementation',
      features: ['Network Design', 'Server Setup', 'Virtualization', 'Hardware Procurement'],
      path: '/it-services/it-infrastructure'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Custom mobile applications and responsive web solutions',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'API Integration', 'App Store Deployment'],
      path: '/it-infrastructure'
    }
  ];

  const microSaasServices = [
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence and reporting platform',
      features: ['Custom Dashboards', 'Data Visualization', 'Automated Reports', 'API Integration'],
      path: '/micro-saas/analytics-dashboard'
    },
    {
      icon: Bot,
      title: 'Support Bot',
      description: 'AI-powered customer service automation',
      features: ['Chatbot Integration', 'Ticket Management', 'Knowledge Base', 'Multi-channel Support'],
      path: '/micro-saas/support-bot'
    },
    {
      icon: Share,
      title: 'Social Media Manager',
      description: 'Automated social media management and scheduling',
      features: ['Content Scheduling', 'Analytics Tracking', 'Multi-platform Support', 'Engagement Tools'],
      path: '/micro-saas/social-manager'
    },
    {
      icon: Mail,
      title: 'Email Marketing Suite',
      description: 'Comprehensive email marketing and automation platform',
      features: ['Email Templates', 'Automation Workflows', 'A/B Testing', 'Analytics'],
      path: '/micro-saas/email-marketing'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Smart inventory tracking and optimization system',
      features: ['Real-time Tracking', 'Automated Reordering', 'Analytics', 'Multi-location Support'],
      path: '/micro-saas/inventory-management'
    },
    {
      icon: Target,
      title: 'Lead Scoring System',
      description: 'Intelligent lead qualification and scoring platform',
      features: ['Lead Scoring', 'CRM Integration', 'Automated Follow-up', 'Conversion Tracking'],
      path: '/micro-saas/lead-scoring'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services designed to transform your business. From AI solutions to infrastructure management, we have you covered." />
        <meta name="keywords" content="AI services, IT services, business solutions, digital transformation, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                From AI-powered automation to robust IT infrastructure, we provide end-to-end 
                solutions that drive measurable business outcomes and sustainable growth.
              </p>
            </div>
          </section>

          {/* AI Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-10 h-10 text-cyan-400 mr-3" />
                AI Services
              </h2>
              <p className="text-xl text-gray-300">Cutting-edge artificial intelligence solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="container mx-auto px-4 py-16 bg-white/5">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Cloud className="w-10 h-10 text-blue-400 mr-3" />
                IT Services
              </h2>
              <p className="text-xl text-gray-300">Reliable and scalable technology infrastructure</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SAAS Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Code className="w-10 h-10 text-green-400 mr-3" />
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300">Custom software solutions for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
                  <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">The advantages that set us apart</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">20+ years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">300% average ROI for our implementations</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business. 
                Get a free consultation and custom solution recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
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
