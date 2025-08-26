import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Clock,
  Shield as ShieldIcon
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026, SERVICE_CATEGORIES_2026, PRICING_TIERS_2026, CONTACT_INFO_2026 } from '../data/innovativeMicroSaasServices2026';

const ComprehensivePricing2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('category');

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2026;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'budget':
          filtered = filtered.filter(service => service.price <= 699);
          break;
        case 'mid-range':
          filtered = filtered.filter(service => service.price > 699 && service.price <= 1799);
          break;
        case 'premium':
          filtered = filtered.filter(service => service.price > 1799);
          break;
      }
    }

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'ai-score':
        return [...filtered].sort((a, b) => b.aiScore - a.aiScore);
      default:
        return filtered.sort((a, b) => a.category.localeCompare(b.category));
    }
  }, [selectedCategory, priceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Business Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Database className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Network className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Healthcare AI':
        return <Users className="w-6 h-6" />;
      case 'FinTech':
        return <Target className="w-6 h-6" />;
      case 'Supply Chain AI':
        return <Globe className="w-6 h-6" />;
      case 'Autonomous AI':
        return <Rocket className="w-6 h-6" />;
      case 'Quantum AI':
        return <Zap className="w-6 h-6" />;
      case 'Green Technology':
        return <Settings className="w-6 h-6" />;
      case 'Space Technology':
        return <Rocket className="w-6 h-6" />;
      case '5G Networks':
        return <Network className="w-6 h-6" />;
      case 'Digital Twin':
        return <Database className="w-6 h-6" />;
      case 'Autonomous Robotics':
        return <Cpu className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case 'budget':
        return 'Budget ($299 - $699)';
      case 'mid-range':
        return 'Mid-Range ($700 - $1,799)';
      case 'premium':
        return 'Premium ($1,800+)';
      default:
        return 'All Prices';
    }
  };

  const getPriceRangeIcon = (range: string) => {
    switch (range) {
      case 'budget':
        return <DollarSign className="w-5 h-5" />;
      case 'mid-range':
        return <TrendingUp className="w-5 h-5" />;
      case 'premium':
        return <Award className="w-5 h-5" />;
      default:
        return <DollarSign className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Comprehensive Pricing 2026
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed"
            >
              Transparent pricing for all our innovative micro SAAS services. 
              Choose the perfect solution for your business needs and budget.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href={`mailto:${CONTACT_INFO_2026.email}?subject=Pricing consultation request`}
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Custom Quote
              </a>
              <a 
                href={`tel:${CONTACT_INFO_2026.mobile}`}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Call for Pricing
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(PRICING_TIERS_2026).map(([tier, details], index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 border-2 transition-all duration-300 ${
                  tier === 'Enterprise' 
                    ? 'border-zion-cyan bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-zion-cyan/50 hover:shadow-lg'
                }`}
              >
                {tier === 'Enterprise' && (
                  <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{tier}</h3>
                <div className="text-3xl font-bold mb-4 text-zion-blue-dark">{details.price}</div>
                <p className="text-gray-600 mb-6">{details.description}</p>
                <ul className="space-y-3 mb-6">
                  {details.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${CONTACT_INFO_2026.email}?subject=Pricing inquiry for ${tier} plan`}
                  className={`w-full text-center py-3 px-4 rounded-lg font-medium block transition-colors ${
                    tier === 'Enterprise'
                      ? 'bg-zion-cyan text-white hover:bg-zion-cyan-light'
                      : 'bg-zion-cyan/10 text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES_2026.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center gap-4">
              <DollarSign className="w-5 h-5 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">Price Range:</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget ($299 - $699)</option>
                <option value="mid-range">Mid-Range ($700 - $1,799)</option>
                <option value="premium">Premium ($1,800+)</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="category">Category</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="ai-score">AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Table */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Price</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">AI Score</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Rating</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredServices.map((service, index) => (
                    <motion.tr
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(service.category)}
                          <span className="text-sm text-gray-700">{service.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-2xl font-bold text-zion-blue-dark">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">/month</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="inline-flex items-center gap-1 bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full">
                          <Brain className="w-4 h-4" />
                          <span className="font-semibold">{service.aiScore}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-1">
                            {service.rating}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
                          ({service.reviewCount} reviews)
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col gap-2">
                          <a
                            href={`mailto:${CONTACT_INFO_2026.email}?subject=Inquiry about ${service.title}`}
                            className="bg-zion-cyan text-white px-4 py-2 rounded-lg hover:bg-zion-cyan-light transition-colors text-sm font-medium"
                          >
                            Get Quote
                          </a>
                          <a
                            href={`tel:${CONTACT_INFO_2026.mobile}`}
                            className="border border-zion-cyan text-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan hover:text-white transition-colors text-sm font-medium"
                          >
                            Call Now
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="mt-4 text-zion-cyan hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light">
              We deliver exceptional value through innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-zion-slate-light">
                Cutting-edge artificial intelligence for superior performance and insights
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security and compliance for your business operations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock technical support and maintenance services
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">
                Track record of successful implementations and ROI delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact our team for a personalized consultation and custom pricing quote
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <a 
                  href={`tel:${CONTACT_INFO_2026.mobile}`}
                  className="text-zion-cyan hover:underline text-lg"
                >
                  {CONTACT_INFO_2026.mobile}
                </a>
              </div>

              <div className="text-center">
                <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <a 
                  href={`mailto:${CONTACT_INFO_2026.email}`}
                  className="text-zion-cyan hover:underline text-lg"
                >
                  {CONTACT_INFO_2026.email}
                </a>
              </div>

              <div className="text-center">
                <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  {CONTACT_INFO_2026.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${CONTACT_INFO_2026.email}?subject=Custom pricing quote request`}
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Request Custom Quote
              </a>
              <a
                href={CONTACT_INFO_2026.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Visit Website
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 p-6 bg-zion-cyan/10 rounded-lg">
              <h3 className="text-lg font-semibold text-zion-cyan mb-2">
                {CONTACT_INFO_2026.support}
              </h3>
              <p className="text-gray-600">
                {CONTACT_INFO_2026.consultation}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2026;