import React from 'react',
import { motion } from 'framer-motion',
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Rocket } from 'lucide-react',

interface ServiceCardProps {
  service: {
    id: string,
    name: string,
    tagline: string,
    description: string,
    category: string,
    price: {
      monthly: number,
      yearly: number,
      currency: string,
      trialDays: number,
      setupTime: string,
      enterprise?: number
    },
    features: string[],
    benefits: string[],
    targetAudience: string[],
    marketPosition: string,
    competitors: string[],
    techStack: string[],
    realImplementation: boolean,
    implementationDetails: string,
    roi: string,
    useCases: string[],
    integrations: string[],
    support: string,
    compliance: string[],
    link: string,
    icon: string,
    color: string,
    popular: boolean,
    launchDate: string,
    customers: number,
    rating: number,
    reviews: number,
    marketSize?: string,
    growthRate?: string
  },
  index: number}

const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = (_{_service, _index}) => {_const _getCategoryIcon = (_category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return <Zap className="w-5 h-5" />,
      case 'quantum & emerging tech':
        return <Rocket className="w-5 h-5" />,
      case 'enterprise it':
        return <Shield className="w-5 h-5" />,
      case 'space & metaverse':
        return <Globe className="w-5 h-5" />,
      case 'micro saas':
        return <TrendingUp className="w-5 h-5" />,
      default:
        return <Zap className="w-5 h-5" />    }
  },

  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {
      return color
    }
    return 'from-cyan-500 to-blue-500'
  },
        return <Zap className="w-5 h-5" />;}
  };

  const _getGradientClass = (_color: string) => {_if (color.includes('from-') && color.includes('to-')) {
      return color;}
    return 'from-cyan-500 to-blue-500';
  };

  return (
    <motion.div
      initial={_{ opacity: 0, _y: 50, _scale: 0.9}}
      animate={_{ opacity: 1, _y: 0, _scale: 1}}
      transition={_{
        duration: 0.6, _delay: index * 0.1, _ease: [0.25, _0.46, _0.45, _0.94]}}
      whileHover={_{
        y: -10, _scale: 1.02, _transition: { duration: 0.3}
      }}
      className=&quot;group relative&quot;
    >
      {/* Glow effect */}
      <div className=&quot;absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200&quot;></div>
      
      {/* Main card */}
      <div className=&quot;relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden&quot;>
        {/* Background pattern */}
        <div className=&quot;absolute inset-0 opacity-5&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]&quot;></div>
        </div>

        {/* Header */}
        <div className=&quot;relative z-10 mb-6&quot;>
          <div className=&quot;flex items-start justify-between mb-4&quot;>
            <div className=&quot;flex items-center space-x-3&quot;>
              <div className=&quot;text-3xl&quot;>{service.icon}</div>
              <div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  {getCategoryIcon(service.category)}
                  <span className=&quot;text-xs font-medium text-gray-400 uppercase tracking-wider&quot;>
                    {service.category}                  </span>
                </div>
              </div>
            </div>
            
            {_service.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: &quot;spring&quot;, stiffness: 200 }}
                className=&quot;flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full&quot;              >
                <Star className=&quot;w-3 h-3 fill-current&quot; />
                <span>POPULAR</span>
              </motion.div>
            )}
          </div>

          <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300&quot;>
            {service.name}
          </h3>
          
          <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
            {service.tagline}
          </p>;
        </div>;
;
        {/* Stats */}
        <div className=&quot;relative z-10 mb-6&quot;>
          <div className=&quot;grid grid-cols-3 gap-4&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.rating}</div>
              <div className=&quot;text-xs text-gray-400&quot;>Rating</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-2xl font-bold text-purple-400&quot;>{service.customers.toLocaleString()}</div>
              <div className=&quot;text-xs text-gray-400&quot;>Customers</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-2xl font-bold text-pink-400&quot;>{service.reviews}</div>
              <div className=&quot;text-xs text-gray-400&quot;>Reviews</div>            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className=&quot;relative z-10 mb-6&quot;>
          <div className=&quot;bg-gray-800/50 rounded-xl p-4 border border-gray-600/30&quot;>
            <div className=&quot;flex items-center justify-between mb-2&quot;>
              <span className=&quot;text-sm text-gray-400&quot;>Starting at</span>
              <span className=&quot;text-xs text-gray-500&quot;>per month</span>
            </div>
            <div className=&quot;flex items-baseline space-x-2&quot;>
              <span className=&quot;text-3xl font-bold text-white&quot;>${service.price.monthly}</span>
              <span className=&quot;text-lg text-gray-400&quot;>/mo</span>
            </div>
            <div className=&quot;flex items-center space-x-2 mt-2&quot;>
              <span className=&quot;text-xs text-gray-500&quot;>or</span>
              <span className=&quot;text-sm text-cyan-400 font-medium&quot;>
                ${service.price.yearly}/year              </span>
              <span className=&quot;text-xs text-gray-500&quot;>(save 17%)</span>
            </div>
            {service.price.enterprise && (
              <div className=&quot;mt-2 pt-2 border-t border-gray-600/30&quot;>
                <span className=&quot;text-xs text-gray-500&quot;>Enterprise: </span>
                <span className=&quot;text-sm text-purple-400 font-medium&quot;>                  ${service.price.enterprise}/mo
                </span>
              </div>
            )}
          </div>;
        </div>;
;
        {/* Features preview */}
        <div className=&quot;relative z-10 mb-6&quot;>
          <h4 className=&quot;text-sm font-semibold text-gray-300 mb-3&quot;>Key Features</h4>
          <div className=&quot;space-y-2&quot;>
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className=&quot;flex items-center space-x-2 text-sm&quot;
              >
                <div className=&quot;w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full&quot;></div>
                <span className=&quot;text-gray-300&quot;>{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className=&quot;text-xs text-gray-500 mt-2&quot;>                +{service.features.length - 3} more features
              </div>
            )}
          </div>;
        </div>;
;
        {/* Benefits */}
        <div className=&quot;relative z-10 mb-6&quot;>
          <h4 className=&quot;text-sm font-semibold text-gray-300 mb-3&quot;>Key Benefits</h4>
          <div className=&quot;space-y-2&quot;>
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className=&quot;flex items-center space-x-2 text-sm&quot;
              >
                <div className=&quot;w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full&quot;></div>
                <span className=&quot;text-gray-300&quot;>{benefit}</span>              </motion.div>
            ))}
          </div>;
        </div>;
;
        {/* Market info */}
        {service.marketSize && service.growthRate && (
          <div className=&quot;relative z-10 mb-6&quot;>
            <div className=&quot;bg-gray-800/30 rounded-lg p-3 border border-gray-600/20&quot;>
              <div className=&quot;flex items-center justify-between text-xs&quot;>
                <span className=&quot;text-gray-400&quot;>Market Size</span>
                <span className=&quot;text-cyan-400 font-medium&quot;>{service.marketSize}</span>
              </div>
              <div className=&quot;flex items-center justify-between text-xs mt-1&quot;>
                <span className=&quot;text-gray-400&quot;>Growth Rate</span>
                <span className=&quot;text-green-400 font-medium&quot;>{service.growthRate}</span>              </div>
            </div>
          </div>
        )}
;
        {/* CTA Button */}
        <div className=&quot;relative z-10&quot;>
          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=&quot;group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25&quot;          >
            <span className=&quot;relative z-10 flex items-center space-x-2&quot;>
              <span>Learn More</span>
              <ArrowRight className=&quot;w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200&quot; />
            </span>
            
            {/* Button glow effect */}
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300&quot;></div>          </motion.a>
        </div>

        {_/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none&quot;        />
      </div>
    </motion.div>
  )
},

export default UltraFuturisticServiceCardV2,