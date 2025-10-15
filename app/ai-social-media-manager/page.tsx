import React from 'react';
import SEOHead from '../components/SEOHead';
import {
  ShareIcon,
  ChartBarIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
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
  ThumbUpIcon,
  ThumbDownIcon,
  FlagIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      category: 'AI Content Creation',
      icon: CpuChipIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        'AI-Generated Posts',
        'Hashtag Optimization',
        'Content Calendar Planning',
        'Trend Analysis',
        'Brand Voice Consistency',
        'Multi-Platform Adaptation'
      ]
    },
    {
      category: 'Smart Scheduling',
      icon: CalendarIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: [
        'Optimal Timing Analysis',
        'Cross-Platform Scheduling',
        'Bulk Content Upload',
        'Auto-Reposting',
        'Time Zone Management',
        'Content Queuing'
      ]
    },
    {
      category: 'Analytics & Insights',
      icon: ChartBarIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        'Performance Tracking',
        'Engagement Analysis',
        'ROI Measurement',
        'Audience Insights',
        'Competitor Analysis',
        'Growth Metrics'
      ]
    },
    {
      category: 'Community Management',
      icon: UserGroupIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: [
        'Auto-Response System',
        'Comment Moderation',
        'Mention Tracking',
        'Customer Service Integration',
        'Crisis Management',
        'Engagement Optimization'
      ]
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', color: 'text-blue-600' },
    { name: 'Instagram', icon: '📷', color: 'text-pink-600' },
    { name: 'Twitter', icon: '🐦', color: 'text-blue-400' },
    { name: 'LinkedIn', icon: '💼', color: 'text-blue-700' },
    { name: 'TikTok', icon: '🎵', color: 'text-black' },
    { name: 'YouTube', icon: '📺', color: 'text-red-600' },
    { name: 'Pinterest', icon: '📌', color: 'text-red-500' },
    { name: 'Snapchat', icon: '👻', color: 'text-yellow-500' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '100 posts/month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support',
        'Basic scheduling'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        '500 posts/month',
        'Advanced AI features',
        'Comprehensive analytics',
        'Priority support',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Full AI suite',
        'Advanced reporting',
        'White-label options',
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
      title: '5x More Engagement',
      description: 'AI-optimized content and timing increase social media engagement significantly'
    },
    {
      icon: ClockIcon,
      title: 'Save 20+ Hours/Week',
      description: 'Automated posting and content generation save valuable time'
    },
    {
      icon: ChartBarIcon,
      title: '300% Better ROI',
      description: 'Data-driven strategies and AI insights improve campaign performance'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Brand Safety',
      description: 'AI-powered content moderation ensures brand consistency and safety'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Fashion Forward',
      role: 'Marketing Manager',
      content: 'AI Social Media Manager transformed our social presence. We went from 5K to 50K followers in 6 months with 5x more engagement.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'TechStart Agency',
      role: 'Social Media Director',
      content: 'The AI content generation is incredible. We save 25 hours per week and our clients love the consistent, high-quality posts.',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      company: 'E-commerce Plus',
      role: 'CEO',
      content: 'Our social media ROI increased by 400% since using this platform. The analytics insights are game-changing for our business.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Social Media Manager - Zion Tech Group"
        description="Revolutionary AI-powered social media management platform. Increase engagement by 5x, save 20+ hours weekly, and boost ROI by 300%. Manage all platforms from one dashboard."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                <ShareIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Social Media Manager
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Transform your social media presence with AI-powered management. Create, schedule, and optimize content across all platforms while increasing engagement by 5x and saving 20+ hours weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
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
                  <div className="text-3xl font-bold text-blue-400 mb-2">5x</div>
                  <div className="text-gray-300">More Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                  <div className="text-gray-300">Better ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">20+</div>
                  <div className="text-gray-300">Hours Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">8</div>
                  <div className="text-gray-300">Platforms Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage all your social media accounts from one powerful dashboard
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className={`font-semibold ${platform.color}`}>{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to dominate social media with artificial intelligence
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
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our AI Social Media Manager?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that drive real business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
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
              Choose the plan that fits your social media needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
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
                Join thousands of businesses already using AI Social Media Manager
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start your free 14-day trial today. No credit card required. Cancel anytime.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-blue-200 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-blue-200 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-blue-200 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
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

export default AISocialMediaManagerPage;
