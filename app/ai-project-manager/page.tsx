'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FolderOpen, 
  Target, 
  BarChart3, 
  Users, 
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
  YNAB,
  Kanban,
  Gantt,
  Timeline,
  Milestone,
  Flag,
  AlertTriangle,
  Zap,
  Lightbulb,
  Rocket,
  Award,
  Trophy,
  Medal,
  Crown,
  Diamond,
  Gem
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AIProjectManagerPage() {
  const features = [
    'AI-powered project planning and scheduling',
    'Intelligent resource allocation and optimization',
    'Automated risk assessment and mitigation',
    'Smart task prioritization and assignment',
    'Real-time progress tracking and analytics',
    'Predictive project completion forecasting',
    'Automated status reports and updates',
    'Team collaboration and communication tools',
    'Integration with 100+ project tools',
    'Custom workflow automation',
    'Advanced reporting and insights',
    'Mobile-first design for remote teams'
  ];

  const aiCapabilities = [
    {
      title: 'Smart Scheduling',
      description: 'AI automatically creates optimal project timelines based on team capacity and dependencies',
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      benefits: ['Auto-scheduling', 'Dependency mapping', 'Resource optimization', 'Conflict resolution']
    },
    {
      title: 'Risk Prediction',
      description: 'Identify potential project risks before they become problems',
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      benefits: ['Early warning system', 'Risk scoring', 'Mitigation suggestions', 'Historical analysis']
    },
    {
      title: 'Resource Optimization',
      description: 'AI ensures optimal team allocation and workload distribution',
      icon: <Users className="w-8 h-8 text-green-400" />,
      benefits: ['Workload balancing', 'Skill matching', 'Capacity planning', 'Burnout prevention']
    },
    {
      title: 'Progress Forecasting',
      description: 'Predict project completion dates with high accuracy',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      benefits: ['Completion prediction', 'Bottleneck identification', 'Timeline adjustments', 'Stakeholder updates']
    }
  ];

  const projectTemplates = [
    {
      title: 'Software Development',
      description: 'Complete agile development workflow with sprints, reviews, and deployments',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      phases: ['Planning', 'Development', 'Testing', 'Deployment', 'Maintenance']
    },
    {
      title: 'Marketing Campaign',
      description: 'End-to-end marketing campaign management from strategy to execution',
      icon: <Target className="w-8 h-8 text-green-400" />,
      phases: ['Strategy', 'Content Creation', 'Launch', 'Analysis', 'Optimization']
    },
    {
      title: 'Product Launch',
      description: 'Comprehensive product launch workflow with cross-functional teams',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      phases: ['Research', 'Development', 'Testing', 'Marketing', 'Launch']
    },
    {
      title: 'Event Planning',
      description: 'Complete event management from conception to execution',
      icon: <Calendar className="w-8 h-8 text-orange-400" />,
      phases: ['Planning', 'Vendor Management', 'Promotion', 'Execution', 'Follow-up']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and freelancers',
      features: [
        '5 projects',
        '10 team members',
        'Basic AI features',
        'Gantt charts',
        'Task management',
        'Mobile app',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI features',
        'Resource management',
        'Time tracking',
        'Advanced reporting',
        'API access',
        'Priority support',
        'Custom workflows',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Advanced AI suite',
        'White-label solution',
        'Custom development',
        'Dedicated account manager',
        'Advanced security',
        'Compliance features',
        '24/7 phone support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Projects', icon: <FolderOpen className="w-6 h-6" /> },
    { number: '95%', label: 'On-Time Delivery', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '40%', label: 'Efficiency Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '200,000+', label: 'Team Members', icon: <Users className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '🔷', description: 'Video conferencing' },
    { name: 'Jira', icon: '🎯', description: 'Issue tracking' },
    { name: 'GitHub', icon: '🐙', description: 'Code management' },
    { name: 'Figma', icon: '🎨', description: 'Design collaboration' },
    { name: 'Google Drive', icon: '📁', description: 'File storage' },
    { name: 'Trello', icon: '📋', description: 'Task management' },
    { name: 'Zapier', icon: '⚡', description: '100+ app connections' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Manager - Zion Tech Group | Intelligent Project Management Software</title>
        <meta name="description" content="Transform your project management with AI-powered planning, scheduling, and resource optimization. Increase efficiency by 40% and deliver 95% on-time. Starting at $29/month." />
        <meta name="keywords" content="ai project management, project planning, team collaboration, resource management, project tracking, agile project management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-project-manager" />
      </Helmet>

      <FuturisticBackground variant="service">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <FolderOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  AI Project Manager
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your project management with AI-powered planning, scheduling, and resource optimization. 
                Increase efficiency by 40% and deliver 95% of projects on time.
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
                            <span key={benefitIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
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

            {/* Project Templates */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Pre-Built Project Templates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectTemplates.map((template, index) => (
                  <FuturisticCard key={index} variant="template">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {template.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">{template.title}</h3>
                        <p className="text-gray-300 mb-4">{template.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {template.phases.map((phase, phaseIndex) => (
                            <span key={phaseIndex} className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full">
                              {phase}
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
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 50,000+ project managers using AI to plan, execute, and deliver projects successfully. 
                Start your free trial today and experience the future of project management.
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