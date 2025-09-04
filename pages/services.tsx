import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Network, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Filter,
  Search,
  ExternalLink
} from 'lucide-react';
import { servicesCatalog } from '../data/services';

const categories = [
  { id: 'all', name: 'All Services', icon: Filter, count: servicesCatalog.length },
  { id: 'Micro-SaaS', name: 'Micro SaaS', icon: Cloud, count: servicesCatalog.filter(s => s.category === 'Micro-SaaS').length },
  { id: 'IT Services', name: 'IT Services', icon: Network, count: servicesCatalog.filter(s => s.category === 'IT Services').length },
  { id: 'AI Solutions', name: 'AI Solutions', icon: Brain, count: servicesCatalog.filter(s => s.category === 'AI Solutions').length }
];

const pricingRanges = [
  { id: 'all', name: 'All Prices' },
  { id: 'under-100', name: 'Under $100/mo' },
  { id: '100-500', name: '$100 - $500/mo' },
  { id: '500-2000', name: '$500 - $2,000/mo' },
  { id: 'project', name: 'Project-based' }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesCatalog.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPricing = true;
    if (selectedPricing !== 'all') {
      const price = service.startingPriceUSD.toLowerCase();
      if (selectedPricing === 'under-100') {
        matchesPricing = price.includes('$') && (price.includes('99') || price.includes('79') || price.includes('49'));
      } else if (selectedPricing === '100-500') {
        matchesPricing = price.includes('$') && (price.includes('149') || price.includes('199') || price.includes('129'));
      } else if (selectedPricing === '500-2000') {
        matchesPricing = price.includes('$') && (price.includes('2,500') || price.includes('3,500') || price.includes('4,000'));
      } else if (selectedPricing === 'project') {
        matchesPricing = price.includes('project') || price.includes('From $');
      }
    }
    
    return matchesCategory && matchesSearch && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro-SaaS': return Cloud;
      case 'IT Services': return Network;
      case 'AI Solutions': return Brain;
      default: return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro-SaaS': return 'from-green-500 to-emerald-500';
      case 'IT Services': return 'from-blue-500 to-cyan-500';
      case 'AI Solutions': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Layout
      title="Our Services - Zion Tech Group | AI, IT & Micro SaaS Solutions"
      description="Explore our comprehensive portfolio of 50+ technology services including AI solutions, IT services, and micro SaaS platforms. Transform your business with cutting-edge technology."
      keywords="AI services, IT services, micro SaaS, technology solutions, digital transformation, cloud services, cybersecurity"
      canonical="https://ziontechgroup.com/services"
    >
      <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of {servicesCatalog.length}+ innovative solutions designed to transform your business and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {pricingRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-600">
              {selectedCategory !== 'all' && `Filtered by ${categories.find(c => c.id === selectedCategory)?.name}`}
              {selectedPricing !== 'all' && ` • ${pricingRanges.find(p => p.id === selectedPricing)?.name}`}
              {searchTerm && ` • Search: "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              const colorClass = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.slug}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${colorClass} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="w-12 h-12" />
                      <span className="bg-white/20 text-xs px-3 py-1 rounded-full font-medium">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-medium">Starting Price</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {service.startingPriceUSD}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">Timeline</span>
                      </div>
                      <div className="text-sm text-gray-700">
                        {service.typicalTimeline}
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Proven ROI and measurable results</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Expert implementation and support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Scalable and future-proof solutions</span>
                        </li>
                      </ul>
                    </div>

                    {/* References */}
                    {service.references && service.references.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">References:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.references.map((ref, refIndex) => (
                            <a
                              key={refIndex}
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                            >
                              {ref.label}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Link
                        href={service.link}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors inline-flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium text-center transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPricing('all');
                  setSearchTerm('');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and find the perfect solution for your business. 
              Get a free consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
                <div className="flex items-center justify-center">
                  <span className="font-semibold">📞 +1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">✉️ kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">📍 364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
}