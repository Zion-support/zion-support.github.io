<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
interface BenefitsSectionProps {
  className?: string,
  style?: React.CSSProperties
}

const getBenefits = (t: any) => [
  {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
<<<<<<< HEAD
      icon: "🚀",
      title: "Faster Implementation",
      description: "Get your solutions up and running quickly with our streamlined processes."
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Reduce operational costs while improving efficiency and productivity."
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee for all services."
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Grow your business with solutions that scale with your needs."
    },
    {
      icon: "🎯",
      title: "Expert Support",
      description: "24/7 support from our team of certified professionals."
    },
    {
      icon: "⚡",
      title: "Latest Technology",
      description: "Stay ahead with cutting-edge AI and IT solutions."
    }
=======
      icon: '🚀',
      title: 'Faster Implementation',
      description: 'Get your solutions up and running quickly with our streamlined processes.',
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Reduce operational costs while improving efficiency and productivity.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all services.',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs.',
    },
    {
      icon: '🎯',
      title: 'Expert Support',
      description: '24/7 support from our team of certified professionals.',
    },
    {
      icon: '⚡',
      title: 'Latest Technology',
      description: 'Stay ahead with cutting-edge AI and IT solutions.',
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Zion Tech?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We deliver exceptional value through innovative solutions, expert support, and proven results.
        </p>
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const getBenefits = (t: any) => [
<<<<<<< HEAD
=======
import React from 'react';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf89
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115


  {

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
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
    icon: <TrendingDown className="w-8 h-8" />}],

<<<<<<< HEAD
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
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
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}
        </div>;
      </div>;
    </section>;
  );
}
;
=======
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
=======
const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of technology services with our innovative platform
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf89
=======

          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
          </p>
        </div>


<<<<<<< HEAD
<<<<<<< HEAD
=======
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

>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default BenefitsSection;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf89
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
