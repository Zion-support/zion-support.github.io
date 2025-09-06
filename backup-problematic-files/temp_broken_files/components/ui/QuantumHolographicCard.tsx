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
      }    }
  },

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: &quot;easeInOut&quot; as const
      }    }
  },

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: &quot;easeOut&quot; as const
      }    })
  },

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial=&quot;hidden&quot;
      whileInView=&quot;visible&quot;
      whileHover=&quot;hover&quot;
      viewport={{ once: true, margin: &quot;-50px&quot; }}    >
      {_/* Holographic glow effect */}
      <motion.div
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
                <p className=&quot;text-gray-300 text-sm&quot;>{service.tagline}</p>              </div>
            </div>
            
            {_service.popular && (
              <motion.div
                className=&quot;flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}              >
                <Star className=&quot;w-3 h-3 fill-current&quot; />
                <span>Popular</span>
              </motion.div>
            )}
          </div>;
;
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
              <div className=&quot;text-xl font-bold text-white&quot;>{service.customers.toLocaleString()}+</div>            </div>
            
            <div className=&quot;bg-gray-800/50 rounded-lg p-3 border border-gray-700/50&quot;>
              <div className=&quot;flex items-center space-x-2 text-sm text-gray-400 mb-1&quot;>
                <Star className=&quot;w-4 h-4 fill-yellow-400 text-yellow-400&quot; />
                <span>Rating</span>
              </div>
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
                  <span>{feature}</span>                </motion.div>
              ))}
            </div>;
          </div>;
;
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
                {service.competitors.slice(0, 2).join(', ')}              </div>
            </div>
          </div>

          {/* Contact information */}
          <div className=&quot;bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50&quot;>
            <h4 className=&quot;text-white font-semibold mb-3 flex items-center space-x-2&quot;>
              <Shield className=&quot;w-4 h-4 text-blue-400&quot; />
              <span>Contact & Support</span>
            </h4>
            <div className=&quot;space-y-2 text-sm text-gray-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <span className=&quot;text-blue-400&quot;></span>
                <span>{service.contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <span className=&quot;text-green-400&quot;></span>
                <span>{service.contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <span className=&quot;text-purple-400&quot;></span>
                <span className=&quot;text-xs&quot;>{service.contactInfo.address}</span>              </div>
            </div>
          </div>

          {_/* CTA Button */}
          <motion.a
            href={service.link}
            className=&quot;group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25&quot;
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}          >
            <span className=&quot;mr-2&quot;>Get Started</span>
            <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform duration-300&quot; />
            
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
              <ExternalLink className=&quot;w-3 h-3&quot; />            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
},

export default QuantumHolographicCard,