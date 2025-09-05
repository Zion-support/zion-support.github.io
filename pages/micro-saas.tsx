import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, MessageSquare, Search, Eye, Target, TrendingUp, Package, Calendar, BookOpen, ShoppingCart, Home, Trash2, Camera, HardDrive, UserCheck, Lightbulb, Truck, Phone, MapPin, Image, ClipboardList, RefreshCw } from 'lucide-react';
import Layout from '../components/Layout';

const microSaaSProducts = [
  {
    id: 'ai-business-validation',
    title: 'AI Business Validation Platform',
    description: 'Validate your business ideas with AI-powered market analysis, competitor research, and feasibility scoring',
    icon: Target,
    features: ['Market Analysis', 'Competitor Research', 'Feasibility Scoring', 'Investment Recommendations'],
    pricing: 'Starting at $99/month',
    category: 'Business Intelligence',
    benefits: ['Reduce startup failure risk', 'Data-driven decisions', 'Save months of research'],
    marketPrice: '$150-300/month',
    link: 'https://business-validation.ziontechgroup.com'
  },
  {
    id: 'ai-co-founder',
    title: 'AI Co-Founder as a Service',
    description: 'Get an AI-powered business partner that provides strategic advice, market insights, and growth recommendations',
    icon: Bot,
    features: ['Strategic Planning', 'Market Intelligence', 'Growth Hacking', '24/7 Availability'],
    pricing: 'Starting at $199/month',
    category: 'Business Strategy',
    benefits: ['Always-on business advisor', 'Scalable expertise', 'Cost-effective consulting'],
    marketPrice: '$500-1000/month',
    link: 'https://ai-cofounder.ziontechgroup.com'
  },
  {
    id: 'ai-content-studio',
    title: 'AI Content Creation Studio',
    description: 'Professional content creation platform with AI writers, video editors, and social media automation',
    icon: Video,
    features: ['AI Writing', 'Video Editing', 'Social Media Automation', 'Brand Voice Training'],
    pricing: 'Starting at $79/month',
    category: 'Content & Marketing',
    benefits: ['10x content output', 'Consistent brand voice', 'Multi-platform publishing'],
    marketPrice: '$200-500/month',
    link: 'https://content-studio.ziontechgroup.com'
  },
  {
    id: 'ai-customer-success',
    title: 'AI Customer Success Platform',
    description: 'Automate customer success with AI-powered health scoring, churn prediction, and personalized engagement',
    icon: Heart,
    features: ['Health Scoring', 'Churn Prediction', 'Automated Engagement', 'Success Metrics'],
    pricing: 'Starting at $149/month',
    category: 'Customer Success',
    benefits: ['Reduce churn by 40%', 'Increase retention', 'Automated interventions'],
    marketPrice: '$300-800/month',
    link: 'https://customer-success.ziontechgroup.com'
  },
  {
    id: 'ai-data-analytics',
    title: 'AI Data Analytics Platform',
    description: 'Transform raw data into actionable insights with AI-powered analytics, visualization, and reporting',
    icon: BarChart3,
    features: ['AI Insights', 'Auto-Visualization', 'Predictive Analytics', 'Custom Dashboards'],
    pricing: 'Starting at $89/month',
    category: 'Analytics & BI',
    benefits: ['Instant insights', 'No technical skills needed', 'Predictive forecasting'],
    marketPrice: '$250-600/month',
    link: 'https://data-analytics.ziontechgroup.com'
  },
  {
    id: 'ai-devops-automation',
    title: 'AI DevOps Automation',
    description: 'Intelligent CI/CD pipeline with automated testing, deployment, and infrastructure management',
    icon: Settings,
    features: ['Auto-Deployment', 'Smart Testing', 'Infrastructure as Code', 'Performance Monitoring'],
    pricing: 'Starting at $129/month',
    category: 'DevOps & Infrastructure',
    benefits: ['90% faster deployments', 'Zero-downtime updates', 'Automated scaling'],
    marketPrice: '$400-1000/month',
    link: 'https://devops-automation.ziontechgroup.com'
  },
  {
    id: 'ai-email-marketing',
    title: 'AI Email Marketing Suite',
    description: 'Intelligent email campaigns with AI-powered personalization, A/B testing, and conversion optimization',
    icon: Mail,
    features: ['AI Personalization', 'Smart Segmentation', 'A/B Testing', 'Conversion Tracking'],
    pricing: 'Starting at $59/month',
    category: 'Email Marketing',
    benefits: ['3x higher open rates', 'Personalized content', 'Automated optimization'],
    marketPrice: '$150-400/month',
    link: 'https://email-marketing.ziontechgroup.com'
  },
  {
    id: 'ai-financial-forecasting',
    title: 'AI Financial Forecasting',
    description: 'Predict financial performance with AI-powered forecasting, budgeting, and cash flow management',
    icon: TrendingUp,
    features: ['Cash Flow Prediction', 'Budget Optimization', 'Risk Assessment', 'Scenario Planning'],
    pricing: 'Starting at $119/month',
    category: 'Financial Management',
    benefits: ['Accurate forecasts', 'Risk mitigation', 'Better financial planning'],
    marketPrice: '$300-700/month',
    link: 'https://financial-forecasting.ziontechgroup.com'
  },
  {
    id: 'ai-hr-recruitment',
    title: 'AI HR & Recruitment Platform',
    description: 'Streamline hiring with AI-powered candidate screening, interview scheduling, and talent matching',
    icon: Users,
    features: ['Resume Screening', 'Interview Scheduling', 'Talent Matching', 'Onboarding Automation'],
    pricing: 'Starting at $99/month',
    category: 'Human Resources',
    benefits: ['50% faster hiring', 'Better candidate matches', 'Reduced bias'],
    marketPrice: '$200-600/month',
    popular: true
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-driven inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand forecasting', 'Automated reordering', 'Stock level optimization', 'Supplier management'],
    pricing: '$65/month',
    category: 'E-commerce',
    benefits: ['Reduce stockouts by 80%', 'Lower inventory costs by 30%', 'Improve cash flow', 'Automated operations'],
    marketPrice: '$40-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Voice-to-Text Meeting Assistant',
    description: 'AI-powered meeting transcription with action items extraction and intelligent summaries.',
    icon: Mic,
    features: ['Real-time transcription', 'Action item extraction', 'Meeting summaries', 'Speaker identification'],
    pricing: '$29/month',
    category: 'Productivity',
    benefits: ['Save 2 hours per meeting', 'Never miss action items', 'Searchable meeting history', 'Improved follow-up'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI Social Media Content Scheduler',
    description: 'Intelligent social media management with optimal posting times and engagement optimization.',
    icon: Calendar,
    features: ['Optimal timing suggestions', 'Content performance analysis', 'Hashtag optimization', 'Cross-platform posting'],
    pricing: '$39/month',
    category: 'Social Media',
    benefits: ['Increase engagement by 50%', 'Save 5 hours per week', 'Better content strategy', 'Automated posting'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense management with receipt scanning and automatic categorization.',
    icon: DollarSign,
    features: ['Receipt scanning', 'Automatic categorization', 'Expense reporting', 'Budget tracking'],
    pricing: '$19/month',
    category: 'Finance',
    benefits: ['Save 3 hours per week', 'Accurate expense tracking', 'Tax-ready reports', 'Budget insights'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI Website Performance Optimizer',
    description: 'Automated website optimization for speed, SEO, and user experience improvements.',
    icon: Zap,
    features: ['Speed optimization', 'SEO improvements', 'Image compression', 'Performance monitoring'],
    pricing: '$35/month',
    category: 'Web Development',
    benefits: ['Improve page speed by 60%', 'Better SEO rankings', 'Higher conversion rates', 'Automated optimization'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Lead Scoring System',
    description: 'AI-powered lead qualification and scoring to prioritize sales efforts effectively.',
    icon: Target,
    features: ['Lead scoring algorithms', 'Behavioral analysis', 'Conversion prediction', 'Sales insights'],
    pricing: '$55/month',
    category: 'Sales',
    benefits: ['Increase conversion by 35%', 'Focus on high-value leads', 'Reduce sales cycle', 'Better ROI'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI-Powered A/B Testing Platform',
    description: 'Intelligent testing platform with automated experiment design and statistical analysis.',
    icon: TrendingUp,
    features: ['Automated test design', 'Statistical significance', 'Multi-variate testing', 'Results interpretation'],
    pricing: '$45/month',
    category: 'Marketing',
    benefits: ['Increase conversion by 25%', 'Faster test results', 'Data-driven decisions', 'Automated optimization'],
    marketPrice: '$30-120/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Document Processor',
    description: 'AI-powered document processing with OCR, data extraction, and intelligent categorization.',
    icon: FileText,
    features: ['OCR technology', 'Data extraction', 'Document classification', 'Batch processing'],
    pricing: '$42/month',
    category: 'Productivity',
    benefits: ['Process 1000+ docs per hour', 'Reduce manual work by 90%', 'Accurate data extraction', 'Automated workflows'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI Customer Feedback Analyzer',
    description: 'Intelligent analysis of customer feedback with sentiment analysis and actionable insights.',
    icon: MessageSquare,
    features: ['Sentiment analysis', 'Topic extraction', 'Trend identification', 'Action recommendations'],
    pricing: '$38/month',
    category: 'Customer Service',
    benefits: ['Understand customer needs', 'Improve satisfaction by 30%', 'Identify product issues', 'Data-driven improvements'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Email Signature Manager',
    description: 'Dynamic email signatures with personalization, tracking, and compliance features.',
    icon: Mail,
    features: ['Dynamic personalization', 'Click tracking', 'Compliance management', 'Brand consistency'],
    pricing: '$15/month',
    category: 'Email Marketing',
    benefits: ['Increase email engagement', 'Professional appearance', 'Track signature performance', 'Compliance ready'],
    marketPrice: '$8-30/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI-Powered Logo Generator',
    description: 'Intelligent logo creation with brand analysis and multiple design variations.',
    icon: Image,
    features: ['AI design generation', 'Brand analysis', 'Multiple variations', 'High-resolution exports'],
    pricing: '$25/month',
    category: 'Design',
    benefits: ['Professional logos in minutes', 'Brand-consistent designs', 'Multiple options', 'Cost-effective solution'],
    marketPrice: '$15-60/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Password Generator & Manager',
    description: 'Advanced password management with breach monitoring and secure sharing capabilities.',
    icon: Lock,
    features: ['Advanced password generation', 'Breach monitoring', 'Secure sharing', 'Multi-device sync'],
    pricing: '$18/month',
    category: 'Security',
    benefits: ['Enhanced security', 'Easy password management', 'Breach alerts', 'Team collaboration'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI-Powered Form Builder',
    description: 'Intelligent form creation with conditional logic, validation, and response analysis.',
    icon: ClipboardList,
    features: ['Drag-and-drop builder', 'Conditional logic', 'Smart validation', 'Response analytics'],
    pricing: '$32/month',
    category: 'Web Development',
    benefits: ['Create forms without coding', 'Reduce form abandonment', 'Better data quality', 'Advanced analytics'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Calendar & Scheduling',
    description: 'AI-powered scheduling with meeting optimization and conflict resolution.',
    icon: Calendar,
    features: ['Smart scheduling', 'Conflict resolution', 'Meeting optimization', 'Time zone handling'],
    pricing: '$28/month',
    category: 'Productivity',
    benefits: ['Reduce scheduling conflicts', 'Optimize meeting times', 'Save 2 hours per week', 'Better time management'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI-Powered Video Editor',
    description: 'Automated video editing with AI suggestions, templates, and intelligent trimming.',
    icon: Video,
    features: ['AI editing suggestions', 'Auto-trimming', 'Template library', 'Export optimization'],
    pricing: '$49/month',
    category: 'Video Production',
    benefits: ['Create videos 5x faster', 'Professional results', 'No editing skills needed', 'Consistent quality'],
    marketPrice: '$30-120/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Backup & Sync Solution',
    description: 'Intelligent file backup with version control, deduplication, and cross-platform sync.',
    icon: HardDrive,
    features: ['Intelligent backup', 'Version control', 'Deduplication', 'Cross-platform sync'],
    pricing: '$22/month',
    category: 'Storage',
    benefits: ['Never lose files', 'Save storage space', 'Access anywhere', 'Automatic backups'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI-Powered Survey Builder',
    description: 'Intelligent survey creation with question suggestions and response analysis.',
    icon: BarChart3,
    features: ['Question suggestions', 'Response analysis', 'Sentiment tracking', 'Report generation'],
    pricing: '$35/month',
    category: 'Analytics',
    benefits: ['Create better surveys', 'Get actionable insights', 'Improve response rates', 'Data visualization'],
    marketPrice: '$20-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Task Automation Platform',
    description: 'AI-powered workflow automation with intelligent task routing and optimization.',
    icon: RefreshCw,
    features: ['Workflow automation', 'Task routing', 'Performance optimization', 'Integration capabilities'],
    pricing: '$55/month',
    category: 'Automation',
    benefits: ['Reduce manual work by 70%', 'Improve efficiency', 'Error reduction', 'Scalable automation'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI-Powered Knowledge Base',
    description: 'Intelligent knowledge management with search, categorization, and content suggestions.',
    icon: BookOpen,
    features: ['Smart search', 'Auto-categorization', 'Content suggestions', 'Usage analytics'],
    pricing: '$42/month',
    category: 'Knowledge Management',
    benefits: ['Find information instantly', 'Reduce support tickets', 'Better knowledge sharing', 'Improved productivity'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: false
  },
  {
    id: 'ai-project-management',
    title: 'AI Project Management Suite',
    description: 'Intelligent project planning with AI-powered resource allocation, timeline optimization, and risk management',
    icon: Calendar,
    features: ['Smart Planning', 'Resource Optimization', 'Risk Management', 'Progress Tracking'],
    pricing: 'Starting at $89/month',
    category: 'Project Management',
    benefits: ['30% faster delivery', 'Better resource utilization', 'Proactive risk management'],
    marketPrice: '$200-500/month',
    link: 'https://project-management.ziontechgroup.com'
  },
  {
    id: 'ai-sales-optimization',
    title: 'AI Sales Optimization Platform',
    description: 'Boost sales performance with AI-powered lead scoring, sales forecasting, and conversion optimization',
    icon: Target,
    features: ['Lead Scoring', 'Sales Forecasting', 'Conversion Optimization', 'Performance Analytics'],
    pricing: 'Starting at $109/month',
    category: 'Sales & CRM',
    benefits: ['25% higher conversion', 'Better lead quality', 'Accurate forecasting'],
    marketPrice: '$300-800/month',
    link: 'https://sales-optimization.ziontechgroup.com'
  },
  {
    id: 'ai-social-media',
    title: 'AI Social Media Manager',
    description: 'Automate social media management with AI-powered content creation, scheduling, and engagement',
    icon: MessageSquare,
    features: ['Content Creation', 'Auto-Scheduling', 'Engagement Automation', 'Analytics & Insights'],
    pricing: 'Starting at $69/month',
    category: 'Social Media',
    benefits: ['Consistent posting', 'Higher engagement', 'Time savings'],
    marketPrice: '$150-400/month',
    link: 'https://social-media.ziontechgroup.com'
  },
  {
    id: 'ai-website-optimization',
    title: 'AI Website Optimization',
    description: 'Automatically optimize website performance, SEO, and user experience with AI-powered insights',
    icon: Monitor,
    features: ['Performance Optimization', 'SEO Enhancement', 'UX Analysis', 'Conversion Tracking'],
    pricing: 'Starting at $79/month',
    category: 'Web Development',
    benefits: ['Faster load times', 'Better SEO rankings', 'Higher conversions'],
    marketPrice: '$200-600/month',
    link: 'https://website-optimization.ziontechgroup.com'
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Automate complex business workflows with AI-powered process optimization and intelligent routing',
    icon: Zap,
    features: ['Process Automation', 'Smart Routing', 'Exception Handling', 'Performance Analytics'],
    pricing: 'Starting at $99/month',
    category: 'Workflow Automation',
    benefits: ['80% process automation', 'Error reduction', 'Faster processing'],
    marketPrice: '$300-700/month',
    link: 'https://workflow-automation.ziontechgroup.com'
  }
];

const categories = [
  'All',
  'Business Intelligence',
  'Business Strategy',
  'Content & Marketing',
  'Customer Success',
  'Analytics & BI',
  'DevOps & Infrastructure',
  'Email Marketing',
  'Financial Management',
  'Human Resources',
  'Inventory & Supply Chain',
  'Project Management',
  'Sales & CRM',
  'Social Media',
  'Web Development',
  'Workflow Automation'
];

export default function MicroSaaS() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = microSaaSProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>Micro SaaS Solutions | ZionTech Group</title>
        <meta name="description" content="Discover innovative micro SaaS solutions powered by AI and cutting-edge technology. Transform your business with our comprehensive suite of software-as-a-service platforms." />
        <meta name="keywords" content="micro saas, software as a service, AI solutions, business automation, cloud software" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of AI-powered micro SaaS platforms. 
                Each solution is designed to solve specific business challenges with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-sm">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">{product.pricing}</div>
                        <div className="text-sm text-gray-400">Market: {product.marketPrice}</div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">4.9/5</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        Try Now
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 border border-gray-300 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions or let us build a custom solution for your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/it-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore IT Services
                </Link>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 font-semibold hover:text-purple-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-purple-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}