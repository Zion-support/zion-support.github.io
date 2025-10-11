'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, DollarSign, Clock, Globe, Smartphone, Database, FileText, Search, Mail, Calendar, CreditCard, Settings, Target, PieChart, Activity, Lock, Wifi, Camera, Headphones, Monitor, HardDrive } from 'lucide-react'

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice: string;
  benefits: string[];
  capabilities: string[];
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'ai-analytics-dashboard',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting for data-driven decision making.',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Automated report generation and scheduling',
        'Multi-platform integration (Google Analytics, Facebook, etc.)',
        'Custom dashboard creation with drag-and-drop',
        'Advanced filtering and segmentation',
        'Export to PDF, Excel, CSV formats',
        'White-label customization options'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$200-500/month',
      benefits: [
        'Increase data accuracy by 40%',
        'Reduce reporting time by 75%',
        'Improve decision-making speed by 60%',
        'Save 20+ hours per week on manual reporting'
      ],
      capabilities: [
        'Real-time data processing',
        'Machine learning predictions',
        'Custom API integrations',
        'Advanced data visualization'
      ],
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: 'smart-appointment-scheduler',
      icon: Calendar,
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with AI-powered optimization, automated reminders, time zone handling, and seamless calendar integration.',
      features: [
        'AI-powered optimal time slot suggestions',
        'Multi-calendar integration (Google, Outlook, Apple)',
        'Automated SMS and email reminders',
        'Time zone auto-detection and conversion',
        'Custom booking forms and questionnaires',
        'Payment processing integration',
        'Recurring appointment management',
        'Client self-rescheduling capabilities'
      ],
      price: '$39/month',
      originalPrice: '$69/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Scheduling',
      marketPrice: '$50-150/month',
      benefits: [
        'Reduce no-shows by 35%',
        'Increase booking efficiency by 50%',
        'Save 15+ hours per week on scheduling',
        'Improve client satisfaction by 40%'
      ],
      capabilities: [
        'AI scheduling optimization',
        'Multi-channel communication',
        'Payment processing',
        'Calendar synchronization'
      ],
      link: 'https://ziontechgroup.com/smart-appointment-scheduler'
    },
    {
      id: 'ai-content-generator',
      icon: FileText,
      title: 'AI Content Generator Studio',
      description: 'Advanced AI-powered content creation tool for blogs, social media, marketing materials, and technical documentation with brand voice customization.',
      features: [
        'GPT-4 powered content generation',
        '50+ content templates and formats',
        'SEO optimization and keyword integration',
        'Brand voice and tone customization',
        'Multi-language support (25+ languages)',
        'Content calendar and scheduling',
        'Plagiarism detection and originality scoring',
        'Team collaboration and approval workflows'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 8 users',
      popular: true,
      category: 'Content',
      marketPrice: '$100-300/month',
      benefits: [
        'Increase content production by 300%',
        'Reduce content creation costs by 60%',
        'Improve SEO rankings by 45%',
        'Save 25+ hours per week on writing'
      ],
      capabilities: [
        'Advanced AI content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand consistency management'
      ],
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'intelligent-document-processor',
      icon: Database,
      title: 'Intelligent Document Processor',
      description: 'AI-powered document processing and data extraction tool with OCR, automated classification, and intelligent data validation.',
      features: [
        'Advanced OCR with 99.5% accuracy',
        'AI-powered document classification',
        'Automated data extraction and validation',
        'Batch processing (1000+ documents/hour)',
        'Custom template creation and training',
        'API integration for seamless workflows',
        'Compliance and audit trail logging',
        'Multi-format support (PDF, images, scans)'
      ],
      price: '$99/month',
      originalPrice: '$179/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$200-500/month',
      benefits: [
        'Reduce data entry time by 90%',
        'Increase processing accuracy by 95%',
        'Eliminate manual document sorting',
        'Save 30+ hours per week on data processing'
      ],
      capabilities: [
        'Advanced OCR technology',
        'AI document classification',
        'Automated data validation',
        'High-volume batch processing'
      ],
      link: 'https://ziontechgroup.com/intelligent-document-processor'
    },
    {
      id: 'ai-email-marketing-suite',
      icon: Mail,
      title: 'AI Email Marketing Suite',
      description: 'Complete AI-powered email marketing solution with advanced automation, personalization, A/B testing, and detailed analytics.',
      features: [
        'AI-powered email content generation',
        'Advanced segmentation and targeting',
        'Automated drip campaigns and workflows',
        'A/B testing with AI optimization',
        'Personalization engine with behavioral triggers',
        'Advanced analytics and ROI tracking',
        'Drag-and-drop email builder',
        'Deliverability optimization and monitoring'
      ],
      price: '$69/month',
      originalPrice: '$119/month',
      users: 'Up to 10,000 contacts',
      popular: true,
      category: 'Marketing',
      marketPrice: '$100-400/month',
      benefits: [
        'Increase email open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Generate 3x more qualified leads'
      ],
      capabilities: [
        'AI content personalization',
        'Advanced automation workflows',
        'Behavioral targeting',
        'Deliverability optimization'
      ],
      link: 'https://ziontechgroup.com/ai-email-marketing-suite'
    },
    {
      id: 'smart-expense-tracker',
      icon: DollarSign,
      title: 'Smart Expense Tracker Pro',
      description: 'AI-powered expense tracking and financial management tool with receipt scanning, automated categorization, and advanced reporting.',
      features: [
        'AI-powered receipt scanning and OCR',
        'Automated expense categorization',
        'Real-time budget tracking and alerts',
        'Multi-currency support and conversion',
        'Team expense management and approval',
        'Advanced reporting and analytics',
        'Tax preparation and compliance tools',
        'Integration with accounting software'
      ],
      price: '$29/month',
      originalPrice: '$49/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$50-150/month',
      benefits: [
        'Reduce expense processing time by 80%',
        'Improve budget accuracy by 70%',
        'Eliminate manual data entry',
        'Save 20+ hours per month on expense management'
      ],
      capabilities: [
        'AI receipt processing',
        'Automated categorization',
        'Real-time budget monitoring',
        'Multi-currency support'
      ],
      link: 'https://ziontechgroup.com/smart-expense-tracker'
    },
    {
      id: 'ai-inventory-manager',
      icon: HardDrive,
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management system with demand forecasting, automated reordering, and real-time stock optimization.',
      features: [
        'AI-powered demand forecasting',
        'Automated reorder point calculations',
        'Real-time inventory tracking',
        'Multi-location warehouse management',
        'Supplier relationship management',
        'Advanced reporting and analytics',
        'Barcode and QR code scanning',
        'Integration with e-commerce platforms'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Inventory',
      marketPrice: '$150-400/month',
      benefits: [
        'Reduce stockouts by 60%',
        'Decrease excess inventory by 40%',
        'Improve cash flow by 35%',
        'Save 25+ hours per week on inventory management'
      ],
      capabilities: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location tracking',
        'Supplier integration'
      ],
      link: 'https://ziontechgroup.com/ai-inventory-manager'
    },
    {
      id: 'ai-lead-scoring-engine',
      icon: Target,
      title: 'AI Lead Scoring Engine',
      description: 'Advanced lead scoring and qualification system with machine learning algorithms, behavioral tracking, and automated nurturing.',
      features: [
        'Machine learning lead scoring algorithms',
        'Behavioral tracking and analysis',
        'Automated lead nurturing campaigns',
        'CRM integration (Salesforce, HubSpot, etc.)',
        'Custom scoring models and rules',
        'Real-time lead qualification',
        'Advanced analytics and reporting',
        'A/B testing for optimization'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 12 users',
      popular: true,
      category: 'Sales',
      marketPrice: '$100-300/month',
      benefits: [
        'Increase lead conversion by 50%',
        'Reduce sales cycle by 30%',
        'Improve lead quality by 65%',
        'Generate 2x more qualified opportunities'
      ],
      capabilities: [
        'Machine learning algorithms',
        'Behavioral analysis',
        'Automated nurturing',
        'CRM integration'
      ],
      link: 'https://ziontechgroup.com/ai-lead-scoring-engine'
    },
    {
      id: 'ai-seo-optimizer',
      icon: Search,
      title: 'AI SEO Optimizer Pro',
      description: 'Comprehensive AI-powered SEO analysis and optimization tool with keyword research, content optimization, and rank tracking.',
      features: [
        'AI-powered keyword research and analysis',
        'Automated on-page SEO optimization',
        'Content optimization suggestions',
        'Competitor analysis and monitoring',
        'Rank tracking for unlimited keywords',
        'Technical SEO audit and recommendations',
        'Local SEO optimization tools',
        'Performance analytics and reporting'
      ],
      price: '$59/month',
      originalPrice: '$99/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'SEO',
      marketPrice: '$80-250/month',
      benefits: [
        'Increase organic traffic by 80%',
        'Improve keyword rankings by 60%',
        'Reduce SEO workload by 70%',
        'Generate 3x more organic leads'
      ],
      capabilities: [
        'AI keyword research',
        'Automated optimization',
        'Competitor analysis',
        'Rank tracking'
      ],
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: 'ai-social-media-manager',
      icon: Smartphone,
      title: 'AI Social Media Manager',
      description: 'All-in-one AI-powered social media management platform with content creation, scheduling, engagement tracking, and analytics.',
      features: [
        'AI-powered content creation and curation',
        'Multi-platform posting and scheduling',
        'Advanced engagement tracking and analytics',
        'Hashtag research and optimization',
        'Influencer identification and outreach',
        'Social listening and sentiment analysis',
        'Team collaboration and approval workflows',
        'ROI tracking and performance analytics'
      ],
      price: '$69/month',
      originalPrice: '$119/month',
      users: 'Up to 8 accounts',
      popular: true,
      category: 'Social Media',
      marketPrice: '$100-350/month',
      benefits: [
        'Increase social engagement by 75%',
        'Reduce content creation time by 60%',
        'Improve brand visibility by 90%',
        'Save 20+ hours per week on social management'
      ],
      capabilities: [
        'AI content creation',
        'Multi-platform management',
        'Engagement analytics',
        'Social listening'
      ],
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    {
      id: 'ai-customer-support-bot',
      icon: MessageSquare,
      title: 'AI Customer Support Bot',
      description: 'Advanced AI-powered customer support chatbot with natural language processing, multi-channel support, and seamless human handoff.',
      features: [
        'Advanced NLP and conversation AI',
        'Multi-channel support (web, mobile, social)',
        'Knowledge base integration and training',
        'Seamless human agent handoff',
        'Sentiment analysis and mood detection',
        'Multi-language support (30+ languages)',
        'Custom bot personality and branding',
        'Advanced analytics and performance tracking'
      ],
      price: '$99/month',
      originalPrice: '$179/month',
      users: 'Unlimited conversations',
      popular: true,
      category: 'Support',
      marketPrice: '$200-600/month',
      benefits: [
        'Reduce support tickets by 50%',
        'Improve response time by 80%',
        'Increase customer satisfaction by 45%',
        'Save 40+ hours per week on support'
      ],
      capabilities: [
        'Advanced NLP processing',
        'Multi-channel support',
        'Knowledge base integration',
        'Human handoff management'
      ],
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    {
      id: 'ai-project-manager',
      icon: Activity,
      title: 'AI Project Manager Pro',
      description: 'Intelligent project management tool with AI-powered task optimization, resource allocation, and predictive project analytics.',
      features: [
        'AI-powered task prioritization and scheduling',
        'Resource allocation optimization',
        'Predictive project timeline analysis',
        'Risk assessment and mitigation suggestions',
        'Team productivity analytics',
        'Automated progress reporting',
        'Integration with popular project tools',
        'Custom workflow automation'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Project Management',
      marketPrice: '$100-300/month',
      benefits: [
        'Improve project delivery time by 40%',
        'Reduce project overruns by 60%',
        'Increase team productivity by 35%',
        'Save 25+ hours per week on project management'
      ],
      capabilities: [
        'AI task optimization',
        'Resource allocation',
        'Predictive analytics',
        'Risk assessment'
      ],
      link: 'https://ziontechgroup.com/ai-project-manager'
    }
  ];

  const categories = ['All', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our pre-built solutions and easy integration. No complex setup required.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee, SOC 2 compliance, and data encryption.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our scalable cloud infrastructure and global CDN.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: 'Scalable Growth',
      description: 'Grow with your business - easily upgrade or add more features as your needs evolve.'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready-to-use AI-powered business tools that solve specific problems and boost productivity. 
              No complex setup, just instant value with enterprise-grade features at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Products
              </a>
              <a
                href="#benefits"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our Micro SaaS Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Micro SaaS Products
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  product.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {product.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">Most Popular</span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {product.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{product.users}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {product.marketPrice}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-green-400 font-medium">
                    Save {product.originalPrice ? Math.round((1 - parseInt(product.price.replace('$', '').replace('/month', '')) / parseInt(product.originalPrice.replace('$', '').replace('/month', ''))) * 100) : 0}%
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {product.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{product.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <button className="w-full border border-gray-400 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of our AI-powered micro SaaS solutions. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;