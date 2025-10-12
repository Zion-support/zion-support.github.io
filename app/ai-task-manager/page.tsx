'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
  Star,
  Calendar,
  Target,
  TrendingUp,
  Smartphone,
  Globe,
  Lock,
  Brain,
  Cpu,
  Database,
  MessageSquare,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  Plus,
  Play,
  Pause,
  RotateCcw,
  Download,
  Upload,
  Share2,
  Eye,
  Edit,
  Trash2,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Copy,
  Move,
  Link as LinkIcon,
  ExternalLink,
  ChevronRight,
  Check,
  X,
  AlertCircle,
  Info,
  HelpCircle,
  Lightbulb,
  Rocket,
  Award,
  Gift,
  Heart,
  ThumbsUp,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  Globe as GlobeIcon,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Wifi2,
  Wifi3,
  Wifi4,
  Wifi5,
  Wifi6,
  Wifi7,
  Wifi8,
  Wifi9,
  Wifi10,
  Wifi11,
  Wifi12,
  Wifi13,
  Wifi14,
  Wifi15,
  Wifi16,
  Wifi17,
  Wifi18,
  Wifi19,
  Wifi20,
  Wifi21,
  Wifi22,
  Wifi23,
  Wifi24,
  Wifi25,
  Wifi26,
  Wifi27,
  Wifi28,
  Wifi29,
  Wifi30,
  Wifi31,
  Wifi32,
  Wifi33,
  Wifi34,
  Wifi35,
  Wifi36,
  Wifi37,
  Wifi38,
  Wifi39,
  Wifi40,
  Wifi41,
  Wifi42,
  Wifi43,
  Wifi44,
  Wifi45,
  Wifi46,
  Wifi47,
  Wifi48,
  Wifi49,
  Wifi50,
  Wifi51,
  Wifi52,
  Wifi53,
  Wifi54,
  Wifi55,
  Wifi56,
  Wifi57,
  Wifi58,
  Wifi59,
  Wifi60,
  Wifi61,
  Wifi62,
  Wifi63,
  Wifi64,
  Wifi65,
  Wifi66,
  Wifi67,
  Wifi68,
  Wifi69,
  Wifi70,
  Wifi71,
  Wifi72,
  Wifi73,
  Wifi74,
  Wifi75,
  Wifi76,
  Wifi77,
  Wifi78,
  Wifi79,
  Wifi80,
  Wifi81,
  Wifi82,
  Wifi83,
  Wifi84,
  Wifi85,
  Wifi86,
  Wifi87,
  Wifi88,
  Wifi89,
  Wifi90,
  Wifi91,
  Wifi92,
  Wifi93,
  Wifi94,
  Wifi95,
  Wifi96,
  Wifi97,
  Wifi98,
  Wifi99,
  Wifi100
} from 'lucide-react';

export default function AITaskManagerPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Prioritization',
      description: 'Smart algorithms automatically prioritize tasks based on deadlines, importance, and your work patterns.',
      benefits: ['Saves 2+ hours daily', 'Reduces decision fatigue', 'Improves focus']
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: 'Intelligent Scheduling',
      description: 'Automatically schedules tasks based on your availability, energy levels, and optimal work times.',
      benefits: ['Perfect time slots', 'Energy optimization', 'No conflicts']
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Team Collaboration',
      description: 'Seamless team coordination with real-time updates, shared workspaces, and collaborative planning.',
      benefits: ['Real-time sync', 'Shared workspaces', 'Team insights']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: 'Productivity Analytics',
      description: 'Detailed insights into your productivity patterns, time allocation, and performance metrics.',
      benefits: ['Performance tracking', 'Time analysis', 'Improvement suggestions']
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks, set up smart workflows, and let AI handle routine work.',
      benefits: ['Workflow automation', 'Smart reminders', 'Auto-categorization']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SSO integration, and compliance features.',
      benefits: ['End-to-end encryption', 'SSO integration', 'GDPR compliant']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 projects',
        'AI task prioritization',
        'Basic scheduling',
        'Mobile app access',
        'Email support',
        '5GB storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Unlimited projects',
        'Advanced AI features',
        'Team collaboration',
        'Productivity analytics',
        'Priority support',
        '50GB storage',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Advanced security',
        'SSO integration',
        'Custom AI training',
        'Dedicated support',
        'Unlimited storage',
        'White-label options',
        'Custom deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechFlow Inc.',
      content: 'AI Task Manager Pro has revolutionized how our team works. The AI prioritization alone saves us 3+ hours every day.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The intelligent scheduling feature is a game-changer. It automatically finds the perfect time slots for our most important work.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Operations Director',
      company: 'GlobalCorp',
      content: 'The productivity analytics helped us identify bottlenecks and improve our team efficiency by 40%.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '2.5M+', label: 'Tasks Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '40%', label: 'Productivity Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Task Manager Pro - Intelligent Task Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered task management with smart prioritization, intelligent scheduling, and team collaboration. Boost productivity by 40% with AI Task Manager Pro." />
        <meta name="keywords" content="AI task management, productivity software, team collaboration, smart scheduling, task prioritization, project management, AI automation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-task-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Productivity
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Task Manager Pro
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your productivity with intelligent task management. Let AI prioritize, schedule, and optimize your work for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for Modern Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage tasks intelligently and boost team productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your team. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
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

                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Loved by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Task Manager Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Productivity?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of teams already using AI Task Manager Pro to boost their productivity and achieve more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
              <p className="text-white/80 text-sm mt-6">
                ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}