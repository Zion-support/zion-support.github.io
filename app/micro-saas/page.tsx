import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart, Mail, Calendar, FileText, Search, Image, Video, Music, Code, Settings, Lock, Bell, Heart, Eye, Download, Upload, Share, Edit, Trash, Plus, Minus, ArrowRight, Award, Target, Rocket } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality blog posts, social media content, and marketing copy using advanced AI.',
      icon: '✍️',
      price: '$79/month',
      features: ['Unlimited content generation', '50+ content templates', 'SEO optimization', 'Multi-language support', 'Brand voice customization'],
      benefits: ['Save 20+ hours/week', 'Increase content output by 500%', 'Improve SEO rankings'],
      marketPrice: '$199/month',
      category: 'Content Creation',
      technologies: ['GPT-4', 'Claude', 'Custom AI Models', 'SEO Tools', 'Analytics'],
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and automated reporting.',
      icon: '📊',
      price: '$99/month',
      features: ['Real-time dashboards', 'AI-powered insights', 'Automated reports', 'Custom metrics', 'Data visualization'],
      benefits: ['Make data-driven decisions', 'Save 15+ hours/month', 'Identify growth opportunities'],
      marketPrice: '$299/month',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Python', 'Machine Learning', 'APIs'],
      link: 'https://ziontechgroup.com/smart-analytics'
    },
    {
      title: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with advanced segmentation and personalization.',
      icon: '📧',
      price: '$89/month',
      features: ['Unlimited emails', 'AI segmentation', 'A/B testing', 'Automation workflows', 'Analytics & reporting'],
      benefits: ['Increase open rates by 40%', 'Boost conversions by 60%', 'Save 10+ hours/week'],
      marketPrice: '$249/month',
      category: 'Marketing',
      technologies: ['Node.js', 'AI/ML', 'Email APIs', 'Analytics', 'Templates'],
      link: 'https://ziontechgroup.com/email-automation'
    },
    {
      title: 'Social Media Scheduler',
      description: 'Schedule and manage all your social media posts across multiple platforms with AI optimization.',
      icon: '📱',
      price: '$69/month',
      features: ['Multi-platform posting', 'AI-optimized timing', 'Content calendar', 'Hashtag suggestions', 'Performance tracking'],
      benefits: ['Increase engagement by 50%', 'Save 8+ hours/week', 'Grow followers faster'],
      marketPrice: '$179/month',
      category: 'Social Media',
      technologies: ['React', 'Social APIs', 'AI Optimization', 'Scheduling', 'Analytics'],
      link: 'https://ziontechgroup.com/social-scheduler'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot that handles customer inquiries 24/7 with human-like responses.',
      icon: '🤖',
      price: '$119/month',
      features: ['24/7 availability', 'Multi-language support', 'Ticket management', 'Knowledge base', 'Human handoff'],
      benefits: ['Reduce support costs by 70%', 'Improve response time', 'Increase customer satisfaction'],
      marketPrice: '$399/month',
      category: 'Customer Support',
      technologies: ['NLP', 'Machine Learning', 'APIs', 'Chat Interface', 'Analytics'],
      link: 'https://ziontechgroup.com/support-bot'
    },
    {
      title: 'Project Management AI',
      description: 'Smart project management with AI-powered task prioritization and team optimization.',
      icon: '📋',
      price: '$99/month',
      features: ['AI task prioritization', 'Team collaboration', 'Time tracking', 'Resource management', 'Progress analytics'],
      benefits: ['Increase productivity by 35%', 'Reduce project delays', 'Improve team efficiency'],
      marketPrice: '$299/month',
      category: 'Productivity',
      technologies: ['React', 'AI/ML', 'Real-time Sync', 'Analytics', 'Integrations'],
      link: 'https://ziontechgroup.com/project-ai'
    },
    {
      title: 'AI-Powered SEO Tool',
      description: 'Comprehensive SEO analysis and optimization with AI-driven recommendations.',
      icon: '🔍',
      price: '$89/month',
      features: ['Keyword research', 'Site audit', 'Competitor analysis', 'Content optimization', 'Rank tracking'],
      benefits: ['Improve search rankings', 'Increase organic traffic', 'Save 12+ hours/week'],
      marketPrice: '$199/month',
      category: 'SEO',
      technologies: ['Python', 'Web Scraping', 'AI Analysis', 'APIs', 'Databases'],
      link: 'https://ziontechgroup.com/seo-tool'
    },
    {
      title: 'Invoice & Billing Manager',
      description: 'Automated invoicing system with AI-powered payment tracking and financial insights.',
      icon: '💰',
      price: '$79/month',
      features: ['Automated invoicing', 'Payment tracking', 'Financial reports', 'Tax calculations', 'Client portal'],
      benefits: ['Reduce billing errors', 'Improve cash flow', 'Save 6+ hours/week'],
      marketPrice: '$149/month',
      category: 'Finance',
      technologies: ['React', 'Payment APIs', 'AI/ML', 'PDF Generation', 'Analytics'],
      link: 'https://ziontechgroup.com/billing-manager'
    },
    {
      title: 'AI Image Generator',
      description: 'Create stunning images, logos, and graphics using advanced AI technology.',
      icon: '🎨',
      price: '$59/month',
      features: ['Unlimited image generation', 'Multiple art styles', 'High-resolution output', 'Brand customization', 'Commercial license'],
      benefits: ['Save on design costs', 'Create unique visuals', 'Speed up content creation'],
      marketPrice: '$199/month',
      category: 'Design',
      technologies: ['DALL-E', 'Stable Diffusion', 'Custom AI', 'Image Processing', 'APIs'],
      link: 'https://ziontechgroup.com/ai-images'
    },
    {
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory tracking with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$109/month',
      features: ['Real-time tracking', 'Demand forecasting', 'Automated reordering', 'Multi-location support', 'Analytics dashboard'],
      benefits: ['Reduce stockouts by 80%', 'Lower inventory costs', 'Improve cash flow'],
      marketPrice: '$299/month',
      category: 'Inventory',
      technologies: ['IoT', 'Machine Learning', 'APIs', 'Real-time Sync', 'Analytics'],
      link: 'https://ziontechgroup.com/inventory-manager'
    },
    {
      title: 'AI Video Editor',
      description: 'Automated video editing with AI-powered scene detection and content optimization.',
      icon: '🎬',
      price: '$129/month',
      features: ['Auto-editing', 'Scene detection', 'Music sync', 'Text overlays', 'Export options'],
      benefits: ['Create videos 10x faster', 'Professional quality output', 'Save on editing costs'],
      marketPrice: '$399/month',
      category: 'Video',
      technologies: ['Computer Vision', 'AI/ML', 'Video Processing', 'Cloud Storage', 'APIs'],
      link: 'https://ziontechgroup.com/ai-video-editor'
    },
    {
      title: 'Smart CRM System',
      description: 'AI-powered customer relationship management with predictive analytics and automation.',
      icon: '👥',
      price: '$99/month',
      features: ['Lead scoring', 'Sales forecasting', 'Automated follow-ups', 'Pipeline management', 'Customer insights'],
      benefits: ['Increase sales by 40%', 'Improve lead quality', 'Automate repetitive tasks'],
      marketPrice: '$299/month',
      category: 'CRM',
      technologies: ['React', 'AI/ML', 'APIs', 'Analytics', 'Automation'],
      link: 'https://ziontechgroup.com/smart-crm'
    },
    {
      title: 'AI Code Assistant',
      description: 'Intelligent coding assistant that helps developers write better code faster.',
      icon: '💻',
      price: '$89/month',
      features: ['Code completion', 'Bug detection', 'Code review', 'Documentation generation', 'Multi-language support'],
      benefits: ['Code 50% faster', 'Reduce bugs by 60%', 'Improve code quality'],
      marketPrice: '$199/month',
      category: 'Development',
      technologies: ['GPT-4', 'Code Analysis', 'APIs', 'IDE Integration', 'Version Control'],
      link: 'https://ziontechgroup.com/code-assistant'
    },
    {
      title: 'Smart Meeting Scheduler',
      description: 'AI-powered meeting scheduling with calendar optimization and conflict resolution.',
      icon: '📅',
      price: '$69/month',
      features: ['Smart scheduling', 'Calendar sync', 'Meeting optimization', 'Time zone handling', 'Reminder system'],
      benefits: ['Reduce scheduling conflicts', 'Save 5+ hours/week', 'Improve meeting efficiency'],
      marketPrice: '$149/month',
      category: 'Scheduling',
      technologies: ['Calendar APIs', 'AI Optimization', 'Real-time Sync', 'Notifications', 'Analytics'],
      link: 'https://ziontechgroup.com/meeting-scheduler'
    },
    {
      title: 'AI Data Analyzer',
      description: 'Automated data analysis with AI-powered insights and visualization generation.',
      icon: '📈',
      price: '$119/month',
      features: ['Data import/export', 'AI analysis', 'Auto-visualization', 'Report generation', 'Predictive modeling'],
      benefits: ['Get insights instantly', 'Make data-driven decisions', 'Save 20+ hours/week'],
      marketPrice: '$399/month',
      category: 'Data Analysis',
      technologies: ['Python', 'Machine Learning', 'Data Visualization', 'APIs', 'Cloud Storage'],
      link: 'https://ziontechgroup.com/data-analyzer'
    },
    {
      title: 'Smart Document Manager',
      description: 'AI-powered document organization with intelligent search and automated categorization.',
      icon: '📄',
      price: '$79/month',
      features: ['Auto-categorization', 'Smart search', 'Version control', 'Collaboration tools', 'Security features'],
      benefits: ['Find documents instantly', 'Improve organization', 'Enhance security'],
      marketPrice: '$199/month',
      category: 'Document Management',
      technologies: ['AI/ML', 'Search Engine', 'Cloud Storage', 'Security', 'APIs'],
      link: 'https://ziontechgroup.com/document-manager'
    },
    {
      title: 'AI Website Builder',
      description: 'Create professional websites with AI-powered design and content generation.',
      icon: '🌐',
      price: '$149/month',
      features: ['AI design generation', 'Content creation', 'Mobile optimization', 'SEO features', 'E-commerce integration'],
      benefits: ['Build websites 5x faster', 'Professional results', 'No coding required'],
      marketPrice: '$499/month',
      category: 'Web Development',
      technologies: ['AI/ML', 'React', 'Design Systems', 'CMS', 'Hosting'],
      link: 'https://ziontechgroup.com/website-builder'
    },
    {
      title: 'Smart Password Manager',
      description: 'AI-powered password management with security monitoring and breach detection.',
      icon: '🔐',
      price: '$49/month',
      features: ['Password generation', 'Security monitoring', 'Breach detection', 'Multi-device sync', 'Team sharing'],
      benefits: ['Enhance security', 'Simplify password management', 'Prevent breaches'],
      marketPrice: '$99/month',
      category: 'Security',
      technologies: ['Encryption', 'AI Monitoring', 'Cloud Sync', 'Security APIs', 'Multi-platform'],
      link: 'https://ziontechgroup.com/password-manager'
    },
    {
      title: 'AI Translation Service',
      description: 'Real-time translation with AI-powered accuracy and context understanding.',
      icon: '🌍',
      price: '$89/month',
      features: ['100+ languages', 'Real-time translation', 'Context awareness', 'Document translation', 'API access'],
      benefits: ['Break language barriers', 'Improve communication', 'Expand global reach'],
      marketPrice: '$199/month',
      category: 'Translation',
      technologies: ['NLP', 'Machine Learning', 'APIs', 'Real-time Processing', 'Cloud Computing'],
      link: 'https://ziontechgroup.com/translation-service'
    },
    {
      title: 'Smart Expense Tracker',
      description: 'AI-powered expense tracking with receipt scanning and budget optimization.',
      icon: '💳',
      price: '$59/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Expense reports', 'Tax preparation'],
      benefits: ['Simplify expense management', 'Improve budgeting', 'Save on taxes'],
      marketPrice: '$149/month',
      category: 'Finance',
      technologies: ['OCR', 'AI/ML', 'Mobile Apps', 'Cloud Sync', 'Analytics'],
      link: 'https://ziontechgroup.com/expense-tracker'
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable, powerful AI-driven micro SAAS tools for modern businesses. 20+ ready-to-use solutions starting at $49/month." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity tools, automation, affordable software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Powerful AI-driven tools for modern businesses. Start with any solution for just $49/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View All Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Affordable, powerful tools that deliver enterprise-level results for small to medium businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Setup</h3>
                <p className="text-gray-600">Get started in minutes with our plug-and-play solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance for all solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support and monitoring for all tools</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 6 months of implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Powerful {category.toLowerCase()} tools powered by advanced AI technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 60% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                        >
                          Try Free
                        </a>
                        <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                          Demo
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Pricing Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Affordable Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-600">
                Get enterprise-level tools at micro SAAS prices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$49<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    1 Micro SAAS Tool
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Basic Support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Standard Features
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-purple-600 rounded-lg shadow-lg p-8 text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-purple-200">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-purple-100">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 Micro SAAS Tools
                  </li>
                  <li className="flex items-center text-purple-100">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority Support
                  </li>
                  <li className="flex items-center text-purple-100">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced Features
                  </li>
                  <li className="flex items-center text-purple-100">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API Access
                  </li>
                </ul>
                <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Unlimited Tools
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    24/7 Premium Support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    All Features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Custom Integrations
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;