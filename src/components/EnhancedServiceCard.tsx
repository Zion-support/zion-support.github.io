import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Target,
  Zap,
  Shield,
  Globe,
  Cpu,
  Database,
  Rocket,
  Brain
} from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    features: string[];
    benefits: string[];
    useCases: string[];
    targetAudience: string[];
    tags: string[];
    estimatedDelivery: string;
    supportLevel: string;
    marketPrice: string;
    roi: string;
    innovationLevel: string;
    contactInfo: {
      phone: string;
      email: string;
      address: string;
    };
    technicalSpecs: {
      platform: string;
      scalability: string;
      security: string;
      integration: string;
    };
    competitors: string[];
    marketTrend: string;
    aiModel?: string;
    trainingData?: string;
    marketingContent?: string;
  };
  onClick?: () => void;
}

const EnhancedServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'AI & Machine Learning': <Cpu className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'Space Technology': <Rocket className="w-6 h-6" />,
      'Neural Technology': <Brain className="w-6 h-6" />,
      'Biotechnology': <Database className="w-6 h-6" />,
      'Robotics & Automation': <Target className="w-6 h-6" />,
      'Fusion Energy': <Zap className="w-6 h-6" />,
      'Metaverse & VR': <Globe className="w-6 h-6" />,
      'Materials Science': <Shield className="w-6 h-6" />,
      'default': <Star className="w-6 h-6" />
    };
    return iconMap[category] || iconMap.default;
  };

  const getInnovationColor = (level: string) => {
    const colorMap: Record<string, string> = {
      'Revolutionary': 'from-red-500 to-pink-600',
      'Breakthrough': 'from-orange-500 to-red-600',
      'Advanced': 'from-yellow-500 to-orange-600',
      'Innovative': 'from-green-500 to-blue-600',
      'Standard': 'from-gray-500 to-slate-600'
    };
    return colorMap[level] || colorMap.Standard;
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Card */}
      <motion.div
        className="relative bg-slate-800/80 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 overflow-hidden"
        animate={{
          scale: isHovered ? 1.02 : 1,
          borderColor: isHovered ? 'rgba(0, 212, 255, 0.4)' : 'rgba(0, 212, 255, 0.2)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 via-transparent to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg">
                {getCategoryIcon(service.category)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-zion-cyan text-sm font-medium">{service.category}</p>
              </div>
            </div>
            
            {/* Innovation Badge */}
            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} text-white text-xs font-bold`}>
              {service.innovationLevel}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-slate-700/50 rounded-lg">
              <p className="text-zion-cyan text-sm font-medium">Price</p>
              <p className="text-white font-bold">{service.price}</p>
            </div>
            <div className="text-center p-3 bg-slate-700/50 rounded-lg">
              <p className="text-zion-cyan text-sm font-medium">ROI</p>
              <p className="text-white font-bold">{service.roi}</p>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-4">
            <p className="text-zion-cyan text-sm font-medium mb-2">Key Features:</p>
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                >
                  {feature}
                </span>
              ))}
              {service.features.length > 3 && (
                <span className="px-2 py-1 bg-slate-600/50 text-gray-400 text-xs rounded-full">
                  +{service.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-medium group-hover:from-zion-cyan-dark group-hover:to-zion-purple-dark transition-all duration-200 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>

        {/* Hover Effects */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 rounded-xl"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-slate-800/90 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 overflow-hidden"
          >
            {/* Detailed Information */}
            <div className="space-y-6">
              {/* Technical Specifications */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-zion-cyan" />
                  <span>Technical Specifications</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-zion-cyan text-sm">Platform</p>
                    <p className="text-white">{service.technicalSpecs.platform}</p>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-zion-cyan text-sm">Scalability</p>
                    <p className="text-white">{service.technicalSpecs.scalability}</p>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-zion-cyan text-sm">Security</p>
                    <p className="text-white">{service.technicalSpecs.security}</p>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-zion-cyan text-sm">Integration</p>
                    <p className="text-white">{service.technicalSpecs.integration}</p>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-zion-cyan" />
                  <span>Use Cases</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-zion-cyan/10 text-zion-cyan text-sm rounded-lg border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-zion-cyan" />
                  <span>Target Audience</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.map((audience, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-zion-purple/10 text-zion-purple text-sm rounded-lg border border-zion-purple/20"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* Market Information */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-zion-cyan" />
                  <span>Market Information</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-zion-cyan text-sm">Market Price</p>
                    <p className="text-white font-medium">{service.marketPrice}</p>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-zion-cyan text-sm">Market Trend</p>
                    <p className="text-white font-medium">{service.marketTrend}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 p-4 rounded-lg border border-zion-cyan/20">
                <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-zion-cyan">Phone:</span> {service.contactInfo.phone}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-zion-cyan">Email:</span> {service.contactInfo.email}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-zion-cyan">Address:</span> {service.contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EnhancedServiceCard;