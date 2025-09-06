import React from 'react';
import { motion  } from 'framer-motion';
import { Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket } from 'lucide-react';
interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price?: string | {
    monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
    setupTime?: string
  },
  period?: string;
  pricing?: any;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[],
  benefits?: string[]
}

interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant;