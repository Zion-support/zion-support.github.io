import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, DollarSign, Users, Clock, Shield, Star, TrendingUp, Brain, Code, BarChart3 } from 'lucide-react'

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      name: 'AI Invoice Generator',
      path: '/ai-invoice-generator',
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      description: 'Generate professional invoices instantly with AI-powered automation and smart calculations.',
      price: 'Starting at $9/month',
      features: ['Smart invoice creation', 'Automated calculations', 'Recurring billing', 'Client management'],
      popular: true
    },
    {
      name: 'AI Social Media Manager',
      path: '/ai-social-media-manager',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: 'Automate your social media presence with AI-powered content creation and scheduling.',
      price: 'Starting at $19/month',
      features: ['Multi-platform management', 'AI content creation', 'Smart scheduling', 'Analytics & insights'],
      popular: true
    },
    {
      name: 'AI Project Management',
      path: '/ai-project-management',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      description: 'Streamline projects with AI-powered scheduling, team collaboration, and predictive analytics.',
      price: 'Starting at $15/month',
      features: ['Smart scheduling', 'Team collaboration', 'Predictive analytics', 'Goal tracking'],
      popular: false
    },
    {
      name: 'AI Email Marketing Automation',
      path: '/ai-email-marketing-automation',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      description: 'Automate email marketing with AI-powered content creation and behavioral targeting.',
      price: 'Starting at $29/month',
      features: ['AI email creation', 'Smart automation', 'Audience segmentation', 'Personalization'],
      popular: true
    },
    {
      name: 'AI Content Generator',
      path: '/ai-content-generator',
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      description: 'Create high-quality content in seconds with our advanced AI-powered content generator.',
      price: 'Starting at $12/month',
      features: ['Multi-format content', 'SEO optimization', 'Brand voice consistency', '24/7 availability'],
      popular: false
    },
    {
      name: 'AI CRM Assistant',
      path: '/ai-crm-assistant',
      icon: <Users className="w-8 h-8 text-red-500" />,
      description: 'Enhance your CRM with AI-powered insights, automation, and customer relationship management.',
      price: 'Starting at $25/month',
      features: ['AI insights', 'Automated workflows', 'Customer segmentation', 'Predictive analytics'],
      popular: false
    },
    {
      name: 'AI Task Manager',
      path: '/ai-task-manager',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      description: 'Organize and prioritize tasks with AI-powered task management and productivity tools.',
      price: 'Starting at $8/month',
      features: ['Smart prioritization', 'AI suggestions', 'Time tracking', 'Team collaboration'],
      popular: false
    },
    {
      name: 'AI Analytics Dashboard',
      path: '/ai-analytics-dashboard',
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      price: 'Starting at $35/month',
      features: ['Real-time analytics', 'AI insights', 'Custom dashboards', 'Predictive modeling'],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our intuitive setup process and pre-built templates.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Bank-level security with 99.9% uptime guarantee and regular backups.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to help you succeed.'
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS services. From invoice generation to social media management, we have tools for every business need." />
        <meta name="keywords" content="micro SAAS, AI tools, business automation, productivity software, small business tools" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful AI-driven micro SAAS tools designed to streamline your business operations. 
              Choose from our collection of specialized services tailored for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of AI-powered tools designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'border-purple-500 bg-white/15' : 'border-white/20'
              }`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-purple-400 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Learn More
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
              Why Choose Our Micro SAAS Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide specialized tools that solve specific business problems with AI-powered efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how our micro SAAS services can streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}