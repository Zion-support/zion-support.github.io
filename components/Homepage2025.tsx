import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  innovativeRealMicroSaasServices2025 
} from '../data/2025-innovative-real-micro-saas-services';
import { 
  innovativeAIServicesEnhanced2025 
} from '../data/2025-innovative-ai-services-enhanced';
import { 
  innovativeITServicesEnhanced2025 
} from '../data/2025-innovative-it-services-enhanced';
import { 
  emergingTechServicesEnhanced2025 
} from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';
import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';
import UltraFuturisticBackground2026 from './backgrounds/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { 
  ArrowRight, Star, Brain, Atom, Shield, Zap,
  Users, Globe, TrendingUp, Rocket, Cpu, Lock,
  BarChart3, Cloud
} from 'lucide-react';

interface Homepage2025Props { showInternalNav?: boolean }

const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {
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
      setIsMobileMenuOpen(false);
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

  const navigationSections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },
    { id: 'ai', label: 'AI Services', icon: '🧠' },
    { id: 'automation', label: 'AI Automation', icon: '⚡' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },
    { id: 'it', label: 'IT Solutions', icon: '💻' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const features = [
    {
      title: &quot;AI-Powered Innovation&quot;,
      description: &quot;Cutting-edge artificial intelligence solutions that transform business operations and drive growth&quot;,
      icon: Brain
    },
    {
      title: &quot;Quantum Computing&quot;,
      description: &quot;Next-generation quantum solutions for complex problem-solving and advanced cryptography&quot;,
      icon: Atom
    },
    {
      title: &quot;Cybersecurity Excellence&quot;,
      description: &quot;Enterprise-grade security solutions with AI-powered threat detection and response&quot;,
      icon: Shield
    },
    {
      title: &quot;Process Automation&quot;,
      description: &quot;Intelligent automation that streamlines operations and enhances productivity&quot;,
      icon: Zap
    }
  ];

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <UltraFuturisticBackground2026 intensity=&quot;medium&quot; theme=&quot;quantum&quot;>
      {showInternalNav && (
        <>
          {/* Navigation */}
          <nav className=&quot;fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10&quot;>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
              <div className=&quot;flex justify-between items-center h-16&quot;>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className=&quot;flex items-center space-x-2&quot;
                >
                  <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg&quot;></div>
                  <span className=&quot;text-white font-bold text-xl&quot;>ZionTech Group</span>
                </motion.div>
                
                {/* Desktop Navigation */}
                <div className=&quot;hidden lg:flex space-x-8&quot;>
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                        activeSection === section.id
                          ? 'text-cyan-400 border-b-2 border-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className=&quot;hidden md:flex items-center space-x-4&quot;
                >
                  <a
                    href=&quot;tel:+13024640950&quot;
                    className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors text-sm&quot;
                  >
                    +1 302 464 0950
                  </a>
                  <a
                    href=&quot;mailto:kleber@ziontechgroup.com&quot;
                    className=&quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm&quot;
                  >
                    Contact Us
                  </a>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                  className=&quot;lg:hidden text-white p-2&quot;
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 6h16M4 12h16M4 18h16&quot; />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className=&quot;lg:hidden border-t border-white/10&quot;
                  >
                    <div className=&quot;py-4 space-y-2&quot;>
                      {navigationSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                            activeSection === section.id
                              ? 'bg-cyan-400/20 text-cyan-400'
                              : 'text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          <span>{section.icon}</span>
                          <span>{section.label}</span>
                        </button>
                      ))}
                      <div className=&quot;pt-4 border-t border-white/10&quot;>
                        <a
                          href=&quot;tel:+13024640950&quot;
                          className=&quot;flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300&quot;
                        >
                          <span>📱</span>
                          <span>+1 302 464 0950</span>
                        </a>
                        <a
                          href=&quot;mailto:kleber@ziontechgroup.com&quot;
                          className=&quot;flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300&quot;
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

      {/* Hero Section */}
      <section id=&quot;hero&quot; className=&quot;relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16&quot;>
        <div className=&quot;text-center z-10 max-w-6xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center max-w-6xl mx-auto relative z-10&quot;
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className=&quot;w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center&quot;
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=&quot;inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm&quot;
              >
                <Star className=&quot;w-5 h-5&quot; />
                <span>Innovation Leader 2025-2026</span>
              </motion.div>
              
              <h1 className=&quot;text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </h1>
              <p className=&quot;text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed&quot;>
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                variants={itemVariants}
                className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-8&quot;
              >
                <Link href=&quot;/comprehensive-services-showcase-2026&quot;>
                  <button className=&quot;group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25&quot;>
                    <span className=&quot;flex items-center gap-2&quot;>
                      Explore 2026 Services
                      <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                    </span>
                  </button>
                </a>
                <Link href=&quot;/comprehensive-services-showcase-2025&quot;>
                  <button className=&quot;px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;>
                    2025 Services Showcase
                  </button>
                </a>
                <Link href=&quot;/get-started&quot;>
                  <button className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;>
                    Get Started
                  </button>
                </a>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=&quot;flex items-center justify-center space-x-6 text-sm text-gray-400&quot;
              >
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Shield className=&quot;w-4 h-4 text-green-400&quot; />
                  <span>Enterprise Security</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Globe className=&quot;w-4 h-4 text-blue-400&quot; />
                  <span>Global Reach</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <TrendingUp className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 px-4 relative&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-20&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Comprehensive Technology Solutions
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              From AI-powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className=&quot;group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8&quot;
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot; />
                <div className=&quot;relative&quot;>
                  <div className=&quot;w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6&quot;>
                    <feature.icon className=&quot;w-full h-full text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 leading-relaxed&quot;>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            className=&quot;text-center mb-16&quot;
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Our Revolutionary 2026 Services
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              From AI-powered business intelligence to quantum computing and emerging technologies, we're building the future today
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {[
              { title: &quot;AI Business Intelligence&quot;, description: &quot;Transform data into actionable insights with AI-powered analytics&quot;, icon: Brain, gradient: &quot;from-purple-500 to-pink-500&quot;, link: &quot;/comprehensive-services-showcase-2026&quot; },
              { title: &quot;Cloud Infrastructure&quot;, description: &quot;Automate cloud infrastructure deployment and management&quot;, icon: Cloud, gradient: &quot;from-cyan-500 to-blue-500&quot;, link: &quot;/comprehensive-services-showcase-2026&quot; },
              { title: &quot;Cybersecurity Intelligence&quot;, description: &quot;Advanced threat detection and response with AI&quot;, icon: Shield, gradient: &quot;from-red-500 to-orange-500&quot;, link: &quot;/comprehensive-services-showcase-2026&quot; },
              { title: &quot;Data Engineering&quot;, description: &quot;Streamline data pipelines and analytics with AI&quot;, icon: BarChart3, gradient: &quot;from-emerald-500 to-teal-500&quot;, link: &quot;/comprehensive-services-showcase-2026&quot; },
              { title: &quot;Quantum Computing&quot;, description: &quot;Access quantum computing power through the cloud&quot;, icon: Atom, gradient: &quot;from-indigo-500 to-purple-500&quot;, link: &quot;/comprehensive-services-showcase-2026&quot; },
              { title: &quot;Blockchain Intelligence&quot;, description: &quot;Intelligent blockchain analytics and DeFi optimization&quot;, icon: Lock, gradient: &quot;from-yellow-500 to-orange-500&quot;, link: &quot;/comprehensive-services-showcase-2026&quot; }
            ].map((service, index) => (
              <motion.div
                key={index}
                className=&quot;group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer&quot;
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => window.location.href = service.link}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className=&quot;relative p-6&quot;>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}>
                    <service.icon className=&quot;w-full h-full text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{service.title}</h3>
                  <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>{service.description}</p>
                  <a href={service.link} className=&quot;flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors&quot;>
                    <span className=&quot;text-sm font-medium&quot;>Explore Service</span>
                    <ArrowRight className=&quot;w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform&quot; />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action for Services Showcase */}
          <motion.div
            className=&quot;text-center mt-16&quot;
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href=&quot;/comprehensive-services-showcase-2026&quot;
              className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25&quot;
            >
              <Rocket className=&quot;w-5 h-5 mr-2&quot; />
              View All 2026 Services
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id=&quot;contact&quot; className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            className=&quot;text-center mb-16&quot;
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Get in touch with our team to discuss how our innovative services can help you achieve your goals.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-12&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <Users className=&quot;w-8 h-8 text-cyan-400&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Expert Team</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>Dedicated professionals ready to help</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <Zap className=&quot;w-8 h-8 text-blue-400&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Fast Implementation</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>Quick setup and deployment</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <Shield className=&quot;w-8 h-8 text-purple-400&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>24/7 Support</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>Round-the-clock assistance</p>
            </div>
          </div>

          <motion.div
            className=&quot;text-center&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
              >
                Email Us
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300&quot;
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className=&quot;py-12 px-4 border-t border-white/10&quot;>
        <div className=&quot;max-w-6xl mx-auto text-center&quot;>
          <div className=&quot;text-gray-400 mb-4&quot;>
            <p>© 2025-2026 ZionTech Group. All rights reserved.</p>
            <p className=&quot;mt-2&quot;>
              Address: 364 E Main St STE 1008 Middletown DE 19709 | 
              Phone: +1 302 464 0950 | 
              Email: kleber@ziontechgroup.com
            </p>
          </div>
          <div className=&quot;flex justify-center space-x-6&quot;>
            <a href=&quot;/comprehensive-services-showcase-2026&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
              2026 Services
            </a>
            <a href=&quot;/comprehensive-services-showcase-2025&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
              2025 Services
            </a>
            <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
              Website
            </a>
          </div>
        </div>
      </footer>
    </UltraFuturisticBackground2026>
  );
};

export default Homepage2025;