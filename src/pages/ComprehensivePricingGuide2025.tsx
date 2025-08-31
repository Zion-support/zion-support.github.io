import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  Atom,
  Car,
  Building2,
  PenTool,
  Leaf,
  Factory,
  Gauge,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  Activity,
  DollarSign,
  Percent,
  Calendar,
  Clock as ClockIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Rocket as RocketIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Eye as EyeIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Search as SearchIcon,
  Atom as AtomIcon,
  Car as CarIcon,
  Building2 as Building2Icon,
  PenTool as PenToolIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Gauge as GaugeIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeServices2025';

const ComprehensivePricingGuide2025: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', count: INNOVATIVE_SERVICES_2025.length },
    { id: 'ai', name: 'AI & Automation', icon: Brain, color: 'from-blue-500 to-cyan-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('ai') || s.category.toLowerCase().includes('automation')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('cybersecurity') || s.category.toLowerCase().includes('security')).length },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-green-500 to-emerald-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('sustainability') || s.category.toLowerCase().includes('esg')).length },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, color: 'from-yellow-500 to-orange-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('manufacturing')).length },
    { id: 'edge', name: 'Edge Computing', icon: Cpu, color: 'from-gray-500 to-slate-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('edge')).length },
    { id: 'financial', name: 'Financial Services', icon: BarChart, color: 'from-emerald-500 to-teal-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('financial')).length },
    { id: 'supply-chain', name: 'Supply Chain', icon: Network, color: 'from-blue-500 to-indigo-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('supply chain')).length },
    { id: 'customer', name: 'Customer Experience', icon: Users, color: 'from-pink-500 to-rose-500', count: INNOVATIVE_SERVICES_2025.filter(s => s.category.toLowerCase().includes('customer')).length }
  ];

  const getCategoryFromService = (service: any) => {
    if (service.category.toLowerCase().includes('ai') || service.category.toLowerCase().includes('automation')) return 'ai';
    if (service.category.toLowerCase().includes('quantum')) return 'quantum';
    if (service.category.toLowerCase().includes('cybersecurity') || service.category.toLowerCase().includes('security')) return 'cybersecurity';
    if (service.category.toLowerCase().includes('sustainability') || service.category.toLowerCase().includes('esg')) return 'sustainability';
    if (service.category.toLowerCase().includes('manufacturing')) return 'manufacturing';
    if (service.category.toLowerCase().includes('edge')) return 'edge';
    if (service.category.toLowerCase().includes('financial')) return 'financial';
    if (service.category.toLowerCase().includes('supply chain')) return 'supply-chain';
    if (service.category.toLowerCase().includes('customer')) return 'customer';
    return 'ai';
  };

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    return activeCategory === 'all' || getCategoryFromService(service) === activeCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return b.price - a.price;
      case 'price-low':
        return a.price - b.price;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      case 'innovation':
        const innovationOrder = { 'Revolutionary': 3, 'Breakthrough': 2, 'Advanced': 1 };
        return innovationOrder[b.innovationLevel as keyof typeof innovationOrder] - innovationOrder[a.innovationLevel as keyof typeof innovationOrder];
      case 'delivery':
        return parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]);
      default:
        return 0;
    }
  });

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
        duration: 0.5
      }
    }
  };

  const getPriceTier = (price: number) => {
    if (price >= 30000) return { tier: 'Enterprise', color: 'from-red-500 to-pink-500' };
    if (price >= 20000) return { tier: 'Professional', color: 'from-purple-500 to-indigo-500' };
    if (price >= 10000) return { tier: 'Business', color: 'from-blue-500 to-cyan-500' };
    return { tier: 'Starter', color: 'from-green-500 to-emerald-500' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our cutting-edge AI, Quantum Computing, and Autonomous Systems solutions. 
              Compare market prices, ROI, and find the perfect solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Download Full Guide
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">Starting From</h3>
              <p className="text-green-400 font-bold text-3xl">$12,999</p>
              <p className="text-gray-300 text-sm">per month</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">Average ROI</h3>
              <p className="text-blue-400 font-bold text-3xl">400%</p>
              <p className="text-gray-300 text-sm">within 18 months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">Delivery Time</h3>
              <p className="text-purple-400 font-bold text-3xl">8-18</p>
              <p className="text-gray-300 text-sm">weeks</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">Support Level</h3>
              <p className="text-yellow-400 font-bold text-3xl">24/7</p>
              <p className="text-gray-300 text-sm">premium support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-4">
                <label className="text-white text-sm font-medium">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="price">Price: High to Low</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="roi">ROI: High to Low</option>
                  <option value="innovation">Innovation Level</option>
                  <option value="delivery">Delivery Time</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Table */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {sortedServices.map((service, index) => {
              const priceTier = getPriceTier(service.price);
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Service Info */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${priceTier.color} text-white`}>
                              {priceTier.tier}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              service.innovationLevel === 'Revolutionary' 
                                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                : service.innovationLevel === 'Breakthrough'
                                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            }`}>
                              {service.innovationLevel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="lg:col-span-2 text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400 mb-2">per month</div>
                      <div className="text-xs text-gray-500 bg-white/10 rounded px-2 py-1">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* ROI & Delivery */}
                    <div className="lg:col-span-2 text-center">
                      <div className="text-lg font-bold text-green-400 mb-1">{service.roi}</div>
                      <div className="text-sm text-gray-400 mb-2">ROI</div>
                      <div className="text-xs text-gray-500 bg-white/10 rounded px-2 py-1">
                        {service.estimatedDelivery}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-2">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-400">
                            +{service.features.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="lg:col-span-2">
                      <h4 className="text-white font-semibold mb-2 text-sm">Top Benefits</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-white/20">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Explanation */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Understanding Our Pricing Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our pricing is designed to provide value at every level, from startups to enterprise organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Starter</h3>
              <p className="text-green-400 font-bold text-2xl mb-2">$12,999 - $19,999</p>
              <p className="text-gray-300 text-sm">Perfect for growing businesses looking to implement AI solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Business</h3>
              <p className="text-blue-400 font-bold text-2xl mb-2">$20,000 - $29,999</p>
              <p className="text-gray-300 text-sm">Ideal for established companies ready for advanced automation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Professional</h3>
              <p className="text-purple-400 font-bold text-2xl mb-2">$30,000 - $39,999</p>
              <p className="text-gray-300 text-sm">For organizations requiring enterprise-grade AI solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Enterprise</h3>
              <p className="text-red-400 font-bold text-2xl mb-2">$40,000+</p>
              <p className="text-gray-300 text-sm">Custom solutions for Fortune 500 and global enterprises</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your requirements and get a customized quote for your business
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Download Full Pricing Guide
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold text-lg">Zion Tech Group</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transparent pricing for cutting-edge AI, Quantum Computing, and Autonomous Systems
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="https://ziontechgroup.com" className="hover:text-white transition-colors">
              Website
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="tel:+13024640950" className="hover:text-white transition-colors">
              Phone
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensivePricingGuide2025;