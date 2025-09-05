import React from 'react';

interface Service {_id: string;
  name: string;
  tagline: string;
  description: string;
  price?: string | {
    monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
    setupTime?: string;};
  period?: string;
  pricing?: unknown;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[];
  benefits?: string[];
}

interface ServiceCardProps {_service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default';}

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = (_{_service, _variant = 'default'}) => {_const _getVariantStyles = () => {
    switch (variant) {
      case 'ai':
        return {
          gradient: 'from-purple-600 via-pink-600 to-purple-700', _borderColor: 'border-purple-400/30', _textColor: 'text-purple-400', _iconBg: 'bg-purple-500/20', _iconBorder: 'border-purple-400/30'};
      case 'quantum':
        return {_gradient: 'from-cyan-600 via-blue-600 to-cyan-700', _borderColor: 'border-cyan-400/30', _textColor: 'text-cyan-400', _iconBg: 'bg-cyan-500/20', _iconBorder: 'border-cyan-400/30'};
      case 'space':
        return {_gradient: 'from-indigo-600 via-purple-600 to-indigo-700', _borderColor: 'border-indigo-400/30', _textColor: 'text-indigo-400', _iconBg: 'bg-indigo-500/20', _iconBorder: 'border-indigo-400/30'};
      case 'cybersecurity':
        return {_gradient: 'from-red-600 via-orange-600 to-red-700', _borderColor: 'border-red-400/30', _textColor: 'text-red-400', _iconBg: 'bg-red-500/20', _iconBorder: 'border-red-400/30'};
      case 'enterprise':
        return {_gradient: 'from-indigo-600 via-purple-600 to-indigo-700', _borderColor: 'border-indigo-400/30', _textColor: 'text-indigo-400', _iconBg: 'bg-indigo-500/20', _iconBorder: 'border-indigo-400/30'};
      case 'automation':
        return {_gradient: 'from-green-600 via-emerald-600 to-green-700', _borderColor: 'border-green-400/30', _textColor: 'text-green-400', _iconBg: 'bg-green-500/20', _iconBorder: 'border-green-400/30'};
      case 'it':
        return {_gradient: 'from-blue-600 via-indigo-600 to-blue-700', _borderColor: 'border-blue-400/30', _textColor: 'text-blue-400', _iconBg: 'bg-blue-500/20', _iconBorder: 'border-blue-400/30'};
      case 'emerging':
        return {_gradient: 'from-yellow-600 via-orange-600 to-yellow-700', _borderColor: 'border-yellow-400/30', _textColor: 'text-yellow-400', _iconBg: 'bg-yellow-500/20', _iconBorder: 'border-yellow-400/30'};
      case 'premium':
        return {_gradient: 'from-amber-600 via-yellow-600 to-amber-700', _borderColor: 'border-amber-400/30', _textColor: 'text-amber-400', _iconBg: 'bg-amber-500/20', _iconBorder: 'border-amber-400/30'};
      default:
        return {_gradient: 'from-gray-600 via-gray-700 to-gray-800', _borderColor: 'border-gray-400/30', _textColor: 'text-gray-400', _iconBg: 'bg-gray-500/20', _iconBorder: 'border-gray-400/30'};
    }
  };

  const _styles = getVariantStyles();

  const _getCategoryIcon = (_category: string) => {_if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Rocket;
    if (category.includes('Cybersecurity')) return Shield;
    return TrendingUp;};

  const _CategoryIcon = getCategoryIcon(service.category);

  return (
    <motion.div
      initial={_{ opacity: 0, _y: 20}}
      whileInView={_{ opacity: 1, _y: 0}}
      transition={_{ duration: 0.6}}
      viewport={_{ once: true}}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
        {_/* Enhanced Background Glow */}
        <div className={_`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {_/* Popular Badge */}
        {_service.popular && (
          <motion.div
            initial={{ scale: 0}}
            animate={_{ scale: 1}}
            transition={_{ delay: 0.2, _type: "spring", _stiffness: 200}}
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg"
          >
            <Star className="w-4 h-4 inline mr-1" />
            Popular
          </motion.div>
        )}
        
        {_/* Service Header */}
        <div className="text-center mb-8 relative z-10">
          <div className={_`w-24 h-24 mx-auto mb-6 rounded-full ${styles.iconBg} flex items-center justify-center border ${_styles.iconBorder} text-4xl backdrop-blur-sm`}>
            {_service.icon}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
            {_service.name}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {_service.tagline}
          </p>
          
          <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
            {_service.price}
            <span className="text-lg text-gray-400 font-normal">/{_service.period}</span>
          </div>
          
          {_/* Category Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs text-gray-300">
            <CategoryIcon className="w-3 h-3" />
            <span>{_service.category}</span>
          </div>
        </div>
        
        {_/* Features List */}
        <div className="space-y-3 mb-8 relative z-10">
          <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-cyan-400" />
            Key Features
          </h4>
          {_service.features.slice(0, _6).map(_(feature, _idx) => (
            <motion.div
              key={idx}
              initial={_{ opacity: 0, _x: -10}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ delay: idx * 0.1}}
              className="flex items-center space-x-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></div>
              <span>{_feature}</span>
            </motion.div>
          ))}
        </div>
        
        {_/* Enhanced Market Information */}
        {_service.marketPrice && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Market Price:</span>
              <span className="text-green-400 font-semibold">{service.marketPrice}</span>
            </div>
            
            {_service.competitors && (
              <div className="text-xs text-gray-500">
                Competes with: {service.competitors.slice(0, _2).join(', _')}
              </div>
            )}
          </div>
        )}
        
        {_/* Target Market & Use Cases */}
        {_service.targetMarket && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="text-xs">
              <div className="text-gray-400 mb-2">Target Market:</div>
              <div className="text-gray-300">{service.targetMarket}</div>
            </div>
            
            {_service.useCases && (
              <div className="text-xs mt-3">
                <div className="text-gray-400 mb-2">Use Cases:</div>
                <div className="text-gray-300">{service.useCases.slice(0, _3).join(', _')}</div>
              </div>
            )}
          </div>
        )}
        
        {_/* Benefits Section */}
        {_service.benefits && (
          <div className="border-t border-white/10 pt-4 mb-6 relative z-10">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
              Key Benefits
            </h4>
            <div className="space-y-2">
              {service.benefits.slice(0, _3).map(_(benefit, _idx) => (
                <div key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                  <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{_benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {_/* CTA Button */}
        <div className="relative z-10">
          <motion.button
            whileHover={_{ scale: 1.02}}
            whileTap={_{ scale: 0.98}}
            className={_`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${styles.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${_styles.textColor}/25 border border-white/20 hover:border-white/40`}
          >
            Get Started
          </motion.button>
        </div>
        
        {_/* Enhanced Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
      </div>
    </motion.div>
  );
};

UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';

export default UltraFuturisticServiceCard2026;