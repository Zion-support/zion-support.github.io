const getBenefits = (t: any) => [
  {


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

          {benefits.map((benefit, index) => (;
            <FeatureCard;


              key={index}

              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'            />              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}

              className='bg - zion - blue hover:bg - zion - blue - dark transition - all duration - 300'            />              className="bg - zion - blue hover:bg - zion - blue - dark transition - all duration - 300";
              className="bg - zion - blue hover:bg - zion - blue - dark transition - all duration - 300";
            />))}
        </div>;
      </div>;
    </section>);
}
import React, { useState } from 'react';
export /**;

export default BenefitsSection }}}}</motion.div></motion.div></motion.div>}
import { GradientHeading } from './ui / GradientHeading';
export default /**
 * Page - Function description
 */
function Page() {
  {


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


  );
}
";
    title: "24 / 7 Support", ";
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.", ";
    icon: <Clock className="w - 8 h - 8"  />, ";
    color: "from - zion - blue to - zion - blue - dark", ";
    bg_color: "from - zion - blue / 20 to - zion - blue - dark / 20", "    stats: "99.9% Uptime",
    features: [";
      "Round - the - clock assistance", ";
      "Expert technical support", ";
      "Rapid response times", ";
      "Proactive monitoring" ];
},
  {
";
    title: "Cost Reduction", ";
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.", ";
    icon: <TrendingDown className="w - 8 h - 8"  />, ";
    color: "from - zion - green to - zion - green - dark", ";
    bg_color: "from - zion - green / 20 to - zion - green - dark / 20", "    stats: "40% Cost Savings",
    features: [";
      "Direct provider connections", ";
      "Competitive pricing", ";
      "Bulk discount options", ";
      "Transparent cost structure" ];
}
;