'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  DollarSign,
  Users,
  BarChart3,
  Clock,
  Star,
  TrendingUp,
  Lock,
  Cloud,
  Smartphone,
  Database,
  Code,
  Palette,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Monitor,
  Wifi,
  FileText,
  PieChart,
  MessageSquare,
  Calendar,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Truck,
  Home,
  Car,
  Plane,
  Heart,
  BookOpen,
  Gamepad2,
  Headphones,
  Mic,
  Image,
  Download,
  Upload,
  Share2,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Search,
  Package,
  Filter,
  Sort,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon,
  HelpCircle as HelpIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Grid as GridIcon,
  List as ListIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Lock as LockIcon2,
  Unlock as UnlockIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Shield as ShieldIcon2,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon
} from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, and engagement optimization using advanced AI algorithms.',
      features: ['Content Generation', 'Auto Posting', 'Engagement Analytics', 'Trend Analysis', 'Multi-Platform Support'],
      pricing: '$29/month',
      category: 'Marketing',
      icon: MessageSquare,
      benefits: ['Save 20+ hours/week', 'Increase engagement by 300%', '24/7 automated posting', 'AI-powered content optimization'],
      marketPrice: '$49-99/month',
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    {
      id: 'smart-invoice-generator',
      name: 'Smart Invoice Generator',
      description: 'AI-powered invoice creation, automated billing, payment tracking, and financial reporting for small businesses.',
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Tax Calculations', 'Client Management', 'Financial Reports'],
      pricing: '$19/month',
      category: 'Finance',
      icon: FileText,
      benefits: ['Reduce billing time by 80%', 'Automated payment reminders', 'Tax compliance', 'Professional invoices'],
      marketPrice: '$29-59/month',
      link: 'https://ziontechgroup.com/smart-invoice-generator'
    },
    {
      id: 'ai-customer-feedback-analyzer',
      name: 'AI Customer Feedback Analyzer',
      description: 'Advanced sentiment analysis and insights from customer feedback across multiple channels using machine learning.',
      features: ['Sentiment Analysis', 'Multi-Channel Support', 'Real-time Insights', 'Trend Detection', 'Custom Reports'],
      pricing: '$39/month',
      category: 'Analytics',
      icon: BarChart3,
      benefits: ['Understand customer emotions', 'Identify improvement areas', 'Track satisfaction trends', 'Automated reporting'],
      marketPrice: '$59-129/month',
      link: 'https://ziontechgroup.com/ai-customer-feedback-analyzer'
    },
    {
      id: 'smart-appointment-scheduler',
      name: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling system with automated reminders, time zone handling, and calendar integration.',
      features: ['Auto Scheduling', 'Calendar Sync', 'Reminder System', 'Time Zone Support', 'Client Portal'],
      pricing: '$24/month',
      category: 'Productivity',
      icon: Calendar,
      benefits: ['Reduce no-shows by 60%', 'Automated reminders', 'Seamless integration', 'Time zone intelligence'],
      marketPrice: '$39-79/month',
      link: 'https://ziontechgroup.com/smart-appointment-scheduler'
    },
    {
      id: 'ai-content-translator',
      name: 'AI Content Translator',
      description: 'Real-time content translation with context awareness, maintaining brand voice across 100+ languages.',
      features: ['100+ Languages', 'Context Awareness', 'Brand Voice Preservation', 'Real-time Translation', 'Quality Assurance'],
      pricing: '$34/month',
      category: 'Content',
      icon: Globe,
      benefits: ['Expand globally instantly', 'Maintain brand consistency', 'High accuracy translation', 'Cost-effective scaling'],
      marketPrice: '$49-149/month',
      link: 'https://ziontechgroup.com/ai-content-translator'
    },
    {
      id: 'smart-expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'AI-powered expense categorization, receipt scanning, and automated expense reporting for businesses.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Tax Preparation', 'Team Management', 'Compliance Reports'],
      pricing: '$22/month',
      category: 'Finance',
      icon: CreditCard,
      benefits: ['Save 10+ hours/month', 'Automated categorization', 'Tax-ready reports', 'Team collaboration'],
      marketPrice: '$29-69/month',
      link: 'https://ziontechgroup.com/smart-expense-tracker'
    },
    {
      id: 'ai-email-optimizer',
      name: 'AI Email Optimizer',
      description: 'Advanced email marketing optimization with AI-driven subject lines, content suggestions, and send time optimization.',
      features: ['Subject Line AI', 'Content Optimization', 'Send Time AI', 'A/B Testing', 'Performance Analytics'],
      pricing: '$27/month',
      category: 'Marketing',
      icon: Mail,
      benefits: ['Increase open rates by 40%', 'AI-powered optimization', 'Automated testing', 'Performance insights'],
      marketPrice: '$39-89/month',
      link: 'https://ziontechgroup.com/ai-email-optimizer'
    },
    {
      id: 'smart-inventory-manager',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand Forecasting', 'Auto Reordering', 'Supply Chain AI', 'Multi-Location Support', 'Analytics Dashboard'],
      pricing: '$45/month',
      category: 'Operations',
      icon: Package,
      benefits: ['Reduce stockouts by 70%', 'Optimize inventory levels', 'Automated reordering', 'Cost reduction'],
      marketPrice: '$69-199/month',
      link: 'https://ziontechgroup.com/smart-inventory-manager'
    },
    {
      id: 'ai-lead-scoring',
      name: 'AI Lead Scoring',
      description: 'Intelligent lead qualification and scoring system using machine learning to identify high-value prospects.',
      features: ['ML Lead Scoring', 'Behavioral Analysis', 'Predictive Analytics', 'CRM Integration', 'Custom Models'],
      pricing: '$32/month',
      category: 'Sales',
      icon: Target,
      benefits: ['Increase conversion by 50%', 'Focus on hot leads', 'Predictive insights', 'Sales efficiency'],
      marketPrice: '$49-129/month',
      link: 'https://ziontechgroup.com/ai-lead-scoring'
    },
    {
      id: 'smart-document-processor',
      name: 'Smart Document Processor',
      description: 'AI-powered document processing with OCR, data extraction, and automated workflow management.',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Automation', 'Template Recognition', 'Batch Processing'],
      pricing: '$38/month',
      category: 'Productivity',
      icon: FileText,
      benefits: ['Process 1000s of documents', 'Automated data entry', 'Error reduction', 'Workflow efficiency'],
      marketPrice: '$59-149/month',
      link: 'https://ziontechgroup.com/smart-document-processor'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'No-code chatbot creation platform with advanced AI capabilities for customer support and lead generation.',
      features: ['No-Code Builder', 'Multi-Language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
      pricing: '$25/month',
      category: 'Customer Service',
      icon: MessageSquare,
      benefits: ['24/7 customer support', 'Reduce support costs', 'Instant responses', 'Lead qualification'],
      marketPrice: '$39-99/month',
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 'smart-analytics-dashboard',
      name: 'Smart Analytics Dashboard',
      description: 'AI-powered business intelligence dashboard with automated insights, predictions, and custom reporting.',
      features: ['Automated Insights', 'Predictive Analytics', 'Custom Dashboards', 'Data Visualization', 'Alert System'],
      pricing: '$42/month',
      category: 'Analytics',
      icon: BarChart3,
      benefits: ['Data-driven decisions', 'Automated insights', 'Predictive analytics', 'Custom reporting'],
      marketPrice: '$69-199/month',
      link: 'https://ziontechgroup.com/smart-analytics-dashboard'
    }
  ];

  const categories = ['All', 'Marketing', 'Finance', 'Analytics', 'Productivity', 'Content', 'Operations', 'Sales', 'Customer Service'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro saas, business automation, AI tools, productivity software, business solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              <span>Micro SAAS</span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS solutions designed to automate and optimize your business operations. 
              From AI-powered marketing tools to smart financial management, we have everything you need to scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Browse Services
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <span className="text-sm text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{service.pricing}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get started with our micro SAAS solutions today. Contact our experts for a personalized consultation and find the perfect tools for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServicesPage;
