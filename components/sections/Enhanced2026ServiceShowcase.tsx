import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Globe, Rocket } from 'lucide-react',
import { innovative2026AIServices } from '../../data/innovative-2026-ai-services'
import { innovative2026ITInfrastructureServices } from '../../data/innovative-2026-it-infrastructure'
import { innovative2026MicroSaasServices } from '../../data/innovative-2026-micro-saas'
export default function Enhanced2026ServiceShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },

export default function Enhanced2026ServiceShowcase() {_const _containerVariants = {
    hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.2, _delayChildren: 0.1}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  const _renderServiceCard = (_service: unknown, _index: number) => (
    <motion.div
      key={service.id}
      variants={itemVariants}
      whileHover=&quot;hover&quot;
      className=&quot;group relative&quot;
    >
      <motion.div
        variants={cardVariants}
        className=&quot;relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300&quot;
      >
        {/* Glowing border effect */}
        <div className=&quot;absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot; />
        
        <div className=&quot;relative p-6&quot;>
          {/* Service header */}
          <div className=&quot;flex items-start justify-between mb-4&quot;>
            <div className=&quot;flex items-center space-x-3&quot;>
              <div className=&quot;text-3xl&quot;>{service.icon}</div>
              <div>
                <h3 className=&quot;text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300&quot;>
                  {service.name}
                </h3>
                <p className=&quot;text-slate-400 text-sm&quot;>{service.tagline}</p>
              </div>
            </div>
            {service.popular && (
              <div className=&quot;flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium&quot;>
                <Star className=&quot;w-3 h-3 fill-current&quot; />
                <span>Popular</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className=&quot;text-slate-300 text-sm mb-4 leading-relaxed&quot;>
            {service.description}
          </p>

          {/* Features */}
          <div className=&quot;mb-4&quot;>
            <h4 className=&quot;text-white font-semibold mb-2 text-sm&quot;>Key Features:</h4>
            <div className=&quot;grid grid-cols-1 gap-1&quot;>
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <div key={idx} className=&quot;flex items-center space-x-2 text-xs text-slate-400&quot;>
                  <div className=&quot;w-1.5 h-1.5 bg-cyan-500 rounded-full&quot; />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price and CTA */}
          <div className=&quot;flex items-center justify-between&quot;>
            <div className=&quot;text-right&quot;>
              <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
              <div className=&quot;text-slate-400 text-sm&quot;>{service.period}</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25&quot;
            >
              <span>Learn More</span>
              <ArrowRight className=&quot;w-4 h-4&quot; />
            </motion.button>
          </div>

          {/* Market info */}
          <div className=&quot;mt-4 pt-4 border-t border-slate-700/50&quot;>
            <div className=&quot;flex items-center justify-between text-xs text-slate-500&quot;>
              <span>Market: {service.marketSize}</span>
              <span>Growth: {service.growthRate}</span>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
      </motion.div>
    </motion.div>
  ),

  return (
    <section className=&quot;py-20 relative overflow-hidden&quot;>
      {/* Background effects */}
      <div className=&quot;absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40&quot; />
      
      <div className=&quot;container mx-auto px-4 relative z-10&quot;>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=&quot;text-center mb-16&quot;
        >
          <div className=&quot;flex items-center justify-center space-x-2 mb-4&quot;>
            <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center&quot;>
              <Rocket className=&quot;w-5 h-5 text-white&quot; />
            </div>
            <span className=&quot;text-cyan-400 font-semibold text-sm uppercase tracking-wider&quot;>
              Innovation 2026
            </span>
          </div>
          
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
            Next-Generation
            <span className=&quot;block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
              AI & IT Services
            </span>
          </h2>
          
          <p className=&quot;text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed&quot;>
            Discover our cutting-edge micro SAAS solutions, AI-powered platforms, and quantum-enhanced infrastructure services designed for the future of business.
          </p>
        </motion.div>

        {_/* AI Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=&quot;mb-20&quot;
        >
          <div className=&quot;flex items-center space-x-3 mb-8&quot;>
            <Brain className=&quot;w-6 h-6 text-cyan-400&quot; />
            <h3 className=&quot;text-2xl font-bold text-white&quot;>AI-Powered Services</h3>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            whileInView=&quot;visible&quot;
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;
          >
            {_innovative2026AIServices.map((service, _index) => renderServiceCard(service, _index))}
          </motion.div>
        </motion.div>

        {_/* IT Infrastructure Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=&quot;mb-20&quot;
        >
          <div className=&quot;flex items-center space-x-3 mb-8&quot;>
            <Globe className=&quot;w-6 h-6 text-purple-400&quot; />
            <h3 className=&quot;text-2xl font-bold text-white&quot;>IT Infrastructure & Security</h3>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            whileInView=&quot;visible&quot;
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;
          >
            {_innovative2026ITInfrastructureServices.map(_(service, _index) => renderServiceCard(service, _index))}
          </motion.div>
        </motion.div>

        {_/* Micro SAAS Section */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.6}}
        >
          <div className=&quot;flex items-center space-x-3 mb-8&quot;>
            <Zap className=&quot;w-6 h-6 text-pink-400&quot; />
            <h3 className=&quot;text-2xl font-bold text-white&quot;>Micro SAAS Solutions</h3>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            whileInView=&quot;visible&quot;
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;
          >
            {_innovative2026MicroSaasServices.map(_(service, _index) => renderServiceCard(service, _index))}
          </motion.div>
        </motion.div>

        {_/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=&quot;text-center mt-16&quot;
        >
          <div className=&quot;bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-slate-300 mb-6 max-w-2xl mx-auto&quot;>
              Join thousands of businesses already leveraging our innovative AI and IT services to drive growth, efficiency, and competitive advantage.
            </p>
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4&quot;>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25&quot;
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}