'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Cloud, Shield, Code, BarChart, Zap, CheckCircle, ArrowRight, Search, Filter, Star, Users, TrendingUp, Award, Rocket } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const categories = ['All', 'AI Solutions', 'Cloud Services', 'Cybersecurity', 'Development', 'Analytics', 'Automation', 'Consulting']

  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced business intelligence with machine learning algorithms for predictive insights and real-time data visualization.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration', 'Automated Reporting', 'Data Visualization'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      category: 'AI Solutions',
      popular: true,
      benefits: ['Increase decision speed by 80%', 'Reduce manual reporting by 90%', 'Improve accuracy by 95%']
    },
    {
      icon: Cloud,
      title: 'Enterprise Cloud Migration',
      description: 'Complete cloud infrastructure setup and migration services with 99.9% uptime guarantee.',
      features: ['AWS/Azure/GCP Setup', 'Data Migration', 'Security Configuration', 'Cost Optimization', '24/7 Monitoring', 'Disaster Recovery'],
      price: 'Starting at $1,999/project',
      marketPrice: '$5000-15000/project',
      category: 'Cloud Services',
      popular: true,
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhanced security']
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and incident response.',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Penetration Testing', 'Security Audits', 'Incident Response', 'Compliance Management'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-3000/month',
      category: 'Cybersecurity',
      popular: true,
      benefits: ['Prevent 99.9% of cyber threats', 'Reduce security incidents by 95%', 'Ensure compliance']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored web and mobile applications built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design', 'UI/UX Design', 'Quality Assurance'],
      price: 'Starting at $99/hour',
      marketPrice: '$150-300/hour',
      category: 'Development',
      popular: false,
      benefits: ['Faster time to market', 'Custom solutions', 'Ongoing support']
    },
    {
      icon: BarChart,
      title: 'Data Science & Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning models.',
      features: ['Data Mining', 'Statistical Analysis', 'Machine Learning', 'Predictive Analytics', 'Data Visualization', 'Business Intelligence'],
      price: 'Starting at $199/hour',
      marketPrice: '$250-500/hour',
      category: 'Analytics',
      popular: false,
      benefits: ['Data-driven decisions', 'Competitive advantage', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions that reduce manual work and improve efficiency.',
      features: ['Workflow Automation', 'RPA Implementation', 'System Integration', 'Process Optimization', 'Monitoring & Analytics', 'Custom Solutions'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2000/month',
      category: 'Automation',
      popular: true,
      benefits: ['Reduce manual work by 70%', 'Improve accuracy', 'Scale operations']
    },
    {
      icon: Users,
      title: 'AI Customer Support System',
      description: 'Intelligent chatbot and customer service automation with natural language processing.',
      features: ['AI Chatbot', 'Multi-language Support', 'Sentiment Analysis', 'Ticket Management', 'Knowledge Base', 'Live Agent Handoff'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      category: 'AI Solutions',
      popular: false,
      benefits: ['24/7 customer support', 'Reduce response time by 90%', 'Improve satisfaction']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing Analytics',
      description: 'Comprehensive marketing analytics platform with campaign optimization and ROI tracking.',
      features: ['Campaign Tracking', 'ROI Analysis', 'A/B Testing', 'Customer Journey Mapping', 'Conversion Optimization', 'Multi-channel Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      category: 'Analytics',
      popular: false,
      benefits: ['Increase ROI by 150%', 'Optimize campaigns', 'Better targeting']
    },
    {
      icon: Award,
      title: 'IT Consulting & Strategy',
      description: 'Strategic technology consulting to align IT infrastructure with business objectives.',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance', 'Change Management', 'Ongoing Support'],
      price: 'Starting at $299/hour',
      marketPrice: '$400-600/hour',
      category: 'Consulting',
      popular: false,
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk mitigation']
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to accelerate your digital transformation and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Email Us
            </a>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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

                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-300">Market rate: {service.marketPrice}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+13024640950" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                    Learn More
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Call: +1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-white/80">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage