'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Users, 
  TrendingUp, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  MapPin,
  BarChart3,
  FileText,
  MessageSquare,
  CreditCard,
  Calendar,
  Target,
  Settings,
  Database,
  Smartphone,
  Palette,
  Headphones,
  Lock,
  Cloud,
  Code,
  DollarSign,
  PieChart,
  Mail as EmailIcon,
  Camera,
  Video,
  Music,
  BookOpen,
  ShoppingCart,
  Briefcase,
  Home,
  Car,
  Plane,
  Heart,
  Gamepad2,
  Lightbulb,
  Wrench,
  Award,
  Timer,
  Download,
  Upload,
  Share2,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice?: string;
  benefits: string[];
  setupTime: string;
  freeTrial: string;
}

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  const products: MicroSaasProduct[] = [
    // Productivity & Business Tools
    {
      id: '1',
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive forecasting',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$200-500/month',
      benefits: ['Increase data-driven decisions by 300%', 'Save 20 hours/week on reporting', 'Real-time insights', 'Custom dashboards'],
      setupTime: '5 minutes',
      freeTrial: '14 days'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication',
      marketPrice: '$300-800/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Multi-language support'],
      setupTime: '10 minutes',
      freeTrial: '30 days'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, and compliance management',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security',
      marketPrice: '$500-2000/month',
      benefits: ['Proactive threat detection', 'Compliance assurance', '24/7 monitoring', 'Automated response'],
      setupTime: '30 minutes',
      freeTrial: '7 days'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization and cross-cloud synchronization',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage',
      marketPrice: '$150-400/month',
      benefits: ['99.99% data protection', 'Instant recovery', 'Cross-cloud backup', 'AI optimization'],
      setupTime: '5 minutes',
      freeTrial: '30 days'
    },
    {
      id: '5',
      icon: TrendingUp,
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations and real-time insights',
      features: [
        'Real-time APM with distributed tracing',
        'AI-powered performance anomaly detection',
        'Automated optimization recommendations',
        'Error tracking and crash reporting',
        'Uptime monitoring with global checkpoints',
        'Performance budget tracking and alerts',
        'Custom metrics and business KPIs',
        'Integration with CI/CD pipelines'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring',
      marketPrice: '$200-600/month',
      benefits: ['Improve performance by 50%', 'Reduce downtime by 90%', 'AI insights', 'Real-time monitoring'],
      setupTime: '10 minutes',
      freeTrial: '14 days'
    },
    {
      id: '6',
      icon: Brain,
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with AI-powered decision making and custom workflow optimization',
      features: [
        'Visual workflow builder with 200+ integrations',
        'AI-powered decision making and routing',
        'Document processing and data extraction',
        'Email and calendar automation',
        'Custom AI model training and deployment',
        'Advanced analytics and reporting',
        'Multi-tenant architecture',
        'API access and webhook support'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      marketPrice: '$400-1200/month',
      benefits: ['Automate 90% of repetitive tasks', 'Save 40 hours/week', 'AI decision making', '200+ integrations'],
      setupTime: '15 minutes',
      freeTrial: '21 days'
    },
    {
      id: '7',
      icon: EmailIcon,
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with advanced personalization, automation, and performance optimization',
      features: [
        'AI-powered email personalization and optimization',
        'Advanced segmentation and targeting',
        'A/B testing with statistical significance',
        'Behavioral triggers and drip campaigns',
        'Landing page builder with conversion tracking',
        'Advanced analytics and ROI reporting',
        'GDPR and CAN-SPAM compliance tools',
        'Integration with 50+ platforms'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$200-500/month',
      benefits: ['Increase open rates by 40%', 'Boost conversions by 60%', 'AI personalization', 'Advanced analytics'],
      setupTime: '10 minutes',
      freeTrial: '30 days'
    },
    {
      id: '8',
      icon: DollarSign,
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform with AI-powered insights and forecasting',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Automated invoice processing and approval workflows',
        'Real-time financial reporting and forecasting',
        'Tax compliance and preparation assistance',
        'Multi-currency support and exchange rate tracking',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs'
      ],
      price: '$179/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$300-800/month',
      benefits: ['Save 25 hours/week on accounting', 'Reduce errors by 95%', 'AI insights', 'Automated compliance'],
      setupTime: '20 minutes',
      freeTrial: '30 days'
    },
    {
      id: '9',
      icon: Users,
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights, automation, and employee engagement tools',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting'
      ],
      price: '$159/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR',
      marketPrice: '$250-600/month',
      benefits: ['Streamline HR processes', 'Improve employee engagement', 'AI insights', 'Compliance automation'],
      setupTime: '30 minutes',
      freeTrial: '30 days'
    },
    {
      id: '10',
      icon: ShoppingCart,
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization, optimization, and multi-channel selling capabilities',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways'
      ],
      price: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$500-1500/month',
      benefits: ['Increase sales by 35%', 'Reduce cart abandonment by 50%', 'AI personalization', 'Multi-channel selling'],
      setupTime: '45 minutes',
      freeTrial: '30 days'
    },
    {
      id: '11',
      icon: Smartphone,
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design assistance and cross-platform deployment',
      features: [
        'Drag-and-drop app builder with AI assistance',
        'Cross-platform development (iOS, Android)',
        'AI-powered UI/UX design recommendations',
        'Real-time preview and testing',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API management',
        'White-label app development'
      ],
      price: '$189/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      marketPrice: '$300-1000/month',
      benefits: ['Build apps 10x faster', 'No coding required', 'AI design assistance', 'Cross-platform'],
      setupTime: '60 minutes',
      freeTrial: '30 days'
    },
    {
      id: '12',
      icon: Globe,
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research, content optimization, and ranking tracking',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console'
      ],
      price: '$119/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'SEO',
      marketPrice: '$200-500/month',
      benefits: ['Increase organic traffic by 200%', 'AI content optimization', 'Competitor insights', 'Ranking tracking'],
      setupTime: '15 minutes',
      freeTrial: '14 days'
    },
    // Additional Productivity Tools
    {
      id: '13',
      icon: FileText,
      title: 'Zion Document AI',
      description: 'Intelligent document processing and management with AI-powered extraction, classification, and workflow automation',
      features: [
        'AI-powered OCR and text extraction',
        'Document classification and tagging',
        'Automated workflow and approval processes',
        'Version control and collaboration tools',
        'Advanced search and retrieval',
        'Compliance and audit trails',
        'Integration with major cloud storage',
        'Custom document templates'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$150-400/month',
      benefits: ['Process documents 5x faster', 'Reduce manual work by 80%', 'AI extraction', 'Workflow automation'],
      setupTime: '20 minutes',
      freeTrial: '21 days'
    },
    {
      id: '14',
      icon: Calendar,
      title: 'Zion Smart Scheduler',
      description: 'AI-powered scheduling and calendar management with intelligent optimization and automated meeting coordination',
      features: [
        'AI-powered meeting optimization',
        'Multi-calendar synchronization',
        'Automated meeting scheduling',
        'Time zone management',
        'Meeting room booking',
        'Follow-up reminders and tasks',
        'Integration with video conferencing',
        'Analytics and productivity insights'
      ],
      price: '$49/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$100-250/month',
      benefits: ['Save 5 hours/week on scheduling', 'Reduce meeting conflicts', 'AI optimization', 'Multi-calendar sync'],
      setupTime: '5 minutes',
      freeTrial: '30 days'
    },
    {
      id: '15',
      icon: Target,
      title: 'Zion Lead Generator',
      description: 'AI-powered lead generation and qualification platform with automated outreach and CRM integration',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated email and LinkedIn outreach',
        'Lead database with 50M+ contacts',
        'Intent data and behavioral tracking',
        'A/B testing for outreach campaigns',
        'CRM integration and lead routing',
        'Compliance with GDPR and CAN-SPAM',
        'Advanced analytics and ROI tracking'
      ],
      price: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Sales',
      marketPrice: '$300-800/month',
      benefits: ['Generate 3x more qualified leads', 'Automate outreach', 'AI qualification', 'CRM integration'],
      setupTime: '30 minutes',
      freeTrial: '14 days'
    },
    {
      id: '16',
      icon: Palette,
      title: 'Zion Design Studio',
      description: 'AI-powered design platform with automated creation, brand consistency, and collaborative design tools',
      features: [
        'AI-powered design generation',
        'Brand consistency enforcement',
        'Collaborative design tools',
        'Template library and customization',
        'Automated resizing and formatting',
        'Version control and approval workflows',
        'Integration with design tools',
        'White-label customization'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Design',
      marketPrice: '$200-500/month',
      benefits: ['Create designs 10x faster', 'Maintain brand consistency', 'AI generation', 'Collaborative tools'],
      setupTime: '15 minutes',
      freeTrial: '30 days'
    },
    {
      id: '17',
      icon: Headphones,
      title: 'Zion Support Center',
      description: 'Comprehensive customer support platform with AI-powered ticketing, knowledge base, and multi-channel support',
      features: [
        'AI-powered ticket routing and prioritization',
        'Knowledge base with AI search',
        'Multi-channel support (email, chat, phone)',
        'Customer satisfaction tracking',
        'Automated responses and escalations',
        'Integration with CRM systems',
        'Advanced analytics and reporting',
        'White-label customization'
      ],
      price: '$129/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Support',
      marketPrice: '$250-600/month',
      benefits: ['Reduce response time by 70%', 'Improve customer satisfaction', 'AI routing', 'Multi-channel support'],
      setupTime: '25 minutes',
      freeTrial: '30 days'
    },
    {
      id: '18',
      icon: Database,
      title: 'Zion Data Pipeline',
      description: 'AI-powered data integration and ETL platform with automated processing, transformation, and analytics',
      features: [
        'AI-powered data mapping and transformation',
        'Real-time data processing',
        '100+ data source connectors',
        'Automated data quality checks',
        'Data lineage and governance',
        'Advanced analytics and visualization',
        'API management and monitoring',
        'Custom data models and schemas'
      ],
      price: '$199/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Data',
      marketPrice: '$400-1000/month',
      benefits: ['Process data 5x faster', 'Reduce errors by 90%', 'AI mapping', 'Real-time processing'],
      setupTime: '45 minutes',
      freeTrial: '21 days'
    },
    {
      id: '19',
      icon: Camera,
      title: 'Zion Video AI',
      description: 'AI-powered video creation and editing platform with automated production, optimization, and distribution',
      features: [
        'AI-powered video generation and editing',
        'Automated voice-over and subtitles',
        'Multi-format export and optimization',
        'Social media template library',
        'Brand consistency enforcement',
        'Collaborative editing tools',
        'Analytics and performance tracking',
        'Integration with major platforms'
      ],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Media',
      marketPrice: '$300-800/month',
      benefits: ['Create videos 8x faster', 'AI editing', 'Multi-format export', 'Brand consistency'],
      setupTime: '20 minutes',
      freeTrial: '30 days'
    },
    {
      id: '20',
      icon: BookOpen,
      title: 'Zion Learning LMS',
      description: 'AI-powered learning management system with personalized content, automated assessments, and progress tracking',
      features: [
        'AI-powered personalized learning paths',
        'Automated content creation and curation',
        'Interactive assessments and quizzes',
        'Progress tracking and analytics',
        'Multi-format content support',
        'Gamification and engagement tools',
        'Integration with HR systems',
        'White-label customization'
      ],
      price: '$119/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Education',
      marketPrice: '$250-600/month',
      benefits: ['Improve learning outcomes by 40%', 'Personalized content', 'AI assessments', 'Progress tracking'],
      setupTime: '30 minutes',
      freeTrial: '30 days'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'HR', 'E-commerce', 'Development', 'SEO', 'Productivity', 'Sales', 'Design', 'Support', 'Data', 'Media', 'Education'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 20+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of 20+ micro SaaS solutions designed to solve specific business problems. AI-powered tools for analytics, communication, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, customer support, security monitoring, cloud backup, performance monitoring, workflow automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/pricing"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-semibold">Our Price:</span>
                        <span className="text-white font-bold text-lg">{product.price}</span>
                      </div>
                      {product.marketPrice && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Market Price:</span>
                          <span className="text-gray-300 text-sm line-through">{product.marketPrice}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Users:</span>
                        <span className="text-gray-300 text-sm">{product.users}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Setup:</span>
                        <span className="text-gray-300 text-sm">{product.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Free Trial:</span>
                        <span className="text-green-400 text-sm font-semibold">{product.freeTrial}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                      {product.benefits.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{product.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link 
                      to="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="w-full border border-white/20 text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Get started in minutes with our intuitive setup process. No complex configurations or lengthy onboarding.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance with SOC2, GDPR, and HIPAA standards to protect your data.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support from our expert team to ensure your success with our solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;