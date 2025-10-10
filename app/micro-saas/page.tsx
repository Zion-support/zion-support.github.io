'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  BarChart3, 
  MessageSquare,
  Search,
  Filter,
  Brain,
  Cloud,
  Database,
  Smartphone,
  Mail,
  Calendar,
  FileText,
  Settings,
  Target,
  Globe,
  Lock,
  Cpu,
  Code,
  DollarSign,
  Award,
  Headphones
} from 'lucide-react';

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
  savings?: string;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // AI & Analytics Tools
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and custom dashboards for data-driven decisions.',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated reporting',
        'Mobile app access',
        'API integrations',
        'Advanced filtering',
        'Export capabilities'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$299/month',
      savings: '67% savings',
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: '2',
      icon: Brain,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      features: [
        'AI writing assistant',
        'Image generation',
        'Video editing tools',
        'Social media automation',
        'SEO optimization',
        'Brand voice training',
        'Multi-language support',
        'Content calendar'
      ],
      price: '$149/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Content',
      marketPrice: '$399/month',
      savings: '63% savings',
      link: 'https://ziontechgroup.com/ai-content-studio'
    },
    {
      id: '3',
      icon: Target,
      title: 'AI Lead Generation Engine',
      description: 'Automated lead generation with AI-powered prospecting, email sequences, and CRM integration.',
      features: [
        'AI prospecting',
        'Email sequence automation',
        'Lead scoring',
        'CRM integration',
        'A/B testing',
        'Performance analytics',
        'Multi-channel outreach',
        'Compliance management'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Sales',
      marketPrice: '$499/month',
      savings: '60% savings',
      link: 'https://ziontechgroup.com/ai-lead-generation'
    },

    // CRM & Customer Management
    {
      id: '4',
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated follow-ups, predictive analytics, and sales forecasting.',
      features: [
        'Contact management',
        'Sales pipeline automation',
        'AI lead scoring',
        'Email integration',
        'Task automation',
        'Performance analytics',
        'Mobile app',
        'Custom fields'
      ],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'CRM',
      marketPrice: '$199/month',
      savings: '60% savings',
      link: 'https://ziontechgroup.com/ai-crm'
    },
    {
      id: '5',
      icon: MessageSquare,
      title: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing, multi-channel support, and seamless handoff.',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Knowledge base integration',
        'Sentiment analysis',
        'Live chat handoff',
        'Analytics dashboard',
        'Custom training',
        'API integrations'
      ],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: true,
      category: 'Support',
      marketPrice: '$299/month',
      savings: '57% savings',
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },

    // Marketing & Sales Tools
    {
      id: '6',
      icon: Mail,
      title: 'AI Email Marketing Pro',
      description: 'Advanced email marketing automation with AI optimization, personalization, and advanced analytics.',
      features: [
        'AI subject line optimization',
        'Send time optimization',
        'Personalization engine',
        'A/B testing',
        'Advanced analytics',
        'List segmentation',
        'Automation workflows',
        'Deliverability monitoring'
      ],
      price: '$89/month',
      users: 'Up to 50,000 contacts',
      popular: false,
      category: 'Marketing',
      marketPrice: '$199/month',
      savings: '55% savings',
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      id: '7',
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization with AI-powered keyword research and content suggestions.',
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audits',
        'Ranking tracking',
        'Competitor analysis',
        'Content suggestions',
        'Link building tools',
        'Performance monitoring'
      ],
      price: '$69/month',
      users: 'Up to 10 websites',
      popular: false,
      category: 'Marketing',
      marketPrice: '$149/month',
      savings: '54% savings',
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: '8',
      icon: Globe,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics.',
      features: [
        'Content creation',
        'Auto-scheduling',
        'Performance analytics',
        'Multi-platform support',
        'Engagement tracking',
        'Hashtag optimization',
        'Influencer discovery',
        'Competitor analysis'
      ],
      price: '$79/month',
      users: 'Up to 20 accounts',
      popular: false,
      category: 'Marketing',
      marketPrice: '$179/month',
      savings: '56% savings',
      link: 'https://ziontechgroup.com/social-media-manager'
    },

    // Productivity & Business Tools
    {
      id: '9',
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management.',
      features: [
        'Smart scheduling',
        'Meeting optimization',
        'Time zone handling',
        'Resource booking',
        'Conflict resolution',
        'Integration APIs',
        'Mobile app',
        'Analytics dashboard'
      ],
      price: '$39/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$99/month',
      savings: '61% savings',
      link: 'https://ziontechgroup.com/ai-scheduler'
    },
    {
      id: '10',
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automated document processing with AI-powered data extraction, classification, and analysis.',
      features: [
        'Document scanning',
        'Data extraction',
        'Document classification',
        'OCR technology',
        'Batch processing',
        'API integration',
        'Custom templates',
        'Compliance tracking'
      ],
      price: '$119/month',
      users: 'Up to 1,000 documents/month',
      popular: false,
      category: 'Productivity',
      marketPrice: '$299/month',
      savings: '60% savings',
      link: 'https://ziontechgroup.com/ai-document-processor'
    },
    {
      id: '11',
      icon: DollarSign,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.',
      features: [
        'Automated invoicing',
        'Payment tracking',
        'Financial reporting',
        'Tax calculations',
        'Client portal',
        'Recurring billing',
        'Multi-currency support',
        'Integration APIs'
      ],
      price: '$49/month',
      users: 'Up to 500 invoices/month',
      popular: false,
      category: 'Finance',
      marketPrice: '$129/month',
      savings: '62% savings',
      link: 'https://ziontechgroup.com/ai-invoice-generator'
    },

    // Development & Technical Tools
    {
      id: '12',
      icon: Code,
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: [
        'Code completion',
        'Debugging assistance',
        'Code optimization',
        'Multi-language support',
        'Documentation generation',
        'Code review',
        'Security scanning',
        'Performance analysis'
      ],
      price: '$59/month',
      users: 'Up to 10 developers',
      popular: false,
      category: 'Development',
      marketPrice: '$149/month',
      savings: '60% savings',
      link: 'https://ziontechgroup.com/code-assistant'
    },
    {
      id: '13',
      icon: Settings,
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools.',
      features: [
        'API creation',
        'Documentation generation',
        'Testing tools',
        'Version control',
        'Rate limiting',
        'Authentication',
        'Monitoring',
        'Analytics'
      ],
      price: '$89/month',
      users: 'Up to 50 APIs',
      popular: false,
      category: 'Development',
      marketPrice: '$199/month',
      savings: '55% savings',
      link: 'https://ziontechgroup.com/api-builder'
    },
    {
      id: '14',
      icon: Shield,
      title: 'Security Scanner AI',
      description: 'Automated security scanning with vulnerability detection, compliance checking, and threat monitoring.',
      features: [
        'Vulnerability scanning',
        'Compliance checking',
        'Threat monitoring',
        'Penetration testing',
        'Security reports',
        'Remediation guidance',
        'Continuous monitoring',
        'Integration APIs'
      ],
      price: '$149/month',
      users: 'Up to 100 assets',
      popular: true,
      category: 'Security',
      marketPrice: '$399/month',
      savings: '63% savings',
      link: 'https://ziontechgroup.com/security-scanner'
    },

    // Specialized Industry Tools
    {
      id: '15',
      icon: Headphones,
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling.',
      features: [
        'Resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Skills assessment',
        'Background checks',
        'Onboarding automation',
        'Analytics dashboard',
        'Integration APIs'
      ],
      price: '$199/month',
      users: 'Up to 200 candidates/month',
      popular: false,
      category: 'HR',
      marketPrice: '$499/month',
      savings: '60% savings',
      link: 'https://ziontechgroup.com/ai-recruitment-assistant'
    },
    {
      id: '16',
      icon: Award,
      title: 'Learning Management AI',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking.',
      features: [
        'Personalized learning',
        'Progress tracking',
        'Course creation',
        'Assessment tools',
        'Certification',
        'Mobile app',
        'Analytics dashboard',
        'Integration APIs'
      ],
      price: '$99/month',
      users: 'Up to 500 learners',
      popular: false,
      category: 'Education',
      marketPrice: '$249/month',
      savings: '60% savings',
      link: 'https://ziontechgroup.com/online-learning-platform'
    },
    {
      id: '17',
      icon: Database,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management.',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier analytics',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Analytics dashboard',
        'Integration APIs'
      ],
      price: '$299/month',
      users: 'Up to 1,000 SKUs',
      popular: false,
      category: 'Logistics',
      marketPrice: '$699/month',
      savings: '57% savings',
      link: 'https://ziontechgroup.com/supply-chain-optimizer'
    },
    {
      id: '18',
      icon: Lock,
      title: 'Medical Records AI',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis.',
      features: [
        'HIPAA compliance',
        'Data extraction',
        'Medical analysis',
        'Patient portal',
        'Integration APIs',
        'Security monitoring',
        'Audit trails',
        'Analytics dashboard'
      ],
      price: '$249/month',
      users: 'Up to 1,000 patients',
      popular: false,
      category: 'Healthcare',
      marketPrice: '$599/month',
      savings: '58% savings',
      link: 'https://ziontechgroup.com/medical-records-manager'
    },
    {
      id: '19',
      icon: BarChart3,
      title: 'Accounting AI Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting.',
      features: [
        'Automated bookkeeping',
        'Tax preparation',
        'Financial reporting',
        'Expense tracking',
        'Compliance monitoring',
        'Integration APIs',
        'Mobile app',
        'Analytics dashboard'
      ],
      price: '$149/month',
      users: 'Up to 500 transactions/month',
      popular: false,
      category: 'Finance',
      marketPrice: '$349/month',
      savings: '57% savings',
      link: 'https://ziontechgroup.com/ai-accounting-assistant'
    },
    {
      id: '20',
      icon: Smartphone,
      title: 'Mobile App Builder AI',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.',
      features: [
        'Drag-and-drop builder',
        'AI code generation',
        'Instant deployment',
        'Cross-platform support',
        'App store publishing',
        'Push notifications',
        'Analytics integration',
        'Custom branding'
      ],
      price: '$199/month',
      users: 'Unlimited apps',
      popular: true,
      category: 'Development',
      marketPrice: '$499/month',
      savings: '60% savings',
      link: 'https://ziontechgroup.com/ai-mobile-app-builder'
    }
  ];

  const categories = ['All', 'Analytics', 'Content', 'Sales', 'CRM', 'Support', 'Marketing', 'Productivity', 'Finance', 'Development', 'Security', 'HR', 'Education', 'Logistics', 'Healthcare'];

  const stats = [
    {
      icon: Users,
      value: '25,000+',
      label: 'Active Users',
      description: 'Growing community worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by customers'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here to help'
    }
  ];

  const benefits = [
    'No setup fees or long-term contracts',
    'Deploy in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    '14-day free trial for all products',
    'Cancel anytime, no questions asked'
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
        <title>Micro SaaS Solutions - Zion Tech Group | 20+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of 20+ micro SaaS solutions powered by AI. From analytics to CRM, find the perfect tool for your business needs. Starting at $39/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, CRM, marketing automation, productivity tools, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              20+ AI-powered business tools designed to solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                Get Custom Quote
              </a>
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
                      placeholder="Search micro SaaS tools..."
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
              <p className="text-cyan-400 mt-4">
                Showing {filteredProducts.length} of {microSaasProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    {product.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="line-through">{product.marketPrice}</span>
                        <span className="text-green-400 ml-2 font-semibold">{product.savings}</span>
                      </div>
                    )}
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
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
                    <a
                      href={product.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Start Free Trial
                    </a>
                    <a
                      href={`tel:+13024640950`}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Get Custom Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
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
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a 14-day free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;