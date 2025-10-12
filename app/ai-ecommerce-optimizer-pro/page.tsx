'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3, Target, TrendingUp } from 'lucide-react';

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms that continuously optimize your e-commerce performance'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics dashboard with real-time insights and performance metrics'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Conversion Optimization',
      description: 'AI-driven strategies to maximize conversion rates and revenue growth'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Revenue Growth',
      description: 'Proven strategies that increase sales and improve customer lifetime value'
    }
  ];

  const optimizationAreas = [
    {
      title: 'Product Recommendations',
      description: 'Advanced recommendation engine that increases average order value and customer satisfaction',
      features: ['Machine Learning Models', 'Real-time Personalization', 'Cross-selling Optimization', 'A/B Testing']
    },
    {
      title: 'Pricing Strategy',
      description: 'Dynamic pricing optimization based on market conditions, demand, and competitor analysis',
      features: ['Dynamic Pricing', 'Competitor Analysis', 'Demand Forecasting', 'Profit Optimization']
    },
    {
      title: 'Inventory Management',
      description: 'Intelligent inventory optimization to reduce costs and prevent stockouts',
      features: ['Demand Prediction', 'Automated Reordering', 'Stock Optimization', 'Cost Reduction']
    },
    {
      title: 'Customer Experience',
      description: 'AI-powered personalization that creates unique shopping experiences for each customer',
      features: ['Personalized Content', 'Behavioral Analysis', 'Customer Segmentation', 'Engagement Optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small e-commerce stores',
      features: [
        'Basic AI optimization',
        'Up to 5,000 products',
        'Standard analytics',
        'Email support',
        'Monthly reports',
        'Basic recommendations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Up to 25,000 products',
        'Real-time analytics',
        'Priority support',
        'Custom optimization',
        'A/B testing tools',
        'API access',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large e-commerce platforms',
      features: [
        'Custom AI solutions',
        'Unlimited products',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced AI training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'Tech Store',
      content: 'AI E-commerce Optimizer Pro increased our conversion rate by 45% and boosted revenue by 60% in just 3 months.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Fashion Retailer',
      content: 'The AI recommendations are incredibly accurate. Our average order value increased by 35% since implementation.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Electronics Store',
      content: 'The optimization tools helped us reduce inventory costs by 30% while improving customer satisfaction.',
      rating: 5
    }
  ];

  return (
      </div>
      </div>
    </>
  );
}