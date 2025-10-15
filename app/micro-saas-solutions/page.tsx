'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BoltIcon,
  EyeIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  HomeIcon,
  BriefcaseIcon,
  HeartIcon,
  ScaleIcon,
  TruckIcon,
  BeakerIcon,
  CameraIcon,
  MicrophoneIcon,
  CubeIcon,
  LightBulbIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CommandLineIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  BanknotesIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  DocumentDuplicateIcon,
  CalendarIcon,
  ClockIcon as ClockIconOutline,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  ShareIcon,
  DownloadIcon,
  UploadIcon,
  PrinterIcon,
  ArchiveBoxIcon,
  TagIcon,
  FlagIcon,
  BookmarkIcon,
  HeartIcon as HeartIconOutline,
  ThumbUpIcon,
  ThumbDownIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  BellSlashIcon,
  LockClosedIcon,
  LockOpenIcon,
  KeyIcon,
  FingerPrintIcon,
  EyeIcon as EyeIconOutline,
  EyeSlashIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon as CheckCircleIconOutline,
  XCircleIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  ExclamationTriangleIcon as ExclamationTriangleIconOutline,
  LightBulbIcon as LightBulbIconOutline,
  FireIcon,
  SunIcon,
  MoonIcon,
  CloudIcon as CloudIconOutline,
  CloudRainIcon,
  CloudSnowIcon,
  CloudSunIcon,
  CloudMoonIcon,
  CloudLightningIcon,
  CloudArrowUpIcon,
  CloudArrowDownIcon,
  CloudCheckIcon,
  CloudXMarkIcon,
  CloudSlashIcon,
  CloudBoltIcon,
  CloudSunIcon as CloudSunIconOutline,
  CloudMoonIcon as CloudMoonIconOutline,
  CloudRainIcon as CloudRainIconOutline,
  CloudSnowIcon as CloudSnowIconOutline,
  CloudLightningIcon as CloudLightningIconOutline,
  CloudArrowUpIcon as CloudArrowUpIconOutline,
  CloudArrowDownIcon as CloudArrowDownIconOutline,
  CloudCheckIcon as CloudCheckIconOutline,
  CloudXMarkIcon as CloudXMarkIconOutline,
  CloudSlashIcon as CloudSlashIconOutline,
  CloudBoltIcon as CloudBoltIconOutline,
  CloudSunIcon as CloudSunIconOutline2,
  CloudMoonIcon as CloudMoonIconOutline2,
  CloudRainIcon as CloudRainIconOutline2,
  CloudSnowIcon as CloudSnowIconOutline2,
  CloudLightningIcon as CloudLightningIconOutline2,
  CloudArrowUpIcon as CloudArrowUpIconOutline2,
  CloudArrowDownIcon as CloudArrowDownIconOutline2,
  CloudCheckIcon as CloudCheckIconOutline2,
  CloudXMarkIcon as CloudXMarkIconOutline2,
  CloudSlashIcon as CloudSlashIconOutline2,
  CloudBoltIcon as CloudBoltIconOutline2
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaaSProducts = [
    {
      id: 'smart-analytics-dashboard',
      name: 'Smart Analytics Dashboard',
      description: 'AI-powered business intelligence platform with real-time data visualization, predictive analytics, and automated insights generation.',
      icon: ChartBarIcon,
      category: 'Analytics & BI',
      price: '$199/mo',
      originalPrice: '$399/mo',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboard builder',
        '50+ chart types',
        'Automated reporting',
        'Multi-source data integration',
        'Mobile responsive design',
        'API access included'
      ],
      benefits: [
        'Increase decision speed by 60%',
        'Reduce reporting time by 80%',
        'Identify trends 3x faster',
        'Improve data accuracy by 95%'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      href: '/zion-smart-analytics-dashboard',
      popular: true
    },
    {
      id: 'smart-crm-automation',
      name: 'Smart CRM Automation',
      description: 'Intelligent customer relationship management with AI-powered lead scoring, automated workflows, and predictive analytics.',
      icon: UserGroupIcon,
      category: 'CRM & Sales',
      price: '$299/mo',
      originalPrice: '$599/mo',
      features: [
        'AI lead scoring (95% accuracy)',
        'Automated email sequences',
        'Predictive analytics',
        'Multi-channel communication',
        'Custom workflow builder',
        'Advanced reporting',
        'Integration with 100+ tools',
        '24/7 customer support'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Reduce sales cycle by 25%',
        'Save 15 hours per week',
        'Improve customer satisfaction by 35%'
      ],
      gradient: 'from-purple-500 to-pink-500',
      href: '/zion-smart-crm-automation',
      popular: true
    },
    {
      id: 'smart-inventory-manager',
      name: 'Smart Inventory Manager',
      description: 'AI-driven inventory optimization with demand forecasting, automated reordering, and real-time stock monitoring.',
      icon: ArchiveBoxIcon,
      category: 'Inventory & Supply',
      price: '$149/mo',
      originalPrice: '$299/mo',
      features: [
        'AI demand forecasting',
        'Automated reorder points',
        'Real-time stock tracking',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Mobile app included'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 25%',
        'Improve cash flow by 30%',
        'Eliminate manual counting'
      ],
      gradient: 'from-green-500 to-emerald-500',
      href: '/zion-smart-inventory-manager',
      popular: false
    },
    {
      id: 'smart-expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, automated categorization, and budget optimization recommendations.',
      icon: CurrencyDollarIcon,
      category: 'Finance & Accounting',
      price: '$99/mo',
      originalPrice: '$199/mo',
      features: [
        'AI receipt scanning',
        'Automated categorization',
        'Budget tracking & alerts',
        'Tax preparation tools',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting software',
        'Mobile receipt capture'
      ],
      benefits: [
        'Save 10 hours per month',
        'Reduce expense errors by 90%',
        'Improve budget accuracy by 85%',
        'Streamline tax preparation'
      ],
      gradient: 'from-yellow-500 to-orange-500',
      href: '/zion-smart-expense-tracker',
      popular: false
    },
    {
      id: 'ai-task-scheduler',
      name: 'AI Task Scheduler Pro',
      description: 'Intelligent task management with AI-powered prioritization, time estimation, and automated scheduling optimization.',
      icon: CalendarIcon,
      category: 'Productivity & Management',
      price: '$79/mo',
      originalPrice: '$159/mo',
      features: [
        'AI task prioritization',
        'Smart time estimation',
        'Automated scheduling',
        'Team collaboration tools',
        'Progress tracking',
        'Deadline management',
        'Integration with 50+ tools',
        'Mobile & desktop apps'
      ],
      benefits: [
        'Increase productivity by 45%',
        'Reduce missed deadlines by 80%',
        'Optimize team efficiency by 35%',
        'Save 8 hours per week'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      href: '/zion-ai-task-scheduler',
      popular: false
    },
    {
      id: 'ai-translation-service',
      name: 'AI Translation Service',
      description: 'Advanced multilingual translation with 99% accuracy, real-time processing, and support for 100+ languages.',
      icon: GlobeAltIcon,
      category: 'Communication & Language',
      price: '$49/mo',
      originalPrice: '$99/mo',
      features: [
        '100+ language support',
        '99% translation accuracy',
        'Real-time processing',
        'Document translation',
        'Voice translation',
        'API integration',
        'Custom terminology',
        'Batch processing'
      ],
      benefits: [
        'Expand global reach instantly',
        'Reduce translation costs by 60%',
        'Improve communication accuracy',
        'Scale multilingual operations'
      ],
      gradient: 'from-cyan-500 to-blue-500',
      href: '/zion-ai-translation-service',
      popular: false
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      description: 'Create professional videos automatically with AI-powered script generation, voice synthesis, and video editing.',
      icon: VideoCameraIcon,
      category: 'Content & Media',
      price: '$199/mo',
      originalPrice: '$399/mo',
      features: [
        'AI script generation',
        'Voice synthesis (50+ voices)',
        'Auto video editing',
        '100+ templates',
        'HD/4K export',
        'Brand customization',
        'Social media optimization',
        'Batch video creation'
      ],
      benefits: [
        'Create videos 10x faster',
        'Reduce production costs by 70%',
        'Maintain consistent quality',
        'Scale content production'
      ],
      gradient: 'from-pink-500 to-rose-500',
      href: '/zion-ai-video-generator',
      popular: true
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Intelligent coding companion with code generation, debugging assistance, and automated testing recommendations.',
      icon: CodeBracketIcon,
      category: 'Development & Programming',
      price: '$149/mo',
      originalPrice: '$299/mo',
      features: [
        'AI code generation',
        'Smart debugging',
        'Code optimization',
        'Multi-language support',
        'IDE integration',
        'Code review assistance',
        'Documentation generation',
        'Team collaboration'
      ],
      benefits: [
        'Write code 3x faster',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Accelerate development cycles'
      ],
      gradient: 'from-emerald-500 to-teal-500',
      href: '/zion-ai-code-assistant',
      popular: false
    },
    {
      id: 'ai-legal-assistant',
      name: 'AI Legal Assistant',
      description: 'Intelligent legal document analysis, contract review, and compliance monitoring with 95% accuracy.',
      icon: ScaleIcon,
      category: 'Legal & Compliance',
      price: '$399/mo',
      originalPrice: '$799/mo',
      features: [
        'Contract analysis',
        'Legal document review',
        'Compliance monitoring',
        'Risk assessment',
        'Document generation',
        'Case law research',
        'Deadline tracking',
        'Client communication tools'
      ],
      benefits: [
        'Reduce review time by 75%',
        'Improve accuracy by 90%',
        'Lower legal costs by 50%',
        'Enhance compliance monitoring'
      ],
      gradient: 'from-amber-500 to-yellow-500',
      href: '/ai-legal-assistant',
      popular: false
    },
    {
      id: 'ai-medical-assistant',
      name: 'AI Medical Assistant',
      description: 'Advanced medical diagnosis support, patient data analysis, and treatment recommendation system.',
      icon: HeartIcon,
      category: 'Healthcare & Medical',
      price: '$599/mo',
      originalPrice: '$1199/mo',
      features: [
        'Medical image analysis',
        'Symptom assessment',
        'Treatment recommendations',
        'Patient data management',
        'Drug interaction checking',
        'Medical record analysis',
        'HIPAA compliance',
        'Integration with EMR systems'
      ],
      benefits: [
        'Improve diagnostic accuracy by 40%',
        'Reduce diagnosis time by 50%',
        'Enhance patient care quality',
        'Streamline medical workflows'
      ],
      gradient: 'from-red-500 to-pink-500',
      href: '/ai-medical-assistant',
      popular: false
    },
    {
      id: 'ai-education-tutor',
      name: 'AI Education Tutor',
      description: 'Personalized learning platform with adaptive curriculum, progress tracking, and intelligent tutoring system.',
      icon: AcademicCapIcon,
      category: 'Education & Learning',
      price: '$79/mo',
      originalPrice: '$159/mo',
      features: [
        'Adaptive learning paths',
        'Personalized curriculum',
        'Progress tracking',
        'Interactive lessons',
        'Assessment tools',
        'Multi-subject support',
        'Parent/teacher dashboard',
        'Mobile learning app'
      ],
      benefits: [
        'Improve learning outcomes by 60%',
        'Personalize education for each student',
        'Reduce teaching workload by 40%',
        'Track progress in real-time'
      ],
      gradient: 'from-violet-500 to-purple-500',
      href: '/ai-education-tutor',
      popular: false
    },
    {
      id: 'ai-real-estate-analyzer',
      name: 'AI Real Estate Analyzer',
      description: 'Comprehensive property analysis with market trends, investment potential, and automated valuation models.',
      icon: HomeIcon,
      category: 'Real Estate & Property',
      price: '$199/mo',
      originalPrice: '$399/mo',
      features: [
        'Property valuation',
        'Market trend analysis',
        'Investment scoring',
        'Neighborhood insights',
        'Rental yield calculator',
        'Property comparison tools',
        'Market forecasting',
        'Investment recommendations'
      ],
      benefits: [
        'Make informed investment decisions',
        'Identify profitable opportunities',
        'Reduce analysis time by 80%',
        'Improve investment returns by 25%'
      ],
      gradient: 'from-stone-500 to-gray-500',
      href: '/ai-real-estate-analyzer',
      popular: false
    },
    {
      id: 'ai-supply-chain-optimizer',
      name: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting, route optimization, and risk assessment.',
      icon: TruckIcon,
      category: 'Logistics & Supply Chain',
      price: '$299/mo',
      originalPrice: '$599/mo',
      features: [
        'Demand forecasting',
        'Route optimization',
        'Inventory optimization',
        'Risk assessment',
        'Supplier management',
        'Cost optimization',
        'Real-time tracking',
        'Performance analytics'
      ],
      benefits: [
        'Reduce supply chain costs by 30%',
        'Improve delivery times by 40%',
        'Minimize stockouts by 70%',
        'Optimize supplier relationships'
      ],
      gradient: 'from-orange-500 to-red-500',
      href: '/ai-supply-chain-optimizer',
      popular: false
    },
    {
      id: 'ai-3d-model-generator',
      name: 'AI 3D Model Generator',
      description: 'Create detailed 3D models from text descriptions or 2D images using advanced AI technology.',
      icon: CubeIcon,
      category: 'Design & 3D Modeling',
      price: '$149/mo',
      originalPrice: '$299/mo',
      features: [
        'Text-to-3D generation',
        'Image-to-3D conversion',
        'High-quality rendering',
        'Multiple export formats',
        'Custom model training',
        'Batch processing',
        'API integration',
        'Cloud rendering'
      ],
      benefits: [
        'Create 3D models 10x faster',
        'Reduce design costs by 60%',
        'Enable rapid prototyping',
        'Scale 3D content production'
      ],
      gradient: 'from-sky-500 to-blue-500',
      href: '/ai-3d-model-generator',
      popular: false
    },
    {
      id: 'ai-audio-processor',
      name: 'AI Audio Processor',
      description: 'Advanced audio processing with noise reduction, voice enhancement, and automated transcription.',
      icon: MicrophoneIcon,
      category: 'Audio & Media',
      price: '$99/mo',
      originalPrice: '$199/mo',
      features: [
        'Noise reduction',
        'Voice enhancement',
        'Audio transcription',
        'Real-time processing',
        'Multiple audio formats',
        'Batch processing',
        'API integration',
        'Cloud processing'
      ],
      benefits: [
        'Improve audio quality by 90%',
        'Reduce processing time by 80%',
        'Enable real-time applications',
        'Scale audio processing needs'
      ],
      gradient: 'from-lime-500 to-green-500',
      href: '/ai-audio-processor',
      popular: false
    }
  ];

  const categories = [
    'All',
    'Analytics & BI',
    'CRM & Sales',
    'Inventory & Supply',
    'Finance & Accounting',
    'Productivity & Management',
    'Communication & Language',
    'Content & Media',
    'Development & Programming',
    'Legal & Compliance',
    'Healthcare & Medical',
    'Education & Learning',
    'Real Estate & Property',
    'Logistics & Supply Chain',
    'Design & 3D Modeling',
    'Audio & Media'
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions' },
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '30+', label: 'Countries Served' }
  ];

  return (
    <>
      <SEOHead 
        title="Micro SaaS Solutions - Innovative Business Applications | Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SaaS solutions. From analytics dashboards to CRM automation, we provide specialized tools that solve specific business challenges with real functionality."
        keywords="micro saas, business software, AI tools, analytics dashboard, CRM automation, inventory management, expense tracking, productivity tools, business applications"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="cyber-grid"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-300 text-sm font-medium">50+ Micro SaaS Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Micro SaaS Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered micro SaaS applications designed to solve specific business challenges with real functionality and intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Explore Solutions
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Portfolio</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each solution is designed to solve specific business challenges with real functionality, AI-powered intelligence, and seamless integration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => (
                <div key={product.id} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded-full">{product.category}</span>
                      {product.popular && (
                        <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20">Popular</span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                      Save 50%
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="text-xs text-gray-400">
                        +{product.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</div>
                    {product.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowTrendingUpIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to={product.href}
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-700 hover:to-purple-700 hover:scale-105"
                    >
                      Try Free Trial
                    </Link>
                    <button className="px-4 py-3 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300">
                      <EyeIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your specific needs and discover how our micro SaaS solutions can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="font-semibold">Call Us</div>
                  <div className="text-sm">+1 (302) 464-0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-sm">Middletown, DE 19709</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;