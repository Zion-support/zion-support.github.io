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
      id: 'ai-chatbots',
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support',
      features: [
        'Natural language processing',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'CRM integration (Salesforce, HubSpot)',
        'Real-time learning and adaptation',
        'Voice and video chat support',
        'Custom AI model training',
        'Advanced analytics and reporting'
      ],
      price: '$299/month',
      marketPrice: '$500-2000/month',
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions'
      ],
      category: 'AI Services',
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbots',
      savings: '70% off market rate'
    },
    {
      id: 'ai-content-generation',
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials',
      features: [
        'Blog post generation',
        'Social media content creation',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization',
        'Multi-platform publishing',
        'Content calendar management',
        'Performance analytics'
      ],
      price: '$199/month',
      marketPrice: '$300-1500/month',
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'AI Services',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generation',
      savings: '65% off market rate'
    },
    {
      id: 'ai-data-analytics',
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms for data-driven decisions',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models',
        'Data visualization',
        'Machine learning insights',
        'ROI optimization'
      ],
      price: '$399/month',
      marketPrice: '$800-3000/month',
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'AI Services',
      popular: true,
      link: 'https://ziontechgroup.com/ai-data-analytics',
      savings: '75% off market rate'
    },
    {
      id: 'ai-computer-vision',
      icon: Globe,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation with real-time processing',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Edge computing support'
      ],
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction'
      ],
      category: 'AI Services',
      popular: false,
      link: 'https://ziontechgroup.com/ai-computer-vision',
      savings: '60% off market rate'
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses with automated scaling and monitoring',
      features: [
        'AWS, Azure, Google Cloud integration',
        'Hybrid cloud solutions',
        'Auto-scaling capabilities',
        'Disaster recovery',
        'Load balancing',
        'Container orchestration',
        'Serverless computing',
        '24/7 monitoring'
      ],
      price: '$499/month',
      marketPrice: '$1000-4000/month',
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Global deployment'
      ],
      category: 'Cloud Solutions',
      popular: true,
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      savings: '50% off market rate'
    },
    {
      id: 'cybersecurity-solutions',
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets with advanced threat detection',
      features: [
        'Threat detection and prevention',
        'Data protection and encryption',
        'Compliance management',
        'Incident response',
        'Security monitoring',
        'Vulnerability assessment',
        'Penetration testing',
        'Security training'
      ],
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      benefits: [
        'Proactive threat protection',
        'Compliance assurance',
        'Reduced security incidents',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      savings: '70% off market rate'
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices',
      features: [
        'Responsive design',
        'Progressive Web Apps (PWA)',
        'SEO optimization',
        'Performance optimization',
        'Cross-browser compatibility',
        'API integration',
        'Content management systems',
        'E-commerce solutions'
      ],
      price: '$2999/project',
      marketPrice: '$5000-15000/project',
      benefits: [
        'Modern, fast websites',
        'Mobile-first design',
        'SEO optimized',
        'Scalable architecture'
      ],
      category: 'Development',
      popular: true,
      link: 'https://ziontechgroup.com/web-development',
      savings: '40% off market rate'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'Native performance',
        'Offline capabilities',
        'Push notifications',
        'In-app purchases',
        'App store optimization',
        'Maintenance and updates'
      ],
      price: '$3999/project',
      marketPrice: '$8000-25000/project',
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'Modern UI/UX',
        'App store optimization'
      ],
      category: 'Development',
      popular: true,
      link: 'https://ziontechgroup.com/mobile-development',
      savings: '50% off market rate'
    },
    {
      id: 'data-analytics',
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics platforms and visualization',
      features: [
        'Real-time dashboards',
        'Data visualization',
        'Business intelligence',
        'Custom reports',
        'Data warehousing',
        'ETL processes',
        'Machine learning integration',
        'Predictive analytics'
      ],
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      benefits: [
        'Data-driven decisions',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting'
      ],
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/data-analytics',
      savings: '50% off market rate'
    },
    {
      id: 'ai-automation',
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring',
        'Integration capabilities',
        'Custom automation rules',
        'Analytics and reporting'
      ],
      price: '$349/month',
      marketPrice: '$600-2500/month',
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'AI Services',
      popular: true,
      link: 'https://ziontechgroup.com/ai-automation',
      savings: '70% off market rate'
    },
    {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your infrastructure',
      features: [
        'Technology assessment',
        'Digital transformation strategy',
        'IT infrastructure planning',
        'Security audits',
        'Cloud migration planning',
        'Technology roadmap',
        'Vendor evaluation',
        'Implementation support'
      ],
      price: '$200/hour',
      marketPrice: '$300-500/hour',
      benefits: [
        'Expert guidance',
        'Cost optimization',
        'Technology alignment',
        'Risk mitigation'
      ],
      category: 'Consulting',
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting',
      savings: '33% off market rate'
    },
    {
      id: 'ai-consulting',
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI implementation and optimization to help you leverage artificial intelligence effectively',
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'ROI analysis',
        'Change management',
        'Training and support',
        'Performance optimization',
        'Ongoing monitoring'
      ],
      price: '$250/hour',
      marketPrice: '$400-800/hour',
      benefits: [
        'AI expertise',
        'Strategic planning',
        'Implementation support',
        'ROI optimization'
      ],
      category: 'Consulting',
      popular: true,
      link: 'https://ziontechgroup.com/ai-consulting',
      savings: '37% off market rate'
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage)
  const currentServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime SLA' },
    { icon: Shield, value: '100%', label: 'Secure & Compliant' },
    { icon: Award, value: '4.9/5', label: 'Customer Rating' },
    { icon: Rocket, value: '24/7', label: 'Support' },
    { icon: Star, value: '50+', label: 'Countries Served' }
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
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <span>Call: (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    {service.savings && (
                      <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Call Now
                    </a>
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
                Let's discuss how our services can help transform your business. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-white/80">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default ServicesPage
