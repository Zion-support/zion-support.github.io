import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, TrendingUp, Shield, Users, Clock, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIMLPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Complete ML Platform',
      description: 'End-to-end machine learning platform with model development, training, and deployment',
      benefits: ['Rapid model development', 'Automated training', 'Seamless deployment']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and monitoring for machine learning models',
      benefits: ['Real-time monitoring', 'Performance tracking', 'Model optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your machine learning infrastructure',
      benefits: ['Data encryption', 'Access controls', 'Audit trails']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative tools for data scientists and ML engineers',
      benefits: ['Shared workspaces', 'Version control', 'Knowledge sharing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$999',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 5 models',
        'Basic ML tools',
        'Email support',
        'Standard compute',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 25 models',
        'Advanced ML tools',
        'Priority support',
        'High-performance compute',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited models',
        'Premium ML features',
        '24/7 support',
        'Custom compute',
        'Custom analytics',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Data Scientists' },
    { icon: TrendingUp, value: '95%', label: 'Model Accuracy' },
    { icon: Clock, value: '70%', label: 'Faster Development' },
    { icon: Star, value: '4.9/5', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI ML Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced AI ML platform solutions by Zion Tech Group." />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI ML Platform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Coming Soon - Advanced AI ML platform solutions that will transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Contact Us
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIMLPlatformPage;