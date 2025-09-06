<<<<<<< HEAD
import { GradientHeading } from './GradientHeading'
import { FeatureCard } from './FeatureCard'
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface BenefitsSectionProps {
  className?: string;
  style?: React.CSSProperties
<<<<<<< HEAD
=======
const getBenefits = (t: any,) => [
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface BenefitsSectionProps {
  className?: string;
  style?: React.CSSProperties;

const getBenefits = (t: any) => [
  {
    title: t('benefits.ai_matchmaking'),
    description: t('benefits.ai_matchmaking_desc'),
    icon: <Bot className='w-8 h-8' />,
  },
  {
    title: t('benefits.global_availability'),
    description: t('benefits.global_availability_desc'),
    icon: <Globe className='w-8 h-8' />,
  },
  {
    title: t('benefits.support_24_7'),
    description: t('benefits.support_24_7_desc'),
    icon: <Clock className='w-8 h-8' />,
  },
  {
    title: t('benefits.cost_reduction'),
    description: t('benefits.cost_reduction_desc'),
    icon: <TrendingDown className='w-8 h-8' />,
  },
];
}

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation();
  const benefits = getBenefits(t);

    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    icon: <TrendingDown className='w-8 h-8' />,
  },
]
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation()
  const benefits = getBenefits(t)
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    icon: <TrendingDown className="w-8 h-8" />}],

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.benefits_subtitle')}
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (
=======
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (        
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
=======

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
<<<<<<< HEAD
              className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'            />              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
=======
              className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            />
          ))}
        </div>
      </div>
    </section>
<<<<<<< HEAD
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
<<<<<<< HEAD
      "Direct provider connections","
      "Competitive pricing","
      "Bulk discount options","
      "Transparent cost structure" ]
=======
<<<<<<< HEAD
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
      "Direct provider connections",";
      "Competitive pricing",";
      "Bulk discount options",";
      "Transparent cost structure" ];
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
