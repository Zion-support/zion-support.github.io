'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface MicroSaaSService {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'Productivity' | 'Marketing' | 'Analytics' | 'Communication' | 'Development' | 'Security' | 'Finance' | 'Design';
  icon: string;
  features: string[];
  pricing: {
    free: number;
    starter: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  href: string;
  glowColor: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow' | 'orange' | 'red';
  marketPrice: string;
  launchDate: string;
  rating: number;
  users: string;
}

const microSaaSServices: MicroSaaSService[] = [
  // Productivity Tools
  {
    id: 'smart-task-manager',
    title: 'Smart Task Manager Pro',
    description: 'AI-powered task management platform that intelligently prioritizes, schedules, and tracks tasks with predictive analytics and automated workflow optimization.',
    shortDescription: 'AI-powered task management with predictive analytics',
    category: 'Productivity',
    icon: '📋',
    features: [
      'AI Task Prioritization',
      'Smart Scheduling & Time Blocking',
      'Team Collaboration Tools',
      'Progress Analytics Dashboard',
      'Integration with 50+ Apps',
      'Mobile & Desktop Sync',
      'Automated Reminders',
      'Custom Workflow Builder'
    ],
    pricing: {
      free: 0,
      starter: 9,
      pro: 29,
      enterprise: 99
    },
    benefits: [
      'Increase productivity by 40%',
      'Reduce task completion time by 35%',
      'Improve team collaboration',
      'Automated workflow optimization'
    ],
    useCases: [
      'Project Management',
      'Team Coordination',
      'Personal Productivity',
      'Remote Work Management'
    ],
    technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/smart-task-manager'
    },
    href: '/smart-task-manager',
    glowColor: 'blue',
    marketPrice: '$15-45/month',
    launchDate: '2024-01-15',
    rating: 4.8,
    users: '10,000+'
  },
  {
    id: 'ai-content-scheduler',
    title: 'AI Content Scheduler',
    description: 'Intelligent social media and content scheduling platform with AI-powered optimal posting times, content suggestions, and performance analytics.',
    shortDescription: 'AI-powered social media scheduling with optimal timing',
    category: 'Marketing',
    icon: '📅',
    features: [
      'AI Optimal Posting Times',
      'Multi-Platform Scheduling',
      'Content Calendar Management',
      'Performance Analytics',
      'Hashtag Optimization',
      'Content Suggestions',
      'Team Collaboration',
      'Brand Voice Analysis'
    ],
    pricing: {
      free: 0,
      starter: 12,
      pro: 39,
      enterprise: 149
    },
    benefits: [
      'Increase engagement by 60%',
      'Save 10+ hours per week',
      'Optimize posting times automatically',
      'Improve content performance'
    ],
    useCases: [
      'Social Media Management',
      'Content Marketing',
      'Brand Management',
      'Digital Marketing Agencies'
    ],
    technologies: ['Vue.js', 'Python', 'AI/ML', 'MongoDB', 'Redis'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-scheduler'
    },
    href: '/ai-content-scheduler',
    glowColor: 'pink',
    marketPrice: '$20-50/month',
    launchDate: '2024-02-01',
    rating: 4.7,
    users: '8,500+'
  },
  {
    id: 'advanced-analytics-dashboard',
    title: 'Advanced Analytics Dashboard',
    description: 'Comprehensive business analytics platform with real-time data visualization, custom reports, and AI-powered insights for data-driven decision making.',
    shortDescription: 'Real-time business analytics with AI insights',
    category: 'Analytics',
    icon: '📊',
    features: [
      'Real-time Data Visualization',
      'Custom Report Builder',
      'AI-Powered Insights',
      'Multi-Data Source Integration',
      'Automated Alerts',
      'Team Collaboration',
      'Export to Multiple Formats',
      'White-label Options'
    ],
    pricing: {
      free: 0,
      starter: 19,
      pro: 59,
      enterprise: 199
    },
    benefits: [
      'Make data-driven decisions',
      'Identify trends and opportunities',
      'Automate reporting processes',
      'Improve business performance'
    ],
    useCases: [
      'Business Intelligence',
      'Marketing Analytics',
      'Sales Performance',
      'Financial Reporting'
    ],
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Apache Kafka'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/analytics-dashboard'
    },
    href: '/analytics-dashboard',
    glowColor: 'green',
    marketPrice: '$25-75/month',
    launchDate: '2024-01-20',
    rating: 4.9,
    users: '15,000+'
  },
  {
    id: 'ai-customer-support-chat',
    title: 'AI Customer Support Chat',
    description: 'Intelligent customer support chatbot with natural language processing, multi-language support, and seamless human handoff capabilities.',
    shortDescription: 'AI-powered customer support with human handoff',
    category: 'Communication',
    icon: '💬',
    features: [
      'Natural Language Processing',
      'Multi-language Support (50+ languages)',
      'Human Handoff Integration',
      'Knowledge Base Management',
      'Sentiment Analysis',
      'Live Chat Integration',
      'Custom Bot Training',
      'Analytics & Reporting'
    ],
    pricing: {
      free: 0,
      starter: 15,
      pro: 49,
      enterprise: 179
    },
    benefits: [
      'Reduce support costs by 50%',
      '24/7 customer availability',
      'Improve response times',
      'Scale support operations'
    ],
    useCases: [
      'Customer Support',
      'Lead Qualification',
      'FAQ Automation',
      'E-commerce Support'
    ],
    technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'WebSocket'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-support'
    },
    href: '/ai-customer-support',
    glowColor: 'purple',
    marketPrice: '$30-80/month',
    launchDate: '2024-01-10',
    rating: 4.8,
    users: '12,000+'
  },
  {
    id: 'code-review-assistant',
    title: 'AI Code Review Assistant',
    description: 'Automated code review platform with AI-powered suggestions, security scanning, performance optimization, and team collaboration features.',
    shortDescription: 'AI-powered code review with security scanning',
    category: 'Development',
    icon: '🔍',
    features: [
      'AI Code Analysis',
      'Security Vulnerability Scanning',
      'Performance Optimization Suggestions',
      'Code Quality Metrics',
      'Team Collaboration Tools',
      'Integration with Git',
      'Custom Rule Configuration',
      'Automated Testing'
    ],
    pricing: {
      free: 0,
      starter: 25,
      pro: 79,
      enterprise: 299
    },
    benefits: [
      'Improve code quality by 45%',
      'Reduce security vulnerabilities',
      'Accelerate development cycles',
      'Standardize coding practices'
    ],
    useCases: [
      'Software Development',
      'Code Quality Assurance',
      'Security Auditing',
      'Team Code Reviews'
    ],
    technologies: ['TypeScript', 'Python', 'AI/ML', 'Docker', 'GitHub API'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/code-review-assistant'
    },
    href: '/code-review-assistant',
    glowColor: 'cyan',
    marketPrice: '$40-120/month',
    launchDate: '2024-02-15',
    rating: 4.9,
    users: '7,500+'
  },
  {
    id: 'advanced-security-monitor',
    title: 'Advanced Security Monitor',
    description: 'Comprehensive cybersecurity monitoring platform with real-time threat detection, automated response, and compliance reporting.',
    shortDescription: 'Real-time cybersecurity monitoring with automated response',
    category: 'Security',
    icon: '🛡️',
    features: [
      'Real-time Threat Detection',
      'Automated Incident Response',
      'Compliance Reporting',
      'Vulnerability Scanning',
      'Network Monitoring',
      'Log Analysis',
      'Threat Intelligence',
      'Custom Alert Rules'
    ],
    pricing: {
      free: 0,
      starter: 49,
      pro: 149,
      enterprise: 499
    },
    benefits: [
      'Detect threats in real-time',
      'Automate security responses',
      'Ensure compliance',
      'Reduce security risks'
    ],
    useCases: [
      'Enterprise Security',
      'Compliance Management',
      'Threat Detection',
      'Security Operations Center'
    ],
    technologies: ['Python', 'Elasticsearch', 'Kafka', 'Docker', 'Kubernetes'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/security-monitor'
    },
    href: '/security-monitor',
    glowColor: 'red',
    marketPrice: '$60-200/month',
    launchDate: '2024-01-05',
    rating: 4.9,
    users: '5,000+'
  },
  {
    id: 'ai-invoice-generator',
    title: 'AI Invoice Generator',
    description: 'Intelligent invoice generation platform with automated data extraction, payment tracking, and financial analytics.',
    shortDescription: 'AI-powered invoice generation with payment tracking',
    category: 'Finance',
    icon: '🧾',
    features: [
      'Automated Invoice Generation',
      'Payment Tracking',
      'Financial Analytics',
      'Multi-currency Support',
      'Tax Calculation',
      'Client Portal',
      'Automated Reminders',
      'Integration with Accounting Software'
    ],
    pricing: {
      free: 0,
      starter: 8,
      pro: 24,
      enterprise: 89
    },
    benefits: [
      'Save 15+ hours per month',
      'Reduce billing errors',
      'Improve cash flow',
      'Automate financial processes'
    ],
    useCases: [
      'Freelancer Billing',
      'Small Business Invoicing',
      'Service-based Companies',
      'Accounting Firms'
    ],
    technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'Stripe API'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-invoice-generator'
    },
    href: '/ai-invoice-generator',
    glowColor: 'yellow',
    marketPrice: '$12-35/month',
    launchDate: '2024-02-10',
    rating: 4.6,
    users: '9,000+'
  },
  {
    id: 'ai-logo-generator',
    title: 'AI Logo Generator Pro',
    description: 'Advanced logo design platform with AI-powered generation, brand guidelines, and high-resolution exports for professional branding.',
    shortDescription: 'AI-powered logo design with brand guidelines',
    category: 'Design',
    icon: '🎨',
    features: [
      'AI Logo Generation',
      'Brand Guidelines Creation',
      'High-Resolution Exports',
      'Multiple Format Support',
      'Color Palette Suggestions',
      'Typography Matching',
      'Brand Kit Management',
      'Collaboration Tools'
    ],
    pricing: {
      free: 0,
      starter: 19,
      pro: 59,
      enterprise: 199
    },
    benefits: [
      'Create professional logos instantly',
      'Maintain brand consistency',
      'Save design costs',
      'Access to design templates'
    ],
    useCases: [
      'Startup Branding',
      'Small Business Logos',
      'Design Agencies',
      'Personal Branding'
    ],
    technologies: ['React', 'Canvas API', 'AI/ML', 'AWS S3', 'Cloudinary'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-logo-generator'
    },
    href: '/ai-logo-generator',
    glowColor: 'orange',
    marketPrice: '$25-65/month',
    launchDate: '2024-02-20',
    rating: 4.7,
    users: '6,500+'
  }
];

const categories = ['All', 'Productivity', 'Marketing', 'Analytics', 'Communication', 'Development', 'Security', 'Finance', 'Design'];

export default function MicroSaaSSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredServices = microSaaSServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getGlowClass = (color: string) => {
    const glowClasses = {
      purple: 'hover:shadow-purple-500/25',
      cyan: 'hover:shadow-cyan-500/25',
      pink: 'hover:shadow-pink-500/25',
      green: 'hover:shadow-green-500/25',
      blue: 'hover:shadow-blue-500/25',
      yellow: 'hover:shadow-yellow-500/25',
      orange: 'hover:shadow-orange-500/25',
      red: 'hover:shadow-red-500/25'
    };
    return glowClasses[color as keyof typeof glowClasses] || 'hover:shadow-purple-500/25';
  };

  const getGradientClass = (color: string) => {
    const gradientClasses = {
      purple: 'from-purple-500 to-pink-500',
      cyan: 'from-cyan-500 to-blue-500',
      pink: 'from-pink-500 to-rose-500',
      green: 'from-green-500 to-emerald-500',
      blue: 'from-blue-500 to-indigo-500',
      yellow: 'from-yellow-500 to-orange-500',
      orange: 'from-orange-500 to-red-500',
      red: 'from-red-500 to-pink-500'
    };
    return gradientClasses[color as keyof typeof gradientClasses] || 'from-purple-500 to-pink-500';
  };

  return (
    <>
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our comprehensive collection of real, useful micro SAAS solutions including productivity tools, marketing platforms, analytics dashboards, and more."
        keywords="micro SaaS, productivity tools, marketing automation, analytics dashboard, AI solutions, business software"
        canonicalUrl="/micro-saas-solutions"
        ogImage="/api/placeholder/1200/630"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real, Useful, and Intelligent Micro SAAS Services
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Discover our comprehensive collection of micro SAAS solutions designed to solve real business problems. 
              From productivity tools to marketing automation, each service is built with cutting-edge technology 
              and proven to deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View Pricing
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Filter by Category</h2>
              <p className="text-gray-300 mb-6">Choose a category to explore specific micro SAAS solutions</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real, useful micro SAAS services that solve actual business problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 ${getGlowClass(service.glowColor)}`}
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getGradientClass(service.glowColor)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                    <div className="text-xs text-gray-400">{service.users} users</div>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                        +{service.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-sm text-gray-400">Market Price: {service.marketPrice}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">${service.pricing.starter}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6 p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneIcon className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <EnvelopeIcon className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlobeAltIcon className="w-4 h-4 text-purple-400" />
                    <a 
                      href={service.contactInfo.website} 
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.contactInfo.website}
                    </a>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={service.href}
                  className={`w-full bg-gradient-to-r ${getGradientClass(service.glowColor)} text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Contact us today to learn more about our micro SAAS solutions and how they can benefit your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                <PhoneIcon className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                <EnvelopeIcon className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                <MapPinIcon className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Contact Us Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View Pricing Plans
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}