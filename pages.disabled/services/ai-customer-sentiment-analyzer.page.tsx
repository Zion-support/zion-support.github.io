import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, Zap, Users, Shield, TrendingUp, BarChart3, MessageCircle, Star } from 'lucide-react';
const AICustomerSentimentAnalyzerPage: NextPage = () => {;
  const features = [;
    'Real-time sentiment monitoring across all channels',
    'Multi-channel data integration (social media, reviews, surveys, support tickets)',
    'Advanced emotion detection and classification',
    'Trend analysis and predictive insights',
    'Automated alert system for negative sentiment spikes',
    'Custom dashboard with KPI tracking',
    'API integration with CRM systems',
    'White-label reporting capabilities';
  ];
  const benefits = [;
    'Improve customer satisfaction by 40%',
    'Reduce churn through early warning system',
    'Enhance brand reputation management',
    'Data-driven customer experience decisions',
    'Competitive advantage through sentiment insights';
  ];
  const useCases = [;
    'Brand reputation monitoring',
    'Product feedback analysis',
    'Customer service optimization',
    'Marketing campaign effectiveness',
    'Competitor sentiment tracking';
  ];
  const pricingPlans = [;
    {;
      name: 'Starter',
      price: 199,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [;
        'Up to 10,000 mentions/month',
        '3 social media channels',
        'Basic sentiment analysis',
        'Email alerts',
        'Standard dashboard',
        'Email support';
      ];
},
    {;
      name: 'Professional',
      price: 499,
      period: 'month',
      description: 'Ideal for growing companies',
      features: [;
        'Up to 50,000 mentions/month',
        'Unlimited social media channels',
        'Advanced emotion detection',
        'Real-time alerts',
        'Custom dashboard',
        'API access',
        'Priority support';
      ];
},
    {;
      name: 'Enterprise',
      price: 1299,
      period: 'month',
      description: 'For large organizations',
      features: [;
        'Unlimited mentions',
        'All data sources',
        'AI-powered insights',
        'Custom integrations',
        'White-label reporting',
        'Dedicated account manager',
        '24/7 phone support';
      ];
}