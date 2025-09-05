import React, { useState } from 'react',
import { motion } from 'framer-motion',
import { ArrowRight, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react',
import { revolutionary2025MicroSaasServices } from '../../data/revolutionary-2025-micro-saas',
import { emergingTech2025Services } from '../../data/emerging-tech-2025-services',
import { enterpriseIT2025Services } from '../../data/enterprise-it-2025-services',
const RevolutionaryServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all'),
  const [visibleServices, setVisibleServices] = useState(12),

  const categories = [
    { id: 'all', name: 'All Services', count: revolutionary2025MicroSaasServices.length + emergingTech2025Services.length + enterpriseIT2025Services.length },
    { id: 'ai', name: 'AI & ML', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum Tech', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('Quantum')).length },
    { id: 'emerging', name: 'Emerging Tech', count: emergingTech2025Services.length },
    { id: 'enterprise', name: 'Enterprise IT', count: enterpriseIT2025Services.length },
    { id: 'revolutionary', name: 'Revolutionary', count: revolutionary2025MicroSaasServices.length }
  ],

  const allServices = [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services],

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeCategory === 'ai') return service.category.includes('AI'),
        if (activeCategory === 'quantum') return service.category.includes('Quantum'),
        if (activeCategory === 'emerging') return emergingTech2025Services.includes(service),
        if (activeCategory === 'enterprise') return enterpriseIT2025Services.includes(service),
        if (activeCategory === 'revolutionary') return revolutionary2025MicroSaasServices.includes(service),
        return true
      }),

  const loadMore = () => {
    setVisibleServices(prev => Math.min(prev + 12, filteredServices.length))
  },

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  },

  return (
    <section className=&quot;relative z-10 py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Header */}
        <motion.div 
          className=&quot;text-center mb-16&quot;
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
              Revolutionary 2025
            </span>
            <br />
            <span className=&quot;text-white&quot;>Services</span>
          </h2>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions. 
            Transform your business with services that were once science fiction.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id),
                setVisibleServices(12)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
              }`}
            >
              {category.name}
              <span className=&quot;ml-2 px-2 py-1 bg-white/20 rounded-full text-xs&quot;>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12&quot;
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
        >
          {filteredServices.slice(0, visibleServices).map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className=&quot;group relative cursor-pointer&quot;
              style={{ perspective: '1000px' }}
            >
              <div className=&quot;absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75&quot;></div>
              <div className=&quot;relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full&quot;>
                {/* Background Effects */}
                <div className=&quot;absolute inset-0 rounded-2xl overflow-hidden&quot;>
                  <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500&quot;></div>
                  <div className=&quot;absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700&quot;></div>
                </div>

                {/* Popular Badge */}
                {service.popular && (
                  <div className=&quot;absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300&quot;>
                    <Star className=&quot;w-3 h-3 inline mr-1&quot; />
                    POPULAR
                  </div>
                )}

                {/* Service Header */}
                <div className=&quot;relative z-10&quot;>
                  <div className=&quot;flex items-start justify-between mb-4&quot;>
                    <div className=&quot;flex items-center space-x-3&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      <div>
                        <h3 className=&quot;text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-gray-400 text-sm&quot;>{service.tagline}</p>
                      </div>
                    </div>
                    <div className=&quot;text-right&quot;>
                      <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
                      <div className=&quot;text-gray-400 text-sm&quot;>{service.period}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{service.description}</p>

                  {/* Stats Grid */}
                  <div className=&quot;grid grid-cols-2 gap-3 mb-4&quot;>
                    <div className=&quot;flex items-center space-x-2 text-sm&quot;>
                      <Users className=&quot;w-4 h-4 text-cyan-400&quot; />
                      <span className=&quot;text-gray-300&quot;>{service.customers}+ users</span>
                    </div>
                    <div className=&quot;flex items-center space-x-2 text-sm&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
                      <span className=&quot;text-gray-300&quot;>{service.rating}/5 ({service.reviews})</span>
                    </div>
                    <div className=&quot;flex items-center space-x-2 text-sm&quot;>
                      <TrendingUp className=&quot;w-4 h-4 text-green-400&quot; />
                      <span className=&quot;text-gray-300&quot;>{service.growthRate}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-2 text-sm&quot;>
                      <Shield className=&quot;w-4 h-4 text-blue-400&quot; />
                      <span className=&quot;text-gray-300&quot;>{service.trialDays} day trial</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className=&quot;flex space-x-3 mt-6&quot;>
                    <a
                      href={service.link}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn&quot;
                    >
                      <span>Get Started</span>
                      <ArrowRight className=&quot;w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300&quot; />
                    </a>
                    <button className=&quot;px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5&quot;>
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className=&quot;absolute inset-0 pointer-events-none overflow-hidden&quot;>
                  <div className=&quot;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60&quot; style={{ left: '20%', top: '30%' }}></div>
                  <div className=&quot;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60&quot; style={{ left: '35%', top: '40%' }}></div>
                  <div className=&quot;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60&quot; style={{ left: '50%', top: '50%' }}></div>
                  <div className=&quot;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60&quot; style={{ left: '65%', top: '60%' }}></div>
                  <div className=&quot;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60&quot; style={{ left: '80%', top: '70%' }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleServices < filteredServices.length && (
          <motion.div 
            className=&quot;text-center&quot;
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={loadMore}
              className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40&quot;
            >
              Load More Revolutionary Services
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          className=&quot;text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20&quot;
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>
            Ready to Experience the Future?
          </h3>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Join the revolution with our cutting-edge AI, quantum, and emerging technology services. 
            Transform your business and stay ahead of the competition.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row items-center justify-center gap-4">
=======
          <div className=&quot;flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <a 
              href=&quot;/contact&quot; 
              className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40&quot;
            >
              Start Your Transformation
            </a>
            <a 
              href=&quot;/pricing&quot; 
              className=&quot;px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300&quot;
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
},

export default RevolutionaryServicesShowcase,