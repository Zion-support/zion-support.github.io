import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {;
  Brain,;
  Zap,;
  Globe,;
  Shield,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  TrendingUp,;
  Users,;
  Search,;
  Filter,;
  Star,;
  Clock,;
  DollarSign,;
  Target,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink;
} from "lucide-react"
import { ADVANCED_INNOVATIVE_SERVICES_2026 } from "../data/advancedInnovativeServices2026"
const AdvancedInnovativeServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [sortBy, setSortBy] = useState('innovation'),;

  const categories = useMemo(() => {;
    const cats = new Set(ADVANCED_INNOVATIVE_SERVICES_2026.map(service => service.category));
    return ['all', ...Array.from(cats)],;
  }, []),;

  const filteredServices = useMemo(() => {;
    let filtered = ADVANCED_INNOVATIVE_SERVICES_2026;

    //[^;]*
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => service.category === selectedCategory),;
    };

    //[^;]*
    if (searchTerm) {;
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      ),;
    };

    //[^;]*
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'innovation':;
          return b.innovationLevel.localeCompare(a.innovationLevel),;
        case 'roi':;
          return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', '')),;
        case 'price':;
          return a.price - b.price,;
        case 'delivery':;
          return a.estimatedDelivery.localeCompare(b.estimatedDelivery),;
        default: return 0;
      };
    });
    return filtered,;
  }, [searchTerm, selectedCategory, sortBy]),;

  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1,transition: {;
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 };
    visible: {;
      y: 0,opacity: 1,transition: {;
        duration: 0.5;
      };
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Header Section */};
      <motion.div
        className="[^"]*"
        initial={{ opacity: 0 }};
        animate={{ opacity: 1 }};
        transition={{ duration: 0.8 }};
      >;
        <div className="absolute inset-0 bg-black/20"></[^>]*>
        <div className="relative z-10 container mx-auto px-4 text-center">;
          <motion.h1
            className="[^"]*"
            initial={{ y: -50, opacity: 0 }};
            animate={{ y: 0, opacity: 1 }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            Advanced Innovative Services 2026;
          </[^>]*>
          <motion.p
            className="[^"]*"
            initial={{ y: 50, opacity: 0 }};
            animate={{ y: 0, opacity: 1 }};
            transition={{ duration: 0.8, delay: 0.4 }};
          >;
            Revolutionary AI, Quantum Computing, and Futuristic Technology Solutions;
          </[^>]*>
          <motion.div
            className="[^"]*"
            initial={{ scale: 0.8, opacity: 0 }};
            animate={{ scale: 1, opacity: 1 }};
            transition={{ duration: 0.8, delay: 0.6 }};
          >;
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200">;
              🚀 Quantum AI;
            </[^>]*>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200">;
              🧠 Brain-Computer Interfaces;
            </[^>]*>
            <span className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-200">;
              🌌 Space Mining;
            </[^>]*>
            <span className="px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full text-red-200">;
              ⚡ Fusion Energy;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Filter and Search Section */};
      <motion.div
        className="[^"]*"
        initial={{ opacity: 0, y: 20 }};
        animate={{ opacity: 1, y: 0 }};
        transition={{ duration: 0.6, delay: 0.8 }};
      >;
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">;
          <div className="flex flex-col lg:flex-row gap-4 items-center">;
            {/* Search */};
            <div className="flex-1 relative">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>

            {/* Category Filter */};
            <div className="flex items-center gap-2">;
              <[^>]*/>
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {categories.map(category => (;
                  <option key={category} value={category}>;
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            {/* Sort */};
            <div className="flex items-center gap-2">;
              <[^>]*/>
              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="innovation">Sort by Innovation</[^>]*>
                <option value="roi">Sort by ROI</[^>]*>
                <option value="price">Sort by Price</[^>]*>
                <option value="delivery">Sort by Delivery</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <motion.div
        className="[^"]*"
        variants={containerVariants};
        initial="hidden"
        animate="visible"
      >;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredServices.map((service) => (;
            <motion.div
              key={service.id};
              className="[^"]*"
              variants={itemVariants};
              whileHover={{ y: -5, scale: 1.02 }};
            >;
              {/* Service Header */};
              <div className="flex items-start justify-between mb-4">;
                <div className="flex-1">;
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">;
                    {service.title};
                  </[^>]*>
                  <p className="text-slate-300 text-sm line-clamp-2">;
                    {service.description};
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Category Badge */};
              <div className="flex items-center gap-2 mb-4">;
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-medium">;
                  {service.category};
                </[^>]*>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-xs font-medium">;
                  {service.subcategory};
                </[^>]*>
              </[^>]*>

              {/* Key Metrics */};
              <div className="grid grid-cols-2 gap-3 mb-4">;
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">;
                  <div className="text-2xl font-bold text-green-400">{service.roi}</[^>]*>
                  <div className="text-xs text-slate-400">ROI</[^>]*>
                </[^>]*>
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">;
                  <div className="text-2xl font-bold text-blue-400">{service.innovationLevel}</[^>]*>
                  <div className="text-xs text-slate-400">Innovation</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Pricing */};
              <div className="flex items-center justify-between mb-4 p-3 bg-slate-700/30 rounded-lg">;
                <div>;
                  <div className="text-sm text-slate-400">Starting from</[^>]*>
                  <div className="text-xl font-bold text-white">;
                    ${service.price.toLocaleString()};
                  </[^>]*>
                </[^>]*>
                <div className="text-right">;
                  <div className="text-sm text-slate-400">Delivery</[^>]*>
                  <div className="text-sm text-white">{service.estimatedDelivery}</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Features Preview */};
              <div className="mb-4">;
                <div className="text-sm text-slate-400 mb-2">Key Features:</[^>]*>
                <div className="flex flex-wrap gap-1">;
                  {service.features.slice(0, 3).map((feature, index) => (;
                    <span key={index} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">;
                      {feature};
                    </[^>]*>
                  ))};
                  {service.features.length > 3 && (;&& (; (
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">;
                      +{service.features.length - 3} more;
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>

              {/* Contact Info */};
              <div className="border-t border-slate-700/50 pt-4">;
                <div className="flex items-center justify-between text-sm text-slate-400 mb-2">;
                  <span>Contact:</[^>]*>
                  <span className="text-blue-400">{service.contactInfo.phone}</[^>]*>
                </[^>]*>
                <div className="text-xs text-slate-500 mb-3">;
                  {service.contactInfo.email};
                </[^>]*>
                <a;
                  href={service.contactInfo.website};
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[^"]*"
                >;
                  Learn More <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {filteredServices.length === 0 && (;&& (; (
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
          >;
            <div className="text-6xl mb-4">🔍</[^>]*>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</[^>]*>
            <p className="text-slate-400">Try adjusting your search criteria or category filter.</[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Contact Section */};
      <motion.div
        className="[^"]*"
        initial={{ opacity: 0, y: 50 }};
        animate={{ opacity: 1, y: 0 }};
        transition={{ duration: 0.8, delay: 1 }};
      >;
        <div className="container mx-auto px-4 py-20">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Our team of experts is ready to help you implement these cutting-edge solutions.;
              Get in touch today to start your journey into the future of technology.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">;
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">;
              <[^>]*/>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</[^>]*>
              <p className="text-slate-300 mb-3">Speak directly with our experts</[^>]*>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 font-medium">;
                +1 (302) 464-0950;
              </[^>]*>
            </[^>]*>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">;
              <[^>]*/>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</[^>]*>
              <p className="text-slate-300 mb-3">Send us a detailed message</[^>]*>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">;
              <[^>]*/>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</[^>]*>
              <p className="text-slate-300 mb-3">Come see our innovation center</[^>]*>
              <p className="text-green-400 font-medium">;
                364 E Main St STE 1008<[^>]*/>
                Middletown, DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <div className="text-center mt-12">;
            <a;
              href="https: //ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="[^"]*"
            >;
              Visit Our Website;
              <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AdvancedInnovativeServicesShowcase2026;