
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
=======
import React from 'react';
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { useTranslation } from &quot;react-i18next&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    icon: Check}],

export function HowItWorksSection({ className, style }: HowItWorksSectionProps) {
  const { t } = useTranslation(),
  const steps = getSteps(t),
  
  return (
    <section className={cn(&quot;py-20 bg-zion-blue&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
            {t('home.how_it_works_subtitle')}
          </p>
        </div>

        <div className=&quot;relative&quot;>
          {/* Timeline line */}
          <div className=&quot;absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden&quot;></div>
          
          <div className=&quot;space-y-12 md:space-y-0&quot;>
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? &quot;md:flex-row-reverse&quot; : ""
                } relative`}
=======
import React from 'react';

interface HowItWorksSectionProps {_className?: string;
  style?: React.CSSProperties;}

const _getSteps = (_t: unknown) => [
  {_title: t('how_it_works.post'), _description: t('how_it_works.post_desc'), _icon: Send},
  {_title: t('how_it_works.match'), _description: t('how_it_works.match_desc'), _icon: Search},
  {_title: t('how_it_works.hire_buy'), _description: t('how_it_works.hire_buy_desc'), _icon: Handshake},
  {_title: t('how_it_works.done'), _description: t('how_it_works.done_desc'), _icon: Check}];

export function HowItWorksSection(_{_className, _style}: HowItWorksSectionProps) {_const { t} = useTranslation();
  const _steps = getSteps(t);
  
  return (
    <section className={_cn("py-20 bg-zion-blue", _className)} style={_style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{_t('home.how_it_works_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {_t('home.how_it_works_subtitle')}
          </p>
        </div>

        <div className="relative">
          {_/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>
          
          <div className="space-y-12 md:space-y-0">
            {_steps.map(_(step, _index) => (
              <div 
                key={step.title}
                className={_`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""} relative`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {_index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{_step.description}</p>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {_index % 2 !== 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{_step.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
