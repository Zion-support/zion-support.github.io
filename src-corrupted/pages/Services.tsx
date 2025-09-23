import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  Zap,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Cpu,
  Lock,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Award,
  Rocket,
  Lightbulb,
  Target,
  BarChart3,
  Code,
  Server,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'popularity' | 'newest'>('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3, count: 0 },
    { id: 'ai', name: 'AI Solutions', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'data', name: 'Data Analytics', icon: Database, count: 0 },
    { id: 'web', name: 'Web Development', icon: Code, count: 0 },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, count: 0 },
    { id: 'consulting', name: 'Consulting', icon: Users, count: 0 }
  ];

  const services = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      category: 'ai',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      pricing: '$2,500/month',
      rating: 4.9,
      reviews: 127,
      delivery: '2-3 weeks',
      popularity: 'high',
      isNew: false,
      icon: Brain,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Cloud Migration & Optimization',
      category: 'cloud',
      description: 'Seamlessly migrate to the cloud and optimize your infrastructure for maximum performance.',
      features: ['AWS/Azure migration', 'Cost optimization', 'Performance tuning', '24/7 monitoring'],
      pricing: '$5,000/project',
      rating: 4.8,
      reviews: 89,
      delivery: '4-6 weeks',
      popularity: 'high',
      isNew: false,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Cybersecurity Assessment & Implementation',
      category: 'security',
      description: 'Comprehensive security evaluation and implementation of enterprise-grade protection.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security framework', 'Compliance audit'],
      pricing: '$8,000/project',
      rating: 4.9,
      reviews: 156,
      delivery: '3-4 weeks',
      popularity: 'high',
      isNew: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      name: 'Data Pipeline & ETL Solutions',
      category: 'data',
      description: 'Build robust data pipelines for seamless data integration and transformation.',
      features: ['ETL automation', 'Data quality checks', 'Real-time streaming', 'Scalable architecture'],
      pricing: '$3,500/month',
      rating: 4.7,
      reviews: 73,
      delivery: '3-4 weeks',
      popularity: 'medium',
      isNew: true,
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      name: 'Full-Stack Web Development',
      category: 'web',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'Deployment & hosting'],
      pricing: '$15,000/project',
      rating: 4.8,
      reviews: 234,
      delivery: '8-12 weeks',
      popularity: 'high',
      isNew: false,
      icon: Code,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      name: 'Mobile App Development',
      category: 'mobile',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native development', 'Cross-platform', 'App store submission', 'Maintenance support'],
      pricing: '$25,000/project',
      rating: 4.9,
      reviews: 189,
      delivery: '12-16 weeks',
      popularity: 'high',
      isNew: false,
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 7,
      name: 'IT Strategy Consulting',
      category: 'consulting',
      description: 'Strategic IT planning and digital transformation consulting for enterprises.',
      features: ['Technology assessment', 'Roadmap planning', 'Vendor selection', 'Implementation guidance'],
      pricing: '$200/hour',
      rating: 4.9,
      reviews: 67,
      delivery: 'Ongoing',
      popularity: 'medium',
      isNew: false,
      icon: Users,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      name: 'AI Chatbot Development',
      category: 'ai',
      description: 'Intelligent chatbots powered by natural language processing and machine learning.',
      features: ['NLP integration', 'Multi-language support', 'Analytics dashboard', 'Easy deployment'],
      pricing: '$4,000/project',
      rating: 4.6,
      reviews: 45,
      delivery: '4-5 weeks',
      popularity: 'medium',
      isNew: true,
      icon: Bot,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  // Update category counts
  categories.forEach(cat => {
    cat.count = services.filter(service => cat.id === 'all' || service.category === cat.id).length;
  });

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
        filtered.sort((a, b) => {
          const popularityOrder = { high: 3, medium: 2, low: 1 };
          return popularityOrder[b.popularity] - popularityOrder[a.popularity];
        });
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'high': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'low': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <>
      <SEO 
        title="Services - AI, Cloud, Cybersecurity & Development Solutions | Zion Tech Group"
        description="Comprehensive technology services including AI solutions, cloud migration, cybersecurity, web development, and IT consulting. Expert teams delivering innovative solutions."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full border border-blue-400/30 mb-6">
                <Rocket className="w-4 h-4" />
                Professional Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Technology
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {' '}Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From AI-powered analytics to enterprise cybersecurity, we deliver cutting-edge solutions 
                that drive business transformation and digital innovation.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="name">Name A-Z</option>
                    <option value="newest">Newest First</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex bg-slate-700/50 border border-slate-600/50 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-blue-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'list' 
                          ? 'bg-blue-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-center">
                  <span className="text-gray-400">
                    Showing {filteredServices.length} of {services.length} services
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-6">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </motion.div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group ${
                    viewMode === 'list' ? 'flex items-start gap-6' : ''
                  }`}
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto'
                  }`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <div className={`flex-1 ${viewMode === 'list' ? 'min-w-0' : ''}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      {service.isNew && (
                        <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full border border-green-400/30">
                          <Sparkles className="w-3 h-3" />
                          New
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                      <div className={`grid gap-1 ${
                        viewMode === 'list' ? 'grid-cols-2' : 'grid-cols-1'
                      }`}>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{service.rating}</span>
                          <span className="text-gray-500">({service.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.delivery}</span>
                        </div>
                      </div>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getPopularityColor(service.popularity)}`}>
                        {service.popularity}
                      </span>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">{service.pricing}</div>
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:gap-3">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/20 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our technology solutions can drive innovation, 
              improve efficiency, and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 bg-slate-700/50 text-white font-medium py-3 px-8 rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300">
                <span>View Case Studies</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
