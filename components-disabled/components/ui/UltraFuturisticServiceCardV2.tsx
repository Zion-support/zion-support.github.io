import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
      enterprise?: number;
    };
    features: string[];
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;
    useCases: string[];
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
    marketSize?: string;
    growthRate?: string;
  };
  index: number;
}

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return <Zap className="w-5 h-5" />;
      case 'quantum & emerging tech':
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':
        return <Globe className="w-5 h-5" />;
      case 'micro saas':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getGradientClass = (color: string) => {
    if (color.includes('from-') && color.includes('to-')) {
      return color;
    }
    return 'from-cyan-500 to-blue-500';
  };

=======

const UltraFuturisticServiceCardV2: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticServiceCardV2</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticServiceCardV2;
