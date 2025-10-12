import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Target, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AILeadScoringPage;
const AILeadScoringPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI Lead Scoring',
      description: 'Advanced machine learning algorithms automatically score leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Predictive modeling']
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Intent Detection',
      description: 'AI identifies buying intent signals and purchase readiness to prioritize high-value prospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    },
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: 'Conversion Analytics',
      description: 'Comprehensive analytics with AI insights to optimize lead qualification and improve conversion rates.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Funnel optimization', 'Performance metrics']
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'AI-powered lead nurturing workflows that automatically engage prospects based on their score and behavior.',
      benefits: ['Auto-nurturing', 'Behavioral triggers', 'Personalized content', 'Multi-channel engagement']
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Sales Intelligence',
      description: 'AI provides sales teams with actionable insights and recommendations for each lead.',
      benefits: ['Sales insights', 'Action recommendations', 'Lead context', 'Next best actions']
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with popular CRMs and marketing automation platforms for unified lead management.',
      benefits: ['CRM sync', 'Data consistency', 'Workflow automation', 'Real-time updates']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
        'Email integration',
        'Standard reports',
        'Email support'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI features',
        'CRM integration',
        'Custom workflows',
        'Priority support',
        'API access'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited leads',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Sales Director',
      content: 'AI Lead Scoring increased our conversion rate by 180%. We now focus on the right prospects at the right time.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'James Wilson',
      company: 'Marketing Manager',
      content: 'The intent detection feature helped us identify hot leads 3 x faster. Our sales team loves the insights.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Lisa Chen',
      company: 'VP of Sales',
      content: 'ROI increased by 250% in just 3 months. The AI recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const stats = [
    { number: '180%', label: 'Conversion Increase', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
    { number: '250%', label: 'ROI Improvement', icon: <DollarSign className="w-5h-5ml-2" /&gt; },</DollarSign></DollarSign>
    { number: '3 x', label: 'Faster Lead Identification', icon: <Target className="w-5h-5ml-2" /&gt; },</Target></Target>
    { number: '95%', label: 'Scoring Accuracy', icon: <Award className="w-5h-5ml-2" /&gt; }</Award></Award>
  ]

  return (

        <>
      <title>AiLeadScoring - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiLeadScoring</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aileadscoring services coming soon.</p>
            
              Contact Us

      </>
  );
}

