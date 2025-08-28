import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, categories, services, containerVariants } from '@/data/services.constants';
import { CheckCircle, TrendingUp, Mail } from 'lucide-react';

interface ServiceShowcaseProps {
  className?: string;
}

export function ServicesShowcase({ className = '' }: ServiceShowcaseProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2025];

  // Group services by category
  const servicesByCategory = allServices.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, any[]>);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(service =>
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover our extensive collection of cutting-edge micro SAAS solutions designed to transform your business.
            From AI-powered analytics to quantum computing, we offer innovative solutions across all major technology domains.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-slate-light">Total Services</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-zion-purple mb-2">{categories.length}</div>
              <div className="text-zion-slate-light">Technology Categories</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-zion-blue mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-zion-green mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-zion-slate-dark/50 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <Link to={service.href}>
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                {/* Category & Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zion-slate-light/20 rounded-full text-xs text-zion-cyan">
                    {service.category}
                  </span>
                  {service.subcategory && (
                    <span className="px-3 py-1 bg-zion-slate-light/20 rounded-full text-xs text-zion-purple">
                      {service.subcategory}
                    </span>
                  )}
                </div>

                {/* Features Preview */}
                {service.features && service.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-green" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-zion-slate-light">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {service.benefits && service.benefits.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                          <TrendingUp className="w-3 h-3 text-zion-green" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Technology:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technicalSpecs.technology.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-slate-light/10 rounded text-xs text-zion-slate-light">
                          {tech}
                        </span>
                      ))}
                      {service.technicalSpecs.technology.length > 3 && (
                        <span className="px-2 py-1 bg-zion-slate-light/10 rounded text-xs text-zion-slate-light">
                          +{service.technicalSpecs.technology.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Market Info */}
                <div className="pt-4 border-t border-zion-slate-light/20">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-zion-slate-light">
                      Market Price: <span className="text-white">{service.marketPrice}</span>
                    </div>
                    <div className="text-zion-green font-semibold">
                      ROI: {service.roi}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105">
                    Get Started
                  </button>
                </div>

                {/* Contact Info */}
                <div className="text-center pt-2">
                  <div className="text-xs text-zion-slate-light">
                    Contact: <a href={`mailto:${service.contactInfo?.email || 'kleber@ziontechgroup.com'}`} className="text-zion-cyan hover:underline">
                      {service.contactInfo?.email || 'kleber@ziontechgroup.com'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
              Get in touch today to start your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="bg-zion-slate-light/10 text-white px-8 py-4 rounded-xl font-medium hover:bg-zion-slate-light/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                View All Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}