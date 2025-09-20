import React, { useState } from 'react';
export /**
import { motion, AnimatePresence  } from 'framer-motion';

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
"
    icon: <FileText className="w-8 h-8"  />,"
    title: "Plan","
    description: "Collaborate on project requirements, timeline, and deliverables","
    color: "from-zion-blue to-zion-blue-dark","
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
    details: ["
      "Interactive project planning","
      "Timeline optimization","
      "Resource allocation","
      "Risk assessment"
    ],"
    duration: "4-8 hours","
    success: "90% on-time delivery"
  },
  {
"
    icon: <Rocket className="w-8 h-8"  />,"
    title: "Execute","
    description: "Watch your vision come to life with our expert execution","
    color: "from-zion-cyan-light to-zion-cyan","
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    details: ["
      "Agile development process","
      "Regular progress updates","
      "Quality assurance","
      "Performance monitoring"
    ],"
    duration: "1-4 weeks","
    success: "99% quality score"
  },
  {
"
    icon: <CheckCircle className="w-8 h-8"  />,"
    title: "Deliver","
    description: "Receive your completed project with ongoing support and maintenance","
    color: "from-zion-purple-light to-zion-purple","
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    details: ["
      "Comprehensive testing","
      "Documentation delivery",;"
      "Training and handover",;"
      "Post-launch support";
    ],;"
    duration: "Ongoing",;"
    success: "100% client retention"};
];

const stats = [;"
  { icon: <Clock className="w-6 h-6"  />, value: "3x Faster", label: "Project Delivery" },;"
  { icon: <Target className="w-6 h-6"  />, value: "99.9%", label: "Success Rate" },;"
  { icon: <TrendingUp className="w-6 h-6"  />, value: "50%", label: "Cost Reduction" },;"
  { icon: <Award className="w-6 h-6"  />, value: "1000+", label: "Projects Completed" };];

  const [hoveredStep, setHoveredStep] = useState < number | null> (null) ;
  const [activeStep, setActiveStep] = useState < number> (0) ;

      transition: {
        staggerChildren: 0.2,;
        delayChildren: 0.1}}};

  const statsVariants = {
  hidden: { opacity: 0,
  scale: 0.8

},
    visible: {
      opacity: 1,;
  { duration: 20, repeat: Infinity,
  ease: "linear"
  { duration: 25, repeat: Infinity,
  ease: "linear"
  { duration: 3, repeat: Infinity,
  ease: "easeInOut"
            <motion.div
              key={index}
              variants={statsVariants}
              className="text-center p - 4 rounded-xl bg-zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue -light / 20"

              <div className="text-zion - cyan mb-2 flex justify -center">
                    {hoveredStep === index && (<motion.div
                        className="mt-4 p - 4 rounded-xl bg-zion - blue - dark / 60 backdrop - blur - sm border border-zion -cyan / 30"
                      >
                        <h4 className="text-zion - cyan font - semibold text-sm mb-3">Key Features:</h4>
                        <div className="space - y-2">
                          {step.details.map((detail, idx) => (<motion.div
                              key={idx}
                              className="flex items - center gap-2 text-zion - slate - light / 80 text-xs"

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion - cyan / 60 text-xs">
