import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Brain, Atom, Cpu, Shield, Database, Cloud,
  ArrowRight, CheckCircle, Zap, Sparkles
} from 'lucide-react';
import { ultimateInnovativeServices2026 } from '../data/2026-ultimate-innovative-services';
import { enterpriseITInfrastructureServices2026 } from '../data/2026-enterprise-it-infrastructure-services';
import Link from 'next/link';

const Services2024Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'customers'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Combine all services
  const allServices = [...ultimateInnovativeServices2026, ...enterpriseITInfrastructureServices2026];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'it' && service.category.includes('IT')) ||
                             (selectedCategory === 'api' && service.category.includes('API')) ||
                             (selectedCategory === 'cloud' && service.category.includes('Cloud')) ||
                             (selectedCategory === 'marketing' && service.category.includes('Marketing')) ||
                             (selectedCategory === 'project' && service.category.includes('Project')) ||
                             (selectedCategory === 'customer' && service.category.includes('Customer'));
      
      return matchesSearch && matchesCategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'customers':
          aValue = a.customers;
          bValue = b.customers;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [allServices, searchQuery, selectedCategory, sortBy, sortOrder]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allServices.length },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Security', icon: Shield, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'it', name: 'Enterprise IT', icon: Cpu, count: allServices.filter(s => s.category.includes('IT')).length },
    { id: 'api', name: 'API & Development', icon: Database, count: allServices.filter(s => s.category.includes('API')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud')).length },
    { id: 'marketing', name: 'Marketing & SEO', icon: TrendingUp, count: allServices.filter(s => s.category.includes('Marketing')).length },
    { id: 'project', name: 'Project Management', icon: Users, count: allServices.filter(s => s.category.includes('Project')).length },
    { id: 'customer', name: 'Customer Success', icon: CheckCircle, count: allServices.filter(s => s.category.includes('Customer')).length }
  ];

  const getVariantIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Shield;
    if (category.includes('IT')) return Cpu;
    if (category.includes('API')) return Database;
    if (category.includes('Cloud')) return Cloud;
    if (category.includes('Marketing')) return TrendingUp;
    if (category.includes('Project')) return Users;
    if (category.includes('Customer')) return CheckCircle;
    return Sparkles;
  };

  const getVariantColor = (category: string) => {
    if (category.includes('AI')) return 'from-blue-500 to-cyan-500';
    if (category.includes('Quantum')) return 'from-red-500 to-pink-500';
    if (category.includes('IT')) return 'from-green-500 to-emerald-500';
    if (category.includes('API')) return 'from-purple-500 to-violet-500';
    if (category.includes('Cloud')) return 'from-indigo-500 to-blue-500';
    if (category.includes('Marketing')) return 'from-yellow-500 to-orange-500';
    if (category.includes('Project')) return 'from-teal-500 to-cyan-500';
    if (category.includes('Customer')) return 'from-pink-500 to-rose-500';
    return 'from-gray-500 to-slate-500';
  };

  return (
    <>
      <Head>
        <title>2024 Revolutionary Services - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2024 services including AI automation, quantum security, and enterprise IT solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, quantum security, enterprise IT, automation, 2024 technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

      <div className="relative z-10 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">2024 Revolutionary Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the next generation of AI, quantum security, and enterprise IT solutions. 
                Transform your business with our revolutionary 2024 service portfolio.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}</div>
                  <div className="text-gray-400">Revolutionary Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">17</div>
                  <div className="text-gray-400">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">4.8</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services by name, features, or description..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <select
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [newSortBy, newSortOrder] = e.target.value.split('-');
                      setSortBy(newSortBy as 'name' | 'price' | 'rating' | 'customers');
                      setSortOrder(newSortOrder as 'asc' | 'desc');
                    }} className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                    <option value="price-asc">Price Low-High</option>
                    <option value="price-desc">Price High-Low</option>
                    <option value="rating-desc">Rating High-Low</option>
                    <option value="customers-desc">Customers High-Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-black/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    {/* Service Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getVariantColor(service.category)}`}>
                          {React.createElement(getVariantIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        <div className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                          {service.category}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}
                      </div>
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold text-white">{service.rating}</span>
                        </div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white mb-1">{service.customers}</div>
                        <div className="text-xs text-gray-400">Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white mb-1">{service.launchDate}</div>
                        <div className="text-xs text-gray-400">Launched</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={service.link} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                      <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        {service.category}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already leveraging our revolutionary 2024 services. 
                Get started today and experience the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact" className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>Get Started Today</span>
                </Link>
                <Link
                  href="/pricing-2033" className="flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold">
                  <span>View Pricing Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services2024Page;