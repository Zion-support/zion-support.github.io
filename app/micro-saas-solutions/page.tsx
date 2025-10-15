import React from 'react';
import SEOHead from '../components/SEOHead';
import {
  GlobeAltIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  ShareIcon,
  CurrencyDollarIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CogIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  CalendarIcon,
  MegaphoneIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  ChartPieIcon,
  UserIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HeartIcon,
  CameraIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  PaintBrushIcon,
  CubeIcon,
  PuzzlePieceIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerIcon,
  DatabaseIcon,
  KeyIcon,
  LockClosedIcon,
  EyeIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  ArchiveBoxIcon,
  TagIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon as ArrowRightIconSolid,
  PlayIcon,
  PauseIcon,
  StopIcon,
  ForwardIcon,
  BackwardIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  WifiIcon,
  SignalIcon,
  Battery100Icon,
  SunIcon,
  MoonIcon,
  CloudIcon as CloudIconSolid,
  FireIcon,
  BoltIcon,
  ZapIcon,
  BeakerIcon,
  FlaskConicalIcon,
  TestTubeIcon,
  BeakerIcon as BeakerIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  BookOpenIcon,
  NewspaperIcon,
  RssIcon,
  LinkIcon,
  ShareIcon as ShareIconSolid,
  HeartIcon as HeartIconSolid,
  ThumbUpIcon,
  ThumbDownIcon,
  FlagIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon as CheckCircleIconSolid,
  XCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon as LightBulbIconSolid,
  PuzzlePieceIcon as PuzzlePieceIconSolid,
  CubeIcon as CubeIconSolid,
  CommandLineIcon as CommandLineIconSolid,
  CpuChipIcon as CpuChipIconSolid,
  ServerIcon as ServerIconSolid,
  DatabaseIcon as DatabaseIconSolid,
  KeyIcon as KeyIconSolid,
  LockClosedIcon as LockClosedIconSolid,
  EyeIcon as EyeIconSolid,
  BellIcon as BellIconSolid,
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
  DocumentDuplicateIcon as DocumentDuplicateIconSolid,
  FolderIcon as FolderIconSolid,
  ArchiveBoxIcon as ArchiveBoxIconSolid,
  TagIcon as TagIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  FunnelIcon as FunnelIconSolid,
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconSolid,
  Bars3Icon as Bars3IconSolid,
  XMarkIcon as XMarkIconSolid,
  PlusIcon as PlusIconSolid,
  MinusIcon as MinusIconSolid,
  PencilIcon as PencilIconSolid,
  TrashIcon as TrashIconSolid,
  ArrowUpIcon as ArrowUpIconSolid,
  ArrowDownIcon as ArrowDownIconSolid,
  ArrowLeftIcon as ArrowLeftIconSolid,
  PlayIcon as PlayIconSolid,
  PauseIcon as PauseIconSolid,
  StopIcon as StopIconSolid,
  ForwardIcon as ForwardIconSolid,
  BackwardIcon as BackwardIconSolid,
  VolumeUpIcon as VolumeUpIconSolid,
  VolumeOffIcon as VolumeOffIconSolid,
  WifiIcon as WifiIconSolid,
  SignalIcon as SignalIconSolid,
  Battery100Icon as Battery100IconSolid,
  SunIcon as SunIconSolid,
  MoonIcon as MoonIconSolid,
  FireIcon as FireIconSolid,
  BoltIcon as BoltIconSolid,
  ZapIcon as ZapIconSolid,
  BeakerIcon as BeakerIconSolid,
  FlaskConicalIcon as FlaskConicalIconSolid,
  TestTubeIcon as TestTubeIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  NewspaperIcon as NewspaperIconSolid,
  RssIcon as RssIconSolid,
  LinkIcon as LinkIconSolid,
  ThumbUpIcon as ThumbUpIconSolid,
  ThumbDownIcon as ThumbDownIconSolid,
  FlagIcon as FlagIconSolid,
  ExclamationTriangleIcon as ExclamationTriangleIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
  XCircleIcon as XCircleIconSolid,
  ExclamationCircleIcon as ExclamationCircleIconSolid,
  QuestionMarkCircleIcon as QuestionMarkCircleIconSolid
} from '@heroicons/react/24/outline';

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      category: 'Productivity & Project Management',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CheckCircleIcon,
      services: [
        {
          name: 'TaskFlow Pro',
          price: '$29/month',
          description: 'Advanced task management and project tracking with AI-powered insights',
          features: ['AI Task Prioritization', 'Team Collaboration', 'Time Tracking', 'Progress Analytics', 'Custom Workflows', 'Integration APIs'],
          benefits: ['40% Productivity Increase', 'Reduced Project Delays', 'Better Team Coordination', 'Data-Driven Decisions'],
          marketPrice: '$45/month',
          savings: '35%'
        },
        {
          name: 'ProjectHub Enterprise',
          price: '$49/month',
          description: 'Comprehensive project management suite with advanced reporting and resource planning',
          features: ['Gantt Charts', 'Resource Management', 'Budget Tracking', 'Risk Assessment', 'Client Portal', 'Mobile App'],
          benefits: ['Streamlined Project Delivery', 'Cost Control', 'Client Satisfaction', 'Scalable Operations'],
          marketPrice: '$79/month',
          savings: '38%'
        },
        {
          name: 'TeamSync Collaboration',
          price: '$19/month',
          description: 'Real-time team collaboration platform with video conferencing and document sharing',
          features: ['Video Meetings', 'Screen Sharing', 'File Collaboration', 'Chat Integration', 'Calendar Sync', 'Recording'],
          benefits: ['Improved Communication', 'Remote Work Support', 'Reduced Travel Costs', 'Better Documentation'],
          marketPrice: '$35/month',
          savings: '46%'
        }
      ]
    },
    {
      category: 'Analytics & Business Intelligence',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: ChartBarIcon,
      services: [
        {
          name: 'DataViz Pro',
          price: '$39/month',
          description: 'Advanced data visualization and business intelligence platform with real-time dashboards',
          features: ['Interactive Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics', 'Automated Alerts', 'API Access'],
          benefits: ['Better Decision Making', 'Real-time Insights', 'Cost Reduction', 'Competitive Advantage'],
          marketPrice: '$65/month',
          savings: '40%'
        },
        {
          name: 'SalesTracker Plus',
          price: '$25/month',
          description: 'Comprehensive sales analytics and CRM integration with lead scoring and forecasting',
          features: ['Lead Management', 'Sales Pipeline', 'Revenue Forecasting', 'Customer Segmentation', 'Email Integration', 'Mobile App'],
          benefits: ['Increased Sales', 'Better Lead Quality', 'Improved Forecasting', 'Customer Retention'],
          marketPrice: '$45/month',
          savings: '44%'
        },
        {
          name: 'WebAnalytics AI',
          price: '$35/month',
          description: 'AI-powered web analytics with user behavior tracking and conversion optimization',
          features: ['User Journey Mapping', 'Heatmaps', 'A/B Testing', 'Conversion Tracking', 'SEO Insights', 'Real-time Data'],
          benefits: ['Higher Conversion Rates', 'Better User Experience', 'SEO Improvements', 'Data-Driven Optimization'],
          marketPrice: '$60/month',
          savings: '42%'
        }
      ]
    },
    {
      category: 'Customer Support & Communication',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: ChatBubbleLeftRightIcon,
      services: [
        {
          name: 'SupportHub 360',
          price: '$45/month',
          description: 'All-in-one customer support platform with AI chatbot and ticketing system',
          features: ['AI Chatbot', 'Ticket Management', 'Knowledge Base', 'Live Chat', 'Customer Portal', 'Analytics'],
          benefits: ['Faster Response Times', 'Reduced Support Costs', 'Higher Customer Satisfaction', '24/7 Availability'],
          marketPrice: '$75/month',
          savings: '40%'
        },
        {
          name: 'EmailMaster Pro',
          price: '$15/month',
          description: 'Advanced email marketing automation with personalization and analytics',
          features: ['Email Automation', 'A/B Testing', 'Personalization', 'List Management', 'Analytics', 'Templates'],
          benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Campaigns', 'ROI Tracking'],
          marketPrice: '$30/month',
          savings: '50%'
        },
        {
          name: 'FeedbackLoop',
          price: '$22/month',
          description: 'Customer feedback collection and analysis platform with sentiment analysis',
          features: ['Survey Builder', 'Sentiment Analysis', 'NPS Tracking', 'Feedback Analytics', 'Integration APIs', 'Custom Reports'],
          benefits: ['Better Customer Insights', 'Improved Products', 'Higher NPS Scores', 'Data-Driven Decisions'],
          marketPrice: '$40/month',
          savings: '45%'
        }
      ]
    },
    {
      category: 'E-commerce & Sales',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: ShoppingCartIcon,
      services: [
        {
          name: 'StoreBuilder Pro',
          price: '$59/month',
          description: 'Complete e-commerce platform with inventory management and payment processing',
          features: ['Online Store Builder', 'Inventory Management', 'Payment Processing', 'Order Management', 'Analytics', 'Mobile App'],
          benefits: ['Quick Store Setup', 'Increased Sales', 'Automated Operations', 'Mobile Commerce'],
          marketPrice: '$99/month',
          savings: '40%'
        },
        {
          name: 'InventoryMaster',
          price: '$35/month',
          description: 'Advanced inventory management system with real-time tracking and forecasting',
          features: ['Real-time Tracking', 'Demand Forecasting', 'Multi-location Support', 'Barcode Scanning', 'Reporting', 'Integration APIs'],
          benefits: ['Reduced Stockouts', 'Lower Inventory Costs', 'Better Planning', 'Automated Reordering'],
          marketPrice: '$55/month',
          savings: '36%'
        },
        {
          name: 'PriceOptimizer',
          price: '$28/month',
          description: 'AI-powered pricing optimization tool for maximum revenue and competitiveness',
          features: ['Dynamic Pricing', 'Competitor Analysis', 'Price Testing', 'Revenue Optimization', 'Market Analysis', 'Alerts'],
          benefits: ['Increased Revenue', 'Competitive Advantage', 'Better Margins', 'Automated Pricing'],
          marketPrice: '$50/month',
          savings: '44%'
        }
      ]
    },
    {
      category: 'Content & Marketing',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      icon: MegaphoneIcon,
      services: [
        {
          name: 'ContentStudio',
          price: '$42/month',
          description: 'AI-powered content creation and management platform for blogs, social media, and marketing',
          features: ['AI Content Generation', 'Social Media Scheduling', 'SEO Optimization', 'Content Calendar', 'Analytics', 'Team Collaboration'],
          benefits: ['Faster Content Creation', 'Better SEO Performance', 'Consistent Publishing', 'Higher Engagement'],
          marketPrice: '$70/month',
          savings: '40%'
        },
        {
          name: 'SocialScheduler Pro',
          price: '$18/month',
          description: 'Advanced social media management with scheduling, analytics, and engagement tracking',
          features: ['Multi-platform Posting', 'Scheduling', 'Analytics', 'Engagement Tracking', 'Hashtag Research', 'Team Management'],
          benefits: ['Time Savings', 'Better Engagement', 'Consistent Presence', 'Data-Driven Strategy'],
          marketPrice: '$35/month',
          savings: '49%'
        },
        {
          name: 'SEOOptimizer',
          price: '$32/month',
          description: 'Comprehensive SEO analysis and optimization tool with keyword tracking and competitor analysis',
          features: ['Keyword Research', 'Site Analysis', 'Competitor Tracking', 'Rank Monitoring', 'Technical SEO', 'Reporting'],
          benefits: ['Higher Search Rankings', 'Increased Organic Traffic', 'Better Visibility', 'Competitive Insights'],
          marketPrice: '$55/month',
          savings: '42%'
        }
      ]
    },
    {
      category: 'Finance & Accounting',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      icon: CurrencyDollarIcon,
      services: [
        {
          name: 'ExpenseTracker Pro',
          price: '$24/month',
          description: 'Advanced expense tracking and financial management with receipt scanning and reporting',
          features: ['Receipt Scanning', 'Expense Categorization', 'Budget Tracking', 'Tax Preparation', 'Reporting', 'Mobile App'],
          benefits: ['Better Financial Control', 'Tax Savings', 'Time Savings', 'Accurate Records'],
          marketPrice: '$40/month',
          savings: '40%'
        },
        {
          name: 'InvoiceMaster',
          price: '$31/month',
          description: 'Professional invoicing and payment management system with automated reminders',
          features: ['Invoice Creation', 'Payment Processing', 'Automated Reminders', 'Client Portal', 'Reporting', 'Integration APIs'],
          benefits: ['Faster Payments', 'Reduced Admin Work', 'Professional Appearance', 'Better Cash Flow'],
          marketPrice: '$50/month',
          savings: '38%'
        },
        {
          name: 'BudgetPlanner AI',
          price: '$27/month',
          description: 'AI-powered budgeting and financial planning tool with predictive analytics',
          features: ['Budget Creation', 'Spending Analysis', 'Goal Tracking', 'Predictive Analytics', 'Alerts', 'Financial Reports'],
          benefits: ['Better Financial Planning', 'Debt Reduction', 'Goal Achievement', 'Financial Security'],
          marketPrice: '$45/month',
          savings: '40%'
        }
      ]
    },
    {
      category: 'HR & Team Management',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      icon: UserGroupIcon,
      services: [
        {
          name: 'HRManager Pro',
          price: '$38/month',
          description: 'Comprehensive HR management system with employee records, payroll, and performance tracking',
          features: ['Employee Records', 'Payroll Management', 'Performance Reviews', 'Time Tracking', 'Benefits Administration', 'Reporting'],
          benefits: ['Streamlined HR Processes', 'Compliance Management', 'Better Employee Experience', 'Reduced Admin Work'],
          marketPrice: '$65/month',
          savings: '42%'
        },
        {
          name: 'RecruitFlow',
          price: '$33/month',
          description: 'AI-powered recruitment platform with candidate screening and interview scheduling',
          features: ['Job Posting', 'Candidate Screening', 'Interview Scheduling', 'Applicant Tracking', 'Background Checks', 'Analytics'],
          benefits: ['Faster Hiring', 'Better Candidate Quality', 'Reduced Bias', 'Improved Efficiency'],
          marketPrice: '$55/month',
          savings: '40%'
        },
        {
          name: 'TeamPulse',
          price: '$21/month',
          description: 'Employee engagement and satisfaction tracking with pulse surveys and analytics',
          features: ['Pulse Surveys', 'Engagement Analytics', 'Feedback Collection', 'Team Insights', 'Action Planning', 'Reporting'],
          benefits: ['Higher Employee Satisfaction', 'Reduced Turnover', 'Better Team Dynamics', 'Data-Driven HR'],
          marketPrice: '$35/month',
          savings: '40%'
        }
      ]
    },
    {
      category: 'Development & Technical',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      icon: CodeBracketIcon,
      services: [
        {
          name: 'CodeReview AI',
          price: '$47/month',
          description: 'AI-powered code review and quality assurance platform with automated testing',
          features: ['Code Analysis', 'Automated Testing', 'Security Scanning', 'Performance Monitoring', 'Team Collaboration', 'Integration APIs'],
          benefits: ['Better Code Quality', 'Faster Development', 'Reduced Bugs', 'Improved Security'],
          marketPrice: '$80/month',
          savings: '41%'
        },
        {
          name: 'APIManager Pro',
          price: '$29/month',
          description: 'Comprehensive API management and monitoring platform with documentation and analytics',
          features: ['API Gateway', 'Documentation', 'Rate Limiting', 'Monitoring', 'Analytics', 'Security'],
          benefits: ['Better API Performance', 'Easier Integration', 'Improved Security', 'Developer Experience'],
          marketPrice: '$50/month',
          savings: '42%'
        },
        {
          name: 'DeployMaster',
          price: '$41/month',
          description: 'Automated deployment and CI/CD platform with monitoring and rollback capabilities',
          features: ['Automated Deployments', 'CI/CD Pipelines', 'Monitoring', 'Rollback', 'Team Collaboration', 'Integration APIs'],
          benefits: ['Faster Deployments', 'Reduced Downtime', 'Better Reliability', 'Team Efficiency'],
          marketPrice: '$70/month',
          savings: '41%'
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Comprehensive micro SaaS solutions for modern businesses. Affordable, powerful, and easy-to-use software tools to streamline your operations and boost productivity."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Powerful, affordable software tools designed to streamline your business operations and boost productivity. No complex setups, just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Explore Solutions
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Micro SaaS Services Grid */}
        <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {microSaasServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.bgColor} rounded-full mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className={`text-3xl font-bold ${category.color} mb-4`}>
                  {category.category}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Professional {category.category.toLowerCase()} solutions to optimize your business operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-center text-yellow-500">
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-2xl font-bold text-gray-900">
                          <CurrencyDollarIcon className="w-6 h-6 text-green-600 mr-1" />
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          <span className="line-through text-gray-400">{service.marketPrice}</span>
                          <span className="ml-2 text-green-600 font-semibold">Save {service.savings}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        Monthly subscription
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Business Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <SparklesIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        Start Free Trial
                      </a>
                      <a
                        href="/pricing"
                        className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        View Pricing
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Micro SaaS Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver enterprise-grade functionality at startup-friendly prices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: RocketLaunchIcon,
                  title: 'Quick Setup',
                  description: 'Get started in minutes, not months. No complex installations or lengthy onboarding processes.'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Secure & Reliable',
                  description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected.'
                },
                {
                  icon: CogIcon,
                  title: 'Easy Integration',
                  description: 'Seamlessly integrate with your existing tools and workflows. No disruption to your operations.'
                },
                {
                  icon: UserGroupIcon,
                  title: '24/7 Support',
                  description: 'Round-the-clock support from our expert team. We\'re here when you need us.'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of our micro SaaS solutions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-indigo-200 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-indigo-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-indigo-200 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-indigo-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-indigo-200 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-indigo-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;
