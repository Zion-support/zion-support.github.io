'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  CpuChipIcon,
  EyeIcon,
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
  HeartIcon,
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
  LightBulbIcon,
  FireIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
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
  CloudBoltIcon as CloudBoltIconOutline2,
  TruckIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  QrCodeIcon,
  BarcodeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  SignalIcon,
  WifiIcon,
  BoltIcon,
  BatteryIcon,
  PowerIcon,
  LightBulbIcon as LightBulbIconOutline,
  FireIcon as FireIconOutline,
  SunIcon as SunIconOutline,
  MoonIcon as MoonIconOutline,
  CloudIcon as CloudIconOutline,
  CloudRainIcon as CloudRainIconOutline3,
  CloudSnowIcon as CloudSnowIconOutline3,
  CloudSunIcon as CloudSunIconOutline3,
  CloudMoonIcon as CloudMoonIconOutline3,
  CloudLightningIcon as CloudLightningIconOutline3,
  CloudArrowUpIcon as CloudArrowUpIconOutline3,
  CloudArrowDownIcon as CloudArrowDownIconOutline3,
  CloudCheckIcon as CloudCheckIconOutline3,
  CloudXMarkIcon as CloudXMarkIconOutline3,
  CloudSlashIcon as CloudSlashIconOutline3,
  CloudBoltIcon as CloudBoltIconOutline3,
  CreditCardIcon,
  BanknotesIcon,
  ReceiptRefundIcon,
  ReceiptPercentIcon,
  CalculatorIcon,
  DocumentDuplicateIcon,
  PhotoIcon,
  CameraIcon,
  MicrophoneIcon,
  CubeIcon,
  BeakerIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  PresentationChartLineIcon as PresentationChartLineIconOutline,
  BuildingOfficeIcon as BuildingOfficeIconOutline,
  BanknotesIcon as BanknotesIconOutline,
  ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
  UserIcon,
  WrenchScrewdriverIcon as WrenchScrewdriverIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  ChatBubbleLeftRightIcon,
  DocumentDuplicateIcon as DocumentDuplicateIconOutline,
  CalendarIcon,
  ClockIcon as ClockIconOutline,
  ArrowTrendingUpIcon as ArrowTrendingUpIconOutline,
  ArrowTrendingDownIcon as ArrowTrendingDownIconOutline,
  ExclamationTriangleIcon as ExclamationTriangleIconOutline2,
  CheckBadgeIcon as CheckBadgeIconOutline,
  XMarkIcon as XMarkIconOutline,
  PlusIcon as PlusIconOutline,
  MinusIcon as MinusIconOutline,
  PencilIcon as PencilIconOutline,
  TrashIcon as TrashIconOutline,
  ShareIcon as ShareIconOutline,
  DownloadIcon as DownloadIconOutline,
  UploadIcon as UploadIconOutline,
  PrinterIcon as PrinterIconOutline,
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  TagIcon as TagIconOutline,
  FlagIcon as FlagIconOutline,
  BookmarkIcon as BookmarkIconOutline,
  HeartIcon as HeartIconOutline,
  ThumbUpIcon as ThumbUpIconOutline,
  ThumbDownIcon as ThumbDownIconOutline,
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftIconOutline,
  BellIcon as BellIconOutline,
  BellSlashIcon as BellSlashIconOutline,
  LockClosedIcon as LockClosedIconOutline,
  LockOpenIcon as LockOpenIconOutline,
  KeyIcon as KeyIconOutline,
  FingerPrintIcon as FingerPrintIconOutline,
  EyeIcon as EyeIconOutline2,
  EyeSlashIcon as EyeSlashIconOutline,
  InformationCircleIcon as InformationCircleIconOutline,
  QuestionMarkCircleIcon as QuestionMarkCircleIconOutline,
  ExclamationCircleIcon as ExclamationCircleIconOutline,
  CheckCircleIcon as CheckCircleIconOutline2,
  XCircleIcon as XCircleIconOutline,
  PlusCircleIcon as PlusCircleIconOutline,
  MinusCircleIcon as MinusCircleIconOutline,
  ExclamationTriangleIcon as ExclamationTriangleIconOutline3,
  LightBulbIcon as LightBulbIconOutline2,
  FireIcon as FireIconOutline2,
  SunIcon as SunIconOutline2,
  MoonIcon as MoonIconOutline2,
  CloudIcon as CloudIconOutline2,
  CloudRainIcon as CloudRainIconOutline4,
  CloudSnowIcon as CloudSnowIconOutline4,
  CloudSunIcon as CloudSunIconOutline4,
  CloudMoonIcon as CloudMoonIconOutline4,
  CloudLightningIcon as CloudLightningIconOutline4,
  CloudArrowUpIcon as CloudArrowUpIconOutline4,
  CloudArrowDownIcon as CloudArrowDownIconOutline4,
  CloudCheckIcon as CloudCheckIconOutline4,
  CloudXMarkIcon as CloudXMarkIconOutline4,
  CloudSlashIcon as CloudSlashIconOutline4,
  CloudBoltIcon as CloudBoltIconOutline4
} from '@heroicons/react/24/outline';

const ZionSmartExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: CameraIcon,
      title: 'AI Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR and AI technology with 99% accuracy.',
      benefits: ['99% OCR accuracy', 'Multi-language support', 'Automatic data extraction', 'Receipt validation']
    },
    {
      icon: CpuChipIcon,
      title: 'Smart Categorization',
      description: 'AI-powered expense categorization that learns from your patterns and automatically assigns categories.',
      benefits: ['Machine learning categorization', 'Custom category rules', 'Pattern recognition', 'Manual override options']
    },
    {
      icon: ChartBarIcon,
      title: 'Budget Tracking & Alerts',
      description: 'Set budgets for different categories and receive intelligent alerts when you approach or exceed limits.',
      benefits: ['Real-time budget monitoring', 'Smart alerts', 'Spending trends', 'Forecast predictions']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Tax Preparation Tools',
      description: 'Automatically categorize expenses for tax purposes and generate reports for your accountant.',
      benefits: ['Tax category mapping', 'Audit trail', 'Export capabilities', 'Compliance reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic AI categorization',
        'Mobile app access',
        'Email support',
        'Basic reporting',
        '1 user account',
        'Cloud storage',
        'Tax export'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$199',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Unlimited receipts',
        'Advanced AI categorization',
        'Team collaboration',
        'Priority support',
        'Advanced analytics',
        'Up to 5 users',
        'Custom categories',
        'API access',
        'Integration with accounting software',
        'Expense approval workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'Advanced security',
        '24/7 phone support',
        'Custom development',
        'Unlimited users',
        'White-label options',
        'On-premise deployment',
        'Dedicated account manager',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'Freelance Consultant',
      role: 'Independent Contractor',
      content: 'Smart Expense Tracker saves me 10 hours per month on expense management. The AI categorization is incredibly accurate and the receipt scanning is a game-changer.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Startup Ventures',
      role: 'CFO',
      content: 'The budget tracking and alerts help us stay on top of our spending. We reduced expense errors by 90% and streamlined our approval process.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      role: 'Operations Manager',
      content: 'The team collaboration features make it easy to manage expenses across our team. The integration with our accounting software is seamless.',
      rating: 5
    }
  ];

  const expenseFeatures = [
    {
      name: 'Receipt Scanning',
      description: 'Scan receipts with your phone camera and automatically extract expense data.',
      icon: CameraIcon,
      benefits: ['99% accuracy', 'Multi-format support', 'Batch processing', 'Offline capability']
    },
    {
      name: 'Multi-Currency Support',
      description: 'Track expenses in multiple currencies with automatic conversion rates.',
      icon: GlobeAltIcon,
      benefits: ['150+ currencies', 'Real-time rates', 'Historical tracking', 'Custom rates']
    },
    {
      name: 'Team Management',
      description: 'Manage team expenses with approval workflows and role-based access.',
      icon: UserGroupIcon,
      benefits: ['Approval workflows', 'Role-based access', 'Team reporting', 'Expense policies']
    },
    {
      name: 'Integration Hub',
      description: 'Connect with 50+ accounting and business tools for seamless workflow.',
      icon: CogIcon,
      benefits: ['50+ integrations', 'API access', 'Automated sync', 'Custom connectors']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Smart Expense Tracker - AI-Powered Expense Management | Zion Tech Group"
        description="Streamline expense management with AI-powered receipt scanning, smart categorization, and budget tracking. Save 10 hours per month and reduce errors by 90%."
        keywords="expense tracking, receipt scanning, budget management, expense categorization, AI expense management, financial tracking"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="cyber-grid"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-300 text-sm font-medium">AI-Powered Expense Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Smart Expense Tracker
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline expense management with AI-powered receipt scanning, smart categorization, and budget tracking that saves 10 hours per month and reduces errors by 90%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">10h</div>
                  <div className="text-gray-300 text-sm">Time Saved/Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
                  <div className="text-gray-300 text-sm">Error Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">99%</div>
                  <div className="text-gray-300 text-sm">Scan Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Integrations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Expense Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage AI and automation to streamline your expense management and gain better control over your finances.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Complete <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Expense Solution</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage expenses efficiently, from scanning to reporting.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expenseFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your needs. All plans include our core expense features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-yellow-500 shadow-yellow-500/20' 
                    : 'border-slate-700 hover:border-yellow-500 hover:shadow-yellow-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700'
                      : 'border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of individuals and businesses that have streamlined their expense management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Streamline Your Expenses?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI-powered expense management can transform your financial tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSmartExpenseTrackerPage;