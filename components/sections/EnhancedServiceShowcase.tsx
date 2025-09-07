

import React, { useState, useMemo } from 'react';

import { Star, Users, TrendingUp, DollarSign, Clock;
  CheckCircle, ArrowRight, Zap, Shield, Rocket;
}
  Brain, Globe, Lock, Code, Database, Cloud}
 } from 'lucide-react';


import Button from '../ui/Button';

interface Service {;
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
  text_color: string;
  link: string;
  market_position: string;
  target_audience: string;
  trial_days: number;
  setup_time: string;
  category: string;
  real_service: boolean;
  technology: string[];
  integrations: string[];
  use_cases: string[];
  roi: string;
  competitors: string[];
  market_size: string;
  growth_rate: string;

  variant: string;

  contactInfo: {
    mobile: string;

    email: string;

  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;

  reviews: number
}


interface EnhancedServiceShowcaseProps {
origin/cursor/automate-test-improve-and-merge-code-2533
  title: string;
  subtitle: string;
  show_filters?: boolean;
  services?: Service[];

  maxServices?: number

  maxServices?: number}
}
}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps /> = ({
  title;
  subtitle;
  showFilters;

