import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Smartphone, DollarSign, Lock, Monitor, Brain, Zap, BarChart3, MessageSquare, Star, Clock, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      icon: <Smartphone className="w-12 h-12 text-pink-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['AI prioritization', 'Smart scheduling', 'Team collaboration', 'Progress tracking', 'Mobile app', 'Real-time sync'],
      pricing: '$29/month per user',
      link: '/micro-saas-services',
      popular: true,
      neon: 'neon-glow-pink'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and intelligent categorization.',
      features: ['Receipt scanning', 'Auto categorization', 'Expense reports', 'Budget tracking', 'Tax preparation', 'Multi-currency'],
      pricing: '$19/month per user',
      link: '/ai-expense-tracker',
      popular: false,
      neon: 'neon-glow-green'
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI recommendations', 'Breach monitoring', 'Multi-device sync', '2FA support', 'Password generator'],
      pricing: '$15/month per user',
      link: '/micro-saas-services',
      popular: false,
      neon: 'neon-glow-blue'
    },
    {
      icon: <Monitor className="w-12 h-12 text-orange-400" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with smart templates and payment tracking.',
      features: ['Smart templates', 'Auto calculations', 'Payment tracking', 'Multi-currency', 'PDF generation', 'Client portal'],
      pricing: '$25/month per user',
      link: '/micro-saas-services',
      popular: true,
      neon: 'neon-glow-orange'
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      title: 'AI Note Taker',
      description: 'Intelligent note-taking with automatic summarization and keyword extraction.',
      features: ['Voice transcription', 'Auto summarization', 'Keyword extraction', 'Search functionality', 'Cloud sync', 'Team sharing'],
      pricing: '$22/month per user',
      link: '/micro-saas-services',
      popular: false,
      neon: 'neon-glow-purple'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: 'AI Time Tracker',
      description: 'Smart time tracking with automatic project detection and productivity insights.',
      features: ['Auto time tracking', 'Project detection', 'Productivity insights', 'Team reports', 'Integration support', 'Mobile app'],
      pricing: '$18/month per user',
      link: '/micro-saas-services',
      popular: false,
      neon: 'neon-glow-yellow'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime', icon: <Clock className="w-6 h-6 text-green-400" /> },
    { number: '4.9/5', label: 'User Rating', icon: <Star className="w-6 h-6 text-yellow-400" /> },
    { number: '24/7', label: 'Support', icon: <MessageSquare className="w-6 h-6 text-blue-400" /> }
  ]

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Affordable AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SAAS solutions including AI task manager, expense tracker, password manager, and invoice generator. Affordable tools to streamline your business operations." />
        <meta name="keywords" content="micro SAAS, AI task manager, expense tracker, password manager, invoice generator, business tools, productivity software" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro <span className="cyber-text">SAAS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Affordable, powerful micro applications designed to streamline your daily business operations with AI-powered intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="cyber-button text-lg px-8 py-4"
            >
              Get Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="cyber-button-secondary text-lg px-8 py-4"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="cyber-text">Micro SAAS Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of AI-powered micro applications designed to boost productivity and streamline workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className={`cyber-card h-full ${service.popular ? 'ring-2 ring-pink-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className={`w-16 h-16 ${service.neon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-pink-400 font-semibold text-lg mb-4">{service.pricing}</div>
                  <div className="flex items-center text-pink-400 group-hover:text-pink-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="cyber-text">Micro SAAS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed with modern businesses in mind, offering powerful features at affordable prices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Focused Solutions</h3>
              <p className="text-gray-300">Each tool is designed to solve a specific business problem with laser focus and precision.</p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">Leverage artificial intelligence to automate tasks and gain intelligent insights.</p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Affordable Pricing</h3>
              <p className="text-gray-300">Get enterprise-level features at micro SAAS prices, starting from just $15/month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="holographic-border p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="cyber-button-secondary text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
