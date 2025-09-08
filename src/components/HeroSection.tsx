
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

        staggerChildren: 0.3,
        delayChildren: 0.2
      }
        staggerChildren: 0.2
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

        duration: 0.8
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
  return (
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse delay-1000 float"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse delay-2000 float"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse delay-3000 float"></div>
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GradientHeading className="text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          <GradientHeading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title') || "The Future of Tech is Here"}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-lg sm:text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle') || "Discover top AI and tech talent, services, and equipment in one place. Powered by cutting-edge AI matching technology."}
          </p>
        </motion.div>

        {/* Enhanced stats section */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="text-zion-cyan">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-zion-slate-light">Active Users</div>
            </div>
            <div className="text-zion-purple">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-zion-slate-light">Countries</div>
            </div>
            <div className="text-zion-cyan-light">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm text-zion-slate-light">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            {t('home.browse_marketplace') || "Browse Marketplace"}
            <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
