import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Search, 
  TrendingUp, 
  Heart, 
  Truck, 
  Users, 
  Calendar,
  Zap,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Award,
  Lock,
  Cpu,
  Database,
  Network,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Scale,
  Gauge,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles
} from 'lucide-react';
import COMPREHENSIVE_NEW_SERVICES from '../data/comprehensiveNewServices2025';

export default function ComprehensiveNewServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<typeof COMPREHENSIVE_NEW_SERVICES[0] | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: COMPREHENSIVE_NEW_SERVICES.length },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Automation').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'Cybersecurity').length },
    { id: 'AI & Research', name: 'AI & Research', icon: Search, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Research').length },
    { id: 'AI & Finance', name: 'AI & Finance', icon: TrendingUp, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Finance').length },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Healthcare').length },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', icon: Truck, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Supply Chain').length },
    { id: 'AI & Customer Experience', name: 'AI & Customer Experience', icon: Users, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Customer Experience').length },
    { id: 'AI & Project Management', name: 'AI & Project Management', icon: Calendar, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Project Management').length },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: Target, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & Marketing').length },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Cpu, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & IoT').length },
    { id: 'AI & HR', name: 'AI & HR', icon: Users2, count: COMPREHENSIVE_NEW_SERVICES.filter(s => s.category === 'AI & HR').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_NEW_SERVICES 
    : COMPREHENSIVE_NEW_SERVICES.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Automation': 'from-purple-500 to-pink-600',
      'Cybersecurity': 'from-red-500 to-orange-600',
      'AI & Research': 'from-blue-500 to-cyan-600',
      'AI & Finance': 'from-green-500 to-emerald-600',
      'AI & Healthcare': 'from-red-500 to-pink-600',
      'AI & Supply Chain': 'from-orange-500 to-yellow-600',
      'AI & Customer Experience': 'from-indigo-500 to-purple-600',
      'AI & Project Management': 'from-teal-500 to-cyan-600',
      'AI & Marketing': 'from-pink-500 to-rose-600',
      'AI & IoT': 'from-cyan-500 to-blue-600',
      'AI & HR': 'from-emerald-500 to-green-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Helmet>
        <title>Comprehensive New Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of innovative AI-powered services, cybersecurity solutions, and cutting-edge technology platforms. Transform your business with Zion Tech Group's advanced solutions." />
        <meta name="keywords" content="AI services, cybersecurity, business automation, healthcare analytics, financial trading, supply chain optimization, customer experience, project management, marketing automation, predictive maintenance, HR platform" />
        <link rel="canonical" href="https://ziontechgroup.com/services/comprehensive-new-services-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Comprehensive New Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI-powered solutions, advanced cybersecurity platforms, and innovative technology services designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5" />
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-5 h-5" />
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2" />
              <p className="font-semibold">Call Us</p>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2" />
              <p className="font-semibold">Email Us</p>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2" />
              <p className="font-semibold">Visit Us</p>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <getCategoryIcon category={service.category} className="w-8 h-8" />
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-2">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                    </div>
                    <p className="text-sm text-gray-600">Market Price: {service.marketPrice}</p>
                    <p className="text-sm text-green-600 font-medium">ROI: {service.roi}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <p className="text-sm text-blue-600 font-medium">
                          +{service.features.length - 3} more features
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-500" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <p className="text-gray-500">Delivery</p>
                      <p className="font-medium text-gray-900">{service.estimatedDelivery}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Support</p>
                      <p className="font-medium text-gray-900 capitalize">{service.supportLevel}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => setSelectedService(service)}
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${getCategoryColor(selectedService.category)} p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <getCategoryIcon category={selectedService.category} className="w-10 h-10" />
                  <div>
                    <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                    <p className="text-white/90">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white/80 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  {/* Pricing & ROI */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing & ROI</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Monthly Price:</span>
                        <span className="text-3xl font-bold text-gray-900">
                          {selectedService.currency}{selectedService.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Market Price:</span>
                        <span className="text-lg font-semibold text-gray-900">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">ROI:</span>
                        <span className="text-lg font-semibold text-green-600">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Innovation Level:</span>
                        <span className="text-lg font-semibold text-blue-600">{selectedService.innovationLevel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                    <div className="space-y-3">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
                    <div className="space-y-2">
                      {selectedService.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Target Audience</h3>
                    <div className="space-y-2">
                      {selectedService.targetAudience.map((audience, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{audience}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  {selectedService.technicalSpecs && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-700">Technology:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedService.technicalSpecs.technology.map((tech, idx) => (
                              <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Integrations:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedService.technicalSpecs.integrations.map((integration, idx) => (
                              <span key={idx} className="bg-blue-100 px-2 py-1 rounded text-sm text-blue-700">
                                {integration}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="font-medium text-gray-700">API Endpoints:</span>
                            <p className="text-gray-700">{selectedService.technicalSpecs.apiEndpoints}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Uptime:</span>
                            <p className="text-gray-700">{selectedService.technicalSpecs.uptime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Implementation Details */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Time:</span>
                        <span className="font-medium">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Training Required:</span>
                        <span className="font-medium">{selectedService.trainingRequired}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Support Level:</span>
                        <span className="font-medium capitalize">{selectedService.supportLevel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Phone className="w-5 h-5" />
                      Get Started Today
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Mail className="w-5 h-5" />
                      Request Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive real business transformation and measurable ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Expertise",
                description: "Over 15 years of experience in AI, cybersecurity, and enterprise technology solutions.",
                color: "from-yellow-500 to-orange-600"
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                description: "SOC 2 Type II, ISO 27001, and industry-leading security certifications and compliance.",
                color: "from-red-500 to-pink-600"
              },
              {
                icon: Rocket,
                title: "Innovation First",
                description: "Cutting-edge AI algorithms and next-generation technology platforms.",
                color: "from-purple-500 to-indigo-600"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "24/7 enterprise support with dedicated account managers and technical experts.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: TrendingUp,
                title: "Proven ROI",
                description: "Average 300-500% ROI within 6-12 months across all our service implementations.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise and global best practices.",
                color: "from-indigo-500 to-purple-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our innovative services can drive your business forward. Contact us today for a personalized consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-blue-100">+1 302 464 0950</p>
                    <p className="text-sm text-blue-200">Available 24/7 for enterprise clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-blue-100">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-blue-200">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-blue-100">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                    <p className="text-sm text-blue-200">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select Service Category</option>
                  {categories.slice(1).map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Tell us about your project or requirements..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Don't Wait to Transform Your Business
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies already using our innovative services to drive growth, reduce costs, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-5 h-5" />
              Start Your Transformation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Visit Our Website
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}