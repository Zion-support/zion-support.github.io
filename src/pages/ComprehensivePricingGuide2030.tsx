import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Globe, 
  Heart,
  Truck,
  Scale,
  Leaf,
  Rocket,
  Cpu,
  Eye,
  Lock,
  BarChart3,
  PenTool,
  Users,
  Building,
  ShoppingCart,
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensivePricingGuide2030() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 15000]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, color: 'from-orange-500 to-red-500' },
    { id: 'industry', name: 'Industry Solutions', icon: Building, color: 'from-green-500 to-emerald-500' },
    { id: 'micro', name: 'Micro SAAS', icon: ShoppingCart, color: 'from-yellow-500 to-orange-500' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' }
  ];

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && service.category.includes('AI')) ||
      (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
      (selectedCategory === 'emerging' && service.category === 'Emerging Technology') ||
      (selectedCategory === 'industry' && service.category.includes('AI &') && service.subcategory) ||
      (selectedCategory === 'micro' && service.price < 1000) ||
      (selectedCategory === 'infrastructure' && (service.category.includes('Cloud') || service.category.includes('IT'))) ||
      (selectedCategory === 'security' && service.category.includes('Cybersecurity'));
    
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesCategory && matchesPrice;
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing information for all our innovative AI, quantum computing, and emerging technology services. Transparent pricing with ROI guarantees."
        keywords="pricing guide 2030, AI services pricing, quantum computing costs, emerging technology pricing, micro SAAS pricing"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Pricing Guide 2030
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for the future of technology. Discover our comprehensive range of AI, quantum computing, 
                and emerging technology services with guaranteed ROI and competitive market rates.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>100+ Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Guaranteed ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Competitive Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-slate-800/50">
          <div className="container-responsive">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Filter by Category</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="text-center">
              <label className="block text-white font-medium mb-4">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
              <input
                type="range"
                min="0"
                max="15000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full max-w-md h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{service.title}</h3>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-slate-300 text-sm">{service.rating}</span>
                      </div>
                    </div>

                    {/* Market Price Comparison */}
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Market Price:</span>
                        <span className="text-slate-300">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-slate-400">ROI:</span>
                        <span className="text-green-400 font-medium">{service.roi}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300">Setup: {service.setupTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300">AI Score: {service.aiScore}%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300">{service.reviewCount} reviews</span>
                      </div>
                    </div>

                    {/* Category & Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                        {service.category}
                      </span>
                      {service.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-400 text-xl">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 15000]);
                  }}
                  className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Service Tier</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From micro SAAS solutions to enterprise-grade platforms, we offer flexible pricing tiers 
                to meet your business needs and budget requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-slate-400">Perfect for small businesses and startups</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-cyan-400">$199</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Micro SAAS Solutions</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Basic AI Features</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Standard Setup</span>
                  </li>
                </ul>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Get Started
                </button>
              </motion.div>

              {/* Professional Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/50 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <p className="text-slate-400">Ideal for growing businesses</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-cyan-400">$1,999</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Advanced AI Services</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Industry Solutions</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Custom Integration</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Get Started
                </button>
              </motion.div>

              {/* Enterprise Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-slate-400">For large organizations and enterprises</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-cyan-400">Custom</span>
                  <span className="text-slate-400 block text-sm">Contact Sales</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Full Service Suite</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Custom Development</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>24/7 Premium Support</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>On-site Implementation</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Dedicated Team</span>
                  </li>
                </ul>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Contact our team to discuss your specific requirements, get a custom quote, 
                or schedule a personalized demo of our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-lg">
                Request Custom Quote
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}