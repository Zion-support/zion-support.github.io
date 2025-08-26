import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services, getServicesByCategory, getPopularServices, getNewServices } from '../../data/services';
import { Shield, Cpu, Database, Globe, Lock, Star, Sparkles, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import ModernLayout from '../../components/layout/ModernLayout';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, count: services.length },
    { id: 'AI', name: 'AI Services', icon: Cpu, count: getServicesByCategory('AI').length },
    { id: 'IT', name: 'IT Solutions', icon: Shield, count: getServicesByCategory('IT').length },
    { id: 'SAAS', name: 'SAAS Platforms', icon: Database, count: getServicesByCategory('SAAS').length },
    { id: 'Development', name: 'Development', icon: Globe, count: getServicesByCategory('Development').length },
    { id: 'Security', name: 'Security', icon: Lock, count: getServicesByCategory('Security').length },
    { id: 'Cloud', name: 'Cloud', count: getServicesByCategory('Cloud').length },
    { id: 'Analytics', name: 'Analytics', count: getServicesByCategory('Analytics').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <ModernLayout
      title="Our Services - Zion Tech Group | AI, IT, SAAS & Development Solutions"
      description="Explore our comprehensive range of technology services including AI solutions, IT services, SAAS platforms, custom development, and cybersecurity solutions."
      keywords="AI services, IT solutions, SAAS platforms, web development, mobile apps, cybersecurity, cloud migration, data analytics"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to transform your business. 
            From cutting-edge AI to robust IT infrastructure, we deliver results that drive growth.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-neon-blue/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neon-blue">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-neon-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/25'
                    : 'bg-white/5 border border-neon-blue/20 text-gray-300 hover:bg-white/10 hover:border-neon-blue/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon && <category.icon className="w-5 h-5" />}
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      {popularServices.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Most Popular</span>
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Trending Services
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our most requested services that are transforming businesses across industries
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-8 h-full hover:border-neon-blue/40 transition-all duration-300 hover:bg-black/60">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-neon-blue mb-2">
                        ${service.pricing.starter}
                        <span className="text-lg text-gray-400 font-normal">/{service.pricing.period}</span>
                      </div>
                      <p className="text-gray-400 text-sm">Starting from</p>
                    </div>

                    <a
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors font-medium group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Complete Service Portfolio
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover our full range of technology solutions tailored to your business needs
            </motion.p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-6 h-full hover:border-neon-blue/40 transition-all duration-300 hover:bg-black/60">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.isNew && (
                        <span className="inline-flex items-center space-x-1 px-2 py-1 bg-neon-green/20 border border-neon-green/30 rounded-full text-xs text-neon-green">
                          <Sparkles className="w-3 h-3" />
                          <span>New</span>
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-neon-blue">
                        ${service.pricing.starter}
                        <span className="text-sm text-gray-400 font-normal">/{service.pricing.period}</span>
                      </div>
                    </div>

                    <a
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our technology solutions can drive your business forward. 
              Get in touch for a personalized consultation and free assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:from-neon-purple hover:to-neon-blue transition-all duration-300 shadow-lg hover:shadow-neon-blue/25 inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default ServicesPage;