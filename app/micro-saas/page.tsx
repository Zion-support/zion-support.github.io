'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter,
  Star,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Brain,
  Cloud,
  BarChart3,
  Smartphone,
  Mail,
  Target,
  Code,
  Database,
  Globe,
  Lock,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  Award,
  Rocket,
  Cpu,
  Eye,
  MessageSquare,
  PieChart,
  Layers,
  Workflow,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  GraduationCap,
  Heart,
  Car,
  Home,
  ShoppingCart,
  CreditCard,
  Briefcase,
  UserCheck,
  FileCheck,
  Lightbulb,
  Wrench,
  Monitor,
  Server,
  Wifi,
  HardDrive,
  Cpu as CpuIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  BarChart3 as BarChart3Icon,
  Smartphone as SmartphoneIcon,
  Mail as MailIcon,
  Target as TargetIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
  DollarSign as DollarSignIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  Eye as EyeIcon,
  MessageSquare as MessageSquareIcon,
  PieChart as PieChartIcon,
  Layers as LayersIcon,
  Workflow as WorkflowIcon,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  BookOpen as BookOpenIcon,
  GraduationCap as GraduationCapIcon,
  Heart as HeartIcon,
  Car as CarIcon,
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  Briefcase as BriefcaseIcon,
  UserCheck as UserCheckIcon,
  FileCheck as FileCheckIcon,
  Lightbulb as LightbulbIcon,
  Wrench as WrenchIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Wifi as WifiIcon,
  HardDrive as HardDriveIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Machine Learning Tools
    {
      icon: Brain,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and real-time dashboards for data-driven decision making.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Automated alerts'],
      price: '$199/month',
      users: 'Up to 100 users',
      category: 'AI & ML',
      popular: true,
      rating: 4.9,
      reviews: 127
    },
    {
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'AI insights', 'Pipeline optimization'],
      price: '$149/month',
      users: 'Up to 200 users',
      category: 'AI & ML',
      popular: true,
      rating: 4.8,
      reviews: 89
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      features: ['Drag-and-drop builder', 'Multi-language support', 'Integration APIs', 'Analytics dashboard', 'Custom training', 'Live chat'],
      price: '$99/month',
      users: 'Unlimited',
      category: 'AI & ML',
      rating: 4.7,
      reviews: 156
    },
    {
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages with intelligent suggestions.',
      features: ['Code completion', 'Bug detection', 'Code optimization', 'Multi-language support', 'Git integration', 'Team collaboration'],
      price: '$79/month',
      users: 'Up to 50 developers',
      category: 'AI & ML',
      rating: 4.9,
      reviews: 203
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Batch processing', 'API integration', 'Cloud storage'],
      price: '$129/month',
      users: 'Up to 500 documents/month',
      category: 'AI & ML',
      rating: 4.6,
      reviews: 94
    },
    {
      icon: Target,
      title: 'AI Lead Generation Engine',
      description: 'Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.',
      features: ['Lead scoring', 'Email sequences', 'Social media prospecting', 'CRM integration', 'A/B testing', 'Analytics'],
      price: '$179/month',
      users: 'Up to 10,000 leads/month',
      category: 'AI & ML',
      rating: 4.8,
      reviews: 112
    },

    // Business & Productivity Tools
    {
      icon: Calendar,
      title: 'Smart Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management for teams.',
      features: ['Smart scheduling', 'Calendar sync', 'Meeting optimization', 'Time tracking', 'Team coordination', 'Mobile app'],
      price: '$29/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      rating: 4.7,
      reviews: 78
    },
    {
      icon: DollarSign,
      title: 'AI Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights for businesses.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Expense reports', 'Tax preparation', 'Mobile app'],
      price: '$39/month',
      users: 'Up to 50 users',
      category: 'Productivity',
      rating: 4.5,
      reviews: 65
    },
    {
      icon: Briefcase,
      title: 'Project Management AI',
      description: 'Advanced project management with AI prioritization, team collaboration, and progress tracking.',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Resource management', 'Timeline optimization', 'Reporting'],
      price: '$89/month',
      users: 'Up to 100 users',
      category: 'Productivity',
      popular: true,
      rating: 4.8,
      reviews: 134
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: ['Email automation', 'AI optimization', 'Personalization', 'A/B testing', 'Analytics', 'Template library'],
      price: '$59/month',
      users: 'Up to 10,000 subscribers',
      category: 'Marketing',
      rating: 4.6,
      reviews: 87
    },
    {
      icon: BarChart3,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics.',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Multi-platform', 'Engagement tracking', 'Hashtag optimization'],
      price: '$79/month',
      users: 'Up to 20 accounts',
      category: 'Marketing',
      rating: 4.7,
      reviews: 98
    },
    {
      icon: Search,
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions.',
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Technical SEO', 'Competitor analysis', 'Reporting'],
      price: '$69/month',
      users: 'Up to 50 websites',
      category: 'Marketing',
      rating: 4.8,
      reviews: 145
    },

    // Design & Creative Tools
    {
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools.',
      features: ['Logo generation', 'Graphic design', 'Template library', 'Brand consistency', 'Export options', 'Collaboration'],
      price: '$49/month',
      users: 'Up to 10 users',
      category: 'Design',
      rating: 4.6,
      reviews: 76
    },
    {
      icon: Camera,
      title: 'AI Image Generator',
      description: 'Generate high-quality images from text descriptions using advanced AI image generation technology.',
      features: ['Text-to-image', 'Style transfer', 'Image editing', 'Batch generation', 'API access', 'Commercial license'],
      price: '$89/month',
      users: 'Up to 1,000 images/month',
      category: 'Design',
      rating: 4.9,
      reviews: 167
    },
    {
      icon: Video,
      title: 'AI Video Creator',
      description: 'Create professional videos with AI assistance, automated editing, and template library.',
      features: ['Auto-editing', 'Template library', 'Voice synthesis', 'Subtitle generation', 'Export options', 'Cloud storage'],
      price: '$129/month',
      users: 'Up to 100 videos/month',
      category: 'Design',
      rating: 4.7,
      reviews: 89
    },

    // E-commerce & Sales Tools
    {
      icon: ShoppingCart,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced analytics and insights for e-commerce businesses with AI-powered recommendations.',
      features: ['Sales analytics', 'Customer insights', 'Inventory tracking', 'Conversion optimization', 'A/B testing', 'Reporting'],
      price: '$99/month',
      users: 'Up to 5 stores',
      category: 'E-commerce',
      rating: 4.8,
      reviews: 112
    },
    {
      icon: CreditCard,
      title: 'Payment Processor AI',
      description: 'Intelligent payment processing with fraud detection, automated reconciliation, and financial insights.',
      features: ['Payment processing', 'Fraud detection', 'Auto-reconciliation', 'Financial insights', 'Multi-currency', 'API integration'],
      price: '$149/month',
      users: 'Unlimited transactions',
      category: 'E-commerce',
      rating: 4.9,
      reviews: 203
    },
    {
      icon: Target,
      title: 'Inventory Management AI',
      description: 'Smart inventory management with demand forecasting, automated reordering, and optimization.',
      features: ['Demand forecasting', 'Auto-reordering', 'Inventory optimization', 'Multi-location', 'Reporting', 'Integration'],
      price: '$79/month',
      users: 'Up to 1,000 SKUs',
      category: 'E-commerce',
      rating: 4.7,
      reviews: 94
    },

    // Healthcare & Medical Tools
    {
      icon: Heart,
      title: 'Medical Records AI',
      description: 'HIPAA-compliant medical records management with AI-powered insights and patient care optimization.',
      features: ['Patient records', 'AI insights', 'HIPAA compliance', 'Appointment scheduling', 'Prescription tracking', 'Analytics'],
      price: '$199/month',
      users: 'Up to 500 patients',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 156
    },
    {
      icon: UserCheck,
      title: 'Patient Management System',
      description: 'Comprehensive patient management with appointment scheduling, treatment tracking, and communication tools.',
      features: ['Appointment scheduling', 'Treatment tracking', 'Patient communication', 'Billing integration', 'Reporting', 'Mobile app'],
      price: '$149/month',
      users: 'Up to 1,000 patients',
      category: 'Healthcare',
      rating: 4.8,
      reviews: 89
    },

    // Education & Learning Tools
    {
      icon: GraduationCap,
      title: 'Learning Management AI',
      description: 'AI-powered learning management system with personalized learning paths and progress tracking.',
      features: ['Personalized learning', 'Progress tracking', 'Content creation', 'Assessment tools', 'Analytics', 'Mobile app'],
      price: '$89/month',
      users: 'Up to 500 students',
      category: 'Education',
      rating: 4.7,
      reviews: 78
    },
    {
      icon: BookOpen,
      title: 'AI Content Creator',
      description: 'Create educational content with AI assistance, including courses, quizzes, and interactive materials.',
      features: ['Content creation', 'Quiz generation', 'Interactive materials', 'Multimedia support', 'Templates', 'Collaboration'],
      price: '$69/month',
      users: 'Up to 100 courses',
      category: 'Education',
      rating: 4.6,
      reviews: 65
    },

    // Real Estate & Property Tools
    {
      icon: Home,
      title: 'Property Management AI',
      description: 'Comprehensive property management with tenant screening, maintenance tracking, and financial analytics.',
      features: ['Tenant screening', 'Maintenance tracking', 'Financial analytics', 'Document management', 'Communication', 'Reporting'],
      price: '$119/month',
      users: 'Up to 100 properties',
      category: 'Real Estate',
      rating: 4.8,
      reviews: 98
    },
    {
      icon: Eye,
      title: 'Virtual Tour Creator',
      description: 'Create immersive virtual property tours with AI-powered 3D modeling and interactive features.',
      features: ['3D modeling', 'Virtual tours', 'Interactive features', 'Mobile optimization', 'Analytics', 'Integration'],
      price: '$79/month',
      users: 'Up to 50 tours/month',
      category: 'Real Estate',
      rating: 4.7,
      reviews: 76
    },

    // Legal & Compliance Tools
    {
      icon: Shield,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment.',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document storage', 'Version control', 'Reporting'],
      price: '$199/month',
      users: 'Up to 1,000 documents',
      category: 'Legal',
      rating: 4.9,
      reviews: 134
    },
    {
      icon: FileCheck,
      title: 'Compliance Monitor',
      description: 'Automated compliance monitoring with regulatory updates, audit trails, and risk management.',
      features: ['Regulatory updates', 'Audit trails', 'Risk management', 'Automated alerts', 'Reporting', 'Integration'],
      price: '$149/month',
      users: 'Up to 500 policies',
      category: 'Legal',
      rating: 4.8,
      reviews: 89
    },

    // HR & Recruitment Tools
    {
      icon: Users,
      title: 'AI Recruitment Assistant',
      description: 'Intelligent recruitment with resume screening, candidate matching, and interview scheduling.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Background checks', 'Analytics', 'Integration'],
      price: '$129/month',
      users: 'Up to 100 positions/month',
      category: 'HR',
      rating: 4.7,
      reviews: 112
    },
    {
      icon: UserCheck,
      title: 'Employee Management AI',
      description: 'Comprehensive employee management with performance tracking, training, and engagement analytics.',
      features: ['Performance tracking', 'Training management', 'Engagement analytics', 'Time tracking', 'Payroll integration', 'Reporting'],
      price: '$99/month',
      users: 'Up to 200 employees',
      category: 'HR',
      rating: 4.6,
      reviews: 87
    },

    // Finance & Accounting Tools
    {
      icon: DollarSign,
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with invoice processing, expense tracking, and financial reporting.',
      features: ['Invoice processing', 'Expense tracking', 'Financial reporting', 'Tax preparation', 'Bank reconciliation', 'Analytics'],
      price: '$89/month',
      users: 'Up to 1,000 transactions/month',
      category: 'Finance',
      rating: 4.8,
      reviews: 145
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning AI',
      description: 'AI-powered financial planning with budgeting, forecasting, and investment analysis.',
      features: ['Budgeting', 'Forecasting', 'Investment analysis', 'Risk assessment', 'Goal tracking', 'Reporting'],
      price: '$79/month',
      users: 'Up to 50 portfolios',
      category: 'Finance',
      rating: 4.7,
      reviews: 98
    },

    // Security & Compliance Tools
    {
      icon: Lock,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Analytics'],
      price: '$199/month',
      users: 'Up to 500 devices',
      category: 'Security',
      popular: true,
      rating: 4.9,
      reviews: 167
    },
    {
      icon: Shield,
      title: 'Data Protection AI',
      description: 'AI-powered data protection with encryption, backup management, and privacy compliance.',
      features: ['Data encryption', 'Backup management', 'Privacy compliance', 'Access control', 'Audit trails', 'Reporting'],
      price: '$149/month',
      users: 'Up to 1TB storage',
      category: 'Security',
      rating: 4.8,
      reviews: 123
    },

    // Cloud & Infrastructure Tools
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments.',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Monitoring', 'Automation'],
      price: '$299/month',
      users: 'Unlimited resources',
      category: 'Infrastructure',
      popular: true,
      rating: 4.9,
      reviews: 189
    },
    {
      icon: Server,
      title: 'Server Monitoring AI',
      description: 'Intelligent server monitoring with predictive maintenance and performance optimization.',
      features: ['Performance monitoring', 'Predictive maintenance', 'Alert management', 'Capacity planning', 'Automation', 'Reporting'],
      price: '$99/month',
      users: 'Up to 100 servers',
      category: 'Infrastructure',
      rating: 4.7,
      reviews: 94
    },

    // Communication & Collaboration Tools
    {
      icon: MessageSquare,
      title: 'Team Communication AI',
      description: 'AI-enhanced team communication with smart notifications, meeting summaries, and collaboration tools.',
      features: ['Smart notifications', 'Meeting summaries', 'File sharing', 'Video calls', 'Screen sharing', 'Integration'],
      price: '$59/month',
      users: 'Up to 100 users',
      category: 'Communication',
      rating: 4.6,
      reviews: 78
    },
    {
      icon: Video,
      title: 'Video Conferencing Pro',
      description: 'Professional video conferencing with AI features, recording, and advanced collaboration tools.',
      features: ['HD video calls', 'Screen sharing', 'Recording', 'AI transcription', 'Breakout rooms', 'Integration'],
      price: '$79/month',
      users: 'Up to 200 participants',
      category: 'Communication',
      rating: 4.8,
      reviews: 112
    }
  ];

  const categories = [
    'All',
    'AI & ML',
    'Productivity',
    'Marketing',
    'Design',
    'E-commerce',
    'Healthcare',
    'Education',
    'Real Estate',
    'Legal',
    'HR',
    'Finance',
    'Security',
    'Infrastructure',
    'Communication'
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration',
    'Free trials available',
    'Cancel anytime',
    'Enterprise security',
    'API access included'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 50+ micro SAAS solutions powered by AI. From productivity tools to marketing automation, find the perfect solution for your business needs." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity tools, marketing automation, crm, analytics, zion tech group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              50+ AI-powered business tools designed to streamline operations, boost productivity, and drive growth for modern businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.slice(0, 6).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
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

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                      {product.rating && (
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-300">({product.reviews} reviews)</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
