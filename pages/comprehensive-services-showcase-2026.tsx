import React, { useState, useEffect } from 'react';
import { motion  } from 'framer-motion';
import { innovativeMicroSaasServices2026  } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026  } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';
import { Search, Filter, Star, Users, TrendingUp;
  Clock, Zap, Shield, Cloud, Brain;
  Database, Globe, Robot, Cube, Sparkles
 } from 'lucide-react';
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

const ComprehensiveServicesShowcase2026: React.FC;