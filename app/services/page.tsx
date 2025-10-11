'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Award,
  Rocket
} from 'lucide-react'

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const categories = ['All', 'AI Services', 'IT Services', 'Cloud Solutions', 'Security', 'Analytics', 'Development', 'Consulting']

  const services = [
    {
      id: 'ai-analytics',
      icon: Brain,
      title: 'AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence and predictive analytics platform with real-time insights and automated reporting.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $2,500/month',
      marketPrice: '$5,000-15,000/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      category: 'AI Services',
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 'ai-chatbot',
      icon: Brain,
      title: 'AI Chatbot Enterprise',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support capabilities.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000-8,000/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      category: 'AI Services',
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Shield Pro',
      description: 'Enterprise-grade cybersecurity monitoring and threat detection with automated incident response and compliance management.',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Compliance Monitoring', 'Vulnerability Scanning', 'Security Analytics', '24/7 SOC Support'],
      price: 'Starting at $3,000/month',
      marketPrice: '$6,000-18,000/month',
      benefits: ['Proactive threat protection', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud infrastructure management with automated scaling, cost optimization, and multi-cloud support.',
      features: ['Multi-cloud Management', 'Auto-scaling', 'Cost Optimization', 'Disaster Recovery', 'Performance Monitoring', 'Security Compliance'],
      price: 'Starting at $2,000/month',
      marketPrice: '$4,000-12,000/month',
      benefits: ['Reduced cloud costs', 'Improved performance', 'Enhanced security', 'Scalable infrastructure'],
      category: 'Cloud Solutions',
      popular: false,
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      title: 'Data Analytics Suite',
      description: 'Advanced data analytics and business intelligence platform with machine learning capabilities and real-time processing.',
      features: ['Real-time Data Processing', 'Machine Learning Models', 'Custom Visualizations', 'Data Integration', 'Advanced Reporting', 'API Access'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3,500-10,000/month',
      benefits: ['Better business insights', 'Real-time analytics', 'Custom reports', 'Data-driven decisions'],
      category: 'Analytics',
      popular: false,
      link: 'https://ziontechgroup.com/data-analytics'
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Web Development Solutions',
      description: 'Full-stack web development services with modern technologies, responsive design, and performance optimization.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Integration', 'Security Implementation', 'API Development', 'Maintenance & Support'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10,000-50,000/project',
      benefits: ['Modern web presence', 'Better user experience', 'SEO optimization', 'Mobile responsiveness'],
      category: 'Development',
      popular: false,
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with advanced features and seamless user experience.',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Optimization', 'Push Notifications', 'Analytics Integration'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15,000-75,000/project',
      benefits: ['Mobile presence', 'Better user engagement', 'App store visibility', 'Cross-platform compatibility'],
      category: 'Development',
      popular: false,
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      id: 'ai-automation',
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and monitoring capabilities.',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', 'Custom Integrations'],
      price: 'Starting at $2,200/month',
      marketPrice: '$4,500-12,000/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      category: 'AI Services',
      popular: true,
      link: 'https://ziontechgroup.com/ai-workflow-automation'
    },
    {
      id: 'ai-content-generation',
      icon: Brain,
      title: 'AI Content Studio Pro',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Brand Voice Training', 'Content Calendar', 'Performance Analytics'],
      price: 'Starting at $800/month',
      marketPrice: '$1,500-4,000/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      category: 'AI Services',
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'database-solutions',
      icon: Database,
      title: 'Database Solutions',
      description: 'Comprehensive database design, optimization, and management services for enterprise applications.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery', 'Security Implementation', 'Monitoring & Maintenance'],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000-8,000/month',
      benefits: ['Improved performance', 'Data security', 'Scalable architecture', 'Reduced downtime'],
      category: 'IT Services',
      popular: false,
      link: 'https://ziontechgroup.com/database-solutions'
    },
    {
      id: 'ai-crm',
      icon: Brain,
      title: 'AI CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflows.',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Automated Workflows', 'Customer Segmentation', 'Sales Forecasting', 'Integration Hub'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3,500-10,000/month',
      benefits: ['Increase sales by 35%', 'Better lead qualification', 'Automated follow-ups', 'Data-driven insights'],
      category: 'AI Services',
      popular: false,
      link: 'https://ziontechgroup.com/ai-crm'
    },
    {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Consulting Services',
      description: 'Strategic IT consulting to help businesses optimize their technology infrastructure and digital transformation.',
      features: ['Technology Assessment', 'Digital Strategy', 'Infrastructure Planning', 'Security Audits', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-500/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Risk mitigation'],
      category: 'Consulting',
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting'
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentServices = filteredServices.slice(startIndex, startIndex + itemsPerPage)

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '500+', label: 'Active Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '100%', label: 'Secure & Compliant' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '24/7', label: 'Support Available' },
    { icon: <Award className="w-8 h-8 text-yellow-400" />, value: '4.9/5', label: 'Customer Rating' },
    { icon: <Rocket className="w-8 h-8 text-pink-400" />, value: '10x', label: 'Faster Deployment' }
  ]

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive growth.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
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
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Market rate: {service.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business. 
                Contact us for a free consultation and custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default ServicesPage
