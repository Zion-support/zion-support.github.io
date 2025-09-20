import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import Button from './Button';

interface PricingFeature {
  text: string;
  included: boolean;
  highlighted?: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  featured?: boolean;
  variant?: 'ai-futuristic' | 'quantum-futuristic' | 'space-futuristic' | 'biotech-futuristic';
  onSelect?: () => void;
  badge?: string;
  rating?: number;
  customers?: number;
  buttonText?: string;
}

export default function PricingCard({
  title,
  price,
  period = '/month',
  description,
  features,
  featured = false,
  variant = 'ai-futuristic',
  onSelect,
  badge,
  rating,
  customers,
  buttonText = 'Get Started'
}: PricingCardProps) {
  const variantStyles = {
    'ai-futuristic': {
      bg: 'from-cyan-900/20 via-blue-900/20 to-purple-900/20',
      border: 'border-cyan-400/30',
      accent: 'text-cyan-400',
      button: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
    },
    'quantum-futuristic': {
      bg: 'from-purple-900/20 via-pink-900/20 to-violet-900/20',
      border: 'border-purple-400/30',
      accent: 'text-purple-400',
      button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400'
    },
    'space-futuristic': {
      bg: 'from-indigo-900/20 via-blue-900/20 to-cyan-900/20',
      border: 'border-indigo-400/30',
      accent: 'text-indigo-400',
      button: 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400'
    },
    'biotech-futuristic': {
      bg: 'from-green-900/20 via-emerald-900/20 to-teal-900/20',
      border: 'border-green-400/30',
      accent: 'text-green-400',
      button: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400'
    }
  };

  const style = variantStyles[variant];

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">PricingCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default PricingCard;