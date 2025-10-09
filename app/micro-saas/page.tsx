'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, CheckCircle, ArrowRight, Zap, Brain, Code, BarChart, Target, Users, Award, Shield, Globe, Clock, TrendingUp, DollarSign, Rocket, Sparkles, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, emails, and marketing materials',
      icon: FileText,
      price: '$199/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice training',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      category: 'Content Creation',
      color: 'from-pink-500 to-rose-500',
      popular: true
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and engagement without coding',
      icon: Bot,
      price: '$149/month',
      features: [
        'Drag-and-drop builder',
        'Multi-channel deployment',
        'Natural language processing',
        'Custom integrations',
        'Analytics & insights',
        'A/B testing',
        'Voice & text support',
        '24/7 availability'
      ],
      category: 'Customer Service',
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and predictions',
      icon: BarChart,
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reports',
        'Data integration',
        'Automated insights',
        'Mobile app',
        'Team collaboration',
        'API access'
      ],
      category: 'Analytics',
      color: 'from-green-500 to-emerald-500',
      popular: true
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-driven personalization and automation',
      icon: Mail,
      price: '$179/month',
      features: [
        'AI subject line optimization',
        'Send time optimization',
        'Content personalization',
        'A/B testing',
        'List segmentation',
        'Drip campaigns',
        'Performance tracking',
        'GDPR compliance'
      ],
      category: 'Marketing',
      color: 'from-purple-500 to-violet-500',
      popular: false
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Smart project management with AI-powered task optimization and team coordination',
      icon: Target,
      price: '$229/month',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Risk prediction',
        'Team collaboration',
        'Time tracking',
        'Progress monitoring',
        'Custom workflows',
        'Integration hub'
      ],
      category: 'Productivity',
      color: 'from-orange-500 to-red-500',
      popular: false
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation and scheduling',
      icon: Share2,
      price: '$159/month',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Optimal timing',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Influencer outreach',
        'Crisis management'
      ],
      category: 'Social Media',
      color: 'from-indigo-500 to-blue-500',
      popular: false
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Smart invoice creation with automated billing and payment tracking',
      icon: CreditCard,
      price: '$99/month',
      features: [
        'Automated invoicing',
        'Payment tracking',
        'Tax calculations',
        'Multi-currency support',
        'Recurring billing',
        'Client portal',
        'Expense tracking',
        'Financial reports'
      ],
      category: 'Finance',
      color: 'from-teal-500 to-green-500',
      popular: false
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Advanced SEO optimization with AI-powered keyword research and content analysis',
      icon: Search,
      price: '$189/month',
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Rank tracking',
        'Link building',
        'Local SEO',
        'Performance reports'
      ],
      category: 'SEO',
      color: 'from-yellow-500 to-orange-500',
      popular: false
    },
    {
      id: 'ai-crm',
      name: 'AI CRM System',
      description: 'Intelligent customer relationship management with AI insights and automation',
      icon: Users,
      price: '$249/month',
      features: [
        'Lead scoring',
        'Sales forecasting',
        'Customer segmentation',
        'Automated follow-ups',
        'Pipeline management',
        'Email integration',
        'Mobile app',
        'Custom fields'
      ],
      category: 'CRM',
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      description: 'Smart time tracking with AI-powered productivity insights and reporting',
      icon: Clock3,
      price: '$79/month',
      features: [
        'Automatic time tracking',
        'Productivity analysis',
        'Project billing',
        'Team monitoring',
        'Screenshots & activity',
        'Offline tracking',
        'Mobile app',
        'Detailed reports'
      ],
      category: 'Time Management',
      color: 'from-gray-500 to-slate-500',
      popular: false
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with automated categorization and receipt scanning',
      icon: Calculator,
      price: '$89/month',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Expense approval',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency',
        'Team expenses',
        'Financial insights'
      ],
      category: 'Finance',
      color: 'from-emerald-500 to-teal-500',
      popular: false
    },
    {
      id: 'ai-scheduler',
      name: 'AI Scheduler',
      description: 'Smart scheduling assistant with automated meeting coordination and optimization',
      icon: Calendar,
      price: '$119/month',
      features: [
        'Smart scheduling',
        'Calendar integration',
        'Meeting optimization',
        'Time zone handling',
        'Buffer time management',
        'Recurring meetings',
        'Team coordination',
        'Mobile sync'
      ],
      category: 'Scheduling',
      color: 'from-violet-500 to-purple-500',
      popular: false
    }
  ];

  const categories = [
    'All',
    'Content Creation',
    'Customer Service',
    'Analytics',
    'Marketing',
    'Productivity',
    'Social Media',
    'Finance',
    'SEO',
    'CRM',
    'Time Management',
    'Scheduling'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'micro_saas_phone_number',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
          isLoaded && isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-flicker-enhanced cyber-text-enhanced">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
            boost productivity, and drive growth with cutting-edge AI technology.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
            <div className="cyber-card-enhanced holographic-card quantum-field p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Instant Setup</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Get started in minutes with our plug-and-play solutions</p>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Leverage advanced AI to automate and optimize your workflows</p>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Cost-Effective</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Affordable pricing with enterprise-grade features</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white cyber-glow-enhanced'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card-enhanced holographic-card quantum-field p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 neon-flicker-enhanced">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4 cyber-glow-enhanced">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className="w-full cyber-button py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Start Free Trial
                  </button>
                  <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card-enhanced p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  3 Micro SAAS Apps
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Analytics
                </li>
              </ul>
              <button className="w-full cyber-button py-3 rounded-lg font-medium">
                Get Started
              </button>
            </div>

            <div className="cyber-card-enhanced p-8 text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Apps
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <button className="w-full cyber-button py-3 rounded-lg font-medium">
                Get Started
              </button>
            </div>

            <div className="cyber-card-enhanced p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Everything in Pro
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise Deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="w-full cyber-button py-3 rounded-lg font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card-enhanced p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button px-8 py-3 text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button px-8 py-3 text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;
