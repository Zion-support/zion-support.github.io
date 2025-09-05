import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud, Atom, Microscope, Satellite, DollarSign, Factory, Earth, TestTube, Megaphone, Scale, Network } from 'lucide-react';
import Link from 'next/link';

const Revolutionary2027ServicesShowcase = () => {
  const featuredServices = [
    {
      id: 'quantum-ai-consciousness-platform',
      name: 'Quantum AI Consciousness Platform',
      description: 'Simulate human consciousness with quantum computing - the first platform to combine quantum computing with advanced AI for breakthrough neuroscience research.',
      price: '$9,999',
      period: '/month',
      icon: Brain,
      color: 'from-purple-600 to-indigo-700',
      category: 'Quantum AI & Neuroscience',
      features: ['Quantum consciousness simulation', 'Neural pattern recognition', 'Emotional intelligence modeling', 'Real-time brain-computer interface'],
      marketSize: '$15B research market',
      growthRate: '300% annual growth'
    },
    {
      id: 'autonomous-space-mining-ai',
      name: 'Autonomous Space Mining AI',
      description: 'AI-powered autonomous mining operations in space - extract rare minerals from asteroids and celestial bodies without human intervention.',
      price: '$15,999',
      period: '/month',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-700',
      category: 'Space Technology & AI',
      features: ['Autonomous mining operations', 'Resource detection algorithms', 'Risk assessment AI', 'Mission planning automation'],
      marketSize: '$3.8T space economy',
      growthRate: '400% annual growth'
    },
    {
      id: 'dna-computing-platform',
      name: 'DNA Computing Platform',
      description: 'Molecular computing for complex problem solving - use DNA-based computation to solve problems exponentially faster than traditional computers.',
      price: '$7,999',
      period: '/month',
      icon: TestTube,
      color: 'from-green-600 to-emerald-700',
      category: 'Biotechnology & Computing',
      features: ['DNA-based computation', 'Molecular algorithm optimization', 'Real-time molecular analysis', 'Algorithm library (100+ algorithms)'],
      marketSize: '$2.1T biotechnology market',
      growthRate: '250% annual growth'
    },
    {
      id: 'holographic-metaverse-platform',
      name: 'Holographic Metaverse Platform',
      description: 'Create immersive 3D holographic experiences - build next-generation virtual worlds with realistic holographic projections.',
      price: '$3,999',
      period: '/month',
      icon: Globe,
      color: 'from-pink-600 to-rose-700',
      category: 'Metaverse & Holographics',
      features: ['3D holographic rendering', 'Real-time 3D modeling', 'Holographic projection systems', 'AI-powered content generation'],
      marketSize: '$800B metaverse market',
      growthRate: '350% annual growth'
    },
    {
      id: 'autonomous-healthcare-ai',
      name: 'Autonomous Healthcare AI',
      description: 'Self-learning AI for autonomous healthcare decisions - make independent diagnoses and treatment recommendations without human intervention.',
      price: '$5,999',
      period: '/month',
      icon: Microscope,
      color: 'from-red-600 to-orange-700',
      category: 'Healthcare & AI',
      features: ['Autonomous diagnosis', 'Treatment recommendation AI', 'Continuous learning algorithms', 'Predictive health analytics'],
      marketSize: '$4.1T healthcare market',
      growthRate: '280% annual growth'
    },
    {
      id: 'quantum-internet-security-gateway',
      name: 'Quantum Internet Security Gateway',
      description: 'Unbreakable encryption for the quantum internet - protect data transmission with quantum key distribution and quantum-resistant algorithms.',
      price: '$8,999',
      period: '/month',
      icon: Lock,
      color: 'from-indigo-600 to-purple-700',
      category: 'Quantum Security',
      features: ['Quantum key distribution', 'Unbreakable encryption', 'Real-time threat detection', 'Zero-trust architecture'],
      marketSize: '$500B cybersecurity market',
      growthRate: '500% annual growth'
    }
  ];

  const categories = [
    { name: 'Quantum AI Services', count: '25+', icon: Atom, color: 'from-purple-500 to-indigo-600' },
    { name: 'Space Technology', count: '15+', icon: Satellite, color: 'from-blue-500 to-cyan-600' },
    { name: 'Biotechnology', count: '20+', icon: TestTube, color: 'from-green-500 to-emerald-600' },
    { name: 'Emerging Tech', count: '30+', icon: Sparkles, color: 'from-pink-500 to-rose-600' }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    }
  };

  return (
    <section className=&quot;py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden&quot;>
      {/* Enhanced Background Effects */}
      <div className=&quot;absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-cyan-900/20&quot;></div>
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]&quot;></div>
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]&quot;></div>
      
      <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-20&quot;
        >
          <h2 className=&quot;text-5xl md:text-6xl font-bold text-white mb-8&quot;>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
              2027 Revolutionary Services
            </span>
          </h2>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Experience the future of technology with our cutting-edge AI, quantum computing, and emerging technology services. 
            Transform your business with solutions that were once science fiction.
          </p>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-16&quot;
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className=&quot;relative group&quot;
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center transform transition-all duration-300 group-hover:shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl`}>
                <div className=&quot;w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm&quot;>
                  <category.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{category.name}</h3>
                <p className=&quot;text-2xl font-bold text-white&quot;>{category.count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services Grid */}
        <motion.div
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className=&quot;group relative&quot;
            >
              <div className=&quot;relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/20&quot;>
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>

                {/* Service Content */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300&quot;>
                    {service.name}
                  </h3>
                  
                  <p className=&quot;text-gray-300 leading-relaxed&quot;>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className=&quot;space-y-2&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center space-x-2&quot;>
                        <div className=&quot;w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full&quot;></div>
                        <span className=&quot;text-sm text-gray-400&quot;>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Market Info */}
                  <div className=&quot;pt-4 border-t border-gray-700/50&quot;>
                    <div className=&quot;flex justify-between items-center text-sm text-gray-400&quot;>
                      <span>Market: {service.marketSize}</span>
                      <span className=&quot;text-green-400&quot;>↑ {service.growthRate}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className=&quot;pt-4 flex items-center justify-between&quot;>
                    <div className=&quot;text-3xl font-bold text-white&quot;>
                      {service.price}
                      <span className=&quot;text-lg text-gray-400&quot;>{service.period}</span>
                    </div>
                    <Link 
                      href={`/services/${service.id}`}
                      className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-lg hover:shadow-purple-500/25&quot;
                    >
                      <span>Explore</span>
                      <ArrowRight className=&quot;w-4 h-4&quot; />
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot;></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=&quot;text-center&quot;
        >
          <div className=&quot;bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12&quot;>
            <h3 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join the future of technology with our revolutionary 2027 services. 
              Get in touch to discover how we can accelerate your digital transformation.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <Link 
                href=&quot;https://ziontechgroup.com/contact&quot;
                className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25&quot;
              >
                <span>Get Started Today</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <a 
                href=&quot;tel:+13024640950&quot;
                className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl&quot;
              >
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Revolutionary2027ServicesShowcase;