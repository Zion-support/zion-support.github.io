import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Globe,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Heart,
  Scale,
  Eye,
  Leaf,
  Globe2,
  Settings,
  Code,
  BookOpen,
  Star as StarIcon,
  DollarSign,
  Clock,
  Award,
  Target,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Search,
  HelpCircle,
  ShieldCheck,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';

export default function ComprehensivePricingGuide2030() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: '🤖' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: '📈' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: '🌐' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: '🔗' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥' },
    { id: 'FinTech', name: 'FinTech', icon: '💰' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: '🔄' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: '🌱' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: '💬' },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️' },
    { id: 'AI & Research', name: 'AI & Research', icon: '🔬' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', icon: '🌿' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: '🌍' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', icon: '🛸' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: '⚙️' },
    { id: 'AI & Development', name: 'AI & Development', icon: '💻' },
    { id: 'AI & Education', name: 'AI & Education', icon: '🎓' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', icon: '🎮' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget Friendly', range: '$1,000 - $5,000' },
    { id: 'mid-range', name: 'Mid Range', range: '$5,000 - $10,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$10,000+' }
  ];

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'budget' && service.price < 5000) ||
      (selectedPriceRange === 'mid-range' && service.price >= 5000 && service.price < 10000) ||
      (selectedPriceRange === 'enterprise' && service.price >= 10000);
    return matchesCategory && matchesPrice;
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2030 | Zion Tech Group"
        description="Complete pricing guide for all our AI-powered micro SAAS, IT, and technology services. Transparent pricing with proven ROI and enterprise-grade solutions."
        keywords="pricing guide, AI services pricing, micro SAAS pricing, IT services cost, technology solutions pricing, enterprise pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Pricing Guide 2030
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transparent pricing for all our cutting-edge AI-powered micro SAAS, IT, and technology services. 
                Every solution includes enterprise-grade features, proven ROI, and dedicated support.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent min-w-[200px]"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} - {range.range}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Summary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Star, label: 'Total Services', value: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length },
                { icon: TrendingUp, label: 'Avg. ROI', value: '500%+' },
                { icon: Clock, label: 'Setup Time', value: '4-8 Weeks' },
                { icon: Award, label: 'AI Score', value: '95/100' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-cyan-400">{service.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{service.rating}</span>
                        <span className="text-xs text-slate-500">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Service Description */}
                    <p className="text-slate-300 mb-4 line-clamp-3">{service.description}</p>

                    {/* Pricing & Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Our Price:</span>
                        <span className="text-white font-semibold text-lg">${service.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Market Price:</span>
                        <span className="text-slate-300">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Setup Time:</span>
                        <span className="text-slate-300">{service.availability}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">AI Score:</span>
                        <span className="text-cyan-400 font-semibold">{service.aiScore}/100</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details about pricing, implementation timeline, and features.`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a
                        href={`tel:+13024640950`}
                        className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                    
                    {/* Quick Contact Info */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>📧 kleber@ziontechgroup.com</span>
                        <span>📱 +1 302 464 0950</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl text-slate-400 mb-2">No services found</h3>
                <p className="text-slate-500">Try adjusting your filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We deliver cutting-edge AI solutions with proven ROI, enterprise-grade security, and world-class support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: "Proven ROI",
                  description: "Our solutions deliver measurable results with an average ROI of 500%+ within 6-8 months."
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security with SOC 2 compliance, encryption, and zero-trust architecture."
                },
                {
                  icon: Zap,
                  title: "Rapid Implementation",
                  description: "Get up and running in 4-8 weeks with our streamlined deployment process."
                },
                {
                  icon: Users,
                  title: "Expert Support",
                  description: "24/7 technical support and dedicated success managers for your business."
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Serving businesses worldwide with localized support and compliance."
                },
                {
                  icon: Rocket,
                  title: "Innovation First",
                  description: "Always at the cutting edge with the latest AI and technology advancements."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get in touch with our team to discuss your specific needs and discover how our AI-powered solutions can drive your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Inquiry&body=Hi, I'm interested in transforming my business with your AI-powered solutions. Please schedule a consultation to discuss my specific needs and how your services can help drive growth and efficiency." 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}