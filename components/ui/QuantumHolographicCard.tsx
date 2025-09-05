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
    }
  };

  const _glowVariants = {_initial: { opacity: 0.5, _scale: 1},
    animate: {_opacity: [0.5, _1, _0.5], _scale: [1, _1.05, _1], _transition: {
        duration: 3, _repeat: Infinity, _ease: "easeInOut" as const}
    }
  };

  const _featureVariants = {_hidden: { opacity: 0, _x: -20},
    visible: (_i: number) => ({_opacity: 1, _x: 0, _transition: {
        delay: i * 0.1, _duration: 0.5, _ease: "easeOut" as const}
    })
  };

  return (
    <motion.div
      className={_`relative group cursor-pointer ${className}`}
      variants={_cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={_{ once: true, _margin: "-50px"}}
    >
      {_/* Holographic glow effect */}
      <motion.div
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
              </div>
            </div>
            
            {_service.popular && (
              <motion.div
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
              >
                <Star className="w-3 h-3 fill-current" />
                <span>Popular</span>
              </motion.div>
            )}
          </div>

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
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>Rating</span>
              </div>
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
                </motion.div>
              ))}
            </div>
          </div>

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
              </div>
            </div>
          </div>

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
              </div>
            </div>
          </div>

          {_/* CTA Button */}
          <motion.a
            href={_service.link}
            className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25"
            whileHover={_{ scale: 1.02}}
            whileTap={_{ scale: 0.98}}
          >
            <span className="mr-2">Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            
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
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuantumHolographicCard;