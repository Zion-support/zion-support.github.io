import React from 'react';
import SEOHead from '../components/SEOHead';
import {
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CpuChipIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CogIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
  GlobeAltIcon,
  ChartBarIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  EyeIcon,
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

const AICustomerSupportChatbotPage: React.FC = () => {
  const features = [
    {
      category: 'AI-Powered Conversations',
      icon: CpuChipIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        'Natural Language Processing',
        'Context-Aware Responses',
        'Multi-Language Support',
        'Sentiment Analysis',
        'Intent Recognition',
        'Conversation Memory'
      ]
    },
    {
      category: 'Smart Automation',
      icon: CogIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: [
        'Automated Ticket Creation',
        'Escalation Management',
        'Knowledge Base Integration',
        'Workflow Automation',
        'Smart Routing',
        'Response Templates'
      ]
    },
    {
      category: 'Analytics & Insights',
      icon: ChartBarIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        'Conversation Analytics',
        'Customer Satisfaction Tracking',
        'Performance Metrics',
        'Trend Analysis',
        'ROI Measurement',
        'Custom Reports'
      ]
    },
    {
      category: 'Integration & Customization',
      icon: PuzzlePieceIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: [
        'CRM Integration',
        'Live Chat Handoff',
        'Custom Branding',
        'API Access',
        'Webhook Support',
        'White-label Options'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 conversations/month',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics',
        '1 website integration'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 conversations/month',
        'Advanced AI features',
        'Priority support',
        'Custom branding',
        'Advanced analytics',
        '5 website integrations',
        'CRM integration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Full AI suite',
        '24/7 phone support',
        'White-label options',
        'Custom integrations',
        'Unlimited integrations',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: RocketLaunchIcon,
      title: '80% Faster Response',
      description: 'AI chatbots provide instant responses 24/7, dramatically improving customer satisfaction'
    },
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock automated support'
    },
    {
      icon: ChartBarIcon,
      title: '60% Cost Reduction',
      description: 'Reduce support costs while maintaining high-quality customer service'
    },
    {
      icon: ShieldCheckIcon,
      title: '99.9% Uptime',
      description: 'Reliable, secure, and always available customer support solution'
    }
  ];

  const testimonials = [
    {
      name: 'Lisa Chen',
      company: 'TechCorp Solutions',
      role: 'Customer Success Manager',
      content: 'Our AI chatbot handles 70% of customer inquiries automatically. Customer satisfaction increased by 40% and response time dropped to under 30 seconds.',
      rating: 5
    },
    {
      name: 'Mark Rodriguez',
      company: 'E-commerce Plus',
      role: 'Operations Director',
      content: 'The AI chatbot reduced our support costs by 65% while improving customer experience. The integration was seamless and ROI was achieved in just 2 months.',
      rating: 5
    },
    {
      name: 'Jennifer Walsh',
      company: 'ServiceFirst Agency',
      role: 'CEO',
      content: 'Our clients love the instant responses and 24/7 availability. The AI chatbot has become an essential part of our customer service strategy.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Customer Support Chatbot - Zion Tech Group"
        description="Revolutionary AI-powered customer support chatbot. Reduce response time by 80%, cut costs by 60%, and provide 24/7 support. Start your free trial today."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Customer Support Chatbot
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Transform your customer support with AI-powered chatbots. Reduce response time by 80%, cut costs by 60%, and provide 24/7 intelligent support that delights your customers.
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
                  <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                  <div className="text-gray-300">Faster Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">60%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
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
              Everything you need to provide exceptional customer support with artificial intelligence
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
                Why Choose Our AI Customer Support Chatbot?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that transform customer support operations
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
              Choose the plan that fits your support needs. All plans include our core AI features.
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
                Join thousands of businesses already using AI Customer Support Chatbot
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Customer Support?
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

export default AICustomerSupportChatbotPage;
