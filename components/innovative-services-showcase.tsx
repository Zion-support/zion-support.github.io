import React from 'react';
import Head from 'next/head';
import {_Star, _TrendingUp, _Zap, _Brain, _Rocket, _Shield, _DollarSign, _Users, _Clock, _CheckCircle, _ArrowRight, _Phone, _Mail, _MapPin, _ExternalLink} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function InnovativeServicesShowcase() {_const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1, _delayChildren: 0.2}
    }
  };

  const _itemVariants = {_hidden: { opacity: 0, _y: 30},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6, _ease: "easeOut"}
    }
  };

  const _featuredServices = [
    {_title: '🔐 Quantum Internet Security Platform', _description: 'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.', _price: '$8, _999/month', _marketData: '$150B cybersecurity market, _300% annual growth', _competitors: 'Traditional cybersecurity solutions', _savings: 'Quantum-level protection vs. traditional methods', _features: ['Quantum key distribution (QKD)', _'Post-quantum cryptography', _'Quantum-resistant VPN tunnels', _'Real-time threat detection', _'Zero-trust architecture'], _link: 'https://ziontechgroup.com/quantum-internet-security-platform', _color: 'from-indigo-600 to-purple-700'},
    {_title: '🧬 AI-Powered Quantum Drug Discovery', _description: 'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.', _price: '$12, _999/month', _marketData: '$150B AI in healthcare, _400% annual growth', _competitors: 'Insitro ($100M+ funding), _Recursion ($2B+ funding)', _savings: '100x faster drug discovery vs. traditional methods', _features: ['Quantum molecular simulation', _'AI-powered drug screening', _'Protein folding prediction', _'Drug interaction modeling', _'Clinical trial optimization'], _link: 'https://ziontechgroup.com/ai-quantum-drug-discovery', _color: 'from-emerald-600 to-teal-700'},
    {_title: '💰 Autonomous Quantum Trading System', _description: 'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.', _price: '$15, _999/month', _marketData: '$15T algorithmic trading, _200% annual growth', _competitors: 'Renaissance Technologies, _Two Sigma, _Citadel', _savings: 'Accessible quantum AI for smaller firms', _features: ['Quantum AI trading algorithms', _'Nanosecond execution', _'Real-time market analysis', _'Risk management', _'Portfolio optimization'], _link: 'https://ziontechgroup.com/autonomous-quantum-trading-system', _color: 'from-yellow-600 to-orange-700'},
    {_title: '🧠 Neural Interface Development Platform', _description: 'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.', _price: '$19, _999/month', _marketData: '$5B neural interface market, _500% annual growth', _competitors: 'Basic research tools, _Traditional medical devices', _savings: 'First comprehensive neural interface platform', _features: ['Neural signal processing', _'Brain activity monitoring', _'AI-powered interpretation', _'Real-time communication', _'Safety protocols'], _link: 'https://ziontechgroup.com/neural-interface-development-platform', _color: 'from-purple-600 to-indigo-700'}
  ];

  return (_<UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Innovative Services Showcase - Zion Tech Group | Cutting-Edge Technology</title>
          <meta name="description" content="Discover our most innovative and cutting-edge services including quantum internet security, _AI drug discovery, _quantum trading, _and neural interfaces. Contact: +1 302 464 0950" />
          <meta name="keywords" content="innovative services, _quantum security, _AI drug discovery, _quantum trading, _neural interfaces, _cutting-edge technology" />
          <meta property="og:title" content="Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge technology services showcase" />
          <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase" />
        </Head>

        {_/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 50}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 1, _ease: "easeOut"}}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Innovative
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our most revolutionary and cutting-edge services. 
                These are the innovations that will transform industries and reshape the world.
              </p>

              {_/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">{_contactInfo.mobile}</div>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">{_contactInfo.email}</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400">{_contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Featured Innovative Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured
                </span> Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most revolutionary services that are pushing the boundaries of what's possible
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {_featuredServices.map((service, _index) => (_<motion.div
                  key={index}
                  initial={_{ opacity: 0, _x: index % 2 === 0 ? -50 : 50}}
                  whileInView={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{_service.description}</p>
                    
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20 mb-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                      <div className="text-sm text-gray-400">{_service.marketData}</div>
                      <div className="text-sm text-green-400 mt-1">{_service.savings}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {_service.features.map((feature, _idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {_feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={_service.link}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href="/contact"
                        className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
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

        {_/* Emerging Tech Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Emerging
                </span> Tech Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the latest technologies that are emerging and transforming industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {_emergingTechServicesEnhanced2025.slice(0, _6).map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 50}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                >
                  <UltraFuturisticCard variant="quantum-holographic" className="p-6">
                    <div className="text-4xl mb-4">{_service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{_service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{_service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {_service.price}
                      <span className="text-sm text-gray-400">{_service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{_service.marketSize} • {_service.growthRate}</div>
                    <a
                      href={_service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <motion.a
                href="/services"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2"
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
              >
                <span>View All Emerging Tech</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {_/* ArrowRight-Gen AI Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  ArrowRight-Generation
                </span> AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of artificial intelligence with our most advanced services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_nextGenAIServices.slice(0, _6).map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 50}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                >
                  <UltraFuturisticCard variant="quantum-holographic" className="p-6">
                    <div className="text-4xl mb-4">{_service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{_service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{_service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {_service.price}
                      <span className="text-sm text-gray-400">{_service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{_service.marketSize} • {_service.growthRate}</div>
                    <a
                      href={_service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <motion.a
                href="/services"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2"
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
              >
                <span>Discover All AI Services</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {_/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution and transform your business with our cutting-edge services
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  Explore All Services
                </a>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">Contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">{_contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white">{_contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span className="text-white">{_contactInfo.address}</span>
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