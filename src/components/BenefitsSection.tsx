import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown, Shield, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/10",
    features: ["Smart Algorithms", "Instant Results", "Perfect Matches"]
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    features: ["150+ Countries", "Local Expertise", "Global Network"]
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/10",
    features: ["Always Available", "Expert Team", "Instant Response"]
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "bg-zion-purple-light/10",
    features: ["40% Savings", "Direct Connect", "No Hidden Fees"]
  },
];

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ className, style }) => {
  const { t } = useTranslation();
  const benefits = getBenefits(t);

  return (
    <section className={cn("py-16 bg-gradient-to-br from-slate-50 to-blue-50", className)} style={style}>
      <div className="container mx-auto px-4">
        <GradientHeading
          title={t('benefits.title')}
          subtitle={t('benefits.subtitle')}
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};