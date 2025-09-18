import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";

interface BenefitsSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const getBenefits = (t: any) => [
  {
    title: t('benefits.ai_matchmaking'),
    description: t('benefits.ai_matchmaking_desc'),
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: t('benefits.global_availability'),
    description: t('benefits.global_availability_desc'),
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: t('benefits.support_24_7'),
    description: t('benefits.support_24_7_desc'),
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: t('benefits.cost_reduction'),
    description: t('benefits.cost_reduction_desc'),
    icon: <TrendingDown className="w-8 h-8" />,
  },
];

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ className, style }) => {
  const { t } = useTranslation();
  const benefits = getBenefits(t);

  return (
    <section className={cn("py-16 bg-gradient-to-br from-slate-50 to-blue-50", className)} style={style}>
      <div className="container mx-auto px-4">
        <GradientHeading
          title={t('benefits.title')}
          subtitle={t('benefits.subtitle')}
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};