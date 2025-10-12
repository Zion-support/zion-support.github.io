'use client'
import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import FuturisticBackground from '../components/FuturisticBackground'
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Cloud, 
  Smartphone, 
  Mail, 
  BarChart3, 
  Users, 
  Lock, 
  Clock,
  ArrowRight,
  Sparkles,
  Rocket
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSAASServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Tools', icon: <Code className="w-5 h-5" /> },
    { id: 'productivity', name: 'Productivity', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing', icon: <Mail className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <Database className="w-5 h-5" /> }
  ]

  const microSAASServices = [
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer Pro',
      category: 'ai',
      description: 'Advanced AI-powered content generation tool that creates high-quality articles, blog posts, and marketing copy.',
      features: [
        'Generate 1000+ word articles in minutes',
        'SEO-optimized content',
        'Multiple writing styles',
        'Plagiarism detection',
        'Multi-language support',
        'Brand voice customization'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', 'Basic templates', 'Email support'] },
        pro: { price: 79, period: 'month', features: ['50,000 words/month', 'Advanced templates', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'White-label option'] }
      },
      icon: <Code className="w-8 h-8 text-blue-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-writer'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      description: 'Intelligent analytics platform that provides real-time insights and predictive analytics for your business.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Data integration',
        'Mobile app access'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['5 data sources', 'Basic reports', 'Email support'] },
        pro: { price: 99, period: 'month', features: ['15 data sources', 'Advanced reports', 'Priority support', 'API access'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited sources', 'Custom reports', 'Dedicated support', 'White-label option'] }
      },
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      category: 'productivity',
      description: 'Smart email management tool that automates responses, schedules emails, and improves productivity.',
      features: [
        'Smart email responses',
        'Email scheduling',
        'Spam filtering',
        'Email templates',
        'Calendar integration',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['1 email account', 'Basic automation', 'Email support'] },
        pro: { price: 49, period: 'month', features: ['5 email accounts', 'Advanced automation', 'Priority support', 'API access'] },
        enterprise: { price: 99, period: 'month', features: ['Unlimited accounts', 'Custom automation', 'Dedicated support', 'White-label option'] }
      },
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-email-assistant'
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation',
      category: 'marketing',
      description: 'Automated lead generation and qualification system that finds and scores potential customers.',
      features: [
        'Automated lead finding',
        'Lead scoring algorithm',
        'CRM integration',
        'Email sequences',
        'Social media monitoring',
        'Lead nurturing campaigns'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['100 leads/month', 'Basic scoring', 'Email support'] },
        pro: { price: 89, period: 'month', features: ['500 leads/month', 'Advanced scoring', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited leads', 'Custom scoring', 'Dedicated support', 'White-label option'] }
      },
      icon: <Users className="w-8 h-8 text-orange-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-lead-generation'
    },
    {
      id: 'ai-cybersecurity-monitor',
      name: 'AI Cybersecurity Monitor',
      category: 'security',
      description: 'Advanced security monitoring system that uses AI to detect and prevent cyber threats in real-time.',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Security reports',
        '24/7 monitoring'
      ],
      pricing: {
        starter: { price: 59, period: 'month', features: ['Basic monitoring', 'Email alerts', 'Email support'] },
        pro: { price: 129, period: 'month', features: ['Advanced monitoring', 'SMS alerts', 'Priority support', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Full monitoring', 'Custom alerts', 'Dedicated support', 'White-label option'] }
      },
      icon: <Shield className="w-8 h-8 text-red-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      category: 'ai',
      description: 'Intelligent chatbot that provides 24/7 customer support with natural language processing.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Knowledge base integration',
        'Escalation to humans',
        'Analytics dashboard',
        'Custom branding'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['100 conversations/month', 'Basic responses', 'Email support'] },
        pro: { price: 89, period: 'month', features: ['500 conversations/month', 'Advanced responses', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited conversations', 'Custom responses', 'Dedicated support', 'White-label option'] }
      },
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      category: 'productivity',
      description: 'Smart expense tracking and management system with automated categorization and reporting.',
      features: [
        'Automated categorization',
        'Receipt scanning',
        'Expense reports',
        'Budget tracking',
        'Tax preparation',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['Basic tracking', 'Email reports', 'Email support'] },
        pro: { price: 49, period: 'month', features: ['Advanced tracking', 'Custom reports', 'Priority support', 'API access'] },
        enterprise: { price: 99, period: 'month', features: ['Full tracking', 'Custom reports', 'Dedicated support', 'White-label option'] }
      },
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-expense-tracker'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      category: 'marketing',
      description: 'Automated social media management tool that schedules posts, analyzes performance, and engages with followers.',
      features: [
        'Automated posting',
        'Content suggestions',
        'Performance analytics',
        'Hashtag optimization',
        'Engagement tracking',
        'Multi-platform support'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['3 social accounts', 'Basic scheduling', 'Email support'] },
        pro: { price: 69, period: 'month', features: ['10 social accounts', 'Advanced scheduling', 'Priority support', 'API access'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited accounts', 'Custom scheduling', 'Dedicated support', 'White-label option'] }
      },
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      
      <SEOHead 
        title="Micro SAAS Services - Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS services including AI tools, productivity apps, marketing automation, and security solutions. Affordable pricing starting from $19/month."
        keywords="micro SAAS, AI tools, productivity apps, marketing automation, security solutions, business software, affordable pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-500/30">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                  <span className="text-purple-300 font-medium">Micro SAAS Solutions</span>
                  <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powerful <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Micro SAAS
            </span> Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of micro SAAS services designed to streamline your business operations, 
            boost productivity, and drive growth. All services include 24/7 support and 30-day money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  service.popular ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {service.popular && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">
                      From ${service.pricing.starter.price}
                      <span className="text-lg text-gray-400">/{service.pricing.starter.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </a>
                    <Link
                      to="/contact"
                      className="w-full border border-purple-400/50 text-purple-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-20"></div>
                <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Simple, Transparent Pricing
                </h2>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include 24/7 support and 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Starter', 'Pro', 'Enterprise'].map((plan, index) => (
              <div
                key={plan}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan === 'Pro' ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {plan === 'Pro' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan === 'Starter' ? '19' : plan === 'Pro' ? '79' : '199'}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 mb-8">Perfect for {plan === 'Starter' ? 'small businesses' : plan === 'Pro' ? 'growing companies' : 'large enterprises'}</p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">All micro SAAS services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">30-day money-back guarantee</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">
                        {plan === 'Starter' ? 'Basic features' : plan === 'Pro' ? 'Advanced features' : 'Custom features'}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">
                        {plan === 'Starter' ? 'Email support' : plan === 'Pro' ? 'Priority support' : 'Dedicated support'}
                      </span>
                    </li>
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      plan === 'Pro'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already using our micro SAAS services to drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contact"
                  className="group relative bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute -inset-1 bg-white rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">+1 302 464 0950</div>
                  <div className="text-blue-200">Call Us Now</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">kleber@ziontechgroup.com</div>
                  <div className="text-blue-200">Email Us</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">24/7 Support</div>
                  <div className="text-blue-200">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}