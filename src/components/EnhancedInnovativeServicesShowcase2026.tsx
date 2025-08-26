import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Atom, 
  Cpu, 
  Blockchain, 
  Heart, 
  Scale, 
  DollarSign,
  Factory,
  Satellite,
  Code,
  Users,
  Globe,
  Server,
  Zap,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  ExternalLink,
  Play,
  BookOpen,
  MessageCircle,
  Clock,
  DollarSign as DollarIcon,
  Target,
  Award,
  Rocket,
  Lightbulb,
  BarChart3,
  Lock,
  Network,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Camera,
  Wifi,
  Cpu as CpuIcon,
  HardDrive,
  Activity,
  Zap as ZapIcon
} from 'lucide-react';
import { EXPANDED_INNOVATIVE_SERVICES_2026, SPECIALIZED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, ZION_TECH_GROUP_CONTACT, SERVICE_BENEFITS_SUMMARY } from '@/data/expandedInnovativeServices2026';

export default function EnhancedInnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue', count: EXPANDED_INNOVATIVE_SERVICES_2026.length },
    ...SPECIALIZED_SERVICE_CATEGORIES.map(cat => ({
      id: cat.id,
      name: cat.name,
      icon: getCategoryIcon(cat.id),
      color: getCategoryColor(cat.id),
      count: cat.services.length
    }))
  ];

  function getCategoryIcon(categoryId: string) {
    const iconMap: { [key: string]: any } = {
      'ai-autonomous': Brain,
      'cybersecurity': Shield,
      'quantum-tech': Atom,
      'iot-edge': Cpu,
      'blockchain-web3': Blockchain,
      'healthcare-ai': Heart,
      'legal-tech': Scale,
      'financial-ai': DollarSign,
      'manufacturing-ai': Factory,
      'space-tech': Satellite,
      'content-creation': Code,
      'hr-talent': Users,
      'sustainability': Globe,
      'digital-twin': Server
    };
    return iconMap[categoryId] || Zap;
  }

  function getCategoryColor(categoryId: string) {
    const colorMap: { [key: string]: string } = {
      'ai-autonomous': 'from-zion-cyan to-zion-purple',
      'cybersecurity': 'from-zion-purple to-zion-red',
      'quantum-tech': 'from-zion-blue to-zion-cyan',
      'iot-edge': 'from-zion-green to-zion-cyan',
      'blockchain-web3': 'from-zion-purple to-zion-blue',
      'healthcare-ai': 'from-zion-pink to-zion-purple',
      'legal-tech': 'from-zion-orange to-zion-purple',
      'financial-ai': 'from-zion-green to-zion-blue',
      'manufacturing-ai': 'from-zion-blue to-zion-purple',
      'space-tech': 'from-zion-purple to-zion-cyan',
      'content-creation': 'from-zion-orange to-zion-purple',
      'hr-talent': 'from-zion-pink to-zion-purple',
      'sustainability': 'from-zion-green to-zion-blue',
      'digital-twin': 'from-zion-blue to-zion-purple'
    };
    return colorMap[categoryId] || 'from-zion-cyan to-zion-blue';
  }

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_INNOVATIVE_SERVICES_2026
    : EXPANDED_INNOVATIVE_SERVICES_2026.filter(service => {
        const category = SPECIALIZED_SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory);
        return category?.services.includes(service.id);
      });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsVideoPlaying(false);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000 opacity-20"></div>
        </div>

        <div className="container-responsive relative z-10 py-20">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Zion Tech Group</span>
              <br />
              <span className="text-white">2026 Innovation Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover the future of technology with our comprehensive suite of AI-powered, 
              quantum-enabled, and cutting-edge micro SAAS solutions. Transform your business 
              with industry-leading innovation.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{EXPANDED_INNOVATIVE_SERVICES_2026.length}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">15+</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">300-1200%</div>
                <div className="text-zion-slate-light">Average ROI</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-orange mb-2">24/7</div>
                <div className="text-zion-slate-light">Expert Support</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5" />
                Explore Services
              </motion.button>
              <motion.button
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="w-5 h-5" />
                Get Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our innovative solutions deliver measurable results with cutting-edge technology 
              and unparalleled expertise across all major industry sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(SERVICE_BENEFITS_SUMMARY).map(([key, value], index) => (
              <motion.div
                key={key}
                className="bg-zion-slate p-6 rounded-xl border border-zion-slate-light/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-zion-slate-light">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-futuristic">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum computing and space technology, 
              discover solutions that will revolutionize your industry.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-zion-slate p-6 rounded-xl border border-zion-slate-light/20 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => handleServiceClick(service)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{formatPrice(service.price)}</div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-light text-sm rounded-full border border-zion-slate-light/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-zion-green" />
                      {service.roi}
                    </div>
                  </div>
                  <button className="text-zion-cyan hover:text-zion-blue transition-colors flex items-center gap-1 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect plan for your business needs, from freemium options 
              to enterprise-grade solutions with unlimited scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier], index) => (
              <motion.div
                key={key}
                className={`bg-zion-slate p-8 rounded-xl border transition-all duration-300 ${
                  key === 'enterprise' 
                    ? 'border-zion-cyan bg-gradient-to-br from-zion-slate to-zion-slate-dark' 
                    : 'border-zion-slate-light/20'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-zion-cyan">{tier.priceRange}</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">
                      {tier.services.length} {tier.services.length === 1 ? 'Service' : 'Services'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">API Access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Custom Integration</span>
                  </div>
                </div>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  key === 'freemium'
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                    : 'bg-zion-slate-light/10 text-zion-slate-light border border-zion-slate-light/20 hover:bg-zion-slate-light/20'
                }`}>
                  {key === 'freemium' ? 'Get Started Free' : 'Contact Sales'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-futuristic">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get in touch with our expert team to discuss how our innovative solutions 
              can drive your business forward with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-zion-slate-light">{ZION_TECH_GROUP_CONTACT.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-zion-slate-light">{ZION_TECH_GROUP_CONTACT.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-green to-zion-blue rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-zion-slate-light">{ZION_TECH_GROUP_CONTACT.address}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-orange to-zion-red rounded-lg flex items-center justify-center">
                      <GlobeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <a 
                        href={ZION_TECH_GROUP_CONTACT.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-zion-blue transition-colors flex items-center gap-2"
                      >
                        {ZION_TECH_GROUP_CONTACT.website}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Industry-leading AI and quantum technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Proven ROI of 300-1200%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">24/7 expert support and consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Seamless integration with existing systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Compliance and security built-in</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-zion-slate p-8 rounded-xl border border-zion-slate-light/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-zion-slate-light mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-zion-slate-light mb-2">Service Interest</label>
                  <select className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent">
                    <option value="">Select a service category</option>
                    {SPECIALIZED_SERVICE_CATEGORIES.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-zion-slate p-8 rounded-xl border border-zion-slate-light/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-zion-slate-light mb-6">{selectedService.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-green" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <Star className="w-4 h-4 text-zion-yellow" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-slate-light/20 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Price:</span>
                        <span className="text-2xl font-bold text-zion-cyan">{formatPrice(selectedService.price)}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-zion-slate-light">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-zion-green">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Setup Time:</span>
                        <span className="text-zion-slate-light">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Trial Period:</span>
                        <span className="text-zion-slate-light">{selectedService.trialPeriod}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Target Audience</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.targetAudience.map((audience, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Integrations</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.integrations.slice(0, 6).map((integration, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full border border-zion-purple/30"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zion-slate-light/20">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </button>
                  <button
                    className="flex-1 border border-zion-cyan text-zion-cyan py-3 px-6 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                    onClick={() => window.open(selectedService.contactInfo.website, '_blank')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}