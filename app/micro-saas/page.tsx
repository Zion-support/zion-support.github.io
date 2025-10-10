'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  CheckCircle, Star, DollarSign, Clock, Globe, Smartphone, 
  Database, Settings, FileText, Mail, Target, TrendingUp,
  Calendar, MessageCircle, Heart, Lock, Monitor, Package,
  Cpu, Globe2, Smartphone2, CreditCard, PieChart, Activity,
  Briefcase, Building2, ShoppingCart, Headphones, Camera,
  Music, Video, Image, Download, Upload, Share2, Plus,
  Minus, X, Search, Filter, SortAsc, SortDesc, RefreshCw
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-content-studio',
      name: 'AI Content Studio Pro',
      description: 'Complete AI-powered content creation platform with advanced writing, design, and video generation capabilities.',
      icon: FileText,
      category: 'Content Creation',
      price: '$29/month',
      features: [
        'AI-powered blog post generation',
        'Social media content creation',
        'Video script writing',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Content calendar management',
        'Analytics and performance tracking'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Increase content output by 300%',
        'Improve SEO rankings by 40%',
        'Reduce content costs by 60%'
      ],
      marketPrice: '$49-99/month',
      targetAudience: 'Content creators, marketers, agencies',
      href: '/ai-content-studio'
    },
    {
      id: 'ai-crm-assistant',
      name: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights, automation, and predictive analytics.',
      icon: Users,
      category: 'CRM & Sales',
      price: '$39/month',
      features: [
        'AI lead scoring and qualification',
        'Automated follow-up sequences',
        'Predictive analytics',
        'Email template generation',
        'Meeting scheduling automation',
        'Pipeline forecasting',
        'Customer sentiment analysis',
        'Integration with 50+ tools'
      ],
      benefits: [
        'Increase sales by 25%',
        'Reduce manual work by 70%',
        'Improve lead conversion by 45%',
        'Save 15+ hours per week'
      ],
      marketPrice: '$59-149/month',
      targetAudience: 'Sales teams, small businesses',
      href: '/ai-crm-assistant'
    },
    {
      id: 'ai-expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and financial insights.',
      icon: TrendingUp,
      category: 'Finance & Accounting',
      price: '$19/month',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense approval workflows',
        'Tax preparation assistance',
        'Budget tracking and alerts',
        'Multi-currency support',
        'Team expense management',
        'Financial reporting dashboard'
      ],
      benefits: [
        'Save 8+ hours per month',
        'Reduce expense errors by 90%',
        'Improve tax compliance',
        'Better financial visibility'
      ],
      marketPrice: '$29-79/month',
      targetAudience: 'Small businesses, freelancers',
      href: '/ai-expense-tracker'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered pricing suggestions, payment tracking, and client management.',
      icon: FileText,
      category: 'Finance & Accounting',
      price: '$24/month',
      features: [
        'AI-powered pricing suggestions',
        'Automated invoice generation',
        'Payment tracking and reminders',
        'Client portal access',
        'Multi-currency billing',
        'Tax calculation automation',
        'Recurring billing setup',
        'Financial analytics dashboard'
      ],
      benefits: [
        'Reduce billing time by 80%',
        'Improve payment collection by 35%',
        'Eliminate billing errors',
        'Professional invoice templates'
      ],
      marketPrice: '$39-89/month',
      targetAudience: 'Freelancers, agencies, consultants',
      href: '/ai-invoice-generator'
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation Suite',
      description: 'Advanced lead generation platform with AI-powered prospecting, email outreach, and conversion tracking.',
      icon: Target,
      category: 'Marketing & Sales',
      price: '$49/month',
      features: [
        'AI-powered prospect research',
        'Email sequence automation',
        'LinkedIn outreach automation',
        'Lead scoring and qualification',
        'CRM integration',
        'A/B testing for campaigns',
        'Performance analytics',
        'Compliance monitoring'
      ],
      benefits: [
        'Generate 200+ qualified leads monthly',
        'Increase conversion rates by 30%',
        'Reduce prospecting time by 85%',
        'Improve email deliverability'
      ],
      marketPrice: '$79-199/month',
      targetAudience: 'Sales teams, marketers, agencies',
      href: '/ai-lead-generation'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and risk prediction.',
      icon: Calendar,
      category: 'Project Management',
      price: '$34/month',
      features: [
        'AI task prioritization',
        'Resource allocation optimization',
        'Risk prediction and mitigation',
        'Time tracking automation',
        'Team collaboration tools',
        'Progress monitoring',
        'Budget tracking',
        'Integration with 100+ tools'
      ],
      benefits: [
        'Improve project delivery by 40%',
        'Reduce project overruns by 60%',
        'Increase team productivity by 25%',
        'Better resource utilization'
      ],
      marketPrice: '$49-129/month',
      targetAudience: 'Project managers, teams, agencies',
      href: '/ai-project-manager'
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant Pro',
      description: 'Smart email management with AI-powered writing, scheduling, and response optimization.',
      icon: Mail,
      category: 'Communication',
      price: '$22/month',
      features: [
        'AI email writing assistance',
        'Smart scheduling and sending',
        'Email template library',
        'Response time optimization',
        'Email analytics and insights',
        'Multi-account management',
        'Spam detection and filtering',
        'Email signature management'
      ],
      benefits: [
        'Save 5+ hours per week',
        'Improve email response rates by 50%',
        'Reduce email errors by 95%',
        'Professional email templates'
      ],
      marketPrice: '$29-79/month',
      targetAudience: 'Professionals, sales teams',
      href: '/ai-email-assistant'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and optimization insights.',
      icon: Package,
      category: 'E-commerce & Retail',
      price: '$39/month',
      features: [
        'Demand forecasting with AI',
        'Automated reorder points',
        'Inventory optimization',
        'Multi-location management',
        'Supplier management',
        'Cost tracking and analysis',
        'Integration with e-commerce platforms',
        'Real-time inventory alerts'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 25%',
        'Improve cash flow by 30%',
        'Automated reordering saves 10+ hours weekly'
      ],
      marketPrice: '$59-149/month',
      targetAudience: 'E-commerce, retail, manufacturing',
      href: '/ai-inventory-manager'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: 'Advanced chatbot solution with natural language processing, multi-channel support, and human handoff.',
      icon: MessageCircle,
      category: 'Customer Support',
      price: '$45/month',
      features: [
        'Natural language processing',
        'Multi-channel support (web, email, chat)',
        'Human handoff capabilities',
        'Knowledge base integration',
        'Sentiment analysis',
        'Custom conversation flows',
        'Analytics and reporting',
        'Integration with CRM systems'
      ],
      benefits: [
        'Handle 80% of customer inquiries automatically',
        'Reduce response time by 90%',
        'Improve customer satisfaction by 35%',
        'Available 24/7 support'
      ],
      marketPrice: '$79-199/month',
      targetAudience: 'E-commerce, SaaS, service businesses',
      href: '/ai-customer-support-bot'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Complete social media management with AI-powered content creation, scheduling, and analytics.',
      icon: Share2,
      category: 'Social Media',
      price: '$29/month',
      features: [
        'AI content generation for all platforms',
        'Optimal posting time suggestions',
        'Hashtag research and optimization',
        'Engagement monitoring',
        'Competitor analysis',
        'Multi-platform scheduling',
        'Analytics and ROI tracking',
        'Influencer collaboration tools'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Save 12+ hours per week',
        'Improve brand consistency',
        'Better content performance'
      ],
      marketPrice: '$49-149/month',
      targetAudience: 'Marketers, agencies, influencers',
      href: '/ai-social-media-manager'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Dashboard',
      description: 'Intelligent data visualization and analytics with AI-powered insights and automated reporting.',
      icon: BarChart,
      category: 'Analytics & BI',
      price: '$59/month',
      features: [
        'AI-powered data insights',
        'Automated report generation',
        'Custom dashboard creation',
        'Data visualization tools',
        'Predictive analytics',
        'Real-time data monitoring',
        'Integration with 200+ data sources',
        'Collaborative reporting'
      ],
      benefits: [
        'Reduce reporting time by 75%',
        'Improve decision-making speed by 50%',
        'Identify trends and opportunities',
        'Automated insights delivery'
      ],
      marketPrice: '$99-299/month',
      targetAudience: 'Analysts, managers, executives',
      href: '/ai-data-analytics'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant Pro',
      description: 'Comprehensive HR management with AI-powered recruitment, employee engagement, and performance tracking.',
      icon: Users,
      category: 'Human Resources',
      price: '$44/month',
      features: [
        'AI-powered resume screening',
        'Interview scheduling automation',
        'Employee engagement tracking',
        'Performance review automation',
        'Skills gap analysis',
        'Training recommendation engine',
        'Compliance monitoring',
        'Employee self-service portal'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve employee retention by 30%',
        'Streamline HR processes by 60%',
        'Better talent acquisition'
      ],
      marketPrice: '$69-199/month',
      targetAudience: 'HR departments, growing companies',
      href: '/ai-hr-assistant'
    }
  ];

  const categories = [
    'All',
    'Content Creation',
    'CRM & Sales',
    'Finance & Accounting',
    'Marketing & Sales',
    'Project Management',
    'Communication',
    'E-commerce & Retail',
    'Customer Support',
    'Social Media',
    'Analytics & BI',
    'Human Resources'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Micro SaaS Solutions
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Powerful Micro SaaS
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              Solutions for Every Business
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered micro SaaS solutions designed to streamline operations, 
            boost productivity, and drive growth for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SaaS solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'All' ? 'All Micro SaaS Solutions' : `${selectedCategory} Solutions`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} solution{filteredServices.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700 hover:border-cyan-500/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full mb-4">
                  {service.category}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>Market: {service.marketPrice}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{service.targetAudience}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={service.href}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="/contact"
                    className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Get started with our micro SaaS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;