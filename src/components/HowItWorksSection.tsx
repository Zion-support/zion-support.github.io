<<<<<<< HEAD
=======
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
>>>>>>> origin/website-improvements-v2

import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

<<<<<<< HEAD
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
        </div>
=======
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Simple Process
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Get started with Zion Tech Group in just three simple steps. Our AI-powered platform 
            makes finding the right tech solutions faster and easier than ever before.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-zion-cyan/30 to-zion-purple/30 z-10 transform translate-x-1/2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}

              <div className="relative bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                {/* Step Number */}
                <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{step.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/5 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-zion-blue-light/10 border border-zion-cyan/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-zion-slate-light">Join thousands of businesses already using Zion Tech Group</p>
            </div>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
              Start Your Project
            </button>
          </div>
        </motion.div>
>>>>>>> origin/website-improvements-v2
      </div>
    </section>
  );
}
