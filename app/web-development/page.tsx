import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Code, Monitor, Smartphone, Globe, Zap, CheckCircle, ArrowRight, 
  Sparkles, Target, Award, Lightbulb, Server, CircuitBoard, 
  Users, DollarSign, Phone, Mail, MapPin, Calendar, Timer, 
  TrendingUp, Star, BarChart3, PieChart, LineChart, Activity, 
  Search, Filter, Download, Upload, Share, MessageCircle, 
  Shield, Brain, Cpu, Rocket, Network, Atom, Satellite
} from 'lucide-react'

export default function WebDevelopmentPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern technologies and best practices.',
      price: 'Starting at $2,999',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'API integration']
    },
    {
      icon: <Monitor className="w-8 h-8 text-emerald-400" />,
      title: 'Responsive Websites',
      description: 'Mobile-first responsive websites that work perfectly on all devices.',
      price: 'Starting at $1,499',
      features: ['Mobile-first design', 'Cross-browser compatibility', 'SEO optimized', 'Fast loading']
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      price: 'Starting at $4,999',
      features: ['Payment processing', 'Inventory management', 'Order tracking', 'Admin dashboard']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Progressive Web Apps',
      description: 'PWAs that combine the best of web and mobile app experiences.',
      price: 'Starting at $3,999',
      features: ['Offline functionality', 'Push notifications', 'App-like experience', 'Installable']
    }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Modern UI library for dynamic interfaces' },
    { name: 'Next.js', icon: '▲', description: 'Full-stack React framework for production' },
    { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime' },
    { name: 'TypeScript', icon: '🔷', description: 'Type-safe JavaScript development' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for flexible data storage' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Reliable relational database system' },
    { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure and services' },
    { name: 'Docker', icon: '🐳', description: 'Containerization for consistent deployment' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes for user experience validation.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your application using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing and smooth deployment to production.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Websites Built', icon: <Globe className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Monitor className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Technologies Used', icon: <Code className="w-6 h-6 text-purple-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group | Custom Websites & Web Applications</title>
        <meta name="description" content="Professional web development services including custom websites, web applications, e-commerce solutions, and PWAs. Built with modern technologies." />
        <meta name="keywords" content="web development, custom websites, web applications, e-commerce, PWA, React, Next.js, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/web-development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-400/30">
            <Code className="w-4 h-4" />
            <span>Web Development</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Custom <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Web Solutions
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Build modern, scalable web applications that drive business growth. 
            From simple websites to complex web platforms, we deliver excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Web Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive web development solutions tailored to your business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div className="text-emerald-400 font-semibold text-lg">
                    {service.price}
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-blue-900/50 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modern <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We use cutting-edge technologies to build fast, secure, and scalable web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 transform translate-x-1/2 hidden lg:block" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to <span className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">Build</span> Your Website?
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let's discuss your project requirements and create a web solution that drives your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}