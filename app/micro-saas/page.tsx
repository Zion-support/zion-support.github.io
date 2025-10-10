'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Shield, 
  BarChart, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Globe,
  Smartphone,
  CreditCard,
  Award,
  TrendingUp,
  Sparkles,
  Target,
  Rocket,
  Play,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { microSaasServices, categories, pricingTiers } from '../data/microSaasServices';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const servicesPerPage = 12;

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & ML': <Brain className="w-5 h-5" />,
      'Analytics': <BarChart className="w-5 h-5" />,
      'CRM & Sales': <Users className="w-5 h-5" />,
      'Marketing': <Target className="w-5 h-5" />,
      'Customer Support': <Shield className="w-5 h-5" />,
      'SEO & Marketing': <Search className="w-5 h-5" />,
      'Finance & Accounting': <CreditCard className="w-5 h-5" />,
      'Productivity': <Zap className="w-5 h-5" />,
      'Design & Creative': <Sparkles className="w-5 h-5" />,
      'Social Media': <Globe className="w-5 h-5" />,
      'Development': <Smartphone className="w-5 h-5" />,
      'HR & Recruitment': <Users className="w-5 h-5" />,
      'Healthcare': <Shield className="w-5 h-5" />,
      'Real Estate': <Globe className="w-5 h-5" />,
      'Legal': <Award className="w-5 h-5" />,
      'Education': <Award className="w-5 h-5" />,
      'Supply Chain': <TrendingUp className="w-5 h-5" />
    };
    return iconMap[category] || <Rocket className="w-5 h-5" />;
  };

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } holographic-text cyber-text glitch`} data-text="Micro SaaS Solutions">
              Micro SaaS Solutions
            </h1>
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Transform your operations with intelligent automation and cutting-edge technology.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS tools..."
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {getCategoryIcon(category)}
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
              <h2 className="text-3xl font-bold text-white neon-text">
                {selectedCategory === 'All' ? 'All Micro SaaS Tools' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} tool{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group relative ${
                    hoveredCard === service.id ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  )}
                  {service.new && (
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                  
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          {getCategoryIcon(service.category)}
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-gray-400 text-xs">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                    <div className="text-xs text-gray-300">Save {Math.round((1 - parseFloat(service.price.replace('$', '')) / parseFloat(service.marketPrice.replace('$', ''))) * 100)}% vs market price</div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/micro-saas/${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {service.freeTrial && (
                      <Link
                        to="/contact"
                        className="w-full border border-white/20 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-center text-sm"
                      >
                        Start Free Trial
                      </Link>
                    )}
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
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
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
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include free trials and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${
                  tier.popular ? 'border-2 border-cyan-500' : 'border border-white/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                    <div className="text-gray-400">per {tier.period}</div>
                    <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Why Choose Our Micro SaaS Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered micro SaaS solutions are designed to solve specific business challenges with maximum efficiency and minimal complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
                <p className="text-gray-300">Get up and running in minutes with our intuitive setup process and comprehensive onboarding.</p>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Leverage cutting-edge AI technology to automate tasks and gain intelligent insights.</p>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with SOC 2 compliance, GDPR protection, and 99.9% uptime guarantee.</p>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support from our expert team to ensure your success and satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI-powered micro SaaS tools to streamline operations and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;