<<<<<<< HEAD


import React from 'react';

import {motion} from 'framer-motion';
import {Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket} from 'lucide-react';

=======
import React from 'react';
<<<<<<< HEAD
import {motion} from 'framer-motion';
import {Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket} from 'lucide-react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface Service {;
  id: string,;
  name: string,;
  tagline: string,;
  description: string,;
  price?: string | {;
<<<<<<< HEAD

    monthly?: number;
    yearly?: number;
    currency?: string;

=======
    monthly?: number;
    yearly?: number;
    currency?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setupTime?: string;
  };
    trial_days?: number;
    setup_time?: string;
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  period?: string;
  pricing?: any;
  features: string[],;
  popular?: boolean;
<<<<<<< HEAD

<<<<<<< HEAD
  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[],
  benefits?: string[]
}
=======


interface ServiceCardProps {
  service: Service,
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  service: Service
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}
const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {
  const getVariantStyles = () => {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  category: string,
  icon: string,
  market_price?: string;
  competitors?: string[];
  target_market?: string;
  use_cases?: string[];
  integration?: string[];
  benefits?: string[];
}
interface ServiceCardProps {
  service: Service,
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default';
}
const UltraFuturisticServiceCard2026: React.FC < ServiceCardProps> = ({ service, variant = 'default' }) => {
  const getVariantStyles = () =>: any {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    switch (variant) {
      case 'ai':;
        return {

=======
    switch (variant) {
      case 'ai':;
        return {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  integration?: string[];
  benefits?: string[];
}
interface ServiceCardProps {;
  service: Service,;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default';
}
const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {;
  const getVariantStyles = () => {;
    switch (variant) {;
      case 'ai':;
        return {;
          gradient: 'from-purple-600 via-pink-600 to-purple-700',;
          borderColor: 'border-purple-400/30',;
          textColor: 'text-purple-400',;
          iconBg: 'bg-purple-500/20',;
          iconBorder: 'border-purple-400/30';
        };
      case 'quantum':;
        return {;
          gradient: 'from-cyan-600 via-blue-600 to-cyan-700',;
          borderColor: 'border-cyan-400/30',;
          textColor: 'text-cyan-400',;
          iconBg: 'bg-cyan-500/20',;
          iconBorder: 'border-cyan-400/30';
        };
      case 'space':;
        return {;
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700',;
          borderColor: 'border-indigo-400/30',;
          textColor: 'text-indigo-400',;
          iconBg: 'bg-indigo-500/20',;
          iconBorder: 'border-indigo-400/30';
        };
      case 'cybersecurity':;
        return {;
          gradient: 'from-red-600 via-orange-600 to-red-700',;
          borderColor: 'border-red-400/30',;
          textColor: 'text-red-400',;
          iconBg: 'bg-red-500/20',;
          iconBorder: 'border-red-400/30';
        };
      case 'enterprise':;
        return {;
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700',;
          borderColor: 'border-indigo-400/30',;
          textColor: 'text-indigo-400',;
          iconBg: 'bg-indigo-500/20',;
          iconBorder: 'border-indigo-400/30';
        };
      case 'automation':;
        return {;
          gradient: 'from-green-600 via-emerald-600 to-green-700',;
          borderColor: 'border-green-400/30',;
          textColor: 'text-green-400',;
          iconBg: 'bg-green-500/20',;
          iconBorder: 'border-green-400/30';
        };
      case 'it':;
        return {;
          gradient: 'from-blue-600 via-indigo-600 to-blue-700',;
          borderColor: 'border-blue-400/30',;
          textColor: 'text-blue-400',;
          iconBg: 'bg-blue-500/20',;
          iconBorder: 'border-blue-400/30';
        };
      case 'emerging':;
        return {;
          gradient: 'from-yellow-600 via-orange-600 to-yellow-700',;
          borderColor: 'border-yellow-400/30',;
          textColor: 'text-yellow-400',;
          iconBg: 'bg-yellow-500/20',;
          iconBorder: 'border-yellow-400/30';
        };
      case 'premium':;
        return {;
          gradient: 'from-amber-600 via-yellow-600 to-amber-700',;
          borderColor: 'border-amber-400/30',;
          textColor: 'text-amber-400',;
          iconBg: 'bg-amber-500/20',;
          iconBorder: 'border-amber-400/30';
        };
      default:;
        return {;
          gradient: 'from-gray-600 via-gray-700 to-gray-800',;
          borderColor: 'border-gray-400/30',;
          textColor: 'text-gray-400',;
          iconBg: 'bg-gray-500/20',;
          iconBorder: 'border-gray-400/30';
<<<<<<< HEAD

=======
=======
import { motion  } from 'framer-motion';
import { Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket } from 'lucide-react';
interface Service {

  id: string
  name: string
  tagline: string
  description: string

  price?: string | {
    monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
    setupTime?: string

  }
  period?: string;
  pricing?: any;
  features: string[]
  popular?: boolean;
  category: string
  icon: string

  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[],
  benefits?: string[]
}
<<<<<<< HEAD
interface ServiceCardProps {
=======

interface ServiceCardProps {
  service: Service,
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  service: Service
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}
const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'ai':
        return {
          gradient: 'from-purple-600 via-pink-600 to-purple-700'
          borderColor: 'border-purple-400/30'
          textColor: 'text-purple-400'
          iconBg: 'bg-purple-500/20'
          iconBorder: 'border-purple-400/30'
        }
      case 'quantum':
        return {
          gradient: 'from-cyan-600 via-blue-600 to-cyan-700'
          borderColor: 'border-cyan-400/30'
          textColor: 'text-cyan-400'
          iconBg: 'bg-cyan-500/20'
          iconBorder: 'border-cyan-400/30'
        }
      case 'space':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700'
          borderColor: 'border-indigo-400/30'
          textColor: 'text-indigo-400'
          iconBg: 'bg-indigo-500/20'
          iconBorder: 'border-indigo-400/30'
        }
      case 'cybersecurity':
        return {
          gradient: 'from-red-600 via-orange-600 to-red-700'
          borderColor: 'border-red-400/30'
          textColor: 'text-red-400'
          iconBg: 'bg-red-500/20'
          iconBorder: 'border-red-400/30'
        }
      case 'enterprise':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700'
          borderColor: 'border-indigo-400/30'
          textColor: 'text-indigo-400'
          iconBg: 'bg-indigo-500/20'
          iconBorder: 'border-indigo-400/30'
        }
      case 'automation':
        return {
          gradient: 'from-green-600 via-emerald-600 to-green-700'
          borderColor: 'border-green-400/30'
          textColor: 'text-green-400'
          iconBg: 'bg-green-500/20'
          iconBorder: 'border-green-400/30'
        }
      case 'it':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-blue-700'
          borderColor: 'border-blue-400/30'
          textColor: 'text-blue-400'
          iconBg: 'bg-blue-500/20'
          iconBorder: 'border-blue-400/30'
        }
      case 'emerging':
        return {
          gradient: 'from-yellow-600 via-orange-600 to-yellow-700'
          borderColor: 'border-yellow-400/30'
          textColor: 'text-yellow-400'
          iconBg: 'bg-yellow-500/20'
          iconBorder: 'border-yellow-400/30'
        }
      case 'premium':
        return {
          gradient: 'from-amber-600 via-yellow-600 to-amber-700'
          borderColor: 'border-amber-400/30'
          textColor: 'text-amber-400'
          iconBg: 'bg-amber-500/20'
          iconBorder: 'border-amber-400/30'
        }
      default:
        return {
          gradient: 'from-gray-600 via-gray-700 to-gray-800'
          borderColor: 'border-gray-400/30'
          textColor: 'text-gray-400'
          iconBg: 'bg-gray-500/20'
          iconBorder: 'border-gray-400/30'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
    }
  }
  const styles = getVariantStyles();
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const getCategoryIcon = (category: string) => {;
    if (category && category.includes('AI')) return Brain;
    if (category && category.includes('Quantum')) return Atom;
    if (category && category.includes('Space')) return Rocket;
    if (category && category.includes('Cybersecurity')) return Shield;
    return TrendingUp;
  };
<<<<<<< HEAD

  const CategoryIcon = getCategoryIcon(service && service.category);


=======
  const CategoryIcon = getCategoryIcon(service && service.category);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <motion&& motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.6 }}
      viewport={{ once: true }}
      className="group relative">;
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">;
        {/* Enhanced Background Glow */}
<<<<<<< HEAD

        <div className={`absolute inset-0 bg-gradient-to-br ${styles && styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>;


=======

        

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        <div className={`absolute inset-0 bg-gradient-to-br ${styles && styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Popular Badge */}
        {service && service.popular && (;
          <motion&& motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0 && 0.2, type: "spring", stiffness: 200 }}
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg">;
            <Star className="w-4 h-4 inline mr-1" />;
            Popular;
          </motion && motion.div>;
        )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          gradient: 'from - purple - 600 via - pink - 600 to - purple - 700',
          border_color: 'border - purple - 400 / 30',
          text_color: 'text - purple - 400',
          icon_bg: 'bg - purple - 500 / 20',
          icon_border: 'border - purple - 400 / 30';
        }
      case 'quantum':;
        return {
          gradient: 'from - cyan - 600 via - blue - 600 to - cyan - 700',
          border_color: 'border - cyan - 400 / 30',
          text_color: 'text - cyan - 400',
          icon_bg: 'bg - cyan - 500 / 20',
          icon_border: 'border - cyan - 400 / 30';
        }
      case 'space':;
        return {
          gradient: 'from - indigo - 600 via - purple - 600 to - indigo - 700',
          border_color: 'border - indigo - 400 / 30',
          text_color: 'text - indigo - 400',
          icon_bg: 'bg - indigo - 500 / 20',
          icon_border: 'border - indigo - 400 / 30';
        }
      case 'cybersecurity':;
        return {
          gradient: 'from - red - 600 via - orange - 600 to - red - 700',
          border_color: 'border - red - 400 / 30',
          text_color: 'text - red - 400',
          icon_bg: 'bg - red - 500 / 20',
          icon_border: 'border - red - 400 / 30';
        }
      case 'enterprise':;
        return {
          gradient: 'from - indigo - 600 via - purple - 600 to - indigo - 700',
          border_color: 'border - indigo - 400 / 30',
          text_color: 'text - indigo - 400',
          icon_bg: 'bg - indigo - 500 / 20',
          icon_border: 'border - indigo - 400 / 30';
        }
      case 'automation':;
        return {
          gradient: 'from - green - 600 via - emerald - 600 to - green - 700',
          border_color: 'border - green - 400 / 30',
          text_color: 'text - green - 400',
          icon_bg: 'bg - green - 500 / 20',
          icon_border: 'border - green - 400 / 30';
        }
      case 'it':;
        return {
          gradient: 'from - blue - 600 via - indigo - 600 to - blue - 700',
          border_color: 'border - blue - 400 / 30',
          text_color: 'text - blue - 400',
          icon_bg: 'bg - blue - 500 / 20',
          icon_border: 'border - blue - 400 / 30';
        }
      case 'emerging':;
        return {
          gradient: 'from - yellow - 600 via - orange - 600 to - yellow - 700',
          border_color: 'border - yellow - 400 / 30',
          text_color: 'text - yellow - 400',
          icon_bg: 'bg - yellow - 500 / 20',
          icon_border: 'border - yellow - 400 / 30';
        }
      case 'premium':;
        return {
          gradient: 'from - amber - 600 via - yellow - 600 to - amber - 700',
          border_color: 'border - amber - 400 / 30',
          text_color: 'text - amber - 400',
          icon_bg: 'bg - amber - 500 / 20',
          icon_border: 'border - amber - 400 / 30';
        }
      default:;
        return {
          gradient: 'from - gray - 600 via - gray - 700 to - gray - 800',
          border_color: 'border - gray - 400 / 30',
          text_color: 'text - gray - 400',
          icon_bg: 'bg - gray - 500 / 20',
          icon_border: 'border - gray - 400 / 30';
        }
    }
  }
;
  const styles = getVariantStyles ();
;
  const getCategoryIcon = (category: string) =>: any {
    if () return Brain) {
  $2
}
    if () return Atom) {
  $2
}
    if () return Rocket) {
  $2
}
    if () return Shield) {
  $2
}
    return TrendingUp;
  }
;
  const CategoryIcon = getCategoryIcon (service.category);
;
  return (
    <motion.div;
      initial={{ opacity: 0, coordinate_y: 20 }}
      whileInView={{ opacity: 1, coordinate_y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative";
    >;
      <div className="relative p - 8 rounded - 2xl bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 border border - white / 10 hover:border - white / 20 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl backdrop - blur - sm overflow - hidden">;
        {/* Enhanced Background Glow */}
<<<<<<< HEAD
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

=======
        <div className={`absolute inset - 0 bg - gradient - to - br ${styles.gradient} opacity - 5 group - hover:opacity - 10 transition - opacity duration - 300`}></div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {/* Popular Badge */}
        {service.popular && (
          <motion.div;
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg"
          >
            <Star className="w-4 h-4 inline mr-1" />
            Popular
          </motion.div>
        )}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="absolute -top - 3 left - 6 px - 4 py - 1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - sm font - bold rounded - full shadow - lg";
          >;
            <Star className="w - 4 h - 4 inline mr - 1" />;
            Popular;
          </motion.div>)}
<<<<<<< HEAD

=======

        

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Service Header */}
        <div className="text - center mb - 8 relative z - 10">;
          <div className={`w - 24 h - 24 mx - auto mb - 6 rounded - full ${styles.icon_bg} flex items - center justify - center border ${styles.icon_border} text - 4xl backdrop - blur - sm`}>;
            {service.icon}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Service Header */}
        <div className="text-center mb-8 relative z-10">;
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${styles && styles.iconBg} flex items-center justify-center border ${styles && styles.iconBorder} text-4xl backdrop-blur-sm`}>;
            {service && service.icon}
          </div>;
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">;
            {service && service.name}
          </h3>;
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">;
            {service && service.tagline}
          </p>;
          <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">;
            {service && service.price}
            <span className="text-lg text-gray-400 font-normal">/{service && service.period}</span>;
          </div>;
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs text-gray-300">;
            <CategoryIcon className="w-3 h-3" />;
            <span>{service && service.category}</span>;
          </div>;
        </div>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Features List */}
        <div className="space-y-3 mb-8 relative z-10">;
          <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center">;
            <Zap className="w-4 h-4 mr-2 text-cyan-400" />;
            Key Features;
          </h4>;
          {service && service.features.slice(0, 6).map((feature, idx) => (;
            <motion&& motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0 && 0.1 }}
              className="flex items-center space-x-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">;
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></div>;
              <span>{feature}</span>;
            </motion && motion.div>;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>

=======


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
            )}
          </div>
        )}

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
        {/* Enhanced Market Information */}
        {service && service.marketPrice && (;
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">;
            <div className="flex items-center justify-between text-xs">;
              <span className="text-gray-400">Market Price:</span>;
              <span className="text-green-400 font-semibold">{service && service.marketPrice}</span>;
            </div>;
            {service && service.competitors && (;
              <div className="text-xs text-gray-500">;
                Competes with: {service && service.competitors.slice(0, 2).join()}
              </div>;
            )}
          </div>;
        )}
<<<<<<< HEAD


        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Target Market & Use Cases */}
        {service && service.targetMarket && (;
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">;
            <div className="text-xs">;
              <div className="text-gray-400 mb-2">Target Market:</div>;
              <div className="text-gray-300">{service && service.targetMarket}</div>;
            </div>;
            {service && service.useCases && (;
              <div className="text-xs mt-3">;
                <div className="text-gray-400 mb-2">Use Cases:</div>;
                <div className="text-gray-300">{service && service.useCases.slice(0, 3).join()}</div>;
              </div>;
            )}
          </div>;
        )}
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======

        

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover: from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
      </div>
    </motion.div>

  );
};


UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
export default UltraFuturisticServiceCard2026;

<<<<<<< HEAD
export default UltraFuturisticServiceCard2026;

export default UltraFuturisticServiceCard2026;

=======

=======
  );
};
UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
export default UltraFuturisticServiceCard2026;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

UltraFuturisticServiceCard2026 && UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';




export default UltraFuturisticServiceCard2026;

=======

export default UltraFuturisticServiceCard2026;
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
UltraFuturisticServiceCard2026 && UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
          <h3 className="text - 2xl font - bold text - white mb - 3 group - hover:text - gray - 100 transition - colors">;
            {service.name}
          </h3>;
          <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
            {service.tagline}
          </p>;
          <div className="text - 4xl font - bold text - cyan - 400 mb - 2 group - hover:text - cyan - 300 transition - colors">;
            {service.price}
            <span className="text - lg text - gray - 400 font - normal">/{service.period}</span>;
          </div>;
          {/* Category Badge */}
          <div className="inline - flex items - center space - x-2 px - 3 py - 1 bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - full text - xs text - gray - 300">;
            <CategoryIcon className="w - 3 h - 3" />;
            <span>{service.category}</span>;
          </div>;
        </div>;
        {/* Features List */}
        <div className="space - y-3 mb - 8 relative z - 10">;
          <h4 className="text - sm font - semibold text - gray - 300 mb - 4 flex items - center">;
            <Zap className="w - 4 h - 4 mr - 2 text - cyan - 400" />;
            Key Features;
          </h4>;
          {service.features.slice (0, 6).map ((feature, idx) => (
            <motion.div;
              key={idx}
              initial={{ opacity: 0, coordinate_x: -10 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items - center space - x-3 text - sm text - gray - 300 group - hover:text - gray - 200 transition - colors";
            >;
              <div className="w - 2 h - 2 bg - cyan - 400 rounded - full group - hover:bg - cyan - 300 transition - colors"></div>;
              <span>{feature}</span>;
            </motion.div>))}
        </div>;
        {/* Enhanced Market Information */}
        {service.market_price && (
          <div className="border - t border - white / 10 pt - 4 mb - 6 space - y-3 relative z - 10">;
            <div className="flex items - center justify - between text - xs">;
              <span className="text - gray - 400">Market Price:</span>;
              <span className="text - green - 400 font - semibold">{service.market_price}</span>;
            </div>;
            {service.competitors && (
              <div className="text - xs text - gray - 500">;
                Competes with: {service.competitors.slice (0, 2).join ()}
              </div>)}
          </div>)}
        {/* Target Market & Use Cases */}
        {service.target_market && (
          <div className="border - t border - white / 10 pt - 4 mb - 6 space - y-3 relative z - 10">;
            <div className="text - xs">;
              <div className="text - gray - 400 mb - 2">Target Market:</div>;
              <div className="text - gray - 300">{service.target_market}</div>;
            </div>;
            {service.use_cases && (
              <div className="text - xs mt - 3">;
                <div className="text - gray - 400 mb - 2">Use Cases:</div>;
                <div className="text - gray - 300">{service.use_cases.slice (0, 3).join ()}</div>;
              </div>)}
          </div>)}
        {/* Benefits Section */}
        {service.benefits && (
          <div className="border - t border - white / 10 pt - 4 mb - 6 relative z - 10">;
            <h4 className="text - sm font - semibold text - gray - 300 mb - 3 flex items - center">;
              <TrendingUp className="w - 4 h - 4 mr - 2 text - green - 400" />;
              Key Benefits;
            </h4>;
            <div className="space - y-2">;
              {service.benefits.slice (0, 3).map ((benefit, idx) => (
                <div key={idx} className="text - xs text - gray - 400 flex items - start space - x-2">;
                  <Check className="w - 3 h - 3 text - green - 400 mt - 0.5 flex - shrink - 0" />;
                  <span>{benefit}</span>;
                </div>))}
            </div>;
          </div>)}
        {/* CTA Button */}
        <div className="relative z - 10">;
          <motion.button;
            while_hover={{ scale: 1.02 }}
            while_tap={{ scale: 0.98 }}
            className={`w - full py - 3 px - 6 rounded - lg bg - gradient - to - r ${styles.gradient} text - white font - semibold transition - all duration - 300 hover:shadow - lg hover:shadow-${styles.text_color}/25 border border - white / 20 hover:border - white / 40`}
          >;
            Get Started;
          </motion.button>;
        </div>;
        {/* Enhanced Hover Effects */}
        <div className="absolute inset - 0 bg - gradient - to - br from - white / 0 via - white / 0 to - white / 0 group - hover: from - white / 5 group - hover:via - white / 2 group - hover:to - white / 5 transition - all duration - 500 rounded - 2xl"></div>;
      </div>;
    </motion.div>),
});
;
UltraFuturisticServiceCard2026.display_name = 'UltraFuturisticServiceCard2026';
;
export default UltraFuturisticServiceCard2026;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = (_{_service, _variant = 'default'}) => {_const _getVariantStyles = () => {
    switch (variant) {
      case 'ai':
        return {
          gradient: 'from-purple-600 via-pink-600 to-purple-700',
          borderColor: 'border-purple-400/30',
          textColor: 'text-purple-400',
          iconBg: 'bg-purple-500/20',
          iconBorder: 'border-purple-400/30'
        },
      case 'quantum':
        return {
          gradient: 'from-cyan-600 via-blue-600 to-cyan-700',
          borderColor: 'border-cyan-400/30',
          textColor: 'text-cyan-400',
          iconBg: 'bg-cyan-500/20',
          iconBorder: 'border-cyan-400/30'
        },
      case 'space':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700',
          borderColor: 'border-indigo-400/30',
          textColor: 'text-indigo-400',
          iconBg: 'bg-indigo-500/20',
          iconBorder: 'border-indigo-400/30'
        },
      case 'cybersecurity':
        return {
          gradient: 'from-red-600 via-orange-600 to-red-700',
          borderColor: 'border-red-400/30',
          textColor: 'text-red-400',
          iconBg: 'bg-red-500/20',
          iconBorder: 'border-red-400/30'
        },
      case 'enterprise':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700',
          borderColor: 'border-indigo-400/30',
          textColor: 'text-indigo-400',
          iconBg: 'bg-indigo-500/20',
          iconBorder: 'border-indigo-400/30'
        },
      case 'automation':
        return {
          gradient: 'from-green-600 via-emerald-600 to-green-700',
          borderColor: 'border-green-400/30',
          textColor: 'text-green-400',
          iconBg: 'bg-green-500/20',
          iconBorder: 'border-green-400/30'
        },
      case 'it':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-blue-700',
          borderColor: 'border-blue-400/30',
          textColor: 'text-blue-400',
          iconBg: 'bg-blue-500/20',
          iconBorder: 'border-blue-400/30'
        },
      case 'emerging':
        return {
          gradient: 'from-yellow-600 via-orange-600 to-yellow-700',
          borderColor: 'border-yellow-400/30',
          textColor: 'text-yellow-400',
          iconBg: 'bg-yellow-500/20',
          iconBorder: 'border-yellow-400/30'
        },
      case 'premium':
        return {
          gradient: 'from-amber-600 via-yellow-600 to-amber-700',
          borderColor: 'border-amber-400/30',
          textColor: 'text-amber-400',
          iconBg: 'bg-amber-500/20',
          iconBorder: 'border-amber-400/30'
        },
      default:
        return {
          gradient: 'from-gray-600 via-gray-700 to-gray-800',
          borderColor: 'border-gray-400/30',
          textColor: 'text-gray-400',
          iconBg: 'bg-gray-500/20',
          iconBorder: 'border-gray-400/30'
        }
  const styles = getVariantStyles()

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain,
    if (category.includes('Quantum')) return Atom,
    if (category.includes('Space')) return Rocket,
    if (category.includes('Cybersecurity')) return Shield,
    return TrendingUp
  },

  const CategoryIcon = getCategoryIcon(service.category)

=======
  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Rocket;
    if (category.includes('Cybersecurity')) return Shield;
    return TrendingUp
  }
  const CategoryIcon = getCategoryIcon(service.category);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
<<<<<<< HEAD
      className=&quot;group relative&quot;
    >
      <div className=&quot;relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden&quot;>
        {/* Enhanced Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {_/* Popular Badge */}
        {_service.popular && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: &quot;spring&quot;, stiffness: 200 }}
            className=&quot;absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg&quot;
          >
            <Star className=&quot;w-4 h-4 inline mr-1&quot; />
            Popular
          </motion.div>
        )}
        
        {/* Service Header */}
        <div className=&quot;text-center mb-8 relative z-10&quot;>
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${styles.iconBg} flex items-center justify-center border ${styles.iconBorder} text-4xl backdrop-blur-sm`}>
            {service.icon}
          </div>
          
          <h3 className=&quot;text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors&quot;>
            {service.name}
          </h3>
          
          <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
            {service.tagline}
          </p>
          
          <div className=&quot;text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors&quot;>
            {service.price}
            <span className=&quot;text-lg text-gray-400 font-normal&quot;>/{service.period}</span>
          </div>
          
          {/* Category Badge */}
          <div className=&quot;inline-flex items-center space-x-2 px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs text-gray-300&quot;>
            <CategoryIcon className=&quot;w-3 h-3&quot; />
            <span>{service.category}</span>
          </div>
        </div>
        
        {/* Features List */}
        <div className=&quot;space-y-3 mb-8 relative z-10&quot;>
          <h4 className=&quot;text-sm font-semibold text-gray-300 mb-4 flex items-center&quot;>
            <Zap className=&quot;w-4 h-4 mr-2 text-cyan-400&quot; />
            Key Features
          </h4>
          {_service.features.slice(0, _6).map(_(feature, _idx) => (
=======
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
        {/* Enhanced Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Popular Badge */}
        {service.popular && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg"
          >
            <Star className="w-4 h-4 inline mr-1" />
            Popular
          </motion.div>
        )}
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        {/* Service Header */}
        <div className="text-center mb-8 relative z-10">
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${styles.iconBg} flex items-center justify-center border ${styles.iconBorder} text-4xl backdrop-blur-sm`}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {service.tagline}
          </p>
          <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
            {service.price}
            <span className="text-lg text-gray-400 font-normal">/{service.period}</span>
          </div>
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs text-gray-300">
            <CategoryIcon className="w-3 h-3" />
            <span>{service.category}</span>
          </div>
        </div>
        {/* Features List */}
        <div className="space-y-3 mb-8 relative z-10">
          <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-cyan-400" />
            Key Features
          </h4>
          {service.features.slice(0, 6).map((feature, idx) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
<<<<<<< HEAD
              className=&quot;flex items-center space-x-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors&quot;
            >
              <div className=&quot;w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors&quot;></div>
=======
              className="flex items-center space-x-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
<<<<<<< HEAD
        
        {/* Enhanced Market Information */}
        {service.marketPrice && (
          <div className=&quot;border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10&quot;>
            <div className=&quot;flex items-center justify-between text-xs&quot;>
              <span className=&quot;text-gray-400&quot;>Market Price:</span>
              <span className=&quot;text-green-400 font-semibold&quot;>{service.marketPrice}</span>
            </div>
            
            {service.competitors && (
=======
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
            )}
          </div>
        )}
<<<<<<< HEAD
        
        {/* Target Market & Use Cases */}
        {service.targetMarket && (
          <div className=&quot;border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10&quot;>
            <div className=&quot;text-xs&quot;>
              <div className=&quot;text-gray-400 mb-2&quot;>Target Market:</div>
              <div className=&quot;text-gray-300&quot;>{service.targetMarket}</div>
            </div>
            
            {service.useCases && (
=======
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
            )}
          </div>
        )}
<<<<<<< HEAD
        
        {/* Benefits Section */}
        {service.benefits && (
          <div className=&quot;border-t border-white/10 pt-4 mb-6 relative z-10&quot;>
            <h4 className=&quot;text-sm font-semibold text-gray-300 mb-3 flex items-center&quot;>
              <TrendingUp className=&quot;w-4 h-4 mr-2 text-green-400&quot; />
              Key Benefits
            </h4>
            <div className=&quot;space-y-2&quot;>
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className=&quot;text-xs text-gray-400 flex items-start space-x-2&quot;>
                  <Check className=&quot;w-3 h-3 text-green-400 mt-0.5 flex-shrink-0&quot; />
=======
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        {/* Benefits Section */}
        {service.benefits && (
          <div className="border-t border-white/10 pt-4 mb-6 relative z-10">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
              Key Benefits
            </h4>
            <div className="space-y-2">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                  <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
<<<<<<< HEAD
        
        {/* CTA Button */}
        <div className=&quot;relative z-10&quot;>
          <motion.button
            whileHover={_{ scale: 1.02}}
            whileTap={_{ scale: 0.98}}
            className={_`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${styles.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${_styles.textColor}/25 border border-white/20 hover:border-white/40`}
=======
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        {/* CTA Button */}
        <div className="relative z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${styles.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${styles.textColor}/25 border border-white/20 hover:border-white/40`}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
            Get Started
          </motion.button>
        </div>
<<<<<<< HEAD
        
        {/* Enhanced Hover Effects */}
      </div>
    </motion.div>
  );
};

UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026',

export default UltraFuturisticServiceCard2026

=======
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover: from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
      </div>
    </motion.div>
  )
});
UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
export default UltraFuturisticServiceCard2026;

<<<<<<< HEAD
<<<<<<< HEAD
=======
export default UltraFuturisticServiceCard2026;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default UltraFuturisticServiceCard2026;
=======
export default UltraFuturisticServiceCard2026;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
