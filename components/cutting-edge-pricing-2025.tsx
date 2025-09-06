import React, { useState } from 'react',
import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin
} from 'lucide-react',
import Layout from '../components/layout/Layout'
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services'
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services'
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it'
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas'
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const pricingTiers = [
  {
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 team membersBasic AI content generationStandard supportCore integrationsBasic analyticsEmail support'
    ],
    icon: <Target className=&quot;w-6 h-6&quot; />,
    color: 'from-blue-500 to-cyan-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    popular: false
  },
  {
    name: 'Professional',
    price: 299,
    period: 'month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Up to 25 team membersAdvanced AI featuresPriority supportAdvanced integrationsAdvanced analyticsPhone & email supportCustom brandingAPI access'
    ],
    icon: <Zap className=&quot;w-6 h-6&quot; />,
    color: 'from-purple-500 to-pink-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 999,
    period: 'month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team membersFull AI suite access24/7 dedicated supportCustom integrationsAdvanced analytics & reportingDedicated account managerCustom developmentSLA guarantees',
      'On-premise optionsCompliance certifications'
    ],
    icon: <Shield className=&quot;w-6 h-6&quot; />,
    color: 'from-green-500 to-emerald-500',
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false
  }
],

const serviceCategories = [
  {
    name: 'AI & Consciousness Services',
    icon: <Brain className=&quot;w-8 h-8&quot; />,
    color: 'from-cyan-500 to-blue-500',
    services: cuttingEdgeAIServices2025.slice(0, 6),
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence'
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className=&quot;w-8 h-8&quot; />,
    color: 'from-purple-500 to-pink-500',
    services: cuttingEdgeQuantumServices2025.slice(0, 6),
    description: 'Breakthrough quantum computing and space technology solutions'
  },
  {
    name: 'Enterprise IT Solutions',
    icon: <Shield className=&quot;w-8 h-8&quot; />,
    color: 'from-blue-500 to-cyan-500',
    services: cuttingEdgeEnterpriseITServices2025.slice(0, 6),
    description: 'Advanced enterprise infrastructure and security solutions'
  },
  {
    name: 'Micro SAAS Solutions',
    icon: <Rocket className=&quot;w-8 h-8&quot; />,
    color: 'from-teal-500 to-emerald-500',
    services: cuttingEdgeMicroSaasServices2025.slice(0, 6),
    description: 'Innovative business solutions for modern enterprises'
  }
],

const stats = [
  { number: '25+', label: 'Cutting-Edge Services', icon: Star, color: 'text-cyan-400' },
  { number: '$500B+', label: 'Market Coverage', icon: TrendingUp, color: 'text-purple-400' },
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Expert Support', icon: Users, color: 'text-pink-400' }
],

export default function CuttingEdgePricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all'),

  const allServices = [
    ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025
  ],
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  const _filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory),

  const _containerVariants = {
    hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (_<>
      <Head>
        <title>Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;cutting-edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
          <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
            >
              <motion.h1 
                className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Cutting-Edge
                <span className=&quot;block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90&quot;>
                  Pricing 2025
                </span>
              </motion.h1>
              
              <motion.p 
                className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you 
                a competitive advantage while maintaining affordability and value.
              </motion.p>

              {_/* Hero Stats */}
              <motion.div 
                className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className=&quot;text-center&quot;>
                    <div className=&quot;flex justify-center mb-2&quot;>
                      <div className=&quot;p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30&quot;>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                    </div>
                    <div className=&quot;text-2xl md:text-3xl font-bold text-white mb-1&quot;>{stat.number}</div>
                    <div className=&quot;text-sm text-white/70&quot;>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className=&quot;py-20 bg-gradient-to-b from-black via-purple-900/10 to-black&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Flexible
                </span>{_' '}
                Pricing Plans
              </h2>
              <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
                Choose the perfect plan for your business needs. All plans include our cutting-edge technology 
                and world-class support to ensure your success.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;>
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className={_`relative group ${
                    tier.popular ? 'scale-105' : ''}`}
                >
                  {tier.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    tier.popular ? 'border-cyan-500/50 shadow-cyan-500/20' : ''
                  }`}>
                    <div className=&quot;text-center mb-8&quot;>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}>
                        {tier.icon}
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{tier.name}</h3>
                      <p className=&quot;text-white/70 mb-6&quot;>{tier.description}</p>
                      <div className=&quot;text-4xl font-bold text-white mb-2&quot;>
                        ${tier.price}
                        <span className=&quot;text-lg font-normal text-white/60&quot;>/{tier.period}</span>
                      </div>
                    </div>

                    <ul className=&quot;space-y-4 mb-8&quot;>
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-start&quot;>
                          <Check className=&quot;w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0&quot; />
                          <span className=&quot;text-white/80&quot;>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={_tier.ctaLink}
                      className={_`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                          : 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'}`}
                    >
                      {tier.cta}
                      <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className=&quot;py-20 bg-gradient-to-b from-black via-purple-900/10 to-black&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Service
                </span>{_' '}
                Categories
              </h2>
              <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
                Explore our comprehensive range of cutting-edge services across multiple technology domains. 
                Each category offers specialized solutions for different business needs.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              <button
                onClick={_() => setSelectedCategory('all')}
                className={_`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}`}
              >
                All Categories ({_allServices.length})
              </button>
              {_serviceCategories.map(_(category) => (_<button
                  key={category.name}
                  onClick={_() => setSelectedCategory(category.name)}
                  className={_`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}`}
                >
                  {_category.name} ({_category.services.length})
                </button>
              ))}
            </div>

            {_/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
            >
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className=&quot;group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20&quot;
                >
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;flex-1&quot;>
                        <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-white/70 text-sm leading-relaxed mb-4&quot;>
                          {service.description}
                        </p>
                      </div>
                      <div className=&quot;ml-4&quot;>
                        <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center&quot;>
                          <Star className=&quot;w-6 h-6 text-cyan-400&quot; />
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className=&quot;px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20&quot;
                        >
                          {_tag}
                        </span>
                      ))}
                    </div>

                    {/* Market Info */}
                    <div className=&quot;flex items-center justify-between text-sm text-white/60 mb-4&quot;>
                      <span>Market: {service.marketSize}</span>
                      <span className=&quot;text-cyan-400&quot;>{service.category}</span>
                    </div>

                    {/* Pricing */}
                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider&quot;>
                        Starting From
                      </h4>
                      <div className=&quot;text-2xl font-bold text-white&quot;>
                        ${service.pricing.starter.price}
                        <span className=&quot;text-sm font-normal text-white/60&quot;>/{service.pricing.starter.period}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className=&quot;flex items-center justify-between&quot;>
                      <a
                        href={service.website}
                        className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium&quot;
                      >
                        Learn More
                        <ExternalLink className=&quot;ml-1 w-4 h-4&quot; />
                      </a>
                      <a
                        href=&quot;/contact&quot;
                        className=&quot;inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
                      >
                        Get Started
                        <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className=&quot;absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none&quot; />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className=&quot;py-20 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
                Ready to Get Started?
              </h2>
              <p className=&quot;text-xl text-white/80 mb-8 leading-relaxed&quot;>
                Our team of experts is ready to help you choose the perfect plan and get you started with our 
                cutting-edge technology solutions. Contact us today for a personalized consultation.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-8&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25&quot;
                >
                  Start Your Journey
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <Phone className=&quot;mr-2 w-5 h-5&quot; />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 text-center&quot;>
                <div className=&quot;flex flex-col items-center&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3&quot;>
                    <Phone className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div className=&quot;text-white font-semibold&quot;>Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300&quot;>
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3&quot;>
                    <Mail className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div className=&quot;text-white font-semibold&quot;>Email</div>
                  <a href={`mailto:${contactInfo.email}`} className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300&quot;>
                    {contactInfo.email}
                  </a>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3&quot;>
                    <MapPin className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div className=&quot;text-white font-semibold&quot;>Address</div>
                  <div className=&quot;text-white/70 text-sm&quot;>{contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  )
}