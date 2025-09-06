import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Star, Users, TrendingUp, DollarSign, Clock;
  CheckCircle, ArrowRight, Zap, Shield, Rocket;
  Brain, Globe, Lock, Code, Database, Cloud
 } from 'lucide-react';

import Button from '../ui/Button';
interface Service {
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
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;

    website: string
  },

  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;

  reviews: number
}


interface EnhancedServiceShowcaseProps {
  title: string;
  subtitle: string;
  showFilters?: boolean;
  services?: Service[];

  maxServices?: number
}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  title;
  subtitle;
  showFilters;

