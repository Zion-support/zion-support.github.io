import React from 'react';

interface ServiceCardProps {_service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
      enterprise?: number;};
    features: string[];
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;
    useCases: string[];
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
    marketSize?: string;
    growthRate?: string;
  };
  index: number;
}

const UltraFuturisticServiceCardV2: React.FC<ServiceCardProps> = (_{_service, _index}) => {_const _getCategoryIcon = (_category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return <Zap className="w-5 h-5" />;
      case 'quantum & emerging tech':
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':
        return <Globe className="w-5 h-5" />;
      case 'micro saas':
        return <TrendingUp className="w-5 h-5" />;
      default:
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
      className="group relative"
    >
      {_/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      {_/* Main card */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden">
        {_/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        {_/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{_service.icon}</div>
              <div>
                <div className="flex items-center space-x-2">
                  {_getCategoryIcon(service.category)}
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {_service.category}
                  </span>
                </div>
              </div>
            </div>
            
            {_service.popular && (
              <motion.div
                initial={{ scale: 0}}
                animate={_{ scale: 1}}
                transition={_{ delay: 0.5, _type: "spring", _stiffness: 200}}
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full"
              >
                <Star className="w-3 h-3 fill-current" />
                <span>POPULAR</span>
              </motion.div>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
            {_service.name}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {_service.tagline}
          </p>
        </div>

        {_/* Stats */}
        <div className="relative z-10 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{_service.rating}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{_service.customers.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{_service.reviews}</div>
              <div className="text-xs text-gray-400">Reviews</div>
            </div>
          </div>
        </div>

        {_/* Pricing */}
        <div className="relative z-10 mb-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Starting at</span>
              <span className="text-xs text-gray-500">per month</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-white">${_service.price.monthly}</span>
              <span className="text-lg text-gray-400">/mo</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs text-gray-500">or</span>
              <span className="text-sm text-cyan-400 font-medium">
                ${_service.price.yearly}/year
              </span>
              <span className="text-xs text-gray-500">(save 17%)</span>
            </div>
            {_service.price.enterprise && (
              <div className="mt-2 pt-2 border-t border-gray-600/30">
                <span className="text-xs text-gray-500">Enterprise: </span>
                <span className="text-sm text-purple-400 font-medium">
                  ${service.price.enterprise}/mo
                </span>
              </div>
            )}
          </div>
        </div>

        {_/* Features preview */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <div className="space-y-2">
            {_service.features.slice(0, _3).map(_(feature, _idx) => (
              <motion.div
                key={idx}
                initial={_{ opacity: 0, _x: -20}}
                animate={_{ opacity: 1, _x: 0}}
                transition={_{ delay: 0.6 + idx * 0.1}}
                className="flex items-center space-x-2 text-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">{_feature}</span>
              </motion.div>
            ))}
            {_service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {_/* Benefits */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
          <div className="space-y-2">
            {_service.benefits.slice(0, _2).map(_(benefit, _idx) => (
              <motion.div
                key={idx}
                initial={_{ opacity: 0, _x: -20}}
                animate={_{ opacity: 1, _x: 0}}
                transition={_{ delay: 0.8 + idx * 0.1}}
                className="flex items-center space-x-2 text-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{_benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {_/* Market info */}
        {_service.marketSize && service.growthRate && (
          <div className="relative z-10 mb-6">
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-600/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Market Size</span>
                <span className="text-cyan-400 font-medium">{service.marketSize}</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-400">Growth Rate</span>
                <span className="text-green-400 font-medium">{_service.growthRate}</span>
              </div>
            </div>
          </div>
        )}

        {_/* CTA Button */}
        <div className="relative z-10">
          <motion.a
            href={_service.link}
            whileHover={_{ scale: 1.05}}
            whileTap={_{ scale: 0.95}}
            className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </span>
            
            {_/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </div>

        {_/* Hover overlay */}
        <motion.div
          initial={_{ opacity: 0}}
          whileHover={_{ opacity: 1}}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCardV2;