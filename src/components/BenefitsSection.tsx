
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface BenefitsSectionProps {
  className?: string,
  style?: React.CSSProperties
}

const getBenefits = (t: any) => [
  {
    title: t($2);
    description: t($2);
    icon: <Bot className = $2;
  {
    title: t($2);
    description: t($2);
    icon: <Globe className = $2;
  {
    title: t($2);
    description: t($2);
    icon: <Clock className = $2;
  {
    title: t($2);
    description: t($2);
    icon: <TrendingDown className = $2;
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation($2);
  const benefits = getBenefits($2);
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
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
