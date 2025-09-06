import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (
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
              className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'            />
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
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
