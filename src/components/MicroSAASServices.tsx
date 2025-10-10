import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Code, 
  Mail, 
  Target, 
  FileText, 
  Search, 
  Bot, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  ShoppingCart, 
  CreditCard, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation, 
  PieChart, 
  TrendingDown, 
  Activity, 
  Zap as Lightning, 
  Target as Crosshair, 
  Shield as Security, 
  Users as People, 
  Star as StarIcon, 
  CheckCircle as Check, 
  ArrowRight as Arrow, 
  Phone as PhoneIcon, 
  Mail as MailIcon, 
  MapPin as Location, 
  Cube, 
  Mic, 
  DollarSign, 
  Truck, 
  Link, 
  HardDrive, 
  FileCheck,
  Play,
  ExternalLink,
  Crown,
  Sparkles
} from 'lucide-react';

interface MicroSAASService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  price: string;
  originalPrice?: string;
  features: string[];
  benefits: string[];
  link: string;
  popular: boolean;
  category: string;
  rating: number;
  users: string;
  freeTrial: string;
  isNew?: boolean;
  isFeatured?: boolean;
  marketPrice: string;
  savings: string;
}

const MicroSAASServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Productivity', 'Marketing', 'Business', 'Finance', 'Support', 'Development', 'Security', 'Content', 'Analytics'];

  const microSAASServices: MicroSAASService[] = [
    // Productivity & Management Tools
    {
      id: 'ai-project-manager-pro',
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: BarChart,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days',
      isFeatured: true,
      marketPrice: '$149/month',
      savings: '33% OFF'
    },
    {
      id: 'ai-task-manager-pro',
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI prioritization, deadline prediction, and productivity insights. Boost your productivity by 60%.',
      icon: CheckCircle,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
      benefits: ['60% productivity boost', 'Never miss deadlines', 'Better focus', 'Achieve more goals'],
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '7 days',
      marketPrice: '$79/month',
      savings: '38% OFF'
    },
    {
      id: 'ai-workflow-automation-pro',
      title: 'AI Workflow Automation Pro',
      description: 'Automate repetitive tasks with AI-powered workflow optimization. Save 20+ hours per week with intelligent automation.',
      icon: Zap,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Visual workflow builder', 'AI optimization', '500+ integrations', 'Custom triggers', 'Error handling', 'Analytics dashboard', 'Team collaboration', 'API access'],
      benefits: ['20+ hours saved weekly', '99.9% accuracy', 'Easy setup', 'Scalable automation'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Productivity',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days',
      marketPrice: '$119/month',
      savings: '34% OFF'
    },
    {
      id: 'ai-meeting-scheduler-pro',
      title: 'AI Meeting Scheduler Pro',
      description: 'Intelligent meeting scheduling with calendar optimization, conflict resolution, and time zone management. Used by Fortune 500 companies.',
      icon: Calendar,
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['Smart scheduling', 'Calendar integration', 'Conflict resolution', 'Time zone handling', 'Meeting analytics', 'Auto-reminders', 'Room booking', 'Catering coordination'],
      benefits: ['50% scheduling time saved', 'Zero double bookings', 'Better time utilization', 'Reduced no-shows'],
      link: '/ai-meeting-scheduler',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '7 days',
      marketPrice: '$59/month',
      savings: '34% OFF'
    },
    {
      id: 'ai-time-tracker-pro',
      title: 'AI Time Tracker Pro',
      description: 'Intelligent time tracking with productivity insights, automated reporting, and team analytics. Trusted by remote teams globally.',
      icon: Clock3,
      price: '$34/month',
      originalPrice: '$49/month',
      features: ['Auto time tracking', 'Productivity analytics', 'Project billing', 'Team insights', 'Idle detection', 'Detailed reports', 'Screenshot monitoring', 'App usage tracking'],
      benefits: ['Accurate time tracking', 'Better productivity', 'Fair billing', 'Team optimization'],
      link: '/ai-time-tracker',
      popular: true,
      category: 'Productivity',
      rating: 4.6,
      users: '50,000+',
      freeTrial: '14 days',
      marketPrice: '$49/month',
      savings: '31% OFF'
    },
    // Content & Marketing Tools
    {
      id: 'ai-content-writer-pro',
      title: 'AI Content Writer Pro',
      description: 'Advanced AI content creation with SEO optimization, brand voice consistency, and multi-language support. Generate 10x more content.',
      icon: FileText,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content calendar', 'Plagiarism check', 'Tone adjustment', 'Keyword research', 'Content templates'],
      benefits: ['10x content output', 'SEO ready', 'Brand consistent', 'Time savings'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content',
      rating: 4.9,
      users: '40,000+',
      freeTrial: '7 days',
      isFeatured: true,
      marketPrice: '$129/month',
      savings: '31% OFF'
    },
    {
      id: 'ai-social-media-manager-pro',
      title: 'AI Social Media Manager Pro',
      description: 'Automated social media management with AI-powered content creation, scheduling, and analytics. Grow your audience by 300%.',
      icon: MessageSquare,
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Auto content creation', 'Smart scheduling', 'Hashtag optimization', 'Engagement tracking', 'Competitor analysis', 'Trend monitoring', 'Multi-platform posting', 'Analytics dashboard'],
      benefits: ['300% audience growth', 'Consistent posting', 'Better engagement', 'Time savings'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      rating: 4.7,
      users: '35,000+',
      freeTrial: '14 days',
      marketPrice: '$99/month',
      savings: '30% OFF'
    },
    {
      id: 'ai-email-marketing-suite',
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered personalization, A/B testing, and automation. Increase open rates by 150%.',
      icon: Mail,
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['AI personalization', 'A/B testing', 'Email automation', 'Segmentation', 'Analytics dashboard', 'Template library', 'Deliverability optimization', 'List management'],
      benefits: ['150% higher open rates', 'Better engagement', 'Automated campaigns', 'ROI tracking'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      rating: 4.8,
      users: '28,000+',
      freeTrial: '7 days',
      marketPrice: '$89/month',
      savings: '34% OFF'
    },
    {
      id: 'ai-seo-optimizer-pro',
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO optimization with AI-powered keyword research, content analysis, and ranking tracking. Boost organic traffic by 200%.',
      icon: Search,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO audit', 'Link building', 'Local SEO', 'Schema markup'],
      benefits: ['200% traffic increase', 'Higher rankings', 'Better visibility', 'Competitive advantage'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing',
      rating: 4.9,
      users: '22,000+',
      freeTrial: '14 days',
      marketPrice: '$119/month',
      savings: '34% OFF'
    },
    {
      id: 'ai-lead-generation-pro',
      title: 'AI Lead Generation Pro',
      description: 'Automated lead generation with AI-powered prospecting, qualification, and nurturing. Generate 5x more qualified leads.',
      icon: Target,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI prospecting', 'Lead scoring', 'Email sequences', 'CRM integration', 'Data enrichment', 'Follow-up automation', 'Lead nurturing', 'Conversion tracking'],
      benefits: ['5x more leads', 'Higher quality prospects', 'Automated nurturing', 'Better conversion'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Marketing',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '7 days',
      marketPrice: '$149/month',
      savings: '34% OFF'
    },
    // Business & Finance Tools
    {
      id: 'ai-crm-intelligence-pro',
      title: 'AI CRM Intelligence Pro',
      description: 'Smart CRM with AI-powered insights, sales forecasting, and customer behavior analysis. Increase sales by 40%.',
      icon: Users,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI insights', 'Sales forecasting', 'Customer analytics', 'Pipeline management', 'Automation rules', 'Integration hub', 'Mobile app', 'Custom fields'],
      benefits: ['40% sales increase', 'Better customer insights', 'Automated workflows', 'Data-driven decisions'],
      link: '/ai-crm',
      popular: true,
      category: 'Business',
      rating: 4.7,
      users: '32,000+',
      freeTrial: '14 days',
      isFeatured: true,
      marketPrice: '$129/month',
      savings: '31% OFF'
    },
    {
      id: 'ai-financial-analyzer-pro',
      title: 'AI Financial Analyzer Pro',
      description: 'Advanced financial analysis with AI-powered insights, forecasting, and investment recommendations. Make smarter financial decisions.',
      icon: Calculator,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Financial forecasting', 'Investment analysis', 'Risk assessment', 'Portfolio optimization', 'Tax planning', 'Expense tracking', 'Budget management', 'Report generation'],
      benefits: ['Smarter investments', 'Better financial planning', 'Risk reduction', 'Tax optimization'],
      link: '/ai-financial-analyzer',
      popular: true,
      category: 'Finance',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '7 days',
      marketPrice: '$119/month',
      savings: '34% OFF'
    },
    {
      id: 'ai-invoice-generator-pro',
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered pricing, tax calculations, and payment tracking. Save 90% of billing time.',
      icon: FileCheck,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Auto-invoice generation', 'Smart pricing suggestions', 'Tax calculations', 'Payment tracking', 'Client management', 'Multi-currency support', 'Recurring billing', 'Payment reminders'],
      benefits: ['90% time savings', 'Zero calculation errors', 'Faster payments', 'Professional invoices'],
      link: '/ai-invoice-generator',
      popular: true,
      category: 'Finance',
      rating: 4.9,
      users: '45,000+',
      freeTrial: '14 days',
      marketPrice: '$79/month',
      savings: '38% OFF'
    },
    {
      id: 'ai-expense-tracker-pro',
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning, automated categorization, and tax preparation. Perfect for businesses and freelancers.',
      icon: CreditCard,
      price: '$29/month',
      originalPrice: '$49/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Tax preparation', 'Spending insights', 'Budget alerts', 'Multi-currency support', 'Team expense management', 'Integration with accounting software'],
      benefits: ['95% automation', 'Tax-ready reports', 'Better spending control', 'Time savings'],
      link: '/ai-expense-tracker',
      popular: true,
      category: 'Finance',
      rating: 4.7,
      users: '60,000+',
      freeTrial: '7 days',
      marketPrice: '$49/month',
      savings: '41% OFF'
    },
    {
      id: 'ai-stock-portfolio-manager',
      title: 'AI Stock Portfolio Manager',
      description: 'Intelligent portfolio management with AI-powered investment recommendations and risk assessment. Beat the market by 15%.',
      icon: TrendingUp,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Portfolio analysis', 'AI recommendations', 'Risk assessment', 'Performance tracking', 'Market insights', 'Tax optimization', 'Rebalancing alerts', 'News sentiment analysis'],
      benefits: ['15% better returns', 'Risk management', 'Informed decisions', 'Tax savings'],
      link: '/ai-stock-portfolio-manager',
      popular: true,
      category: 'Finance',
      rating: 4.8,
      users: '20,000+',
      freeTrial: '14 days',
      marketPrice: '$119/month',
      savings: '34% OFF'
    },
    // Customer Service & Support
    {
      id: 'ai-customer-support-bot-pro',
      title: 'AI Customer Support Bot Pro',
      description: 'Advanced AI chatbot with natural language processing, multi-language support, and seamless human handoff. Reduce support costs by 70%.',
      icon: Bot,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Natural language processing', 'Multi-language support', 'Human handoff', 'Knowledge base integration', 'Analytics dashboard', 'Custom branding', 'API access', 'Live chat integration'],
      benefits: ['70% cost reduction', '24/7 availability', 'Instant responses', 'Customer satisfaction'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      rating: 4.9,
      users: '35,000+',
      freeTrial: '14 days',
      isFeatured: true,
      marketPrice: '$149/month',
      savings: '34% OFF'
    },
    {
      id: 'ai-chatbot-builder-pro',
      title: 'AI Chatbot Builder Pro',
      description: 'No-code chatbot creation with drag-and-drop interface and AI training. Build professional chatbots in minutes.',
      icon: Bot,
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Drag-and-drop builder', 'AI training', 'Multi-platform deployment', 'Analytics tracking', 'Custom integrations', 'Voice support', 'Mobile app', 'White-label options'],
      benefits: ['No coding required', 'Quick deployment', 'Professional results', 'Easy maintenance'],
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Support',
      rating: 4.7,
      users: '28,000+',
      freeTrial: '7 days',
      marketPrice: '$99/month',
      savings: '30% OFF'
    },
    {
      id: 'ai-email-assistant-pro',
      title: 'AI Email Assistant Pro',
      description: 'Smart email management with AI-powered responses, scheduling, and priority handling. Manage 10x more emails efficiently.',
      icon: Mail,
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['AI email responses', 'Smart scheduling', 'Priority handling', 'Email templates', 'Follow-up automation', 'Spam filtering', 'Email analytics', 'Calendar integration'],
      benefits: ['10x email efficiency', 'Better responses', 'Time savings', 'Professional communication'],
      link: '/ai-email-assistant',
      popular: true,
      category: 'Support',
      rating: 4.6,
      users: '40,000+',
      freeTrial: '7 days',
      marketPrice: '$59/month',
      savings: '34% OFF'
    },
    // Development & Technical Tools
    {
      id: 'ai-code-review-assistant-pro',
      title: 'AI Code Review Assistant Pro',
      description: 'Automated code review with AI-powered analysis, security scanning, and performance optimization. Catch bugs before they happen.',
      icon: Code,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Automated code review', 'Security scanning', 'Performance analysis', 'Bug detection', 'Code suggestions', 'Style checking', 'Documentation generation', 'Team collaboration'],
      benefits: ['Catch bugs early', 'Better code quality', 'Security compliance', 'Team learning'],
      link: '/ai-code-generation',
      popular: true,
      category: 'Development',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '14 days',
      marketPrice: '$129/month',
      savings: '31% OFF'
    },
    {
      id: 'ai-mobile-app-builder-pro',
      title: 'AI Mobile App Builder Pro',
      description: 'No-code mobile app development with AI-powered design and functionality. Build professional apps 10x faster.',
      icon: Smartphone,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['No-code development', 'AI design suggestions', 'Cross-platform support', 'App store deployment', 'Analytics integration', 'Push notifications', 'User authentication', 'Database management'],
      benefits: ['10x faster development', 'No coding required', 'Professional results', 'Easy maintenance'],
      link: '/ai-mobile-app-development',
      popular: true,
      category: 'Development',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days',
      marketPrice: '$199/month',
      savings: '25% OFF'
    },
    {
      id: 'ai-cybersecurity-shield-pro',
      title: 'AI Cybersecurity Shield Pro',
      description: 'Advanced AI-powered security monitoring with threat detection, vulnerability scanning, and incident response. Protect your business 24/7.',
      icon: Shield,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', 'Real-time alerts', 'Penetration testing', 'Security training'],
      benefits: ['24/7 protection', 'Proactive security', 'Compliance ready', 'Peace of mind'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '12,000+',
      freeTrial: '7 days',
      isFeatured: true,
      marketPrice: '$299/month',
      savings: '33% OFF'
    },
    {
      id: 'ai-document-processor-pro',
      title: 'AI Document Processor Pro',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows. Process documents 50x faster.',
      icon: FileText,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['OCR technology', 'Data extraction', 'Automated workflows', 'Document classification', 'Version control', 'Collaboration tools', 'API integration', 'Custom templates'],
      benefits: ['50x faster processing', '99% accuracy', 'Automated workflows', 'Cost savings'],
      link: '/ai-document-processing',
      popular: true,
      category: 'Development',
      rating: 4.8,
      users: '20,000+',
      freeTrial: '14 days',
      marketPrice: '$119/month',
      savings: '34% OFF'
    },
    // Analytics & Data Tools
    {
      id: 'ai-data-analytics-pro',
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics with AI-powered insights, predictive modeling, and automated reporting. Make data-driven decisions.',
      icon: BarChart3,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI insights', 'Predictive modeling', 'Automated reporting', 'Data visualization', 'Real-time analytics', 'Custom dashboards', 'Data integration', 'Machine learning'],
      benefits: ['Better insights', 'Predictive accuracy', 'Automated reports', 'Data-driven decisions'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days',
      marketPrice: '$149/month',
      savings: '34% OFF'
    },
    {
      id: 'ai-business-intelligence-pro',
      title: 'AI Business Intelligence Pro',
      description: 'Comprehensive business intelligence with AI-powered dashboards, forecasting, and strategic insights. Transform your business data.',
      icon: PieChart,
      price: '$129/month',
      originalPrice: '$199/month',
      features: ['AI dashboards', 'Strategic forecasting', 'KPI tracking', 'Competitive analysis', 'Market insights', 'ROI optimization', 'Custom metrics', 'Executive reporting'],
      benefits: ['Strategic insights', 'Better forecasting', 'Competitive advantage', 'ROI optimization'],
      link: '/ai-business-intelligence',
      popular: true,
      category: 'Analytics',
      rating: 4.9,
      users: '15,000+',
      freeTrial: '14 days',
      isFeatured: true,
      marketPrice: '$199/month',
      savings: '35% OFF'
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Micro SAAS Solutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Powerful AI-Powered</span>
            <span className="block cyber-text">Micro SAAS Tools</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our comprehensive suite of AI-powered micro SAAS solutions designed to 
            transform your business operations and drive unprecedented growth.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`relative group ${service.isFeatured ? 'lg:col-span-2' : ''}`}
            >
              <div className={`cyber-card p-8 h-full flex flex-col ${service.isFeatured ? 'cyber-card-premium' : ''}`}>
                {/* Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                    {service.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {service.isFeatured && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Crown className="w-3 h-3 mr-1" />
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                    )}
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-2 py-1 rounded">
                      {service.savings}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: <span className="line-through">{service.marketPrice}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-sm text-gray-300 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{service.users} users</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock3 className="w-4 h-4" />
                    <span>{service.freeTrial} free trial</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 futuristic-btn py-3 text-sm group">
                    Start Free Trial
                    <Arrow className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="cyber-button px-4 py-3 group">
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of businesses already using our AI-powered solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn px-8 py-4 text-lg group">
                View All Services
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="quantum-button px-8 py-4 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MicroSAASServices;