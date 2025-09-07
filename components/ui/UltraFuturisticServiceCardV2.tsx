

import React from 'react';

import { motion  } from 'framer-motion';

import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Rocket } from 'lucide-react';

    name: string;
    tagline: string;
    description: string;

    category: string;

    price: {
      monthly: number;

      yearly: number;
      currency: string;
      trialDays: number;

    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;

    useCases: string[];
origin/cursor/automate-test-improve-and-merge-code-2533
    integrations: string[];

    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;

    popular: boolean;
        return <Zap className='w-5 h-5' />;
      case 'quantum & emerging tech':;
        return <Rocket className='w-5 h-5' />;
      case 'enterprise it':;
        return <Shield className='w-5 h-5' />;
      case 'space & metaverse':;
        return <Globe className='w-5 h-5' />;
      case 'micro saas':;
        return <TrendingUp className='w-5 h-5' />;
        return <Rocket className="w-5 h-5" />;
      case 'enterprise it':;
        return <Shield className="w-5 h-5" />;
      case 'space & metaverse':;
        return <Globe className="w-5 h-5" />;
      case 'micro saas':;
        return <TrendingUp className="w-5 h-5" />;

      default:


        return <Zap className='w-5 h-5' />;    }


    launchDate: string;

    customers: number;
    rating: number;
    reviews: number;
    marketSize?: string;

