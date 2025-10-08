import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'ai', name: 'AI-Powered', icon: '🤖' },
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'marketing', name: 'Marketing', icon: '📢' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'automation', name: 'Automation', icon: '🔄' }
  ];

  const microSAASServices = [
    // AI-Powered Services
    {
      id: 'ai-code-review',
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for developers.',
      icon: '🔍',
      price: '$89/month',
      originalPrice: '$150/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization suggestions', 'Code quality metrics', 'Git integration', 'Custom rules engine'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week on reviews', 'Faster deployment cycles'],
      marketPrice: '$150-300/month',
      category: 'ai',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Prettier', 'Custom AI Models', 'OpenAI GPT-4'],
      popular: true,
      link: 'https://ziontechgroup.com/ai-code-review'
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI-Powered SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-driven content suggestions and keyword research.',
      icon: '🎯',
      price: '$199/month',
      originalPrice: '$350/month',
      features: ['AI content optimization', 'Keyword research automation', 'Competitor analysis', 'Technical SEO audit', 'Rank tracking', 'Content gap analysis'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 20+ hours/week on SEO', 'Higher conversion rates'],
      marketPrice: '$300-600/month',
      category: 'ai',
      technologies: ['Google Search Console API', 'Ahrefs API', 'OpenAI GPT', 'React', 'Node.js', 'MongoDB'],
      popular: true,
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials with AI.',
      icon: '✍️',
      price: '$149/month',
      originalPrice: '$250/month',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Product descriptions', 'SEO-optimized content', 'Multi-language support'],
      benefits: ['Create content 10x faster', 'Consistent brand voice', 'SEO-optimized output', 'Multi-platform publishing'],
      marketPrice: '$200-400/month',
      category: 'ai',
      technologies: ['OpenAI GPT-4', 'Claude AI', 'React', 'Node.js', 'Stripe API'],
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'ai-video-creator',
      title: 'AI Video Content Creator',
      description: 'Automated video creation with AI-generated scripts, voiceovers, and editing for social media.',
      icon: '🎬',
      price: '$299/month',
      originalPrice: '$500/month',
      features: ['AI script generation', 'Automated voiceovers', 'Video editing', 'Social media optimization', 'Analytics dashboard', 'Brand customization'],
      benefits: ['Create videos 10x faster', 'Reduce production costs by 70%', 'Increase engagement', 'Professional quality output'],
      marketPrice: '$500-1000/month',
      category: 'ai',
      technologies: ['OpenAI GPT', 'ElevenLabs', 'FFmpeg', 'React', 'AWS', 'Cloudinary'],
      popular: true,
      link: 'https://ziontechgroup.com/ai-video-creator'
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation.',
      icon: '💬',
      price: '$179/month',
      originalPrice: '$300/month',
      features: ['No-code chatbot builder', 'Multi-channel support', 'Natural language processing', 'Analytics dashboard', 'Integration APIs', 'Custom training'],
      benefits: ['24/7 customer support', 'Reduce support costs by 60%', 'Improve response time', 'Higher customer satisfaction'],
      marketPrice: '$250-500/month',
      category: 'ai',
      technologies: ['OpenAI API', 'React', 'Node.js', 'WebSocket', 'MongoDB', 'Stripe'],
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },

    // Productivity Services
    {
      id: 'smart-invoice-generator',
      title: 'Smart Invoice Generator',
      description: 'AI-powered invoice creation with automated billing, payment tracking, and financial analytics.',
      icon: '💰',
      price: '$79/month',
      originalPrice: '$120/month',
      features: ['Automated invoice generation', 'Payment tracking', 'Financial analytics', 'Client portal', 'Tax calculations', 'Multi-currency support'],
      benefits: ['Reduce billing time by 80%', 'Improve cash flow', 'Eliminate manual errors', 'Professional invoices'],
      marketPrice: '$120-250/month',
      category: 'productivity',
      technologies: ['Stripe API', 'QuickBooks API', 'React', 'Node.js', 'PostgreSQL', 'PDF Generator'],
      popular: true,
      link: 'https://ziontechgroup.com/smart-invoice-generator'
    },
    {
      id: 'smart-project-management',
      title: 'Smart Project Management',
      description: 'AI-driven project management with automated task assignment, progress tracking, and resource optimization.',
      icon: '📋',
      price: '$149/month',
      originalPrice: '$250/month',
      features: ['AI task assignment', 'Progress prediction', 'Resource optimization', 'Risk assessment', 'Team collaboration', 'Time tracking'],
      benefits: ['Improve project success rate by 40%', 'Reduce project delays', 'Optimize team productivity', 'Better resource allocation'],
      marketPrice: '$200-400/month',
      category: 'productivity',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
      link: 'https://ziontechgroup.com/smart-project-management'
    },
    {
      id: 'team-collaboration-hub',
      title: 'Team Collaboration Hub',
      description: 'Advanced team collaboration platform with AI-powered insights and productivity analytics.',
      icon: '👥',
      price: '$99/month',
      originalPrice: '$150/month',
      features: ['Real-time collaboration', 'AI meeting summaries', 'Task automation', 'File sharing', 'Video conferencing', 'Productivity insights'],
      benefits: ['Improve team efficiency', 'Better communication', 'Reduced meeting time', 'Enhanced productivity'],
      marketPrice: '$150-300/month',
      category: 'productivity',
      technologies: ['WebRTC', 'React', 'Node.js', 'Socket.io', 'MongoDB', 'AI APIs'],
      link: 'https://ziontechgroup.com/team-collaboration-hub'
    },

    // Marketing Services
    {
      id: 'social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, scheduling, and analytics.',
      icon: '📱',
      price: '$199/month',
      originalPrice: '$350/month',
      features: ['Content scheduling', 'AI post generation', 'Analytics dashboard', 'Multi-platform support', 'Engagement tracking', 'Hashtag optimization'],
      benefits: ['Save 15+ hours/week', 'Increase engagement by 200%', 'Consistent posting', 'Better ROI tracking'],
      marketPrice: '$300-600/month',
      category: 'marketing',
      technologies: ['Social Media APIs', 'OpenAI GPT', 'React', 'Node.js', 'MongoDB', 'Analytics APIs'],
      popular: true,
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    {
      id: 'email-marketing-automation',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing with AI-powered personalization and automated campaigns.',
      icon: '📧',
      price: '$149/month',
      originalPrice: '$250/month',
      features: ['AI personalization', 'Automated campaigns', 'A/B testing', 'Analytics dashboard', 'Template library', 'List management'],
      benefits: ['Increase open rates by 40%', 'Higher conversion rates', 'Automated workflows', 'Better segmentation'],
      marketPrice: '$200-400/month',
      category: 'marketing',
      technologies: ['SendGrid API', 'OpenAI GPT', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
      link: 'https://ziontechgroup.com/email-marketing-automation'
    },
    {
      id: 'lead-generation-system',
      title: 'AI Lead Generation System',
      description: 'Automated lead generation with AI-powered prospecting and qualification.',
      icon: '🎯',
      price: '$299/month',
      originalPrice: '$500/month',
      features: ['AI prospecting', 'Lead scoring', 'Automated outreach', 'CRM integration', 'Analytics dashboard', 'Custom workflows'],
      benefits: ['Generate 3x more leads', 'Qualify leads automatically', 'Reduce manual work', 'Higher conversion rates'],
      marketPrice: '$400-800/month',
      category: 'marketing',
      technologies: ['LinkedIn API', 'Salesforce API', 'OpenAI GPT', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/ai-lead-generation'
    },

    // Finance Services
    {
      id: 'expense-tracker-ai',
      title: 'AI Expense Tracker',
      description: 'Intelligent expense tracking with automated categorization and financial insights.',
      icon: '💳',
      price: '$49/month',
      originalPrice: '$80/month',
      features: ['Automated categorization', 'Receipt scanning', 'Budget tracking', 'Financial insights', 'Tax preparation', 'Multi-currency support'],
      benefits: ['Save 5+ hours/month', 'Better budget control', 'Tax-ready reports', 'Financial awareness'],
      marketPrice: '$80-150/month',
      category: 'finance',
      technologies: ['OCR API', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Bank APIs'],
      link: 'https://ziontechgroup.com/ai-expense-tracker'
    },
    {
      id: 'investment-analyzer',
      title: 'AI Investment Analyzer',
      description: 'Advanced investment analysis with AI-powered market predictions and portfolio optimization.',
      icon: '📈',
      price: '$199/month',
      originalPrice: '$350/month',
      features: ['Market analysis', 'Portfolio optimization', 'Risk assessment', 'Investment recommendations', 'Real-time alerts', 'Performance tracking'],
      benefits: ['Make better investment decisions', 'Optimize portfolio returns', 'Reduce risk', 'Stay informed'],
      marketPrice: '$300-600/month',
      category: 'finance',
      technologies: ['Financial APIs', 'Machine Learning', 'React', 'Python', 'PostgreSQL', 'Real-time Data'],
      popular: true,
      link: 'https://ziontechgroup.com/ai-investment-analyzer'
    },

    // Development Services
    {
      id: 'api-testing-suite',
      title: 'API Testing Suite',
      description: 'Comprehensive API testing with automated test generation and performance monitoring.',
      icon: '🔧',
      price: '$129/month',
      originalPrice: '$200/month',
      features: ['Automated test generation', 'Performance monitoring', 'Security testing', 'Load testing', 'Documentation generation', 'CI/CD integration'],
      benefits: ['Reduce testing time by 70%', 'Catch bugs early', 'Improve API reliability', 'Faster development cycles'],
      marketPrice: '$200-400/month',
      category: 'development',
      technologies: ['Jest', 'Postman API', 'React', 'Node.js', 'Docker', 'Kubernetes'],
      link: 'https://ziontechgroup.com/api-testing-suite'
    },
    {
      id: 'database-optimizer',
      title: 'Database Performance Optimizer',
      description: 'AI-powered database optimization with query analysis and performance recommendations.',
      icon: '🗄️',
      price: '$179/month',
      originalPrice: '$300/month',
      features: ['Query optimization', 'Performance monitoring', 'Index recommendations', 'Capacity planning', 'Security scanning', 'Backup automation'],
      benefits: ['Improve database performance', 'Reduce costs', 'Prevent downtime', 'Better scalability'],
      marketPrice: '$250-500/month',
      category: 'development',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Machine Learning', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/database-optimizer'
    },

    // Analytics Services
    {
      id: 'business-intelligence-dashboard',
      title: 'Business Intelligence Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and predictive modeling.',
      icon: '📊',
      price: '$249/month',
      originalPrice: '$400/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization', 'Automated reports', 'KPI tracking'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve business performance', 'Save reporting time'],
      marketPrice: '$400-800/month',
      category: 'analytics',
      technologies: ['Tableau', 'Power BI', 'Machine Learning', 'React', 'Python', 'PostgreSQL'],
      popular: true,
      link: 'https://ziontechgroup.com/business-intelligence-dashboard'
    },
    {
      id: 'website-analytics-pro',
      title: 'Website Analytics Pro',
      description: 'Advanced website analytics with user behavior tracking and conversion optimization.',
      icon: '🌐',
      price: '$99/month',
      originalPrice: '$150/month',
      features: ['User behavior tracking', 'Conversion funnel analysis', 'Heatmap generation', 'A/B testing', 'Real-time monitoring', 'Custom events'],
      benefits: ['Improve conversion rates', 'Better user experience', 'Data-driven optimization', 'Higher ROI'],
      marketPrice: '$150-300/month',
      category: 'analytics',
      technologies: ['Google Analytics API', 'React', 'Node.js', 'MongoDB', 'Redis', 'WebSocket'],
      link: 'https://ziontechgroup.com/website-analytics-pro'
    },

    // Automation Services
    {
      id: 'workflow-automation',
      title: 'Workflow Automation Engine',
      description: 'Powerful workflow automation with AI-powered decision making and integration capabilities.',
      icon: '🔄',
      price: '$199/month',
      originalPrice: '$350/month',
      features: ['Visual workflow builder', 'AI decision making', '500+ integrations', 'Custom triggers', 'Error handling', 'Analytics dashboard'],
      benefits: ['Automate repetitive tasks', 'Reduce human error', 'Improve efficiency', 'Scale operations'],
      marketPrice: '$300-600/month',
      category: 'automation',
      technologies: ['Zapier API', 'OpenAI GPT', 'React', 'Node.js', 'PostgreSQL', 'Webhook APIs'],
      popular: true,
      link: 'https://ziontechgroup.com/workflow-automation'
    },
    {
      id: 'data-sync-manager',
      title: 'Data Sync Manager',
      description: 'Automated data synchronization between different systems and platforms.',
      icon: '🔄',
      price: '$149/month',
      originalPrice: '$250/month',
      features: ['Real-time sync', 'Data transformation', 'Conflict resolution', 'Error handling', 'Monitoring dashboard', 'Custom mappings'],
      benefits: ['Keep data consistent', 'Reduce manual work', 'Prevent data loss', 'Improve accuracy'],
      marketPrice: '$200-400/month',
      category: 'automation',
      technologies: ['ETL Pipelines', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Message Queues'],
      link: 'https://ziontechgroup.com/data-sync-manager'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const popularServices = microSAASServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable, powerful AI-driven micro SAAS tools for modern businesses. Starting from $49/month with 24/7 support and instant setup." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity software, affordable saas, ai-powered solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful AI-driven tools for modern businesses. Affordable, scalable, and ready to transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-lg px-8 py-4"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Get Free Demo
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">Ready-to-use Tools</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$49</div>
                <div className="text-gray-300">Starting Price</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">5min</div>
                <div className="text-gray-300">Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Most Popular Services
            </h2>
            <p className="text-xl text-gray-300">
              Our most requested and highest-rated micro SAAS solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {popularServices.map((service, index) => (
              <div key={service.id} className="cyber-card hologram-card group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">Market price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    aria-label="Call to get started"
                  >
                    📞
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              All Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300">
              Complete suite of AI-powered tools for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="cyber-card hologram-card group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === service.category)?.name}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-cyan-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center inline-flex items-center justify-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-green-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                    aria-label="Call to get started"
                  >
                    📞
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our micro SAAS solutions today. Free consultation, custom setup, and 24/7 support included.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Setup</h3>
              <p className="text-gray-300">Get started in under 5 minutes with our automated setup process</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all your business data</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert technical team</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-lg px-8 py-4"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-lg px-8 py-4"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Available 24/7 for support and consultations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;