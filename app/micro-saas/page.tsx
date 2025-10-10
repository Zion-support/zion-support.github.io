'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 12;

  const microSaasProducts: MicroSaasProduct[] = [
    {
<<<<<<< HEAD
      id: '1',
      icon: '📊',
=======
      icon: BarChart3,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
<<<<<<< HEAD
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '👥',
=======
      popular: false
    },
    {
      icon: Users,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
<<<<<<< HEAD
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: '🔒',
=======
      popular: true
    },
    {
      icon: Shield,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
<<<<<<< HEAD
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
=======
      popular: false
    },
    {
      icon: Cloud,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
<<<<<<< HEAD
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with advanced segmentation and personalization',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics', 'Integration tools'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: '💬',
      title: 'Customer Support Chatbot',
      description: 'Intelligent chatbot solution for 24/7 customer support and lead generation',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training'],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'
<<<<<<< HEAD
    },
    {
      id: '7',
      icon: '🤖',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI content creation with 50+ templates, SEO optimization, and multi-language support',
      features: ['50+ templates', 'SEO optimization', 'Multi-language', 'Plagiarism check', 'Brand voice training'],
      price: '$49/month',
      users: 'Unlimited content',
      popular: true,
      category: 'Content'
    },
    {
      id: '8',
      icon: '📱',
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform', 'App store publishing'],
      price: '$199/month',
      users: 'Up to 10 apps',
      popular: false,
      category: 'Development'
    },
    {
      id: '9',
      icon: '🔍',
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO'],
      price: '$79/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '10',
      icon: '💰',
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights',
      features: ['Automated invoicing', 'Payment tracking', 'Financial reports', 'Tax calculations', 'Client portal'],
      price: '$39/month',
      users: 'Up to 1000 invoices',
      popular: false,
      category: 'Finance'
    },
    {
      id: '11',
      icon: '📝',
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates',
      features: ['50+ templates', 'Multi-language support', 'Plagiarism check', 'SEO optimization', 'Tone adjustment'],
      price: '$29/month',
      users: 'Unlimited words',
      popular: true,
      category: 'Productivity'
    },
    {
      id: '12',
      icon: '📊',
      title: 'Smart Analytics Pro',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting',
      features: ['Real-time analytics', 'Predictive forecasting', 'Automated reports', 'Custom metrics', 'Data integration'],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: '13',
      icon: '📅',
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs'],
      price: '$19/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '14',
      icon: '💳',
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget insights', 'Tax preparation', 'Multi-currency'],
      price: '$15/month',
      users: 'Unlimited expenses',
      popular: false,
      category: 'Finance'
    },
    {
      id: '15',
      icon: '✅',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Project templates'],
      price: '$39/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '16',
      icon: '👥',
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation',
      features: ['AI lead scoring', 'Contact management', 'Sales pipeline', 'Email integration', 'Mobile app'],
      price: '$59/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '17',
      icon: '📧',
      title: 'Email Optimizer Pro',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing',
      features: ['Subject line AI', 'Send time optimization', 'A/B testing', 'Open rate tracking', 'Spam analysis'],
      price: '$25/month',
      users: 'Up to 50,000 emails',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '18',
      icon: '🌐',
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Multi-platform', 'Engagement tracking'],
      price: '$45/month',
      users: 'Up to 20 accounts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '19',
      icon: '🎨',
      title: 'AI Design Studio Pro',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools',
      features: ['AI design tools', 'Logo generation', 'Marketing materials', 'Brand kit', 'Template library'],
      price: '$35/month',
      users: 'Unlimited designs',
      popular: false,
      category: 'Design'
    },
    {
      id: '20',
      icon: '📱',
      title: 'Landing Page Builder AI',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive'],
      price: '$29/month',
      users: 'Up to 10 pages',
      popular: false,
      category: 'Development'
    },
    {
      id: '21',
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions',
      features: ['SEO analysis', 'Keyword research', 'Content suggestions', 'Ranking tracking', 'Technical audits'],
      price: '$49/month',
      users: 'Up to 3 websites',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '22',
      icon: '📈',
      title: 'Ad Campaign Manager AI',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'Auto-bidding'],
      price: '$79/month',
      users: 'Up to $10k ad spend',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '23',
      icon: '💻',
      title: 'Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation'],
      price: '$39/month',
      users: 'Unlimited usage',
      popular: false,
      category: 'Development'
    },
    {
      id: '24',
      icon: '🔧',
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting'],
      price: '$59/month',
      users: 'Up to 50 APIs',
      popular: false,
      category: 'Development'
    },
    {
      id: '25',
      icon: '🐛',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration APIs'],
      price: '$25/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Development'
    },
    {
      id: '26',
      icon: '📚',
      title: 'Doc Generator AI',
      description: 'Automatically generate technical documentation, API docs, and user guides from code',
      features: ['Auto documentation', 'API docs', 'User guides', 'Code comments', 'Multiple formats'],
      price: '$19/month',
      users: 'Unlimited docs',
      popular: false,
      category: 'Development'
    },
    {
      id: '27',
      icon: '👨‍💼',
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks'],
      price: '$199/month',
      users: 'Up to 1000 candidates',
      popular: false,
      category: 'HR'
    },
    {
      id: '28',
      icon: '🏥',
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis',
      features: ['HIPAA compliance', 'Data extraction', 'Medical analysis', 'Patient portal', 'Integration APIs'],
      price: '$299/month',
      users: 'Up to 500 patients',
      popular: false,
      category: 'Healthcare'
    },
    {
      id: '29',
      icon: '📊',
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial reports', 'Expense tracking', 'Compliance'],
      price: '$149/month',
      users: 'Up to 1000 transactions',
      popular: false,
      category: 'Finance'
    },
    {
      id: '30',
      icon: '🏠',
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal'],
      price: '$179/month',
      users: 'Up to 100 properties',
      popular: false,
      category: 'Real Estate'
    },
    {
      id: '31',
      icon: '⚖️',
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document templates', 'Legal research'],
      price: '$249/month',
      users: 'Up to 1000 documents',
      popular: false,
      category: 'Legal'
    },
    {
      id: '32',
      icon: '🎓',
      title: 'Online Learning Platform AI',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking',
      features: ['Personalized learning', 'Progress tracking', 'Course creation', 'Assessment tools', 'Certification'],
      price: '$99/month',
      users: 'Up to 500 students',
      popular: false,
      category: 'Education'
    },
    {
      id: '33',
      icon: '📦',
      title: 'Supply Chain Optimizer AI',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management',
      features: ['Demand forecasting', 'Inventory management', 'Supplier analytics', 'Risk assessment', 'Cost optimization'],
      price: '$399/month',
      users: 'Up to 1000 SKUs',
      popular: false,
      category: 'Manufacturing'
    },
    {
      id: '34',
      icon: '🎯',
      title: 'Lead Generation AI',
      description: 'AI-powered lead generation with automated prospecting, email sequences, and qualification',
      features: ['Automated prospecting', 'Email sequences', 'Lead qualification', 'CRM integration', 'Analytics'],
      price: '$199/month',
      users: 'Up to 10,000 leads',
      popular: true,
      category: 'Sales'
    },
    {
      id: '35',
      icon: '📊',
      title: 'Business Intelligence AI',
      description: 'Advanced business intelligence with AI insights, automated reporting, and predictive analytics',
      features: ['AI insights', 'Automated reporting', 'Predictive analytics', 'Custom dashboards', 'Data visualization'],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: '36',
      icon: '🔐',
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with AI-powered security recommendations and breach monitoring',
      features: ['Password generation', 'Security recommendations', 'Breach monitoring', 'Team sharing', '2FA integration'],
      price: '$15/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '37',
      icon: '📱',
      title: 'App Store Optimizer',
      description: 'AI-powered app store optimization with keyword research, ASO analysis, and conversion optimization',
      features: ['Keyword research', 'ASO analysis', 'Conversion optimization', 'Competitor tracking', 'Performance metrics'],
      price: '$79/month',
      users: 'Up to 20 apps',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '38',
      icon: '🎵',
      title: 'AI Music Generator',
      description: 'Create royalty-free music and sound effects with AI-powered composition and customization',
      features: ['AI composition', 'Multiple genres', 'Customization', 'Royalty-free', 'Export options'],
      price: '$39/month',
      users: 'Unlimited tracks',
      popular: false,
      category: 'Creative'
    },
    {
      id: '39',
      icon: '🎬',
      title: 'AI Video Editor',
      description: 'Automated video editing with AI-powered scene detection, auto-cropping, and smart transitions',
      features: ['Auto-editing', 'Scene detection', 'Smart transitions', 'Auto-cropping', 'Multiple formats'],
      price: '$59/month',
      users: 'Up to 100 videos',
      popular: false,
      category: 'Creative'
    },
    {
      id: '40',
      icon: '📊',
      title: 'AI Survey Builder',
      description: 'Create intelligent surveys with AI-powered question suggestions and automated analysis',
      features: ['Question suggestions', 'Automated analysis', 'Response tracking', 'Custom themes', 'Integration APIs'],
      price: '$29/month',
      users: 'Up to 1000 responses',
      popular: false,
      category: 'Research'
=======
=======
      popular: false
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
>>>>>>> main
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

<<<<<<< HEAD
  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Content', 'Development', 'Finance', 'Productivity', 'Design', 'HR', 'Healthcare', 'Real Estate', 'Legal', 'Education', 'Manufacturing', 'Sales', 'Creative', 'Research'];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);
=======
<<<<<<< HEAD
  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support'];
>>>>>>> main

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Rating',
      description: 'Highly rated by our customers'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
=======
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software" />
=======
        <title>Micro SaaS Solutions - Zion Tech Group | Focused AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - focused, affordable AI and IT tools designed for specific business needs. Quick deployment, scalable, and cost-effective." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, CRM, analytics, security monitoring, cloud management" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Focused AI and IT tools for specific business needs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
<<<<<<< HEAD
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search micro SAAS products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-4 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
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
=======
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
=======
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
              ))}
>>>>>>> main
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
              <div className="mt-4 text-gray-300">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
=======
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Micro SaaS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
                        Most Popular
                      </div>
                    </div>
                  )}
<<<<<<< HEAD

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
=======
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.users}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}>
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
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
                          ? 'bg-cyan-500 text-white'
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
=======
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits of Micro SaaS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-a851

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
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