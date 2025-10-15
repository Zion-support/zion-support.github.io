import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CogIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  HomeIcon,
  ShoppingCartIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator-pro',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI with GPT-4 integration.',
      icon: SparklesIcon,
      price: '$199/mo',
      originalPrice: '$299/mo',
      features: [
        'Unlimited content generation',
        'SEO optimization & keyword research',
        'Multi-language support (50+ languages)',
        'Brand voice customization',
        'Content templates library',
        'Plagiarism detection',
        'Social media scheduling',
        'Analytics & performance tracking'
      ],
      category: 'Content & Marketing',
      gradient: 'from-cyan-500 to-blue-500',
      href: '/ai-content-generator'
    },
    {
      id: 'business-analytics-pro',
      title: 'Business Analytics Pro',
      description: 'Comprehensive business intelligence and analytics platform with real-time insights, predictive analytics, and custom reporting.',
      icon: ChartBarIcon,
      price: '$349/mo',
      originalPrice: '$499/mo',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports & KPIs',
        'Data visualization tools',
        'Automated insights',
        'Multi-source data integration',
        'Mobile app access',
        'Team collaboration features'
      ],
      category: 'Analytics & Insights',
      gradient: 'from-purple-500 to-pink-500',
      href: '/data-analytics'
    },
    {
      id: 'task-manager-pro',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization, team collaboration features, and time tracking capabilities.',
      icon: CheckCircleIcon,
      price: '$29/mo',
      originalPrice: '$49/mo',
      features: [
        'AI task prioritization',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Project templates',
        'Deadline management',
        'Progress visualization',
        'Mobile & desktop apps',
        'Integration with 100+ tools'
      ],
      category: 'Productivity',
      gradient: 'from-green-500 to-emerald-500',
      href: '/task-manager-pro'
    },
    {
      id: 'crm-optimizer-pro',
      title: 'CRM Optimizer Pro',
      description: 'AI-powered customer relationship management with automated lead scoring, sales forecasting, and customer insights.',
      icon: UserGroupIcon,
      price: '$149/mo',
      originalPrice: '$199/mo',
      features: [
        'AI lead scoring',
        'Sales forecasting',
        'Customer segmentation',
        'Automated follow-ups',
        'Pipeline management',
        'Email integration',
        'Custom fields & workflows',
        'Advanced reporting'
      ],
      category: 'Sales & CRM',
      gradient: 'from-blue-500 to-indigo-500',
      href: '/ai-crm-optimizer'
    },
    {
      id: 'expense-tracker-pro',
      title: 'Expense Tracker Pro',
      description: 'Smart expense management with receipt scanning, automated categorization, and financial reporting for businesses.',
      icon: CurrencyDollarIcon,
      price: '$39/mo',
      originalPrice: '$59/mo',
      features: [
        'Receipt scanning (OCR)',
        'Automated categorization',
        'Expense approval workflows',
        'Financial reporting',
        'Tax preparation tools',
        'Multi-currency support',
        'Mobile receipt capture',
        'Integration with accounting software'
      ],
      category: 'Finance',
      gradient: 'from-yellow-500 to-orange-500',
      href: '/expense-tracker-pro'
    },
    {
      id: 'inventory-manager-pro',
      title: 'Inventory Manager Pro',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and real-time stock tracking.',
      icon: CogIcon,
      price: '$79/mo',
      originalPrice: '$99/mo',
      features: [
        'Real-time stock tracking',
        'Demand forecasting',
        'Automated reordering',
        'Barcode scanning',
        'Multi-location support',
        'Supplier management',
        'Low stock alerts',
        'Inventory analytics'
      ],
      category: 'Operations',
      gradient: 'from-red-500 to-pink-500',
      href: '/inventory-manager'
    },
    {
      id: 'social-media-scheduler-pro',
      title: 'Social Media Scheduler Pro',
      description: 'AI-powered social media management with content scheduling, analytics, and engagement optimization across all platforms.',
      icon: GlobeAltIcon,
      price: '$59/mo',
      originalPrice: '$79/mo',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Optimal timing analysis',
        'Engagement tracking',
        'Hashtag optimization',
        'Content calendar',
        'Team collaboration',
        'Performance analytics'
      ],
      category: 'Marketing',
      gradient: 'from-pink-500 to-rose-500',
      href: '/social-media-scheduler'
    },
    {
      id: 'document-processor-pro',
      title: 'Document Processor Pro',
      description: 'AI-powered document processing with OCR, data extraction, and automated workflow management for business documents.',
      icon: DocumentTextIcon,
      price: '$89/mo',
      originalPrice: '$129/mo',
      features: [
        'OCR text extraction',
        'Automated data extraction',
        'Document classification',
        'Workflow automation',
        'Template management',
        'Batch processing',
        'API integration',
        'Compliance tracking'
      ],
      category: 'Document Management',
      gradient: 'from-indigo-500 to-purple-500',
      href: '/ai-document-processor'
    },
    {
      id: 'customer-support-hub-pro',
      title: 'Customer Support Hub Pro',
      description: 'Comprehensive customer support platform with AI chatbots, ticket management, and knowledge base automation.',
      icon: ChatBubbleLeftRightIcon,
      price: '$99/mo',
      originalPrice: '$149/mo',
      features: [
        'AI chatbot integration',
        'Ticket management system',
        'Knowledge base automation',
        'Multi-channel support',
        'Customer satisfaction tracking',
        'Team collaboration tools',
        'Analytics & reporting',
        'Custom workflows'
      ],
      category: 'Customer Support',
      gradient: 'from-teal-500 to-cyan-500',
      href: '/customer-support-hub'
    },
    {
      id: 'ai-form-builder-pro',
      title: 'AI Form Builder Pro',
      description: 'Intelligent form builder with conditional logic, payment integration, and automated data processing capabilities.',
      icon: DocumentTextIcon,
      price: '$49/mo',
      originalPrice: '$69/mo',
      features: [
        'Drag-and-drop builder',
        'Conditional logic',
        'Payment integration',
        'Data validation',
        'Multi-step forms',
        'Analytics & insights',
        'API integration',
        'Custom styling'
      ],
      category: 'Data Collection',
      gradient: 'from-violet-500 to-purple-500',
      href: '/ai-form-builder'
    },
    {
      id: 'ai-image-recognition-pro',
      title: 'AI Image Recognition Pro',
      description: 'Advanced image recognition and analysis platform with object detection, facial recognition, and content moderation.',
      icon: EyeIcon,
      price: '$199/mo',
      originalPrice: '$299/mo',
      features: [
        'Object detection',
        'Facial recognition',
        'Content moderation',
        'Image classification',
        'Batch processing',
        'API integration',
        'Custom model training',
        'Real-time analysis'
      ],
      category: 'Computer Vision',
      gradient: 'from-emerald-500 to-green-500',
      href: '/ai-image-recognition'
    },
    {
      id: 'ai-voice-assistant-pro',
      title: 'AI Voice Assistant Pro',
      description: 'Custom voice assistant with natural language processing, multi-language support, and integration capabilities.',
      icon: ChatBubbleLeftRightIcon,
      price: '$299/mo',
      originalPrice: '$399/mo',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Voice synthesis',
        'Custom wake words',
        'API integration',
        'Conversation management',
        'Analytics & insights',
        'Custom training'
      ],
      category: 'Voice Technology',
      gradient: 'from-amber-500 to-yellow-500',
      href: '/ai-voice-assistant'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Analytics & Insights',
    'Productivity',
    'Sales & CRM',
    'Finance',
    'Operations',
    'Customer Support',
    'Document Management',
    'Data Collection',
    'Computer Vision',
    'Voice Technology'
  ];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of micro SaaS solutions designed to solve specific business challenges. From AI-powered content generation to advanced analytics and productivity tools."
        keywords="micro saas, business software, task management, crm, analytics, inventory management, hr software, finance management, ai tools, productivity software"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white futuristic-bg">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold holographic mb-6 neon-text">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of micro SaaS solutions designed to solve specific business challenges with AI-powered intelligence and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="cyber-button neon-border-animated"
              >
                Get Free Consultation
              </Link>
              <Link to="/demo"
                className="btn-futuristic neon-glow"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={service.id} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-cyan-400 font-medium px-2 py-1 bg-cyan-400/10 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400 neon-text">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <StarIcon className="w-4 h-4 fill-current" />
                      <span className="text-sm ml-1">4.9/5</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link to={service.href}
                      className="block w-full cyber-button neon-border-animated text-center py-3 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Try Free Trial - 14 Days
                    </Link>
                    <Link to={`/contact?service=${service.id}`}
                      className="block w-full btn-futuristic text-center py-2 text-sm"
                    >
                      Get Custom Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let our expert team help you choose the right micro SaaS solutions for your business needs. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="cyber-button neon-border-animated"
              >
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950"
                className="btn-futuristic neon-glow"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;