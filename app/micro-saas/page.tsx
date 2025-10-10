'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Search, Filter, ExternalLink, Mail, Calendar, DollarSign, Globe, Eye, Code, Settings, Target, FileText, Smartphone, Laptop, Headphones, Camera, Video, Mic, Image, File, Folder, Archive, Trash2, Edit, Copy, Share, Link, Bell, Clock, MapPin, Phone, User, UserPlus, UserCheck, UserX, Crown, Award, Trophy, Medal, Gift, ShoppingCart, CreditCard, Wallet, Banknote, Coins, PieChart, BarChart, LineChart, TrendingDown, Minus, Plus, X, Check, AlertCircle, Info, HelpCircle, Lightbulb, BookOpen, GraduationCap, Briefcase, Home, Building, Factory, Store, ShoppingBag, Package, Truck, Plane, Car, Bike, Train, Ship, Rocket, Satellite, Wifi, Bluetooth, Radio, Signal, Battery, Power, Sun, Moon, CloudRain, CloudSnow, CloudLightning, Wind, Thermometer, Droplets, Flame, Snowflake, Umbrella, TreePine, Flower, Leaf, Sprout, Tree, Mountain, Waves, Fish, Bird, Cat, Dog, Rabbit, Mouse, Bug, Spider, Butterfly, Bee, Ant, Ladybug, Snail, Octopus, Whale, Shark, Dolphin, Penguin, Eagle, Owl, Parrot, Peacock, Flamingo, Toucan, Hummingbird, Robin, Sparrow, Crow, Raven, Dove, Pigeon, Chicken, Rooster, Duck, Goose, Swan, Turkey } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  category: string;
  link: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'Zion Analytics Intelligence Pro',
      description: 'Advanced real-time business intelligence platform with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
      features: ['Real-time Data Visualization', 'AI Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Anomaly Detection', 'ROI Tracking', 'White-label Solutions', 'API Integration', 'Mobile App'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Increase data insights by 400%', 'Reduce reporting time by 90%', 'Predictive forecasting', 'Custom dashboards'],
      category: 'analytics',
      link: 'https://ziontechgroup.com/zion-analytics-intelligence-pro',
      popular: true
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'Zion AI Chat Pro',
      description: 'Next-generation AI customer support platform with GPT-4 integration, advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 & Claude Integration', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support', 'Knowledge Base Management', 'Analytics Dashboard', 'Custom Training', 'API Integration'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce support costs by 70%', '24/7 availability', 'Instant responses', 'Improved customer satisfaction'],
      category: 'support',
      link: 'https://ziontechgroup.com/zion-ai-chat-pro',
      popular: true
    },
    {
      id: '3',
      icon: Zap,
      title: 'Zion Content Studio AI',
      description: 'Complete AI-powered content creation suite with GPT-4 integration, brand voice training, multi-language support, and automated publishing.',
      features: ['GPT-4 & Claude Integration', 'Brand Voice AI Training', 'Multi-language Support (50+ languages)', 'SEO Optimization Engine', 'Content Calendar & Scheduling', 'Plagiarism Detection', 'A/B Testing Tools', 'Social Media Auto-Posting', 'Video Content Creation', 'Image Generation'],
      price: '$89/month',
      marketPrice: '$200-500/month',
      benefits: ['Save 80% content creation time', 'Increase engagement by 300%', 'SEO-optimized content', 'Multi-platform publishing'],
      category: 'content',
      link: 'https://ziontechgroup.com/zion-content-studio-ai',
      popular: true
    },
    {
      id: '4',
      icon: Shield,
      title: 'Zion Security Shield Pro',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, compliance management, and 24/7 security operations center.',
      features: ['AI Threat Detection', 'Real-time Monitoring', 'Automated Incident Response', 'Compliance Management (SOC2, GDPR, HIPAA)', 'Vulnerability Scanning', 'Security Training Modules', 'Penetration Testing', '24/7 Security Operations Center', 'Threat Intelligence', 'Incident Forensics'],
      price: '$299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce security incidents by 95%', 'Automated threat response', 'Compliance assurance', '24/7 monitoring'],
      category: 'security',
      link: 'https://ziontechgroup.com/zion-security-shield-pro',
      popular: true
    },
    {
      id: '5',
      icon: Target,
      title: 'Zion Project Master AI',
      description: 'AI-powered project management with intelligent resource allocation, risk prediction, automated workflow optimization, and team collaboration tools.',
      features: ['AI Resource Optimization', 'Risk Prediction & Mitigation', 'Automated Task Assignment', 'Time Tracking & Billing', 'Team Collaboration Tools', 'Gantt Chart Automation', 'Budget Forecasting', 'Client Portal Integration', 'Agile/Scrum Support', 'Resource Planning'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase project success rate by 40%', 'Automated resource allocation', 'Risk mitigation', 'Improved team productivity'],
      category: 'productivity',
      link: 'https://ziontechgroup.com/zion-project-master-ai',
      popular: true
    },
    {
      id: '6',
      icon: Users,
      title: 'Zion CRM Intelligence Pro',
      description: 'AI-enhanced CRM with predictive lead scoring, automated follow-ups, intelligent sales forecasting, and revenue optimization.',
      features: ['AI Lead Scoring', 'Automated Follow-up Sequences', 'Sales Forecasting', 'Customer Journey Mapping', 'Email Integration', 'Call Recording & Analysis', 'Pipeline Management', 'Revenue Optimization', 'Deal Prediction', 'Customer Health Scoring'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase sales by 35%', 'Automated lead nurturing', 'Better conversion rates', 'Revenue optimization'],
      category: 'sales',
      link: 'https://ziontechgroup.com/zion-crm-intelligence-pro',
      popular: true
    },
    {
      id: '7',
      icon: Mail,
      title: 'Zion Email Marketing Pro',
      description: 'Advanced email marketing platform with AI personalization, behavioral triggers, A/B testing, and advanced analytics for maximum ROI.',
      features: ['AI Personalization Engine', 'Advanced A/B Testing', 'Behavioral Trigger Automation', 'Email Template Builder', 'List Segmentation', 'Deliverability Optimization', 'Analytics & Reporting', 'Integration with 100+ tools', 'Automated Workflows', 'Subject Line Optimization'],
      price: '$69/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase open rates by 250%', 'Automated personalization', 'Better deliverability', 'Advanced analytics'],
      category: 'marketing',
      link: 'https://ziontechgroup.com/zion-email-marketing-pro',
      popular: true
    },
    {
      id: '8',
      icon: DollarSign,
      title: 'Zion Invoice Genius AI',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, tax calculations, and financial insights.',
      features: ['AI Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking & Reminders', 'Tax Calculation & Filing', 'Client Portal', 'Financial Reporting', 'Integration with Accounting Software', 'Expense Tracking', 'Budget Management'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays by 60%', 'Automated tax calculations', 'Professional invoices'],
      category: 'finance',
      link: 'https://ziontechgroup.com/zion-invoice-genius-ai',
      popular: true
    },
    {
      id: '9',
      icon: Globe,
      title: 'Zion Social Scheduler AI',
      description: 'Intelligent social media management with AI content optimization, optimal posting times, engagement analytics, and multi-platform publishing.',
      features: ['AI Content Optimization', 'Optimal Posting Time Detection', 'Multi-platform Publishing', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Content Calendar', 'Team Collaboration', 'Influencer Management', 'Social Listening'],
      price: '$59/month',
      marketPrice: '$120-400/month',
      benefits: ['Increase engagement by 200%', 'Optimal posting times', 'Content optimization', 'Multi-platform management'],
      category: 'social',
      link: 'https://ziontechgroup.com/zion-social-scheduler-ai',
      popular: true
    },
    {
      id: '10',
      icon: Eye,
      title: 'Zion AI Video Editor Pro',
      description: 'AI-powered video editing platform with automatic editing, voice synthesis, multi-format export, and professional quality output.',
      features: ['AI Auto-Editing', 'Voice Synthesis & Dubbing', 'Multi-format Export', 'Template Library', 'Color Correction AI', 'Audio Enhancement', 'Subtitle Generation', 'Cloud Rendering', 'Motion Graphics', 'Green Screen Removal'],
      price: '$89/month',
      marketPrice: '$200-600/month',
      benefits: ['Save 70% editing time', 'Professional quality output', 'Automated editing', 'Multi-format support'],
      category: 'video',
      link: 'https://ziontechgroup.com/zion-ai-video-editor-pro',
      popular: true
    },
    {
      id: '11',
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with real-time translation, context understanding, industry-specific terminology, and quality assurance.',
      features: ['Real-time Translation', 'Context-Aware Translation', 'Industry-Specific Terminology', 'Voice Translation', 'Document Translation', 'Website Translation', 'API Integration', 'Quality Assurance', 'Multi-language Support', 'Cultural Adaptation'],
      price: '$79/month',
      marketPrice: '$150-500/month',
      benefits: ['99.5% translation accuracy', 'Real-time translation', 'Industry-specific terms', 'Multi-format support'],
      category: 'translation',
      link: 'https://ziontechgroup.com/zion-ai-translator-pro',
      popular: true
    },
    {
      id: '12',
      icon: Code,
      title: 'Zion AI Code Reviewer Pro',
      description: 'Intelligent code review platform with automated bug detection, security analysis, performance optimization, and best practice suggestions.',
      features: ['Automated Bug Detection', 'Security Vulnerability Scanning', 'Performance Optimization', 'Code Quality Metrics', 'Best Practice Suggestions', 'Multi-language Support', 'Integration with Git', 'Team Collaboration', 'Code Documentation', 'Refactoring Suggestions'],
      price: '$99/month',
      marketPrice: '$200-800/month',
      benefits: ['Reduce bugs by 80%', 'Improve code quality', 'Security vulnerability detection', 'Performance optimization'],
      category: 'development',
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer-pro',
      popular: true
    },
    {
      id: '13',
      icon: Users,
      title: 'Zion AI Customer Insights Pro',
      description: 'Advanced customer analytics platform with sentiment analysis, churn prediction, personalized recommendations, and behavioral analytics.',
      features: ['Sentiment Analysis', 'Churn Prediction', 'Customer Segmentation', 'Personalized Recommendations', 'Behavioral Analytics', 'Survey Analysis', 'NPS Tracking', 'ROI Measurement', 'Customer Journey Mapping', 'Predictive Modeling'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Increase customer retention by 40%', 'Predict customer churn', 'Personalized experiences', 'Data-driven insights'],
      category: 'analytics',
      link: 'https://ziontechgroup.com/zion-ai-customer-insights-pro',
      popular: true
    },
    {
      id: '14',
      icon: Calendar,
      title: 'Zion Scheduler AI Pro',
      description: 'Intelligent scheduling platform with AI optimization, automated meeting coordination, time zone management, and resource booking.',
      features: ['AI Scheduling Optimization', 'Calendar Integration', 'Automated Reminders', 'Meeting Analytics', 'Time Zone Management', 'Resource Booking', 'Conflict Resolution', 'Recurring Events', 'Team Scheduling', 'Client Portal'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Reduce scheduling time by 80%', 'Automated coordination', 'Better time management', 'Reduced no-shows'],
      category: 'productivity',
      link: 'https://ziontechgroup.com/zion-scheduler-ai-pro',
      popular: true
    },
    {
      id: '15',
      icon: DollarSign,
      title: 'Zion Expense Tracker AI Pro',
      description: 'AI-powered expense management with receipt scanning, automated categorization, budget tracking, and tax preparation.',
      features: ['Receipt Scanning', 'AI Categorization', 'Budget Tracking', 'Tax Preparation', 'Multi-currency', 'Team Management', 'Expense Approval Workflows', 'Integration with Accounting', 'Fraud Detection', 'Spending Analytics'],
      price: '$29/month',
      marketPrice: '$60-150/month',
      benefits: ['Save 70% expense tracking time', 'Automated categorization', 'Tax-ready reports', 'Budget insights'],
      category: 'finance',
      link: 'https://ziontechgroup.com/zion-expense-tracker-ai-pro',
      popular: true
    },
    {
      id: '16',
      icon: Search,
      title: 'Zion SEO Optimizer AI Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, ranking tracking, and technical audits.',
      features: ['AI SEO Analysis', 'Keyword Research', 'Content Suggestions', 'Ranking Tracking', 'Technical Audits', 'Competitor Analysis', 'Link Building', 'Local SEO', 'Schema Markup', 'Performance Monitoring'],
      price: '$59/month',
      marketPrice: '$120-400/month',
      benefits: ['Increase organic traffic by 200%', 'Automated SEO optimization', 'Better rankings', 'Comprehensive analysis'],
      category: 'marketing',
      link: 'https://ziontechgroup.com/zion-seo-optimizer-ai-pro',
      popular: true
    },
    {
      id: '17',
      icon: BarChart3,
      title: 'Zion Ad Campaign Manager AI',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms.',
      features: ['Multi-platform Ads', 'AI Optimization', 'Budget Management', 'Performance Tracking', 'Auto-bidding', 'A/B Testing', 'Audience Targeting', 'Creative Optimization', 'ROI Analysis', 'Campaign Automation'],
      price: '$79/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase ad ROI by 150%', 'Automated optimization', 'Better targeting', 'Performance tracking'],
      category: 'marketing',
      link: 'https://ziontechgroup.com/zion-ad-campaign-manager-ai',
      popular: true
    },
    {
      id: '18',
      icon: Settings,
      title: 'Zion API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, testing tools, and version control.',
      features: ['API Creation', 'Documentation Generation', 'Testing Tools', 'Version Control', 'Rate Limiting', 'Authentication', 'Monitoring', 'Analytics', 'Integration Testing', 'Performance Optimization'],
      price: '$69/month',
      marketPrice: '$120-400/month',
      benefits: ['Reduce API development time by 60%', 'Automated documentation', 'Better testing', 'Easy management'],
      category: 'development',
      link: 'https://ziontechgroup.com/zion-api-builder-pro',
      popular: true
    },
    {
      id: '19',
      icon: Shield,
      title: 'Zion Bug Tracker AI Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, resolution suggestions, and team collaboration.',
      features: ['AI Issue Detection', 'Priority Scoring', 'Resolution Suggestions', 'Team Collaboration', 'Integration APIs', 'Automated Testing', 'Performance Monitoring', 'User Feedback', 'Release Management', 'Quality Metrics'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Reduce bug resolution time by 50%', 'Automated prioritization', 'Better collaboration', 'Quality improvement'],
      category: 'development',
      link: 'https://ziontechgroup.com/zion-bug-tracker-ai-pro',
      popular: true
    },
    {
      id: '20',
      icon: Users,
      title: 'Zion HR Management AI Pro',
      description: 'AI-powered HR management with recruitment automation, employee analytics, performance tracking, and workforce optimization.',
      features: ['Recruitment Automation', 'Employee Analytics', 'Performance Tracking', 'Workforce Optimization', 'Payroll Management', 'Benefits Administration', 'Training Management', 'Compliance Tracking', 'Employee Self-Service', 'Talent Management'],
      price: '$89/month',
      marketPrice: '$180-500/month',
      benefits: ['Reduce HR workload by 60%', 'Better employee insights', 'Automated processes', 'Compliance assurance'],
      category: 'hr',
      link: 'https://ziontechgroup.com/zion-hr-management-ai-pro',
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasProducts.length },
    { id: 'analytics', name: 'Analytics & BI', count: microSaasProducts.filter(p => p.category === 'analytics').length },
    { id: 'support', name: 'Customer Support', count: microSaasProducts.filter(p => p.category === 'support').length },
    { id: 'content', name: 'Content & Marketing', count: microSaasProducts.filter(p => p.category === 'content').length },
    { id: 'security', name: 'Security', count: microSaasProducts.filter(p => p.category === 'security').length },
    { id: 'productivity', name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'productivity').length },
    { id: 'sales', name: 'Sales & CRM', count: microSaasProducts.filter(p => p.category === 'sales').length },
    { id: 'marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'marketing').length },
    { id: 'finance', name: 'Finance', count: microSaasProducts.filter(p => p.category === 'finance').length },
    { id: 'social', name: 'Social Media', count: microSaasProducts.filter(p => p.category === 'social').length },
    { id: 'video', name: 'Video & Media', count: microSaasProducts.filter(p => p.category === 'video').length },
    { id: 'translation', name: 'Translation', count: microSaasProducts.filter(p => p.category === 'translation').length },
    { id: 'development', name: 'Development', count: microSaasProducts.filter(p => p.category === 'development').length },
    { id: 'hr', name: 'HR Management', count: microSaasProducts.filter(p => p.category === 'hr').length }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: CheckCircle
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI-powered intelligence and rapid deployment.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cyber-card-enhanced">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                      <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{product.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center cyber-card-enhanced">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MicroSaasPage;