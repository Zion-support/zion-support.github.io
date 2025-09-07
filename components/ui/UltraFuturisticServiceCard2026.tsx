<<<<<<< HEAD


<<<<<<< HEAD
  "id": string;

  "name": string;
  "tagline": string;
  "description": string;
=======
<<<<<<< HEAD
=======
  id: string;

  name: string;
  tagline: string;
  description: string;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  price?: string | {monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React from react';
=======
<<<<<<< HEAD
import React from 'react';
>>>>>>> merged-prs-20250907-203621
    monthly?: number;
    yearly?: number;
    currency?: string;
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    monthly?: number;
    yearly?: number;
    currency?: string;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setupTime?: string;
  };
    trial_days?: number;
    setup_time?: string;
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  period?: string;
  pricing?: any;
  "features": string[],;
  popular?: boolean;
<<<<<<< HEAD
    setupTime?: string;
  },period?: string;
  pricing?: any;
  features: string[],popular?: boolean;competitors?: string[];
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
<<<<<<< HEAD
    switch (variant) {case 'ai':;
        return {}
    }
  const styles = getVariantStyles()return (<motion&& motion.div;
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.6 }}
      viewport={{ once: true }}
      className="group relative">;
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">;
=======
<<<<<<< HEAD
  integration?: string[],benefits?: string[];
}

interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'}
}
}

  service: Service
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}
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
        }
=======
    switch (variant) {case 'ai':;
        return {}
>>>>>>> merged-prs-20250907-203621
    }
  }
  const styles = getVariantStyles()return (<motion&& motion.div;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


interface ServiceCardProps {
  service: Service,
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}



  service: Service
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}
const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {
  const getVariantStyles = () => {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    switch (variant) {
      case 'ai':;
        return {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    switch (variant) {
      case 'ai':;
        return {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
interface ServiceCardProps {

interface ServiceCardProps {
  service: Service,
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }
    }
  }
  const styles = getVariantStyles();
<<<<<<< HEAD
  const CategoryIcon = getCategoryIcon(service && service.category);
=======


  const getCategoryIcon = (category: string) => {;
    if (category && category.includes('AI')) return Brain;
    if (category && category.includes('Quantum')) return Atom;
    if (category && category.includes('Space')) return Rocket;
    if (category && category.includes('Cybersecurity')) return Shield;
    return TrendingUp;
  };

  const CategoryIcon = getCategoryIcon(service && service.category);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <motion&& motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.6 }}
      viewport={{ once: true }}
      className="group relative">;
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">;
        {/* Enhanced Background Glow */}
<<<<<<< HEAD
=======
<<<<<<< HEAD

        

        <div className={`absolute inset-0 bg-gradient-to-br ${styles && styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>;
=======

        <div className={`absolute inset-0 bg-gradient-to-br ${styles && styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>;


=======

        

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
          gradient: 'from - purple - 600 via - pink - 600 to - purple - 700',border_color: 'border - purple - 400 / 30',text_color: 'text - purple - 400',icon_bg: 'bg - purple - 500 / 20',icon_border: 'border - purple - 400 / 30';
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          gradient: 'from - purple - 600 via - pink - 600 to - purple - 700',
          border_color: 'border - purple - 400 / 30',
          text_color: 'text - purple - 400',
          icon_bg: 'bg - purple - 500 / 20',
          icon_border: 'border - purple - 400 / 30';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

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
        
=======
import { motion } from 'framer-motion';
import { Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket } from 'lucide-react';
interface Service {
  id: string,
  name: string,
  tagline: string,
  description: string,
  price?: string | {
    monthly?: number,
    yearly?: number,
    currency?: string,
    trialDays?: number,
    setupTime?: string
}

interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'}
}
}
  },
  period?: string,
  pricing?: any,
  features: string[],
  popular?: boolean,
  category: string,
  icon: string,
  marketPrice?: string,
  competitors?: string[],
  targetMarket?: string,
  useCases?: string[],
  integration?: string[],
  benefits?: string[]
}

interface ServiceCardProps {
  service: Service,
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant = $2;
          borderColor: 'border-purple-400/30',
          textColor: 'text-purple-400',
          iconBg: 'bg-purple-500/20',
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
          iconBorder: 'border-purple-400/30
        },
      case quantum':
        return {
          gradient: 'from-cyan-600 via-blue-600 to-cyan-700,
          borderColor: border-cyan-400/30',
          textColor: 'text-cyan-400,
          iconBg: bg-cyan-500/20',
          iconBorder: 'border-cyan-400/30
        },
      case space':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700,
          borderColor: border-indigo-400/30',
          textColor: 'text-indigo-400,
          iconBg: bg-indigo-500/20',
          iconBorder: 'border-indigo-400/30
        },
      case cybersecurity':
        return {
          gradient: 'from-red-600 via-orange-600 to-red-700,
          borderColor: border-red-400/30',
          textColor: 'text-red-400,
          iconBg: bg-red-500/20',
          iconBorder: 'border-red-400/30
        },
      case enterprise':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700,
          borderColor: border-indigo-400/30',
          textColor: 'text-indigo-400,
          iconBg: bg-indigo-500/20',
          iconBorder: 'border-indigo-400/30
        },
      case automation':
        return {
          gradient: 'from-green-600 via-emerald-600 to-green-700,
          borderColor: border-green-400/30',
          textColor: 'text-green-400,
          iconBg: bg-green-500/20',
          iconBorder: 'border-green-400/30
        },
      case it':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-blue-700,
          borderColor: border-blue-400/30',
          textColor: 'text-blue-400,
          iconBg: bg-blue-500/20',
          iconBorder: 'border-blue-400/30
        },
      case emerging':
        return {
          gradient: 'from-yellow-600 via-orange-600 to-yellow-700,
          borderColor: border-yellow-400/30',
          textColor: 'text-yellow-400,
          iconBg: bg-yellow-500/20',
          iconBorder: 'border-yellow-400/30
        },
      case premium':
        return {
          gradient: 'from-amber-600 via-yellow-600 to-amber-700,
          borderColor: border-amber-400/30',
          textColor: 'text-amber-400,
          iconBg: bg-amber-500/20',
          iconBorder: 'border-amber-400/30
        },
      default:
        return {
          gradient: from-gray-600 via-gray-700 to-gray-800',
          borderColor: 'border-gray-400/30,
          textColor: text-gray-400',
          iconBg: 'bg-gray-500/20,
          iconBorder: border-gray-400/30'
        }
    }
  },

  const styles = getVariantStyles($2);
  const getCategoryIcon = $2;
    if (category.includes('Quantum')) return Atom,
    if (category.includes('Space')) return Rocket,
    if (category.includes('Cybersecurity')) return Shield,
    return TrendingUp
  },

  const CategoryIcon = getCategoryIcon($2);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true}}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Enhanced Background Glow */}
        {/* Popular Badge */}
<<<<<<< HEAD
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
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket } from 'lucide-react';
interface Service {
  id: string,
  name: string,
  tagline: string,
  description: string,
  price?: string | {
    monthly?: number,
    yearly?: number,
    currency?: string,
    trialDays?: number,
    setupTime?: string
}

  "category": string;

  "icon": string;
=======
        {service.popular && (
<<<<<<< HEAD
          <motion.div
            initial={{ scale: 0}}
            animate={{ scale: 1}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200}}
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg"
          >
            <Star className="w-4 h-4 inline mr-1" />
            Popular
          </motion.div>
        )}
        
=======
          <motion.div;
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute -top - 3 left - 6 px - 4 py - 1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - sm font - bold rounded - full shadow - lg";
          >;
            <Star className="w - 4 h - 4 inline mr - 1" />;
            Popular;
          </motion.div>)}
<<<<<<< HEAD

        

=======

=======

        

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Service Header */}
        <div className="text-center mb-8 relative z-10">
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${styles.iconBg} flex items-center justify-center border ${styles.iconBorder} text-4xl backdrop-blur-sm`}>
            {service.icon}
<<<<<<< HEAD
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
        
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
        
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            )}
          </div>
        )}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        
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
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            )}
          </div>
        )}
<<<<<<< HEAD
        
        {/* Benefits Section */}
    </motion.div>),})UltraFuturisticServiceCard2026.display_name = 'UltraFuturisticServiceCard2026';export default UltraFuturisticServiceCard2026;category: string;
=======



        

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


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


<<<<<<< HEAD
  );
};
UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
export default UltraFuturisticServiceCard2026;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

export default UltraFuturisticServiceCard2026;
UltraFuturisticServiceCard2026 && UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
=======

UltraFuturisticServiceCard2026 && UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';




export default UltraFuturisticServiceCard2026;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
}
    setupTime?: string}
  },
  period?: string;
  pricing?: any;
  features: string[],;
  popular?: boolean;

<<<<<<< HEAD
  category: string;

>>>>>>> origin/chore/fix-lint-and-merge
  icon: string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[],benefits?: string[];
<<<<<<< HEAD
}

interface ServiceCardProps {
  }
  "service": Service;
variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default';'

}

const "UltraFuturisticServiceCard2026": React.FC<ServiceCardProps> = ({ service, variant;

=======
}
<<<<<<< HEAD
interface ServiceCardProps  {service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default';
}const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps>  = ({ service, variant;
=======
export default UltraFuturisticServiceCard2026;
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </motion.div>),
});
;
UltraFuturisticServiceCard2026.display_name = 'UltraFuturisticServiceCard2026';
;
export default UltraFuturisticServiceCard2026;
;
<<<<<<< HEAD
}const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps>  = ({ service, variant;
=======
<<<<<<< HEAD

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

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Rocket;
    if (category.includes('Cybersecurity')) return Shield;
    return TrendingUp
  }
  const CategoryIcon = getCategoryIcon(service.category);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
        {/* Enhanced Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
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
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
            
=======
>>>>>>> merged-prs-20250907-203621
            {service.useCases && (
              <div className="text-xs mt-3">
                <div className="text-gray-400 mb-2">Use Cases:</div>
                <div className="text-gray-300">{service.useCases.slice(0, 3).join()}</div>
              </div>
            )}
          </div>
        )}
        
        {/* Benefits Section */}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
        {service.benefits && (
          <div className="border-t border-white/10 pt-4 mb-6 relative z-10">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
              Key Benefits
            </h4>
            <div className="space-y-2">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> merged-prs-20250907-203621
                <div key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                  <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
<<<<<<< HEAD
=======
        
>>>>>>> merged-prs-20250907-203621
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
        
>>>>>>> merged-prs-20250907-203621
        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover: from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
      </div>
    </motion.div>
  )
});
UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';
export default UltraFuturisticServiceCard2026;
<<<<<<< HEAD
=======

export default UltraFuturisticServiceCard2026;
export default UltraFuturisticServiceCard2026;
export default UltraFuturisticServiceCard2026;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
