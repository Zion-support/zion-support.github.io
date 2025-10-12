'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Heart, 
  Activity, 
  Zap, 
  Brain, 
  Shield, 
  Clock, 
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
  TrendingUp,
  Target,
  Calendar,
  Bell,
  FileText,
  Download,
  Share,
  Settings
} from 'lucide-react'

export default function AIHealthTrackerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Health Insights',
      description: 'Get personalized health recommendations based on your data patterns and medical research'
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: 'Real-time Monitoring',
      description: 'Track vital signs, activity levels, and health metrics in real-time'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Privacy First',
      description: 'Your health data is encrypted and never shared without your consent'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Progress Tracking',
      description: 'Visualize your health journey with detailed analytics and trends'
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Basic health tracking',
        'AI insights & recommendations',
        '5 health metrics',
        'Email support',
        'Mobile app access',
        'Basic reports'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$19.99',
      period: '/month',
      description: 'Ideal for families',
      features: [
        'Up to 6 family members',
        'Advanced AI features',
        '15 health metrics',
        'Priority support',
        'Family dashboard',
        'Advanced reports',
        'Health alerts'
      ],
      popular: true
    },
    {
      name: 'Professional',
      price: '$39.99',
      period: '/month',
      description: 'For healthcare providers',
      features: [
        'Unlimited patients',
        'Full AI analytics',
        'All health metrics',
        '24/7 support',
        'White-label solution',
        'API access',
        'Custom integrations',
        'HIPAA compliance'
      ],
      popular: false
    }
  ]

  const healthMetrics = [
    {
      title: 'Heart Rate',
      description: 'Continuous heart rate monitoring with AI-powered analysis',
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Sleep Quality',
      description: 'Track sleep patterns and get personalized sleep recommendations',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Activity Level',
      description: 'Monitor daily activity and exercise with smart goal setting',
      icon: <Activity className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Nutrition',
      description: 'AI-powered nutrition tracking and meal recommendations',
      icon: <Target className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Health Tracker - Zion Tech Group</title>
        <meta name="description" content="AI-powered health tracking solution that monitors your vital signs, provides personalized insights, and helps you achieve your wellness goals with intelligent recommendations." />
        <meta name="keywords" content="AI health tracker, health monitoring, fitness tracking, wellness app, health analytics, personalized health" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Health
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tracker
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take control of your health with our AI-powered tracking solution. 
            Get personalized insights, track vital signs, and achieve your wellness goals.
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
              Advanced Health Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of health monitoring with our intelligent AI technology.
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

      {/* Health Metrics Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Health Tracking
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor all aspects of your health with our comprehensive tracking system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {metric.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{metric.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{metric.description}</p>
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
              Choose Your Health Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start your health journey today with our flexible pricing options.
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
                Ready to Transform Your Health?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Contact us today to learn more about our AI health tracking solutions.
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
