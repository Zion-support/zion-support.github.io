import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Rocket, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Network, 
  Database,
  Smartphone,
  Eye,
  Lock,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Filter,
  Search,
  ArrowRight,
  Sparkles,
  Crown,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2030 } from '../data/revolutionaryMicroSaasServices2030';
import { CUTTING_EDGE_IT_INFRASTRUCTURE_SERVICES_2030 } from '../data/cuttingEdgeITInfrastructureServices2030';
import { EMERGING_TECHNOLOGY_SERVICES_2030 } from '../data/emergingTechnologyServices2030';

export default function ComprehensivePricingGuide2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...REVOLUTIONARY_MICRO_SAAS_SERVICES_2030,
    ...CUTTING_EDGE_IT_INFRASTRUCTURE_SERVICES_2030,
    ...EMERGING_TECHNOLOGY_SERVICES_2030
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && service.price < 10000) ||
      (priceRange === 'mid-range' && service.price >= 10000 && service.price < 30000) ||
      (priceRange === 'premium' && service.price >= 30000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $10K' },
    { value: 'mid-range', label: '$10K - $30K' },
    { value: 'premium', label: '$30K+' }
  ];

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Research': <Brain className="w-6 h-6" />,
      'AI & FinTech': <TrendingUp className="w-6 h-6" />,
      'Blockchain & Web3': <Globe className="w-6 h-6" />,
      'AI & Legal Tech': <Shield className="w-6 h-6" />,
      'AI & Metaverse': <Eye className="w-6 h-6" />,
      'AI & Healthcare': <Users className="w-6 h-6" />,
      'AI & Green Tech': <Zap className="w-6 h-6" />,
      'AI & Space Tech': <Rocket className="w-6 h-6" />,
      'AI & Autonomous Systems': <Smartphone className="w-6 h-6" />,
      'Quantum Computing': <Cpu className="w-6 h-6" />,
      'IT Infrastructure': <Database className="w-6 h-6" />,
      'AI & Development': <Network className="w-6 h-6" />,
      'Cybersecurity': <Lock className="w-6 h-6" />,
      'IoT & Edge Computing': <Smartphone className="w-6 h-6" />,
      'Digital Twin': <Eye className="w-6 h-6" />,
      'Emerging Technology': <Rocket className="w-6 h-6" />
    };
    return icons[category] || <Rocket className="w-6 h-6" />;
  };

  const getPriceColor = (price: number) => {
    if (price < 10000) return 'text-green-400';
    if (price < 30000) return 'text-yellow-400';
    return 'text-purple-400';
  };

  const getROIColor = (roi: string) => {
    const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
    if (roiNumber > 1000) return 'text-purple-400';
    if (roiNumber > 500) return 'text-green-400';
    return 'text-yellow-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing guide for Zion Tech Group's revolutionary services 2030. AI, Quantum Computing, Blockchain, and cutting-edge infrastructure solutions with ROI analysis."
        keywords="pricing guide 2030, AI services pricing, quantum computing cost, blockchain services pricing, Zion Tech Group pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2030
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our revolutionary services. Compare costs, ROI, and benefits to find the perfect solution for your business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span>1000%+ Average ROI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Get Custom Pricing for Your Business</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Pricing Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are categorized by investment level, with each tier offering exceptional value and ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Budget Solutions",
                price: "Under $10K",
                description: "Perfect for startups and small businesses",
                features: ["Quick setup", "High ROI", "Essential features", "Great for testing"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Mid-Range Solutions",
                price: "$10K - $30K",
                description: "Ideal for growing businesses and enterprises",
                features: ["Advanced features", "Customization", "Priority support", "Scalable solutions"],
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Premium Solutions",
                price: "$30K+",
                description: "For large enterprises and cutting-edge projects",
                features: ["Full customization", "Dedicated support", "Advanced AI", "Maximum ROI"],
                color: "from-purple-500 to-pink-500"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {index === 0 && <DollarSign className="w-8 h-8 text-white" />}
                  {index === 1 && <TrendingUp className="w-8 h-8 text-white" />}
                  {index === 2 && <Crown className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
                <div className="text-2xl font-bold text-purple-400 mb-2">{tier.price}</div>
                <p className="text-gray-300 mb-4">{tier.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value} className="bg-slate-800 text-white">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        {getCategoryIcon(service.category)}
                        <span>{service.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{service.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6">{service.description}</p>

                {/* Pricing Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-1">Our Price</div>
                    <div className={`text-xl font-bold ${getPriceColor(service.price)}`}>
                      ${service.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-1">Market Price</div>
                    <div className="text-lg font-semibold text-gray-300">{service.marketPrice}</div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      ROI
                    </span>
                    <span className={`font-semibold ${getROIColor(service.roi)}`}>{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Setup Time
                    </span>
                    <span className="text-gray-300 text-sm">{service.setupTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      AI Score
                    </span>
                    <span className="text-purple-400 font-semibold">{service.aiScore}/100</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.title}`}
                    className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                  setPriceRange('all');
                }}
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our services deliver exceptional returns on investment. See how much you can save and earn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { label: "Average ROI", value: "1000%+", description: "Within 12 months" },
                { label: "Cost Savings", value: "60-80%", description: "vs traditional solutions" },
                { label: "Time to Value", value: "4-8 weeks", description: "Average setup time" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get custom pricing and start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13024640950"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Custom Pricing
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Pricing Request"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Request Quote
              </a>
            </div>
            <div className="text-gray-400">
              <p>Visit our website: <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 underline">https://ziontechgroup.com</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}