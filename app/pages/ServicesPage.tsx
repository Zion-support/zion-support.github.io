import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Code, Cloud, Shield, Database, Globe, 
  Zap, ArrowRight, CheckCircle, Star, Users, 
  TrendingUp, Clock, Award, Target, Rocket,
  Phone, Mail, MapPin, ExternalLink, Filter,
  Search, Grid, List, ChevronDown
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const ServicesPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const microServices = [
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, code review, and automated testing.',
      price: '$29/mo',
      originalPrice: '$49/mo',
      features: ['Real-time code suggestions', 'Automated testing', 'Code review', 'Multi-language support', 'Git integration', 'Custom models'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      category: 'development',
      rating: 4.9,
      reviews: 1247,
      href: '/ai-code-assistant-pro',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'Smart Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-driven insights and predictive analytics.',
      price: '$49/mo',
      originalPrice: '$79/mo',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'API integration', 'Mobile app'],
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      category: 'analytics',
      rating: 4.8,
      reviews: 892,
      href: '/ai-analytics-dashboard-pro',
      popular: true
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing with advanced AI models.',
      price: '$19/mo',
      originalPrice: '$29/mo',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization', 'Multi-language', 'Brand voice'],
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      category: 'content',
      rating: 4.7,
      reviews: 2156,
      href: '/ai-content-generator',
      popular: false
    },
    {
      id: 'ai-cybersecurity-monitor-pro',
      name: 'Cybersecurity Monitor Pro',
      description: '24/7 AI-powered security monitoring with threat detection and automated response.',
      price: '$79/mo',
      originalPrice: '$129/mo',
      features: ['Threat detection', 'Automated response', 'Security reports', 'Compliance monitoring', 'Incident response', 'Forensics'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'security',
      rating: 4.9,
      reviews: 567,
      href: '/ai-cybersecurity-monitor-pro',
      popular: true
    },
    {
      id: 'ai-chatbot-enterprise',
      name: 'Chatbot Builder Enterprise',
      description: 'Build and deploy intelligent chatbots for customer support and sales automation.',
      price: '$39/mo',
      originalPrice: '$59/mo',
      features: ['No-code builder', 'Multi-channel support', 'Analytics dashboard', 'Custom integrations', 'Voice support', 'CRM sync'],
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
      category: 'automation',
      rating: 4.6,
      reviews: 1834,
      href: '/ai-chatbot-enterprise',
      popular: false
    },
    {
      id: 'ai-data-visualization',
      name: 'Data Visualization Studio',
      description: 'Transform complex data into stunning visualizations with AI-powered insights.',
      price: '$59/mo',
      originalPrice: '$89/mo',
      features: ['Interactive charts', 'Real-time updates', 'Custom templates', 'Export options', 'Collaboration tools', 'API access'],
      icon: Database,
      color: 'from-cyan-500 to-teal-500',
      category: 'analytics',
      rating: 4.8,
      reviews: 743,
      href: '/ai-data-visualization',
      popular: false
    },
    {
      id: 'ai-automation-suite',
      name: 'AI Automation Suite',
      description: 'Complete workflow automation platform with AI-powered decision making and process optimization.',
      price: '$69/mo',
      originalPrice: '$99/mo',
      features: ['Workflow builder', 'AI decision engine', 'Process optimization', 'Integration hub', 'Monitoring', 'Analytics'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      category: 'automation',
      rating: 4.7,
      reviews: 1123,
      href: '/ai-automation-suite',
      popular: false
    },
    {
      id: 'ai-crm-assistant',
      name: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights and automation.',
      price: '$45/mo',
      originalPrice: '$69/mo',
      features: ['Lead scoring', 'Automated follow-ups', 'Predictive analytics', 'Email automation', 'Sales forecasting', 'Integration'],
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      category: 'business',
      rating: 4.8,
      reviews: 967,
      href: '/ai-crm-assistant',
      popular: false
    },
    {
      id: 'ai-blockchain-solutions',
      name: 'AI Blockchain Solutions',
      description: 'Blockchain integration with AI-powered smart contracts and decentralized applications.',
      price: '$89/mo',
      originalPrice: '$149/mo',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'DeFi integration', 'Security audit', 'Compliance'],
      icon: Globe,
      color: 'from-violet-500 to-purple-500',
      category: 'blockchain',
      rating: 4.9,
      reviews: 234,
      href: '/ai-blockchain-solutions',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microServices.length },
    { id: 'development', name: 'Development', count: microServices.filter(s => s.category === 'development').length },
    { id: 'analytics', name: 'Analytics', count: microServices.filter(s => s.category === 'analytics').length },
    { id: 'content', name: 'Content', count: microServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', count: microServices.filter(s => s.category === 'security').length },
    { id: 'automation', name: 'Automation', count: microServices.filter(s => s.category === 'automation').length },
    { id: 'business', name: 'Business', count: microServices.filter(s => s.category === 'business').length },
    { id: 'blockchain', name: 'Blockchain', count: microServices.filter(s => s.category === 'blockchain').length }
  ];

  const filteredServices = microServices.filter(service => {
    const matchesFilter = filter === 'all' || service.category === filter;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const popularServices = microServices.filter(service => service.popular);

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive suite of AI and IT services including micro SAAS solutions, enterprise services, and custom development." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, data analytics, web development" />
      </Helmet>

      <FuturisticBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI and IT solutions designed to transform your business. 
              From micro SAAS services to enterprise solutions, we have everything you need.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === category.id
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Popular Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
                  >
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">({service.reviews})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                      </div>
                    </div>

                    <Link
                      to={service.href}
                      className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Started
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              All Services
            </h2>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({service.reviews})</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                        </div>
                      </div>

                      <Link
                        to={service.href}
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                      >
                        Get Started
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-start space-x-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h3>
                              <p className="text-gray-300 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                              <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                              </div>
                            </div>
                            <Link
                              to={service.href}
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria.</div>
                <button
                  onClick={() => {
                    setFilter('all');
                    setSearchTerm('');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team can create tailored AI and IT solutions specifically for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+13024640950"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;