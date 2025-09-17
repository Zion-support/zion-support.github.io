
import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface HowItWorksSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ className, style }) => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      icon: <Search className="w-8 h-8" />,
    },
    {
      number: "02",
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      icon: <Handshake className="w-8 h-8" />,
    },
    {
      number: "03",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      icon: <Send className="w-8 h-8" />,
    },
  ];

  return (
    <section className={cn("py-16 bg-white", className)} style={style}>
      <div className="container mx-auto px-4">
        <GradientHeading
          title={t('howItWorks.title')}
          subtitle={t('howItWorks.subtitle')}
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
