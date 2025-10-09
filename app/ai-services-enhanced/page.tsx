'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/EnhancedNavigation';
import Footer from '../components/EnhancedFooter';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Mic,
  Video,
  DollarSign,
  Code,
  BarChart,
  Users,
  Target,
  Settings,
  Database,
  Cpu,
  FileText,
  Calendar,
  TrendingUp,
  Lock,
  Smartphone,
  Image,
  Music,
  Hash,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube
} from 'lucide-react';

const AIServicesEnhancedPage: React.FC = () => {
  const aiServiceCategories = [
    {
      title: 'AI Voice & Communication',
      icon: Mic,
      color: 'from-purple-500 to-pink-600',
      services: [
        {
          name: 'AI Voice Assistant',
          description: 'Intelligent voice solutions with 99.5% accuracy in 50+ languages',
          price: '$199/month',
          features: ['Natural voice recognition', 'Multi-language support', 'Custom voice synthesis', 'Real-time translation'],
          icon: Mic,
          path: '/ai-voice-assistant'
        },
        {
          name: 'AI Customer Support',
          description: '24/7 AI-powered customer service with human-like interactions',
          price: '$299/month',
          features: ['Instant responses', 'Context awareness', 'Escalation handling', 'Multi-channel support'],
          icon: Users,
          path: '/ai-customer-support'
        },
        {
          name: 'AI Email Assistant',
          description: 'Smart email management and automated responses',
          price: '$149/month',
          features: ['Auto-categorization', 'Smart replies', 'Priority detection', 'Spam filtering'],
          icon: Mail,
          path: '/ai-email-assistant'
        }
      ]
    },
    {
      title: 'AI Content & Marketing',
      icon: FileText,
      color: 'from-blue-500 to-cyan-600',
      services: [
        {
          name: 'AI Content Generation',
          description: 'Create high-quality content for blogs, social media, and marketing',
          price: '$199/month',
          features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization'],
          icon: FileText,
          path: '/ai-content-generation'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media management across all platforms',
          price: '$99/month',
          features: ['Content scheduling', 'Engagement tracking', 'Hashtag optimization', 'Analytics'],
          icon: Instagram,
          path: '/ai-social-media-manager'
        },
        {
          name: 'AI Video Creator',
          description: 'Generate professional videos with AI automation',
          price: '$99/month',
          features: ['Auto editing', 'AI voiceover', 'Template library', 'Multi-format export'],
          icon: Video,
          path: '/ai-video-creator'
        }
      ]
    },
    {
      title: 'AI Business Intelligence',
      icon: BarChart,
      color: 'from-green-500 to-teal-600',
      services: [
        {
          name: 'AI Data Analytics',
          description: 'Advanced data analysis and predictive insights',
          price: '$399/month',
          features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
          icon: BarChart,
          path: '/ai-data-analytics'
        },
        {
          name: 'AI Financial Planner',
          description: 'Smart financial planning and investment optimization',
          price: '$49/month',
          features: ['Portfolio optimization', 'Goal tracking', 'Risk analysis', 'Tax planning'],
          icon: DollarSign,
          path: '/ai-financial-planner'
        },
        {
          name: 'AI Lead Generation',
          description: 'Automated lead identification and qualification',
          price: '$299/month',
          features: ['Prospect identification', 'Lead scoring', 'Contact enrichment', 'CRM integration'],
          icon: Target,
          path: '/ai-lead-generation'
        }
      ]
    },
    {
      title: 'AI Development & Automation',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      services: [
        {
          name: 'AI Code Generator',
          description: 'Generate code 10x faster in 50+ programming languages',
          price: '$79/month',
          features: ['50+ languages', 'Auto completion', 'Documentation', 'Bug detection'],
          icon: Code,
          path: '/ai-code-generator'
        },
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent process automation and optimization',
          price: '$399/month',
          features: ['Process mapping', 'Automation design', 'Exception handling', 'Performance monitoring'],
          icon: Settings,
          path: '/ai-workflow-automation'
        },
        {
          name: 'AI Testing & QA',
          description: 'Automated testing and quality assurance',
          price: '$199/month',
          features: ['Test generation', 'Bug detection', 'Performance testing', 'Regression testing'],
          icon: Shield,
          path: '/ai-testing-qa'
        }
      ]
    },
    {
      title: 'AI Industry Solutions',
      icon: Building,
      color: 'from-indigo-500 to-purple-600',
      services: [
        {
          name: 'AI Healthcare',
          description: 'Medical AI solutions for diagnosis and treatment',
          price: '$1,999/month',
          features: ['Medical imaging', 'Drug discovery', 'Patient monitoring', 'Clinical decision support'],
          icon: Shield,
          path: '/ai-healthcare'
        },
        {
          name: 'AI Fintech',
          description: 'Financial AI for trading and risk management',
          price: '$1,499/month',
          features: ['Algorithmic trading', 'Fraud detection', 'Risk assessment', 'Compliance monitoring'],
          icon: TrendingUp,
          path: '/ai-fintech'
        },
        {
          name: 'AI E-commerce',
          description: 'E-commerce optimization and personalization',
          price: '$599/month',
          features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights'],
          icon: ShoppingCart,
          path: '/ai-ecommerce-solutions'
        }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 AI services',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        '1 user account',
        'Basic analytics'
      ],
      popular: false,
      color: 'border-gray-600'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 15 AI services',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Team collaboration (5 users)',
        'Advanced analytics',
        'API access',
        'Custom training'
      ],
      popular: true,
      color: 'border-cyan-400'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited AI services',
        'Custom AI development',
        '24/7 dedicated support',
        'White-label solutions',
        'Unlimited team members',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      color: 'border-purple-400'
    }
  ];

  const benefits = [
    {
      title: '300% Average ROI',
      description: 'Our clients see an average return of 300% on their AI investments',
      icon: TrendingUp,
      metric: '300%'
    },
    {
      title: '99.9% Uptime',
      description: 'Enterprise-grade reliability with 99.9% uptime guarantee',
      icon: Shield,
      metric: '99.9%'
    },
    {
      title: '50+ Languages',
      description: 'Support for 50+ languages across all our AI services',
      icon: Globe,
      metric: '50+'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our AI experts',
      icon: Clock,
      metric: '24/7'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Comprehensive AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including voice assistants, content generation, data analytics, and industry-specific solutions. Starting at $199/month." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI development, AI automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services-enhanced" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-effect">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch">
              AI Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Comprehensive Artificial Intelligence Solutions
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive AI services. From voice assistants to data analytics, 
              we provide cutting-edge AI solutions tailored to your industry and needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Brain className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <div className="text-gray-300">{benefit.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Service Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Our AI Service Categories
            </h2>
            <div className="space-y-16">
              {aiServiceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="cyber-card-advanced p-8">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300 text-lg">Advanced AI solutions for {category.title.toLowerCase()}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{service.name}</h4>
                            <div className="text-cyan-400 font-semibold">{service.price}</div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={service.path}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Choose Your AI Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card-advanced p-8 relative ${tier.popular ? 'border-2 border-cyan-400 scale-105' : `border ${tier.color}`}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'cyber-button-enhanced'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1,000+ companies already using our AI services to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Your AI Journey
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIServicesEnhancedPage;