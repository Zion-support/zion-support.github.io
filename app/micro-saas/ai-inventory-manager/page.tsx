import React from 'react'
import { Link } from 'react-router-dom'

export default function AIInventoryManagerPage() {
  const features = [
    {
      icon: <Bot className="w-5h-5ml-2" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms'
    },
    {
      icon: <Package className="w-5h-5ml-2" />,
      title: 'Smart Reorder Points',
      description: 'Automatically trigger reorders based on sales velocity and lead times'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive inventory insights with predictive analytics and trend analysis'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Streamline inventory processes with intelligent automation and alerts'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses and stores'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Loss Prevention',
      description: 'AI-powered theft detection and shrinkage analysis with real-time alerts'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Mobile app access',
        'Email support',
        'Basic reporting',
        '1 warehouse location'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI features',
        'Multi-location support',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Barcode scanning',
        'Supplier integration'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Retail Chain Owner',
      content: 'Reduced our inventory costs by 25% and eliminated stockouts completely. The AI forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Michael Torres',
      company: 'E-commerce Store',
      content: 'The automated reorder system saves us hours every week. Never run out of stock again.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Sarah Kim',
      company: 'Manufacturing Company',
      content: 'Multi-location sync is a game-changer. We can see inventory across all our facilities in real-time.',
      rating: 5,
      avatar: 'SK'
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-5h-5ml-2" />,
      title: '25% Cost Reduction',
      description: 'Optimize inventory levels and reduce carrying costs'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: '95% Accuracy',
      description: 'AI forecasting with industry-leading accuracy rates'
    },
    {
      icon: <Activity className="w-5h-5ml-2" />,
      title: 'Zero Stockouts',
      description: 'Smart reorder points prevent stockouts completely'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Real-time Sync',
      description: 'Instant updates across all locations and devices'
    }
  ]

  const integrations = [
    { name: 'Shopify', icon: '🛍️' },
    { name: 'WooCommerce', icon: '🛒' },
    { name: 'Amazon', icon: '📦' },
    { name: 'eBay', icon: '🏪' },
    { name: 'QuickBooks', icon: '📊' },
    { name: 'Xero', icon: '💰' },
    { name: 'Sage', icon: '📈' },
    { name: 'NetSuite', icon: '☁️' },
    { name: 'Salesforce', icon: '⚡' },
    { name: 'Zapier', icon: '🔗' }
  ]

  return (

  );
