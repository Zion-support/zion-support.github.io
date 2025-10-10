'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  Smartphone, 
  Code, 
  Search, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Target, 
  Globe, 
  Settings, 
  TrendingUp, 
  Lock, 
  Cpu, 
  Database,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', icon: Cpu },
    { id: 'productivity', name: 'Productivity', icon: CheckSquare },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'communication', name: 'Communication', icon: Mail },
    { id: 'business', name: 'Business', icon: TrendingUp }
  ];

  const microSaasProducts = [
    // Productivity Tools
    {
      id: 'ai-writing-assistant',
      icon: '✍️',
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered writing tool with 50+ templates, grammar checking, and content optimization for blogs, emails, and documents.',
      features: ['50+ writing templates', 'Grammar & style checking', 'SEO optimization', 'Multi-language support', 'Plagiarism detection', 'Content scheduling'],
      price: '$29/month',
      originalPrice: '$49/month',
      users: 'Up to 5 users',
      category: 'productivity',
      rating: 4.9,
      reviews: 1247,
      popular: true,
      freeTrial: '14 days free',
      integrations: ['WordPress', 'Google Docs', 'Notion', 'Slack']
    },
    {
      id: 'smart-analytics',
      icon: '📊',
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with AI insights, automated reports, and predictive forecasting for data-driven decisions.',
      features: ['Real-time dashboards', 'AI-powered insights', 'Automated reporting', 'Predictive analytics', 'Custom metrics', 'Mobile app'],
      price: '$49/month',
      originalPrice: '$79/month',
      users: 'Up to 25 users',
      category: 'analytics',
      rating: 4.8,
      reviews: 892,
      popular: true,
      freeTrial: '30 days free',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe']
    },
    {
      id: 'ai-scheduler',
      icon: '📅',
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, time zone management, and automated follow-ups.',
      features: ['Smart scheduling', 'Calendar sync', 'Time zone handling', 'Meeting optimization', 'Automated reminders', 'Team coordination'],
      price: '$19/month',
      originalPrice: '$35/month',
      users: 'Up to 10 users',
      category: 'productivity',
      rating: 4.7,
      reviews: 634,
      popular: false,
      freeTrial: '7 days free',
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams']
    },
    {
      id: 'expense-tracker',
      icon: '💰',
      title: 'AI Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, automatic categorization, budget insights, and financial reporting.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Financial reports', 'Tax preparation', 'Multi-currency'],
      price: '$15/month',
      originalPrice: '$25/month',
      users: 'Up to 3 users',
      category: 'business',
      rating: 4.6,
      reviews: 456,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal']
    },
    {
      id: 'task-manager-pro',
      icon: '🎯',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, progress tracking, and automated workflows.',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Automated workflows', 'Time tracking', 'Project templates'],
      price: '$39/month',
      originalPrice: '$59/month',
      users: 'Up to 15 users',
      category: 'productivity',
      rating: 4.8,
      reviews: 723,
      popular: true,
      freeTrial: '21 days free',
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana']
    },

    // Marketing Tools
    {
      id: 'ai-design-studio',
      icon: '🎨',
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools and templates.',
      features: ['AI design generation', 'Logo creation', 'Social media templates', 'Brand kit', 'Collaboration tools', 'Export options'],
      price: '$35/month',
      originalPrice: '$55/month',
      users: 'Up to 8 users',
      category: 'marketing',
      rating: 4.7,
      reviews: 567,
      popular: false,
      freeTrial: '10 days free',
      integrations: ['Canva', 'Figma', 'Adobe Creative', 'Social platforms']
    },
    {
      id: 'landing-page-builder',
      icon: '📱',
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization, A/B testing, and conversion tracking.',
      features: ['Drag & drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'SEO tools'],
      price: '$29/month',
      originalPrice: '$45/month',
      users: 'Up to 5 users',
      category: 'marketing',
      rating: 4.6,
      reviews: 389,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['Google Analytics', 'Facebook Pixel', 'Mailchimp', 'Zapier']
    },
    {
      id: 'seo-optimizer',
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO'],
      price: '$49/month',
      originalPrice: '$79/month',
      users: 'Up to 3 websites',
      category: 'marketing',
      rating: 4.8,
      reviews: 678,
      popular: true,
      freeTrial: '14 days free',
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify']
    },
    {
      id: 'ad-campaign-manager',
      icon: '📈',
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms.',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'A/B testing', 'Automated bidding'],
      price: '$79/month',
      originalPrice: '$120/month',
      users: 'Up to 5 campaigns',
      category: 'marketing',
      rating: 4.7,
      reviews: 445,
      popular: false,
      freeTrial: '7 days free',
      integrations: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'TikTok Ads']
    },
    {
      id: 'social-media-manager',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics.',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform'],
      price: '$45/month',
      originalPrice: '$65/month',
      users: 'Up to 10 accounts',
      category: 'marketing',
      rating: 4.6,
      reviews: 512,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok']
    },

    // Development Tools
    {
      id: 'code-assistant',
      icon: '💻',
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: ['Code completion', 'Bug detection', 'Code optimization', 'Multi-language support', 'Documentation generation', 'Version control'],
      price: '$39/month',
      originalPrice: '$59/month',
      users: 'Up to 5 developers',
      category: 'development',
      rating: 4.9,
      reviews: 1234,
      popular: true,
      freeTrial: '30 days free',
      integrations: ['VS Code', 'IntelliJ', 'GitHub', 'GitLab', 'Docker']
    },
    {
      id: 'api-builder',
      icon: '🔧',
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools.',
      features: ['Visual API builder', 'Auto-documentation', 'Testing tools', 'Rate limiting', 'Authentication', 'Monitoring'],
      price: '$59/month',
      originalPrice: '$89/month',
      users: 'Up to 10 APIs',
      category: 'development',
      rating: 4.7,
      reviews: 567,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['Postman', 'Swagger', 'GitHub', 'AWS', 'Azure']
    },
    {
      id: 'bug-tracker-pro',
      icon: '🐛',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Progress tracking', 'Reporting'],
      price: '$25/month',
      originalPrice: '$40/month',
      users: 'Up to 20 users',
      category: 'development',
      rating: 4.6,
      reviews: 345,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['Jira', 'GitHub', 'Slack', 'Microsoft Teams']
    },
    {
      id: 'doc-generator',
      icon: '📚',
      title: 'Doc Generator AI',
      description: 'Automatically generate technical documentation, API docs, and user guides from code.',
      features: ['Auto-documentation', 'Multiple formats', 'Code analysis', 'Template library', 'Collaboration', 'Version control'],
      price: '$19/month',
      originalPrice: '$30/month',
      users: 'Up to 5 projects',
      category: 'development',
      rating: 4.5,
      reviews: 278,
      popular: false,
      freeTrial: '7 days free',
      integrations: ['GitHub', 'GitLab', 'Confluence', 'Notion']
    },

    // Security Tools
    {
      id: 'security-monitor',
      icon: '🔒',
      title: 'Security Monitor Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security alerts'],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 200 users',
      category: 'security',
      rating: 4.8,
      reviews: 456,
      popular: true,
      freeTrial: '30 days free',
      integrations: ['SIEM', 'Firewall', 'Antivirus', 'Cloud platforms']
    },
    {
      id: 'password-manager',
      icon: '🔐',
      title: 'Enterprise Password Manager',
      description: 'Secure password management with AI-powered security recommendations and team sharing.',
      features: ['Password generation', 'Security scoring', 'Team sharing', '2FA integration', 'Breach monitoring', 'Compliance'],
      price: '$15/month',
      originalPrice: '$25/month',
      users: 'Up to 50 users',
      category: 'security',
      rating: 4.7,
      reviews: 389,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['Active Directory', 'Okta', 'Google Workspace', 'Microsoft 365']
    },
    {
      id: 'vulnerability-scanner',
      icon: '🛡️',
      title: 'Vulnerability Scanner Pro',
      description: 'Automated vulnerability scanning and security assessment for web applications and infrastructure.',
      features: ['Automated scanning', 'Vulnerability database', 'Risk assessment', 'Remediation guidance', 'Compliance checks', 'Reporting'],
      price: '$89/month',
      originalPrice: '$129/month',
      users: 'Up to 10 assets',
      category: 'security',
      rating: 4.6,
      reviews: 234,
      popular: false,
      freeTrial: '7 days free',
      integrations: ['Jenkins', 'GitHub Actions', 'Azure DevOps', 'AWS']
    },

    // Communication Tools
    {
      id: 'ai-email-marketing',
      icon: '📧',
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: ['AI optimization', 'Personalization', 'A/B testing', 'Automation workflows', 'Analytics', 'Template library'],
      price: '$179/month',
      originalPrice: '$249/month',
      users: 'Up to 10,000 contacts',
      category: 'communication',
      rating: 4.8,
      reviews: 567,
      popular: true,
      freeTrial: '14 days free',
      integrations: ['Mailchimp', 'HubSpot', 'Salesforce', 'Shopify']
    },
    {
      id: 'ai-chatbot-builder',
      icon: '🤖',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      features: ['No-code builder', 'AI training', 'Multi-channel', 'Analytics', 'Integration APIs', 'Custom responses'],
      price: '$99/month',
      originalPrice: '$149/month',
      users: 'Up to 5 chatbots',
      category: 'communication',
      rating: 4.7,
      reviews: 445,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['Website', 'Facebook', 'WhatsApp', 'Slack', 'Teams']
    },
    {
      id: 'video-conference-ai',
      icon: '📹',
      title: 'Video Conference AI',
      description: 'AI-powered video conferencing with transcription, meeting summaries, and intelligent scheduling.',
      features: ['AI transcription', 'Meeting summaries', 'Smart scheduling', 'Background effects', 'Recording', 'Analytics'],
      price: '$49/month',
      originalPrice: '$79/month',
      users: 'Up to 100 participants',
      category: 'communication',
      rating: 4.6,
      reviews: 312,
      popular: false,
      freeTrial: '7 days free',
      integrations: ['Zoom', 'Teams', 'Google Meet', 'Calendar apps']
    },

    // Business Tools
    {
      id: 'crm-lite',
      icon: '👥',
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.',
      features: ['Lead management', 'AI scoring', 'Pipeline automation', 'Contact management', 'Email integration', 'Reporting'],
      price: '$59/month',
      originalPrice: '$89/month',
      users: 'Up to 25 users',
      category: 'business',
      rating: 4.7,
      reviews: 678,
      popular: true,
      freeTrial: '21 days free',
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier']
    },
    {
      id: 'invoice-generator',
      icon: '📄',
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.',
      features: ['Auto-generation', 'Payment tracking', 'Financial reports', 'Tax calculations', 'Multi-currency', 'Client portal'],
      price: '$79/month',
      originalPrice: '$119/month',
      users: 'Up to 10 users',
      category: 'business',
      rating: 4.6,
      reviews: 423,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Banking']
    },
    {
      id: 'inventory-manager',
      icon: '📦',
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand forecasting', 'Auto-reordering', 'Supply chain optimization', 'Multi-location', 'Reporting', 'Alerts'],
      price: '$89/month',
      originalPrice: '$129/month',
      users: 'Up to 15 users',
      category: 'business',
      rating: 4.8,
      reviews: 345,
      popular: false,
      freeTrial: '14 days free',
      integrations: ['Shopify', 'WooCommerce', 'Amazon', 'Supplier APIs']
    },
    {
      id: 'hr-assistant',
      icon: '👤',
      title: 'AI HR Assistant',
      description: 'AI-powered HR management with recruitment, employee onboarding, and performance tracking.',
      features: ['Recruitment AI', 'Onboarding automation', 'Performance tracking', 'Time tracking', 'Payroll integration', 'Compliance'],
      price: '$99/month',
      originalPrice: '$149/month',
      users: 'Up to 50 employees',
      category: 'business',
      rating: 4.7,
      reviews: 456,
      popular: false,
      freeTrial: '21 days free',
      integrations: ['ADP', 'BambooHR', 'Slack', 'Microsoft 365']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === activeCategory);

  const benefits = [
    'No upfront costs - Start with free trials',
    'Quick deployment - Get started in minutes',
    'Scalable solutions - Grow with your business',
    'Regular updates - Always latest features',
    '24/7 support - Expert help when you need it',
    'Easy integration - Connect with your tools',
    'AI-powered - Intelligent automation',
    'Mobile-friendly - Work from anywhere'
  ];

  const stats = [
    { number: '50+', label: 'AI-Powered Tools' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - 50+ AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover 50+ AI-powered micro SAAS solutions for productivity, marketing, development, security, and business. Start free trials and scale with your business." />
        <meta name="keywords" content="micro saas, ai tools, productivity software, marketing automation, development tools, business software" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              50+ AI-Powered Tools for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              From productivity tools to marketing automation, we have everything you need to succeed.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                    product.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4 text-center">{product.icon}</div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400 neon-text">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-center text-sm text-gray-400 mt-1">
                      {product.users}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <ul className="space-y-1 text-xs text-gray-300">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <a
                      href={`/contact?service=${product.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center block"
                    >
                      Start {product.freeTrial}
                    </a>
                    <a
                      href={`/${product.id}`}
                      className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.split(' - ')[0]}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.split(' - ')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-200"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
