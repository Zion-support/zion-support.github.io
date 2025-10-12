import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, MessageCircle, DollarSign, Users, Clock, Star, Zap, Target, BarChart3, FileText, Calendar, CreditCard, Lock, TrendingUp, Settings, Mail, Camera, Music, Palette, BookOpen, Heart, ShoppingCart, Home, Car, Plane, Gamepad2, GraduationCap, Briefcase, Wrench, Lightbulb, Cpu, Wifi, Cloud, Server, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    { id: 'All', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'Productivity', name: 'Productivity', icon: <Zap className="w-5 h-5" /> },
    { id: 'Finance', name: 'Finance', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'Security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'Business', name: 'Business', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'Health', name: 'Health', icon: <Heart className="w-5 h-5" /> },
    { id: 'Creative', name: 'Creative', icon: <Palette className="w-5 h-5" /> },
    { id: 'Education', name: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'Lifestyle', name: 'Lifestyle', icon: <Home className="w-5 h-5" /> }
  ]

  const microSaasServices = [
    // Productivity Tools
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration',
        'Time tracking',
        'Goal setting'
      ],
      pricing: '$19/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity',
      users: '2,500+',
      rating: '4.9',
      savings: 'Save 3 hours daily'
    },
    {
      icon: <Calendar className="w-12 h-12 text-purple-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: [
        'AI meeting scheduling',
        'Time blocking',
        'Meeting optimization',
        'Calendar analytics',
        'Integration with tools',
        'Smart notifications',
        'Conflict resolution',
        'Recurring events'
      ],
      pricing: '$14/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity',
      users: '1,800+',
      rating: '4.8',
      savings: 'Optimize 40% more meetings'
    },
    {
      icon: <FileText className="w-12 h-12 text-green-500" />,
      title: 'AI Document Assistant',
      description: 'Smart document creation, editing, and management with AI-powered suggestions and templates.',
      features: [
        'AI writing assistance',
        'Document templates',
        'Auto-formatting',
        'Collaboration tools',
        'Version control',
        'Search & indexing',
        'Export options',
        'Cloud sync'
      ],
      pricing: '$22/month',
      popular: true,
      link: '/ai-document-assistant',
      category: 'Productivity',
      users: '3,200+',
      rating: '4.7',
      savings: 'Create documents 5x faster'
    },

    // Finance Tools
    {
      icon: <CreditCard className="w-12 h-12 text-emerald-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Budget alerts',
        'Tax preparation',
        'Expense reports',
        'Multi-currency support',
        'Bank integration',
        'Investment tracking'
      ],
      pricing: '$15/month',
      popular: true,
      link: '/ai-expense-tracker',
      category: 'Finance',
      users: '4,100+',
      rating: '4.9',
      savings: 'Save 2 hours weekly on bookkeeping'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      title: 'AI Investment Advisor',
      description: 'Personalized investment recommendations and portfolio management with AI analysis.',
      features: [
        'Portfolio analysis',
        'Risk assessment',
        'Investment recommendations',
        'Market insights',
        'Goal tracking',
        'Rebalancing alerts',
        'Tax optimization',
        'Performance reports'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-investment-advisor',
      category: 'Finance',
      users: '1,200+',
      rating: '4.6',
      savings: 'Increase returns by 15-25%'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-cyan-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budgeting with AI insights, spending predictions, and financial goal tracking.',
      features: [
        'Smart budgeting',
        'Spending predictions',
        'Goal tracking',
        'Bill reminders',
        'Savings optimization',
        'Financial forecasting',
        'Debt management',
        'Credit monitoring'
      ],
      pricing: '$12/month',
      popular: false,
      link: '/ai-budget-planner',
      category: 'Finance',
      users: '2,800+',
      rating: '4.8',
      savings: 'Save 20% more monthly'
    },

    // Security Tools
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication',
        'Dark web monitoring',
        'Family sharing'
      ],
      pricing: '$12/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security',
      users: '5,500+',
      rating: '4.9',
      savings: 'Prevent 99% of security breaches'
    },
    {
      icon: <Lock className="w-12 h-12 text-indigo-500" />,
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring with AI threat detection and automated response.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Automated responses',
        'Security reports',
        'Compliance tracking',
        'Incident management',
        'Security training',
        'Risk assessment'
      ],
      pricing: '$29/month',
      popular: false,
      link: '/ai-security-monitor',
      category: 'Security',
      users: '1,100+',
      rating: '4.7',
      savings: 'Reduce security incidents by 80%'
    },

    // Business Tools
    {
      icon: <Code className="w-12 h-12 text-yellow-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, client management, and payment tracking.',
      features: [
        'AI template suggestions',
        'Client management',
        'Payment tracking',
        'Tax calculations',
        'Multi-language support',
        'PDF generation',
        'Recurring invoices',
        'Payment reminders'
      ],
      pricing: '$18/month',
      popular: true,
      link: '/ai-invoice-generator',
      category: 'Business',
      users: '3,700+',
      rating: '4.8',
      savings: 'Create invoices 10x faster'
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: 'AI CRM Assistant',
      description: 'Smart customer relationship management with AI insights and automated follow-ups.',
      features: [
        'Lead scoring',
        'Automated follow-ups',
        'Customer insights',
        'Sales forecasting',
        'Email templates',
        'Pipeline management',
        'Performance analytics',
        'Integration tools'
      ],
      pricing: '$35/month',
      popular: false,
      link: '/ai-crm-assistant',
      category: 'Business',
      users: '2,200+',
      rating: '4.6',
      savings: 'Increase sales by 30%'
    },
    {
      icon: <Target className="w-12 h-12 text-teal-500" />,
      title: 'AI Lead Generator',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: [
        'Lead discovery',
        'Qualification scoring',
        'CRM integration',
        'Follow-up automation',
        'Contact enrichment',
        'Email sequences',
        'Lead nurturing',
        'Conversion tracking'
      ],
      pricing: '$45/month',
      popular: true,
      link: '/ai-lead-generator',
      category: 'Business',
      users: '1,900+',
      rating: '4.7',
      savings: 'Generate 5x more qualified leads'
    },

    // Health Tools
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: [
        'Symptom tracking',
        'AI health insights',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor visit scheduling',
        'Health data export',
        'Fitness integration',
        'Nutrition tracking'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health',
      users: '2,100+',
      rating: '4.8',
      savings: 'Improve health outcomes by 40%'
    },
    {
      icon: <Activity className="w-12 h-12 text-green-500" />,
      title: 'AI Fitness Coach',
      description: 'Personalized fitness training with AI workout plans, nutrition guidance, and progress tracking.',
      features: [
        'Personalized workouts',
        'Nutrition planning',
        'Progress tracking',
        'Form analysis',
        'Goal setting',
        'Injury prevention',
        'Recovery planning',
        'Community features'
      ],
      pricing: '$24/month',
      popular: true,
      link: '/ai-fitness-coach',
      category: 'Health',
      users: '3,500+',
      rating: '4.9',
      savings: 'Achieve fitness goals 2x faster'
    },

    // Creative Tools
    {
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      title: 'AI Design Studio',
      description: 'AI-powered design tool for creating logos, graphics, and marketing materials.',
      features: [
        'Logo generation',
        'Graphic design',
        'Brand guidelines',
        'Template library',
        'Color palette suggestions',
        'Font recommendations',
        'Export options',
        'Collaboration tools'
      ],
      pricing: '$28/month',
      popular: true,
      link: '/ai-design-studio',
      category: 'Creative',
      users: '2,800+',
      rating: '4.7',
      savings: 'Create designs 8x faster'
    },
    {
      icon: <Camera className="w-12 h-12 text-blue-500" />,
      title: 'AI Photo Editor',
      description: 'Advanced photo editing with AI-powered enhancements and automated retouching.',
      features: [
        'AI photo enhancement',
        'Background removal',
        'Object detection',
        'Color correction',
        'Batch processing',
        'Filter library',
        'Cloud storage',
        'Mobile app'
      ],
      pricing: '$20/month',
      popular: false,
      link: '/ai-photo-editor',
      category: 'Creative',
      users: '4,200+',
      rating: '4.8',
      savings: 'Edit photos 10x faster'
    },

    // Education Tools
    {
      icon: <GraduationCap className="w-12 h-12 text-indigo-500" />,
      title: 'AI Learning Assistant',
      description: 'Personalized learning platform with AI tutoring, progress tracking, and study recommendations.',
      features: [
        'Personalized learning paths',
        'AI tutoring',
        'Progress tracking',
        'Study recommendations',
        'Quiz generation',
        'Note organization',
        'Flashcard creation',
        'Performance analytics'
      ],
      pricing: '$25/month',
      popular: true,
      link: '/ai-learning-assistant',
      category: 'Education',
      users: '3,100+',
      rating: '4.9',
      savings: 'Learn 3x faster with AI tutoring'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-amber-500" />,
      title: 'AI Study Planner',
      description: 'Smart study planning with AI scheduling, resource recommendations, and exam preparation.',
      features: [
        'Study scheduling',
        'Resource recommendations',
        'Exam preparation',
        'Progress tracking',
        'Goal setting',
        'Reminder system',
        'Study groups',
        'Performance reports'
      ],
      pricing: '$18/month',
      popular: false,
      link: '/ai-study-planner',
      category: 'Education',
      users: '2,400+',
      rating: '4.6',
      savings: 'Improve grades by 25%'
    },

    // Lifestyle Tools
    {
      icon: <Home className="w-12 h-12 text-emerald-500" />,
      title: 'AI Home Manager',
      description: 'Smart home management with AI automation, energy optimization, and maintenance scheduling.',
      features: [
        'Smart home automation',
        'Energy optimization',
        'Maintenance scheduling',
        'Security monitoring',
        'Climate control',
        'Appliance management',
        'Cost tracking',
        'Mobile control'
      ],
      pricing: '$32/month',
      popular: false,
      link: '/ai-home-manager',
      category: 'Lifestyle',
      users: '1,600+',
      rating: '4.7',
      savings: 'Reduce energy costs by 30%'
    },
    {
      icon: <Car className="w-12 h-12 text-slate-500" />,
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with AI recommendations, booking assistance, and itinerary optimization.',
      features: [
        'Trip planning',
        'Booking assistance',
        'Itinerary optimization',
        'Budget tracking',
        'Weather updates',
        'Local recommendations',
        'Travel alerts',
        'Expense tracking'
      ],
      pricing: '$26/month',
      popular: true,
      link: '/ai-travel-planner',
      category: 'Lifestyle',
      users: '2,900+',
      rating: '4.8',
      savings: 'Save 40% on travel costs'
    }
  ]

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory)

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Solutions',
      description: 'Get powerful AI-powered tools at fraction of the cost of enterprise solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Setup',
      description: 'Quick and easy setup with no technical expertise required.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable',
      description: 'Start small and scale up as your business grows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features added regularly.'
    }
  ]

  const pricing = [
    {
      plan: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['1 AI tool', 'Basic support', 'Standard features', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['3 AI tools', 'Priority support', 'Advanced features', 'Phone & email support'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['All AI tools', '24/7 support', 'Custom features', 'Dedicated account manager'],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead
        title="Micro SaaS Services - Zion Tech Group"
        description="Discover our collection of AI-powered micro SaaS tools designed to boost productivity and streamline business operations. Affordable, powerful, and easy to use."
        keywords="micro SaaS, AI tools, productivity, business automation, Zion Tech Group"
        canonical="/micro-saas-services"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Powerful Micro SaaS
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tools
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of AI-powered micro SaaS tools designed to boost productivity, 
            streamline operations, and help you work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="#tools"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully crafted collection of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {tool.icon}
                  {tool.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {tool.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {tool.features.length > 4 && (
                      <li className="text-gray-400 text-xs">
                        +{tool.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                    </div>
                    <div className="text-gray-400 text-xs">{tool.users} users</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg text-sm font-medium">
                    💰 {tool.savings}
                  </div>
                </div>

                <Link
                  to={tool.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Try Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We make powerful AI technology accessible and affordable for everyone
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features and 24/7 support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-purple-500' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of professionals who are already using our AI-powered tools to work smarter and achieve more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
