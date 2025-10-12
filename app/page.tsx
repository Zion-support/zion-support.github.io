import React from 'react'
import { Helmet } from 'react-helmet-async'
import FuturisticNavigation from './components/FuturisticNavigation'
import FuturisticFooter from './components/FuturisticFooter'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, TrendingUp, Sparkles, Target, Award, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation with 95% accuracy.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs with 99.9% uptime.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data with enterprise-grade protection.',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform and AI-driven predictions.',
      gradient: 'from-purple-400 to-pink-500'
    }
  ]

  const services = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business requirements with modern technologies.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: <Network className="w-6 h-6 text-green-400" />,
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions for your organization with 24/7 monitoring.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Business Intelligence',
      description: 'Data-driven insights to help you make informed business decisions with AI-powered analytics.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Bot className="w-6 h-6 text-orange-400" />,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes and increase efficiency.',
      gradient: 'from-orange-400 to-red-500'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Projects Completed', color: 'text-cyan-400' },
    { number: '500+', label: 'Happy Clients', color: 'text-green-400' },
    { number: '24/7', label: 'Support Available', color: 'text-purple-400' },
    { number: '99.9%', label: 'Uptime Guarantee', color: 'text-orange-400' }
  ]

  const microSaasServices = [
    {
      title: 'AI Customer Insights',
      description: 'Transform customer data into actionable insights with 94% accuracy',
      price: 'From $29/month',
      path: '/micro-saas/ai-customer-insights',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate business processes and save 40+ hours per week',
      price: 'From $49/month',
      path: '/micro-saas/ai-workflow-automation',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'AI Financial Forecasting',
      description: 'Predict financial performance with 94% accuracy',
      price: 'From $79/month',
      path: '/micro-saas/ai-financial-forecasting',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-green-400 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT solutions, cloud infrastructure, cybersecurity, and digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, digital transformation" />
      </Helmet>
      
      <FuturisticNavigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.2)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-cyan-500/30">
            <Sparkles className="w-4 h-4" />
            <span>Leading AI & IT Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to the
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Future of Technology
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions, robust IT infrastructure, 
            and innovative micro SAAS services. Join 500+ companies already using our technology to drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-cyan-500/25"
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-purple-500/30">
              <Zap className="w-4 h-4" />
              <span>Micro SAAS Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Innovative Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS tools designed to solve specific business challenges with AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-6">{service.price}</div>
                <Link 
                  to={service.path}
                  className={`inline-flex items-center bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 group/btn`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive innovation and growth for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Join 500+ companies already using our AI-powered solutions to drive growth and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  )
}

export default HomePage
