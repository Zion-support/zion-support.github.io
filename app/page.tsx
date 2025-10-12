'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Star, Users, Clock, DollarSign, Target, TrendingUp, BarChart3, MessageSquare, Eye, Code2, Server, Lock, Monitor, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-6 h-6 text-cyan-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Support Available', icon: <MessageSquare className="w-6 h-6 text-blue-400" /> }
  ]

  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI-powered content creation with multi-language support, SEO optimization, and brand voice customization.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates', 'Plagiarism detection'],
      pricing: 'Starting at $299/month',
      link: '/ai-content-generation-pro',
      popular: true,
      neon: 'neon-glow-cyan'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solutions with natural language processing and seamless human handoff capabilities.',
      features: ['Natural language processing', 'Multi-channel support', 'Human handoff', 'Analytics dashboard', 'Custom training'],
      pricing: 'Starting at $199/month',
      link: '/ai-customer-support-chatbot',
      popular: false,
      neon: 'neon-glow-purple'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting capabilities.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Automated reports', 'Custom metrics', 'Data visualization'],
      pricing: 'Starting at $399/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      neon: 'neon-glow-green'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: 'AI Process Automation',
      description: 'Streamline workflows with intelligent automation that learns and adapts to your business processes.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring', 'Machine learning'],
      pricing: 'Starting at $499/month',
      link: '/ai-automation',
      popular: true,
      neon: 'neon-glow-yellow'
    }
  ]

  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration with zero downtime and comprehensive cloud infrastructure management.',
      features: ['Zero-downtime migration', 'Multi-cloud strategy', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
      pricing: 'Starting at $2,500/project',
      link: '/cloud-services',
      popular: true,
      neon: 'neon-glow-blue'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management.',
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', 'Security audits', 'Incident response'],
      pricing: 'Starting at $1,500/month',
      link: '/ai-cybersecurity-suite',
      popular: false,
      neon: 'neon-glow-red'
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data warehousing', 'ETL processes', 'Business intelligence', 'Custom dashboards', 'Machine learning'],
      pricing: 'Starting at $2,000/month',
      link: '/ai-data-analytics',
      popular: false,
      neon: 'neon-glow-cyan'
    },
    {
      icon: <Code2 className="w-12 h-12 text-purple-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline development with automated deployment, continuous integration, and infrastructure as code.',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning'],
      pricing: 'Starting at $3,000/month',
      link: '/it-services',
      popular: true,
      neon: 'neon-glow-purple'
    }
  ]

  const microSaasServices = [
    {
      icon: <Smartphone className="w-12 h-12 text-pink-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['AI prioritization', 'Smart scheduling', 'Team collaboration', 'Progress tracking', 'Mobile app'],
      pricing: '$29/month per user',
      link: '/micro-saas-services',
      popular: true,
      neon: 'neon-glow-pink'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and intelligent categorization.',
      features: ['Receipt scanning', 'Auto categorization', 'Expense reports', 'Budget tracking', 'Tax preparation'],
      pricing: '$19/month per user',
      link: '/ai-expense-tracker',
      popular: false,
      neon: 'neon-glow-green'
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI recommendations', 'Breach monitoring', 'Multi-device sync', '2FA support'],
      pricing: '$15/month per user',
      link: '/micro-saas-services',
      popular: false,
      neon: 'neon-glow-blue'
    },
    {
      icon: <Monitor className="w-12 h-12 text-orange-400" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with smart templates and payment tracking.',
      features: ['Smart templates', 'Auto calculations', 'Payment tracking', 'Multi-currency', 'PDF generation'],
      pricing: '$25/month per user',
      link: '/micro-saas-services',
      popular: true,
      neon: 'neon-glow-orange'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions helped us automate 80% of our processes with incredible efficiency gains.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI analytics dashboard provided insights we never knew existed. Our decision-making process is now data-driven and incredibly accurate.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner. Their cloud migration was seamless and cost-effective.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Services</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation. Transform your business with cutting-edge technology including AI content generation, cloud migration, cybersecurity, and micro SAAS solutions." />
        <meta name="keywords" content="AI solutions, IT services, cloud migration, cybersecurity, micro SAAS, artificial intelligence, business automation, digital transformation, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. Professional services including cloud migration, cybersecurity, and intelligent automation." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced <span className="cyber-text">AI & IT Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence, cloud migration, cybersecurity, and intelligent automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="cyber-button text-lg px-8 py-4"
            >
              Get Free Consultation
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

      {/* AI Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="cyber-text">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, generate content, and gain intelligent insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className={`cyber-card h-full ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className={`w-16 h-16 ${service.neon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
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
                  <div className="text-cyan-400 font-semibold text-lg mb-4">{service.pricing}</div>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="cyber-text">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT infrastructure solutions including cloud migration, cybersecurity, and DevOps services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className={`cyber-card h-full ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className={`w-16 h-16 ${service.neon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
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
                  <div className="text-purple-400 font-semibold text-lg mb-4">{service.pricing}</div>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="cyber-text">Micro SAAS Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, powerful micro applications designed to streamline your daily business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="cyber-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="holographic-border p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our AI and IT solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Start Your Journey
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
