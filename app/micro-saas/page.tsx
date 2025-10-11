'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  BarChart, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Target,
  Globe,
  Smartphone,
  Mail,
  FileText,
  Settings,
  Database,
  Cloud,
  Code,
  Heart,
  Eye,
  Mic,
  ShoppingCart,
  Calendar,
  MessageSquare,
  DollarSign,
  Lock,
  Wifi,
  Monitor,
  Headphones,
  Package,
  Workflow,
  Cpu,
  Server,
  Link as LinkIcon,
  Sparkles,
  Rocket,
  Award,
  Lightbulb,
  PieChart,
  Activity,
  Layers,
  Compass,
  Zap as Lightning,
  RefreshCw,
  Maximize,
  Minimize,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Octagon,
  Pentagon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasServices = [
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager Pro',
      description: 'Automated social media management with AI-powered content creation, scheduling, and analytics',
      price: '$49/month',
      marketPrice: '$99-299/month',
      features: [
        'AI content generation for all platforms',
        'Smart scheduling across time zones',
        'Hashtag optimization and trending analysis',
        'Engagement rate prediction',
        'Competitor analysis and benchmarking',
        'Automated response to comments',
        'Visual content creation with AI',
        'Performance analytics dashboard'
      ],
      benefits: [
        'Save 15+ hours per week',
        'Increase engagement by 200%',
        'Grow followers organically',
        'Professional brand presence'
      ],
      category: 'Social Media',
      popular: true,
      icon: MessageSquare,
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    {
      id: 'smart-expense-tracker',
      name: 'Smart Expense Tracker AI',
      description: 'Intelligent expense tracking with receipt scanning, categorization, and financial insights',
      price: '$19/month',
      marketPrice: '$39-99/month',
      features: [
        'AI-powered receipt scanning',
        'Automatic expense categorization',
        'Tax deduction suggestions',
        'Budget planning and alerts',
        'Multi-currency support',
        'Integration with accounting software',
        'Expense report generation',
        'Spending pattern analysis'
      ],
      benefits: [
        'Save 5+ hours monthly on bookkeeping',
        'Never miss tax deductions',
        'Reduce accounting costs by 60%',
        'Better financial control'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign,
      link: 'https://ziontechgroup.com/smart-expense-tracker'
    },
    {
      id: 'ai-email-optimizer',
      name: 'AI Email Optimizer Pro',
      description: 'AI-powered email optimization for better deliverability, open rates, and engagement',
      price: '$39/month',
      marketPrice: '$79-199/month',
      features: [
        'Subject line optimization',
        'Send time optimization',
        'Content personalization',
        'A/B testing automation',
        'Deliverability monitoring',
        'Spam score reduction',
        'Email template optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Reduce spam complaints by 80%',
        'Improve deliverability scores',
        'Higher conversion rates'
      ],
      category: 'Email Marketing',
      popular: true,
      icon: Mail,
      link: 'https://ziontechgroup.com/ai-email-optimizer'
    },
    {
      id: 'smart-meeting-scheduler',
      name: 'Smart Meeting Scheduler AI',
      description: 'Intelligent meeting scheduling with time zone management, conflict resolution, and optimization',
      price: '$29/month',
      marketPrice: '$59-149/month',
      features: [
        'AI-powered time slot optimization',
        'Multi-timezone coordination',
        'Meeting conflict resolution',
        'Calendar integration across platforms',
        'Automated follow-up scheduling',
        'Meeting room booking',
        'Video conferencing integration',
        'Meeting analytics and insights'
      ],
      benefits: [
        'Save 3+ hours weekly on scheduling',
        'Reduce scheduling conflicts by 90%',
        'Improve meeting attendance',
        'Better time management'
      ],
      category: 'Productivity',
      popular: true,
      icon: Calendar,
      link: 'https://ziontechgroup.com/smart-meeting-scheduler'
    },
    {
      id: 'ai-content-optimizer',
      name: 'AI Content Optimizer Pro',
      description: 'AI-powered content optimization for SEO, readability, and engagement across all platforms',
      price: '$59/month',
      marketPrice: '$119-299/month',
      features: [
        'SEO optimization suggestions',
        'Readability score improvement',
        'Tone and voice analysis',
        'Keyword density optimization',
        'Content structure recommendations',
        'Plagiarism detection',
        'Multi-language support',
        'Performance tracking'
      ],
      benefits: [
        'Improve SEO rankings by 150%',
        'Increase content engagement by 80%',
        'Reduce content creation time by 50%',
        'Better content quality'
      ],
      category: 'Content Marketing',
      popular: true,
      icon: FileText,
      link: 'https://ziontechgroup.com/ai-content-optimizer'
    },
    {
      id: 'smart-inventory-manager',
      name: 'Smart Inventory Manager AI',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and optimization',
      price: '$79/month',
      marketPrice: '$159-399/month',
      features: [
        'Demand forecasting with AI',
        'Automated reorder points',
        'Inventory optimization',
        'Multi-location management',
        'Supplier integration',
        'Cost analysis and reporting',
        'Seasonal trend analysis',
        'Waste reduction optimization'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts by 90%',
        'Reduce waste by 40%',
        'Improve cash flow'
      ],
      category: 'Inventory Management',
      popular: false,
      icon: Package,
      link: 'https://ziontechgroup.com/smart-inventory-manager'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights Pro',
      description: 'Advanced customer analytics with behavioral insights, churn prediction, and personalization',
      price: '$89/month',
      marketPrice: '$179-449/month',
      features: [
        'Customer behavior analysis',
        'Churn prediction modeling',
        'Lifetime value calculation',
        'Segmentation and targeting',
        'Purchase pattern analysis',
        'Customer journey mapping',
        'Personalization recommendations',
        'ROI tracking and reporting'
      ],
      benefits: [
        'Increase customer retention by 35%',
        'Boost customer lifetime value by 50%',
        'Reduce churn by 60%',
        'Better marketing ROI'
      ],
      category: 'Customer Analytics',
      popular: true,
      icon: Users,
      link: 'https://ziontechgroup.com/ai-customer-insights'
    },
    {
      id: 'smart-workflow-automator',
      name: 'Smart Workflow Automator AI',
      description: 'Intelligent workflow automation with AI-powered decision making and process optimization',
      price: '$69/month',
      marketPrice: '$139-349/month',
      features: [
        'Visual workflow builder',
        'AI-powered process optimization',
        'Integration with 500+ apps',
        'Conditional logic and triggers',
        'Error handling and recovery',
        'Performance monitoring',
        'Custom automation templates',
        'Team collaboration tools'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce errors by 95%',
        'Save 20+ hours weekly',
        'Improve process efficiency'
      ],
      category: 'Workflow Automation',
      popular: true,
      icon: Workflow,
      link: 'https://ziontechgroup.com/smart-workflow-automator'
    },
    {
      id: 'ai-lead-scoring',
      name: 'AI Lead Scoring Pro',
      description: 'Advanced lead scoring with AI-powered qualification and conversion prediction',
      price: '$49/month',
      marketPrice: '$99-249/month',
      features: [
        'AI-powered lead scoring',
        'Behavioral tracking and analysis',
        'Conversion probability prediction',
        'Lead nurturing automation',
        'CRM integration',
        'Custom scoring models',
        'Performance analytics',
        'A/B testing for optimization'
      ],
      benefits: [
        'Increase conversion rates by 45%',
        'Reduce sales cycle by 30%',
        'Improve lead quality by 60%',
        'Better sales team efficiency'
      ],
      category: 'Sales',
      popular: true,
      icon: Target,
      link: 'https://ziontechgroup.com/ai-lead-scoring'
    },
    {
      id: 'smart-document-processor',
      name: 'Smart Document Processor AI',
      description: 'AI-powered document processing with OCR, data extraction, and intelligent categorization',
      price: '$39/month',
      marketPrice: '$79-199/month',
      features: [
        'Advanced OCR technology',
        'Data extraction and validation',
        'Document classification',
        'Batch processing capabilities',
        'Integration with cloud storage',
        'Custom field extraction',
        'Document search and retrieval',
        'Compliance and security features'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry by 90%',
        'Improve accuracy by 95%',
        'Better document organization'
      ],
      category: 'Document Management',
      popular: false,
      icon: FileText,
      link: 'https://ziontechgroup.com/smart-document-processor'
    },
    {
      id: 'ai-price-optimizer',
      name: 'AI Price Optimizer Pro',
      description: 'Dynamic pricing optimization with AI-powered market analysis and competitor monitoring',
      price: '$99/month',
      marketPrice: '$199-499/month',
      features: [
        'Dynamic pricing algorithms',
        'Competitor price monitoring',
        'Market demand analysis',
        'Price elasticity modeling',
        'A/B testing for pricing',
        'Revenue optimization',
        'Seasonal pricing adjustments',
        'Performance analytics'
      ],
      benefits: [
        'Increase revenue by 20%',
        'Optimize profit margins',
        'Stay competitive in market',
        'Data-driven pricing decisions'
      ],
      category: 'Pricing',
      popular: true,
      icon: DollarSign,
      link: 'https://ziontechgroup.com/ai-price-optimizer'
    },
    {
      id: 'smart-customer-support',
      name: 'Smart Customer Support AI',
      description: 'AI-powered customer support with intelligent ticket routing, response generation, and analytics',
      price: '$79/month',
      marketPrice: '$159-399/month',
      features: [
        'AI-powered ticket routing',
        'Automated response generation',
        'Sentiment analysis',
        'Knowledge base integration',
        'Multi-channel support',
        'Escalation management',
        'Performance analytics',
        'Customer satisfaction tracking'
      ],
      benefits: [
        'Reduce response time by 70%',
        'Improve customer satisfaction by 40%',
        'Reduce support costs by 50%',
        '24/7 automated support'
      ],
      category: 'Customer Support',
      popular: true,
      icon: Headphones,
      link: 'https://ziontechgroup.com/smart-customer-support'
    },
    {
      id: 'ai-website-optimizer',
      name: 'AI Website Optimizer Pro',
      description: 'Comprehensive website optimization with AI-powered performance, SEO, and conversion improvements',
      price: '$89/month',
      marketPrice: '$179-449/month',
      features: [
        'AI-powered SEO optimization',
        'Page speed optimization',
        'Conversion rate optimization',
        'A/B testing automation',
        'Content optimization',
        'Technical SEO analysis',
        'Mobile optimization',
        'Performance monitoring'
      ],
      benefits: [
        'Improve SEO rankings by 200%',
        'Increase conversion rates by 60%',
        'Reduce bounce rate by 40%',
        'Better user experience'
      ],
      category: 'Website Optimization',
      popular: true,
      icon: Globe,
      link: 'https://ziontechgroup.com/ai-website-optimizer'
    },
    {
      id: 'smart-data-analyzer',
      name: 'Smart Data Analyzer AI',
      description: 'AI-powered data analysis with automated insights, visualization, and reporting',
      price: '$69/month',
      marketPrice: '$139-349/month',
      features: [
        'Automated data analysis',
        'Intelligent insights generation',
        'Custom dashboard creation',
        'Data visualization',
        'Trend analysis and forecasting',
        'Anomaly detection',
        'Report automation',
        'Multi-source data integration'
      ],
      benefits: [
        'Get insights 5x faster',
        'Make data-driven decisions',
        'Reduce analysis time by 80%',
        'Better business intelligence'
      ],
      category: 'Data Analytics',
      popular: false,
      icon: BarChart,
      link: 'https://ziontechgroup.com/smart-data-analyzer'
    },
    {
      id: 'ai-social-listening',
      name: 'AI Social Listening Pro',
      description: 'Advanced social media monitoring with sentiment analysis, brand mention tracking, and insights',
      price: '$59/month',
      marketPrice: '$119-299/month',
      features: [
        'Real-time social media monitoring',
        'Sentiment analysis and tracking',
        'Brand mention alerts',
        'Competitor analysis',
        'Trend identification',
        'Crisis detection and alerts',
        'Influencer identification',
        'Custom reporting'
      ],
      benefits: [
        'Monitor brand reputation 24/7',
        'Identify opportunities early',
        'Prevent PR crises',
        'Better social media strategy'
      ],
      category: 'Social Media',
      popular: true,
      icon: Eye,
      link: 'https://ziontechgroup.com/ai-social-listening'
    },
    {
      id: 'smart-email-verifier',
      name: 'Smart Email Verifier AI',
      description: 'AI-powered email verification with deliverability optimization and bounce prevention',
      price: '$29/month',
      marketPrice: '$59-149/month',
      features: [
        'Real-time email verification',
        'Deliverability scoring',
        'Bounce prediction',
        'Spam trap detection',
        'Domain validation',
        'Bulk verification',
        'API integration',
        'Detailed reporting'
      ],
      benefits: [
        'Reduce bounce rates by 90%',
        'Improve deliverability scores',
        'Save on email costs',
        'Better email reputation'
      ],
      category: 'Email Marketing',
      popular: false,
      icon: Mail,
      link: 'https://ziontechgroup.com/smart-email-verifier'
    },
    {
      id: 'ai-conversation-analyzer',
      name: 'AI Conversation Analyzer Pro',
      description: 'Advanced conversation analysis with sentiment tracking, topic extraction, and insights',
      price: '$49/month',
      marketPrice: '$99-249/month',
      features: [
        'Conversation sentiment analysis',
        'Topic and keyword extraction',
        'Speaker identification',
        'Emotion detection',
        'Conversation summarization',
        'Action item extraction',
        'Meeting insights',
        'Custom analytics'
      ],
      benefits: [
        'Better meeting outcomes',
        'Improve communication',
        'Extract actionable insights',
        'Enhanced collaboration'
      ],
      category: 'Communication',
      popular: false,
      icon: MessageSquare,
      link: 'https://ziontechgroup.com/ai-conversation-analyzer'
    },
    {
      id: 'smart-task-manager',
      name: 'Smart Task Manager AI',
      description: 'AI-powered task management with intelligent prioritization, time estimation, and optimization',
      price: '$39/month',
      marketPrice: '$79-199/month',
      features: [
        'AI-powered task prioritization',
        'Time estimation and tracking',
        'Smart scheduling',
        'Deadline prediction',
        'Team collaboration',
        'Progress tracking',
        'Productivity insights',
        'Integration with tools'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Better time management',
        'Reduce missed deadlines',
        'Improved team coordination'
      ],
      category: 'Productivity',
      popular: true,
      icon: CheckCircle,
      link: 'https://ziontechgroup.com/smart-task-manager'
    },
    {
      id: 'ai-brand-monitor',
      name: 'AI Brand Monitor Pro',
      description: 'Comprehensive brand monitoring with reputation tracking, competitor analysis, and alerts',
      price: '$79/month',
      marketPrice: '$159-399/month',
      features: [
        'Brand mention monitoring',
        'Reputation tracking',
        'Competitor analysis',
        'Crisis detection',
        'Influencer tracking',
        'Media coverage analysis',
        'Sentiment monitoring',
        'Custom alerts and reports'
      ],
      benefits: [
        'Protect brand reputation',
        'Identify opportunities',
        'Prevent PR crises',
        'Better brand management'
      ],
      category: 'Brand Management',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/ai-brand-monitor'
    },
    {
      id: 'smart-contract-analyzer',
      name: 'Smart Contract Analyzer AI',
      description: 'AI-powered contract analysis with risk assessment, clause extraction, and compliance checking',
      price: '$99/month',
      marketPrice: '$199-499/month',
      features: [
        'Contract risk assessment',
        'Clause extraction and analysis',
        'Compliance checking',
        'Contract comparison',
        'Renewal tracking',
        'Legal document analysis',
        'Risk scoring',
        'Automated reporting'
      ],
      benefits: [
        'Reduce legal risks',
        'Save on legal costs',
        'Improve contract management',
        'Better compliance'
      ],
      category: 'Legal Tech',
      popular: false,
      icon: FileText,
      link: 'https://ziontechgroup.com/smart-contract-analyzer'
    },
    {
      id: 'ai-hr-recruiter',
      name: 'AI HR Recruiter Pro',
      description: 'AI-powered recruitment with resume screening, candidate matching, and interview scheduling',
      price: '$89/month',
      marketPrice: '$179-449/month',
      features: [
        'AI resume screening',
        'Candidate-job matching',
        'Interview scheduling',
        'Skill assessment',
        'Background check integration',
        'Candidate ranking',
        'Recruitment analytics',
        'ATS integration'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve candidate quality',
        'Reduce recruitment costs',
        'Better candidate experience'
      ],
      category: 'HR Tech',
      popular: true,
      icon: Users,
      link: 'https://ziontechgroup.com/ai-hr-recruiter'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid },
    { id: 'Social Media', name: 'Social Media', icon: MessageSquare },
    { id: 'Finance', name: 'Finance', icon: DollarSign },
    { id: 'Email Marketing', name: 'Email Marketing', icon: Mail },
    { id: 'Productivity', name: 'Productivity', icon: CheckCircle },
    { id: 'Content Marketing', name: 'Content Marketing', icon: FileText },
    { id: 'Inventory Management', name: 'Inventory Management', icon: Package },
    { id: 'Customer Analytics', name: 'Customer Analytics', icon: Users },
    { id: 'Workflow Automation', name: 'Workflow Automation', icon: Workflow },
    { id: 'Sales', name: 'Sales', icon: Target },
    { id: 'Document Management', name: 'Document Management', icon: FileText },
    { id: 'Pricing', name: 'Pricing', icon: DollarSign },
    { id: 'Customer Support', name: 'Customer Support', icon: Headphones },
    { id: 'Website Optimization', name: 'Website Optimization', icon: Globe },
    { id: 'Data Analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'Communication', name: 'Communication', icon: MessageSquare },
    { id: 'Brand Management', name: 'Brand Management', icon: Shield },
    { id: 'Legal Tech', name: 'Legal Tech', icon: FileText },
    { id: 'HR Tech', name: 'HR Tech', icon: Users }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services | Zion Tech Group - Innovative AI-Powered Solutions</title>
        <meta name="description" content="Discover our cutting-edge micro SAAS services powered by AI. From social media management to smart expense tracking, we offer innovative solutions for modern businesses." />
        <meta name="keywords" content="micro saas, ai services, business automation, productivity tools, social media management, expense tracking, email optimization" />
        <meta property="og:title" content="Micro SAAS Services | Zion Tech Group" />
        <meta property="og:description" content="Innovative AI-powered micro SAAS solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services | Zion Tech Group" />
        <meta name="twitter:description" content="Discover our cutting-edge micro SAAS services powered by AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Innovative AI-Powered Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive suite of micro SAAS services designed to streamline your business operations, 
              boost productivity, and drive growth. Each solution is powered by cutting-edge AI technology and 
              designed for businesses of all sizes.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">Micro SAAS Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$19-99</div>
                <div className="text-gray-300">Monthly Pricing</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Email Us
              </a>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a
                      href={service.link}
                      className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our comprehensive suite of micro SAAS services and start your digital transformation journey today. 
                Our AI-powered solutions will help you automate processes, increase efficiency, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
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