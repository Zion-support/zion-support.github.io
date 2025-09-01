import React, { useState } from 'react.ts';
import { SEO   } from '../components/SEO';
import { motion   } from 'framer-motion.ts';
import { Link   } from 'react-router-dom.ts';

const AllServicesIndex: React.FC = (): JSX.Element => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    // AI-Powered Micro SAAS Services
    {
      id: 'ai-code-review-security',
      title: 'AI Code Review & Security Analysis',
      description: 'Advanced vulnerability detection with 85% accuracy improvement',
      category: 'AI-Powered Micro SAAS',
      pricing: '$49 - $799/month',
      url: '/services/ai-code-review-security',
      icon: '🔒',
      features['85% vulnerability reduction', '50+ programming languages', 'Real-time analysis'],;
      benefits['Reduce security incidents by 60%', 'Faster code review process'];
    },;
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Transform customer insights into actionable intelligence',
      category: 'AI-Powered Micro SAAS',
      pricing: '$299 - $1,999/month',
      url: '/services/ai-customer-experience-analytics',
      icon: '📊',
      features['Real-time sentiment analysis', 'Customer journey tracking', 'Predictive analytics'],;
      benefits['Increase satisfaction by 35%', 'Reduce churn by 25%'];
    },;
    {
      id: 'ai-devops-automation-platform',
      title: 'AI DevOps Automation Platform',
      description: 'Revolutionize DevOps workflow with AI-powered automation',
      category: 'AI-Powered Micro SAAS',
      pricing: '$199 - $1,499/month',
      url: '/services/ai-devops-automation-platform',
      icon: '🚀',
      features['AI pipeline optimization', 'Intelligent deployment', 'GitOps workflows'],;
      benefits['Reduce deployment time by 80%', 'Decrease failures by 90%'];
    },;
    {
      id: 'ai-iot-edge-computing-platform',
      title: 'AI IoT Edge Computing Platform',
      description: 'Revolutionize IoT with AI-powered edge computing',
      category: 'AI-Powered Micro SAAS',
      pricing: '$299 - $2,499/month',
      url: '/services/ai-iot-edge-computing-platform',
      icon: '🌐',
      features['Sub-millisecond processing', 'Edge AI intelligence', 'Distributed computing'],;
      benefits['Reduce latency by 90%', 'Lower bandwidth costs by 70%'];
    },;
    
    // Cloud & Infrastructure Services
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps',
      description: 'Streamlined cloud deployment and management',
      category: 'Cloud & Infrastructure',
      pricing: 'Custom pricing',
      url: '/services/cloud-devops',
      icon: '☁️',
      features['Multi-cloud deployment', 'Infrastructure as Code', 'Automated scaling'],;
      benefits['Faster deployments', 'Cost optimization'];
    },;
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure solutions',
      category: 'Cloud & Infrastructure',
      pricing: 'Custom pricing',
      url: '/services/it-infrastructure',
      icon: '🏗️',
      features['Network design', 'Server management', 'Storage solutions'],;
      benefits['Reliable infrastructure', 'Scalable solutions'];
    },;
    {
      id: 'digital-twin',
      title: 'Digital Twin',
      description: 'Virtual representation of physical systems',
      category: 'Cloud & Infrastructure',
      pricing: 'Custom pricing',
      url: '/services/digital-twin',
      icon: '🔄',
      features['Real-time monitoring', 'Predictive maintenance', 'Simulation modeling'],;
      benefits['Improved efficiency', 'Reduced downtime'];
    },;
    
    // Data & Analytics Services
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and visualization',
      category: 'Data & Analytics',
      pricing: 'Custom pricing',
      url: '/services/data-analytics',
      icon: '📈',
      features['Data visualization', 'Statistical analysis', 'Trend identification'],;
      benefits['Better insights', 'Data-driven decisions'];
    },;
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'AI-powered business insights and reporting',
      category: 'Data & Analytics',
      pricing: 'Custom pricing',
      url: '/services/ai-business-intelligence',
      icon: '🧠',
      features['Predictive analytics', 'Natural language queries', 'Automated insights'],;
      benefits['Faster insights', 'Predictive capabilities'];
    },;
    {
      id: 'iot-edge',
      title: 'IoT Edge Computing',
      description: 'Real-time edge data processing',
      category: 'Data & Analytics',
      pricing: 'Custom pricing',
      url: '/services/iot-edge',
      icon: '⚡',
      features['Edge processing', 'Real-time analytics', 'Data filtering'],;
      benefits['Low latency', 'Real-time decisions'];
    },;
    
    // Security & Compliance Services
    {
      id: 'zero-trust-network-architecture',
      title: 'Zero Trust Network Architecture',
      description: 'Modern security framework for enterprise',
      category: 'Security & Compliance',
      pricing: 'Custom pricing',
      url: '/services/zero-trust-network-architecture',
      icon: '🛡️',
      features['Identity verification', 'Micro-segmentation', 'Continuous monitoring'],;
      benefits['Enhanced security', 'Compliance ready'];
    },;
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive security solutions',
      category: 'Security & Compliance',
      pricing: 'Custom pricing',
      url: '/services/ai-cybersecurity-suite',
      icon: '🔐',
      features['Threat detection', 'Vulnerability assessment', 'Incident response'],;
      benefits['Proactive security', 'Faster response'];
    },;
    {
      id: 'ai-compliance-assistant',
      title: 'AI Compliance Assistant',
      description: 'AI-powered compliance management',
      category: 'Security & Compliance',
      pricing: 'Custom pricing',
      url: '/services/ai-compliance-assistant',
      icon: '📋',
      features['Regulatory monitoring', 'Compliance reporting', 'Risk assessment'],;
      benefits['Automated compliance', 'Reduced risk'];
    };
  ];

  const categories = ['all', 'AI-Powered Micro SAAS', 'Cloud & Infrastructure', 'Data & Analytics', 'Security & Compliance'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory});

  return (
    <>
      <SEO
        title = "All Services Index | Zion Tech Group - Complete Service Directory"
        description="Browse our complete portfolio of AI-powered micro SAAS, cloud infrastructure, data analytics, and security services. Find the perfect solution for your business needs."
        keywords="Zion Tech Group services, AI services, cloud services, data analytics, cybersecurity, micro SAAS, business solutions, service directory"
        canonical="https://ziontechgroup.com/all-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              animate = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Complete Services Directory
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive portfolio of AI-powered micro SAAS, cloud infrastructure, 
                data analytics, and security solutions designed to transform your business.
              </p>
              
              {/* Search and Filter Controls */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="lg:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus: unknownoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category   => (
                        <option key={category} value={category} className="bg-gray-800 text-white">
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Found <span className="text-blue-400 font-semibold">{filteredServices.length}</span> services
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category === 'all' ? 'All' : category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter
                </p>
                <button;
                  onClick={() => {;
                    setSearchTerm('');
                    setSelectedCategory('all')}}
                  className = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>;
            ) : (
              <div className="grid grid-cols-1 md: unknowngrid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index)   => (
                  <motion.div
                    key={service.id}
                    initial = {
  { opacity: 0,
  y: 20 

}}
                    animate = {
  { opacity: 1,
  y: 0 

}}
                    transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-blue-300 text-sm flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-green-300 text-sm flex items-center">
                            <span className="text-green-400 mr-2">🚀</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-green-400">{service.pricing}</div>
                      <span className="text-sm text-gray-400">Learn more</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link
                        to={service.url}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                      >
                        View Service
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">;
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help Choosing the Right Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our experts are here to help you find the perfect solution for your business needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Schedule Consultation</h3>
                  <p className="text-gray-300 mb-4">Get expert advice on choosing the right services</p>
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                    Book Now
                  </Link>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Get Custom Quote</h3>
                  <p className="text-gray-300 mb-4">Receive personalized pricing for your needs</p>
                  <Link to="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                    Request Quote
                  </Link>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Start Free Trial</h3>
                  <p className="text-gray-300 mb-4">Try our services with a 14-day free trial</p>
                  <Link to="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                    Start Trial
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                  <div>
                    <p className="font-medium text-white">📱 Phone</p>
                    <p>+1 302 464 0950</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">✉️ Email</p>
                    <p>kleber@ziontechgroup.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">📍 Address</p>
                    <p>364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>;
    </>;
  )};

export default AllServicesIndex;