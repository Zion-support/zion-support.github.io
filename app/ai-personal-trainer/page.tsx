'use client';
import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Target, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Heart,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Activity,
  Zap,
  TrendingUp,
  Calendar,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Camera,
  Video,
  Mic,
  MessageSquare,
  Share2,
  Download,
  Upload,
  Wifi,
  Battery,
  Smartphone,
  Watch,
  Headphones,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  Shield,
  Lock,
  Unlock,
  Eye,
  EyeOff,
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
  ExternalLink,
  Link,
  Copy,
  Scissors,
  FileText,
  Image,
  Music,
  Video as VideoIcon,
  File,
  Folder,
  FolderOpen,
  Archive,
  Inbox,
  Send,
  Reply,
  Forward,
  Flag,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  DollarSign,
  Percent,
  Hash as HashIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check,
  AlertTriangle,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
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
  ExternalLink as ExternalLinkIcon,
  Link as LinkIcon,
  Copy as CopyIcon,
  Scissors as ScissorsIcon,
  FileText as FileTextIcon,
  Image as ImageIcon,
  Music as MusicIcon,
  VideoIcon as VideoIconIcon,
  File as FileIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  Archive as ArchiveIcon,
  Inbox as InboxIcon,
  Send as SendIcon,
  Reply as ReplyIcon,
  Forward as ForwardIcon,
  Flag as FlagIcon,
  Bookmark as BookmarkIcon,
  Tag as TagIcon,
  Hash as HashIconIcon,
  AtSign as AtSignIcon,
  DollarSign as DollarSignIcon,
  Percent as PercentIcon
} from 'lucide-react';

const AIPersonalTrainerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Personalized Workout Plans',
      description: 'AI-generated workout routines tailored to your fitness level, goals, and preferences',
      details: [
        'Adaptive workout difficulty based on performance',
        'Exercise form analysis and corrections',
        'Progressive overload recommendations',
        'Injury prevention protocols'
      ]
    },
    {
      icon: BarChart,
      title: 'Real-time Performance Tracking',
      description: 'Monitor your progress with advanced analytics and biometric data integration',
      details: [
        'Heart rate and calorie burn tracking',
        'Rep counting and form analysis',
        'Strength progression monitoring',
        'Body composition changes'
      ]
    },
    {
      icon: Camera,
      title: 'AI Form Analysis',
      description: 'Get instant feedback on your exercise form using computer vision technology',
      details: [
        'Real-time form correction alerts',
        'Video analysis and feedback',
        'Movement pattern optimization',
        'Injury risk assessment'
      ]
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Comprehensive health tracking with integration to wearables and health apps',
      details: [
        'Resting heart rate monitoring',
        'Sleep quality analysis',
        'Recovery time recommendations',
        'Nutrition and hydration tracking'
      ]
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent workout scheduling based on your availability and recovery needs',
      details: [
        'Optimal workout timing suggestions',
        'Rest day recommendations',
        'Calendar integration',
        'Workout reminders and notifications'
      ]
    },
    {
      icon: Users,
      title: 'Virtual Training Sessions',
      description: 'Live and recorded training sessions with AI-powered personal trainers',
      details: [
        'One-on-one virtual training',
        'Group workout sessions',
        'Specialized training programs',
        'Expert trainer access'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Basic workout plans',
        'Progress tracking',
        'Form analysis (limited)',
        'Basic nutrition guidance',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: '$59',
      period: '/month',
      description: 'Most popular for serious fitness enthusiasts',
      features: [
        'Advanced AI workout plans',
        'Real-time form analysis',
        'Biometric integration',
        'Personalized nutrition plans',
        'Live training sessions (2/month)',
        'Priority support',
        'Progress analytics'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Elite',
      price: '$99',
      period: '/month',
      description: 'Premium experience with unlimited access',
      features: [
        'Unlimited AI workout plans',
        'Advanced form analysis',
        'Full biometric integration',
        'Custom nutrition coaching',
        'Unlimited live training',
        'Dedicated trainer',
        'White-label options',
        'API access'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Fitness Enthusiast',
      company: 'Personal Trainer',
      content: 'The AI form analysis is incredible! It\'s like having a personal trainer watching every rep. My technique has improved dramatically.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Chen',
      role: 'Busy Executive',
      company: 'Tech Startup',
      content: 'As someone with a crazy schedule, the smart scheduling feature is a game-changer. I never miss a workout anymore.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Sarah Johnson',
      role: 'Yoga Instructor',
      company: 'Wellness Studio',
      content: 'The personalized workout plans adapt perfectly to my changing needs. I\'ve achieved goals I never thought possible.',
      rating: 5,
      avatar: 'SJ'
    }
  ];

  const stats = [
    { number: '100,000+', label: 'Active Users', icon: Users },
    { number: '2M+', label: 'Workouts Completed', icon: Dumbbell },
    { number: '95%', label: 'Goal Achievement Rate', icon: Target },
    { number: '4.8/5', label: 'User Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Dumbbell className="w-4 h-4 mr-2" />
              AI-Powered Fitness
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Personal Trainer
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your personal AI fitness coach that adapts to your goals, tracks your progress, and provides real-time form analysis. Transform your fitness journey with intelligent, personalized training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary AI Fitness Technology
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the future of fitness with our AI-powered personal trainer that learns, adapts, and optimizes your workout experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-100 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-blue-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Fitness Plan
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Start your AI-powered fitness journey with our flexible pricing plans designed for every fitness level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-blue-100 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-blue-200 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-blue-200">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of users who have transformed their fitness with our AI personal trainer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-blue-100 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    <p className="text-blue-300 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start your AI-powered fitness journey today and achieve your goals faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <a href="tel:+13024640950" className="text-blue-300 hover:text-blue-200">
                +1 (302) 464-0950
              </a>
            </div>
            <div>
              <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <span className="text-blue-300">Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPersonalTrainerPage;
