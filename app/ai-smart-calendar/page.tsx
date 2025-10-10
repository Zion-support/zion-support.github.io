<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const aismartcalendarPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Smart Calendar | Zion Tech Group</title>
        <meta name="description" content="Professional ai smart calendar services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai smart calendar, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Smart Calendar
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ai smart calendar services powered by advanced AI and cutting-edge technology.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <div>
                <a 
                  href="/" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aismartcalendarPage;
=======
'use client';
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield, 
  Globe, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin, 
  BarChart, 
  Settings, 
  Bell, 
  Target, 
  TrendingUp, 
  Award,
  MessageSquare,
  Video,
  FileText,
  Database,
  Lock,
  Cloud,
  Cpu,
  Wifi,
  Battery,
  Wrench,
  RefreshCw,
  Play,
  Pause,
  Square,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Share2,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Eye,
  EyeOff,
  Heart,
  Bookmark,
  Flag,
  Tag,
  Link,
  Copy,
  ExternalLink,
  Info,
  AlertTriangle,
  Check,
  XCircle,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  Rocket,
  Target as TargetIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  Bell as BellIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  MessageSquare as MessageSquareIcon,
  Video as VideoIcon,
  FileText as FileTextIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  Cloud as CloudIcon,
  Cpu as CpuIcon,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  Wrench as WrenchIcon,
  RefreshCw as RefreshCwIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Square as SquareIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Camera as CameraIcon,
  CameraOff as CameraOffIcon,
  Share2 as Share2Icon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Heart as HeartIcon,
  Bookmark as BookmarkIcon,
  Flag as FlagIcon,
  Tag as TagIcon,
  Link as LinkIcon,
  Copy as CopyIcon,
  ExternalLink as ExternalLinkIcon,
  Info as InfoIcon,
  AlertTriangle as AlertTriangleIcon,
  Check as CheckIcon,
  XCircle as XCircleIcon,
  AlertCircle as AlertCircleIcon,
  HelpCircle as HelpCircleIcon,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon
} from 'lucide-react';

const AISmartCalendarPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      category: 'Smart Scheduling',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      items: [
        'AI-powered meeting optimization',
        'Automatic conflict resolution',
        'Smart time blocking',
        'Energy level-based scheduling',
        'Focus time protection',
        'Meeting duration optimization'
      ]
    },
    {
      category: 'Intelligent Automation',
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      items: [
        'Auto-schedule recurring meetings',
        'Smart meeting rescheduling',
        'Automatic time zone handling',
        'Deadline tracking and alerts',
        'Workload balancing',
        'Priority-based scheduling'
      ]
    },
    {
      category: 'Advanced Analytics',
      icon: BarChart,
      color: 'from-green-500 to-emerald-600',
      items: [
        'Productivity insights',
        'Time usage analytics',
        'Meeting effectiveness metrics',
        'Energy pattern analysis',
        'ROI tracking for meetings',
        'Custom reporting dashboard'
      ]
    },
    {
      category: 'Team Collaboration',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      items: [
        'Team availability sync',
        'Collaborative scheduling',
        'Meeting room optimization',
        'Resource booking management',
        'Team performance insights',
        'Cross-team coordination'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 calendars',
        'Basic AI scheduling',
        'Email integration',
        'Mobile app access',
        'Basic analytics',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$89',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited calendars',
        'Advanced AI scheduling',
        'Full integrations suite',
        'Team collaboration tools',
        'Advanced analytics',
        'Priority support',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'Advanced security features',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const integrations = [
    { name: 'Google Calendar', icon: Calendar, status: 'Available' },
    { name: 'Microsoft Outlook', icon: Mail, status: 'Available' },
    { name: 'Apple Calendar', icon: Apple, status: 'Available' },
    { name: 'Slack', icon: MessageSquare, status: 'Available' },
    { name: 'Microsoft Teams', icon: Video, status: 'Available' },
    { name: 'Zoom', icon: Video, status: 'Available' },
    { name: 'Salesforce', icon: Database, status: 'Available' },
    { name: 'HubSpot', icon: Target, status: 'Available' },
    { name: 'Trello', icon: CheckCircle, status: 'Available' },
    { name: 'Asana', icon: Target, status: 'Available' },
    { name: 'Jira', icon: Settings, status: 'Available' },
    { name: 'Notion', icon: FileText, status: 'Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'AI Smart Calendar has transformed how we manage our time. The AI scheduling has increased our productivity by 40% and eliminated scheduling conflicts completely.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, GlobalCorp',
      company: 'GlobalCorp',
      content: 'The intelligent time blocking feature has been a game-changer. Our team is more focused and we\'ve seen a 25% improvement in meeting effectiveness.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager, InnovateLabs',
      company: 'InnovateLabs',
      content: 'The analytics dashboard gives us incredible insights into our time usage. We can now make data-driven decisions about our schedules and priorities.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users', icon: Users },
    { number: '2.5M+', label: 'Meetings Scheduled', icon: Calendar },
    { number: '40%', label: 'Productivity Increase', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white cyber-text neon-pulse">
                AI Smart Calendar Pro
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              The world's most intelligent calendar that learns your patterns, optimizes your schedule, 
              and maximizes your productivity with AI-powered automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Smart Automation</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <BarChart className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Analytics</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <VideoIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Productivity
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to take control of your time and maximize your productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mr-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.category}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
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
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with all your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <integration.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">{integration.name}</h3>
                <span className="text-green-400 text-sm">{integration.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join over 50,000 users who have revolutionized their time management with AI Smart Calendar Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <VideoIcon className="w-5 h-5 mr-2" />
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISmartCalendarPage;
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e9d9
