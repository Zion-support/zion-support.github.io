<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { GradientHeading } from './GradientHeading'
import { FeatureCard } from './FeatureCard'
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface BenefitsSectionProps {
  className?: string;
  style?: React.CSSProperties
const getBenefits = (t: any,) => [

import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
interface BenefitsSectionProps {
  className?: string,
  style?: React.CSSProperties
const getBenefits = (t: any,) => [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const getBenefits = (t: any) => [


  {

<<<<<<< HEAD
    icon: <TrendingDown className="w-8 h-8" />}],

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">

const getBenefits = (t: any) => [
}

const getBenefits = (t: any) => [
  {
    title: t('benefits.ai_matchmaking')
    description: t('benefits.ai_matchmaking_desc')
    icon: <Bot className='w-8 h-8' />
  }
  {
    title: t('benefits.global_availability')
    description: t('benefits.global_availability_desc')
    icon: <Globe className='w-8 h-8' />
  }
  {
    title: t('benefits.support_24_7')
    description: t('benefits.support_24_7_desc')
    icon: <Clock className='w-8 h-8' />
  }
  {
    title: t('benefits.cost_reduction')
    description: t('benefits.cost_reduction_desc')
    icon: <TrendingDown className='w-8 h-8' />
  }
]
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation()
  const benefits = getBenefits(t)
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    title: t('benefits.ai_matchmaking'),
    description: t('benefits.ai_matchmaking_desc'),
    icon: <Bot className="w-8 h-8" />},
  {
    title: t('benefits.global_availability'),
    description: t('benefits.global_availability_desc'),
    icon: <Globe className="w-8 h-8" />},
  {
    title: t('benefits.support_24_7'),
    description: t('benefits.support_24_7_desc'),
    icon: <Clock className="w-8 h-8" />},
  {
    title: t('benefits.cost_reduction'),
    description: t('benefits.cost_reduction_desc'),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
          </p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (        


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
interface BenefitsSectionProps {;
  className?: string;
  style?: React && React.CSSProperties;
const getBenefits = (t: any,) => [;
  {;
    title: t('benefits && benefits.ai_matchmaking'),;
    description: t('benefits && benefits.ai_matchmaking_desc'),;
    icon: <Bot className='w-8 h-8' />,;
  },;
  {;
    title: t('benefits && benefits.global_availability'),;
    description: t('benefits && benefits.global_availability_desc'),;
    icon: <Globe className='w-8 h-8' />,;
  },;
  {;
    title: t('benefits && benefits.support_24_7'),;
    description: t('benefits && benefits.support_24_7_desc'),;
    icon: <Clock className='w-8 h-8' />,;
  },;
  {;
    title: t('benefits && benefits.cost_reduction'),;
    description: t('benefits && benefits.cost_reduction_desc'),;
    icon: <TrendingDown className='w-8 h-8' />,;
  },;
];
export function BenefitsSection(): any ({ className, style }: BenefitsSectionProps) {;
  const { t } = useTranslation();
  const benefits = getBenefits(t);
    >;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-16'>;
          <GradientHeading>{t('home && home.benefits_title')}</GradientHeading>;
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>;
            {t('home && home.benefits_subtitle')}
          </p>;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits && benefits.map((benefit, index) => (        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {benefits && benefits.map((benefit, index) => (;
            <FeatureCard
import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_translation } from 'react - i18next';
interface BenefitsSectionProps {
  class_name?: string;
  style?: React.CSSProperties;
const get_benefits = (t: any, ) =>: any [;
  {
    title: t ('benefits.ai_matchmaking'),
    description: t ('benefits.ai_matchmaking_desc'),
    icon: <Bot className='w - 8 h - 8' />,
  },
  {
    title: t ('benefits.global_availability'),
    description: t ('benefits.global_availability_desc'),
    icon: <Globe className='w - 8 h - 8' />,
  },
  {
    title: t ('benefits.support_24_7'),
    description: t ('benefits.support_24_7_desc'),
    icon: <Clock className='w - 8 h - 8' />,
  },
  {
    title: t ('benefits.cost_reduction'),
    description: t ('benefits.cost_reduction_desc'),
    icon: <TrendingDown className='w - 8 h - 8' />,
  },
];
export /**
 * BenefitsSection - Function description
 */
function BenefitsSection() {
  const { t } = use_translation ();
  const benefits = get_benefits (t);
    >;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 16'>;
          <GradientHeading>{t ('home.benefits_title')}</GradientHeading>;
          <p className='text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto'>;
            {t ('home.benefits_subtitle')}
          </p>;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8 max - w-5xl mx - auto'>          {benefits.map ((benefit, index) => (
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8 max - w-5xl mx - auto">;
          {benefits.map ((benefit, index) => (
            <FeatureCard;
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
      "Direct provider connections","
      "Competitive pricing","
      "Bulk discount options","
      "Transparent cost structure" ]
              key={index}

              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}

          ))}

              className='bg - zion - blue hover:bg - zion - blue - dark transition - all duration - 300'            />              className="bg - zion - blue hover:bg - zion - blue - dark transition - all duration - 300";
              className="bg - zion - blue hover:bg - zion - blue - dark transition - all duration - 300";
            />))}
        </div>;
      </div>;
    </section>);
}
import React, { useState } from 'react';

export default BenefitsSection }}}}</motion.div></motion.div></motion.div>}
import { GradientHeading } from './ui / GradientHeading';
export default /**
 * Page - Function description
 */
function Page() {
  {

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Icon } from 'lucide-react';
const features = [];
const benefits = [];
const services = [];
const solutions = [];

      "Direct provider connections",";
      "Competitive pricing",";
      "Bulk discount options",";
      "Transparent cost structure" ];

              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}

        </div>;
      </div>;
    </section>;
  );

  const _containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const _statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const _itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}/>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results. 
            Our commitment to excellence drives every project to success.
          </p>
        </motion.div>

        {/* Additional stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={statsVariants} 
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              onHoverStart={() => setHoveredIndex(index)} 
              onHoverEnd={() => setHoveredIndex(null)} 
              whileHover={{ y: -8 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group h-full">
                {/* Icon with enhanced background */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>

                {/* Stats badge */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${benefit.bgColor} border border-zion-cyan/30 mb-4`}>
                  <span className="text-zion-cyan font-bold text-sm">{benefit.stats}</span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Features list */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      className="space-y-2" 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: "auto" }} 
                      exit={{ opacity: 0, height: 0 }} 
                      transition={{ duration: 0.3 }}
                    >
                      {benefit.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-2 text-zion-slate-light/80 text-sm" 
                          initial={{ opacity: 0, x: -10 }} 
                          animate={{ opacity: 1, x: 0 }} 
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover indicator */}
                <div className="mt-4 text-zion-cyan/60 text-xs">
                  {hoveredIndex === index ? "Hover to see details" : "Hover for details"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to experience the Zion difference?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
