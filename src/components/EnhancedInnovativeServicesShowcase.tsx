import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Brain,
  Network,
  Leaf,
  Heart,
  DollarSign,
  Eye,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES_2025 } from '../data/enhancedInnovativeServices2025';

export function EnhancedInnovativeServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('enhanced-services-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple' },
    { id: 'Quantum AI Services', name: 'Quantum AI', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Blockchain & Web3', name: 'Web3', icon: <Network className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: <Zap className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Cybersecurity', name: 'Security', icon: <Shield className="h-5 w-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'Green Tech & Sustainability', name: 'Green Tech', icon: <Leaf className="h-5 w-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'Healthcare Technology', name: 'Health Tech', icon: <Heart className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'FinTech & RegTech', name: 'FinTech', icon: <DollarSign className="h-5 w-5" />, color: 'from-yellow-500 to-amber-500' },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: <Eye className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Advanced Analytics & BI', name: 'Analytics', icon: <BarChart3 className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500' }
  ];

  const filteredServices = activeCategory === 'all'
    ? ENHANCED_INNOVATIVE_SERVICES_2025
    : ENHANCED_INNOVATIVE_SERVICES_2025.filter(service => service.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum AI Services': return <Brain className="h-6 w-6" />;
      case 'Blockchain & Web3': return <Network className="h-6 w-6" />;
      case 'IoT & Edge Computing': return <Zap className="h-6 w-6" />;
      case 'Cybersecurity': return <Shield className="h-6 w-6" />;
      case 'Green Tech & Sustainability': return <Leaf className="h-6 w-6" />;
      case 'Healthcare Technology': return <Heart className="h-6 w-6" />;
      case 'FinTech & RegTech': return <DollarSign className="h-6 w-6" />;
      case 'AR/VR & Metaverse': return <Eye className="h-6 w-6" />;
      case 'Advanced Analytics & BI': return <BarChart3 className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section id="enhanced-services-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Next-Generation <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovative Services
              </span>
            </h2>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our cutting-edge portfolio of AI-powered, blockchain-enabled, and quantum-ready solutions. 
            Transform your business with the latest technologies in cybersecurity, IoT, healthcare, and beyond.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <TrendingUp className="h-5 w-5 text-zion-cyan" />
              <span>10 Categories</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.8★ Rating</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Users className="h-5 w-5 text-zion-purple" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Zap className="h-5 w-5 text-zion-cyan" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-zion-cyan/25`
                  : 'bg-white/10 backdrop-blur-sm text-zion-slate-light border border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-1"
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan">
                  {getCategoryIcon(service.category)}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-xs font-medium">
                    {service.subcategory}
                  </span>
                  {service.featured && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                {service.title}
              </h3>
              <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <div className="text-xs text-zion-slate-light/70 mb-2 flex items-center gap-2">
                  <Target className="h-3 w-3" />
                  Key Features:
                </div>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                      <CheckCircle className="h-3 w-3 text-zion-cyan" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-4">
                <div className="text-xs text-zion-slate-light/70 mb-2 flex items-center gap-2">
                  <Cpu className="h-3 w-3" />
                  Tech Stack:
                </div>
                <div className="flex flex-wrap gap-1">
                  {service.technologyStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded border border-zion-cyan/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-left">
                  <span className="text-2xl font-bold text-white">{service.currency}{service.price}</span>
                  <span className="text-sm text-zion-slate-light">/{service.pricingModel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-zion-slate-light">{service.rating}</span>
                  <span className="text-xs text-zion-slate-light/70">({service.reviewCount})</span>
                </div>
              </div>

              {/* AI Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-slate-light">AI Intelligence Score:</span>
                  <span className="text-zion-cyan font-semibold">{service.aiScore}/100</span>
                </div>
                <div className="w-full bg-zion-slate-dark rounded-full h-2 mt-1">
                  <div 
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-300"
                    style={{ width: `${service.aiScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-4 p-3 bg-zion-slate-dark/50 rounded-lg border border-zion-slate-light/20">
                <div className="flex items-center gap-2 text-xs text-zion-slate-light mb-2">
                  <MapPin className="h-3 w-3" />
                  {service.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-zion-slate-light mb-2">
                  <Clock className="h-3 w-3" />
                  {service.availability}
                </div>
                <div className="flex items-center gap-2 text-xs text-zion-slate-light">
                  <Mail className="h-3 w-3" />
                  {service.contactEmail}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-2">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={service.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 text-zion-slate-light border border-white/20 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/enhanced-services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25"
          >
            <Sparkles className="h-5 w-5" />
            Explore All Enhanced Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Contact our team of experts to discuss how our innovative services can drive your business forward.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-zion-slate-light">
                <Phone className="h-5 w-5 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-slate-light">
                <Mail className="h-5 w-5 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-slate-light">
                <MapPin className="h-5 w-5 text-zion-cyan" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EnhancedInnovativeServicesShowcase;