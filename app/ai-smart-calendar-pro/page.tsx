'use client';
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Target, 
  Globe, 
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles,
  Activity,
  PieChart,
  LineChart,
  BarChart3,
  TrendingDown,
  AlertCircle,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Link,
  Settings,
  Bell,
  Star,
  Heart,
  MessageSquare,
  Video,
  Phone as PhoneIcon,
  MapPin as Location,
  Mail as MailIcon,
  User,
  UserPlus,
  UserMinus,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  RotateCcw,
  Play,
  Pause,
  Square,
  Circle,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle,
  Hexagon,
  Octagon
} from 'lucide-react';

const AISmartCalendarPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns your preferences and optimizes your time automatically',
      benefits: ['Smart Suggestions', 'Conflict Resolution', 'Time Optimization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team scheduling with shared calendars and meeting coordination',
      benefits: ['Shared Calendars', 'Meeting Rooms', 'Team Availability']
    },
    {
      icon: Zap,
      title: 'Automation & Integration',
      description: 'Automate repetitive tasks and integrate with your favorite productivity tools',
      benefits: ['Workflow Automation', 'Third-party Integrations', 'Custom Rules']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Detailed analytics on your time usage and productivity patterns',
      benefits: ['Time Tracking', 'Productivity Metrics', 'Custom Reports']
    }
  ];

  const pricingTiers = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        '1 calendar',
        'Basic AI scheduling',
        'Email integration',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '5 calendars',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      description: 'For growing teams',
      features: [
        'Unlimited calendars',
        'Full AI suite',
        'Advanced team features',
        '24/7 support',
        'Custom development',
        'White-label solution',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Calendar', category: 'Calendar', icon: '📅' },
    { name: 'Outlook', category: 'Email', icon: '📧' },
    { name: 'Slack', category: 'Communication', icon: '💬' },
    { name: 'Microsoft Teams', category: 'Video', icon: '📹' },
    { name: 'Zoom', category: 'Video', icon: '🎥' },
    { name: 'Salesforce', category: 'CRM', icon: '☁️' },
    { name: 'HubSpot', category: 'Marketing', icon: '🎯' },
    { name: 'Trello', category: 'Project Management', icon: '📋' },
    { name: 'Asana', category: 'Project Management', icon: '✅' },
    { name: 'Notion', category: 'Documentation', icon: '📝' },
    { name: 'Zapier', category: 'Automation', icon: '⚡' },
    { name: 'IFTTT', category: 'Automation', icon: '🔗' }
  ];

  const useCases = [
    {
      title: 'Meeting Optimization',
      description: 'Automatically find the best meeting times for all participants',
      icon: Users,
      metrics: '40% reduction in scheduling time'
    },
    {
      title: 'Time Blocking',
      description: 'Intelligent time blocking based on your work patterns',
      icon: Clock,
      metrics: '25% increase in productivity'
    },
    {
      title: 'Travel Planning',
      description: 'Smart travel scheduling with time zone management',
      icon: Globe,
      metrics: '60% fewer scheduling conflicts'
    },
    {
      title: 'Team Coordination',
      description: 'Seamless team scheduling and resource management',
      icon: Target,
      metrics: '50% better team alignment'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-blue-400 font-semibold text-lg">AI Smart Calendar Pro</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Intelligent Calendar Management
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your scheduling with AI-powered calendar management. 
              Automate scheduling, optimize time, and boost productivity with intelligent insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Team Collaboration</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Automation</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                View Demo
                <Play className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Smart Calendar Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered calendar platform combines intelligent scheduling with powerful automation 
              to help you manage time more effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-blue-400">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and services to create a unified productivity experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-600/50 transition-all duration-300 group">
                <div className="text-2xl mb-2">{integration.icon}</div>
                <div className="text-white font-medium text-sm mb-1">{integration.name}</div>
                <div className="text-gray-400 text-xs">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how professionals and teams use our smart calendar to optimize their time and productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                <div className="text-blue-400 font-bold text-lg">{useCase.metrics}</div>
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
              Simple Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core calendar features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-blue-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700' 
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Time?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Start your free trial today and discover the power of AI-driven calendar management.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-blue-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-blue-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISmartCalendarPro;