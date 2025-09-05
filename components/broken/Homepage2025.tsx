import React, {_useState, _useEffect} from 'react';
import {_innovative2035MicroSaasServices} from '../data/innovative-2035-micro-saas-services';
import {_innovative2035AIServices} from '../data/innovative-2035-ai-services';
import {_innovative2035ITServices} from '../data/innovative-2035-it-services';
import {_innovativeRealMicroSaasServices2025} from '../data/2025-innovative-real-micro-saas-services';
import {_innovativeAIServicesEnhanced2025} from '../data/2025-innovative-ai-services-enhanced';
import {_innovativeITServicesEnhanced2025} from '../data/2025-innovative-it-services-enhanced';
import {_emergingTechServicesEnhanced2025} from '../data/2025-emerging-tech-services-enhanced';
import UltraFuturisticBackground2035 from './backgrounds/UltraFuturisticBackground2035';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

interface Homepage2025Props {_showInternalNav?: boolean}

const Homepage2025: React.FC<Homepage2025Props> = (_{_showInternalNav = true}) => {_const [activeSection, _setActiveSection] = useState('hero');
  const [currentServiceIndex, _setCurrentServiceIndex] = useState(0);
  const [isVisible, _setIsVisible] = useState(false);
  const [isMobileMenuOpen, _setIsMobileMenuOpen] = useState(false);

  useEffect__(() => {
    setIsVisible(true);
    const _interval = setInterval__(() => {
      setCurrentServiceIndex(_(prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);}, 5000);
    return () => clearInterval(interval);
  }, []);

  const _scrollToSection = (_sectionId: string) => {_const _element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const _allServices = [
    // New 2035 services (featured first)
    ...innovative2035MicroSaasServices,
    ...innovative2035AIServices,
    ...innovative2035ITServices,
    
    // Existing services
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices
  ];

  const _featuredServices = allServices.filter(service => service.popular).slice(0, 12);

  const _navigationSections = [
    {_id: 'hero', _label: 'Home', _icon: '🏠'},
    {_id: 'services', _label: 'Micro SAAS', _icon: '🚀'},
    {_id: 'ai', _label: 'AI Services', _icon: '🧠'},
    {_id: 'automation', _label: 'AI Automation', _icon: '⚡'},
    {_id: 'quantum', _label: 'Quantum Security', _icon: '🔐'},
    {_id: 'it', _label: 'IT Solutions', _icon: '💻'},
    {_id: 'emerging', _label: 'Emerging Tech', _icon: '🌟'},
    {_id: 'contact', _label: 'Contact', _icon: '📞'}
  ];

  return (_<UltraFuturisticBackground2026 intensity="medium" theme="quantum">
      {_showInternalNav && (
      <>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={_{ opacity: 0, _x: -20}}
              animate={_{ opacity: 1, _x: 0}}
              className="flex items-center space-x-2"
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering the future of technology with revolutionary AI, _Quantum Computing, _Space Technology, _and cutting-edge IT solutions that drive business transformation
            </motion.p>
            <motion.div 
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25">
                Get Started Today
              </button>
              <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
            </motion.div>
            
            {_/* Contact Information */}
            <motion.div 
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.6}}
              className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Mobile: +1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>Email: kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Services Preview */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Services Portfolio
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future with our comprehensive portfolio of {_real2036InnovativeServices.length + real2036ITServices.length + real2036AIServices.length}+ innovative services spanning AI, _Quantum Computing, _Space Technology, _and cutting-edge IT solutions
              </p>
            </motion.div>

            {_/* Featured Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {_featuredServices.map((service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                >
                  <UltraFuturisticServiceCard2026
                    service={_{
                      id: service.id, _name: service.name, _tagline: service.tagline, _description: service.description, _price: service.price, _period: service.period, _features: service.features, _popular: service.popular, _category: service.category, _icon: service.icon}}
                    variant="ai"
                  />
                </motion.div>
              ))}
            </div>

            {_/* Call to Action */}
            <motion.div 
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
            >
              <a 
                href="/comprehensive-services-showcase-2036"
                className="inline-block px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-xl rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                View Complete Portfolio
              </a>
            </motion.div>
          </div>
        </section>

        {_/* Technology Domains */}
        <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {_/* Mobile Navigation Menu */}
          <AnimatePresence>
            {_isMobileMenuOpen && (_<motion.div
                initial={{ opacity: 0, _height: 0}}
                animate={_{ opacity: 1, _height: 'auto'}}
                exit={_{ opacity: 0, _height: 0}}
                className="lg:hidden border-t border-white/10"
                id="mobile-navigation"
              >
                <div className="py-4 space-y-2">
                  {_navigationSections.map((section) => (_<button
                      key={section.id}
                      onClick={_() => scrollToSection(section.id)}
                      className={_`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-cyan-400/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-white/10'}`}
                    >
                      <span>{_section.icon}</span>
                      <span>{_section.label}</span>
                    </button>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      <span>📱</span>
                      <span>+1 302 464 0950</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      <span>✉️</span>
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      </>
      )}

      {_/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <motion.h1
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Future of Technology
            </span>
          </motion.h1>
          
          <motion.p
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed"
          >
            Revolutionary micro SAAS services, cutting-edge AI solutions, quantum cybersecurity, and emerging technologies that transform businesses and industries.
          </motion.p>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={_() => scrollToSection('services')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Services
            </button>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Visit Website
            </a>
          </motion.div>

          {_/* Floating Service Cards */}
          <motion.div
            initial={_{ opacity: 0, _y: 50}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 1, _delay: 0.6}}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {_featuredServices.slice(0, _3).map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 50}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.8 + index * 0.2}}
                className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{_service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{_service.name}</h3>
                <p className="text-gray-400 text-sm">{_service.tagline}</p>
                <div className="mt-4 text-cyan-400 font-bold">{_service.price}{_service.period}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {_/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your business with our cutting-edge micro SAAS solutions that deliver immediate value and rapid ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_innovativeRealMicroSaasServices2025.slice(0, _9).map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 50}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
              >
                <UltraFuturisticServiceCard2026 
                  service={_service} 
                  variant="default"
                  theme="quantum"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* AI Services Section */}
      <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Cutting-Edge AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Revolutionary AI solutions that transform businesses and create unprecedented opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_innovativeAIServicesEnhanced2025.slice(0, _9).map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 50}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
              >
                <UltraFuturisticServiceCard2026 
                  service={_service} 
                  variant="premium"
                  theme="neon"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* AI Automation Services Section */}
      <section id="automation" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Advanced AI Automation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Intelligent automation solutions that learn, adapt, and continuously optimize your business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_advancedAIAutomationServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 50}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
              >
                <UltraFuturisticServiceCard2026 
                  service={_service} 
                  variant="enterprise"
                  theme="holographic"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Quantum Cybersecurity Section */}
      <section id="quantum" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Quantum Cybersecurity
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Unbreakable security powered by quantum computing and advanced AI algorithms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_quantumCybersecurityServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 50}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
              >
                <UltraFuturisticServiceCard2026 
                  service={_service} 
                  variant="premium"
                  theme="cyberpunk"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* IT Solutions Section */}
      <section id="it" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Advanced IT Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive IT services that drive digital transformation and business innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_innovativeITServicesEnhanced2025.slice(0, _9).map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 50}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
              >
                <UltraFuturisticServiceCard2026 
                  service={_service} 
                  variant="default"
                  theme="quantum"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Emerging Technologies Section */}
      <section id="emerging" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Emerging Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Revolutionary technologies that define the future of human civilization and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_emergingTechServicesEnhanced2025.slice(0, _9).map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 50}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
              >
                <UltraFuturisticServiceCard2026 
                  service={_service} 
                  variant="enterprise"
                  theme="holographic"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our innovative services can revolutionize your operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Visit Our Website
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Enhanced Footer */}
      <footer className="bg-black/60 border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ZionTech Group</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Revolutionary technology solutions that transform businesses and industries through innovation, AI, and emerging technologies.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
                <li><a href="#ai" className="hover:text-cyan-400 transition-colors">AI Services</a></li>
                <li><a href="#automation" className="hover:text-cyan-400 transition-colors">AI Automation</a></li>
                <li><a href="#quantum" className="hover:text-cyan-400 transition-colors">Quantum Security</a></li>
                <li><a href="#it" className="hover:text-cyan-400 transition-colors">IT Solutions</a></li>
                <li><a href="#emerging" className="hover:text-cyan-400 transition-colors">Emerging Tech</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a></li>
                <li><a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a></li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">Website</a></li>
                <li><a href="https://www.linkedin.com/company/zion-tech-group" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://x.com/ziontechgroup" className="hover:text-cyan-400 transition-colors">Twitter/X</a></li>
              </ul>
            </div>
          </div>
        </section>

        {_/* Why Choose Us */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                We're not just another technology company - we're pioneers shaping the future of business and technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_[
                {
                  title: 'Innovation First', _description: 'We don\'t follow trends - we create them. Our services are built on cutting-edge research and breakthrough technologies.', _icon: '🚀'},
                {_title: 'Proven Results', _description: 'Our solutions have helped businesses achieve 10x improvements in efficiency, _cost savings, _and competitive advantage.', _icon: '📈'},
                {_title: 'Future-Proof Technology', _description: 'Built with quantum computing, _AI consciousness, _and space technology - ensuring your business stays ahead of the curve.', _icon: '🔮'},
                {_title: 'Expert Team', _description: 'World-class engineers, _scientists, _and business strategists with decades of experience in emerging technologies.', _icon: '👥'},
                {_title: '24/7 Support', _description: 'Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently.', _icon: '🛡️'},
                {_title: 'Scalable Solutions', _description: 'From startups to enterprises, _our solutions scale with your business and grow with your ambitions.', _icon: '📊'}
              ].map(_(feature, _index) => (
                <motion.div
                  key={_feature.title}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="text-center p-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                    {_feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {_feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {_feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </UltraFuturisticBackground2035>
  );
}

export default Homepage2025;