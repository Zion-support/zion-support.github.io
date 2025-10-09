'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, PieChart, Activity, AlertCircle, Settings, Users2, Target as TargetIcon, BarChart3, Clock3, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Compass, Globe2, Map, Navigation as NavigationIcon, TrendingDown } from 'lucide-react';

const PricingPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Services',
      description: 'Comprehensive AI solutions for every business need',
      price: '$1,500/month',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      popular: false
    },
    {
      name: 'AI Marketing',
      description: 'Revolutionary AI-powered marketing automation',
      price: '$199/month',
      features: ['Ad Optimization', 'Content Generation', 'Customer Segmentation', 'Performance Analytics'],
      popular: true
    },
    {
      name: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      price: '$399/month',
      features: ['Process Automation', 'AI Decision Making', 'Performance Analytics', 'Custom Integrations'],
      popular: false
    },
    {
      name: 'AI Healthcare',
      description: 'Cutting-edge AI solutions for medical imaging and drug discovery',
      price: '$1,999/month',
      features: ['Medical Imaging', 'Drug Discovery', 'Personalized Medicine', 'Clinical Decision Support'],
      popular: false
    },
    {
      name: 'AI Fintech',
      description: 'Revolutionary AI-powered financial services',
      price: '$1,499/month',
      features: ['Trading Algorithms', 'Fraud Detection', 'Risk Management', 'Credit Scoring'],
      popular: false
    },
    {
      name: 'AI Project Management',
      description: 'Intelligent project management with AI-powered insights',
      price: '$199/month',
      features: ['Task Prioritization', 'Resource Allocation', 'Predictive Analytics', 'Team Collaboration'],
      popular: false
    },
    {
      name: 'AI Inventory Management',
      description: 'Smart inventory optimization with demand forecasting',
      price: '$299/month',
      features: ['Demand Forecasting', 'Automated Reordering', 'Real-time Tracking', 'Cost Optimization'],
      popular: false
    },
    {
      name: 'AI HR Management',
      description: 'Intelligent HR management with AI-powered recruitment',
      price: '$399/month',
      features: ['Candidate Screening', 'Performance Analytics', 'Employee Engagement', 'Automated Onboarding'],
      popular: false
    },
    {
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive analytics with machine learning',
      price: '$599/month',
      features: ['Machine Learning Models', 'Real-time Processing', 'Custom Analytics', 'API Integration'],
      popular: false
    }
  ];

  const itServices = [
    {
      name: 'IT Services',
      description: 'Comprehensive IT support and infrastructure management',
      price: '$1,200/month',
      features: ['24/7 Support', 'Infrastructure Management', 'Security Monitoring', 'Performance Optimization'],
      popular: false
    },
    {
      name: 'Cloud Migration',
      description: 'Expert cloud migration with zero-downtime strategies',
      price: '$2,999+',
      features: ['Migration Planning', 'Zero Downtime', 'Cost Optimization', '24/7 Support'],
      popular: true
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions and threat protection',
      price: '$799/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      popular: false
    },
    {
      name: 'DevOps & CI/CD',
      description: 'Streamline development and deployment processes',
      price: '$599/month',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      popular: false
    },
    {
      name: 'Database Services',
      description: 'Database design, optimization, and management',
      price: '$499/month',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      popular: false
    }
  ];

  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management',
      price: '$149/month',
      features: ['AI Insights', 'Automated Follow-ups', 'Predictive Analytics', 'Custom Integrations'],
      popular: false
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI insights',
      price: '$199/month',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
      popular: true
    },
    {
      name: 'AI Content Studio',
      description: 'Complete content creation suite with AI',
      price: '$299/month',
      features: ['AI Writing', 'Image Generation', 'Video Editing', 'Social Media Automation'],
      popular: false
    },
    {
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots with no coding',
      price: '$99/month',
      features: ['No-Code Builder', 'Multi-channel Support', 'Analytics', 'Custom Training'],
      popular: false
    },
    {
      name: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization',
      price: '$179/month',
      features: ['Smart Segmentation', 'A/B Testing', 'Personalization', 'Advanced Analytics'],
      popular: false
    },
    {
      name: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance',
      price: '$399/month',
      features: ['Drag & Drop Builder', 'iOS & Android', 'AI Integration', 'Instant Deployment'],
      popular: false
    }
  ];

  const emergingTech = [
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      price: 'Custom',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development'],
      popular: false
    },
    {
      name: 'Blockchain & Web3',
      description: 'Decentralized solutions and smart contracts',
      price: '$1,999/month',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'DApp Development'],
      popular: false
    },
    {
      name: 'Autonomous Systems',
      description: 'Self-managing intelligent systems',
      price: 'Custom',
      features: ['Autonomous Vehicles', 'Smart Infrastructure', 'IoT Integration', 'Machine Learning'],
      popular: false
    },
    {
      name: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      price: '$1,499/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - Zion Tech Group AI & IT Solutions"
        description="Transparent pricing for AI services, IT solutions, and micro SAAS applications. Choose the perfect plan for your business needs with flexible pricing options."
        keywords={['pricing', 'AI services pricing', 'IT services cost', 'micro SAAS pricing', 'technology solutions pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Choose the perfect plan for your business needs
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Flexible pricing options for AI services, IT solutions, and micro SAAS applications. 
                All plans include 24/7 support and can be customized to your specific requirements.
              </p>
            </div>
          </section>

          {/* AI Services Pricing */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                AI Services Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                      className="w-full cyber-button text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Pricing */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                IT Services Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                      className="w-full cyber-button text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Pricing */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Micro SAAS Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasServices.map((service, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                      className="w-full cyber-button text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Emerging Technologies Pricing */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Emerging Technologies Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {emergingTech.map((service, index) => (
                  <div key={index} className="cyber-card p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                      className="w-full cyber-button text-center block"
                    >
                      Contact Us
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enterprise Solutions */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="cyber-card p-12 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Enterprise Solutions
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Need a custom solution? We offer tailored enterprise packages with dedicated support, 
                  custom integrations, and SLA guarantees.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">Custom</div>
                    <div className="text-gray-300">Pricing based on requirements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                    <div className="text-gray-300">Dedicated support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime guarantee</div>
                  </div>
                </div>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry"
                  className="cyber-button inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Enterprise Sales</span>
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation and custom pricing quote
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

export default PricingPage;