import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import { additionalInnovativeMicroSaasServices2025 } from '../data/enhancedMicroSaasServices2025';
import { enhancedITInfrastructureServices2025 } from '../data/enhancedITInfrastructureServices2025';

const ComprehensivePricing2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Combine all services
  const allServices = [
    ...additionalInnovativeMicroSaasServices2025.map(service => ({
      ...service,
      type: 'Micro SAAS',
      icon: getServiceIcon(service.category)
    })),
    ...enhancedITInfrastructureServices2025.map(service => ({
      ...service,
      type: 'IT Infrastructure',
      icon: getServiceIcon(service.category)
    }))
  ];

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || 
                          (selectedPricing === 'enterprise' && service.pricing === 'Enterprise') ||
                          (selectedPricing === 'professional' && service.pricing === 'Professional');
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  // Get unique categories
  const categories = [...new Set(allServices.map(service => service.category))];

  function getServiceIcon(category: string) {
    switch (category.toLowerCase()) {
      case 'quantum ai':
      case 'quantum computing':
      case 'quantum security':
        return '🔮';
      case 'neuromorphic computing':
        return '🧠';
      case 'privacy ai':
      case 'federated learning':
        return '🔒';
      case 'edge computing':
        return '🌐';
      case 'ai governance':
        return '⚖️';
      case 'space technology':
        return '🚀';
      case 'green technology':
        return '🌱';
      case 'financial technology':
        return '💰';
      case 'healthcare technology':
        return '🏥';
      case 'network security':
        return '🛡️';
      case 'infrastructure':
        return '🏗️';
      case 'wireless infrastructure':
        return '📡';
      case 'data center':
        return '🏢';
      case 'it operations':
        return '⚙️';
      case 'blockchain':
        return '⛓️';
      case 'iot':
        return '📱';
      case 'cloud computing':
        return '☁️';
      default:
        return '💡';
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Starter",
      price: "$500 - $1,500",
      description: "Perfect for small businesses and startups",
      features: ["Basic features", "Standard support", "Up to 25 users", "Email support"]
    },
    {
      name: "Professional",
      price: "$1,500 - $3,000",
      description: "Ideal for growing businesses and teams",
      features: ["Advanced features", "Priority support", "Up to 100 users", "Phone & email support"]
    },
    {
      name: "Enterprise",
      price: "$3,000 - $5,500+",
      description: "For large organizations with complex needs",
      features: ["Full feature set", "Dedicated support", "Unlimited users", "24/7 dedicated support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Hero Section */}
      <motion.section 
        className="py-20 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Pricing</span> 2025
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transparent pricing for our cutting-edge technology services. Choose the plan that fits your business needs and budget.
          </p>
          
          {/* Pricing Tiers Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                <p className="text-zion-slate-light mb-4">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              <span>Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section 
        className="py-8 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
              >
                <option value="all">All Pricing</option>
                <option value="professional">Professional</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-zion-glow group"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {service.type}
                      </span>
                      {service.pricing === 'Enterprise' && (
                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                          Enterprise
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      /month
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  {/* Market Price Comparison */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-zion-slate-light mb-1">Market Price</div>
                    <div className="text-white font-medium">{service.marketPrice}</div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Setup */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-2 bg-white/5 rounded-lg text-center">
                      <div className="text-xs text-zion-slate-light mb-1">ROI</div>
                      <div className="text-sm text-zion-cyan font-medium">{service.roi}</div>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg text-center">
                      <div className="text-xs text-zion-slate-light mb-1">Setup Time</div>
                      <div className="text-sm text-zion-cyan font-medium">{service.setupTime}</div>
                    </div>
                  </div>

                  {/* Contact and Action */}
                  <div className="space-y-3">
                    <div className="text-center">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.name}`}
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-white font-medium rounded-lg transition-colors duration-300 group"
                      >
                        Get Pricing
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-zion-slate-light">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="flex items-center hover:text-zion-cyan transition-colors duration-300"
                      >
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </a>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-zion-cyan transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Pricing Benefits Section */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Our Pricing is <span className="gradient-text">Competitive</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We offer enterprise-grade solutions at competitive prices with transparent pricing and no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
              <p className="text-zion-slate-light">No hidden fees or surprise charges</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-slate-light">Measurable business impact and returns</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">Bank-level security and compliance</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Implementation</h3>
              <p className="text-zion-slate-light">Quick setup and deployment</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact our team for a personalized quote and consultation. We'll help you choose the right plan for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold rounded-xl transition-colors duration-300 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Quote: +1 302 464 0950
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation Request"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors duration-300 text-lg border border-white/20"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Consultation
            </a>
          </div>

          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Special Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-medium text-white mb-1">First Month Free</div>
                <div className="text-zion-slate-light">Try any service risk-free</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💼</div>
                <div className="font-medium text-white mb-1">Enterprise Discounts</div>
                <div className="text-zion-slate-light">Volume pricing for large deployments</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComprehensivePricing2025;