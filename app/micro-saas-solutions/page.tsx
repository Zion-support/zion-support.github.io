'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  SparklesIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ShareIcon,
  EyeIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSAAS = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: SparklesIcon,
      price: 199,
      originalPrice: 299,
      period: 'month',
      features: [
        'Unlimited content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Content templates library',
        'Plagiarism detection',
        'Social media scheduling',
        'Analytics dashboard'
      ],
      category: 'Content Creation',
      gradient: 'from-cyan-500 to-blue-500',
      href: '/ai-content-generator',
      popular: true
    },
    {
      id: 'business-analytics-pro',
      name: 'Business Analytics Pro',
      description: 'Comprehensive business intelligence and analytics platform with real-time insights and reporting.',
      icon: ChartBarIcon,
      price: 349,
      originalPrice: 499,
      period: 'month',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Data visualization',
        'KPI tracking',
        'Automated insights',
        'Team collaboration',
        'API integrations'
      ],
      category: 'Analytics',
      gradient: 'from-purple-500 to-pink-500',
      href: '/analytics-dashboard',
      popular: true
    },
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization and team collaboration features.',
      icon: CheckCircleIcon,
      price: 29,
      originalPrice: 49,
      period: 'month',
      features: [
        'AI task prioritization',
        'Team collaboration',
        'Time tracking',
        'Project templates',
        'Deadline alerts',
        'Progress tracking',
        'Mobile app',
        'Integrations'
      ],
      category: 'Productivity',
      gradient: 'from-green-500 to-emerald-500',
      href: '/task-manager-pro'
    },
    {
      id: 'customer-support-hub',
      name: 'Customer Support Hub',
      description: 'All-in-one customer support platform with AI-powered ticket routing and response suggestions.',
      icon: ChatBubbleLeftRightIcon,
      price: 99,
      originalPrice: 149,
      period: 'month',
      features: [
        'AI ticket routing',
        'Response suggestions',
        'Knowledge base',
        'Live chat widget',
        'Customer satisfaction tracking',
        'Multi-channel support',
        'Team performance metrics',
        'Integration APIs'
      ],
      category: 'Customer Service',
      gradient: 'from-orange-500 to-red-500',
      href: '/customer-support-hub'
    },
    {
      id: 'inventory-manager',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with predictive analytics and automated reordering.',
      icon: CircleStackIcon,
      price: 149,
      originalPrice: 199,
      period: 'month',
      features: [
        'Predictive analytics',
        'Automated reordering',
        'Barcode scanning',
        'Multi-location support',
        'Low stock alerts',
        'Supplier management',
        'Cost tracking',
        'Reporting dashboard'
      ],
      category: 'Inventory',
      gradient: 'from-indigo-500 to-purple-500',
      href: '/inventory-manager'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler Pro',
      description: 'Schedule and manage social media content across multiple platforms with AI optimization.',
      icon: ShareIcon,
      price: 79,
      originalPrice: 119,
      period: 'month',
      features: [
        'Multi-platform posting',
        'AI content optimization',
        'Best time scheduling',
        'Hashtag suggestions',
        'Analytics tracking',
        'Content calendar',
        'Team collaboration',
        'Brand monitoring'
      ],
      category: 'Social Media',
      gradient: 'from-pink-500 to-rose-500',
      href: '/social-media-scheduler'
    },
    {
      id: 'expense-tracker-pro',
      name: 'Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning and automated categorization using AI.',
      icon: CurrencyDollarIcon,
      price: 39,
      originalPrice: 59,
      period: 'month',
      features: [
        'Receipt scanning',
        'AI categorization',
        'Expense reports',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting'
      ],
      category: 'Finance',
      gradient: 'from-yellow-500 to-orange-500',
      href: '/expense-tracker-pro'
    },
    {
      id: 'email-marketing-automation',
      name: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI-driven personalization and automation.',
      icon: EnvelopeIcon,
      price: 129,
      originalPrice: 179,
      period: 'month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'Subscriber segmentation',
        'Email templates',
        'Analytics dashboard',
        'Lead scoring',
        'Integration APIs'
      ],
      category: 'Marketing',
      gradient: 'from-blue-500 to-cyan-500',
      href: '/ai-email-marketing-automation'
    },
    {
      id: 'project-management-pro',
      name: 'AI Project Management Pro',
      description: 'Advanced project management with AI-powered resource allocation and risk prediction.',
      icon: CogIcon,
      price: 199,
      originalPrice: 279,
      period: 'month',
      features: [
        'AI resource allocation',
        'Risk prediction',
        'Timeline optimization',
        'Team collaboration',
        'Progress tracking',
        'Budget management',
        'Reporting tools',
        'Integration ecosystem'
      ],
      category: 'Project Management',
      gradient: 'from-teal-500 to-green-500',
      href: '/ai-project-management-pro'
    },
    {
      id: 'hr-management-suite',
      name: 'HR Management Suite',
      description: 'Complete HR management platform with AI-powered candidate screening and employee analytics.',
      icon: UserGroupIcon,
      price: 179,
      originalPrice: 249,
      period: 'month',
      features: [
        'AI candidate screening',
        'Employee analytics',
        'Performance tracking',
        'Payroll management',
        'Time tracking',
        'Benefits administration',
        'Compliance monitoring',
        'Reporting suite'
      ],
      category: 'Human Resources',
      gradient: 'from-violet-500 to-purple-500',
      href: '/hr-management-suite'
    },
    {
      id: 'security-monitor-pro',
      name: 'Security Monitor Pro',
      description: 'AI-powered security monitoring and threat detection for small to medium businesses.',
      icon: ShieldCheckIcon,
      price: 249,
      originalPrice: 349,
      period: 'month',
      features: [
        'AI threat detection',
        'Real-time monitoring',
        'Incident response',
        'Compliance reporting',
        'Vulnerability scanning',
        'Security training',
        '24/7 support',
        'Custom alerts'
      ],
      category: 'Security',
      gradient: 'from-red-500 to-pink-500',
      href: '/security-monitor-pro'
    },
    {
      id: 'cloud-storage-pro',
      name: 'Cloud Storage Pro',
      description: 'Secure cloud storage solution with AI-powered file organization and collaboration tools.',
      icon: CloudIcon,
      price: 49,
      originalPrice: 79,
      period: 'month',
      features: [
        'AI file organization',
        'Real-time collaboration',
        'Version control',
        'Advanced security',
        'Mobile access',
        'Integration APIs',
        'Backup automation',
        'Sharing controls'
      ],
      category: 'Storage',
      gradient: 'from-sky-500 to-blue-500',
      href: '/cloud-storage-pro'
    }
  ];

  const categories = [
    'All',
    'Content Creation',
    'Analytics',
    'Productivity',
    'Customer Service',
    'Inventory',
    'Social Media',
    'Finance',
    'Marketing',
    'Project Management',
    'Human Resources',
    'Security',
    'Storage'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredSAAS = selectedCategory === 'All' 
    ? microSAAS 
    : microSAAS.filter(saas => saas.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our innovative micro SAAS applications designed to solve specific business challenges. AI-powered tools for content creation, analytics, productivity, and more."
        keywords="micro saas, business software, AI tools, productivity apps, business solutions, software as a service"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover our innovative micro SAAS applications designed to solve specific business challenges with real functionality and AI-powered features.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>12+ Applications</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Free Trials</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SAAS Solutions Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSAAS.map((saas, index) => (
                <div 
                  key={saas.id}
                  className="group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {saas.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <StarIcon className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${saas.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${saas.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${saas.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <saas.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{saas.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {saas.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm">
                      {saas.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-white">${saas.price}</span>
                        <span className="text-gray-400 text-sm">/{saas.period}</span>
                      </div>
                      <span className="text-sm text-gray-400 line-through">${saas.originalPrice}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {saas.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {saas.features.length > 4 && (
                        <div className="text-sm text-gray-400">
                          +{saas.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        to={saas.href}
                        className={`flex-1 bg-gradient-to-r ${saas.gradient} hover:opacity-90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                      >
                        Try Free Trial
                      </Link>
                      <button className="px-4 py-3 border border-slate-600 text-gray-300 hover:bg-slate-700 rounded-lg transition-all duration-300">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience the power of our AI-driven micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;
