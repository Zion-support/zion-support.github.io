import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, Check, Zap, Brain, Atom, Rocket, 
  Shield, Cpu, Globe, Eye, Building, Lightbulb, Target,
  TrendingUp, Users, Clock, Award
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
  rating?: number;
  marketSize?: string;
  targetAudience?: string;
  competitiveAdvantage?: string;
  integration?: string[];
  useCases?: string[];
}

interface UltraFuturisticServiceCard2036Props {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'automation' | 'cyber' | 'default';
  className?: string;
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI & Data': <Brain className="w-5 h-5" />,
  'Quantum Technology': <Atom className="w-5 h-5" />,
  'Space Technology': <Rocket className="w-5 h-5" />,
  'IT Infrastructure': <Cpu className="w-5 h-5" />,
  'Cybersecurity': <Shield className="w-5 h-5" />,
  'Edge Computing': <Zap className="w-5 h-5" />,
  'Blockchain': <Globe className="w-5 h-5" />,
  'Manufacturing': <Building className="w-5 h-5" />,
  'Healthcare AI': <Eye className="w-5 h-5" />,
  'Emerging Technology': <Lightbulb className="w-5 h-5" />,
  'Biotechnology': <Target className="w-5 h-5" />,
  'Human-Computer Interaction': <Users className="w-5 h-5" />,
  'Metaverse': <Globe className="w-5 h-5" />,
  'Autonomous Systems': <Rocket className="w-5 h-5" />,
  'Climate Technology': <Globe className="w-5 h-5" />
};

const variantConfig = {
  ai: {
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    border: 'border-green-500/30',
    glow: 'shadow-green-500/20',
    accent: 'text-green-400',
    bg: 'from-green-900/20 to-emerald-900/20'
  },
  quantum: {
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    accent: 'text-cyan-400',
    bg: 'from-cyan-900/20 to-blue-900/20'
  },
  space: {
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    accent: 'text-purple-400',
    bg: 'from-purple-900/20 to-pink-900/20'
  },
  automation: {
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    border: 'border-orange-500/30',
    glow: 'shadow-orange-500/20',
    accent: 'text-orange-400',
    bg: 'from-orange-900/20 to-red-900/20'
  },
  cyber: {
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    accent: 'text-blue-400',
    bg: 'from-blue-900/20 to-indigo-900/20'
  },
  default: {
    gradient: 'from-gray-500 via-slate-500 to-zinc-500',
    border: 'border-gray-500/30',
    glow: 'shadow-gray-500/20',
    accent: 'text-gray-400',
    bg: 'from-gray-900/20 to-slate-900/20'
  }
};

export default function UltraFuturisticServiceCard2036({ 
  service, 
  variant = 'default',
  className = ''
}: UltraFuturisticServiceCard2036Props) {
  const config = variantConfig[variant];

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: { 
      rotate: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut" as const
      }
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticServiceCard2036</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticServiceCard2036;
