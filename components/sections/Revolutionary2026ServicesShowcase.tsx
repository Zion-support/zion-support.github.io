<<<<<<< HEAD
import React from 'react',
import { motion } from 'framer-motion',
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket, Globe, Sparkles } from 'lucide-react',
import Link from 'next/link',
import { aiAutonomousServices2026 } from '../../data/2026-ai-autonomous-services',
import { quantumSpaceTechServices2026 } from '../../data/2026-quantum-space-tech-services',
import { metaverseDigitalRealityServices2026 } from '../../data/2026-metaverse-digital-reality-services',
export default function Revolutionary2026ServicesShowcase() {
  // Get featured services from each category
  const featuredAIServices = aiAutonomousServices2026.slice(0, 3),
  const featuredQuantumServices = quantumSpaceTechServices2026.slice(0, 3),
  const featuredMetaverseServices = metaverseDigitalRealityServices2026.slice(0, 3),
=======
import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ServicesShowcase() {_// Get featured services from each category
  const _featuredAIServices = aiAutonomousServices2026.slice(0, _3);
  const _featuredQuantumServices = quantumSpaceTechServices2026.slice(0, _3);
  const _featuredMetaverseServices = metaverseDigitalRealityServices2026.slice(0, _3);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _containerVariants = {
    hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6}
    }
  },

<<<<<<< HEAD
  return (
    <section className=&quot;py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden&quot;>
      {/* Enhanced Background Effects */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30&quot;></div>
        <div className=&quot;absolute inset-0 bg-gradient-to-tl from-pink-900/20 via-transparent to-blue-900/20&quot;></div>
        <div className=&quot;absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse&quot;></div>
        <div className=&quot;absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
      </div>

      <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-20&quot;
=======
  return (_<section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {_/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {_/* Enhanced Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          viewport={_{ once: true}}
          className="text-center mb-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6&quot;>
            <Sparkles className=&quot;w-5 h-5 text-purple-400&quot; />
            <span className=&quot;text-purple-300 text-sm font-medium&quot;>2026 Revolutionary Innovations</span>
          </div>
          
          <h2 className=&quot;text-5xl md:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            <span className=&quot;bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent&quot;>
              The Future is Now
            </span>
          </h2>
          
<<<<<<< HEAD
          <p className=&quot;text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed&quot;>
            Experience the most advanced AI, quantum computing, and metaverse technologies ever created. 
            <span className=&quot;text-purple-400 font-semibold&quot;> 1000% ROI guaranteed</span> with our revolutionary solutions.
          </p>

          {/* Service Statistics */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mt-12&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl font-bold text-purple-400&quot;>{aiAutonomousServices2026.length}</div>
              <div className=&quot;text-gray-400 text-sm&quot;>AI Autonomous Services</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl font-bold text-cyan-400&quot;>{quantumSpaceTechServices2026.length}</div>
              <div className=&quot;text-gray-400 text-sm&quot;>Quantum Space Tech</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl font-bold text-pink-400&quot;>{metaverseDigitalRealityServices2026.length}</div>
              <div className=&quot;text-gray-400 text-sm&quot;>Metaverse Services</div>
=======
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI, _quantum computing, _and metaverse technologies ever created. 
            <span className="text-purple-400 font-semibold"> 1000% ROI guaranteed</span> with our revolutionary solutions.
          </p>

          {_/* Service Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{_aiAutonomousServices2026.length}</div>
              <div className="text-gray-400 text-sm">AI Autonomous Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{_quantumSpaceTechServices2026.length}</div>
              <div className="text-gray-400 text-sm">Quantum Space Tech</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">{_metaverseDigitalRealityServices2026.length}</div>
              <div className="text-gray-400 text-sm">Metaverse Services</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl font-bold text-green-400&quot;>∞</div>
              <div className=&quot;text-gray-400 text-sm&quot;>Possibilities</div>
            </div>
          </div>
        </motion.div>

        {_/* AI Autonomous Services Section */}
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;mb-20&quot;
=======
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="mb-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;flex items-center space-x-3 mb-12&quot;>
            <div className=&quot;w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center&quot;>
              <Brain className=&quot;w-6 h-6 text-white&quot; />
            </div>
            <div>
              <h3 className=&quot;text-3xl font-bold text-white&quot;>AI Autonomous Services</h3>
              <p className=&quot;text-blue-300&quot;>Fully autonomous AI systems that run your business</p>
            </div>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {featuredAIServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className=&quot;group relative&quot;
              >
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500&quot;></div>
                <div className=&quot;relative bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 h-full&quot;>
                  <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                    <div className=&quot;text-3xl&quot;>{service.icon}</div>
                    <div>
                      <h4 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h4>
                      <p className=&quot;text-blue-300 text-sm&quot;>{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className=&quot;text-gray-300 mb-4 text-sm leading-relaxed&quot;>
                    {service.description}
                  </p>

                  <div className=&quot;space-y-3 mb-6&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center space-x-2&quot;>
                        <div className=&quot;w-2 h-2 bg-blue-400 rounded-full&quot;></div>
                        <span className=&quot;text-gray-400 text-sm&quot;>{feature}</span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_featuredAIServices.map((service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{_service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{_service.name}</h4>
                      <p className="text-blue-300 text-sm">{_service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {_service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>

                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div>
<<<<<<< HEAD
                      <span className=&quot;text-2xl font-bold text-blue-400&quot;>{service.price}</span>
                      <span className=&quot;text-gray-400&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-1&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                      <span className=&quot;text-yellow-400 text-sm&quot;>{service.rating}</span>
                      <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
=======
                      <span className="text-2xl font-bold text-blue-400">{_service.price}</span>
                      <span className="text-gray-400">{_service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{_service.rating}</span>
                      <span className="text-gray-400 text-sm">({_service.reviews})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>

                  <Link 
<<<<<<< HEAD
                    href={service.link} 
                    className=&quot;inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium&quot;
=======
                    href={_service.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Learn More <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className=&quot;text-center mt-8&quot;>
            <Link 
              href=&quot;/services?category=ai-autonomous&quot;
              className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
            >
              View All AI Autonomous Services <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </a>
          </div>
        </motion.div>

        {_/* Quantum Space Tech Services Section */}
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;mb-20&quot;
=======
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="mb-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;flex items-center space-x-3 mb-12&quot;>
            <div className=&quot;w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center&quot;>
              <Rocket className=&quot;w-6 h-6 text-white&quot; />
            </div>
            <div>
              <h3 className=&quot;text-3xl font-bold text-white&quot;>Quantum Space Technology</h3>
              <p className=&quot;text-indigo-300&quot;>Revolutionary quantum-powered space exploration and technology</p>
            </div>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {featuredQuantumServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className=&quot;group relative&quot;
              >
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500&quot;></div>
                <div className=&quot;relative bg-black/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 h-full&quot;>
                  <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                    <div className=&quot;text-3xl&quot;>{service.icon}</div>
                    <div>
                      <h4 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h4>
                      <p className=&quot;text-indigo-300 text-sm&quot;>{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className=&quot;text-gray-300 mb-4 text-sm leading-relaxed&quot;>
                    {service.description}
                  </p>

                  <div className=&quot;space-y-3 mb-6&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center space-x-2&quot;>
                        <div className=&quot;w-2 h-2 bg-indigo-400 rounded-full&quot;></div>
                        <span className=&quot;text-gray-400 text-sm&quot;>{feature}</span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_featuredQuantumServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{_service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{_service.name}</h4>
                      <p className="text-indigo-300 text-sm">{_service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {_service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>

                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div>
<<<<<<< HEAD
                      <span className=&quot;text-2xl font-bold text-indigo-400&quot;>{service.price}</span>
                      <span className=&quot;text-gray-400&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-1&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                      <span className=&quot;text-yellow-400 text-sm&quot;>{service.rating}</span>
                      <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
=======
                      <span className="text-2xl font-bold text-indigo-400">{_service.price}</span>
                      <span className="text-gray-400">{_service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{_service.rating}</span>
                      <span className="text-gray-400 text-sm">({_service.reviews})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>

                  <Link 
<<<<<<< HEAD
                    href={service.link} 
                    className=&quot;inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium&quot;
=======
                    href={_service.link} 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Learn More <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className=&quot;text-center mt-8&quot;>
            <Link 
              href=&quot;/services?category=quantum-space&quot;
              className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
            >
              View All Quantum Space Services <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </a>
          </div>
        </motion.div>

        {_/* Metaverse & Digital Reality Services Section */}
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;mb-20&quot;
=======
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="mb-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;flex items-center space-x-3 mb-12&quot;>
            <div className=&quot;w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center&quot;>
              <Globe className=&quot;w-6 h-6 text-white&quot; />
            </div>
            <div>
              <h3 className=&quot;text-3xl font-bold text-white&quot;>Metaverse & Digital Reality</h3>
              <p className=&quot;text-pink-300&quot;>Immersive virtual worlds and consciousness interfaces</p>
            </div>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {featuredMetaverseServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className=&quot;group relative&quot;
              >
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500&quot;></div>
                <div className=&quot;relative bg-black/40 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-300 h-full&quot;>
                  <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                    <div className=&quot;text-3xl&quot;>{service.icon}</div>
                    <div>
                      <h4 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h4>
                      <p className=&quot;text-pink-300 text-sm&quot;>{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className=&quot;text-gray-300 mb-4 text-sm leading-relaxed&quot;>
                    {service.description}
                  </p>

                  <div className=&quot;space-y-3 mb-6&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center space-x-2&quot;>
                        <div className=&quot;w-2 h-2 bg-pink-400 rounded-full&quot;></div>
                        <span className=&quot;text-gray-400 text-sm&quot;>{feature}</span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_featuredMetaverseServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{_service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{_service.name}</h4>
                      <p className="text-pink-300 text-sm">{_service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {_service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>

                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div>
<<<<<<< HEAD
                      <span className=&quot;text-2xl font-bold text-pink-400&quot;>{service.price}</span>
                      <span className=&quot;text-gray-400&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-1&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                      <span className=&quot;text-yellow-400 text-sm&quot;>{service.rating}</span>
                      <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
=======
                      <span className="text-2xl font-bold text-pink-400">{_service.price}</span>
                      <span className="text-gray-400">{_service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{_service.rating}</span>
                      <span className="text-gray-400 text-sm">({_service.reviews})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>

                  <Link 
<<<<<<< HEAD
                    href={service.link} 
                    className=&quot;inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium&quot;
=======
                    href={_service.link} 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Learn More <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className=&quot;text-center mt-8&quot;>
            <Link 
              href=&quot;/services?category=metaverse&quot;
              className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
            >
              View All Metaverse Services <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </a>
          </div>
        </motion.div>

        {_/* Call to Action Section */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=&quot;text-center&quot;
=======
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          viewport={_{ once: true}}
          className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12&quot;>
            <h3 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Experience the Future?
            </h3>
            <p className=&quot;text-gray-300 text-xl mb-8 max-w-3xl mx-auto&quot;>
              Join thousands of companies already achieving unprecedented success with our revolutionary 2026 technologies. 
              <span className=&quot;text-purple-400 font-semibold&quot;> Contact us today</span> to start your transformation.
            </p>
            
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
=======
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Link 
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
              >
                <Zap className=&quot;w-5 h-5 mr-2&quot; />
                Get Started Today
              </a>
              
              <Link 
                href=&quot;/services&quot;
                className=&quot;inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300&quot;
              >
                Explore All Services
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </a>
            </div>

            <div className=&quot;mt-8 text-center&quot;>
              <p className=&quot;text-gray-400 text-sm mb-2&quot;>Contact Information</p>
              <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm&quot;>
                <span className=&quot;text-purple-300&quot;>📱 +1 302 464 0950</span>
                <span className=&quot;text-purple-300&quot;>✉️ kleber@ziontechgroup.com</span>
                <span className=&quot;text-purple-300&quot;>🌐 ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}