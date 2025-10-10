'use client';

import React from 'react';
import { CheckCircle, Brain, Shield, Globe } from 'lucide-react';

interface DynamicContentShowcaseProps {
  title?: string;
  description?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  title = "Why Choose Our Solutions",
  description = "Discover the key features that make our AI and IT solutions stand out from the competition.",
  features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Leverage cutting-edge artificial intelligence to automate processes and gain valuable insights."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale your operations globally with our cloud infrastructure and worldwide support."
    }
  ],
  className = ''
}) => {
  return (
    <div className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;