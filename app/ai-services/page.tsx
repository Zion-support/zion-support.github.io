'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  MessageSquare,
  BarChart3,
  Workflow,
  FileText,
  Eye,
  Shield,
  Zap,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  Globe,
  Lock,
  Smartphone,
  Database,
  Settings,
  Headphones,
  Code,
  Monitor,
  Wifi,
  Server,
  Package,
  Mic,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Heart,
  TrendingUp,
  ShoppingCart,
  Cpu,
  MessageCircle,
  CheckSquare,
  FileText as FileTextIcon,
  Box,
  Link as LinkIcon,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const aiServices = [
    // AI-Powered Solutions
    {
      icon: MessageSquare,
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-channel support for 24/7 customer engagement.',
      category: 'conversational',
      pricing: 'premium',
      features: [
        'GPT-4 Powered Conversations',
        'Natural Language Processing (NLP)',
        'Sentiment Analysis & Mood Detection',
        'Multi-channel Support (Web, Email, SMS, Voice)',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Knowledge Base Integration',
        'Custom Bot Training & Fine-tuning',
        'Multi-language Support (50+ languages)',
        'Advanced Analytics Dashboard'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Instant response times',
        'Improved customer satisfaction',
        'Lead generation and qualification'
      ],
      link: 'https://ziontechgroup.com/ai-chatbots',
      rating: 4.9,
      users: '2,500+',
      launchDate: '2024-01-15',
      useCases: ['Customer Support', 'Sales Automation', 'Lead Qualification', 'FAQ Automation']
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
      category: 'analytics',
      pricing: 'premium',
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Anomaly Detection & Alerts',
        'Multi-tenant Architecture',
        'API Integration & Webhooks',
        'Machine Learning Model Training',
        'Natural Language Query Interface'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: [
        'Data-driven decision making',
        'Predict future trends and patterns',
        'Automated reporting saves 20+ hours/week',
        'ROI optimization through insights',
        'Real-time business monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-analytics',
      rating: 4.8,
      users: '3,200+',
      launchDate: '2024-01-20',
      useCases: ['Sales Forecasting', 'Customer Behavior Analysis', 'Financial Planning', 'Market Research']
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency and productivity.',
      category: 'automation',
      pricing: 'standard',
      features: [
        'Visual Workflow Builder',
        '500+ App Integrations',
        'Conditional Logic & Triggers',
        'Custom Webhooks & APIs',
        'Team Collaboration on Workflows',
        'Workflow Analytics & Monitoring',
        'Template Library',
        'Enterprise Security Features',
        'AI-powered Process Optimization',
        'Error Handling & Recovery'
      ],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: [
        'Save 20+ hours per week',
        'Reduce human errors by 95%',
        'Improve process efficiency',
        'Scale business operations',
        'Automated compliance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-automation',
      rating: 4.7,
      users: '2,900+',
      launchDate: '2024-01-30',
      useCases: ['Document Processing', 'Email Automation', 'Data Entry', 'Approval Workflows']
    },
    {
      icon: FileText,
      title: 'AI Content Generation & Marketing',
      description: 'Automated content creation using advanced language models for blogs, social media, marketing materials, and more.',
      category: 'content',
      pricing: 'standard',
      features: [
        'GPT-4 Powered Content Generation',
        'Multi-language Support (50+ languages)',
        'SEO Optimization Built-in',
        'Brand Voice Customization',
        'Plagiarism Detection',
        'Content Calendar Integration',
        'Social Media Auto-posting',
        'Analytics & Performance Tracking',
        'A/B Testing for Content',
        'Team Collaboration Tools'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: [
        'Save 90% content creation time',
        'Increase engagement by 300%',
        'Consistent brand voice',
        'SEO-optimized content',
        'Multi-platform publishing'
      ],
      link: 'https://ziontechgroup.com/ai-content',
      rating: 4.9,
      users: '4,100+',
      launchDate: '2024-01-10',
      useCases: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'Product Descriptions']
    },
    {
      icon: Eye,
      title: 'AI Computer Vision & Image Analysis',
      description: 'Image and video analysis solutions for quality control, security, automation, and business intelligence.',
      category: 'vision',
      pricing: 'premium',
      features: [
        'Object Detection & Recognition',
        'Quality Control Automation',
        'Facial Recognition & Analysis',
        'Video Analytics & Processing',
        'Real-time Image Processing',
        'Custom Model Training',
        'API Integration',
        'Batch Processing',
        'Edge Computing Support',
        'Compliance & Privacy Controls'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: [
        'Automated quality control',
        'Enhanced security monitoring',
        'Real-time image analysis',
        'Cost reduction through automation',
        'Improved accuracy and consistency'
      ],
      link: 'https://ziontechgroup.com/ai-vision',
      rating: 4.6,
      users: '1,800+',
      launchDate: '2024-02-01',
      useCases: ['Quality Control', 'Security Monitoring', 'Medical Imaging', 'Retail Analytics']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection & Security',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'security',
      pricing: 'premium',
      features: [
        'Real-time Fraud Monitoring',
        'Behavioral Analysis & Scoring',
        'Risk Assessment & Alerts',
        'Anomaly Detection',
        'Automated Response Actions',
        'Machine Learning Model Updates',
        'Compliance Reporting',
        'Multi-channel Detection',
        'Custom Rule Engine',
        'Integration with Payment Systems'
      ],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready',
        'Automated incident response'
      ],
      link: 'https://ziontechgroup.com/ai-fraud',
      rating: 4.8,
      users: '1,600+',
      launchDate: '2024-01-25',
      useCases: ['Payment Fraud', 'Identity Theft', 'Account Takeover', 'Transaction Monitoring']
    },
    {
      icon: Target,
      title: 'AI Lead Generation & Sales Automation',
      description: 'Intelligent lead scoring, qualification, and automated sales processes to maximize conversion rates.',
      category: 'sales',
      pricing: 'standard',
      features: [
        'AI-powered Lead Scoring',
        'Multi-channel Lead Capture',
        'Automated Lead Nurturing',
        'CRM Integration (Salesforce, HubSpot)',
        'Advanced Analytics & ROI Tracking',
        'A/B Testing for Campaigns',
        'Email & SMS Automation',
        'Social Media Lead Generation',
        'Predictive Lead Behavior',
        'Custom Workflow Builder'
      ],
      price: 'Starting at $249/month',
      marketPrice: '$400-1200/month',
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Reduced sales cycle time'
      ],
      link: 'https://ziontechgroup.com/ai-leads',
      rating: 4.7,
      users: '2,300+',
      launchDate: '2024-02-15',
      useCases: ['Lead Qualification', 'Sales Forecasting', 'Customer Segmentation', 'Campaign Optimization']
    },
    {
      icon: Users,
      title: 'AI Customer Analytics & Insights',
      description: 'Deep customer insights and behavioral analysis to improve customer experience and retention.',
      category: 'analytics',
      pricing: 'standard',
      features: [
        'Customer Behavior Analysis',
        'Churn Prediction & Prevention',
        'Personalization Engine',
        'Customer Journey Mapping',
        'Sentiment Analysis',
        'Lifetime Value Prediction',
        'Segmentation & Targeting',
        'Real-time Recommendations',
        'A/B Testing Platform',
        'Integration with Marketing Tools'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-1800/month',
      benefits: [
        'Improve customer retention by 40%',
        'Increase customer lifetime value',
        'Personalized experiences',
        'Predict customer needs',
        'Data-driven marketing decisions'
      ],
      link: 'https://ziontechgroup.com/ai-customer',
      rating: 4.6,
      users: '2,100+',
      launchDate: '2024-02-10',
      useCases: ['Customer Retention', 'Personalization', 'Churn Prevention', 'Upselling']
    },
    {
      icon: Code,
      title: 'AI Code Assistant & Development Tools',
      description: 'AI-powered coding assistance, code generation, and development productivity tools for modern software teams.',
      category: 'development',
      pricing: 'standard',
      features: [
        'AI Code Generation & Completion',
        'Bug Detection & Fixing',
        'Code Review & Optimization',
        'Documentation Generation',
        'Test Case Generation',
        'Refactoring Suggestions',
        'Multi-language Support',
        'IDE Integration',
        'Team Collaboration Features',
        'Security Vulnerability Detection'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$250-800/month',
      benefits: [
        'Increase development speed by 50%',
        'Reduce bugs and errors',
        'Improve code quality',
        'Automated testing',
        'Faster time to market'
      ],
      link: 'https://ziontechgroup.com/ai-code',
      rating: 4.8,
      users: '3,500+',
      launchDate: '2024-01-05',
      useCases: ['Code Generation', 'Bug Fixing', 'Code Review', 'Documentation']
    },
    {
      icon: Database,
      title: 'AI Data Processing & ETL',
      description: 'Intelligent data extraction, transformation, and loading with automated data quality and cleansing.',
      category: 'data',
      pricing: 'standard',
      features: [
        'Automated Data Extraction',
        'Data Quality Assessment',
        'Intelligent Data Mapping',
        'Real-time Data Processing',
        'Data Validation & Cleansing',
        'Custom Data Connectors',
        'Error Handling & Recovery',
        'Data Lineage Tracking',
        'Compliance & Security',
        'Scalable Processing Engine'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$350-1200/month',
      benefits: [
        'Reduce data processing time by 80%',
        'Improve data quality',
        'Automated data validation',
        'Real-time data insights',
        'Reduced manual errors'
      ],
      link: 'https://ziontechgroup.com/ai-data',
      rating: 4.5,
      users: '1,900+',
      launchDate: '2024-02-20',
      useCases: ['Data Migration', 'ETL Processes', 'Data Quality', 'Real-time Analytics']
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'conversational', name: 'Conversational AI', count: aiServices.filter(s => s.category === 'conversational').length },
    { id: 'analytics', name: 'Analytics & BI', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automation', count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'content', name: 'Content Generation', count: aiServices.filter(s => s.category === 'content').length },
    { id: 'vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'security', name: 'Security & Fraud', count: aiServices.filter(s => s.category === 'security').length },
    { id: 'sales', name: 'Sales & Marketing', count: aiServices.filter(s => s.category === 'sales').length },
    { id: 'development', name: 'Development Tools', count: aiServices.filter(s => s.category === 'development').length },
    { id: 'data', name: 'Data Processing', count: aiServices.filter(s => s.category === 'data').length }
  ];

  const pricingTiers = [
    { id: 'all', name: 'All Pricing', count: aiServices.length },
    { id: 'standard', name: 'Standard ($149-349)', count: aiServices.filter(s => s.pricing === 'standard').length },
    { id: 'premium', name: 'Premium ($299-799)', count: aiServices.filter(s => s.pricing === 'premium').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, automation, computer vision, and fraud detection. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, machine learning, computer vision, data analytics, automation" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Artificial Intelligence Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
              Our comprehensive AI services help businesses across industries leverage cutting-edge technology for 
              competitive advantage and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Get Free AI Consultation
              </a>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">AI Service Categories</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25K+</div>
                <div className="text-gray-300">AI Models Deployed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">4.7</div>
                <div className="text-gray-300">Average AI Accuracy</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">AI System Uptime</div>
              </div>
            </div>
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
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
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
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-gray-400 w-5 h-5" />
                    <select
                      value={selectedPricing}
                      onChange={(e) => setSelectedPricing(e.target.value)}
                      className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {pricingTiers.map((tier) => (
                        <option key={tier.id} value={tier.id}>
                          {tier.name} ({tier.count})
                        </option>
                      ))}
                    </select>
                  </div>
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
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-cyan-400 font-semibold">{service.price}</span>
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
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

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

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

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {service.users}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Try Free Demo
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our AI experts are ready to help you identify the best AI solutions for your specific needs. 
                Get started with a free consultation and see how AI can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Schedule AI Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
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

export default AiServicesPage;