import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Atom,
  Eye,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle as CheckCircleIcon,
  ArrowUpRight,
  Play,
  MailIcon as MailIconComponent,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSAASServices2025';

export default function ComprehensivePricingGuide2025() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const servicesByCategory = filteredServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof INNOVATIVE_MICRO_SAAS_SERVICES_2025>);

  const categories = Object.keys(servicesByCategory).sort();

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
        title="Comprehensive Pricing Guide 2025 | Zion Tech Group"
        description="Complete pricing guide for our innovative micro SAAS services in 2025. Compare market prices, ROI, and competitive advantages across all service categories."
        keywords="pricing guide 2025, micro SAAS pricing, AI services pricing, competitive pricing, ROI analysis, market comparison"
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
                  Comprehensive Pricing Guide
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  2025
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transparent pricing, competitive market analysis, and proven ROI for all our innovative micro SAAS services. 
                Make informed decisions with comprehensive pricing information.
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
                  <MailIcon className="w-5 h-5 text-cyan-400" />
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

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pricing <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Overview</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our transparent pricing structure ensures you get maximum value for your investment. 
                Compare our competitive rates with market standards and see the ROI difference.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Competitive Pricing",
                  description: "Our prices are 20-40% below market rates while maintaining superior quality and features.",
                  stats: "20-40% savings"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Proven ROI",
                  description: "Average ROI of 500-800% within 6-12 months across all service categories.",
                  stats: "500-800% ROI"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Fast Implementation",
                  description: "Get your solutions up and running in weeks, not months with our streamlined processes.",
                  stats: "2-12 weeks"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 mb-4">{benefit.description}</p>
                  <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm font-semibold rounded-full border border-cyan-500/30">
                    {benefit.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Services by <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Category</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our comprehensive service offerings organized by category. 
                Each service includes detailed pricing, market comparison, and ROI analysis.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {categories.map((category) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category}</h3>
                        <p className="text-slate-400">{servicesByCategory[category].length} services available</p>
                      </div>
                    </div>
                    {expandedCategories.includes(category) ? (
                      <ChevronUp className="w-6 h-6 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.includes(category) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-600"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {servicesByCategory[category].map((service) => (
                              <div
                                key={service.id}
                                className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm text-slate-300">{service.rating}</span>
                                  </div>
                                </div>
                                
                                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                                
                                <div className="space-y-2 mb-4">
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-400">Our Price:</span>
                                    <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
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
                                </div>

                                <div className="flex gap-2">
                                  <a
                                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details about pricing, implementation timeline, and features.`}
                                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-3 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                                  >
                                    Get Quote
                                  </a>
                                  <a
                                    href={`tel:+13024640950`}
                                    className="px-3 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                                  >
                                    Call
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Competitive <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Advantages</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how our services stack up against the competition in terms of pricing, features, and value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Faster Implementation",
                  description: "Get solutions running in weeks instead of months. Our streamlined processes ensure rapid deployment.",
                  comparison: "3-8 weeks vs 3-6 months"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Higher Accuracy",
                  description: "Our AI models achieve 95%+ accuracy rates, delivering reliable results you can trust.",
                  comparison: "95%+ vs 85-90%"
                },
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Better ROI",
                  description: "Average ROI of 500-800% within 6-12 months, significantly higher than industry standards.",
                  comparison: "500-800% vs 200-400%"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Enhanced Security",
                  description: "Bank-level security protocols and compliance standards to protect your business.",
                  comparison: "Enterprise-grade vs Standard"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "24/7 Support",
                  description: "Round-the-clock technical support from certified professionals with deep expertise.",
                  comparison: "24/7 vs Business hours"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Innovation First",
                  description: "Stay ahead with cutting-edge technologies and forward-thinking solutions.",
                  comparison: "Leading edge vs Following"
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                  <p className="text-slate-300 mb-4">{advantage.description}</p>
                  <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm font-semibold rounded-full border border-green-500/30">
                    {advantage.comparison}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact us today to discuss your specific needs and get a customized quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry&body=Hi, I'm interested in your services and would like to discuss pricing options. Please provide more information."
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  Email for Quote
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: +1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-300">
                  <MailIcon className="w-4 h-4 text-purple-400" />
                  <span>Email: kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Visit: Middletown DE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}