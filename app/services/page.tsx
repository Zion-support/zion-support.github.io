'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  MessageSquare, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Lock, 
  TrendingUp, 
  Target, 
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink,
  Phone,
  Clock,
  Award,
  DollarSign,
  Percent,
  Calendar,
  Headphones
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Comprehensive artificial intelligence solutions for modern businesses',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      services: [
        {
          name: 'AI Content Generation',
          description: 'Revolutionary AI-powered content creation for blogs, social media, emails, and marketing materials.',
          price: '$199',
          period: '/month',
          features: ['50+ Content Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Checker', 'Social Media Scheduling', 'Analytics Dashboard', 'API Access'],
          popular: true
        },
        {
          name: 'AI Marketing Automation',
          description: 'Intelligent marketing automation with personalization, A/B testing, and advanced analytics.',
          price: '$299',
          period: '/month',
          features: ['AI Personalization', 'A/B Testing', 'Send Time Optimization', 'Subject Line AI', 'List Segmentation', 'Drip Campaigns', 'Analytics Dashboard', 'Integration Hub'],
          popular: false
        },
        {
          name: 'AI Customer Support',
          description: 'Intelligent customer support automation with natural language processing and multi-channel integration.',
          price: '$399',
          period: '/month',
          features: ['24/7 Customer Support', 'Multi-language Support', 'CRM Integration', 'Sentiment Analysis', 'Live Chat Handoff', 'Knowledge Base', 'Custom Training', 'Analytics & Reports'],
          popular: true
        },
        {
          name: 'AI Data Analytics',
          description: 'Advanced data analysis and visualization with predictive insights and automated reporting.',
          price: '$249',
          period: '/month',
          features: ['Predictive Analytics', 'Data Visualization', 'Automated Reports', 'Real-time Dashboards', 'Data Import/Export', 'Custom Metrics', 'Alert System', 'API Integration'],
          popular: false
        }
      ]
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Enterprise-grade IT solutions and infrastructure management',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      services: [
        {
          name: 'Cloud Infrastructure',
          description: 'Enterprise-grade cloud infrastructure with 99.9% uptime guarantee and 24/7 expert support.',
          price: '$999',
          period: '/month',
          features: ['99.9% Uptime SLA', '24/7 Monitoring', 'Auto-scaling', 'Disaster Recovery', 'Security Compliance', 'Performance Optimization', 'Cost Management', 'Expert Support'],
          popular: true
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
          price: '$299',
          period: '/month',
          features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Scanning', 'Performance Optimization', 'Team Collaboration', 'Documentation'],
          popular: false
        },
        {
          name: 'Database Services',
          description: 'Database design, optimization, migration, and management with AI-powered performance tuning.',
          price: '$199',
          period: '/month',
          features: ['Database Design', 'Performance Tuning', 'Migration Services', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Query Optimization', '24/7 Support'],
          popular: false
        },
        {
          name: 'Cybersecurity',
          description: 'Advanced security scanning and vulnerability assessment with automated threat detection.',
          price: '$799',
          period: '/month',
          features: ['Vulnerability Scanning', 'Threat Detection', 'Compliance Checking', 'Penetration Testing', 'Security Reports', 'Real-time Monitoring', 'Incident Response', 'Team Notifications'],
          popular: true
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Affordable, powerful AI-driven tools for modern businesses',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      services: [
        {
          name: 'AI Design Studio',
          description: 'Professional AI-powered design tools for logos, graphics, and visual content creation.',
          price: '$149',
          period: '/month',
          features: ['50+ Art Styles', 'High-Resolution Output', 'Batch Processing', 'Background Removal', 'Style Transfer', 'Commercial License', 'API Integration', 'Cloud Storage'],
          popular: true
        },
        {
          name: 'AI Video Editor',
          description: 'Automated video editing with AI-powered features, auto-captioning, and professional templates.',
          price: '$399',
          period: '/month',
          features: ['Auto Video Editing', 'AI Caption Generation', 'Voice Synthesis', 'Background Music', 'Transitions & Effects', '4K Export', 'Social Media Formats', 'Collaboration Tools'],
          popular: false
        },
        {
          name: 'AI Mobile App Builder',
          description: 'No-code mobile app development with AI-powered features and cross-platform deployment.',
          price: '$499',
          period: '/month',
          features: ['No-Code Development', 'Cross-Platform', 'AI Features Integration', 'App Store Publishing', 'Push Notifications', 'Analytics Integration', 'Custom Backend', 'White-label Options'],
          popular: true
        },
        {
          name: 'AI Website Builder',
          description: 'Intelligent website creation with AI design suggestions, SEO optimization, and performance monitoring.',
          price: '$299',
          period: '/month',
          features: ['AI Design Suggestions', 'SEO Optimization', 'Performance Monitoring', 'E-commerce Integration', 'Custom Domains', 'SSL Certificates', 'CDN Integration', 'Analytics Dashboard'],
          popular: false
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      description: 'Cutting-edge technology solutions for the future',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
          price: 'Custom',
          period: 'Pricing',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support', 'Custom Solutions', 'Expert Consultation', 'Training Programs'],
          popular: false
        },
        {
          name: 'Blockchain & Web3',
          description: 'Decentralized solutions, smart contracts, and Web3 applications for the future of business.',
          price: '$699',
          period: '/month',
          features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'DApp Development', 'Token Economics', 'Security Audits', 'Integration Services', 'Consulting'],
          popular: false
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Connected devices and edge computing solutions for smart cities and industrial automation.',
          price: '$499',
          period: '/month',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Protocols', 'Cloud Integration', 'Monitoring Dashboard', 'Custom Hardware', 'Support Services'],
          popular: false
        },
        {
          name: 'Autonomous Systems',
          description: 'Self-managing systems with AI decision-making capabilities and exception handling.',
          price: '$899',
          period: '/month',
          features: ['Autonomous Operations', 'Decision Making', 'Exception Handling', 'Learning Algorithms', 'Performance Monitoring', 'Safety Protocols', 'Integration APIs', 'Maintenance Support'],
          popular: true
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '5 AI Services',
        'Basic Support',
        'Standard Features',
        'Email Support',
        'Basic Analytics',
        '1 User Account'
      ],
      popular: false,
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        '15 AI Services',
        'Priority Support',
        'Advanced Features',
        'Phone & Email Support',
        'Advanced Analytics',
        '5 User Accounts',
        'API Access',
        'Custom Integrations'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited Services',
        '24/7 Support',
        'Custom Features',
        'Dedicated Account Manager',
        'Enterprise Analytics',
        'Unlimited Users',
        'Full API Access',
        'White-label Options',
        'Custom Development',
        'SLA Guarantee'
      ],
      popular: false,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('ai-services');

  const currentCategory = serviceCategories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <SEOOptimizer
        title="AI & IT Services - Zion Tech Group"
        description="Comprehensive AI and IT services with transparent pricing. From AI automation to cloud infrastructure, we provide enterprise-grade solutions for modern businesses."
        keywords={['AI services', 'IT services', 'cloud infrastructure', 'automation', 'cybersecurity', 'pricing']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Comprehensive AI & IT Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of AI and IT services. 
              From micro SAAS applications to enterprise solutions, we have everything you need to succeed.
            </p>
            
            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </section>

          {/* Service Categories */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-lg text-left transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'quantum-card energy-pulse'
                      : 'cyber-card hologram-card hover:scale-105'
                  }`}
                >
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className={`w-6 h-6 ${category.textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </button>
              ))}
            </div>

            {/* Selected Category Services */}
            {currentCategory && (
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center neon-text">
                  {currentCategory.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentCategory.services.map((service, index) => (
                    <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                      </div>
                      
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">
                          {service.price}
                          <span className="text-lg text-gray-400">{service.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-center">
                        <a
                          href={`/contact?service=${service.name}`}
                          className={`inline-block w-full py-2 px-4 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${currentCategory.color} hover:shadow-lg`}
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Pricing Plans */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`p-8 rounded-lg text-center relative ${
                  plan.popular ? 'quantum-card energy-pulse' : 'cyber-card hologram-card'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`inline-block w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${plan.color} hover:shadow-lg`}
                  >
                    Choose Plan
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card hologram-card p-6 text-center">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Industry Leader</h3>
                <p className="text-gray-300 text-sm">Recognized as a leading provider of AI and IT solutions with 4+ years of experience.</p>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Secure & Compliant</h3>
                <p className="text-gray-300 text-sm">Bank-level security with SOC 2 compliance and enterprise-grade data protection.</p>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <Headphones className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300 text-sm">Round-the-clock expert support to ensure your systems run smoothly at all times.</p>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm">Delivering $50M+ annual savings and 300% ROI for our enterprise clients.</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a customized solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card hologram-card p-6 text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 mb-4">We're here to help</p>
                <p className="text-cyan-400 font-semibold">Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>

            <div className="cyber-card hologram-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Get Free Consultation</h3>
              <p className="text-gray-300 mb-6">
                Schedule a free 30-minute consultation to discuss your business needs and discover 
                which services are perfect for you.
              </p>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                Schedule Free Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;