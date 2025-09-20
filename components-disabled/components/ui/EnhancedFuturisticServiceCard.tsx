import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Users, Globe, Cpu, Brain, Atom, Sparkles } from 'lucide-react';
import Button from './Button';

interface EnhancedFuturisticServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
    textColor: string;
    link: string;
    category: string;
    technology: string[];
    roi: string;
    marketSize: string;
    growthRate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  index: number;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export default function EnhancedFuturisticServiceCard({ service, index, contactInfo }: EnhancedFuturisticServiceCardProps) {
  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Emerging')) return Sparkles;
    if (category.includes('IT')) return Cpu;
    if (category.includes('Security')) return Shield;
    if (category.includes('Cloud')) return Globe;
    return Zap;
  };

  const CategoryIcon = getCategoryIcon(service.category);

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
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1 + 0.5 + i * 0.1
      }
    })
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedFuturisticServiceCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default EnhancedFuturisticServiceCard;