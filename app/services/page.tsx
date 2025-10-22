'use client'
import React, { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, Filter, ArrowRight, CheckCircle, Star, Brain, Code, Smartphone, Cloud, Shield, BarChart, Users, Zap, Target, Globe, Database, Settings, Cpu, Lock, TrendingUp, FileText, MessageCircle, Calendar, CheckSquare, Heart, ThumbsUp, Award, Building, GraduationCap, Phone, Mail, MapPin } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'AI Solutions',
      category: 'ai',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Custom',
      rating: 5,
      href: '/ai-solutions'
    },
    {
      id: 2,
      title: 'Web Development',
      category: 'development',
      description: 'Custom web applications built with modern technologies',
      icon: Code,
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Cloud Deployment'],
      price: 'From $5,000',
      rating: 5,
      href: '/web-development'
    },
    {
      id: 3,
      title: 'Mobile Development',
      category: 'development',
      description: 'Native and cross-platform mobile applications',
      icon: Smartphone,
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      price: 'From $8,000',
      rating: 5,
      href: '/mobile-development'
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      category: 'infrastructure',
      description: 'Scalable cloud infrastructure and services',
      icon: Cloud,
      features: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
      price: 'From $3,000',
      rating: 5,
      href: '/cloud-solutions'
    },
    {
      id: 5,
      title: 'Cybersecurity',
      category: 'security',
      description: 'Comprehensive security solutions and audits',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'From $2,000',
      rating: 5,
      href: '/cybersecurity'
    },
    {
      id: 6,
      title: 'Data Analytics',
      category: 'analytics',
      description: 'Data-driven insights and business intelligence',
      icon: BarChart,
      features: ['Data Visualization', 'Business Intelligence', 'Machine Learning', 'Predictive Analytics'],
      price: 'From $4,000',
      rating: 5,
      href: '/data-analytics'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Solutions', count: services.filter(s => s.category === 'ai').length },
    { id: 'development', name: 'Development', count: services.filter(s => s.category === 'development').length },
    { id: 'infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', count: services.filter(s => s.category === 'security').length },
    { id: 'analytics', name: 'Analytics', count: services.filter(s => s.category === 'analytics').length }
  ]

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT solutions designed to transform your business. Web development, mobile apps, cloud solutions, cybersecurity, and more." />
        <meta name="keywords" content="AI solutions, web development, mobile development, cloud solutions, cybersecurity, data analytics, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Filter by category:</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      {[...Array(service.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">({service.rating}.0)</span>
                    </div>
                    <div className="text-lg font-bold text-purple-400">{service.price}</div>
                  </div>
                  
                  <a
                    href={service.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServicesPage