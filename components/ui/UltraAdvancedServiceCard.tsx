import React, {_useState} from 'react';
import {_ArrowRight, _ExternalLink, _Star, _TrendingUp, _Users, _Zap, _Shield, _Clock, _Check, _Brain, _Rocket, _Dna, _DollarSign, _Lock, _Globe} from 'lucide-react';

interface UltraAdvancedServiceCardProps {_service: {
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
}

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = (_{_service}) => {_const [isExpanded, _setIsExpanded] = useState(false);
  const [isHovered, _setIsHovered] = useState(false);

  const _getCategoryIcon = (_category: string) => {
    if (category.includes('AI') || category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;
    if (category.includes('Quantum')) return <Zap className="w-4 h-4" />;
    if (category.includes('Space')) return <Rocket className="w-4 h-4" />;
    if (category.includes('Biotech') || category.includes('Healthcare')) return <Dna className="w-4 h-4" />;
    if (category.includes('Finance') || category.includes('Trading')) return <DollarSign className="w-4 h-4" />;
    if (category.includes('Security') || category.includes('Cybersecurity')) return <Lock className="w-4 h-4" />;
    if (category.includes('Internet') || category.includes('Network')) return <Globe className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;};

  const _containerVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    },
    hover: {_y: -10, _transition: {
        duration: 0.3, _ease: "easeOut" as const}
    }
  };

  const _contentVariants = {_hidden: { opacity: 0, _height: 0},
    visible: {_opacity: 1, _height: "auto", _transition: {
        duration: 0.5, _ease: "easeOut" as const}
    }
  };

  return (_<motion.div
      className="relative group"
      variants={_containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={_() => setIsHovered(true)}
      onHoverEnd={_() => setIsHovered(false)}
    >
      {_/* Glow Effect */}
      <div 
        className={_`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-50'}`}
        style={_{
          background: `linear-gradient(135deg, _${service.color})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}
      />
      
      {_/* Main Card */}
      <div 
        className={_`relative bg-gradient-to-br ${service.color} p-1 rounded-2xl transition-all duration-500 ${_isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
      >
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full">
          {_/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{_service.icon}</div>
              <div>
                <div className="flex items-center space-x-2">
                  {_getCategoryIcon(service.category)}
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {_service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">{_service.name}</h3>
              </div>
            </div>
            
            {_service.popular && (
              <motion.div
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
                animate={{ scale: [1, _1.1, _1]}}
                transition={_{ duration: 2, _repeat: Infinity}}
              >
                POPULAR
              </motion.div>
            )}
          </div>

          {_/* Tagline */}
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {_service.tagline}
          </p>

          {_/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-white">{_service.price}</span>
              <span className="text-gray-400">{_service.period}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">{_service.rating}</span>
              </div>
              <span className="text-gray-400 text-sm">({_service.reviews})</span>
            </div>
          </div>

          {_/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">{_service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">{_service.trialDays} day trial</span>
            </div>
          </div>

          {_/* Market Data */}
          <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Market Size:</span>
              <span className="text-green-400 font-semibold">{_service.marketSize}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-400">Growth Rate:</span>
              <span className="text-blue-400 font-semibold">{_service.growthRate}</span>
            </div>
          </div>

          {_/* Expandable Content */}
          <AnimatePresence>
            {_isExpanded && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-4"
              >
                {_/* Description */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {_service.description}
                  </p>
                </div>

                {_/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {_service.features.slice(0, _6).map(_(feature, _index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{_feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {_/* ROI */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-2">ROI Promise</h4>
                  <p className="text-gray-300 text-sm">{_service.roi}</p>
                </div>

                {_/* Contact Info */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Mobile:</span>
                      <span className="text-white">{_service.contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{_service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Address:</span>
                      <span className="text-white text-xs">{_service.contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {_/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <motion.button
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={_{ scale: 1.02}}
              whileTap={_{ scale: 0.98}}
              onClick={_() => window.open(service.link, _'_blank')}
            >
              <span>Learn More</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              className={_`px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                isExpanded 
                  ? 'border-gray-600 text-gray-400' 
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'}`}
              whileHover={_{ scale: 1.02}}
              whileTap={_{ scale: 0.98}}
              onClick={_() => setIsExpanded(!isExpanded)}
            >
              {_isExpanded ? 'Show Less' : 'Details'}
            </motion.button>
          </div>

          {_/* Expand/Collapse Indicator */}
          <motion.div
            className="flex justify-center mt-4"
            animate={_{ rotate: isExpanded ? 180 : 0}}
            transition={_{ duration: 0.3}}
          >
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltraAdvancedServiceCard;