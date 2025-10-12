'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Brain, BarChart3, Target, Zap } from 'lucide-react';

export default function AIEcommerceAssistant() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Recommendations',
      description: 'Intelligent product recommendations based on customer behavior and preferences'
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
      title: 'Smart Shopping Experience',
      description: 'Personalized shopping journeys that increase conversion rates'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to optimize your e-commerce performance'
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Targeted Marketing',
      description: 'AI-driven marketing campaigns that reach the right customers'
    }
  ];

  const services = [
    {
      title: 'Product Recommendation Engine',
      description: 'Advanced AI algorithms that suggest products based on customer behavior, purchase history, and preferences.',
      features: ['Machine Learning Models', 'Real-time Personalization', 'A/B Testing', 'Performance Analytics']
    },
    {
      title: 'Chatbot Integration',
      description: 'Intelligent chatbots that assist customers with product inquiries, order tracking, and support.',
      features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'CRM Integration']
    },
    {
      title: 'Inventory Optimization',
      description: 'AI-powered inventory management that predicts demand and optimizes stock levels.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Alerts', 'Cost Optimization']
    },
    {
      title: 'Customer Segmentation',
      description: 'Advanced customer segmentation and targeting for personalized marketing campaigns.',
      features: ['Behavioral Analysis', 'Predictive Modeling', 'Campaign Automation', 'ROI Tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small e-commerce stores',
      features: [
        'Basic AI recommendations',
        'Up to 1,000 products',
        'Standard analytics',
        'Email support',
        'Basic chatbot',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Up to 10,000 products',
        'Advanced analytics',
        'Priority support',
        'Custom chatbot',
        'Real-time insights',
        'API access',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large e-commerce platforms',
      features: [
        'Custom AI solutions',
        'Unlimited products',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
      </div>
      </div>
    </>
  );
}