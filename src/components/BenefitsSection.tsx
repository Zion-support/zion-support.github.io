<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation();
  const benefits = getBenefits(t);

  
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
          </p>
        </div>
<<<<<<< HEAD

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (
=======
<<<<<<< HEAD

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
=======

import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface BenefitsSectionProps {
  className?: string;
  style?: React.CSSProperties
}

const getBenefits = (t: any) => [
  {
    title: t('benefits.ai_matchmaking'), description: t('benefits.ai_matchmaking_desc'),
    icon: <Bot className = "w-8 h-8" />},
  {
    title: t('benefits.global_availability'), description: t('benefits.global_availability_desc'),
    icon: <Globe className = "w-8 h-8" />},
  {
    title: t('benefits.support_24_7'), description: t('benefits.support_24_7_desc'),
    icon: <Clock className = "w-8 h-8" />},
  {

    title: t('benefits.cost_reduction'), description: t('benefits.cost_reduction_desc'),
    icon: <TrendingDown className = "w-8 h-8" />}],
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation();

  const benefits = getBenefits(t);

  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.benefits_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {benefits.map((benefit, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
<<<<<<< HEAD
              className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'            />
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'
=======
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
