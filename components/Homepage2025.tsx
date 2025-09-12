import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Shield,
  Globe,
  TrendingUp
>>>>>>> origin/content/blog-sept12
} from 'lucide-react';

const Homepage2025: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices,
    ...innovativeMicroSaasServices2026,
    ...specializedITSolutions2026,
    ...emergingTechServices2026
  ];
  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);
  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
              />
            ))}
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              transition={{ duration: 1, delay: 0.2 }}
              Pioneering the future of technology with innovative solutions that drive business transformation. 
              From AI consciousness to quantum computing, we're building tomorrow's solutions today.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              transition={{ duration: 1, delay: 0.4 }}
              <a
                href="/2036-innovative-services-showcase"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                Explore 2036 Services
              </a>
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                Get Started
            </motion.div>
                          <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                <motion.a
                  href="/innovative-2038-services-showcase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-2xl shadow-purple-500/25 mb-4 sm:mb-0"
                >
                  <span>Explore 2038 Services</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Watch Demo
                <Play className="w-5 h-5 ml-2 inline" />
        </section>
        {/* Services Preview */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              Featured Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: service.price,
                      period: service.period || '/month',
                      features: service.features.slice(0, 4),
                      popular: index === 0,
                      category: service.category,
                      icon: '🚀'
                    }}
                    variant={index % 3 === 0 ? 'ai' : index % 3 === 1 ? 'quantum' : 'automation'}
                  />
                </motion.div>
              ))}
            </div>
          </nav>
        </>
      )}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                +1 302 464 0950
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                Contact Us
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
        </div>
      </nav>
      {/* Enhanced Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Technology
            </h1>
          </motion.div>
          <motion.p
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
            Revolutionary micro SAAS services, cutting-edge AI solutions, and emerging technologies that transform businesses and industries.
          </motion.p>
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 border-2 border-transparent hover:border-cyan-400/50"
              Explore Services
            </button>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-400/50"
              Visit Website
            </a>
          {/* Enhanced Floating Service Cards */}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            {featuredServices.slice(0, 6).map((service, index) => (
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                className="group bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{service.name}</h3>
                <p className="text-gray-400 text-base mb-4 leading-relaxed">{service.tagline}</p>
                <div className="text-cyan-400 font-bold text-xl mb-4">{service.price}{service.period}</div>
                <div className="text-sm text-gray-500">
                  {service.trialDays} days free trial • {service.setupTime} setup
                </div>
              </motion.div>
      </section>
      {/* Enhanced Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
            whileInView={{ opacity: 1, y: 0 }}
