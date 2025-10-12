import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '48hr', label: 'Response Time', icon: <MessageSquare className="w-6 h-6" /> }
  ]

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-services',
      pricing: 'Starting at $99/month',
      popular: true,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Cpu className="w-12 h-12 text-emerald-400" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.',
      benefits: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Infrastructure Management'],
      link: '/it-services',
      pricing: 'Starting at $1,500/month',
      popular: true,
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-400" />,
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions designed for specific business needs and workflows.',
      benefits: ['Custom Solutions', 'Rapid Deployment', 'Scalable Architecture', 'Cost Effective'],
      link: '/micro-saas-services',
      pricing: 'Starting at $29/month',
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-400" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation and optimization for enhanced connectivity.',
      benefits: ['Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation'],
      link: '/5g-implementation',
      pricing: 'Starting at $5,000/month',
      popular: false,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration', 'Infrastructure Setup', 'Security Solutions', 'Cost Optimization'],
      link: '/cloud-services',
      pricing: 'Starting at $2,500/month',
      popular: true,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database className="w-12 h-12 text-yellow-400" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation', 'Digital Workforce', 'Customer Experience', 'Data Strategy'],
      link: '/digital-transformation',
      pricing: 'Starting at $3,000/month',
      popular: false,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  const additionalServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'Data Analytics Pro',
      description: 'Advanced business intelligence and data visualization',
      pricing: '$199/month',
      link: '/data-analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions and monitoring',
      pricing: '$299/month',
      link: '/cybersecurity'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: 'AI Consulting',
      description: 'Expert guidance on AI implementation',
      pricing: '$150/hour',
      link: '/consulting'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      pricing: '$2,000/project',
      link: '/web-development'
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-400" />,
      title: 'Blockchain Solutions',
      description: 'Secure blockchain implementation',
      pricing: '$5,000/project',
      link: '/blockchain'
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs',
      pricing: '$1,500/project',
      link: '/api-development'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding service and expertise. Their cloud migration saved us $50,000 annually while improving performance.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'The micro SaaS solutions they developed for us are game-changers. Highly recommend their services.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | 300% ROI Guaranteed</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, cloud services, digital transformation, Zion Tech Group, micro SaaS, cybersecurity, data analytics" />
      </Helmet>

      {/* Hero Section with Futuristic Design */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Next-Generation Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI & IT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
              Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-pink-400 transition-colors">+1 302 464 0950</a></p>
              <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-pink-400 transition-colors">kleber@ziontechgroup.com</a></p>
            </div>
          </div>

          {/* Stats Section with Neon Effects */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Futuristic Cards */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20 inline-block`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-green-400 text-transparent bg-clip-text">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for specific business needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300 group hover:shadow-pink-400/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="text-sm font-semibold text-pink-400">{service.pricing}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Futuristic Design */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success. Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Explore AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
