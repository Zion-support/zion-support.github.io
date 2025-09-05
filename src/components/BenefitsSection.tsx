
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",interface BenefitsSectionProps {
  className?: string,
  style?: React.CSSProperties
}

const getBenefits = (t: any) => [
  {
    title: t('benefits.aimatchmaking'),
    description: t('benefits.aimatchmaking_desc'),
    icon: <Bot className=&quot;w-8 h-8&quot; />},
  {
    title: t('benefits.globalavailability'),
    description: t('benefits.globalavailability_desc'),
    icon: <Globe className=&quot;w-8 h-8&quot; />},
  {
    title: t('benefits.support24_7'),
    description: t('benefits.support24_7_desc'),
    icon: <Clock className=&quot;w-8 h-8&quot; />},
  {
    title: t('benefits.costreduction'),
    description: t('benefits.costreduction_desc'),
    icon: <TrendingDown className="w-8 h-8" />}],
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
  return (
    <section className={cn(&quot;py-20 bg-zion-blue-light&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <GradientHeading>{t('home.benefitstitle')}</GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
            {t('home.benefitssubtitle')}
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto&quot;>
          {benefits.map((benefit, index) => (
            <FeatureCard,
key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className=&quot;bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300&quot;

interface BenefitsSectionProps {className?: string;
  style?: React.CSSProperties}

const getBenefits = (t: unknown) => [
  {title: t('benefits.aimatchmaking'), description: t('benefits.aimatchmaking_desc'), icon: <Bot className="w-8 h-8" />},
  {title: t('benefits.globalavailability'), description: t('benefits.globalavailability_desc'), icon: <Globe className="w-8 h-8" />},
  {title: t('benefits.support24_7'), description: t('benefits.support24_7_desc'), icon: <Clock className="w-8 h-8" />},
  {title: t('benefits.costreduction'), description: t('benefits.costreduction_desc'), icon: <TrendingDown className="w-8 h-8" />}];

export function BenefitsSection(_{className, style}: BenefitsSectionProps) {const { t} = useTranslation();
  const benefits = getBenefits(t);
  
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.benefitstitle')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.benefitssubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map(_(benefit, index) => (
            <FeatureCard,
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
