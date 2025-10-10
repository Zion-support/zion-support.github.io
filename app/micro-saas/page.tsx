'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3, Target, Rocket, Zap, TrendingUp, Brain, Settings, Database, Globe, Smartphone, Lock, FileText, MessageSquare, Calendar, CheckSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      description: 'Real-time analytics and insights powered by artificial intelligence for data-driven decisions',
      features: [
        'Real-time data visualization',
        'AI-powered insights and predictions',
        'Custom report generation',
        'Team collaboration tools',
        'Mobile-responsive design',
        'API integrations'
      ],
      price: '$49/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: '2',
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Smart CRM Pro',
      description: 'AI-enhanced customer relationship management with automated lead scoring and sales forecasting',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Sales pipeline analytics',
        'Email marketing automation',
        'Customer segmentation',
        'Performance tracking'
      ],
      price: '$39/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'CRM',
      link: 'https://ziontechgroup.com/smart-crm'
    },
    {
      id: '3',
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Project Management AI',
      description: 'Intelligent project management with automated task allocation and resource optimization',
      features: [
        'AI task prioritization',
        'Smart resource allocation',
        'Automated progress tracking',
        'Team collaboration tools',
        'Time tracking and reporting',
        'Risk assessment'
      ],
      price: '$59/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Project Management',
      link: 'https://ziontechgroup.com/project-ai'
    },
    {
      id: '4',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Monitor Pro',
      description: 'Advanced cybersecurity monitoring with AI threat detection and automated incident response',
      features: [
        'AI threat detection',
        'Real-time security alerts',
        'Automated incident response',
        'Compliance reporting',
        'Vulnerability scanning',
        'Security analytics dashboard'
      ],
      price: '$79/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Security',
      link: 'https://ziontechgroup.com/security-monitor'
    },
    {
      id: '5',
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
      title: 'Cloud Storage AI',
      description: 'Intelligent cloud storage with AI-powered file organization and automated backup',
      features: [
        'AI file categorization',
        'Smart search and discovery',
        'Automated backup scheduling',
        'Version control and history',
        'Collaborative editing',
        'Advanced security encryption'
      ],
      price: '$29/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Storage',
      link: 'https://ziontechgroup.com/cloud-ai'
    },
    {
      id: '6',
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: 'Marketing Automation AI',
      description: 'AI-powered marketing automation with intelligent campaign optimization and personalization',
      features: [
        'AI campaign optimization',
        'Personalized content generation',
        'Multi-channel automation',
        'Lead scoring and nurturing',
        'A/B testing automation',
        'Performance analytics'
      ],
      price: '$69/month',
      users: 'Up to 12 users',
      popular: true,
      category: 'Marketing',
      link: 'https://ziontechgroup.com/marketing-ai'
    },
    {
      id: '7',
      icon: <MessageSquare className="w-8 h-8 text-cyan-500" />,
      title: 'AI Customer Support',
      description: 'Intelligent chatbot and customer support automation with natural language processing',
      features: [
        'AI-powered chatbot',
        'Natural language processing',
        'Multi-language support',
        'Knowledge base integration',
        'Sentiment analysis',
        'Human handoff capabilities'
      ],
      price: '$45/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support',
      link: 'https://ziontechgroup.com/ai-support'
    },
    {
      id: '8',
      icon: <Brain className="w-8 h-8 text-pink-500" />,
      title: 'AI Content Generator',
      description: 'Advanced AI content creation tool for blogs, social media, and marketing materials',
      features: [
        'AI content generation',
        'Multiple content formats',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling'
      ],
      price: '$35/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Content',
      link: 'https://ziontechgroup.com/content-ai'
    },
    {
      id: '9',
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      title: 'Data Intelligence Suite',
      description: 'AI-powered data analysis and business intelligence with predictive modeling',
      features: [
        'Predictive analytics',
        'Data visualization',
        'Automated reporting',
        'Machine learning models',
        'Data integration',
        'Custom dashboards'
      ],
      price: '$89/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/data-intelligence'
    },
    {
      id: '10',
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      title: 'Workflow Automation',
      description: 'AI-driven workflow automation with intelligent process optimization and task management',
      features: [
        'Process automation',
        'AI task optimization',
        'Integration management',
        'Workflow analytics',
        'Custom automation rules',
        'Performance monitoring'
      ],
      price: '$55/month',
      users: 'Up to 18 users',
      popular: false,
      category: 'Automation',
      link: 'https://ziontechgroup.com/workflow-ai'
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

  const categories = ['All', 'Analytics', 'CRM', 'Project Management', 'Security', 'Storage', 'Marketing', 'Support', 'Content', 'Automation'];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                View All Plans
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses, designed for success
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
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                    category === selectedCategory
                      ? 'bg-cyan-600 text-white'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized AI-powered tools designed for modern businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 ${
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
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-sm text-gray-400">{product.users}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200 flex items-center gap-2 text-sm"
                    >
                      Try Free
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and discover how our micro SaaS solutions can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;