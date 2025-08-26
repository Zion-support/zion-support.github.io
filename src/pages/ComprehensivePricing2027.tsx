import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Brain, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Zap,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Filter,
  Search,
  DollarSign,
  Clock,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Cpu as CpuIcon
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '../data/innovativeMicroSaasServices2027';

const ComprehensivePricing2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'popularity'>('price');

  const categories = ['All', 'AI Services', 'Cybersecurity', 'Quantum Technology', 'IT Services', 'Blockchain Services', 'IoT Services'];

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2027;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'popularity':
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Quantum Technology':
        return <Cpu className="w-5 h-5" />;
      case 'IT Services':
        return <Database className="w-5 h-5" />;
      case 'Blockchain Services':
        return <Globe className="w-5 h-5" />;
      case 'IoT Services':
        return <Zap className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services':
        return 'from-purple-500 to-pink-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Quantum Technology':
        return 'from-blue-500 to-cyan-500';
      case 'IT Services':
        return 'from-green-500 to-emerald-500';
      case 'Blockchain Services':
        return 'from-yellow-500 to-orange-500';
      case 'IoT Services':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getPopularityBadge = (reviewCount: number) => {
    if (reviewCount >= 200) return { text: 'Very Popular', color: 'bg-green-500' };
    if (reviewCount >= 100) return { text: 'Popular', color: 'bg-blue-500' };
    if (reviewCount >= 50) return { text: 'Growing', color: 'bg-yellow-500' };
    return { text: 'New', color: 'bg-gray-500' };
  };

  const getValueRating = (price: number, aiScore: number, rating: number) => {
    const valueScore = (aiScore * rating) / price * 10;
    if (valueScore >= 8) return { text: 'Excellent Value', color: 'text-green-400' };
    if (valueScore >= 6) return { text: 'Good Value', color: 'text-blue-400' };
    if (valueScore >= 4) return { text: 'Fair Value', color: 'text-yellow-400' };
    return { text: 'Premium', color: 'text-purple-400' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2027 Pricing Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for cutting-edge technology solutions. Find the perfect plan for your business 
              with our comprehensive pricing guide featuring AI services, quantum computing, cybersecurity, and more.
            </p>
            
            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Need Custom Pricing?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="flex items-center space-x-4">
                <label className="text-gray-300 text-sm">Price Range:</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-20 px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                    className="w-20 px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Sort Control */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'aiScore' | 'popularity')}
                className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-400">
              Compare features, pricing, and value across all our innovative solutions
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-white/10"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(service.category)}
                      <span className="text-sm font-medium">{service.category}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getPopularityBadge(service.reviewCount).color} text-white`}>
                      {getPopularityBadge(service.reviewCount).text}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
                </div>

                {/* Pricing */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-white">${service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-gray-400 text-sm">Market: {service.marketPrice}</p>
                    <div className={`text-sm font-medium mt-2 ${getValueRating(service.price, service.aiScore, service.rating).color}`}>
                      {getValueRating(service.price, service.aiScore, service.rating).text}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                      </div>
                      <p className="text-gray-400 text-xs">Rating</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span className="text-white font-medium">{service.aiScore}%</span>
                      </div>
                      <p className="text-gray-400 text-xs">AI Score</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Users className="w-4 h-4 text-green-400" />
                        <span className="text-white font-medium">{service.reviewCount}</span>
                      </div>
                      <p className="text-gray-400 text-xs">Reviews</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <p className="text-gray-400 mb-1">Support:</p>
                      <p className="text-white">{service.supportLevel}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">SLA:</p>
                      <p className="text-white">{service.sla}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">API Access:</p>
                      <p className="text-white">{service.apiAccess ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Free Trial:</p>
                      <p className="text-white">{service.freeTrial ? 'Yes' : 'No'}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Get Started</span>
                    </a>
                    <a
                      href={`mailto:${service.contactEmail}`}
                      className="w-full bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact Sales</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Service Comparison</h2>
            <p className="text-gray-400">
              Detailed comparison of features, pricing, and capabilities across all services
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-white font-medium">Service</th>
                    <th className="text-left p-4 text-white font-medium">Category</th>
                    <th className="text-left p-4 text-white font-medium">Price</th>
                    <th className="text-left p-4 text-white font-medium">Rating</th>
                    <th className="text-left p-4 text-white font-medium">AI Score</th>
                    <th className="text-left p-4 text-white font-medium">Features</th>
                    <th className="text-left p-4 text-white font-medium">Support</th>
                    <th className="text-left p-4 text-white font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, index) => (
                    <tr key={service.id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center`}>
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{service.title}</h4>
                            <p className="text-gray-400 text-sm">{service.subcategory}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {service.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="text-white font-medium">${service.price}/mo</div>
                        <div className="text-gray-400 text-sm">{service.marketPrice}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <Brain className="w-4 h-4 text-cyan-400" />
                          <span className="text-white font-medium">{service.aiScore}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                              <Check className="w-3 h-3 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-white text-sm">{service.supportLevel}</div>
                        <div className="text-gray-400 text-xs">{service.sla}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <a
                            href={service.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={`mailto:${service.contactEmail}`}
                            className="bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team for custom pricing, volume discounts, and enterprise solutions. 
              We're here to help you find the perfect technology solution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-500 text-cyan-400 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Visit our website for more information:</p>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center space-x-2"
              >
                <span>ziontechgroup.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2027;