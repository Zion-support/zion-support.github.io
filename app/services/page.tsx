'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with advanced AI analytics',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning', 'Data Visualization'],
      path: '/ai-services/business-intelligence',
      pricing: 'Starting at $2,999/month'
    },
    {
      icon: Bot,
      title: 'AI Customer Support',
      description: '24/7 intelligent customer service with natural language processing',
      features: ['Chatbot Integration', 'Multi-language Support', 'Sentiment Analysis', 'Automated Responses'],
      path: '/ai-services/customer-support-bot',
      pricing: 'Starting at $1,499/month'
    },
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Accelerate development with AI-powered code generation and review',
      features: ['Code Generation', 'Automated Testing', 'Security Scanning', 'Performance Optimization'],
      path: '/ai-services/code-generation',
      pricing: 'Starting at $3,999/month'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for quality control and automation',
      features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Real-time Processing'],
      path: '/ai-services/image-recognition',
      pricing: 'Starting at $4,999/month'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with ML models',
      features: ['Time Series Forecasting', 'Risk Assessment', 'Demand Planning', 'Custom Models'],
      path: '/ai-services/predictive-analytics',
      pricing: 'Starting at $2,499/month'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Personalize customer experiences and optimize marketing campaigns',
      features: ['Customer Segmentation', 'Content Personalization', 'Campaign Optimization', 'ROI Tracking'],
      path: '/ai-services/marketing-automation',
      pricing: 'Starting at $1,999/month'
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', '24/7 Monitoring'],
      path: '/cloud-infrastructure',
      pricing: 'Starting at $1,999/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Security Audits', 'Incident Response'],
      path: '/cybersecurity',
      pricing: 'Starting at $2,499/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and secure your databases with expert management',
      features: ['Performance Optimization', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
      path: '/database-management',
      pricing: 'Starting at $1,299/month'
    },
    {
      icon: Users,
      title: 'Managed IT Services',
      description: 'Complete IT management to keep your systems running smoothly',
      features: ['24/7 Support', 'Proactive Monitoring', 'Software Updates', 'Help Desk'],
      path: '/managed-it',
      pricing: 'Starting at $1,599/month'
    }
  ];

  const microSaasServices = [
    {
      icon: BarChart,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with customizable dashboards',
      features: ['Real-time Data', 'Custom Widgets', 'Automated Alerts', 'Export Options'],
      path: '/micro-saas/analytics-dashboard',
      pricing: 'Starting at $99/month'
    },
    {
      icon: Bot,
      title: 'AI Social Media Manager',
      description: 'Automate social media posting and engagement across platforms',
      features: ['Multi-platform Posting', 'Content Scheduling', 'Engagement Tracking', 'AI Suggestions'],
      path: '/micro-saas/social-manager',
      pricing: 'Starting at $199/month'
    },
    {
      icon: Mail,
      title: 'Intelligent Email Marketing',
      description: 'AI-powered email campaigns with personalization and automation',
      features: ['Email Automation', 'A/B Testing', 'Personalization', 'Analytics'],
      path: '/micro-saas/email-marketing',
      pricing: 'Starting at $149/month'
    },
    {
      icon: Database,
      title: 'Inventory Management',
      description: 'Smart inventory tracking with predictive restocking',
      features: ['Real-time Tracking', 'Predictive Analytics', 'Automated Reordering', 'Multi-location'],
      path: '/micro-saas/inventory-management',
      pricing: 'Starting at $299/month'
    },
    {
      icon: Calendar,
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling that optimizes bookings and reduces no-shows',
      features: ['Automated Scheduling', 'Calendar Integration', 'Reminder System', 'Analytics'],
      path: '/micro-saas/appointment-scheduler',
      pricing: 'Starting at $79/month'
    },
    {
      icon: FileText,
      title: 'Document Processing AI',
      description: 'Automatically extract and process documents with intelligent OCR',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation'],
      path: '/micro-saas/document-processor',
      pricing: 'Starting at $199/month'
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services designed to transform your business. From AI solutions to infrastructure management, we have you covered." />
        <meta name="keywords" content="AI services, IT services, business solutions, digital transformation, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-cyan-400 mb-8">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
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
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105">
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold mb-4">{service.pricing}</div>
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
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 group hover:scale-105">
                  <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-green-400 font-semibold mb-4">{service.pricing}</div>
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