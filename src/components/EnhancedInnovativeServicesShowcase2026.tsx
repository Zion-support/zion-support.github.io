import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Rocket, 
  Heart,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Clock,
  DollarSign,
  Target,
  Award,
  Sparkles,
  Eye,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { innovativeMicroSaasServices2026, serviceCategories2026, pricingTiers2026, contactInfo2026 } from '../data/innovativeMicroSaasServices2026';

const iconMap = {
  Brain,
  Shield,
  Cloud,
  Cpu,
  Lock,
  Rocket,
  Heart
};

export function EnhancedInnovativeServicesShowcase2026() {
  const [activeCategory, setActiveCategory] = useState('AI & Analytics');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = serviceCategories2026;

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSelectedService(null);
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const currentServices = categories.find(cat => cat.name === activeCategory)?.services || [];

  const heroSlides = [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge AI solutions",
      description: "Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.",
      icon: Brain,
      color: "zion-cyan"
    },
    {
      title: "Enterprise Security",
      subtitle: "Protect your business with next-generation cybersecurity",
      description: "Advanced threat detection, zero-trust architecture, and 24/7 monitoring to keep your business safe in the digital age.",
      icon: Shield,
      color: "zion-purple"
    },
    {
      title: "Quantum Future",
      subtitle: "Prepare for the quantum computing revolution",
      description: "Get ahead of the curve with our quantum-ready solutions and hybrid quantum-classical computing platforms.",
      icon: Rocket,
      color: "zion-neon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-neon/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)] animate-spin-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-neon bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with innovative micro SAAS solutions, cutting-edge IT services, and revolutionary AI technology
            </p>
          </motion.div>

          {/* Hero Slides */}
          <div className="relative max-w-6xl mx-auto mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-zion-slate/80 to-zion-slate-dark/80 backdrop-blur-xl rounded-2xl p-8 border border-zion-cyan/20"
              >
                <div className="flex items-center justify-center space-x-8">
                  <div className={`text-8xl text-${heroSlides[currentSlide].color}`}>
                    {React.createElement(heroSlides[currentSlide].icon)}
                  </div>
                  <div className="text-left">
                    <h2 className="text-4xl font-bold text-white mb-4">{heroSlides[currentSlide].title}</h2>
                    <h3 className="text-2xl text-zion-cyan mb-4">{heroSlides[currentSlide].subtitle}</h3>
                    <p className="text-lg text-white/80 max-w-2xl">{heroSlides[currentSlide].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Controls */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={toggleAutoPlay}
                className="p-3 rounded-full bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30 transition-colors"
              >
                {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-zion-cyan/25"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-full text-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Category Navigation */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Service Categories
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                    activeCategory === category.name
                      ? `bg-gradient-to-br from-${category.color} to-${category.color}-dark text-white shadow-lg shadow-${category.color}/25`
                      : 'bg-zion-slate/50 text-white/70 hover:bg-zion-slate/70 hover:text-white border border-zion-cyan/20'
                  }`}
                >
                  <IconComponent size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
                      <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl font-bold text-white text-center mb-12"
            >
              {activeCategory} Solutions
            </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group cursor-pointer"
                onClick={() => handleServiceSelect(service)}
              >
                <div className="bg-gradient-to-br from-zion-slate/80 to-zion-slate-dark/80 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <Sparkles size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">${service.price}</div>
                      <div className="text-sm text-white/60">per month</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-white/70 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">4.9</span>
                    </div>
                    <div className="text-zion-cyan text-sm font-semibold">
                      {service.roi}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white/60 text-sm">
                      <Users size={16} />
                      <span>{service.userLimit}</span>
                    </div>
                    <ArrowRight size={20} className="text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Choose Your Plan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers2026.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-zion-cyan to-zion-purple border-2 border-zion-cyan shadow-2xl shadow-zion-cyan/25'
                    : 'bg-zion-slate/80 border border-zion-cyan/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-neon text-black px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    tier.popular ? 'text-white' : 'text-white'
                  }`}>
                    {tier.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${
                    tier.popular ? 'text-white' : 'text-zion-cyan'
                  }`}>
                    {tier.price}
                  </div>
                  <div className={`text-lg ${
                    tier.popular ? 'text-white/80' : 'text-white/60'
                  }`}>
                    {tier.period}
                  </div>
                  <p className={`mt-4 ${
                    tier.popular ? 'text-white/80' : 'text-white/70'
                  }`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={20} className={`${
                        tier.popular ? 'text-white' : 'text-zion-cyan'
                      }`} />
                      <span className={tier.popular ? 'text-white/90' : 'text-white/80'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-white text-zion-slate hover:bg-white/90'
                    : 'bg-zion-cyan text-white hover:bg-zion-cyan/80'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact our team to discuss your needs and discover how our innovative solutions can transform your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-white/70">{contactInfo2026.address}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-white/70">{contactInfo2026.support.hours}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-zion-neon" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
              <p className="text-white/70">{contactInfo2026.support.responseTime}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${contactInfo2026.phone}`}
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-zion-cyan/25"
            >
              Call Now: {contactInfo2026.phone}
            </a>
            <a
              href={`mailto:${contactInfo2026.email}`}
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-full text-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-zion-slate to-zion-slate-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zion-cyan/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">Description</h3>
                  <p className="text-white/80 mb-6">{selectedService.description}</p>

                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-zion-cyan" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center space-x-3">
                        <TrendingUp size={16} className="text-zion-cyan" />
                        <span className="text-white/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-zion-slate/50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-zion-cyan mb-4">Pricing & Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-white/60">Price:</span>
                        <span className="text-white font-semibold">${selectedService.price}/{selectedService.pricingModel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Users:</span>
                        <span className="text-white">{selectedService.userLimit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Setup Time:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">ROI:</span>
                        <span className="text-zion-cyan font-semibold">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zion-slate/50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-zion-cyan mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone size={16} className="text-zion-cyan" />
                        <span className="text-white">{selectedService.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail size={16} className="text-zion-cyan" />
                        <span className="text-white">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe size={16} className="text-zion-cyan" />
                        <span className="text-white">{selectedService.contactInfo.website}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.name}`}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold py-3 px-6 rounded-xl text-center hover:scale-105 transition-transform duration-200"
                    >
                      Get Quote
                    </a>
                    <a
                      href={selectedService.contactInfo.website}
                      className="flex-1 border-2 border-zion-cyan text-zion-cyan font-bold py-3 px-6 rounded-xl text-center hover:bg-zion-cyan hover:text-white transition-all duration-200"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Missing icon components
const X = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Phone = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);