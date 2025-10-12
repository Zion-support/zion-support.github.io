'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Cloud, Database, Smartphone, Cpu, BarChart3, Users, Star, Sparkles, Rocket, Clock, DollarSign } from 'lucide-react'
import Layout from '../layout'

const MicroSAASServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const services = [
    {
      id: 1,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: '$29/month',
      link: '/ai-content-generation',
      popular: true,
      category: 'Content & Marketing',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      users: '2,500+',
      rating: '4.8'
    },
    {
      id: 2,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['Smart prioritization', 'Team collaboration', 'Progress tracking', 'Calendar integration'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      users: '1,200+',
      rating: '4.9'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Powerful analytics dashboard with AI-driven insights and real-time data visualization.',
      features: ['Real-time analytics', 'AI predictions', 'Custom dashboards', 'Data export'],
      pricing: '$39/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      users: '850+',
      rating: '4.7'
    },
    {
      id: 4,
      title: 'AI Email Assistant',
      description: 'Automate email management with smart scheduling, templates, and response suggestions.',
      features: ['Smart scheduling', 'Email templates', 'Priority sorting', 'Response suggestions'],
      pricing: '$24/month',
      link: '/ai-email-assistant',
      popular: false,
      category: 'Communication',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      users: '1,800+',
      rating: '4.6'
    },
    {
      id: 5,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'Password generation', 'Breach monitoring', 'Multi-device sync'],
      pricing: '$14/month',
      link: '/ai-password-manager',
      popular: true,
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      users: '3,200+',
      rating: '4.9'
    },
    {
      id: 6,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense tracking with automated categorization and spending insights.',
      features: ['Auto-categorization', 'Receipt scanning', 'Spending insights', 'Budget alerts'],
      pricing: '$19/month',
      link: '/ai-expense-tracker',
      popular: false,
      category: 'Finance',
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      users: '950+',
      rating: '4.5'
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Productivity', 'Analytics', 'Communication', 'Security', 'Finance']

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with built-in collaboration features'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '50+', label: 'Micro SaaS Apps' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.8/5', label: 'Average Rating' }
  ]

  return (
    <Layout 
      title="Micro SaaS Services - Zion Tech Group"
      description="Ready-to-use micro SaaS applications for productivity, content creation, analytics, and more. Start using powerful tools in minutes."
      keywords="micro SaaS, productivity tools, AI applications, business software, cloud applications"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SaaS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready-to-use micro SaaS applications that solve specific business problems. 
            Start using powerful tools in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
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

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build focused, powerful applications that solve specific business problems without the complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of powerful, ready-to-use micro SaaS applications.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400 ml-2">/month</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="text-xs text-gray-400">{service.users} users</div>
                  </div>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our micro SaaS applications today and see the difference they can make for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MicroSAASServicesPage