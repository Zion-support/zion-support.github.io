import React from 'react';
<<<<<<< HEAD
=======

import { ArrowRight, Star, TrendingUp, Clock, Users, Zap, Shield, Globe, Rocket, Brain, Atom, Cpu } from 'lucide-react';
import { innovative2025Services } from '../../data/innovative-2025-services';

interface UltraInnovativeServiceShowcaseProps {
  className?: string;
  maxServices?: number;
}

export default function UltraInnovativeServiceShowcase({ 
  className = '', 
  maxServices = 6 
}: UltraInnovativeServiceShowcaseProps) {
  const featuredServices = innovative2025Services
    .filter(service => service.popular)
    .slice(0, maxServices);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  const getServiceIcon = (icon: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      '🔮': <Brain className="w-8 h-8" />,
      '💝': <Heart className="w-8 h-8" />,
      '⚛️': <Atom className="w-8 h-8" />,
      '🔗': <Link className="w-8 h-8" />,
      '🌐': <Globe className="w-8 h-8" />,
      '🛡️': <Shield className="w-8 h-8" />,
      '🏥': <Activity className="w-8 h-8" />,
      '📈': <TrendingUp className="w-8 h-8" />
    };
    return iconMap[icon] || <Zap className="w-8 h-8" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-indigo-600',
      'AI & Emotional Intelligence': 'from-pink-500 to-rose-600',
      'Quantum Computing & AI': 'from-cyan-500 to-blue-600',
      'Blockchain & Web3': 'from-green-500 to-emerald-600',
      'Metaverse & VR': 'from-violet-500 to-purple-600',
      'IoT & Edge Computing': 'from-orange-500 to-red-600',
      'Cybersecurity': 'from-red-500 to-pink-600',
      'Healthcare AI': 'from-blue-500 to-indigo-600',
      'Financial Technology': 'from-green-500 to-emerald-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const UltraInnovativeServiceShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraInnovativeServiceShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraInnovativeServiceShowcase;