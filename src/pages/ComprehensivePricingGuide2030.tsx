import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Users,
  Zap,
  Phone,
  Mail as MailIcon,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Globe,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Leaf,
  Cpu,
  Database,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function ComprehensivePricingGuide2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Get unique categories
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
    { id: 'AI & HR', name: 'AI & HR', icon: '👥' }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 400-900% return on investment within 3-16 months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2, ISO 27001, and HIPAA compliance'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated teams of specialists with deep industry expertise'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance processes ensure reliable solutions'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Get detailed pricing information for all our AI, cybersecurity, cloud, and emerging technology services. Transparent pricing with proven ROI."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Pricing Guide</span> 2030
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transparent pricing for all our cutting-edge technology services. From micro SAAS to enterprise solutions, 
              get detailed pricing information with proven ROI and implementation timelines.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm">
              <a href="tel:+13024640950" className="flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white">
                <MailIcon className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                    : 'bg-slate-800/50 text-gray-300 border-slate-600 hover:border-cyan-400'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30"
              >
                {/* Service Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">{service.description}</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {service.pricing.map((tier, index) => (
                    <div
                      key={tier.name}
                      className={`relative rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                        tier.popular
                          ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/50'
                          : 'bg-slate-800/50 border-slate-600/50'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-green-400">${tier.price.toLocaleString()}</span>
                          <span className="text-gray-400 ml-2">{tier.billing}</span>
                        </div>
                        
                        <ul className="space-y-3 mb-6 text-left">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <button
                          onClick={() => setSelectedService(service.id)}
                          className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            tier.popular
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                              : 'bg-slate-700 text-white hover:bg-slate-600'
                          }`}
                        >
                          {tier.cta}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/50">
                    <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="text-sm font-semibold text-white mb-1">Market Comparison</h4>
                    <p className="text-xs text-gray-300">{service.marketComparison}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/50">
                    <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-sm font-semibold text-white mb-1">ROI</h4>
                    <p className="text-xs text-gray-300">{service.roi}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/50">
                    <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <h4 className="text-sm font-semibold text-white mb-1">Setup Time</h4>
                    <p className="text-xs text-gray-300">{service.setupTime}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/50">
                    <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="text-sm font-semibold text-white mb-1">Support</h4>
                    <p className="text-xs text-gray-300">Expert team available</p>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center">
                  <p className="text-gray-300 mb-4">
                    Ready to get started? Contact our experts for a personalized consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                    >
                      <MailIcon className="w-4 h-4 mr-2" />
                      Get Quote
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">Delivering exceptional value through innovation and expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized pricing and implementation plans tailored to your specific needs. 
              Our experts are ready to help you choose the right service and ensure successful deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <MailIcon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-400 text-sm">
                Visit our website at{' '}
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 underline"
                >
                  ziontechgroup.com
                </a>
                {' '}for more information about our services and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}