import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from "lucide-react";

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "Cost-Effective Solutions",
    description: "Find competitive pricing and value-driven solutions that fit your budget without compromising on quality or performance.",
    icon: <TrendingDown className="w-8 h-8" />,
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading
            title="Why Choose Zion Tech Group?"
            subtitle="Discover the advantages that make us the preferred choice for tech solutions"
            className="mb-8"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
