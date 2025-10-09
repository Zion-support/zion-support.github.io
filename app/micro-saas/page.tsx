import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, MessageCircle, Mic } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content 10x faster with advanced AI. Create blogs, social media posts, emails, and marketing copy.',
      icon: FileText,
      price: 29,
      period: 'month',
      features: [
        '50+ Content Templates',
        '10x Faster Writing',
        'SEO Optimization',
        'Brand Voice Training',
        '50+ Languages Support',
        'Plagiarism Checker',
        'Content Calendar',
        'Team Collaboration'
      ],
      category: 'Content & Marketing',
      popular: true,
      savings: '$2,400/year vs hiring writers'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-powered posting, engagement, and analytics.',
      icon: Globe,
      price: 49,
      period: 'month',
      features: [
        'Auto Post Scheduling',
        'AI-Generated Captions',
        'Hashtag Optimization',
        'Engagement Analytics',
        'Multi-Platform Support',
        'Content Calendar',
        'Trend Analysis',
        'Auto-Responder'
      ],
      category: 'Content & Marketing',
      popular: true,
      savings: '$3,600/year vs social media manager'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Create, send, and optimize email campaigns with AI-powered personalization and automation.',
      icon: Mail,
      price: 39,
      period: 'month',
      features: [
        'AI Email Templates',
        'Personalization Engine',
        'A/B Testing',
        'Send Time Optimization',
        'List Segmentation',
        'Analytics Dashboard',
        'Automation Workflows',
        'Deliverability Tools'
      ],
      category: 'Content & Marketing',
      savings: '$2,880/year vs email marketing tools'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Get intelligent insights from your data with AI-powered analytics and automated reporting.',
      icon: BarChart,
      price: 79,
      period: 'month',
      features: [
        'Real-time Analytics',
        'AI Insights & Predictions',
        'Custom Dashboards',
        'Automated Reports',
        'Data Visualization',
        'Trend Analysis',
        'Alert System',
        'API Integrations'
      ],
      category: 'Analytics & Data',
      popular: true,
      savings: '$4,800/year vs analytics consultants'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI that understands context and escalates when needed.',
      icon: Users,
      price: 99,
      period: 'month',
      features: [
        '24/7 AI Chat Support',
        'Multi-language Support',
        'Context Understanding',
        'Human Handoff',
        'Knowledge Base Integration',
        'Sentiment Analysis',
        'Ticket Management',
        'Performance Analytics'
      ],
      category: 'Customer Service',
      popular: true,
      savings: '$7,200/year vs customer support staff'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Streamline project management with AI-powered task allocation, timeline optimization, and risk prediction.',
      icon: Calendar,
      price: 59,
      period: 'month',
      features: [
        'Smart Task Allocation',
        'Timeline Optimization',
        'Risk Prediction',
        'Resource Management',
        'Progress Tracking',
        'Team Collaboration',
        'Automated Reports',
        'Integration Hub'
      ],
      category: 'Productivity',
      savings: '$4,200/year vs project management tools'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator',
      description: 'Create stunning images, logos, and graphics with AI. Perfect for marketing, social media, and presentations.',
      icon: Image,
      price: 39,
      period: 'month',
      features: [
        'Text-to-Image Generation',
        'Logo Creation',
        'Image Enhancement',
        'Style Transfer',
        'Background Removal',
        'Bulk Processing',
        'Commercial License',
        'API Access'
      ],
      category: 'Design & Media',
      savings: '$2,400/year vs graphic designers'
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      description: 'Create professional videos with AI-powered editing, auto-captioning, and smart transitions.',
      icon: Video,
      price: 69,
      period: 'month',
      features: [
        'Auto Video Editing',
        'Smart Captions',
        'Background Music',
        'Transitions & Effects',
        'Voice Synthesis',
        'Multi-format Export',
        'Cloud Storage',
        'Collaboration Tools'
      ],
      category: 'Design & Media',
      savings: '$3,600/year vs video editors'
    },
    {
      id: 'ai-data-scraper',
      name: 'AI Data Scraper Pro',
      description: 'Extract and process data from any website with AI-powered parsing and data cleaning.',
      icon: Database,
      price: 49,
      period: 'month',
      features: [
        'Smart Data Extraction',
        'Anti-Detection Technology',
        'Data Cleaning & Validation',
        'Scheduled Scraping',
        'Multiple Formats Export',
        'Proxy Support',
        'API Integration',
        'Compliance Tools'
      ],
      category: 'Data & Automation',
      savings: '$2,880/year vs data extraction services'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Boost your website rankings with AI-powered SEO analysis, keyword research, and content optimization.',
      icon: TrendingUp,
      price: 59,
      period: 'month',
      features: [
        'Keyword Research',
        'Content Optimization',
        'Technical SEO Audit',
        'Competitor Analysis',
        'Rank Tracking',
        'Link Building',
        'Local SEO',
        'Performance Reports'
      ],
      category: 'Marketing & SEO',
      savings: '$3,600/year vs SEO agencies'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website without coding. Train them on your specific business knowledge.',
      icon: MessageCircle,
      price: 79,
      period: 'month',
      features: [
        'No-Code Builder',
        'Custom Training',
        'Multi-channel Support',
        'Analytics Dashboard',
        'Integration Hub',
        'A/B Testing',
        'Human Handoff',
        'Custom Branding'
      ],
      category: 'Customer Service',
      savings: '$4,800/year vs chatbot development'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automate invoicing with AI-powered templates, payment tracking, and financial reporting.',
      icon: DollarSign,
      price: 29,
      period: 'month',
      features: [
        'Smart Invoice Templates',
        'Auto Payment Tracking',
        'Tax Calculations',
        'Recurring Billing',
        'Client Portal',
        'Financial Reports',
        'Multi-currency Support',
        'Integration APIs'
      ],
      category: 'Finance & Accounting',
      savings: '$1,200/year vs accounting software'
    },
    {
      id: 'ai-meeting-scheduler',
      name: 'AI Meeting Scheduler',
      description: 'Intelligently schedule meetings, send reminders, and optimize calendar management across teams.',
      icon: Calendar,
      price: 39,
      period: 'month',
      features: [
        'Smart Scheduling',
        'Time Zone Handling',
        'Meeting Optimization',
        'Auto Reminders',
        'Calendar Integration',
        'Team Coordination',
        'Meeting Analytics',
        'Custom Rules'
      ],
      category: 'Productivity',
      savings: '$1,800/year vs scheduling tools'
    },
    {
      id: 'ai-code-generator',
      name: 'AI Code Generator',
      description: 'Generate clean, production-ready code from natural language descriptions. Support for 20+ programming languages.',
      icon: Code,
      price: 89,
      period: 'month',
      features: [
        '20+ Programming Languages',
        'Natural Language Input',
        'Code Review & Optimization',
        'Documentation Generation',
        'Test Case Creation',
        'API Integration',
        'Version Control',
        'Team Collaboration'
      ],
      category: 'Development',
      popular: true,
      savings: '$6,000/year vs developer time'
    },
    {
      id: 'ai-translator',
      name: 'AI Translator Pro',
      description: 'Translate content in real-time with context-aware AI that maintains tone and meaning across 100+ languages.',
      icon: Globe,
      price: 49,
      period: 'month',
      features: [
        '100+ Languages',
        'Context-Aware Translation',
        'Tone Preservation',
        'Bulk Translation',
        'API Integration',
        'Quality Scoring',
        'Custom Dictionaries',
        'Real-time Translation'
      ],
      category: 'Content & Marketing',
      savings: '$2,400/year vs translation services'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Create custom voice assistants for your business with natural language processing and voice synthesis.',
      icon: Mic,
      price: 99,
      period: 'month',
      features: [
        'Custom Voice Training',
        'Natural Language Processing',
        'Multi-language Support',
        'API Integration',
        'Voice Analytics',
        'Custom Commands',
        'Cloud Deployment',
        'Scalable Infrastructure'
      ],
      category: 'AI & Automation',
      savings: '$7,200/year vs voice assistant development'
    }
  ];

  const categories = [
    { name: 'Content & Marketing', icon: FileText, count: 4 },
    { name: 'Analytics & Data', icon: BarChart, count: 1 },
    { name: 'Customer Service', icon: Users, count: 2 },
    { name: 'Productivity', icon: Calendar, count: 2 },
    { name: 'Design & Media', icon: Image, count: 2 },
    { name: 'Data & Automation', icon: Database, count: 1 },
    { name: 'Marketing & SEO', icon: TrendingUp, count: 1 },
    { name: 'Finance & Accounting', icon: DollarSign, count: 1 },
    { name: 'Development', icon: Code, count: 1 },
    { name: 'AI & Automation', icon: Brain, count: 1 }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Access to 5 AI Tools',
        '10,000 AI Generations/month',
        'Basic Analytics',
        'Email Support',
        'Standard Templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Access to All AI Tools',
        '50,000 AI Generations/month',
        'Advanced Analytics',
        'Priority Support',
        'Custom Templates',
        'API Access',
        'Team Collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited AI Tools',
        'Unlimited Generations',
        'Custom AI Training',
        'Dedicated Support',
        'White-label Solution',
        'Advanced Integrations',
        'Custom Development',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven tools for modern businesses. 16+ ready-to-use applications starting at just $29/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Trial
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">16+</div>
              <div className="text-gray-300 text-sm">AI Tools</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">$2.4M+</div>
              <div className="text-gray-300 text-sm">Client Savings</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Tool Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <category.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} tools</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Tools */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our AI-Powered Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  {service.savings && (
                    <p className="text-green-400 text-sm mt-1">{service.savings}</p>
                  )}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full cyber-button text-center">
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes, not months. No complex installations or lengthy onboarding.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud-Native</h3>
              <p className="text-gray-300">Built for the cloud with 99.9% uptime and automatic scaling.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Advanced AI that learns and improves with your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
              <p className="text-gray-300">Connect with 100+ popular tools and services via APIs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Trusted by 10,000+ businesses with proven ROI and success stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already saving time and money with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Start Free Trial
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
