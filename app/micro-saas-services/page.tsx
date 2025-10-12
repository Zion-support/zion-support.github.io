import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Settings, 
  BarChart3,
  Mail,
  Phone,
  Clock
} from 'lucide-react'

const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: 'Starting at $9/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking and financial insights powered by AI.',
      features: ['Receipt scanning', 'Category automation', 'Budget alerts', 'Financial reports'],
      pricing: 'Starting at $12/month',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Breach monitoring', 'Multi-device sync'],
      pricing: 'Starting at $15/month',
      link: '/ai-password-manager',
      popular: true
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation and management with AI optimization.',
      features: ['Template library', 'Auto-population', 'Payment tracking', 'Tax calculations'],
      pricing: 'Starting at $18/month',
      link: '/ai-invoice-generator',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring and wellness insights powered by AI.',
      features: ['Health metrics', 'Goal tracking', 'Insights & recommendations', 'Progress reports'],
      pricing: 'Starting at $20/month',
      link: '/ai-health-tracker',
      popular: false
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart scheduling', 'Conflict resolution', 'Meeting optimization', 'Time blocking'],
      pricing: 'Starting at $18/month',
      link: '/ai-smart-calendar',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and sustainability solutions powered by AI.',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations'],
      pricing: 'Starting at $35/month',
      link: '/ai-climate-solutions-pro',
      popular: true
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'AI Tools' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS applications designed to streamline your daily tasks and boost productivity." />
        <meta name="keywords" content="micro SAAS, AI tools, productivity apps, task management, expense tracking, password manager" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our collection of AI-powered micro SAAS applications designed to 
              streamline your daily tasks and boost productivity.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Choose from our collection of AI-powered micro SAAS applications and start 
              boosting your productivity today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MicroSaasServicesPage