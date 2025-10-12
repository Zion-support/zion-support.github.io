'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Smartphone, CheckCircle, Star, Zap, Brain, Target, Clock, DollarSign, Users, Globe, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSAASServicesPage() {
  const [activeTab, setActiveTab] = useState('features')

  const microSaasApps = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, smart scheduling, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart scheduling and reminders',
        'Productivity analytics',
        'Team collaboration tools',
        'Mobile and web access',
        'Integration with popular tools'
      ],
      pricing: '$29/month',
      users: 'Up to 10 users',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense analytics and reports',
        'Receipt storage and backup',
        'Tax preparation support',
        'Multi-currency support'
      ],
      pricing: '$19/month',
      users: 'Up to 5 users',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'Secure password generation',
        'Breach monitoring and alerts',
        'Password strength analysis',
        'Secure sharing capabilities',
        'Multi-device sync',
        'Two-factor authentication'
      ],
      pricing: '$15/month',
      users: 'Up to 20 users',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and financial reporting.',
      features: [
        'AI-generated invoice templates',
        'Automated payment reminders',
        'Payment tracking and analytics',
        'Custom branding options',
        'Multi-currency support',
        'Tax calculation'
      ],
      pricing: '$25/month',
      users: 'Up to 15 users',
      link: '/ai-invoice-generator',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI Lead Generator',
      description: 'Intelligent lead generation with AI-powered prospecting, contact enrichment, and CRM integration.',
      features: [
        'AI-powered lead scoring',
        'Contact information enrichment',
        'Email sequence automation',
        'CRM integration',
        'Lead analytics and insights',
        'Social media prospecting'
      ],
      pricing: '$49/month',
      users: 'Up to 25 users',
      link: '/ai-lead-generator',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'AI Website Analyzer',
      description: 'Comprehensive website analysis with AI-powered insights, SEO recommendations, and performance optimization.',
      features: [
        'AI-powered SEO analysis',
        'Performance optimization',
        'Content quality assessment',
        'Competitor analysis',
        'Technical audit reports',
        'Actionable recommendations'
      ],
      pricing: '$39/month',
      users: 'Up to 10 websites',
      link: '/ai-website-analyzer',
      popular: false
    }
  ]

  const categories = [
    { name: 'Productivity', icon: <Zap className="w-6 h-6" />, count: 12 },
    { name: 'Finance', icon: <DollarSign className="w-6 h-6" />, count: 8 },
    { name: 'Marketing', icon: <Target className="w-6 h-6" />, count: 15 },
    { name: 'Security', icon: <Shield className="w-6 h-6" />, count: 6 },
    { name: 'Analytics', icon: <Brain className="w-6 h-6" />, count: 10 },
    { name: 'Communication', icon: <Users className="w-6 h-6" />, count: 7 }
  ]

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Access to 3 micro SAAS apps',
        'Basic AI features',
        'Email support',
        'Mobile and web access',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Access to all micro SAAS apps',
        'Advanced AI features',
        'Priority support',
        'Team collaboration tools',
        'Advanced analytics',
        'Up to 10 user accounts',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Access to all micro SAAS apps',
        'Premium AI features',
        '24/7 dedicated support',
        'Custom AI training',
        'White-label options',
        'Unlimited user accounts',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our pre-built, ready-to-use micro SAAS applications.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Access powerful AI-powered tools at a fraction of the cost of building custom solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all our micro SAAS applications.'
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: 'AI-Powered',
      description: 'Leverage advanced AI capabilities to automate tasks and gain intelligent insights.'
    }
  ]

  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager has completely transformed how I organize my work. The AI prioritization feature helps me focus on what matters most, and I\'ve increased my productivity by 50%.',
      rating: 5,
      avatar: 'AJ'
    },
    {
      name: 'Maria Garcia',
      company: 'Small Business Owner',
      content: 'The AI Expense Tracker has saved me hours every week. The receipt scanning feature is incredibly accurate, and the financial insights help me make better business decisions.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Tom Wilson',
      company: 'Marketing Agency',
      content: 'The AI Lead Generator has been a game-changer for our agency. We\'ve seen a 200% increase in qualified leads, and the automation features save us countless hours.',
      rating: 5,
      avatar: 'TW'
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Apps', icon: <Smartphone className="w-6 h-6" /> },
    { number: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Applications</title>
        <meta name="description" content="Access 50+ AI-powered micro SAAS applications for productivity, finance, marketing, and more. Affordable, secure, and ready-to-use business tools. Starting at $19/month." />
        <meta name="keywords" content="micro SAAS, business applications, AI tools, productivity apps, expense tracker, task manager, lead generator" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Access 50+ AI-powered micro SAAS applications designed to streamline your business operations. 
              Affordable, secure, and ready-to-use tools that scale with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#apps" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Apps
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">App Categories</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Browse our micro SAAS applications by category
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} apps</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Apps Section */}
      <section id="apps" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Popular Micro SAAS Apps</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Discover our most popular AI-powered business applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {microSaasApps.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">{app.pricing}</span>
                    <span className="text-gray-300 ml-1 text-sm">{app.users}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={app.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Powerful benefits that make our micro SAAS applications the perfect choice for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Pricing Plans</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the plan that best fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              See how our micro SAAS applications have helped businesses succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our AI-powered micro SAAS applications today and see the difference they can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}