import React from 'react';
import { CheckCircle, Shield, Zap, Users, Clock, Award, Bot, Globe, TrendingDown } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: 'Proven Results',
      description: 'We deliver measurable results with a 98% client satisfaction rate and proven ROI.',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced threat protection.',
      icon: <Shield className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Our advanced AI algorithms provide cutting-edge solutions tailored to your specific needs.',
      icon: <Bot className="w-8 h-8 text-purple-500" />,
    },
    {
      title: 'Global Reach',
      description: 'Access a worldwide network of skilled professionals and cutting-edge services.',
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our dedicated team to ensure your success.',
      icon: <Clock className="w-8 h-8 text-orange-500" />,
    },
    {
      title: 'Cost Reduction',
      description: 'Save up to 40% on your projects through direct connections and competitive pricing.',
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🚀',
      title: 'Faster Implementation',
      description: 'Get your solutions up and running quickly with our streamlined processes.',
pr-12325
    },
      icon: '💰',
      title: 'Cost Effective',
      description: 'Reduce operational costs while improving efficiency and productivity.',
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all services.',
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs.',
      icon: '🎯',
      title: 'Customized Approach',
      description: 'Tailored solutions designed specifically for your business requirements.',
      icon: '🛠️',
      title: 'Expert Support',
      description: '24/7 technical support from our team of experienced professionals.',
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
main
pr-12243
const getBenefits = (t: any) => [


  {

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

}

const getBenefits = null;
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
origin/cursor/automate-test-improve-and-merge-code-2533
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
          </p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (        


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
origin/cursor/automate-test-improve-and-merge-code-2533
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
pr-12325
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'
            />
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12325
          ))}
    </section>
  );
};

export default BenefitsSection;

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
origin/cursor/expand-services-advertise-and-build-project-c28b
main
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
export default BenefitsSection;
pr-12325
