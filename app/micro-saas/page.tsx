'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart3, Target, TrendingUp, Globe, Database, Users, Settings, FileText, Mail, Calendar, Search, Smartphone, Code, Shield as ShieldIcon } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom report generation',
        'Export to multiple formats',
        'Team collaboration tools',
        'Mobile-responsive design'
      ],
      price: '$199/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: '/ai-analytics-dashboard'
    },
    {
      id: '2',
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automation.',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Contact management',
        'Sales pipeline tracking',
        'Email automation',
        'Performance analytics'
      ],
      price: '$149/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'CRM',
      link: '/ai-crm'
    },
    {
      id: '3',
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, and video editing.',
      features: [
        'AI writing assistant',
        'Image generation',
        'Video editing tools',
        'Social media automation',
        'SEO optimization',
        'Brand consistency'
      ],
      price: '$299/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Content',
      link: '/ai-content-studio'
    },
    {
      id: '4',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation.',
      features: [
        'No-code builder',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training',
        'Live chat integration'
      ],
      price: '$99/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support',
      link: '/ai-chatbot-builder'
    },
    {
      id: '5',
      icon: <Mail className="w-8 h-8 text-red-500" />,
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization and personalization.',
      features: [
        'AI optimization',
        'Personalization',
        'A/B testing',
        'Advanced analytics',
        'Automation workflows',
        'Template library'
      ],
      price: '$179/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Marketing',
      link: '/ai-email-marketing'
    },
    {
      id: '6',
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance and drag-and-drop interface.',
      features: [
        'Drag-and-drop builder',
        'AI code generation',
        'Instant deployment',
        'Cross-platform',
        'App Store publishing',
        'Push notifications'
      ],
      price: '$399/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      link: '/ai-mobile-app-builder'
    },
    {
      id: '7',
      icon: <Search className="w-8 h-8 text-cyan-500" />,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, and content optimization.',
      features: [
        'Keyword research',
        'Content optimization',
        'Ranking tracking',
        'Competitor analysis',
        'Technical SEO',
        'Local SEO'
      ],
      price: '$129/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'SEO',
      link: '/ai-seo-optimizer'
    },
    {
      id: '8',
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered features and payment tracking.',
      features: [
        'Automated invoicing',
        'Payment tracking',
        'Financial reports',
        'Tax calculations',
        'Client portal',
        'Multi-currency'
      ],
      price: '$79/month',
      users: 'Unlimited invoices',
      popular: false,
      category: 'Finance',
      link: '/ai-invoice-generator'
    },
    {
      id: '9',
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation.',
      features: [
        '50+ templates',
        'Multi-language support',
        'Plagiarism check',
        'SEO optimization',
        'Tone adjustment',
        'Grammar check'
      ],
      price: '$29/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Content',
      link: '/ai-writing-assistant'
    },
    {
      id: '10',
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      title: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar optimization and meeting coordination.',
      features: [
        'Calendar optimization',
        'Meeting coordination',
        'Time management',
        'Auto-scheduling',
        'Integration APIs',
        'Time zone handling'
      ],
      price: '$19/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Productivity',
      link: '/ai-scheduler'
    },
    {
      id: '11',
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      title: 'Expense Tracker',
      description: 'AI-powered expense management with receipt scanning and categorization.',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Budget insights',
        'Tax preparation',
        'Multi-currency',
        'Report generation'
      ],
      price: '$15/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Finance',
      link: '/expense-tracker'
    },
    {
      id: '12',
      icon: <Target className="w-8 h-8 text-violet-500" />,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization and team collaboration.',
      features: [
        'AI prioritization',
        'Team collaboration',
        'Progress tracking',
        'Time tracking',
        'Project templates',
        'Gantt charts'
      ],
      price: '$39/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Productivity',
      link: '/task-manager-pro'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with built-in collaboration tools'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with comprehensive analytics'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Content', 'Support', 'Marketing', 'Development', 'SEO', 'Finance', 'Productivity'];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to productivity, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View All Tools
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses with cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized tools designed for modern businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 ${
                    product.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <p className="text-sm text-gray-500">{product.users}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <Link
                      to={product.link}
                      className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200 flex items-center gap-2 text-sm"
                    >
                      Try Free
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and discover how our micro SaaS solutions can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors duration-200">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;