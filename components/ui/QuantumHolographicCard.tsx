<<<<<<< HEAD
import React from 'react',
import { motion } from 'framer-motion',
import { Star, Zap, Shield, TrendingUp, ArrowRight, ExternalLink, Check, Users, Clock, DollarSign } from 'lucide-react',

interface QuantumHolographicCardProps {
  service: {
    id: string,
    name: string,
    tagline: string,
    price: string,
    period: string,
    description: string,
    features: string[],
    popular: boolean,
    icon: string,
    color: string,
    textColor: string,
    link: string,
    marketPosition: string,
    targetAudience: string,
    trialDays: number,
    setupTime: string,
    category: string,
    realService: boolean,
    technology: string[],
    integrations: string[],
    useCases: string[],
    roi: string,
    competitors: string[],
    marketSize: string,
    growthRate: string,
    variant: string,
    contactInfo: {
      mobile: string,
      email: string,
      address: string,
      website: string
    },
    realImplementation: boolean,
    implementationDetails: string,
    launchDate: string,
    customers: number,
    rating: number,
    reviews: number
  },
  className?: string
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({ service, className = '' }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: &quot;easeInOut&quot; as const
      }
=======
import React from 'react';

interface QuantumHolographicCardProps {_service: {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
    textColor: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;};
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  className?: string;
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = (_{_service, _className = ''}) => {_const _cardVariants = {
    hidden: { opacity: 0, _y: 50, _scale: 0.9},
    visible: {_opacity: 1, _y: 0, _scale: 1, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    },
    hover: {_y: -10, _scale: 1.02, _transition: {
        duration: 0.3, _ease: "easeInOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: &quot;easeInOut&quot; as const
      }
=======
  const _glowVariants = {_initial: { opacity: 0.5, _scale: 1},
    animate: {_opacity: [0.5, _1, _0.5], _scale: [1, _1.05, _1], _transition: {
        duration: 3, _repeat: Infinity, _ease: "easeInOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: &quot;easeOut&quot; as const
      }
=======
  const _featureVariants = {_hidden: { opacity: 0, _x: -20},
    visible: (_i: number) => ({_opacity: 1, _x: 0, _transition: {
        delay: i * 0.1, _duration: 0.5, _ease: "easeOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    })
  },

  return (
    <motion.div
<<<<<<< HEAD
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial=&quot;hidden&quot;
      whileInView=&quot;visible&quot;
      whileHover=&quot;hover&quot;
      viewport={{ once: true, margin: &quot;-50px&quot; }}
=======
      className={_`relative group cursor-pointer ${className}`}
      variants={_cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={_{ once: true, _margin: "-50px"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      {_/* Holographic glow effect */}
      <motion.div
<<<<<<< HEAD
        className=&quot;absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl&quot;
        variants={glowVariants}
        initial=&quot;initial&quot;
        animate=&quot;animate&quot;
      />
      
      {/* Main card */}
      <div className=&quot;relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 overflow-hidden&quot;>
        {/* Quantum particle effect background */}
        <div className=&quot;absolute inset-0 opacity-10&quot;>
          <div className=&quot;absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse&quot; />
          <div className=&quot;absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping&quot; />
          <div className=&quot;absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce&quot; />
          <div className=&quot;absolute bottom-8 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse&quot; />
        </div>

        {/* Header */}
        <div className=&quot;relative z-10&quot;>
          <div className=&quot;flex items-start justify-between mb-4&quot;>
            <div className=&quot;flex items-center space-x-3&quot;>
              <div className=&quot;text-4xl&quot;>{service.icon}</div>
              <div>
                <h3 className=&quot;text-xl font-bold text-white mb-1&quot;>{service.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{service.tagline}</p>
=======
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl"
        variants={_glowVariants}
        initial="initial"
        animate="animate"
      />
      
      {_/* Main card */}
      <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 overflow-hidden">
        {_/* Quantum particle effect background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
          <div className="absolute bottom-8 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
        </div>

        {_/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">{_service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{_service.name}</h3>
                <p className="text-gray-300 text-sm">{_service.tagline}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
            
            {_service.popular && (
              <motion.div
<<<<<<< HEAD
                className=&quot;flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
=======
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Star className=&quot;w-3 h-3 fill-current&quot; />
                <span>Popular</span>
              </motion.div>
            )}
          </div>

<<<<<<< HEAD
          {/* Price and trial */}
          <div className=&quot;flex items-center justify-between mb-4&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <span className=&quot;text-3xl font-bold text-white&quot;>{service.price}</span>
              <span className=&quot;text-gray-400&quot;>{service.period}</span>
            </div>
            <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
              <Clock className=&quot;w-4 h-4&quot; />
              <span>{service.trialDays} days free</span>
            </div>
          </div>

          {/* Description */}
          <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>{service.description}</p>

          {/* Key metrics */}
          <div className=&quot;grid grid-cols-2 gap-4 mb-6&quot;>
            <div className=&quot;bg-gray-800/50 rounded-lg p-3 border border-gray-700/50&quot;>
              <div className=&quot;flex items-center space-x-2 text-sm text-gray-400 mb-1&quot;>
                <Users className=&quot;w-4 h-4&quot; />
                <span>Customers</span>
              </div>
              <div className=&quot;text-xl font-bold text-white&quot;>{service.customers.toLocaleString()}+</div>
=======
          {_/* Price and trial */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-white">{_service.price}</span>
              <span className="text-gray-400">{_service.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
              <span>{_service.trialDays} days free</span>
            </div>
          </div>

          {_/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">{_service.description}</p>

          {_/* Key metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                <Users className="w-4 h-4" />
                <span>Customers</span>
              </div>
              <div className="text-xl font-bold text-white">{_service.customers.toLocaleString()}+</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
            <div className=&quot;bg-gray-800/50 rounded-lg p-3 border border-gray-700/50&quot;>
              <div className=&quot;flex items-center space-x-2 text-sm text-gray-400 mb-1&quot;>
                <Star className=&quot;w-4 h-4 fill-yellow-400 text-yellow-400&quot; />
                <span>Rating</span>
              </div>
<<<<<<< HEAD
              <div className=&quot;text-xl font-bold text-white&quot;>{service.rating}/5.0</div>
            </div>
          </div>

          {/* Features */}
          <div className=&quot;mb-6&quot;>
            <h4 className=&quot;text-white font-semibold mb-3 flex items-center space-x-2&quot;>
              <Zap className=&quot;w-4 h-4 text-yellow-400&quot; />
              <span>Key Features</span>
            </h4>
            <div className=&quot;space-y-2&quot;>
              {service.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;
                  custom={index}
                  variants={featureVariants}
                  initial=&quot;hidden&quot;
                  whileInView=&quot;visible&quot;
                  viewport={{ once: true }}
                >
                  <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                  <span>{feature}</span>
=======
              <div className="text-xl font-bold text-white">{_service.rating}/5.0</div>
            </div>
          </div>

          {_/* Features */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Key Features</span>
            </h4>
            <div className="space-y-2">
              {_service.features.slice(0, _4).map(_(feature, _index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                  custom={_index}
                  variants={_featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={_{ once: true}}
                >
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Market data */}
          <div className=&quot;bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30&quot;>
            <div className=&quot;flex items-center justify-between mb-2&quot;>
              <span className=&quot;text-sm font-semibold text-blue-300&quot;>Market Position</span>
              <TrendingUp className=&quot;w-4 h-4 text-green-400&quot; />
            </div>
            <p className=&quot;text-xs text-gray-300 leading-relaxed&quot;>{service.marketPosition}</p>
            <div className=&quot;flex items-center justify-between mt-2 text-xs&quot;>
              <span className=&quot;text-cyan-300&quot;>{service.marketSize}</span>
              <span className=&quot;text-green-300&quot;>{service.growthRate} growth</span>
            </div>
          </div>

          {/* ROI and competitors */}
          <div className=&quot;grid grid-cols-2 gap-4 mb-6&quot;>
            <div className=&quot;bg-green-900/20 rounded-lg p-3 border border-green-700/30&quot;>
              <div className=&quot;text-sm font-semibold text-green-300 mb-1&quot;>ROI</div>
              <div className=&quot;text-xs text-gray-300&quot;>{service.roi}</div>
            </div>
            
            <div className=&quot;bg-orange-900/20 rounded-lg p-3 border border-orange-700/30&quot;>
              <div className=&quot;text-sm font-semibold text-orange-300 mb-1&quot;>Competitors</div>
              <div className=&quot;text-xs text-gray-300&quot;>
                {service.competitors.slice(0, 2).join(', ')}
=======
          {_/* Market data */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-300">Market Position</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">{_service.marketPosition}</p>
            <div className="flex items-center justify-between mt-2 text-xs">
              <span className="text-cyan-300">{_service.marketSize}</span>
              <span className="text-green-300">{_service.growthRate} growth</span>
            </div>
          </div>

          {_/* ROI and competitors */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-900/20 rounded-lg p-3 border border-green-700/30">
              <div className="text-sm font-semibold text-green-300 mb-1">ROI</div>
              <div className="text-xs text-gray-300">{_service.roi}</div>
            </div>
            
            <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
              <div className="text-sm font-semibold text-orange-300 mb-1">Competitors</div>
              <div className="text-xs text-gray-300">
                {_service.competitors.slice(0, _2).join(', _')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Contact information */}
          <div className=&quot;bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50&quot;>
            <h4 className=&quot;text-white font-semibold mb-3 flex items-center space-x-2&quot;>
              <Shield className=&quot;w-4 h-4 text-blue-400&quot; />
              <span>Contact & Support</span>
            </h4>
            <div className=&quot;space-y-2 text-sm text-gray-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <span className=&quot;text-blue-400&quot;>📱</span>
                <span>{service.contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <span className=&quot;text-green-400&quot;>✉️</span>
                <span>{service.contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <span className=&quot;text-purple-400&quot;>📍</span>
                <span className=&quot;text-xs&quot;>{service.contactInfo.address}</span>
=======
          {_/* Contact information */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50">
            <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Contact & Support</span>
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📱</span>
                <span>{_service.contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✉️</span>
                <span>{_service.contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">📍</span>
                <span className="text-xs">{_service.contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </div>

          {_/* CTA Button */}
          <motion.a
<<<<<<< HEAD
            href={service.link}
            className=&quot;group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25&quot;
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
=======
            href={_service.link}
            className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25"
            whileHover={_{ scale: 1.02}}
            whileTap={_{ scale: 0.98}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <span className=&quot;mr-2&quot;>Get Started</span>
            <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform duration-300&quot; />
            
<<<<<<< HEAD
            {/* Button glow effect */}
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300&quot; />
          </motion.a>

          {/* Learn more link */}
          <div className=&quot;text-center mt-4&quot;>
            <a
              href={service.link}
              className=&quot;inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300&quot;
            >
              <span>Learn more about {service.name}</span>
              <ExternalLink className=&quot;w-3 h-3&quot; />
=======
            {_/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
          </motion.a>

          {_/* Learn more link */}
          <div className="text-center mt-4">
            <a
              href={_service.link}
              className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <span>Learn more about {_service.name}</span>
              <ExternalLink className="w-3 h-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
},

export default QuantumHolographicCard,