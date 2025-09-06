<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/BenefitsSection.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
========
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
interface BenefitsSectionProps {
  className?: string,
  style?: React.CSSProperties
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/BenefitsSection.tsx
}
<<<<<<< HEAD

const getBenefits = (t: any) => [

========
const getBenefits = (t: any,) => [
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
  {

    icon: <TrendingDown className="w-8 h-8" />}],

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">

=======
>>>>>>> 
const getBenefits = (t: any) => [
>>>>>>>   {
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

const getBenefits = (t: any) => [
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/BenefitsSection.tsx

    icon: <TrendingDown className='w-8 h-8' />,
  },
]
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation()
  const benefits = getBenefits(t)
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
    icon: <TrendingDown className="w-8 h-8" />}],

export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation(),
  const benefits = getBenefits(t),
  
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
>>>>>>>           <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
========
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
            {t('home.benefits_subtitle')}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
<<<<<<<< HEAD:src/components/BenefitsSection.tsx
            <FeatureCard
        
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
  {

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FeatureCard

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FeatureCard
import { GradientHeading } from "./GradientHeading",;
import { FeatureCard } from "./FeatureCard",;
=======

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (        


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
>>>>>>> 
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
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
>>>>>>> }
import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:src/components/BenefitsSection.tsx

========
          {benefits && benefits.map((benefit, index) => (;
            <FeatureCard
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
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
<<<<<<<< HEAD:src/components/BenefitsSection.tsx

          {benefits.map((benefit, index) => (;
            <FeatureCard;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
<<<<<<<< HEAD:src/components/BenefitsSection.tsx

              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
=======
>>>>>>>               key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
      "Direct provider connections","
      "Competitive pricing","
      "Bulk discount options","
      "Transparent cost structure" ]
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>>               className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            />
          ))}

        </div>;
      </div>;
    </section>;
  );


  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
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
<<<<<<<< HEAD:src/components/BenefitsSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

=======
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
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.benefits_subtitle')}
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (
=======
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (        
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FeatureCard
=======
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FeatureCard
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { GradientHeading } from "./GradientHeading",;
import { FeatureCard } from "./FeatureCard",;
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useTranslation } from "react-i18next",;
<<<<<<< HEAD
;
interface BenefitsSectionProps {;
  className?:string,;
  style?:React.CSSProperties,;
}
;
const getBenefits = (t:any) => [;
  {;
    title:t('benefits.ai_matchmaking'),;
    description:t('benefits.ai_matchmaking_desc'),;
    icon:<Bot className="w-8 h-8" />},;
  {;
    title:t('benefits.global_availability'),;
    description:t('benefits.global_availability_desc'),;
    icon:<Globe className="w-8 h-8" />},;
  {;
    title:t('benefits.support_24_7'),;
    description:t('benefits.support_24_7_desc'),;
    icon:<Clock className="w-8 h-8" />},;
  {;
    title:t('benefits.cost_reduction'),;
    description:t('benefits.cost_reduction_desc'),;
    icon:<TrendingDown className="w-8 h-8" />}],;
;
export function BenefitsSection({ className, style } BenefitsSectionProps) {;
  const { t } = useTranslation(),;
  const benefits = getBenefits(t),;
  ;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            {t('home.benefits_subtitle')}
          </p>;
        </div>;
<<<<<<< HEAD
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {benefits.map((benefit, index) => (;
            <FeatureCard;
              key={index}              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300";
            />;
=======
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
            />
          ))}
        </div>
      </div>
    </section>
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
      "Direct provider connections",";
      "Competitive pricing",";
      "Bulk discount options",";
      "Transparent cost structure" ];
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ))}
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  ),;}
 interface BenefitsSectionProps {;
  className?: string;
style?: React.CSSProperties ;
}const getBenefits = (t: any) => [ {;
  title: t ('benefits.ai matchmaking');';
description: t ('benefits.ai matchmaking desc');
icon: <Bot className="w-8 h-8" /> ;
};
{';
  title: t ('benefits.global availability');';
description: t ('benefits.global availability desc');";
icon: <Globe className="w-8 h-8" /> ;
};
{';
  title: t ('benefits.support 24 7');';
description: t ('benefits.support 24 7 desc');";
icon: <Clock className="w-8 h-8" /> ;
};
{';
  title: t ('benefits.cost reduction');';
description: t ('benefits.cost reduction desc');
export function BenefitsSection ({;
  className, style ;
}: BenefitsSectionProps) {;
  const {;
  t ;
}= useTranslation ();
const benefits = getBenefits (t);
return (<section className= {";
  cn ("py-20 bg-zion-blue-light", className) ;
}style= {;
  style ";
}> <div className="container mx-auto px-4" > <div className="text-center mb-16" > <GradientHeading> {';
  t ('home.benefits title') ";
}</GradientHeading> <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto" > {';
  t ('home.benefits subtitle') ";
}</p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" > {;
  benefits.map ( (benefit, index) => (<FeatureCard key= {;
  index ;
}title= {;
  benefit.title ;
}description= {;
  benefit.description ;
}icon= {;
  benefit.icon ";
}className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300" ;
}</div> </div> </section>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/BenefitsSection.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
