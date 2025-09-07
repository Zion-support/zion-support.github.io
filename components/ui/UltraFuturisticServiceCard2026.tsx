<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
  id: string;

  name: string;
  tagline: string;
  description: string;
>>>>>>> origin/chore/fix-lint-and-merge
  price?: string | {monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
<<<<<<< HEAD
import React from react';
    monthly?: number;
    yearly?: number;
    currency?: string;
  period?: string;
  pricing?: any;

  popular?: boolean;
    setupTime?: string;
  },period?: string;
  pricing?: any;
  features: string[],popular?: boolean;competitors?: string[];
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
    switch (variant) {case 'ai':;
        return {}
    }
  }
  const styles = getVariantStyles()return (<motion&& motion.div;
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.6 }}
      viewport={{ once: true }}
      className="group relative">;
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">;
        {/* Enhanced Background Glow */}
        {/* Popular Badge */}
        {service && service.popular && (<motion&& motion.div;
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0 && 0.2, type: "spring", stiffness: 200 }}
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg">;
            <Star className="w-4 h-4 inline mr-1" />;
            Popular;
          </motion && motion.div>;
        )}
          gradient: 'from - purple - 600 via - pink - 600 to - purple - 700',border_color: 'border - purple - 400 / 30',text_color: 'text - purple - 400',icon_bg: 'bg - purple - 500 / 20',icon_border: 'border - purple - 400 / 30';
        }
      case 'quantum':;
        return {gradient: 'from - cyan - 600 via - blue - 600 to - cyan - 700',border_color: 'border - cyan - 400 / 30',text_color: 'text - cyan - 400',icon_bg: 'bg - cyan - 500 / 20',icon_border: 'border - cyan - 400 / 30';
        }
      case 'space':;
        return {gradient: 'from - indigo - 600 via - purple - 600 to - indigo - 700',border_color: 'border - indigo - 400 / 30',text_color: 'text - indigo - 400',icon_bg: 'bg - indigo - 500 / 20',icon_border: 'border - indigo - 400 / 30';
        }
      case 'cybersecurity':;
        return {gradient: 'from - red - 600 via - orange - 600 to - red - 700',border_color: 'border - red - 400 / 30',text_color: 'text - red - 400',icon_bg: 'bg - red - 500 / 20',icon_border: 'border - red - 400 / 30';
        }
      case 'enterprise':;
        return {gradient: 'from - indigo - 600 via - purple - 600 to - indigo - 700',border_color: 'border - indigo - 400 / 30',text_color: 'text - indigo - 400',icon_bg: 'bg - indigo - 500 / 20',icon_border: 'border - indigo - 400 / 30';
        }
      case 'automation':;
        return {gradient: 'from - green - 600 via - emerald - 600 to - green - 700',border_color: 'border - green - 400 / 30',text_color: 'text - green - 400',icon_bg: 'bg - green - 500 / 20',icon_border: 'border - green - 400 / 30';
        }
      case 'it':;
        return {gradient: 'from - blue - 600 via - indigo - 600 to - blue - 700',border_color: 'border - blue - 400 / 30',text_color: 'text - blue - 400',icon_bg: 'bg - blue - 500 / 20',icon_border: 'border - blue - 400 / 30';
        }
      case 'emerging':;
        return {gradient: 'from - yellow - 600 via - orange - 600 to - yellow - 700',border_color: 'border - yellow - 400 / 30',text_color: 'text - yellow - 400',icon_bg: 'bg - yellow - 500 / 20',icon_border: 'border - yellow - 400 / 30';
        }
      case 'premium':;
        return {gradient: 'from - amber - 600 via - yellow - 600 to - amber - 700',border_color: 'border - amber - 400 / 30',text_color: 'text - amber - 400',icon_bg: 'bg - amber - 500 / 20',icon_border: 'border - amber - 400 / 30';
        }
      default:;
        return {gradient: 'from - gray - 600 via - gray - 700 to - gray - 800',border_color: 'border - gray - 400 / 30',text_color: 'text - gray - 400',icon_bg: 'bg - gray - 500 / 20',icon_border: 'border - gray - 400 / 30';
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
import React from 'react';

interface UltraFuturisticServiceCard2026Props {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string | { monthly?: number; yearly?: number; currency?: string };
  icon?: React.ReactNode;
}

export default function UltraFuturisticServiceCard2026({
  id,
  title,
  description,
  features,
  price,
  icon
}: UltraFuturisticServiceCard2026Props) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 text-sm">• {feature}</li>
        ))}
      </ul>
      {price && (
        <div className="text-blue-400 font-semibold">
          {typeof price === 'string' ? price : `${price.currency || '$'}${price.monthly || 0}/month`}
        </div>
<<<<<<< HEAD
      )}
    </div>
  );
}
=======
        
        {/* Features List */}
        <div className="space-y-3 mb-8 relative z-10">
          <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-cyan-400" />
            Key Features
          </h4>
          {service.features.slice(0, 6).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0}}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center space-x-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Market Information */}
        {service.marketPrice && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Market Price:</span>
              <span className="text-green-400 font-semibold">{service.marketPrice}</span>
            </div>
            
            {service.competitors && (
              <div className="text-xs text-gray-500">
                Competes with: {service.competitors.slice(0, 2).join()}
              </div>
            )}
          </div>
        )}
        
        {/* Target Market & Use Cases */}
        {service.targetMarket && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="text-xs">
              <div className="text-gray-400 mb-2">Target Market:</div>
              <div className="text-gray-300">{service.targetMarket}</div>
            </div>
            
            {service.useCases && (
              <div className="text-xs mt-3">
                <div className="text-gray-400 mb-2">Use Cases:</div>
                <div className="text-gray-300">{service.useCases.slice(0, 3).join()}</div>
              </div>
            )}
          </div>
        )}
        
        {/* Benefits Section */}
        {service.benefits && (
          <div className="border-t border-white/10 pt-4 mb-6 relative z-10">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
              Key Benefits
            </h4>
            <div className="space-y-2">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <div key = $2;
UltraFuturisticServiceCard2026.displayName = $2;
export default UltraFuturisticServiceCard2026,
=======

interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'}
}
}

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps    /> = ({ service, variant;
}
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
