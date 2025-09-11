import React from 'react';
import Head from 'next/head';
import { ArrowRight, CheckCircle, Brain, Zap, Users, Shield, TrendingUp, BarChart3, MessageCircle, Star, Clock, Award } from 'lucide-react';
export default function AIContentGeneratorPage() {;
  const features = [;
    'Multi-language content generation with 50+ languages supported',
    'SEO-optimized content with keyword research and optimization',
    'Brand voice customization and tone consistency',
    'Content scheduling across multiple platforms',
    'Advanced analytics dashboard with performance metrics',
    'API integration for seamless workflow automation',
    'Plagiarism detection and originality scoring',
    'Extensive content templates library (1000+ templates)';
  ];
  const benefits = [;
    '10x faster content creation compared to manual writing',
    'Consistent brand messaging across all content',
    'Built-in SEO optimization for better search rankings',
    'Multi-platform publishing with one-click distribution',
    'Cost-effective content marketing solution',
    '24/7 content generation capability',
    'Scalable content production for any business size';
  ];
  const useCases = [;
    'Blog content creation for content marketing',
    'Social media management and posting',
    'Email marketing campaign content',
    'Product descriptions for e-commerce',
    'Marketing copywriting and ad content',
    'Technical documentation and guides',
    'Press releases and announcements';
  ];
  const pricingPlans = [;
    {;
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small businesses and freelancers',
      features: [;
        'Up to 10,000 words/month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Standard analytics',
        '1 user account';
      ],
      popular: false;
},
    {;
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for growing companies and agencies',
      features: [;
        'Up to 50,000 words/month',
        'Unlimited content templates',
        'Advanced SEO optimization',
        'Priority email support',
        'Advanced analytics & insights',
        '5 user accounts',
        'API access',
        'Brand voice training';
      ],
      popular: true;
},
    {;
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations with high content needs',
      features: [;
        'Unlimited words/month',
        'All premium templates',
        'Custom SEO strategies',
        '24/7 phone support',
        'Custom analytics dashboard',
        'Unlimited user accounts',
        'Full API access',
        'Custom brand voice models',
        'Dedicated account manager',
        'White-label options';
      ],
      popular: false;
}