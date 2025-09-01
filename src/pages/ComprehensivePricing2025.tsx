import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Database,
  Users2,
  Cloud,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Target,
  Clock,
  Award,
  Rocket
} from 'lucide-react';
import { allComprehensiveServices, contactInfo } from '../data/services';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('price');

  const categories = ['All', 'AI Services', 'IT Services', 'Enterprise AI', 'Quantum Technology', 'Blockchain Technology', 'Strategic Consulting', 'Compliance Consulting'];

  const filteredServices = useMemo(() => {
    return allComprehensiveServices.filter(service => 
      selectedCategory === 'All' || service.category === selectedCategory
    );
  }, [selectedCategory]);

  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'roi':
          return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [filteredServices, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Shield;
      case 'Enterprise AI': return Database;
      case 'Quantum Technology': return Zap;
      case 'Blockchain Technology': return Users2;
      case 'Strategic Consulting': return Cloud;
      case 'Compliance Consulting': return CheckCircle;
      default: return Target;
    }
  };

  const getInnovationBadge = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">🚀 Revolutionary</span>;
      case 'Cutting Edge':
        return <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">⚡ Cutting Edge</span>;
      case 'Advanced':
        return <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">🔥 Advanced</span>;
      default:
        return <span className="bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">💡 Innovative</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Pricing Guide 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transparent pricing for all our innovative micro SAAS, IT, and AI services. 
            Choose the perfect solution for your business needs with guaranteed ROI.
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
            <motion.div
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <a href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Pricing Tiers Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-center mb-4">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Micro SAAS</h3>
              <p className="text-gray-400 text-sm">Perfect for startups and small businesses</p>
            </div>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-white">$49 - $399</div>
              <div className="text-gray-400 text-sm">per month</div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                AI-powered solutions
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Quick implementation
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                High ROI guarantee
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/50 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-4">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Enterprise Solutions</h3>
              <p className="text-gray-400 text-sm">For growing companies and enterprises</p>
            </div>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-white">$599 - $2,999</div>
              <div className="text-gray-400 text-sm">per month</div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Advanced AI & security
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Custom development
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Priority support
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-center mb-4">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Cutting Edge</h3>
              <p className="text-gray-400 text-sm">Quantum, blockchain & emerging tech</p>
            </div>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-white">$1,999 - $5,000</div>
              <div className="text-gray-400 text-sm">per month</div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Revolutionary technology
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                First-to-market advantage
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Exclusive access
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Filter and Sort */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="md:w-64">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="price" className="bg-slate-800">Sort by Price</option>
              <option value="roi" className="bg-slate-800">Sort by ROI</option>
              <option value="name" className="bg-slate-800">Sort by Name</option>
            </select>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {sortedServices.map((service, index) => {
            const Icon = getCategoryIcon(service.category);

            return (
              <motion.div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-cyan-400">{service.subcategory}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-xs text-gray-400">per {service.period}</div>
                  </div>
                </div>

                {/* Innovation Level Badge */}
                <div className="mb-4">
                  {getInnovationBadge(service.innovationLevel)}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-gray-400">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-400">{service.roi}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-gray-400">Delivery</span>
                    </div>
                    <div className="text-sm font-medium text-blue-400">{service.estimatedDelivery}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-blue-400/20 text-blue-400 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-2">
                  <motion.a
                    href={service.url}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Interest in ${service.name}`}
                    className="w-full border border-cyan-400/50 text-cyan-400 py-2 px-4 rounded-lg text-sm hover:bg-cyan-400/10 transition-colors flex items-center justify-center"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust Zion Tech Group for their technology needs. 
              Get started with a free consultation and discover how our solutions can drive your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Free Consultation
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}?subject=Custom Pricing Inquiry`}
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-200 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Custom Pricing
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricing2025;
