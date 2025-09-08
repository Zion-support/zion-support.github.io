import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, 
  Zap, DollarSign, Shield, Mail, MapPin, Brain,
  Sparkles, Users, Clock, Award, Eye, Heart,
  MessageCircle, BarChart3, Globe, Smartphone
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticBackground2030 from '../components/ui/UltraFuturisticBackground2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  {
    icon: Eye,
    title: 'Real-time Emotion Detection',
    description: 'Analyze 27 different emotions across voice, video, and text interactions in real-time'
  },
  {
    icon: MessageCircle,
    title: 'Sentiment-Driven Responses',
    description: 'Get intelligent response suggestions based on detected emotions and sentiment'
  },
  {
    icon: BarChart3,
    title: 'Emotion Trend Analytics',
    description: 'Track emotional patterns and trends over time with comprehensive reporting'
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Recognize emotions across multiple languages and cultural contexts'
  },
  {
    icon: Brain,
    title: 'Custom Training Models',
    description: 'Train custom emotion recognition models for your specific use case'
  },
  {
    icon: Shield,
    title: 'Real-time Alerts',
    description: 'Get instant notifications for negative emotions requiring immediate attention'
  }
];

const useCases = [
  {
    title: 'Customer Service Optimization',
    description: 'Improve customer satisfaction by understanding emotional states and responding appropriately',
    icon: Users
  },
  {
    title: 'Sales Enhancement',
    description: 'Identify customer emotions during sales calls to optimize conversion rates',
    icon: TrendingUp
  },
  {
    title: 'Product Feedback Analysis',
    description: 'Analyze user emotions when interacting with products to improve user experience',
    icon: MessageCircle
  },
  {
    title: 'Employee Wellbeing',
    description: 'Monitor employee emotional states to support mental health and productivity',
    icon: Heart
  }
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small teams getting started with emotion AI',
    features: [
      'Up to 1,000 emotion analyses per month',
      'Basic emotion detection (7 core emotions)',
      'Email support',
      'Standard API access',
      'Basic analytics dashboard'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$1,299',
    period: '/month',
    description: 'Advanced emotion intelligence for growing businesses',
    features: [
      'Up to 10,000 emotion analyses per month',
      'Full emotion detection (27 emotions)',
      'Priority support',
      'Advanced API access',
      'Custom emotion training',
      'Real-time alerts',
      'Advanced analytics',
      'Multi-language support'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited emotion analyses',
      'Custom emotion models',
      'Dedicated support team',
      'White-label solutions',
      'Advanced integrations',
      'Custom reporting',
      'SLA guarantees',
      'On-premise deployment'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

export default function AIEmotionIntelligencePlatform() {
	return null;
}