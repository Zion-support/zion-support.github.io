

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, Award, Code, Database, Settings, Monitor } from 'lucide-react';

export default function MicroSaasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management platform with AI-powered insights, automated task allocation, and predictive analytics',
      features: [
        'AI-powered task prioritization',
        'Automated resource allocation',
        'Predictive project timeline analysis',
        'Real-time collaboration tools',
        'Advanced reporting & analytics',
        'Integration with 50+ tools'
      ],
      pricing: {
        starter: { price: '$29', period: '/month', features: ['Up to 5 projects', 'Basic AI insights', 'Email support'] },
        professional: { price: '$79', period: '/month', features: ['Up to 25 projects', 'Advanced AI', 'Priority support', 'Custom integrations'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited projects', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Target,
      color: 'from-blue-500 to-cyan-600',
      category: 'productivity',
      popular: true,
      users: '10,000+',
      rating: 4.9
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, optimal posting times, and engagement analytics',
      features: [
        'AI content generation for all platforms',
        'Optimal posting time recommendations',
        'Hashtag optimization & research',
        'Engagement analytics & insights',
        'Automated posting & scheduling',
        'Multi-platform management'
      ],
      pricing: {
        starter: { price: '$19', period: '/month', features: ['3 social accounts', 'Basic AI content', 'Email support'] },
        professional: { price: '$49', period: '/month', features: ['10 social accounts', 'Advanced AI', 'Priority support', 'Analytics dashboard'] },
        enterprise: { price: '$99', period: '/month', features: ['Unlimited accounts', 'Custom AI training', 'Dedicated support', 'White-label option'] }
      },
      icon: MessageSquare,
      color: 'from-pink-500 to-purple-600',
      category: 'marketing',
      popular: true,
      users: '15,000+',
      rating: 4.8
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and custom dashboards',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard creation',
        'Automated report generation',
        'Data source integration',
        'Mobile-responsive design'
      ],
      pricing: {
        starter: { price: '$39', period: '/month', features: ['5 data sources', 'Basic dashboards', 'Email support'] },
        professional: { price: '$89', period: '/month', features: ['Unlimited sources', 'Advanced analytics', 'Priority support', 'API access'] },
        enterprise: { price: '$199', period: '/month', features: ['Custom analytics', 'Dedicated support', 'White-label option', 'SLA guarantee'] }
      },
      icon: BarChart,
      color: 'from-green-500 to-emerald-600',
      category: 'analytics',
      popular: true,
      users: '8,500+',
      rating: 4.9
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Platform',
      description: 'Intelligent email marketing automation with AI content generation, send time optimization, and advanced segmentation',
      features: [
        'AI email content generation',
        'Send time optimization',
        'Advanced audience segmentation',
        'A/B testing automation',
        'Deliverability optimization',
        'Comprehensive analytics'
      ],
      pricing: {
        starter: { price: '$25', period: '/month', features: ['Up to 5,000 contacts', 'Basic AI features', 'Email support'] },
        professional: { price: '$65', period: '/month', features: ['Up to 25,000 contacts', 'Advanced AI', 'Priority support', 'Custom templates'] },
        enterprise: { price: '$149', period: '/month', features: ['Unlimited contacts', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Mail,
      color: 'from-orange-500 to-red-600',
      category: 'marketing',
      popular: false,
      users: '12,000+',
      rating: 4.7
    },
    {
      id: 'ai-customer-support-bot',
      title: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support chatbot with natural language processing and seamless human handoff',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Knowledge base integration',
        'Human handoff capabilities',
        'Sentiment analysis',
        'Performance analytics'
      ],
      pricing: {
        starter: { price: '$35', period: '/month', features: ['Up to 1,000 conversations', 'Basic AI responses', 'Email support'] },
        professional: { price: '$85', period: '/month', features: ['Up to 10,000 conversations', 'Advanced AI', 'Priority support', 'Custom training'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited conversations', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: MessageSquare,
      color: 'from-purple-500 to-indigo-600',
      category: 'support',
      popular: true,
      users: '20,000+',
      rating: 4.8
    },
    {
      id: 'ai-code-review-assistant',
      title: 'AI Code Review Assistant',
      description: 'Automated code review and quality analysis with AI-powered suggestions, security scanning, and performance optimization',
      features: [
        'Automated code review',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality scoring',
        'Integration with Git platforms',
        'Team collaboration tools'
      ],
      pricing: {
        starter: { price: '$45', period: '/month', features: ['Up to 5 repositories', 'Basic analysis', 'Email support'] },
        professional: { price: '$99', period: '/month', features: ['Up to 25 repositories', 'Advanced analysis', 'Priority support', 'Custom rules'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited repositories', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      category: 'development',
      popular: false,
      users: '5,000+',
      rating: 4.9
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Complete content creation suite with AI writing, image generation, and SEO optimization for all content types',
      features: [
        'AI writing for all content types',
        'Image generation & editing',
        'SEO optimization',
        'Brand voice consistency',
        'Content scheduling',
        'Plagiarism detection'
      ],
      pricing: {
        starter: { price: '$29', period: '/month', features: ['Up to 100 pieces/month', 'Basic AI writing', 'Email support'] },
        professional: { price: '$69', period: '/month', features: ['Up to 1,000 pieces/month', 'Advanced AI', 'Priority support', 'Custom templates'] },
        enterprise: { price: '$149', period: '/month', features: ['Unlimited content', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Eye,
      color: 'from-yellow-500 to-orange-600',
      category: 'content',
      popular: true,
      users: '25,000+',
      rating: 4.8
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered keyword research, content optimization, and rank tracking',
      features: [
        'AI keyword research & analysis',
        'Content optimization suggestions',
        'Rank tracking & monitoring',
        'Competitor analysis',
        'Technical SEO audits',
        'Performance reporting'
      ],
      pricing: {
        starter: { price: '$39', period: '/month', features: ['Up to 5 websites', 'Basic SEO tools', 'Email support'] },
        professional: { price: '$89', period: '/month', features: ['Up to 25 websites', 'Advanced SEO', 'Priority support', 'Custom reports'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited websites', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Target,
      color: 'from-green-500 to-teal-600',
      category: 'marketing',
      popular: false,
      users: '7,500+',
      rating: 4.7
    },
    {
      id: 'ai-invoice-generator',
      title: 'AI Invoice Generator',
      description: 'Automated invoicing platform with AI-powered templates, payment tracking, and financial analytics',
      features: [
        'AI-powered invoice templates',
        'Automated payment reminders',
        'Payment tracking & analytics',
        'Multi-currency support',
        'Client management',
        'Financial reporting'
      ],
      pricing: {
        starter: { price: '$19', period: '/month', features: ['Up to 50 invoices/month', 'Basic templates', 'Email support'] },
        professional: { price: '$49', period: '/month', features: ['Up to 500 invoices/month', 'Advanced features', 'Priority support', 'Custom branding'] },
        enterprise: { price: '$99', period: '/month', features: ['Unlimited invoices', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: FileText,
      color: 'from-indigo-500 to-purple-600',
      category: 'finance',
      popular: false,
      users: '6,000+',
      rating: 4.6
    },
    {
      id: 'ai-time-tracker',
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with AI-powered productivity insights, automatic task detection, and team analytics',
      features: [
        'Automatic time tracking',
        'AI productivity insights',
        'Team performance analytics',
        'Project time allocation',
        'Billing & invoicing integration',
        'Mobile app support'
      ],
      pricing: {
        starter: { price: '$15', period: '/month', features: ['Up to 5 users', 'Basic tracking', 'Email support'] },
        professional: { price: '$39', period: '/month', features: ['Up to 25 users', 'Advanced analytics', 'Priority support', 'Custom reports'] },
        enterprise: { price: '$79', period: '/month', features: ['Unlimited users', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Clock,
      color: 'from-red-500 to-pink-600',
      category: 'productivity',
      popular: true,
      users: '18,000+',
      rating: 4.8
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense management with AI receipt scanning, automatic categorization, and financial insights',
      features: [
        'AI receipt scanning',
        'Automatic categorization',
        'Expense analytics & insights',
        'Receipt storage & management',
        'Budget tracking & alerts',
        'Export & reporting'
      ],
      pricing: {
        starter: { price: '$12', period: '/month', features: ['Up to 100 receipts/month', 'Basic scanning', 'Email support'] },
        professional: { price: '$29', period: '/month', features: ['Up to 1,000 receipts/month', 'Advanced AI', 'Priority support', 'Custom categories'] },
        enterprise: { price: '$59', period: '/month', features: ['Unlimited receipts', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Database,
      color: 'from-emerald-500 to-green-600',
      category: 'finance',
      popular: false,
      users: '9,000+',
      rating: 4.7
    },
    {
      id: 'ai-scheduler',
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling platform with AI-powered meeting optimization, conflict resolution, and calendar management',
      features: [
        'AI meeting optimization',
        'Automatic conflict resolution',
        'Smart scheduling suggestions',
        'Calendar integration',
        'Team availability tracking',
        'Meeting analytics'
      ],
      pricing: {
        starter: { price: '$25', period: '/month', features: ['Up to 10 users', 'Basic scheduling', 'Email support'] },
        professional: { price: '$59', period: '/month', features: ['Up to 50 users', 'Advanced AI', 'Priority support', 'Custom rules'] },
        enterprise: { price: '$119', period: '/month', features: ['Unlimited users', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Calendar,
      color: 'from-violet-500 to-purple-600',
      category: 'productivity',
      popular: true,
      users: '14,000+',
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'productivity', name: 'Productivity', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'content', name: 'Content', icon: Eye },
    { id: 'finance', name: 'Finance', icon: Database }
  ];

  const filteredServices = useMemo(() => {
    return microSaasServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const stats = [
    { icon: Users, value: '150,000+', label: 'Active Users', color: 'text-cyan-400' },
    { icon: TrendingUp, value: '95%', label: 'Customer Satisfaction', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-blue-400' },
    { icon: Award, value: '50+', label: 'Micro SAAS Solutions', color: 'text-purple-400' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions for productivity, marketing, analytics, and more. Start from $12/month with 24/7 support." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, analytics dashboard, project management" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SAAS solutions. Boost productivity, automate marketing, and gain insights with our comprehensive tool suite." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="holographic-text cyber-text">Micro SAAS Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful AI-driven micro SAAS tools designed to streamline your business operations. 
                Start from $12/month with 24/7 support and instant setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="lg:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Our Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of AI-powered micro SAAS tools designed to boost your business productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className={`quantum-card p-6 ${service.popular ? 'energy-pulse' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        Popular
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{service.users} users</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center text-sm">
                          <span className="text-gray-300 capitalize">{tier}</span>
                          <span className="text-cyan-400 font-bold">{details.price}{details.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 cyber-button text-center py-2 text-sm"
                    >
                      Get Started
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-slate-800 text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-center text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Business with Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 150,000+ users already using our micro SAAS solutions to streamline their business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
