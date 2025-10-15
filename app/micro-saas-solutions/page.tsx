'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  CogIcon,
  EyeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HomeIcon,
  BuildingOfficeIcon,
  HeartIcon,
  ScaleIcon,
  TruckIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'zion-ai-content-generator-pro',
      title: 'Zion AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform that generates high-quality articles, blogs, social media posts, and marketing copy in seconds.',
      shortDescription: 'AI-powered content creation for all your marketing needs',
      icon: DocumentTextIcon,
      gradient: 'from-blue-500 to-purple-500',
      glow: 'shadow-blue-500/25',
      features: [
        'Unlimited content generation',
        'SEO optimization',
        'Multi-language support (50+ languages)',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Team collaboration',
        'Analytics dashboard',
        'API access',
        'White-label options'
      ],
      pricing: {
        basic: 29,
        pro: 79,
        enterprise: 199
      },
      marketPrice: '$29 - $199/month',
      benefits: [
        'Save 80% time on content creation',
        'Increase content output by 500%',
        'Improve SEO rankings',
        'Maintain consistent brand voice',
        'Scale content marketing efforts',
        'Reduce content creation costs'
      ],
      useCases: [
        'Blog writing',
        'Social media content',
        'Email marketing',
        'Product descriptions',
        'Ad copy creation',
        'Press releases'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-content-generator-pro'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-content-generator',
      freeTrial: true,
      rating: 4.9,
      reviews: 1247
    },
    {
      id: 'zion-ai-analytics-dashboard',
      title: 'Zion AI Analytics Dashboard Pro',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and real-time reporting for data-driven decisions.',
      shortDescription: 'AI-powered analytics and business intelligence platform',
      icon: ChartBarIcon,
      gradient: 'from-green-500 to-teal-500',
      glow: 'shadow-green-500/25',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom report builder',
        'Data visualization',
        'Automated insights',
        'Multi-source integration',
        'Mobile app access',
        'Team collaboration',
        'API access',
        'White-label options'
      ],
      pricing: {
        basic: 49,
        pro: 149,
        enterprise: 399
      },
      marketPrice: '$49 - $399/month',
      benefits: [
        'Make data-driven decisions',
        'Identify trends and opportunities',
        'Automate reporting processes',
        'Improve business performance',
        'Reduce manual analysis time',
        'Gain competitive advantage'
      ],
      useCases: [
        'Sales performance tracking',
        'Marketing campaign analysis',
        'Financial reporting',
        'Customer behavior insights',
        'Operational efficiency',
        'Predictive forecasting'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-analytics-dashboard'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-analytics',
      freeTrial: true,
      rating: 4.8,
      reviews: 892
    },
    {
      id: 'zion-ai-task-manager-pro',
      title: 'Zion AI Task Manager Pro',
      description: 'Intelligent task management system with AI-powered prioritization, automated scheduling, and team collaboration features.',
      shortDescription: 'AI-powered task management and team collaboration',
      icon: CheckCircleIcon,
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/25',
      features: [
        'AI task prioritization',
        'Smart scheduling',
        'Team collaboration',
        'Time tracking',
        'Progress monitoring',
        'Deadline management',
        'Resource allocation',
        'Mobile app access',
        'Integration capabilities',
        'Custom workflows'
      ],
      pricing: {
        basic: 19,
        pro: 49,
        enterprise: 129
      },
      marketPrice: '$19 - $129/month',
      benefits: [
        'Increase productivity by 40%',
        'Reduce missed deadlines',
        'Improve team coordination',
        'Optimize resource allocation',
        'Streamline workflows',
        'Enhance accountability'
      ],
      useCases: [
        'Project management',
        'Team coordination',
        'Deadline tracking',
        'Resource planning',
        'Performance monitoring',
        'Workflow optimization'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-task-manager-pro'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-task-manager',
      freeTrial: true,
      rating: 4.7,
      reviews: 634
    },
    {
      id: 'zion-ai-customer-support-pro',
      title: 'Zion AI Customer Support Pro',
      description: 'Advanced customer support automation platform with AI chatbots, ticket management, and intelligent routing for exceptional customer service.',
      shortDescription: 'AI-powered customer support and ticket management',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25',
      features: [
        'AI chatbot integration',
        'Ticket management',
        'Intelligent routing',
        'Knowledge base',
        'Multi-channel support',
        'Sentiment analysis',
        'Performance analytics',
        'Team collaboration',
        'API integrations',
        'Custom workflows'
      ],
      pricing: {
        basic: 39,
        pro: 99,
        enterprise: 249
      },
      marketPrice: '$39 - $249/month',
      benefits: [
        'Reduce support costs by 60%',
        'Improve response times',
        'Increase customer satisfaction',
        'Scale support operations',
        'Gain valuable insights',
        'Automate routine tasks'
      ],
      useCases: [
        'Customer service automation',
        'Ticket management',
        'FAQ automation',
        'Live chat support',
        'Knowledge management',
        'Performance tracking'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-customer-support-pro'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-customer-support',
      freeTrial: true,
      rating: 4.9,
      reviews: 1156
    },
    {
      id: 'zion-ai-inventory-manager',
      title: 'Zion AI Inventory Manager Pro',
      description: 'Intelligent inventory management system with AI-powered demand forecasting, automated reordering, and real-time tracking.',
      shortDescription: 'AI-powered inventory management and demand forecasting',
      icon: CogIcon,
      gradient: 'from-indigo-500 to-blue-500',
      glow: 'shadow-indigo-500/25',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Real-time tracking',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Reporting & analytics',
        'Mobile access',
        'API integrations'
      ],
      pricing: {
        basic: 59,
        pro: 149,
        enterprise: 349
      },
      marketPrice: '$59 - $349/month',
      benefits: [
        'Reduce stockouts by 70%',
        'Optimize inventory levels',
        'Lower carrying costs',
        'Improve cash flow',
        'Automate reordering',
        'Gain demand insights'
      ],
      useCases: [
        'Retail inventory management',
        'Manufacturing control',
        'Warehouse optimization',
        'Supply chain management',
        'Cost reduction',
        'Demand planning'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-inventory-manager'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-inventory',
      freeTrial: true,
      rating: 4.6,
      reviews: 423
    },
    {
      id: 'zion-ai-social-media-manager',
      title: 'Zion AI Social Media Manager Pro',
      description: 'Comprehensive social media management platform with AI-powered content creation, scheduling, and analytics for all major platforms.',
      shortDescription: 'AI-powered social media management and content creation',
      icon: GlobeAltIcon,
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Influencer management',
        'Campaign automation',
        'Analytics dashboard',
        'Team collaboration'
      ],
      pricing: {
        basic: 39,
        pro: 89,
        enterprise: 199
      },
      marketPrice: '$39 - $199/month',
      benefits: [
        'Increase engagement by 150%',
        'Save 5+ hours per week',
        'Improve content quality',
        'Optimize posting times',
        'Track performance metrics',
        'Scale social presence'
      ],
      useCases: [
        'Content scheduling',
        'Engagement management',
        'Campaign tracking',
        'Brand monitoring',
        'Influencer outreach',
        'Performance analysis'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-social-media-manager'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-social-media',
      freeTrial: true,
      rating: 4.8,
      reviews: 789
    },
    {
      id: 'zion-ai-expense-tracker',
      title: 'Zion AI Expense Tracker Pro',
      description: 'Smart expense management system with AI-powered categorization, receipt scanning, and automated reporting for businesses and individuals.',
      shortDescription: 'AI-powered expense tracking and financial management',
      icon: CurrencyDollarIcon,
      gradient: 'from-emerald-500 to-green-500',
      glow: 'shadow-emerald-500/25',
      features: [
        'Receipt scanning',
        'AI categorization',
        'Automated reporting',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Team expense management',
        'Mobile app access',
        'Integration capabilities',
        'Custom categories'
      ],
      pricing: {
        basic: 15,
        pro: 35,
        enterprise: 79
      },
      marketPrice: '$15 - $79/month',
      benefits: [
        'Save 3+ hours per week',
        'Improve accuracy',
        'Simplify tax preparation',
        'Track spending patterns',
        'Automate categorization',
        'Reduce manual work'
      ],
      useCases: [
        'Business expense tracking',
        'Personal finance management',
        'Tax preparation',
        'Budget monitoring',
        'Receipt management',
        'Financial reporting'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-expense-tracker'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-expense-tracker',
      freeTrial: true,
      rating: 4.7,
      reviews: 567
    },
    {
      id: 'zion-ai-code-assistant',
      title: 'Zion AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with intelligent code completion, debugging, and documentation generation for developers.',
      shortDescription: 'AI-powered coding assistant and development tool',
      icon: CpuChipIcon,
      gradient: 'from-violet-500 to-purple-500',
      glow: 'shadow-violet-500/25',
      features: [
        'Intelligent code completion',
        'Bug detection & fixing',
        'Code documentation',
        'Multi-language support',
        'Refactoring suggestions',
        'Performance optimization',
        'Security analysis',
        'Team collaboration',
        'IDE integration',
        'Custom training'
      ],
      pricing: {
        basic: 29,
        pro: 69,
        enterprise: 149
      },
      marketPrice: '$29 - $149/month',
      benefits: [
        'Increase coding speed by 40%',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Accelerate learning',
        'Automate documentation',
        'Enhance productivity'
      ],
      useCases: [
        'Code development',
        'Bug fixing',
        'Code review',
        'Documentation generation',
        'Performance optimization',
        'Security auditing'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-code-assistant'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant',
      freeTrial: true,
      rating: 4.9,
      reviews: 2341
    },
    {
      id: 'zion-ai-translator-pro',
      title: 'Zion AI Translator Pro',
      description: 'Professional AI translation service with support for 100+ languages, context-aware translation, and real-time communication.',
      shortDescription: 'AI-powered translation service for 100+ languages',
      icon: GlobeAltIcon,
      gradient: 'from-rose-500 to-pink-500',
      glow: 'shadow-rose-500/25',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Real-time translation',
        'Document translation',
        'Voice translation',
        'Website translation',
        'API integration',
        'Custom terminology',
        'Quality assurance',
        'Team collaboration'
      ],
      pricing: {
        basic: 25,
        pro: 59,
        enterprise: 129
      },
      marketPrice: '$25 - $129/month',
      benefits: [
        'Break language barriers',
        'Improve global reach',
        'Reduce translation costs',
        'Maintain consistency',
        'Accelerate localization',
        'Enhance communication'
      ],
      useCases: [
        'Document translation',
        'Website localization',
        'Customer support',
        'Content creation',
        'International expansion',
        'Communication support'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-translator-pro'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-translator',
      freeTrial: true,
      rating: 4.8,
      reviews: 1876
    },
    {
      id: 'zion-ai-video-generator',
      title: 'Zion AI Video Generator Pro',
      description: 'Revolutionary AI video creation platform that generates professional videos from text, images, and audio with advanced editing capabilities.',
      shortDescription: 'AI-powered video creation and editing platform',
      icon: EyeIcon,
      gradient: 'from-amber-500 to-orange-500',
      glow: 'shadow-amber-500/25',
      features: [
        'Text-to-video generation',
        'AI voice synthesis',
        'Auto-editing',
        'Multiple templates',
        'HD/4K output',
        'Music & sound effects',
        'Subtitle generation',
        'Brand customization',
        'Team collaboration',
        'API access'
      ],
      pricing: {
        basic: 49,
        pro: 119,
        enterprise: 299
      },
      marketPrice: '$49 - $299/month',
      benefits: [
        'Create videos 10x faster',
        'Reduce production costs',
        'Scale video content',
        'Maintain brand consistency',
        'Automate video creation',
        'Improve engagement'
      ],
      useCases: [
        'Marketing videos',
        'Training content',
        'Social media posts',
        'Product demos',
        'Educational content',
        'Brand storytelling'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-video-generator'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-video-generator',
      freeTrial: true,
      rating: 4.7,
      reviews: 923
    },
    {
      id: 'zion-ai-legal-assistant',
      title: 'Zion AI Legal Assistant Pro',
      description: 'Intelligent legal research and document analysis platform with contract review, compliance checking, and legal document generation.',
      shortDescription: 'AI-powered legal research and document analysis',
      icon: ScaleIcon,
      gradient: 'from-slate-500 to-gray-500',
      glow: 'shadow-slate-500/25',
      features: [
        'Contract analysis',
        'Legal research',
        'Compliance checking',
        'Document generation',
        'Case law search',
        'Risk assessment',
        'Due diligence',
        'Team collaboration',
        'Secure storage',
        'API integration'
      ],
      pricing: {
        basic: 199,
        pro: 499,
        enterprise: 1299
      },
      marketPrice: '$199 - $1,299/month',
      benefits: [
        'Reduce legal research time',
        'Improve accuracy',
        'Lower legal costs',
        'Enhance compliance',
        'Accelerate due diligence',
        'Minimize risks'
      ],
      useCases: [
        'Contract review',
        'Legal research',
        'Compliance monitoring',
        'Document analysis',
        'Risk assessment',
        'Due diligence'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-legal-assistant'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-legal-assistant',
      freeTrial: true,
      rating: 4.9,
      reviews: 456
    },
    {
      id: 'zion-ai-medical-assistant',
      title: 'Zion AI Medical Assistant Pro',
      description: 'Advanced medical AI platform for symptom analysis, diagnosis support, treatment recommendations, and patient management.',
      shortDescription: 'AI-powered medical diagnosis and patient management',
      icon: HeartIcon,
      gradient: 'from-red-500 to-pink-500',
      glow: 'shadow-red-500/25',
      features: [
        'Symptom analysis',
        'Diagnosis support',
        'Treatment recommendations',
        'Patient management',
        'Medical imaging analysis',
        'Drug interaction checking',
        'Clinical decision support',
        'HIPAA compliance',
        'Integration capabilities',
        'Custom training'
      ],
      pricing: {
        basic: 299,
        pro: 799,
        enterprise: 1999
      },
      marketPrice: '$299 - $1,999/month',
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce medical errors',
        'Enhance patient care',
        'Accelerate diagnosis',
        'Support clinical decisions',
        'Optimize workflows'
      ],
      useCases: [
        'Primary care support',
        'Specialty consultations',
        'Emergency triage',
        'Patient monitoring',
        'Medical imaging',
        'Clinical research'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-medical-assistant'
      },
      demoUrl: 'https://ziontechgroup.com/demo/ai-medical-assistant',
      freeTrial: true,
      rating: 4.8,
      reviews: 234
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions' },
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '4.8/5', label: 'Average Rating' },
    { number: '100+', label: 'Countries Served' }
  ];

  return (
    <>
      <SEOHead 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our comprehensive collection of AI-powered micro SaaS solutions designed to solve specific business challenges. From content creation to analytics, task management to customer support."
        keywords="micro saas, ai solutions, business automation, software as a service, productivity tools, business intelligence, task management, customer support"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Micro SaaS Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Discover our comprehensive collection of AI-powered micro SaaS solutions designed to solve specific business challenges and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <Link to="/contact"
                  className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
                {stats.map((stat, index) => (
                  <div key={index} 
                    className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Solutions Grid */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose from our comprehensive collection of AI-powered micro SaaS solutions designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={service.id}
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-400">({service.reviews})</span>
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors">
                      {service.shortDescription}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                        {service.marketPrice}
                      </div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-300 mb-3 text-sm">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-gray-500">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-300 mb-2 text-sm">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            <ArrowRightIcon className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Link to={`/contact?service=${service.id}`}
                        className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        {service.freeTrial ? 'Start Free Trial' : 'Get Started'}
                      </Link>
                      <div className="flex space-x-2">
                        <Link to={service.demoUrl}
                          className="flex-1 border border-purple-400 text-purple-300 text-center py-2 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm"
                        >
                          View Demo
                        </Link>
                        <Link to={service.contactInfo.website}
                          className="flex-1 border border-gray-600 text-gray-300 text-center py-2 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-all duration-300 text-sm"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Choose from our comprehensive collection of micro SaaS solutions and start your free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                View All Pricing
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a></p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;