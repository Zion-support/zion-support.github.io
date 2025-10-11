'use client'
import React, { useState  } from 'react'
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
  Phone,
  Mail,
  MapPin
  } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const servicesPerPage = 9

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Automation', 'Chatbots'],
      pricing: 'Starting at $5,000/month',
      marketPrice: '$8,000-15,000/month',
      category: 'AI Services',
      popular: true,
      link: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      features: ['AWS Integration', 'Azure Services', 'Google Cloud', 'Hybrid Solutions', 'Migration Services', 'Cost Optimization'],
      pricing: 'Starting at $2,500/month',
      marketPrice: '$4,000-8,000/month',
      category: 'IT Services',
      popular: true,
      link: '/it-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response', 'Security Audits', 'Penetration Testing'],
      pricing: 'Starting at $3,000/month',
      marketPrice: '$5,000-12,000/month',
      category: 'IT Services',
      popular: true,
      link: '/cybersecurity-solutions'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics platforms',
      features: ['Real-time Dashboards', 'Data Visualization', 'Business Intelligence', 'Custom Reports', 'Predictive Analytics', 'Data Mining'],
      pricing: 'From $3,000/month',
      marketPrice: '$5,000-15,000/month',
      category: 'AI Services',
      popular: false,
      link: '/data-analytics'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Deployment', 'Maintenance', 'API Integration'],
      pricing: 'Starting at $8,000/project',
      marketPrice: '$15,000-50,000/project',
      category: 'IT Services',
      popular: false,
      link: '/mobile-development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications and e-commerce solutions',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning'],
      pricing: 'Starting at $5,000/project',
      marketPrice: '$10,000-30,000/project',
      category: 'IT Services',
      popular: true,
      link: '/web-development'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your operations with intelligent automation solutions',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Solutions', 'Integration', 'Monitoring', 'Scalability'],
      pricing: 'Starting at $2,000/month',
      marketPrice: '$4,000-10,000/month',
      category: 'AI Services',
      popular: false,
      link: '/ai-automation'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions for data-driven decisions',
      features: ['Custom Dashboards', 'KPI Tracking', 'Report Automation', 'Data Integration', 'Real-time Analytics', 'Forecasting'],
      pricing: 'Starting at $4,000/month',
      marketPrice: '$7,000-20,000/month',
      category: 'AI Services',
      popular: false,
      link: '/ai-analytics'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Comprehensive database design, optimization, and maintenance services',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Monitoring'],
      pricing: 'Starting at $1,500/month',
      marketPrice: '$2,500-5,000/month',
      category: 'IT Services',
      popular: false,
      link: '/it-services'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'AI Services', name: 'AI Services', count: services.filter(s => s.category === 'AI Services').length },
    { id: 'IT Services', name: 'IT Services', count: services.filter(s => s.category === 'IT Services').length }
  ]

  const filteredServices = services.filter(service => 
    (selectedCategory === 'all' || service.category === selectedCategory) &&
    (searchTerm === '' || 
     service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  )

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage)
  const currentServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  )

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
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
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
                        <option key={category.id} value={category.id} className="bg-gray-800">
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'all' ? 'All Services' : `${selectedCategory}`}
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
                      <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      Save up to 40% vs market rates
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold">+1 302 464 0950</div>
                    <div className="text-sm text-gray-300">Call us anytime</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold">kleber@ziontechgroup.com</div>
                    <div className="text-sm text-gray-300">Email us</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold">Middletown, DE</div>
                    <div className="text-sm text-gray-300">364 E Main St STE 1008</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Project
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
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
