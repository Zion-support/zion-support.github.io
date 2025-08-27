import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Cpu,
  MessageSquare,
  DollarSign,
  BookOpen,
  Truck,
  Home,
  Search,
  Filter,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, ZION_TECH_GROUP_CONTACT } from '../data/enhancedMicroSaasServices2025.js';
export default function ComprehensivePricing() {
  const [services, setServices] = useState(ENHANCED_MICRO_SAAS_SERVICES_2025);
  const [filteredServices, setFilteredServices] = useState(ENHANCED_MICRO_SAAS_SERVICES_2025);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'
  useEffect(() => {
    let filtered = services;
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    setFilteredServices(filtered);
  }, [services, searchTerm, selectedCategory]);
  const getCategoryIcon = (category) => {
    const iconMap = {
      'AI & Development': <Cpu className="w-5 h-5" />,
      'AI & Marketing': <TrendingUp className="w-5 h-5" />,
      'AI & Customer Service': <MessageSquare className="w-5 h-5" />,
      'AI & Finance': <DollarSign className="w-5 h-5" />,
      'AI & Healthcare': <Brain className="w-5 h-5" />,
      'AI & Legal': <BookOpen className="w-5 h-5" />,
      'AI & Education': <BookOpen className="w-5 h-5" />,
      'AI & Supply Chain': <Truck className="w-5 h-5" />,
      'AI & Cybersecurity': <Shield className="w-5 h-5" />,
      'AI & Real Estate': <Home className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };
  const getCategoryColor = (category) => {
    const colorMap = {
      'AI & Development': 'from-blue-500 to-cyan-500',
      'AI & Marketing': 'from-purple-500 to-pink-500',
      'AI & Customer Service': 'from-green-500 to-emerald-500',
      'AI & Finance': 'from-yellow-500 to-orange-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'AI & Legal': 'from-indigo-500 to-blue-500',
      'AI & Education': 'from-teal-500 to-green-500',
      'AI & Supply Chain': 'from-orange-500 to-red-500',
      'AI & Cybersecurity': 'from-gray-500 to-slate-500',
      'AI & Real Estate': 'from-emerald-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };
  const pricingTiers = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Core functionality",
        "Basic support",
        "Standard integrations",
        "Community forum",
        "Email support",
        "Basic analytics"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Advanced features",
        "Priority support",
        "Custom integrations",
        "API access",
        "Analytics dashboard",
        "Phone support",
        "Custom branding",
        "Advanced reporting"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Full feature set",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "SLA guarantees",
        "On-premise deployment",
        "Advanced security",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business. Our AI-powered solutions are designed 
              to scale with you, from startup to enterprise, with clear pricing and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button 
                onClick={() => setViewMode('table')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'table' 
                    ? 'bg-zion-cyan text-white' 
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}
              >
                Table View
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="py-6 bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">{ZION_TECH_GROUP_CONTACT.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">{ZION_TECH_GROUP_CONTACT.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">{ZION_TECH_GROUP_CONTACT.address}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Tiers Overview */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Start with what you need and scale as you grow. All plans include our core features 
              with additional capabilities unlocked at higher tiers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-8 ${
                  plan.popular ? 'ring-2 ring-zion-cyan scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zinc-800 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-purple">{plan.price}</span>
                    <span className="text-zinc-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zinc-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light'
                      : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}>
                    {plan.buttonText}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-zion-cyan" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid View */}
      {viewMode === 'grid' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                    <div className="flex items-center gap-3 mb-3">
                      {getCategoryIcon(service.category)}
                      <span className="text-sm font-medium opacity-90">{service.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
                  </div>
                  {/* Service Content */}
                  <div className="p-6">
                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-zion-purple">
                        ${service.price?.toLocaleString()}
                        <span className="text-sm text-zinc-500 font-normal">/month</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-medium">4.9</span>
                        <span className="text-zinc-500 text-sm">(150+)</span>
                      </div>
                    </div>
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-zinc-800 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                            <Check className="w-4 h-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-zinc-800 mb-2">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                            <TrendingUp className="w-4 h-4 text-blue-500" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Users className="w-4 h-4" />
                        <span>{service.supportLevel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <BarChart3 className="w-4 h-4" />
                        <span>ROI: {service.roi}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Award className="w-4 h-4" />
                        <span>{service.innovationLevel}</span>
                      </div>
                    </div>
                    {/* Market Information */}
                    <div className="mb-6 p-3 bg-zinc-50 rounded-lg">
                      <div className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span className="text-zinc-600">Market Price:</span>
                          <span className="font-medium">{service.marketPrice}</span>
                        </div>
                        {service.marketSize && (
                          <div className="flex justify-between">
                            <span className="text-zinc-600">Market Size:</span>
                            <span className="font-medium">{service.marketSize}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link to="/contact">
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 flex items-center justify-center gap-2">
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                      <button className="w-full px-6 py-3 border border-zion-purple text-zion-purple rounded-lg font-semibold hover:bg-zion-purple hover:text-white transition-colors duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Services Table View */}
      {viewMode === 'table' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Service</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Features</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">ROI</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {filteredServices.map((service, index) => (
                      <motion.tr
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        className="hover:bg-zinc-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div>
                            <h4 className="font-semibold text-zinc-800">{service.title}</h4>
                            <p className="text-sm text-zinc-600 line-clamp-2">{service.description}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(service.category)}
                            <span className="text-sm text-zinc-600">{service.category}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-lg font-bold text-zion-purple">
                            ${service.price?.toLocaleString()}
                            <span className="text-sm text-zinc-500 font-normal">/month</span>
                          </div>
                          <div className="text-xs text-zinc-500">{service.marketPrice}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {service.features.slice(0, 2).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                                <Check className="w-4 h-4 text-green-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-green-600">{service.roi}</div>
                          <div className="text-xs text-zinc-500">{service.estimatedDelivery}</div>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="/contact">
                            <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg text-sm font-medium hover:bg-zion-cyan-light transition-colors">
                              Get Quote
                            </button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* No Results */}
      {filteredServices.length === 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zinc-400 mb-6">Try adjusting your search criteria or browse all categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </section>
      )}
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 text-xl max-w-3xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote 
              for the services that will drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                  Contact Us Today
                </button>
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}