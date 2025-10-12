'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Calendar, 
  Clock, 
  Zap, 
  Brain, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Globe,
  Smartphone,
  BarChart3,
  Lock,
  Cpu,
  Wifi,
  Bell,
  Target,
  FileText,
  Download,
  Share,
  Settings,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  AlertCircle
} from 'lucide-react'

export default function AISmartCalendarPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Scheduling Assistant',
      description: 'Intelligent scheduling that learns your preferences and optimizes your time'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Smart Automation',
      description: 'Automatically schedule meetings, send reminders, and manage conflicts'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Privacy Protected',
      description: 'Your calendar data is encrypted and never shared without permission'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Platform Sync',
      description: 'Seamlessly sync across all your devices and calendar platforms'
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$12',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Basic AI scheduling',
        '5 calendar integrations',
        'Email reminders',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        'Advanced AI features',
        '15 calendar integrations',
        'Smart notifications',
        'Priority support',
        'Team collaboration',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79',
      period: '/month',
      description: 'For large teams',
      features: [
        'Full AI automation',
        'Unlimited integrations',
        'Custom AI training',
        '24/7 support',
        'White-label solution',
        'API access',
        'Advanced security',
        'Custom workflows'
      ],
      popular: false
    }
  ]

  const capabilities = [
    {
      title: 'Smart Scheduling',
      description: 'AI automatically finds the best meeting times for all participants',
      icon: <Calendar className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Conflict Resolution',
      description: 'Intelligently resolve scheduling conflicts and suggest alternatives',
      icon: <AlertCircle className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Time Optimization',
      description: 'Analyze your patterns to optimize your schedule for maximum productivity',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Smart Reminders',
      description: 'Context-aware reminders that adapt to your schedule and preferences',
      icon: <Bell className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Calendar - Zion Tech Group</title>
        <meta name="description" content="AI-powered smart calendar that intelligently schedules meetings, manages conflicts, and optimizes your time. Experience the future of calendar management." />
        <meta name="keywords" content="AI smart calendar, intelligent scheduling, calendar automation, meeting scheduler, time management, productivity calendar" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Smart
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Calendar
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your time management with our AI-powered smart calendar. 
            Intelligent scheduling, conflict resolution, and productivity optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://ziontechgroup.com/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Calendar Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of calendar management with our AI-powered technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI smart calendar can transform your productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {capability.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{capability.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start optimizing your time today with our flexible pricing options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/50' : 'border-white/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Time?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Contact us today to learn more about our AI smart calendar solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-6 text-white/80">
                <p className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
