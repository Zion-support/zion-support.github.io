<<<<<<< HEAD
import { GradientHeading } from './GradientHeading'
import { FeatureCard } from './FeatureCard'
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface BenefitsSectionProps {
  className?: string;
  style?: React.CSSProperties
=======

import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
interface BenefitsSectionProps {
  className?: string,
  style?: React.CSSProperties
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

const getBenefits = (t: any) => [
  {
<<<<<<< HEAD
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

=======
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
    icon: <TrendingDown className="w-8 h-8" />}],

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.benefits_subtitle')}
          </p>
        </div>
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FeatureCard
=======
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FeatureCard
import { GradientHeading } from "./GradientHeading",;
import { FeatureCard } from "./FeatureCard",;
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useTranslation } from "react-i18next",;
interface BenefitsSectionProps {;
  className?: string,;
  style?: React.CSSProperties;
}
;
const getBenefits = (t: any) => [;
  {;
    title: t('benefits.ai_matchmaking'),;
    description: t('benefits.ai_matchmaking_desc'),;
    icon: <Bot className="w-8 h-8" />},;
  {;
    title: t('benefits.global_availability'),;
    description: t('benefits.global_availability_desc'),;
    icon: <Globe className="w-8 h-8" />},;
  {;
    title: t('benefits.support_24_7'),;
    description: t('benefits.support_24_7_desc'),;
    icon: <Clock className="w-8 h-8" />},;
  {;
    title: t('benefits.cost_reduction'),;
    description: t('benefits.cost_reduction_desc'),;
    icon: <TrendingDown className="w-8 h-8" />}],;
export function BenefitsSection({ className, style }: BenefitsSectionProps) {;
  const { t } = useTranslation();
  const benefits = getBenefits(t);
  return (;
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            {t('home.benefits_subtitle')}
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {benefits.map((benefit, index) => (;
            <FeatureCard;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
<<<<<<< HEAD
              className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'            />              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
import React, { useState } from 'react'
export /**
export default BenefitsSection }}}}</motion.div></motion.div></motion.div>}
import { GradientHeading } from './ui / GradientHeading'
export default function Page() {
  {
"
    title: "24/7 Support","
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.","
    icon: <Clock className="w-8 h-8"  />,"
    color: "from-zion-blue to-zion-blue-dark","
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20","    stats: "99.9% Uptime"
    features: ["
      "Round-the-clock assistance","
      "Expert technical support","
      "Rapid response times","
      "Proactive monitoring" ]
}
  {
"
    title: "Cost Reduction","
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.","
    icon: <TrendingDown className="w-8 h-8"  />,"
    color: "from-zion-green to-zion-green-dark","
    bgColor: "from-zion-green/20 to-zion-green-dark/20","    stats: "40% Cost Savings"
    features: ["
      "Direct provider connections","
      "Competitive pricing","
      "Bulk discount options","
      "Transparent cost structure" ]
=======
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}
        </div>;
      </div>;
    </section>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
