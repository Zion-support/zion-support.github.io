<<<<<<< HEAD
import React from 'react';
import { Search, Handshake, Rocket, CheckCircle } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discover Services",
      description: "Browse our comprehensive catalog of AI, IT, and micro SAAS solutions",
      step: "01"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Get Consultation",
      description: "Connect with our experts for personalized recommendations and quotes",
      step: "02"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Implementation",
      description: "Fast deployment with our streamlined setup and onboarding process",
      step: "03"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Success & Support",
      description: "Ongoing support and optimization to ensure maximum ROI",
      step: "04"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark to-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading size="4xl" className="mb-4">
            How It Works
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Getting started with Zion Tech Group is simple. Follow these four easy steps 
            to transform your business with cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.step}
              </div>
              
              {/* Content */}
              <div className="pt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300">
            Start Your Journey
            <Rocket className="w-5 h-5" />
          </button>
=======

import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface HowItWorksSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const getSteps = (t: any) => [
  {
    title: t('how_it_works.post'),
    description: t('how_it_works.post_desc'),
    icon: Send,
  },
  {
    title: t('how_it_works.match'),
    description: t('how_it_works.match_desc'),
    icon: Search,
  },
  {
    title: t('how_it_works.hire_buy'),
    description: t('how_it_works.hire_buy_desc'),
    icon: Handshake,
  },
  {
    title: t('how_it_works.done'),
    description: t('how_it_works.done_desc'),
    icon: Check,
  },
];

export function HowItWorksSection({ className, style }: HowItWorksSectionProps) {
  const { t } = useTranslation();
  const steps = getSteps(t);
  
  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.how_it_works_subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
