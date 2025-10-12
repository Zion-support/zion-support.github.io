import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, TrendingUp, Sparkles, Wifi, Cpu2, Layers, Target, Lightbulb, Settings, BarChart, PieChart, Activity, Zap as Lightning } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/30'
    },
    {
      icon: <Cloud className="w-8 h-8 text-emerald-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30'
    },
    {
      icon: <Shield className="w-8 h-8 text-rose-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      gradient: 'from-rose-500/20 to-pink-500/20',
      border: 'border-rose-500/30'
    },
    {
      icon: <Database className="w-8 h-8 text-violet-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      gradient: 'from-violet-500/20 to-purple-500/20',
      border: 'border-violet-500/30'
    }
  ]

  const services = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business requirements.',
      price: 'Starting at $2,500/month'
    },
    {
      icon: <Network className="w-6 h-6 text-emerald-400" />,
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions for your organization.',
      price: 'Starting at $1,800/month'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
      title: 'Business Intelligence',
      description: 'Data-driven insights to help you make informed business decisions.',
      price: 'Starting at $1,200/month'
    },
    {
      icon: <Bot className="w-6 h-6 text-orange-400" />,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes.',
      price: 'Starting at $800/month'
    },
    {
      icon: <Wifi className="w-6 h-6 text-cyan-400" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network solutions for ultra-fast connectivity.',
      price: 'Starting at $3,500/month'
    },
    {
      icon: <Shield className="w-6 h-6 text-rose-400" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      price: 'Starting at $1,500/month'
    },
    {
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime.',
      price: 'Starting at $2,000/month'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Database Management',
      description: 'Expert database administration and optimization services.',
      price: 'Starting at $900/month'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT solutions, cloud infrastructure, cybersecurity, and digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, digital transformation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2)_0%,transparent_70%)] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Generation Technology Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Zion Tech Group
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading the future of technology with cutting-edge AI solutions, 
            robust IT infrastructure, and innovative digital transformation services.
            <br />
            <span className="text-cyan-300 font-semibold">Contact: +1 302 464 0950 | kleber@ziontechgroup.com</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="group border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
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
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
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
              <div key={index} className={`group bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-2xl p-6 border ${feature.border} hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10`}>
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
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
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3 group-hover:text-gray-200 transition-colors">{service.description}</p>
                <div className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our technology solutions can help you achieve your business goals.
                </p>
                
                {/* Contact Information */}
                <div className="mb-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                    <div className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="font-semibold">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-2" />
                      <span className="font-semibold">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Middletown, DE 19709</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
