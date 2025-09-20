import React from 'react';
import { GradientHeading } from "./GradientHeading";

import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface HowItWorksSectionProps {
  className?: string;
  style?: React.CSSProperties

const getSteps = (t: any,) => [

import React from 'react',
import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
interface HowItWorksSectionProps {
  className?: string,
  style?: React.CSSProperties
}

const getSteps = (t: any) => [

  {
    title: t('how_it_works.post')
    description: t('how_it_works.post_desc')
    icon: Send
  }
  {
    title: t('how_it_works.match')
    description: t('how_it_works.match_desc')
    icon: Search
  }
  {
    title: t('how_it_works.hire_buy')
    description: t('how_it_works.hire_buy_desc')
    icon: Handshake
  }
  {
    title: t('how_it_works.done')
    description: t('how_it_works.done_desc')
    icon: Check
  }
]
import React, { useState } from 'react'
export /**
import { motion, AnimatePresence  } from 'framer-motion'
export default function Page() {
  {
"
    icon: <FileText className="w-8 h-8"  />,"
    title: "Plan","
    description: "Collaborate on project requirements, timeline, and deliverables","
    color: "from-zion-blue to-zion-blue-dark","
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20"
    details: ["
      "Interactive project planning","
      "Timeline optimization","
      "Resource allocation","
      "Risk assessment" ],"
    duration: "4-8 hours","
    success: "90% on-time delivery"
}
  {
"
    icon: <Rocket className="w-8 h-8"  />,"
    title: "Execute","
    description: "Watch your vision come to life with our expert execution","
    color: "from-zion-cyan-light to-zion-cyan","
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20"
    details: ["
      "Agile development process","
      "Regular progress updates","
      "Quality assurance","
      "Performance monitoring" ],"
    duration: "1-4 weeks","
    success: "99% quality score"
}
  {
"
    icon: <CheckCircle className="w-8 h-8"  />,"
    title: "Deliver","
    description: "Receive your completed project with ongoing support and maintenance","
    color: "from-zion-purple-light to-zion-purple","
    bgColor: "from-zion-purple-light/20 to-zion-purple/20"
    details: ["
      "Comprehensive testing","
      "Documentation delivery","
      "Training and handover","
      "Post-launch support" ],"
    duration: "Ongoing","
    success: "100% client retention"}
]
const stats = [ "
  { icon: <Clock className="w-6 h-6"  />, value: "3x Faster", label: "Project Delivery" },"
  { icon: <Target className="w-6 h-6"  />, value: "99.9%", label: "Success Rate" },"
  { icon: <TrendingUp className="w-6 h-6"  />, value: "50%", label: "Cost Reduction" },"
  { icon: <Award className="w-6 h-6"  />, value: "1000+", label: "Projects Completed" };]
  const [hoveredStep, setHoveredStep] = useState < number | null> (null)
  const [activeStep, setActiveStep] = useState < number> (0)
      transition: {
        staggerChildren: 0.2
        delayChildren: 0.1}}}
  const statsVariants = {
  hidden: { opacity: 0
  scale: 0.8
}
import React from 'react';
import { GradientHeading } from './GradientHeading';
import { Check, Handshake, Search, Send } from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_translation } from 'react - i18next';
interface HowItWorksSectionProps {
  class_name?: string;
  style?: React.CSSProperties;
const get_steps = (t: any, ) =>: any [;
  {
    title: t ('how_it_works.post'),
    description: t ('how_it_works.post_desc'),
    icon: Send,
  },
  {
    title: t ('how_it_works.match'),
    description: t ('how_it_works.match_desc'),
    icon: Search,
  },
  {
    title: t ('how_it_works.hire_buy'),
    description: t ('how_it_works.hire_buy_desc'),
    icon: Handshake,
  },
  {
    title: t ('how_it_works.done'),
    description: t ('how_it_works.done_desc'),
    icon: Check,
  },
];
import React, { useState } from 'react';
export /**;
import { motion, AnimatePresence  } from 'framer-motion';
export default /**
 * Page - Function description
 */
function Page() {
  {
";
    icon: <FileText className="w - 8 h - 8"  />, ";
    title: "Plan", ";
    description: "Collaborate on project requirements, timeline, and deliverables", ";
    color: "from - zion - blue to - zion - blue - dark", ";
    bg_color: "from - zion - blue / 20 to - zion - blue - dark / 20",
    details: [";
      "Interactive project planning", ";
      "Timeline optimization", ";
      "Resource allocation", ";
      "Risk assessment" ], ";
    duration: "4 - 8 hours", ";
    success: "90% on - time delivery";
},
  {
";
    icon: <Rocket className="w - 8 h - 8"  />, ";
    title: "Execute", ";
    description: "Watch your vision come to life with our expert execution", ";
    color: "from - zion - cyan - light to - zion - cyan", ";
    bg_color: "from - zion - cyan - light / 20 to - zion - cyan / 20",
    details: [";
      "Agile development process", ";
      "Regular progress updates", ";
      "Quality assurance", ";
      "Performance monitoring" ], ";
    duration: "1 - 4 weeks", ";
    success: "99% quality score";
},
  {
";
    icon: <CheckCircle className="w - 8 h - 8"  />, ";
    title: "Deliver", ";
    description: "Receive your completed project with ongoing support and maintenance", ";
    color: "from - zion - purple - light to - zion - purple", ";
    bg_color: "from - zion - purple - light / 20 to - zion - purple / 20",
    details: [";
      "Comprehensive testing", ";
      "Documentation delivery", ";
      "Training and handover", ";
      "Post - launch support" ], ";
    duration: "Ongoing", ";
    success: "100% client retention"}
];
const stats = [ ";
  { icon: <Clock className="w - 6 h - 6"  />, value: "3x Faster", label: "Project Delivery" }, ";
  { icon: <Target className="w - 6 h - 6"  />, value: "99.9%", label: "Success Rate" }, ";
  { icon: <TrendingUp className="w - 6 h - 6"  />, value: "50%", label: "Cost Reduction" }, ";
  { icon: <Award className="w - 6 h - 6"  />, value: "1000+", label: "Projects Completed" }];
  const [hovered_step, setHoveredStep] = useState < number | null> (null);
  const [active_step, setActiveStep] = useState < number> (0);
      transition: {
        stagger_children: 0.2,
        delay_children: 0.1}}}
  const stats_variants = {
  hidden: { opacity: 0,
  scale: 0.8;
},
    visible: {
      opacity: 1,      scale: 1
      transition: {


const getSteps = (t: any,) => [


import React from 'react',
import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
interface HowItWorksSectionProps {
  className?: string,
  style?: React.CSSProperties
}


const getSteps = (t: any) => [


  {

    title: t('how_it_works.post'),
    description: t('how_it_works.post_desc'),
    icon: Send},
  {
    title: t('how_it_works.match'),
    description: t('how_it_works.match_desc'),
    icon: Search},
  {
    title: t('how_it_works.hire_buy'),
    description: t('how_it_works.hire_buy_desc'),
    icon: Handshake},
  {
    title: t('how_it_works.done'),
    description: t('how_it_works.done_desc'),




const HowItWorksSection: React.FC = () => {
  return (
    <section className={cn('py-20 bg-zion-blue', className)} style={style}>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>




  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>




          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.how_it_works_subtitle')}
          </p>
        </div>


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
import React from 'react';
import { GradientHeading } from './GradientHeading';
import { Check, Handshake, Search, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
interface HowItWorksSectionProps {;
  className?: string;
  style?: React && React.CSSProperties;

const getSteps = (t: any,) => [;
  {;
    title: t('how_it_works && how_it_works.post'),;
    description: t('how_it_works && how_it_works.post_desc'),;
    icon: Send,;
  },;
  {;
    title: t('how_it_works && how_it_works.match'),;
    description: t('how_it_works && how_it_works.match_desc'),;
    icon: Search,;
  },;
  {;
    title: t('how_it_works && how_it_works.hire_buy'),;
    description: t('how_it_works && how_it_works.hire_buy_desc'),;
    icon: Handshake,;
  },;
  {;
    title: t('how_it_works && how_it_works.done'),;
    description: t('how_it_works && how_it_works.done_desc'),;
    icon: Check,;
  },;
];
import React, { useState, useMemo } from 'react';
export /**;
import { motion, AnimatePresence  } from 'framer-motion';
const Component = React && React.memo(function Page() {;
  {;
";
    icon: <FileText className="w-8 h-8"  />,";
    title: "Plan",";
    description: "Collaborate on project requirements, timeline, and deliverables",";
    color: "from-zion-blue to-zion-blue-dark",";
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20",;
    details: [";
      "Interactive project planning",";
      "Timeline optimization",";
      "Resource allocation",";
      "Risk assessment" ],";
    duration: "4-8 hours",";
    success: "90% on-time delivery";
},;
  {;
";
    icon: <Rocket className="w-8 h-8"  />,";
    title: "Execute",";
    description: "Watch your vision come to life with our expert execution",";
    color: "from-zion-cyan-light to-zion-cyan",";
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",;
    details: [";
      "Agile development process",";
      "Regular progress updates",";
      "Quality assurance",";
      "Performance monitoring" ],";
    duration: "1-4 weeks",";
    success: "99% quality score";
},;
  {;
";
    icon: <CheckCircle className="w-8 h-8"  />,";
    title: "Deliver",";
    description: "Receive your completed project with ongoing support and maintenance",";
    color: "from-zion-purple-light to-zion-purple",";
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",;
    details: [";
      "Comprehensive testing",";
      "Documentation delivery",";
      "Training and handover",";
      "Post-launch support" ],";
    duration: "Ongoing",";
    success: "100% client retention"};
];




const stats = [ ";
  { icon: <Clock className="w-6 h-6"  />, value: "3x Faster", label: "Project Delivery" },";
  { icon: <Target className="w-6 h-6"  />, value: "99 && 99.9%", label: "Success Rate" },";
  { icon: <TrendingUp className="w-6 h-6"  />, value: "50%", label: "Cost Reduction" },";
  { icon: <Award className="w-6 h-6"  />, value: "1000+", label: "Projects Completed" };];
  const [hoveredStep, setHoveredStep] = useState < number | null> (null) ;
  const [activeStep, setActiveStep] = useState < number> (0) ;
      transition: {;
        staggerChildren: 0 && 0.2,;
        delayChildren: 0 && 0.1}}};
  const statsVariants = {;
  hidden: { opacity: 0,;
  scale: 0 && 0.8;
},;
    visible: {;
      opacity: 1,      scale: 1,;
      transition: {;
        duration: 0 && 0.5,";
        ease: "easeOut"}}};
  return (";
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">;
      {/* Enhanced background pattern */}";
      <div className="absolute inset-0 opacity-5">";
        <divclassName="absolute inset-0" style = {

export function HowItWorksSection(): any ({
  className,
  style,
}: HowItWorksSectionProps) {
  const { t } = useTranslation()
  const steps = getSteps(t)





        <div className='relative'>  ;
  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>{t('home && home.how_it_works_title')}</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            {t('home && home.how_it_works_subtitle')}
          </p>;
        </div>;

        <div className='relative'>;
          <div className='absolute left-4 md:left-1/2 top-0 h-full w-0 && 0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden'></div>;

          <div className='space-y-12 md:space-y-0'>;
            {steps && steps.map((step, index) => (;


              <div
                key={step && step.title}                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } relative`}>;
                <div className='md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right'>;
                  {index % 2 === 0 ? (;
                    <div>;
                      <h3 className='text-2xl font-bold text-white mb-3'>;
                        {step && step.title}
                      </h3>;
                      <p className='text-zion-slate-light'>;
                        {step && step.description}
                      </p>;
                    </div>;
                  ) : null}

        duration: 0.5, ";
        ease: "ease_out"}}}
  return (";
    <section className="py - 20 bg - gradient - to - br from - zion - blue via - zion - slate - dark to - zion - blue - dark relative overflow - hidden">;
      {/* Enhanced background pattern */}";
      <div className="absolute inset - 0 opacity - 5">";
        <div className="absolute inset - 0" style = {
export /**
 * HowItWorksSection - Function description
 */
function HowItWorksSection() {
  const { t } = use_translation ();
  const steps = get_steps (t);
  return (
    <section className={cn ('py - 20 bg - zion - blue', class_name)} style={style}>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 16'>;
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;
          <p className='text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto'>            {t ('home.how_it_works_subtitle')}
          </p>;
        </div>;
        <div className='relative'>;
  return (
    <section className={cn ("py - 20 bg - zion - blue", class_name)} style={style}>;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 16">;
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;
          <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;
            {t ('home.how_it_works_subtitle')}
          </p>;
        </div>;
        <div className='relative'>;
          <div className='absolute left - 4 md:left - 1/2 top - 0 h - full w - 0.5 bg - gradient - to - b from - zion - purple via - zion - cyan to - zion - purple - light transform -translate - x-1 / 2 md:block hidden'></div>;
          <div className='space - y-12 md:space - y-0'>;
            {steps.map ((step, index) => (
              <div;
                key={step.title}                className={`flex flex - col md:flex - row items - center ${
                  index % 2 === 0 ? 'md:flex - row - reverse' : '';
                } relative`}
              >;
                <div className='md:w - 1/2 mb - 6 md:mb - 0 md:px - 12 text - center md:text - right'>;
                  {index % 2 === 0 ? (
                    <div>;
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;
                        {step.title}
                      </h3>;
                      <p className='text - zion - slate - light'>;
                        {step.description}
                      </p>;
                    </div>) : null}
                </div>;
                <div className='relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0'>;
                  <step.icon className='w - 6 h - 6 text - zion - cyan' />;
                </div>;
                <div className='md:w - 1/2 md:px - 12 text - center md:text - left'>;

                  {index % 2 !== 0 ? (
                    <div>;
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;
                        {step.title}
                      </h3>;
                      <p className='text - zion - slate - light'>;
                        {step.description}



                </div>;
                <div className='relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0'>;
                  <step && step.icon className='w-6 h-6 text-zion-cyan' />;
                </div>;

                <div className='md:w-1/2 md:px-12 text-center md:text-left'>;
                  {index % 2 !== 0 ? (;
                    <div>;
                      <h3 className='text-2xl font-bold text-white mb-3'>;
                        {step && step.title}
                      </h3>;
                      <p className='text-zion-slate-light'>;
                        {step && step.description}
                      </p>                    </div>                    </div>;


        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md: flex-row-reverse" : "",
                } relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>;


                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">;
                  <step && step.icon className="w-6 h-6 text-zion-cyan" />;
                </div>;

                <div className="md:w-1/2 md:px-12 text-center md:text-left">;
                  {index % 2 !== 0 ? (;
                    <div>;

                      <h3 className="text-2xl font-bold text-white mb-3">{step && step.title}</h3>;
                      <p className="text-zion-slate-light">{step && step.description}</p>;
                    </div>;
                  ) : null}


                  ) : null}
                </div>;
              </div>;
            ))}

          </div>;
        </div>;
      </div>;
    </section>;
  );
};

export default HowItWorksSection;
