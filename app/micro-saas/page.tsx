'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  FileText,
  Target,
  Shield,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Settings,
  Heart,
  Cpu,
  Link as LinkIcon,
  Server,
  Package,
  Mic,
  Eye,
  Wifi,
  Monitor,
  ShoppingCart,
  Headphones,
  DollarSign,
  Calendar,
  Lock,
  Database,
  Globe,
  Smartphone,
  Code,
  Workflow,
  Brain,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Bell,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasServices = [
    // Business Intelligence & Analytics
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and automated reporting.',
      category: 'analytics',
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Multi-tenant Architecture',
        'API Integration',
        'Mobile App Access'
      ],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'ROI tracking'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/analytics-pro'
    },
    {
      icon: TrendingUp,
      title: 'Zion Revenue Optimizer',
      description: 'AI-powered revenue optimization platform that analyzes pricing strategies, customer behavior, and market trends.',
      category: 'analytics',
      features: [
        'Dynamic Pricing Analysis',
        'Customer Lifetime Value Prediction',
        'Market Trend Analysis',
        'Competitive Intelligence',
        'Revenue Forecasting',
        'A/B Testing Platform',
        'ROI Optimization',
        'Real-time Alerts'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: [
        'Increase revenue by 25%',
        'Optimize pricing strategies',
        'Predict customer behavior',
        'Maximize profit margins'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/revenue-optimizer'
    },

    // Customer Experience & Support
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      category: 'customer',
      features: [
        'GPT-4 Powered AI',
        'Multi-channel Support',
        'Advanced Sentiment Analysis',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Multi-language Support',
        'Knowledge Base Integration',
        'Performance Analytics'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/chat-ai'
    },
    {
      icon: Users,
      title: 'Zion Customer Insights',
      description: 'Comprehensive customer analytics platform that tracks behavior, preferences, and engagement across all touchpoints.',
      category: 'customer',
      features: [
        'Customer Journey Mapping',
        'Behavioral Analytics',
        'Engagement Scoring',
        'Churn Prediction',
        'Personalization Engine',
        'Segmentation Tools',
        'Campaign Tracking',
        'ROI Measurement'
      ],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: [
        'Better customer understanding',
        'Reduced churn rate',
        'Improved engagement',
        'Higher conversion rates'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/customer-insights'
    },

    // Content & Marketing
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      category: 'content',
      features: [
        'AI Content Generation',
        'SEO Optimization',
        'Brand Voice Customization',
        'Multi-platform Publishing',
        'Content Calendar',
        'Performance Analytics',
        'Team Collaboration',
        'Template Library'
      ],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/content-studio'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      category: 'marketing',
      features: [
        'AI-powered Lead Scoring',
        'Multi-channel Lead Capture',
        'Automated Lead Nurturing',
        'CRM Integration',
        'Advanced Analytics',
        'A/B Testing',
        'Email Marketing',
        'Social Media Integration'
      ],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/lead-magnet'
    },

    // Financial & Accounting
    {
      icon: DollarSign,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
      category: 'finance',
      features: [
        'AI-powered Invoice Generation',
        'Automated Recurring Billing',
        'Multi-currency Support',
        'Payment Tracking',
        'Tax Calculation',
        'Client Portal',
        'Financial Reporting',
        'Expense Management'
      ],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/invoice-genius'
    },
    {
      icon: BarChart,
      title: 'Zion Expense Tracker',
      description: 'Smart expense tracking and management with receipt scanning, categorization, and budget monitoring.',
      category: 'finance',
      features: [
        'Receipt Scanning & OCR',
        'Automatic Categorization',
        'Budget Monitoring',
        'Tax Preparation',
        'Multi-user Access',
        'Mobile App',
        'Integration with Accounting Software',
        'Expense Analytics'
      ],
      price: 'Starting at $29/month',
      marketPrice: '$50-150/month',
      benefits: [
        'Automated expense tracking',
        'Better budget control',
        'Tax preparation ready',
        'Time savings'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/expense-tracker'
    },

    // Security & Compliance
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      category: 'security',
      features: [
        'Real-time Threat Monitoring',
        'Vulnerability Scanning',
        'Incident Response',
        'Security Analytics',
        'Compliance Reporting',
        'Employee Training',
        'Dark Web Monitoring',
        'Security Audits'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/security-shield'
    },
    {
      icon: Lock,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      category: 'security',
      features: [
        'Automated Compliance Checks',
        'Document Management',
        'Audit Trail',
        'Risk Assessment',
        'Policy Templates',
        'Training Modules',
        'Reporting Dashboard',
        'Alert System'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: [
        'Automated compliance',
        'Reduced audit risk',
        'Document organization',
        'Regulatory updates'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/compliance-manager'
    },

    // Cloud & Infrastructure
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and version control.',
      category: 'cloud',
      features: [
        'Automated Backups',
        'Cross-platform Sync',
        'Version Control',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance Support',
        'File Sharing',
        'Mobile Access'
      ],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/cloud-vault'
    },
    {
      icon: Server,
      title: 'Zion Infrastructure Monitor',
      description: 'Real-time infrastructure monitoring and alerting system for servers, databases, and applications.',
      category: 'cloud',
      features: [
        'Real-time Monitoring',
        'Performance Alerts',
        'Capacity Planning',
        'Uptime Tracking',
        'Log Analysis',
        'Custom Dashboards',
        'API Integration',
        'Mobile Notifications'
      ],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: [
        'Proactive monitoring',
        'Reduced downtime',
        'Better performance',
        'Cost optimization'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/infrastructure-monitor'
    },

    // Productivity & Collaboration
    {
      icon: Workflow,
      title: 'Zion Workflow Automation',
      description: 'Visual workflow automation platform that connects apps and automates business processes without coding.',
      category: 'productivity',
      features: [
        'Visual Workflow Builder',
        'App Integrations',
        'Conditional Logic',
        'Scheduled Tasks',
        'Error Handling',
        'Team Collaboration',
        'Analytics Dashboard',
        'Template Library'
      ],
      price: 'Starting at $69/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Automate repetitive tasks',
        'Improve efficiency',
        'Reduce errors',
        'Save time and money'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/workflow-automation'
    },
    {
      icon: Calendar,
      title: 'Zion Smart Scheduler',
      description: 'AI-powered scheduling and meeting management platform with intelligent time optimization.',
      category: 'productivity',
      features: [
        'AI-powered Scheduling',
        'Calendar Integration',
        'Meeting Optimization',
        'Time Zone Management',
        'Resource Booking',
        'Automated Reminders',
        'Analytics Dashboard',
        'Mobile App'
      ],
      price: 'Starting at $39/month',
      marketPrice: '$80-200/month',
      benefits: [
        'Optimize meeting times',
        'Reduce scheduling conflicts',
        'Improve productivity',
        'Better time management'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/smart-scheduler'
    },

    // E-commerce & Sales
    {
      icon: ShoppingCart,
      title: 'Zion E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization platform for conversion rate optimization and sales analytics.',
      category: 'ecommerce',
      features: [
        'Conversion Rate Optimization',
        'A/B Testing Platform',
        'Customer Behavior Analysis',
        'Product Recommendation Engine',
        'Cart Abandonment Recovery',
        'Sales Analytics',
        'Inventory Management',
        'Multi-platform Support'
      ],
      price: 'Starting at $129/month',
      marketPrice: '$250-700/month',
      benefits: [
        'Increase conversions by 40%',
        'Reduce cart abandonment',
        'Better product recommendations',
        'Higher sales revenue'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ecommerce-optimizer'
    },
    {
      icon: Headphones,
      title: 'Zion Sales Assistant',
      description: 'AI-powered sales assistant that helps with lead qualification, follow-ups, and sales process optimization.',
      category: 'sales',
      features: [
        'Lead Qualification',
        'Automated Follow-ups',
        'Sales Process Optimization',
        'CRM Integration',
        'Performance Analytics',
        'Email Templates',
        'Call Scheduling',
        'Pipeline Management'
      ],
      price: 'Starting at $89/month',
      marketPrice: '$180-500/month',
      benefits: [
        'Improve sales efficiency',
        'Better lead qualification',
        'Automated follow-ups',
        'Higher close rates'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/sales-assistant'
    },

    // HR & People Management
    {
      icon: Users,
      title: 'Zion HR Manager',
      description: 'Comprehensive HR management platform with employee onboarding, performance tracking, and benefits administration.',
      category: 'hr',
      features: [
        'Employee Onboarding',
        'Performance Tracking',
        'Benefits Administration',
        'Time & Attendance',
        'Payroll Integration',
        'Document Management',
        'Employee Self-Service',
        'Analytics Dashboard'
      ],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: [
        'Streamlined HR processes',
        'Better employee experience',
        'Compliance management',
        'Reduced administrative work'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/hr-manager'
    },
    {
      icon: Brain,
      title: 'Zion Learning Management',
      description: 'AI-powered learning management system with personalized training paths and skill assessment.',
      category: 'hr',
      features: [
        'Personalized Learning Paths',
        'Skill Assessment',
        'Course Creation Tools',
        'Progress Tracking',
        'Certification Management',
        'Mobile Learning',
        'Gamification',
        'Analytics Dashboard'
      ],
      price: 'Starting at $59/month',
      marketPrice: '$120-300/month',
      benefits: [
        'Personalized training',
        'Better skill development',
        'Improved employee engagement',
        'Compliance training'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/learning-management'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'analytics', name: 'Analytics & BI', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'customer', name: 'Customer Experience', count: microSaasServices.filter(s => s.category === 'customer').length },
    { id: 'content', name: 'Content & Marketing', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'finance', name: 'Finance & Accounting', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'security', name: 'Security & Compliance', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: microSaasServices.filter(s => s.category === 'cloud').length },
    { id: 'productivity', name: 'Productivity & Collaboration', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'ecommerce', name: 'E-commerce & Sales', count: microSaasServices.filter(s => s.category === 'ecommerce').length },
    { id: 'hr', name: 'HR & People Management', count: microSaasServices.filter(s => s.category === 'hr').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Business Software</title>
        <meta name="description" content="Comprehensive micro SAAS solutions for small and medium businesses including analytics, customer support, content management, and productivity tools." />
        <meta name="keywords" content="micro saas, business software, analytics, customer support, content management, productivity tools, small business" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our micro SAAS solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful Business Software for Modern Companies
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SAAS solutions designed to streamline operations, 
              boost productivity, and drive growth for small and medium businesses. From analytics and 
              customer support to content management and productivity tools.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full mt-1">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm capitalize">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our comprehensive suite of micro SAAS solutions or let us create a custom solution 
                tailored to your specific business needs. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
