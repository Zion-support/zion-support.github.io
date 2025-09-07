  }


import React from 'react';

interface EnhancedServiceCardProps {
  service: {
import {;
  Star,;
  ExternalLink,;
  ArrowRight,;
  TrendingUp,;
  Users,;
  Clock,;
  Shield,;}
  Zap,;}
} from 'lucide-react';

interface EnhancedServiceCardProps {;
  service: {;
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
    hover: {

      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
    hidden: { rotate: -180, scale: 0 },
    visible: {      rotate: 0,
      opacity: 1,
      coordinate_y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      }
    }

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
    contactInfo: {mobile: string;
      email: string;

    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;

  }

}


