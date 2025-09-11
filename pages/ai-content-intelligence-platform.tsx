<<<<<<< HEAD


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
=======

=======
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin;
  Brain, BarChart3, Target, Zap, Shield, Globe, Users, Award;
  Clock, DollarSign, Check, ArrowUpRight, Play, BookOpen, Code;
  ShoppingCart
 } from 'lucide-react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};


const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const features = [
  {

    title: 'Real-time Content Analytics',
    description: 'Monitor content performance across all channels with live dashboards and insights',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500'
  };
  {
    title: 'AI-Powered Optimization',
    description: 'Get intelligent suggestions for content improvement based on performance data',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  };
  {
    title: 'Predictive Performance Modeling',
    description: 'Forecast content success before publishing using advanced AI algorithms',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  };
  {
    title: 'Multi-Channel Strategy',
    description: 'Optimize content across all digital platforms simultaneously',
    icon: Globe,
    color: 'from-orange-500 to-red-500'
  };
  {
    title: 'Competitor Analysis',
    description: 'Track competitor content performance and identify opportunities',
    icon: Target,
    color: 'from-indigo-500 to-blue-500'
  };
  {
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next / head';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, Brain, BarChart3, Target, Zap, Shield, Globe, Users, Award, Clock, DollarSign, Check, ArrowUpRight, Play, BookOpen, Code, ShoppingCart, } from 'lucide-react';
import Layout from '../components / layout / Layout';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }
;
const features = [;
  {
    title: 'Real - time Content Analytics',
    description:;
      'Monitor content performance across all channels with live dashboards and insights',
    icon: BarChart3,
    color: 'from - blue - 500 to - cyan - 500',
  },
  {
    title: 'AI - Powered Optimization',
    description:;
      'Get intelligent suggestions for content improvement based on performance data',
    icon: Brain,
    color: 'from - purple - 500 to - pink - 500',
  },
  {
    title: 'Predictive Performance Modeling',
    description:;
      'Forecast content success before publishing using advanced AI algorithms',
    icon: TrendingUp,
    color: 'from - green - 500 to - emerald - 500',
  },  {
    title: 'Multi - Channel Strategy',
    description: 'Optimize content across all digital platforms simultaneously',
    icon: Globe,
    color: 'from - orange - 500 to - red - 500',
  },
  {
    title: 'Competitor Analysis',
    description:;
      'Track competitor content performance and identify opportunities',
    icon: Target,
    color: 'from - indigo - 500 to - blue - 500',
  },  {
<<<<<<< HEAD
<<<<<<< HEAD
    title: 'SEO Content Intelligence',
    description: 'AI - powered SEO optimization and keyword gap identification',
    icon: Zap,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    title: 'SEO Content Intelligence',
    description: 'AI - powered SEO optimization and keyword gap identification',
    icon: Zap,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    color: 'from - yellow - 500 to - orange - 500',
  }, ];
;
const pricing_plans = [;
  {
    name: 'Starter',
    price: '$2, 500',
    period: '/month',
    description: 'Perfect for small businesses and content creators',
    features: [;
      'Real - time content analytics',
      'AI optimization suggestions',
      'Basic performance tracking',
      'SEO content insights',
      'Email support',
      'Up to 100 content pieces / month',
    ],
    popular: false,
    color: 'from - gray - 500 to - gray - 600',
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin;
  Brain, BarChart3, Target, Zap, Shield, Globe, Users, Award;
  Clock, DollarSign, Check, ArrowUpRight, Play, BookOpen, Code;
  ShoppingCart
 } from 'lucide-react';
import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const features = [
  {
    title: 'Real-time Content Analytics'
    description:
      'Monitor content performance across all channels with live dashboards and insights'
    icon: BarChart3
    color: 'from-blue-500 to-cyan-500'
  }
  {
    title: 'AI-Powered Optimization'
    description:
      'Get intelligent suggestions for content improvement based on performance data'
    icon: Brain
    color: 'from-purple-500 to-pink-500'
  }
  {
    title: 'Predictive Performance Modeling'
    description:
      'Forecast content success before publishing using advanced AI algorithms'
    icon: TrendingUp
    color: 'from-green-500 to-emerald-500'
  },  {
    title: 'Multi-Channel Strategy'
    description: 'Optimize content across all digital platforms simultaneously'
    icon: Globe
    color: 'from-orange-500 to-red-500'
  }
  {
    title: 'Competitor Analysis'
    description:
      'Track competitor content performance and identify opportunities'
    icon: Target
    color: 'from-indigo-500 to-blue-500'
  },  {
    title: 'SEO Content Intelligence'
    description: 'AI-powered SEO optimization and keyword gap identification'
    icon: Zap
    color: 'from-yellow-500 to-orange-500'
  },];
const pricingPlans = [
  {
    name: 'Starter'
    price: '$2,500'
    period: '/month'
    description: 'Perfect for small businesses and content creators'
    features: [
      'Real-time content analytics'
      'AI optimization suggestions'
      'Basic performance tracking'
      'SEO content insights'
      'Email support'
      'Up to 100 content pieces/month'
    ]
    popular: false
    color: 'from-gray-500 to-gray-600'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },  {
    name: 'Professional'
    price: '$5,000'
    period: '/month'
    description: 'Ideal for growing businesses and marketing teams'
    features: [
      'Everything in Starter'
      'Predictive performance modeling'
      'Advanced competitor analysis'
      'Multi-channel optimization'
      'Priority support'
      'Up to 500 content pieces/month'
      'Custom integrations'
    ]
    popular: true
    color: 'from-blue-500 to-purple-600'
  },  {
    name: 'Enterprise'
    price: '$10,000'
    period: '/month'
    description: 'For large organizations with complex content needs'
    features: [
      'Everything in Professional'
      'Custom AI models'
      'Advanced analytics'
      'Dedicated account manager'
      '24/7 phone support'
      'Unlimited content pieces'
      'White-label solutions'
      'API access'
    ]
    popular: false
    color: 'from-purple-500 to-pink-600'
  },];
const useCases = [
  {
    title: 'Content Marketing Optimization'
    description:
      'Optimize your content strategy based on real-time performance data and AI insights'
    icon: Target
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Real-time content analyticsAI optimization suggestionsBasic performance trackingSEO content insightsEmail supportUp to 100 content pieces/month'
    ];
    popular: false,
    color: 'from-gray-500 to-gray-600'
  };
  {
    name: 'Professional',
    price: '$5, 000',
    period: '/month',
    description: 'Ideal for growing businesses and marketing teams',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    features: [;
      'Everything in Starter',
      'Predictive performance modeling',
      'Advanced competitor analysis',
      'Multi - channel optimization',
      'Priority support',
      'Up to 500 content pieces / month',
      'Custom integrations',
    ],
    popular: true,
    color: 'from - blue - 500 to - purple - 600',
  },  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: 'Enterprise',
    price: '$10, 000',
    period: '/month',
    description: 'For large organizations with complex content needs',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const features = [;
  {;
    title: 'Real-time Content Analytics',;
    description:;
      'Monitor content performance across all channels with live dashboards and insights',;
    icon: BarChart3,;
    color: 'from-blue-500 to-cyan-500',;
  },;
  {;
    title: 'AI-Powered Optimization',;
    description:;
      'Get intelligent suggestions for content improvement based on performance data',;
    icon: Brain,;
    color: 'from-purple-500 to-pink-500',;
  },;
  {;
    title: 'Predictive Performance Modeling',;
    description:;
      'Forecast content success before publishing using advanced AI algorithms',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-500',;
  },  {;
    title: 'Multi-Channel Strategy',;
    description: 'Optimize content across all digital platforms simultaneously',;
    icon: Globe,;
    color: 'from-orange-500 to-red-500',;
  },;
  {;
    title: 'Competitor Analysis',;
    description:;
      'Track competitor content performance and identify opportunities',;
    icon: Target,;
    color: 'from-indigo-500 to-blue-500',;
  },  {;
    title: 'SEO Content Intelligence',;
    description: 'AI-powered SEO optimization and keyword gap identification',;
    icon: Zap,;
    color: 'from-yellow-500 to-orange-500',;
  },];
<<<<<<< HEAD
<<<<<<< HEAD
const pricingPlans = [;
  {;
    name: 'Starter',;
    color: 'from-blue-500 to-cyan-500'
  }
  {
    title: 'SEO Strategy Enhancement'
    description:
      'Identify content gaps and optimize for search engines with AI-powered recommendations'
    icon: TrendingUp
    color: 'from-green-500 to-emerald-500'
  }
  {
    title: 'Social Media Management'
    description:
      'Create engaging content that performs across all social media platforms'
    icon: Globe
    color: 'from-purple-500 to-pink-500'
  }
  {
    title: 'E-commerce Content'
    description:
      'Optimize product descriptions and marketing content for better conversions'
    icon: ShoppingCart
    color: 'from-orange-500 to-red-500'
  }
];
const integrations = [
  'WordPress'
  'Shopify'
  'HubSpot'
  'Mailchimp'
  'Google Analytics'
  'Facebook Ads'
  'Google Ads'
  'LinkedIn'
  'Twitter'
  'Instagram'
  'YouTube'
  'TikTok'
  'Slack'
  'Zapier'
  'API Access',];

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, Brain, BarChart3, Target, Zap, Shield, Globe, Users, Award, Clock, DollarSign, Check, ArrowUpRight, Play, BookOpen, Code, ShoppingCart,} from 'lucide-react';
import Layout from '../components/layout/Layout';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',};

const features = [
  {
    title: 'Real-time Content Analytics',
    description:
      'Monitor content performance across all channels with live dashboards and insights',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI-Powered Optimization',
    description:
      'Get intelligent suggestions for content improvement based on performance data',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Predictive Performance Modeling',
    description:
      'Forecast content success before publishing using advanced AI algorithms',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
  },  {
    title: 'Multi-Channel Strategy',
    description: 'Optimize content across all digital platforms simultaneously',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Competitor Analysis',
    description:
      'Track competitor content performance and identify opportunities',
    icon: Target,
    color: 'from-indigo-500 to-blue-500',
  },  {
    title: 'SEO Content Intelligence',
    description: 'AI-powered SEO optimization and keyword gap identification',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small businesses and content creators',
    features: [
      'Real-time content analytics',
      'AI optimization suggestions',
      'Basic performance tracking',
      'SEO content insights',
      'Email support',
      'Up to 100 content pieces/month',
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600',
  },  {
    name: 'Professional',
    price: '$5,000',
    period: '/month',
    description: 'Ideal for growing businesses and marketing teams',
    features: [
      'Everything in Starter',
      'Predictive performance modeling',
      'Advanced competitor analysis',
      'Multi-channel optimization',
      'Priority support',
      'Up to 500 content pieces/month',
      'Custom integrations',
    ],
    popular: true,
    color: 'from-blue-500 to-purple-600',
  },  {
    name: 'Enterprise',
    price: '$10,000',
    period: '/month',
    description: 'For large organizations with complex content needs',
    features: [
      'Everything in Professional',
      'Custom AI models',
      'Advanced analytics',
      'Dedicated account manager',
      '24/7 phone support',
      'Unlimited content pieces',
      'White-label solutions',
      'API access',
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600',
  },];

const useCases = [
  {
    title: 'Content Marketing Optimization',
    description:
      'Optimize your content strategy based on real-time performance data and AI insights',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'SEO Strategy Enhancement',
    description:
      'Identify content gaps and optimize for search engines with AI-powered recommendations',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Social Media Management',
    description:
      'Create engaging content that performs across all social media platforms',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'E-commerce Content',
    description:
      'Optimize product descriptions and marketing content for better conversions',
    icon: ShoppingCart,
    color: 'from-orange-500 to-red-500',
  },
];

import { motion } from 'framer-motion';
import {;
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin,;
  Brain, BarChart3, Target, Zap, Shield, Globe, Users, Award,;
  Clock, DollarSign, Check, ArrowUpRight, Play, BookOpen, Code,;
  ShoppingCart;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const features = [;
  {;
    title: 'Real-time Content Analytics';
    description: 'Monitor content performance across all channels with live dashboards and insights';
    icon: BarChart3;
    color: 'from-blue-500 to-cyan-500';
  };
  {;
    title: 'AI-Powered Optimization',;
    description: 'Get intelligent suggestions for content improvement based on performance data',;
    icon: Brain,;
    color: 'from-purple-500 to-pink-500';
  },;
  {;
    title: 'Predictive Performance Modeling',;
    description: 'Forecast content success before publishing using advanced AI algorithms',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-500';
  },;
  {;
    title: 'Multi-Channel Strategy',;
    description: 'Optimize content across all digital platforms simultaneously',;
    icon: Globe,;
    color: 'from-orange-500 to-red-500';
  },;
  {;
    title: 'Competitor Analysis',;
    description: 'Track competitor content performance and identify opportunities',;
    icon: Target,;
    color: 'from-indigo-500 to-blue-500';
  },;
  {;
    title: 'SEO Content Intelligence',;
    description: 'AI-powered SEO optimization and keyword gap identification',;
    icon: Zap,;
    color: 'from-yellow-500 to-orange-500';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const pricingPlans = [;
  {;
    name: 'Starter';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const pricingPlans = [;
  {;
    name: 'Starter',;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    price: '$2,500',;
    period: '/month',;
    description: 'Perfect for small businesses and content creators',;
    features: [;
<<<<<<< HEAD
<<<<<<< HEAD
      'Real-time content analyticsAI optimization suggestionsBasic performance trackingSEO content insightsEmail supportUp to 100 content pieces/month';
    ],;
    popular: false,;
    color: 'from-gray-500 to-gray-600';
  },;
  {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Real-time content analytics',;
      'AI optimization suggestions',;
      'Basic performance tracking',;
      'SEO content insights',;
      'Email support',;
      'Up to 100 content pieces/month',;
    ],;
    popular: false,;
    color: 'from-gray-500 to-gray-600',;
  },  {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: 'Professional',;
    price: '$5,000',;
    period: '/month',;
    description: 'Ideal for growing businesses and marketing teams',;
    features: [;
<<<<<<< HEAD
<<<<<<< HEAD
      'Everything in StarterPredictive performance modelingAdvanced competitor analysisMulti-channel optimizationPriority supportUp to 500 content pieces/monthCustom integrations';
    ],;
    popular: true,;
    color: 'from-blue-500 to-purple-600';
  },;
  {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Everything in Starter',;
      'Predictive performance modeling',;
      'Advanced competitor analysis',;
      'Multi-channel optimization',;
      'Priority support',;
      'Up to 500 content pieces/month',;
      'Custom integrations',;
    ],;
    popular: true,;
    color: 'from-blue-500 to-purple-600',;
  },  {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: 'Enterprise',;
    price: '$10,000',;
    period: '/month',;
    description: 'For large organizations with complex content needs',;
    features: [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Everything in Professional',;
      'Custom AI models',;
      'Advanced analytics',;
      'Dedicated account manager',;
      '24/7 phone support',;
      'Unlimited content pieces',;
      'White-label solutions',;
      'API access',;
    ],;
    popular: false,;
    color: 'from-purple-500 to-pink-600',;
  },];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const useCases = [;
  {;
    title: 'Content Marketing Optimization',;
    description:;
      'Optimize your content strategy based on real-time performance data and AI insights',;
    icon: Target,;
    color: 'from-blue-500 to-cyan-500',;
  },;
  {;
    title: 'SEO Strategy Enhancement',;
    description:;
      'Identify content gaps and optimize for search engines with AI-powered recommendations',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-500',;
  },;
  {;
    title: 'Social Media Management',;
    description:;
      'Create engaging content that performs across all social media platforms',;
    icon: Globe,;
    color: 'from-purple-500 to-pink-500',;
  },;
  {;
    title: 'E-commerce Content',;
    description:;
      'Optimize product descriptions and marketing content for better conversions',;
    icon: ShoppingCart,;
    color: 'from-orange-500 to-red-500',;
  },;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const integrations = [

  'WordPressShopifyHubSpotMailchimpGoogle AnalyticsFacebook AdsGoogle AdsLinkedIn', 'TwitterInstagramYouTubeTikTokSlackZapierAPI Access'
<<<<<<< HEAD
];

<<<<<<< HEAD
    color: 'from-orange-500 to-red-500',;
  },;
  'WordPressShopifyHubSpotMailchimpGoogle AnalyticsFacebook AdsGoogle AdsLinkedIn', 'TwitterInstagramYouTubeTikTokSlackZapierAPI Access'
];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const integrations = [;
  'WordPress',;
  'Shopify',;
  'HubSpot',;
  'Mailchimp',;
  'Google Analytics',;
  'Facebook Ads',;
  'Google Ads',;
  'LinkedIn',;
  'Twitter',;
  'Instagram',;
  'YouTube',;
  'TikTok',;
  'Slack',;
  'Zapier',;
<<<<<<< HEAD
  'API Access',];
export default function AIContentIntelligencePlatform() {;
  return (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  'API Access',];

export default function AIContentIntelligencePlatform() {;
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
],
export default function AIContentIntelligencePlatform() {
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          href='https://ziontechgroup && ziontechgroup.com/ai-content-intelligence-platform'
        />;
      </Head>;
      <main className="max-w-7xl mx-auto px-4 py-8">;
        <div className="text-center mb-12">;
          <h1 className="text-4xl font-bold mb-4">AI Content Intelligence Platform</h1>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Create, optimize, and manage content intelligently with our AI-powered content platform.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      'Everything in ProfessionalCustom AI modelsAdvanced analyticsDedicated account manager24/7 phone supportUnlimited content piecesWhite-label solutionsAPI access';
    ],;
    popular: false,;
    color: 'from-purple-500 to-pink-600';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const useCases = [;
  {;
    title: 'Content Marketing Optimization';
    description: 'Optimize your content strategy based on real-time performance data and AI insights';
    icon: Target;
    color: 'from-blue-500 to-cyan-500';
  };
  {;
    title: 'SEO Strategy Enhancement',;
    description: 'Identify content gaps and optimize for search engines with AI-powered recommendations',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-500';
  },;
  {;
    title: 'Social Media Management',;
    description: 'Create engaging content that performs across all social media platforms',;
    icon: Globe,;
    color: 'from-purple-500 to-pink-500';
  },;
  {;
    title: 'E-commerce Content',;
    description: 'Optimize product descriptions and marketing content for better conversions',;
    icon: ShoppingCart,;
    color: 'from-orange-500 to-red-500';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
const integrations = [
  'WordPressShopifyHubSpotMailchimpGoogle AnalyticsFacebook AdsGoogle AdsLinkedIn', 'TwitterInstagramYouTubeTikTokSlackZapierAPI Access'
],
export default function AIContentIntelligencePlatform() {
  return (
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Layout>
      <Head>
        <title>AI Content Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with AI-powered intelligence and analytics. Get real-time insights, optimization suggestions, and predictive performance modeling." />
        <meta name="keywords" content="AI content intelligence, content optimization, content analytics, AI content marketing, content performance, SEO optimization" />
        <meta property="og:title" content="AI Content Intelligence Platform | Zion Tech Group" />
        <meta property="og:description" content="Transform your content creation with AI-powered intelligence and analytics." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-intelligence-platform" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-intelligence-platform" />
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Hero Section */}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Content Intelligence Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create, optimize, and manage content intelligently with our AI-powered content platform.
          </p>
        </div>
      {/* Hero Section */}
<<<<<<< HEAD
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

      {/* Hero Section */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  NEW SERVICE
                </span>
                <span className="text-gray-400 text-sm">Launch Date: January 15, 2025</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Content Intelligence Platform
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Transform content creation with AI-powered intelligence and analytics. Get real-time insights, optimization suggestions, and predictive performance modeling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, x: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>300%+ ROI improvement</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>80% faster content optimization</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Real-time performance insights</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}


      </section>

=======


              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              className='relative'>;
              <div className='bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8'>;
                <div className='text-6xl mb-4'>🧠</div>;
                <h3 className='text-2xl font-bold text-white mb-4'>;
                  Key Benefits;
                </h3>;
                <div className='space-y-3'>;
                  <div className='flex items-center text-green-400'>;
                    <CheckCircle className='w-5 h-5 mr-3' />;
                    <span>300%+ ROI improvement</span>;
                  </div>;
                  <div className='flex items-center text-green-400'>;
                    <CheckCircle className='w-5 h-5 mr-3' />;
                    <span>80% faster content optimization</span>;
                  </div>;
                  <div className='flex items-center text-green-400'>;
                    <CheckCircle className='w-5 h-5 mr-3' />                    <span>Real-time performance insights</span>;
                  </div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </div>;

=======
=======


=======
      {/* Features Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Features Section */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

<<<<<<< HEAD
<<<<<<< HEAD
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
      {/* Features Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
      </section>
      {/* Features Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Powerful Features for Content Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Content Intelligence Platform provides everything you need to create, optimize, and scale your content strategy.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div

<<<<<<< HEAD
<<<<<<< HEAD
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='group relative'
=======

              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Use Cases Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

=======

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Perfect For Every Content Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a content creator, marketing team, or enterprise organization, our platform adapts to your specific requirements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div


              >
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Pricing Section */}
      <section className='py-20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

=======

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your content needs and scale as you grow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div


              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border ${plan.popular ? 'border-blue-500' : 'border-gray-700'} rounded-2xl p-8 h-full`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400 mb-4">{plan.period}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center text-gray-300'
                      >
                        <Check className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                        {feature}
                      </li>
                    ))}
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </li>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  </ul>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <Link

=======
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Integrations Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Integrations Section */}


            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified content management experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300'
              >
                <span className='text-white font-medium'>{integration}</span>              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }  } catch (error) {
=======
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
=======
                whileInView={{ opacity: 1, scale: 1 }  } catch (error) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                className="group relative"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white font-medium">{integration}</span>
              </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
            ))}

=======
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
<<<<<<< HEAD
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Perfect For Every Content Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a content creator, marketing team, or enterprise organization, our platform adapts to your specific requirements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div

<<<<<<< HEAD
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0 && 0.8, delay: index * 0 && 0.2 }}
                viewport={{ once: true }}
                className='group'
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: index * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="group"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </div>
              </motion.div>
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
            ))}

=======
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className='py-20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
<<<<<<< HEAD
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your content needs and scale as you grow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div

<<<<<<< HEAD
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: index * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`relative ${plan.popular ? 'scale-105' : ''}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border ${plan.popular ? 'border-blue-500' : 'border-gray-700'} rounded-2xl p-8 h-full`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400 mb-4">{plan.period}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (

<<<<<<< HEAD
                      <li
                        key={featureIndex}
                        className='flex items-center text-gray-300'
                      >
                        <Check className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                        {feature}
                      </li>
                    ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </li>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


                  </ul>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <Link

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
=======
        </div>;
      </section>;
      {/* Integrations Section */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="text-center mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified content management experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    features: [;
      'Everything in Professional',
      'Custom AI models',
      'Advanced analytics',
      'Dedicated account manager',
      '24 / 7 phone support',
      'Unlimited content pieces',
      'White - label solutions',
      'API access',
    ],
    popular: false,
    color: 'from - purple - 500 to - pink - 600',
  }, ];
;
const use_cases = [;
  {
    title: 'Content Marketing Optimization',
    description:;
      'Optimize your content strategy based on real - time performance data and AI insights',
    icon: Target,
    color: 'from - blue - 500 to - cyan - 500',
  },
  {
    title: 'SEO Strategy Enhancement',
    description:;
      'Identify content gaps and optimize for search engines with AI - powered recommendations',
    icon: TrendingUp,
    color: 'from - green - 500 to - emerald - 500',
  },
  {
    title: 'Social Media Management',
    description:;
      'Create engaging content that performs across all social media platforms',
    icon: Globe,
    color: 'from - purple - 500 to - pink - 500',
  },
  {
    title: 'E - commerce Content',
    description:;
      'Optimize product descriptions and marketing content for better conversions',
    icon: ShoppingCart,
    color: 'from - orange - 500 to - red - 500',
  },
];
;
const integrations = [;
  'WordPress',
  'Shopify',
  'HubSpot',
  'Mailchimp',
  'Google Analytics',
  'Facebook Ads',
  'Google Ads',
  'LinkedIn',
  'Twitter',
  'Instagram',
  'YouTube',
  'TikTok',
  'Slack',
  'Zapier',
  'API Access', ];
;
export default /**
 * AIContentIntelligencePlatform - Function description
 */
function AIContentIntelligencePlatform() {
  return (
    <Layout>;
      <Head>;
        <title > AI Content Intelligence Platform | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Transform your content creation with AI - powered intelligence and analytics. Get real - time insights, optimization suggestions, and predictive performance modeling.';
        />;
        <meta;
          name='keywords';
          content='AI content intelligence, content optimization, content analytics, AI content marketing, content performance, SEO optimization';
        />;
        <meta;
          property='og:title';
          content='AI Content Intelligence Platform | Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Transform your content creation with AI - powered intelligence and analytics.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / ai - content - intelligence - platform';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / ai - content - intelligence - platform';
        />;
      </Head>;
      <main className="max - w-7xl mx - auto px - 4 py - 8">;
        <div className="text - center mb - 12">;
          <h1 className="text - 4xl font - bold mb - 4">AI Content Intelligence Platform</h1>;
          <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
            Create, optimize, and manage content intelligently with our AI - powered content platform.;
          </p>;
        </div>;
      {/* Hero Section */}
      <section className='relative py - 20 lg:py - 32 overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - purple - 900 / 20 via - blue - 900 / 20 to - cyan - 900 / 20'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 12 items - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_x: -30 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <div className='flex items - center space - x-2 mb - 6'>;
                <span className='bg - gradient - to - r from - purple - 500 to - pink - 600 text - white text - sm font - semibold px - 3 py - 1 rounded - full'>;
                  NEW SERVICE;
                </span>;
                <span className='text - gray - 400 text - sm'>;
                  Launch Date: January 15, 2025;
                </span>;
              </div>;
              <h1 className='text - 4xl lg:text - 6xl font - bold text - white mb - 6'>;
                AI Content Intelligence Platform;
              </h1>;
              <p className='text - xl lg:text - 2xl text - gray - 300 mb - 8'>;
                Transform content creation with AI - powered intelligence and;
                analytics. Get real - time insights, optimization suggestions, and;
                predictive performance modeling.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4'>;
                <Link;
                  href='/contact';
                  className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105';
                >;
                  Get Started Today;
                  <ArrowRight className='w - 5 h - 5 ml - 2' />;
                </Link>;
                <button className='inline - flex items - center px - 8 py - 4 bg - white / 10 backdrop - blur - sm border border - gray - 600 text - white font - semibold rounded - lg hover:bg - white / 20 transition - all duration - 200'>;
                  <Play className='w - 5 h - 5 mr - 2' />                  Watch Demo;
                </button>;
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_x: 30 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative';
            >;
              <div className='bg - gradient - to - br from - purple - 500 / 20 to - blue - 500 / 20 backdrop - blur - sm border border - purple - 500 / 30 rounded - 2xl p - 8'>;
                <div className='text - 6xl mb - 4'>🧠</div>;
                <h3 className='text - 2xl font - bold text - white mb - 4'>;
                  Key Benefits;
                </h3>;
                <div className='space - y-3'>;
                  <div className='flex items - center text - green - 400'>;
                    <CheckCircle className='w - 5 h - 5 mr - 3' />;
                    <span > 300%+ ROI improvement</span>;
                  </div>;
                  <div className='flex items - center text - green - 400'>;
                    <CheckCircle className='w - 5 h - 5 mr - 3' />;
                    <span > 80% faster content optimization</span>;
                  </div>;
                  <div className='flex items - center text - green - 400'>;
                    <CheckCircle className='w - 5 h - 5 mr - 3' />                    <span > Real - time performance insights</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      {/* Features Section */}
      <section className='py - 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 6'>;
              Powerful Features for Content Success;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Our AI Content Intelligence Platform provides everything you need;
              to create, optimize, and scale your content strategy.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {features.map ((feature, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative';
              >;
                <div className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 rounded - 2xl p - 6 hover:border - blue - 500 / 50 transition - all duration - 300'>;
                  <div;
                    className={`w - 12 h - 12 bg - gradient - to - r ${feature.color} rounded - lg flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300`}
                  >;
                    <feature.icon className='w - 6 h - 6 text - white' />;
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 3'>;
                    {feature.title}
                  </h3>;
                  <p className='text - gray - 400'>{feature.description}</p>                </div>;
              </motion.div>))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py - 20 bg - gradient - to - r from - gray - 900 / 50 to - gray - 800 / 50'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 6'>;
              Perfect For Every Content Need;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Whether you're a content creator, marketing team, or enterprise;
              organization, our platform adapts to your specific requirements.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>            {use_cases.map ((use_case, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='group';
              >;
                <div className='bg - gradient - to - r from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 rounded - 2xl p - 8 hover:border - blue - 500 / 50 transition - all duration - 300'>;
                  <div;
                    className={`w - 16 h - 16 bg - gradient - to - r ${use_case.color} rounded - xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                  >;
                    <use_case.icon className='w - 8 h - 8 text - white' />;
                  </div>;
                  <h3 className='text - 2xl font - bold text - white mb - 4'>;
                    {use_case.title}
                  </h3>;
                  <p className='text - gray - 400 text - lg'>{use_case.description}</p>                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className='py - 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 6'>;
              Flexible Pricing Plans;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Choose the plan that best fits your content needs and scale as you;
              grow.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing_plans.map ((plan, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale - 105' : ''}`}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - sm font - bold px - 4 py - 2 rounded - full'>                      MOST POPULAR;
                    </span>;
                  </div>)}
                <div;
                  className={`bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - sm border ${plan.popular ? 'border - blue - 500' : 'border - gray - 700'} rounded - 2xl p - 8 h - full`}
                >;
                  <div className='text - center mb - 8'>;
                    <h3 className='text - 2xl font - bold text - white mb - 2'>;
                      {plan.name}
                    </h3>;
                    <div className='text - 4xl font - bold text - blue - 400 mb - 2'>;
                      {plan.price}
                    </div>;
                    <div className='text - gray - 400 mb - 4'>{plan.period}</div>;
                    <p className='text - gray - 300'>{plan.description}</p>;
                  </div>;
                  <ul className='space - y-4 mb - 8'>;
                    {plan.features.map ((feature, feature_index) => (
                      <li;
                        key={feature_index}
                        className='flex items - center text - gray - 300';
                      >;
                        <Check className='w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0' />                        {feature}
                      </li>))}
                  </ul>;
                  <Link;
                    href='/contact';
                    className={`w - full inline - flex items - center justify - center px - 6 py - 3 bg - gradient - to - r ${plan.color} text - white font - semibold rounded - lg hover:scale - 105 transition - all duration - 200`}
                  >;
                    Get Started;
                    <ArrowRight className='w - 4 h - 4 ml - 2' />                  </Link>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py - 20 bg - gradient - to - r from - gray - 900 / 50 to - gray - 800 / 50'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 6'>;
              Seamless Integrations;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Connect with your existing tools and platforms for a unified;
              content management experience.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 2 md:grid - cols - 5 gap - 6'>            {integrations.map ((integration, index) => (
              <motion.div;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={index}
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>;
        </div>;
      </section>;
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}

          </div>;
        </div>;
      </section>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Contact Section */}
      <section className='py-20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Content Strategy?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Get in touch with our team to discuss how our AI Content;
              Intelligence Platform can revolutionize your content creation and;
              optimization.;
            </p>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>;
              <div className='flex flex-col items-center space-y-3'>;
                <div className='w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center'>;
                  <Phone className='w-6 h-6 text-blue-400' />;
                </div>;
                <div>;
                  <h3 className='text-white font-semibold'>Call Us</h3>;
                  <p className='text-gray-400'>{contactInfo && contactInfo.mobile}</p>;
                </div>;
              </div>;
              <div className='flex flex-col items-center space-y-3'>;
                <div className='w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center'>;
                  <Mail className='w-6 h-6 text-green-400' />;
                </div>;
                <div>;
                  <h3 className='text-white font-semibold'>Email Us</h3>;
                  <p className='text-gray-400'>{contactInfo && contactInfo.email}</p>;
                </div>;
              </div>;
              <div className='flex flex-col items-center space-y-3'>;
                <div className='w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center'>;
                  <MapPin className='w-6 h-6 text-purple-400' />;
                </div>;
                <div>;
                  <h3 className='text-white font-semibold'>Visit Us</h3>;
                  <p className='text-gray-400'>{contactInfo && contactInfo.address}</p>;
                </div>;
              </div>;
            </div>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105'>;
                Start Your Free Trial;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </Link>;
              <Link
                href='/2025-innovative-new-services-showcase'
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
          </div>
        </div>
      </section>
      {/* Integrations Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='text-center mb-16'
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified content management experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300'
              >
                <span className='text-white font-medium'>{integration}</span>              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white font-medium">{integration}</span>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Contact Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our AI Content Intelligence Platform can revolutionize your content creation and optimization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-400">{contactInfo.mobile}</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-400">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-400">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/2025-innovative-new-services-showcase"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
              >
<<<<<<< HEAD
<<<<<<< HEAD
=======
                Start Your Free Trial
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <Link
                href=&quot;/2025-innovative-new-services-showcase&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200&quot;

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200'>;
                View All Services;
              </Link>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </Layout>;
  );


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='bg - white / 10 backdrop - blur - sm border border - gray - 600 rounded - lg p - 4 text - center hover:bg - white / 20 transition - colors duration - 300';
              >;
                <span className='text - white font - medium'>{integration}</span>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className='py - 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 6'>;
              Ready to Transform Your Content Strategy?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
              Get in touch with our team to discuss how our AI Content;
              Intelligence Platform can revolutionize your content creation and;
              optimization.;
            </p>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8 mb - 12'>;
              <div className='flex flex - col items - center space - y-3'>;
                <div className='w - 12 h - 12 bg - blue - 500 / 20 rounded - full flex items - center justify - center'>;
                  <Phone className='w - 6 h - 6 text - blue - 400' />;
                </div>;
                <div>;
                  <h3 className='text - white font - semibold'>Call Us</h3>;
                  <p className='text - gray - 400'>{contact_info.mobile}</p>;
                </div>;
              </div>;
              <div className='flex flex - col items - center space - y-3'>;
                <div className='w - 12 h - 12 bg - green - 500 / 20 rounded - full flex items - center justify - center'>;
                  <Mail className='w - 6 h - 6 text - green - 400' />;
                </div>;
                <div>;
                  <h3 className='text - white font - semibold'>Email Us</h3>;
                  <p className='text - gray - 400'>{contact_info.email}</p>;
                </div>;
              </div>;
              <div className='flex flex - col items - center space - y-3'>;
                <div className='w - 12 h - 12 bg - purple - 500 / 20 rounded - full flex items - center justify - center'>;
                  <MapPin className='w - 6 h - 6 text - purple - 400' />;
                </div>;
                <div>;
                  <h3 className='text - white font - semibold'>Visit Us</h3>;
                  <p className='text - gray - 400'>{contact_info.address}</p>;
                </div>;
              </div>;
            </div>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;
                href='/contact';
                className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105';
              >;
                Start Your Free Trial;
                <ArrowRight className='w - 5 h - 5 ml - 2' />;
              </Link>;
              <Link;
                href='/2025 - innovative - new - services - showcase';
                className='inline - flex items - center px - 8 py - 4 bg - white / 10 backdrop - blur - sm border border - gray - 600 text - white font - semibold rounded - lg hover:bg - white / 20 transition - all duration - 200'              >;
<<<<<<< HEAD
    </Layout>
);
    </Layout>;
);

}
    </Layout>
  )
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Content Strategy?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Get in touch with our team to discuss how our AI Content Intelligence Platform can revolutionize your content creation and optimization.;
            </p>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">;
              <div className="flex flex-col items-center space-y-3">;
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">;
                  <Phone className="w-6 h-6 text-blue-400" />;
                </div>;
                <div>;
                  <h3 className="text-white font-semibold">Call Us</h3>;
                  <p className="text-gray-400">{contactInfo.mobile}</p>;
                </div>;
              </div>;
              <div className="flex flex-col items-center space-y-3">;
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">;
                  <Mail className="w-6 h-6 text-green-400" />;
                </div>;
                <div>;
                  <h3 className="text-white font-semibold">Email Us</h3>;
                  <p className="text-gray-400">{contactInfo.email}</p>;
                </div>;
              </div>;
              <div className="flex flex-col items-center space-y-3">;
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">;
                  <MapPin className="w-6 h-6 text-purple-400" />;
                </div>;
                <div>;
                  <h3 className="text-white font-semibold">Visit Us</h3>;
                  <p className="text-gray-400">{contactInfo.address}</p>;
                </div>;
              </div>;
            </div>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                href="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105";
              >;
                Start Your Free Trial;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                href="/2025-innovative-new-services-showcase";
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200";
              >;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                View All Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>);
;
<<<<<<< HEAD
<<<<<<< HEAD


    </Layout>);
;
    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
