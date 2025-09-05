
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
=======
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { FeatureCard } from &quot;./FeatureCard&quot;;
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { useTranslation } from &quot;react-i18next&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface BenefitsSectionProps {
  className?: string,
  style?: React.CSSProperties
}

const getBenefits = (t: any) => [
  {
    title: t('benefits.ai_matchmaking'),
    description: t('benefits.ai_matchmaking_desc'),
    icon: <Bot className=&quot;w-8 h-8&quot; />},
  {
    title: t('benefits.global_availability'),
    description: t('benefits.global_availability_desc'),
    icon: <Globe className=&quot;w-8 h-8&quot; />},
  {
    title: t('benefits.support_24_7'),
    description: t('benefits.support_24_7_desc'),
    icon: <Clock className=&quot;w-8 h-8&quot; />},
  {
    title: t('benefits.cost_reduction'),
    description: t('benefits.cost_reduction_desc'),
<<<<<<< HEAD
    icon: <TrendingDown className="w-8 h-8" />}],
=======
    icon: <TrendingDown className=&quot;w-8 h-8&quot; />}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
  return (
    <section className={cn(&quot;py-20 bg-zion-blue-light&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
            {t('home.benefits_subtitle')}
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto&quot;>
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className=&quot;bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300&quot;
            />
          ))}
        </div>
      </div>
    </section>
  )
}
