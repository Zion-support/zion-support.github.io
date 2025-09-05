import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Zap, Brain, Rocket, Shield, 
  DollarSign, Users, Clock, CheckCircle, ArrowRight,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';

export default function InnovativeServicesShowcase() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot;
      }
    }
  };

  const featuredServices = [
    {
      title: '🔐 Quantum Internet Security Platform',
      description: 'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.',
      price: '$8,999/month',
      marketData: '$150B cybersecurity market, 300% annual growth',
      competitors: 'Traditional cybersecurity solutions',
      savings: 'Quantum-level protection vs. traditional methods',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum-resistant VPN tunnels', 'Real-time threat detection', 'Zero-trust architecture'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      title: '🧬 AI-Powered Quantum Drug Discovery',
      description: 'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',
      price: '$12,999/month',
      marketData: '$150B AI in healthcare, 400% annual growth',
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',
      savings: '100x faster drug discovery vs. traditional methods',
      features: ['Quantum molecular simulation', 'AI-powered drug screening', 'Protein folding prediction', 'Drug interaction modeling', 'Clinical trial optimization'],
      link: 'https://ziontechgroup.com/ai-quantum-drug-discovery',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      title: '💰 Autonomous Quantum Trading System',
      description: 'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.',
      price: '$15,999/month',
      marketData: '$15T algorithmic trading, 200% annual growth',
      competitors: 'Renaissance Technologies, Two Sigma, Citadel',
      savings: 'Accessible quantum AI for smaller firms',
      features: ['Quantum AI trading algorithms', 'Nanosecond execution', 'Real-time market analysis', 'Risk management', 'Portfolio optimization'],
      link: 'https://ziontechgroup.com/autonomous-quantum-trading-system',
      color: 'from-yellow-600 to-orange-700'
    },
    {
      title: '🧠 Neural Interface Development Platform',
      description: 'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.',
      price: '$19,999/month',
      marketData: '$5B neural interface market, 500% annual growth',
      competitors: 'Basic research tools, Traditional medical devices',
      savings: 'First comprehensive neural interface platform',
      features: ['Neural signal processing', 'Brain activity monitoring', 'AI-powered interpretation', 'Real-time communication', 'Safety protocols'],
      link: 'https://ziontechgroup.com/neural-interface-development-platform',
      color: 'from-purple-600 to-indigo-700'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Innovative Services Showcase - Zion Tech Group | Cutting-Edge Technology</title>
          <meta name=&quot;description&quot; content=&quot;Discover our most innovative and cutting-edge services including quantum internet security, AI drug discovery, quantum trading, and neural interfaces. Contact: +1 302 464 0950&quot; />
          <meta name=&quot;keywords&quot; content=&quot;innovative services, quantum security, AI drug discovery, quantum trading, neural interfaces, cutting-edge technology&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Innovative Services Showcase - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Cutting-edge technology services showcase&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/innovative-services-showcase&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/innovative-services-showcase&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: &quot;easeOut&quot; }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Innovative
                </span>
                <br />
                <span className=&quot;text-white&quot;>Services Showcase</span>
              </h1>
              
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
                Experience the future of technology with our most revolutionary and cutting-edge services. 
                These are the innovations that will transform industries and reshape the world.
              </p>

              {/* Contact Info */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12&quot;>
                <div className=&quot;text-center&quot;>
                  <Phone className=&quot;w-8 h-8 text-cyan-400 mx-auto mb-3&quot; />
                  <div className=&quot;text-white font-semibold&quot;>Phone</div>
                  <div className=&quot;text-gray-400&quot;>{contactInfo.mobile}</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <Mail className=&quot;w-8 h-8 text-purple-400 mx-auto mb-3&quot; />
                  <div className=&quot;text-white font-semibold&quot;>Email</div>
                  <div className=&quot;text-gray-400&quot;>{contactInfo.email}</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <MapPin className=&quot;w-8 h-8 text-pink-400 mx-auto mb-3&quot; />
                  <div className=&quot;text-white font-semibold&quot;>Address</div>
                  <div className=&quot;text-gray-400&quot;>{contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Innovative Services */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              className=&quot;text-center mb-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                  Featured
                </span> Innovative Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our most revolutionary services that are pushing the boundaries of what's possible
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300&quot;
                >
                  <div className=&quot;mb-6&quot;>
                    <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                    <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>{service.description}</p>
                    
                    <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20 mb-6&quot;>
                      <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                      <div className=&quot;text-sm text-gray-400&quot;>{service.marketData}</div>
                      <div className=&quot;text-sm text-green-400 mt-1&quot;>{service.savings}</div>
                    </div>

                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>Key Features:</h4>
                      <ul className=&quot;space-y-2&quot;>
                        {service.features.map((feature, idx) => (
                          <li key={idx} className=&quot;flex items-center text-gray-300&quot;>
                            <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className=&quot;flex flex-col sm:flex-row gap-3&quot;>
                      <a
                        href={service.link}
                        className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2&quot;
                      >
                        <span>Learn More</span>
                        <ExternalLink className=&quot;w-5 h-5&quot; />
                      </a>
                      <a
                        href=&quot;/contact&quot;
                        className=&quot;border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Tech Services */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              className=&quot;text-center mb-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent&quot;>
                  Emerging
                </span> Tech Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover the latest technologies that are emerging and transforming industries
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                              {emergingTechServicesEnhanced2025.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard variant=&quot;quantum-holographic&quot; className=&quot;p-6&quot;>
                    <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{service.name}</h3>
                    <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.description}</p>
                    <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>
                      {service.price}
                      <span className=&quot;text-sm text-gray-400&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;text-sm text-gray-400 mb-4&quot;>{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2&quot;
                    >
                      <span>Learn More</span>
                      <ArrowRight className=&quot;w-4 h-4&quot; />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              className=&quot;text-center mt-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href=&quot;/services&quot;
                className=&quot;bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Emerging Tech</span>
                <ArrowRight className=&quot;w-6 h-6&quot; />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ArrowRight-Gen AI Services */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              className=&quot;text-center mb-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent&quot;>
                  ArrowRight-Generation
                </span> AI Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the future of artificial intelligence with our most advanced services
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {nextGenAIServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard variant=&quot;quantum-holographic&quot; className=&quot;p-6&quot;>
                    <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{service.name}</h3>
                    <p className=&quot;text-gray-400 text-sm mb-4&quot;>{service.description}</p>
                    <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>
                      {service.price}
                      <span className=&quot;text-sm text-gray-400&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;text-sm text-gray-400 mb-4&quot;>{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2&quot;
                    >
                      <span>Learn More</span>
                      <ArrowRight className=&quot;w-4 h-4&quot; />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              className=&quot;text-center mt-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href=&quot;/services&quot;
                className=&quot;bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discover All AI Services</span>
                <ArrowRight className=&quot;w-6 h-6&quot; />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Experience the Future?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join the revolution and transform your business with our cutting-edge services
              </p>

              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
                >
                  Get Started Today
                </a>
                <a
                  href=&quot;/services&quot;
                  className=&quot;border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300&quot;
                >
                  Explore All Services
                </a>
              </div>

              <div className=&quot;mt-12 text-center&quot;>
                <p className=&quot;text-gray-400 mb-4&quot;>Contact us directly:</p>
                <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center&quot;>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                    <span className=&quot;text-white&quot;>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                    <span className=&quot;text-white&quot;>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <MapPin className=&quot;w-5 h-5 text-pink-400&quot; />
                    <span className=&quot;text-white&quot;>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}