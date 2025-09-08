import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, 
  Users, Globe, Code, Cpu, Network, Smartphone, Monitor, Key, Eye, 
  TrendingUp, Settings, Rocket, Target, Palette, ShieldCheck, Globe2,
  FileText, CreditCard, MessageSquare, Calendar, Search, Filter,
  PieChart, Activity, Zap, Target, Users2, Building, Home, Car,
  Camera, Music, Video, Gamepad2, Heart, ShoppingCart, CreditCard,
  CheckCircle, Star, Award, Clock, Globe, Sparkles
} from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function EnhancedIndex() {
  const title = 'Zion Tech Group — Next-Gen AI, Cloud & Cybersecurity Solutions'
  const description = 'Transform your business with cutting-edge AI systems, cloud-native platforms, and enterprise-grade security solutions.'

  const features = [
    {
      name: 'AI-Powered Automation',
      description: 'Intelligent systems that learn and adapt to your business needs',
      icon: Brain,
      color: 'blue',
      features: ['Multi-agent systems', 'Predictive analytics', 'Natural language processing']
    },
    {
      name: 'Cloud-Native Architecture',
      description: 'Scalable infrastructure built for the modern digital economy',
      icon: Cloud,
      color: 'green',
      features: ['Serverless computing', 'Kubernetes orchestration', 'Multi-cloud strategy']
    },
    {
      name: 'Zero-Trust Security',
      description: 'Enterprise-grade security frameworks and compliance solutions',
      icon: Shield,
      color: 'red',
      features: ['Identity verification', 'Threat detection', 'Compliance automation']
    }
  ]

  const stats = [
    { label: 'AI Systems Deployed', value: '50+', icon: Brain },
    { label: 'Cloud Migrations', value: '100+', icon: Cloud },
    { label: 'Security Audits', value: '200+', icon: Shield },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ]

  const services = [
    {
      name: 'AI & Machine Learning',
      description: 'Transform operations with intelligent automation',
      icon: Brain,
      color: 'blue',
      link: '/enhanced-services#ai'
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Build scalable, resilient cloud platforms',
      icon: Cloud,
      color: 'green',
      link: '/enhanced-services#cloud'
    },
    {
      name: 'Cybersecurity',
      description: 'Protect your business with enterprise security',
      icon: Shield,
      color: 'red',
      link: '/enhanced-services#cybersecurity'
    },
    {
      name: 'Micro SaaS',
      description: 'Rapid SaaS development and deployment',
      icon: Code,
      color: 'purple',
      link: '/enhanced-services#saas'
    }
  ]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 sm:py-32 min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-3000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Generation Technology Solutions
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & Cloud
              </span>
            </h1>
            
            <p className="text-xl leading-8 text-blue-100 mb-12 max-w-3xl mx-auto">
              We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise. 
              Experience the future of technology today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/enhanced-services"
                className="group px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-slate-300 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Trusted by 100+ companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Industry leader since 2020</span>
              </div>
                             <div className="flex items-center space-x-2">
                 <Globe className="w-4 h-4 text-blue-400" />
                 <span>Global reach & support</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Advanced Technology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to scale your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={feature.name} className="group flex flex-col relative">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((feat, featIndex) => (
                        <li key={featIndex} className="flex items-center gap-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6">
                      <a href={`/enhanced-services#${feature.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group-hover:scale-105">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Service Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our extensive range of AI, cloud, cybersecurity, and micro SaaS solutions designed to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.name} className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-gray-300">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-${service.color}-600 to-${service.color}-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold text-sm group-hover:scale-105 transition-all">
                  Learn More →
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/enhanced-services"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24 sm:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by leading companies
              </h2>
              <p className="mt-4 text-xl leading-8 text-blue-100">
                We've helped businesses across industries transform their operations and scale efficiently.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-3xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex flex-col bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <dt className="text-sm font-semibold leading-6 text-blue-200 mb-2">{stat.label}</dt>
                  <dd className="order-first text-4xl font-bold tracking-tight text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </dd>
                  <div className="mt-2 flex justify-center">
                    <stat.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 py-24 sm:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold rounded-2xl text-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-3 h-6 w-6 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/enhanced-services"
                className="px-10 py-5 text-lg font-semibold text-white border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}