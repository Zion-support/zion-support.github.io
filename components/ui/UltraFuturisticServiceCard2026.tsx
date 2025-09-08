  id: string;

  name: string;
  tagline: string;
  description: string;

  price?: string | {monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;


    switch (variant) {case 'ai':;
        return {}

    }
  }
  const styles = getVariantStyles()return (<motion&& motion.div;



  const getCategoryIcon = (category: string) => {;
    if (category && category.includes('AI')) return Brain;
    if (category && category.includes('Quantum')) return Atom;
    if (category && category.includes('Space')) return Rocket;
    if (category && category.includes('Cybersecurity')) return Shield;
    return TrendingUp;
  };

  const CategoryIcon = getCategoryIcon(service && service.category);



  return (
    <motion&& motion.div





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

import React from 'react';


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



            )}
          </div>
        )}




        


        {/* Benefits Section */}
        {service && service.benefits && (;
          <div className="border-t border-white/10 pt-4 mb-6 relative z-10">;
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">;
              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />;
              Key Benefits;
            </h4>;
            <div className="space-y-2">;
              {service && service.benefits.slice(0, 3).map((benefit, idx) => (;
                <div key={idx} className="text-xs text-gray-400 flex items-start space-x-2">;
                  <Check className="w-3 h-3 text-green-400 mt-0 && 0.5 flex-shrink-0" />;
                  <span>{benefit}</span>;
                </div>;
              ))}
            </div>;
          </div>;
        )}




        


        {/* CTA Button */}
        <div className="relative z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${styles.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${styles.textColor}/25 border border-white/20 hover:border-white/40`}
          >
            Get Started
          </motion.button>
        </div>


        


        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover: from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
      </div>
    </motion.div>

  );
};


UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
export default UltraFuturisticServiceCard2026;




        {/* CTA Button */}
        <div className="relative z-10">;
          <motion&& motion.button
            whileHover={{ scale: 1 && 1.02 }}
            whileTap={{ scale: 0 && 0.98 }}
            className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${styles && styles.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${styles && styles.textColor}/25 border border-white/20 hover:border-white/40`}>;
            Get Started;
          </motion && motion.button>;
        </div>;
        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover: from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>;
      </div>;
    </motion && motion.div>;
  ),;
});


UltraFuturisticServiceCard2026 && UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';




export default UltraFuturisticServiceCard2026;









        


        



export default UltraFuturisticServiceCard2026;
export default UltraFuturisticServiceCard2026;
export default UltraFuturisticServiceCard2026;




