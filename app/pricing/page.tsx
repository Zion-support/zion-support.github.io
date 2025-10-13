import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Shield, 
  Cloud, 
  Globe, 
  Settings, 
  Users, 
  BarChart3, 
  Brain, 
  Zap, 
  Monitor, 
  Smartphone, 
  Database, 
  Lock, 
  RefreshCw, 
  Award, 
  Clock, 
  DollarSign,
  ExternalLink,
  Sparkles,
  FileText,
  MessageSquare,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Share2,
  Copy,
  Scissors,
  Paperclip,
  Image,
  Video,
  Music,
  File,
  Folder,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Server,
  Network,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Wifi,
  Bluetooth,
  Usb,
  Hdmi,
  Camera,
  Mic,
  Headphones,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Laptop,
  Desktop,
  Tablet,
  Watch,
  Gamepad2,
  Joystick,
  Tv,
  Radio,
  Speaker,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  List,
  Grid,
  Layout,
  Sidebar,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  MoreHorizontal,
  MoreVertical,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check,
  AlertTriangle,
  Info as InfoIcon,
  HelpCircle,
  QuestionMarkCircle,
  ExclamationTriangle,
  XCircle as XCircleIcon,
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon,
  QuestionMarkCircle as QuestionMarkCircleIcon,
  ExclamationTriangle as ExclamationTriangleIcon,
  Target,
  TrendingUp,
  Calendar,
  Mail,
  Phone as PhoneIcon2,
  MapPin as MapPinIcon2,
  Mail as MailIcon2,
  Phone as PhoneIcon3,
  MapPin as MapPinIcon3,
  Mail as MailIcon4,
  Phone as PhoneIcon4,
  MapPin as MapPinIcon4,
  Mail as MailIcon5,
  Phone as PhoneIcon5,
  MapPin as MapPinIcon5,
  Mail as MailIcon6,
  Phone as PhoneIcon6,
  MapPin as MapPinIcon6,
  Mail as MailIcon7,
  Phone as PhoneIcon7,
  MapPin as MapPinIcon7,
  Mail as MailIcon8,
  Phone as PhoneIcon8,
  MapPin as MapPinIcon8,
  Mail as MailIcon9,
  Phone as PhoneIcon9,
  MapPin as MapPinIcon9,
  Mail as MailIcon10,
  Phone as PhoneIcon10,
  MapPin as MapPinIcon10
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const PricingPage = () => {
  const [selectedTab, setSelectedTab] = useState('micro-saas');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing - Zion Tech Group",
    "description": "Transparent pricing for AI services, IT solutions, micro SAAS, and 5G solutions. Choose the perfect plan for your business needs.",
    "url": "https://ziontechgroup.com/pricing",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Micro SAAS Solutions",
          "description": "Ready-to-use software solutions starting from $59/month",
          "price": "59",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "RecurringPaymentsPriceSpecification",
            "billingDuration": "P1M"
          }
        }
      ]
    }
  };

  const microSAASPricing = [
    {
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      category: 'Analytics',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'API access',
        '24/7 support'
      ],
      popular: true
    },
    {
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection',
      monthlyPrice: 499,
      yearlyPrice: 4990,
      category: 'Security',
      features: [
        'AI threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance reporting',
        '24/7 SOC'
      ],
      popular: true
    },
    {
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution',
      monthlyPrice: 99,
      yearlyPrice: 990,
      category: 'Storage',
      features: [
        'Unlimited storage',
        'End-to-end encryption',
        'Real-time sync',
        'Version control',
        '99.9% uptime'
      ],
      popular: false
    },
    {
      name: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      category: 'CRM',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Sales analytics',
        'Mobile app',
        'Integration support'
      ],
      popular: true
    },
    {
      name: 'Zion AI Marketing Automation',
      description: 'AI-powered marketing automation',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      category: 'Marketing',
      features: [
        'AI content generation',
        'Multi-channel campaigns',
        'A/B testing',
        'Analytics dashboard',
        'Email automation'
      ],
      popular: false
    },
    {
      name: 'Zion AI Project Manager',
      description: 'AI-powered project management',
      monthlyPrice: 99,
      yearlyPrice: 990,
      category: 'Project Management',
      features: [
        'AI task prioritization',
        'Resource allocation',
        'Risk prediction',
        'Team collaboration',
        'Time tracking'
      ],
      popular: false
    }
  ];

  const itServicesPricing = [
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions',
      monthlyPrice: 500,
      yearlyPrice: 5000,
      category: 'Infrastructure',
      features: [
        'Multi-cloud architecture',
        'Auto-scaling',
        'Disaster recovery',
        '24/7 monitoring',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Advanced security protection',
      monthlyPrice: 800,
      yearlyPrice: 8000,
      category: 'Security',
      features: [
        'Threat assessment',
        'Penetration testing',
        'Security monitoring',
        'Incident response',
        'Compliance management'
      ],
      popular: true
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform apps',
      projectPrice: 3000,
      category: 'Development',
      features: [
        'iOS and Android',
        'Cross-platform',
        'UI/UX design',
        'API integration',
        'App store deployment'
      ],
      popular: false
    },
    {
      name: 'Web Development',
      description: 'Custom web applications',
      projectPrice: 2000,
      category: 'Development',
      features: [
        'Custom development',
        'Responsive design',
        'SEO optimization',
        'CMS integration',
        'Performance optimization'
      ],
      popular: false
    },
    {
      name: 'DevOps Solutions',
      description: 'DevOps implementation',
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      category: 'DevOps',
      features: [
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring and logging',
        'Automated testing'
      ],
      popular: true
    },
    {
      name: 'Data Analytics & BI',
      description: 'Data analytics solutions',
      monthlyPrice: 1200,
      yearlyPrice: 12000,
      category: 'Analytics',
      features: [
        'Data warehousing',
        'BI dashboards',
        'Predictive analytics',
        'Real-time processing',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const aiServicesPricing = [
    {
      name: 'AI Analytics Dashboard Pro',
      description: 'AI-powered business intelligence',
      monthlyPrice: 500,
      yearlyPrice: 5000,
      category: 'Analytics',
      features: [
        'Real-time visualization',
        'Predictive analytics',
        'Custom dashboards',
        'API access',
        '24/7 support'
      ],
      popular: true
    },
    {
      name: 'AI Cybersecurity Suite Pro',
      description: 'AI-powered security protection',
      monthlyPrice: 800,
      yearlyPrice: 8000,
      category: 'Security',
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated response',
        'Real-time monitoring',
        '24/7 SOC'
      ],
      popular: true
    },
    {
      name: 'AI Content Generation Pro',
      description: 'AI-powered content creation',
      monthlyPrice: 300,
      yearlyPrice: 3000,
      category: 'Content',
      features: [
        'Natural language generation',
        'Multi-format content',
        'Brand customization',
        'SEO optimization',
        'Content analytics'
      ],
      popular: false
    },
    {
      name: 'AI Customer Support Chatbot',
      description: 'Intelligent customer service',
      monthlyPrice: 200,
      yearlyPrice: 2000,
      category: 'Customer Service',
      features: [
        'Natural language understanding',
        'Sentiment analysis',
        'Multi-channel support',
        'Knowledge base integration',
        '24/7 availability'
      ],
      popular: true
    },
    {
      name: 'AI Code Assistant Pro',
      description: 'AI-powered coding assistant',
      monthlyPrice: 150,
      yearlyPrice: 1500,
      category: 'Development',
      features: [
        'Code generation',
        'Automated debugging',
        'Code optimization',
        'Multi-language support',
        'IDE integration'
      ],
      popular: false
    },
    {
      name: 'AI Business Intelligence Pro',
      description: 'AI-powered business intelligence',
      monthlyPrice: 600,
      yearlyPrice: 6000,
      category: 'Analytics',
      features: [
        'Predictive modeling',
        'Automated insights',
        'Real-time analytics',
        'Custom dashboards',
        'Collaborative analytics'
      ],
      popular: true
    }
  ];

  const fiveGServicesPricing = [
    {
      name: '5G Network Infrastructure',
      description: 'Complete 5G network deployment',
      monthlyPrice: 10000,
      yearlyPrice: 100000,
      category: 'Infrastructure',
      features: [
        'Network design and planning',
        'Small cell deployment',
        'Macro network optimization',
        '24/7 monitoring',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: '5G Edge Computing',
      description: '5G edge computing solutions',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      category: 'Edge Computing',
      features: [
        'Ultra-low latency processing',
        'Distributed edge nodes',
        'Real-time analytics',
        'Edge AI processing',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: '5G IoT Solutions',
      description: '5G IoT connectivity and management',
      monthlyPrice: 3000,
      yearlyPrice: 30000,
      category: 'IoT',
      features: [
        'Massive device connectivity',
        'Real-time monitoring',
        'Device management',
        'Data processing',
        'Security and encryption'
      ],
      popular: false
    },
    {
      name: '5G Smart City Solutions',
      description: '5G smart city infrastructure',
      monthlyPrice: 15000,
      yearlyPrice: 150000,
      category: 'Smart City',
      features: [
        'Traffic management',
        'Environmental monitoring',
        'Public safety systems',
        'Citizen services',
        'Data analytics'
      ],
      popular: true
    },
    {
      name: '5G Mobile Applications',
      description: '5G-enabled mobile apps',
      projectPrice: 8000,
      category: 'Mobile Apps',
      features: [
        'Ultra-low latency apps',
        'High-bandwidth content',
        'Real-time streaming',
        'AR/VR integration',
        'Performance optimization'
      ],
      popular: false
    },
    {
      name: '5G Private Networks',
      description: 'Enterprise 5G private networks',
      monthlyPrice: 20000,
      yearlyPrice: 200000,
      category: 'Private Networks',
      features: [
        'Dedicated infrastructure',
        'Enhanced security',
        'Custom network slicing',
        'Edge computing integration',
        '24/7 support'
      ],
      popular: true
    }
  ];

  const pricingTabs = [
    { id: 'micro-saas', label: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'it-services', label: 'IT Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'ai-services', label: 'AI Services', icon: <Brain className="w-5 h-5" /> },
    { id: '5g-solutions', label: '5G Solutions', icon: <Globe className="w-5 h-5" /> }
  ];

  const getCurrentPricing = () => {
    switch (selectedTab) {
      case 'micro-saas':
        return microSAASPricing;
      case 'it-services':
        return itServicesPricing;
      case 'ai-services':
        return aiServicesPricing;
      case '5g-solutions':
        return fiveGServicesPricing;
      default:
        return microSAASPricing;
    }
  };

  const formatPrice = (price: number, isProject = false) => {
    if (isProject) {
      return `$${price.toLocaleString()}`;
    }
    return billingCycle === 'monthly' 
      ? `$${price.toLocaleString()}/month`
      : `$${price.toLocaleString()}/year`;
  };

  const getSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { savings, percentage };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Pricing - Zion Tech Group | Transparent Pricing for AI, IT, Micro SAAS & 5G Solutions"
        description="Transparent pricing for all our services. Choose from micro SAAS solutions, IT services, AI services, and 5G solutions. Flexible plans for businesses of all sizes."
        keywords="pricing, micro SAAS pricing, IT services pricing, AI services pricing, 5G solutions pricing, business software pricing"
        canonical="https://ziontechgroup.com/pricing"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Pricing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Choose the perfect plan for your business needs. Transparent pricing with no hidden fees. 
            Start with a free trial and scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white/10 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Save up to 20%
                </span>
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {pricingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="gap-8">
            {getCurrentPricing().map((service, index) => (
              <FuturisticCard
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    {service.projectPrice ? (
                      <div className="text-3xl font-bold text-cyan-400">
                        {formatPrice(service.projectPrice, true)}
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">
                          {formatPrice(service.monthlyPrice)}
                        </div>
                        {billingCycle === 'yearly' && service.yearlyPrice && (
                          <div className="text-sm text-green-400 mt-1">
                            Save ${getSavings(service.monthlyPrice, service.yearlyPrice).savings.toLocaleString()} ({getSavings(service.monthlyPrice, service.yearlyPrice).percentage}% off)
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant={service.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need a custom solution? We offer tailored enterprise packages with dedicated support, 
              custom integrations, and flexible pricing.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FuturisticCard className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Enterprise Package</h3>
                <p className="text-gray-300 mb-6">
                  Get a personalized solution tailored to your specific needs with dedicated support, 
                  custom integrations, and flexible pricing options.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Dedicated Support</h4>
                    <p className="text-gray-300 text-sm">24/7 dedicated support team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Custom Integrations</h4>
                    <p className="text-gray-300 text-sm">Tailored integrations for your systems</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Flexible Pricing</h4>
                    <p className="text-gray-300 text-sm">Custom pricing based on your needs</p>
                  </div>
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Contact Sales
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </div>
        </ResponsiveContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our pricing? Here are some common questions and answers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Do you offer free trials?",
                answer: "Yes! Most of our services offer free trials ranging from 14-30 days. This allows you to test our solutions before committing to a paid plan."
              },
              {
                question: "Can I change my plan anytime?",
                answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for most services. Some complex implementations may have a one-time setup fee, which will be clearly communicated upfront."
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer: "Yes! Annual billing typically saves you 10-20% compared to monthly billing. The exact discount varies by service."
              },
              {
                question: "What happens if I need to cancel?",
                answer: "You can cancel anytime with no penalties. We'll continue to provide service until the end of your current billing period."
              }
            ].map((faq, index) => (
              <FuturisticCard key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose your plan and start transforming your business today. 
            Need help deciding? Contact our sales team for a personalized recommendation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Contact Sales
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;