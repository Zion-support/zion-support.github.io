import React from 'react';
import SEOHead from '../components/SEOHead';
import {
  EnvelopeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon as MailIcon,
  MapPinIcon,
  SparklesIcon,
  CpuChipIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CogIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  EyeIcon,
  HeartIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  CalendarIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  ChartPieIcon,
  UserIcon,
  BuildingOfficeIcon,
  TruckIcon,
  CameraIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  PaintBrushIcon,
  CubeIcon,
  PuzzlePieceIcon,
  CommandLineIcon,
  ServerIcon,
  DatabaseIcon,
  KeyIcon,
  LockClosedIcon,
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
  CloudIcon,
  FireIcon,
  BoltIcon,
  ZapIcon,
  BeakerIcon,
  FlaskConicalIcon,
  TestTubeIcon,
  BookOpenIcon,
  NewspaperIcon,
  RssIcon,
  LinkIcon,
  ShareIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  FlagIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      category: 'AI-Powered Email Creation',
      icon: CpuChipIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        'AI-Generated Subject Lines',
        'Personalized Email Content',
        'Smart A/B Testing',
        'Sentiment Analysis',
        'Language Optimization',
        'Brand Voice Consistency'
      ]
    },
    {
      category: 'Advanced Automation',
      icon: CogIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        'Behavioral Triggers',
        'Drip Campaign Sequences',
        'Abandoned Cart Recovery',
        'Welcome Series Automation',
        'Re-engagement Campaigns',
        'Birthday & Anniversary Emails'
      ]
    },
    {
      category: 'Analytics & Insights',
      icon: ChartBarIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: [
        'Real-time Performance Tracking',
        'ROI Analysis',
        'Customer Journey Mapping',
        'Predictive Analytics',
        'Conversion Optimization',
        'Detailed Reporting'
      ]
    },
    {
      category: 'List Management',
      icon: UserGroupIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: [
        'Smart Segmentation',
        'Dynamic Lists',
        'Lead Scoring',
        'Contact Enrichment',
        'Duplicate Detection',
        'Compliance Management'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 contacts',
        '5,000 emails/month',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        '50,000 emails/month',
        'Advanced AI features',
        'Custom templates',
        'Advanced analytics',
        'A/B testing',
        'Priority support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Full AI suite',
        'Custom integrations',
        'Advanced reporting',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: RocketLaunchIcon,
      title: '3x Higher Open Rates',
      description: 'AI-optimized subject lines and content increase engagement significantly'
    },
    {
      icon: ChartBarIcon,
      title: '40% More Conversions',
      description: 'Personalized and timely emails drive better results'
    },
    {
      icon: ClockIcon,
      title: 'Save 10+ Hours/Week',
      description: 'Automated campaigns and AI content generation save time'
    },
    {
      icon: ShieldCheckIcon,
      title: 'GDPR Compliant',
      description: 'Built-in compliance features ensure legal requirements are met'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'AI Email Marketing increased our open rates by 300% and saved us 15 hours per week. The AI-generated content is incredibly effective.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'CEO',
      content: 'The automation features are game-changing. Our abandoned cart recovery campaigns now convert at 35% - up from 8%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency',
      role: 'Account Manager',
      content: 'The AI insights help us understand our customers better than ever. ROI has improved by 250% in just 3 months.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Email Marketing Automation - Zion Tech Group"
        description="Revolutionary AI-powered email marketing automation platform. Increase open rates by 300%, save 10+ hours weekly, and boost conversions by 40%. Start your free trial today."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
                <EnvelopeIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Email Marketing Automation
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Transform your email marketing with AI-powered automation. Increase open rates by 300%, boost conversions by 40%, and save 10+ hours weekly with intelligent email campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Start Free Trial
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#demo"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                  <div className="text-gray-300">Higher Open Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                  <div className="text-gray-300">More Conversions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                  <div className="text-gray-300">Hours Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, send, and optimize email campaigns with artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} rounded-lg mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className={`text-xl font-semibold ${feature.color} mb-4`}>
                  {feature.category}
                </h3>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our AI Email Marketing?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that drive real business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                plan.popular ? 'border-purple-500 relative' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of businesses already using AI Email Marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Email Marketing?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Start your free 14-day trial today. No credit card required. Cancel anytime.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-purple-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-purple-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-purple-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
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

export default AIEmailMarketingAutomationPage;
