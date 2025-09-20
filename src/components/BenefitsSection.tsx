import React from "react";
import { Clock, Globe, TrendingDown, Bot } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  stats: string;
  features: string[];
}

const benefits: Benefit[] = [
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
    stats: "99.9% Uptime",
    features: [
      "Round-the-clock assistance",
      "Expert technical support",
      "Rapid response times",
      "Proactive monitoring"
    ]
  },
  {
    title: "Global Reach",
    description: "Connect with service providers and talent from around the world, expanding your business opportunities globally.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
    stats: "50+ Countries",
    features: [
      "Worldwide network",
      "Multi-language support",
      "Cultural expertise",
      "Time zone coverage"
    ]
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-zion-green to-zion-green-dark",
    bgColor: "from-zion-green/20 to-zion-green-dark/20",
    stats: "40% Cost Savings",
    features: [
      "Direct provider connections",
      "Competitive pricing",
      "Bulk discount options",
      "Transparent cost structure"
    ]
  },
  {
    title: "AI-Powered Matching",
    description: "Our advanced AI algorithms ensure you find the perfect match for your specific needs and requirements.",
    icon: <Bot className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "from-zion-cyan/20 to-zion-cyan-dark/20",
    stats: "95% Match Rate",
    features: [
      "Intelligent matching",
      "Skill-based recommendations",
      "Quality scoring",
      "Continuous learning"
    ]
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Discover the advantages of partnering with Zion Tech Group</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}