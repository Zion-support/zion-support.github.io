'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  BarChart3, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Bot,
  Sparkles,
  TrendingUp,
  Send,
  Eye,
  MousePointer,
  Filter,
  Settings,
  Brain,
  PieChart,
  Activity,
  MessageSquare,
  Share2,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Headphones,
  Languages,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Code,
  Database,
  Server,
  Cloud,
  Shield,
  Lock,
  Key,
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserShield,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserHeart2,
  UserStar2,
  UserShield2,
  ShoppingCart,
  Package,
  Building,
  Briefcase,
  CreditCard,
  FileSpreadsheet,
  PieChart as PieChartIcon,
  LineChart,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Plus,
  Minus,
  Search,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Move,
  Grip,
  Grid,
  List,
  Layout,
  Sidebar,
  Menu,
  X,
  MoreHorizontal,
  MoreVertical,
  Dot,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Phone as PhoneIcon,
  MapPin,
  Mail as MailIcon,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Twitch,
  Discord,
  Slack,
  Figma,
  Notion,
  Trello,
  Asana,
  Monday,
  Jira,
  Confluence,
  Airtable,
  Miro,
  Loom,
  Zoom,
  Teams,
  Google,
  Microsoft,
  Apple,
  Amazon,
  Netflix,
  Spotify,
  Adobe,
  Salesforce,
  Hubspot,
  Shopify,
  WooCommerce,
  Stripe,
  Paypal,
  Square,
  QuickBooks,
  Xero,
  FreshBooks,
  Wave,
  Mint,
  YNAB
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AICRMAssistantPage() {
  const features = [
    'AI-powered lead scoring and qualification',
    'Automated follow-up sequences',
    'Predictive analytics for sales forecasting',
    'Intelligent contact management',
    'Automated data entry and enrichment',
    'Smart email templates and responses',
    'Advanced pipeline management',
    'Real-time performance insights',
    'Integration with 200+ tools',
    'Custom workflow automation',
    'Team collaboration features',
    'Mobile-first design'
  ];

  const aiCapabilities = [
    {
      title: 'Lead Scoring',
      description: 'AI automatically scores leads based on behavior, demographics, and engagement',
      icon: <Target className="w-8 h-8 text-green-400" />,
      benefits: ['95% accuracy', 'Real-time scoring', 'Custom criteria', 'Historical analysis']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast sales, identify trends, and predict customer behavior',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      benefits: ['Sales forecasting', 'Churn prediction', 'Revenue optimization', 'Risk assessment']
    },
    {
      title: 'Automated Follow-ups',
      description: 'AI manages follow-up sequences based on customer interactions',
      icon: <RefreshCw className="w-8 h-8 text-purple-400" />,
      benefits: ['Personalized timing', 'Multi-channel approach', 'A/B testing', 'Performance tracking']
    },
    {
      title: 'Data Enrichment',
      description: 'Automatically enrich contact data with social profiles and company info',
      icon: <Database className="w-8 h-8 text-orange-400" />,
      benefits: ['Real-time updates', 'Social profiles', 'Company data', 'Contact verification']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        '1,000 contacts',
        'Basic AI features',
        'Email integration',
        'Mobile app',
        'Basic reporting',
        'Email support',
        '5 users included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 contacts',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'API access',
        'Priority support',
        'Team collaboration (15 users)',
        'Custom integrations',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'White-label solution',
        'Custom development',
        'Dedicated account manager',
        'Advanced security',
        'Compliance features',
        'Unlimited users',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '75,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '95%', label: 'Lead Scoring Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '40%', label: 'Sales Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '60%', label: 'Time Saved', icon: <Clock className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', description: 'Native integration' },
    { name: 'HubSpot', icon: '🟠', description: 'Seamless sync' },
    { name: 'Gmail', icon: '📧', description: 'Email management' },
    { name: 'Outlook', icon: '📮', description: 'Microsoft integration' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'Zoom', icon: '🔵', description: 'Meeting integration' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'Zapier', icon: '⚡', description: '200+ app connections' }
  ];

  return (
    <>
      <Helmet>
        <title>AI CRM Assistant - Zion Tech Group | Intelligent Customer Relationship Management</title>
        <meta name="description" content="Transform your sales process with AI-powered CRM. Automated lead scoring, predictive analytics, and intelligent follow-ups. Increase sales by 40%. Starting at $59/month." />
        <meta name="keywords" content="ai crm, customer relationship management, lead scoring, sales automation, predictive analytics, crm software" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-crm-assistant" />
      </Helmet>

      <FuturisticBackground variant="service">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  AI CRM Assistant
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your sales process with AI-powered customer relationship management. 
                Automate lead scoring, predict customer behavior, and increase sales by 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <FuturisticCard key={index} variant="stat" className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </FuturisticCard>
              ))}
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Powerful AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} variant="feature">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Advanced AI Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aiCapabilities.map((capability, index) => (
                  <FuturisticCard key={index} variant="capability">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                        <p className="text-gray-300 mb-4">{capability.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {capability.benefits.map((benefit, benefitIndex) => (
                            <span key={benefitIndex} className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Seamless Integrations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {integrations.map((integration, index) => (
                  <FuturisticCard key={index} variant="integration" className="text-center">
                    <div className="text-4xl mb-3">{integration.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                    <p className="text-sm text-gray-400">{integration.description}</p>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard 
                    key={index} 
                    variant={plan.popular ? "pricing-popular" : "pricing"} 
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton
                      variant={plan.popular ? "primary" : "secondary"}
                      size="lg"
                      className="w-full"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 75,000+ sales professionals using AI to close more deals, score leads accurately, 
                and predict customer behavior. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}