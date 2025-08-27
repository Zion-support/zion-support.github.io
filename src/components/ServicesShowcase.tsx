import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { innovativeMicroSaasServices2025 as INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

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
  }, {} as Record<string, typeof allServices>);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue', count: allServices.length },
    { id: 'AI', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: servicesByCategory['AI & Analytics']?.length || 0 },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan', count: servicesByCategory['Quantum Computing']?.length || 0 },
    { id: 'Blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue', count: servicesByCategory['Blockchain']?.length || 0 },
    { id: 'IoT', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan', count: servicesByCategory['IoT & Edge']?.length || 0 },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: servicesByCategory['Cybersecurity']?.length || 0 },
    { id: 'Healthcare', name: 'Healthcare', icon: Users, color: 'from-zion-pink to-zion-purple', count: servicesByCategory['Healthcare']?.length || 0 },
    { id: 'Finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-blue', count: servicesByCategory['Finance']?.length || 0 },
    { id: 'Manufacturing', name: 'Manufacturing', icon: Server, color: 'from-zion-blue to-zion-purple', count: servicesByCategory['Manufacturing']?.length || 0 },
    { id: 'Sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-orange to-zion-green', count: servicesByCategory['Sustainability']?.length || 0 }
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Zap;
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
    <section className={`py-16 bg-zion-slate-dark/30 ${className}`}>
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-responsive font-bold mb-6">
            <span className="text-gradient">Comprehensive Micro SAAS</span>
            <br />
            <span className="text-white">Services Portfolio</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
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
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate-dark/30 rounded-2xl p-8 border border-zion-cyan/20">
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
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-6 text-sm text-zion-slate-light">
              <p>Mobile: +1 302 464 0950 | Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}