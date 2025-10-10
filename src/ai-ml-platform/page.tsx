import React from 'react';
import { Brain, TrendingUp, Shield, BarChart, Users, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import {CheckCircle, Star, Users, TrendingUp, Clock, Shield, Brain, Phone} from 'lucide-react';
import { Brain, TrendingUp, Shield, Users, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
const AIMLPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
=======
;
const AIMLPlatformPage: React.FC = () => {
};
const features = [
[
        {
      ico,
    n: Brain,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'Complete ML Platform',
      description: 'End-to-end machine learning platform with model development, training, and deployment',
      benefits: ['Rapid model development', 'Automated training', 'Seamless deployment']
    },
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and monitoring for machine learning models',
      benefits: ['Real-time monitoring', 'Performance tracking', 'Model optimization']
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your machine learning infrastructure',
      benefits: ['Data encryption', 'Access controls', 'Audit trails']
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative tools for data scientists and ML engineers',
      benefits: ['Shared workspaces', 'Version control', 'Knowledge sharing']
    };
  ];
<<<<<<< HEAD
  const pricingPlans = [
=======
;
const pricingPlans = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
      popular: false,
    name: 'Team',
      price: '$2,499',
      description: 'Ideal for development teams',
  const features = [];
  return (
<<<<<<< HEAD
    {
    // TODO: Add content
  }
}
=======
    {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ico,
  n: Brain,
      titl,
  e: 'Complete ML Platform',
      descriptio,
  n: 'End-to-end machine learning platform with model development, training, and deployment',
      benefit,
  s: ['Rapid model development', 'Automated training', 'Seamless deployment'];
    },
      ico,
  n: TrendingUp,
      titl,
  e: 'Advanced Analytics',
      descriptio,
  n: 'Comprehensive analytics and monitoring for machine learning models',
      benefit,
  s: ['Real-time monitoring', 'Performance tracking', 'Model optimization']
      ico,
  n: Users,
      titl,
  e: 'Team Collaboration',
      descriptio,
  n: 'Collaborative tools for data scientists and ML engineers',
      benefit,
  s: ['Shared workspaces', 'Version control', 'Knowledge sharing']
    };
  ];
  const pricingPlans = [
];
      nam,
  e: 'Team',
      pric,
  e: '$2,499',
      descriptio,
  n: 'Ideal for development teams',
        'Up to 25 models',
        'Advanced ML tools',
        'Priority support',
        'High-performance compute',
        'Advanced analytics',
        'Team collaboration'
      popular: true,
    name: 'Enterprise',
      price: '$4,999',
      description: 'For large organizations',
        'Unlimited models',
      popula,
  r: true,
      nam,
  e: 'Enterprise',
      pric,
  e: '$4,999',
      descriptio,
  n: 'For large organizations',
'Unlimited models',
        'Premium ML features',
        '24/7 support',
        'Custom compute',
        'Custom analytics',
        'White-label options',
<<<<<<< HEAD
        'API access'
  const stats = [
  const stats = [
  // TOD,
  O: Add items
],
    { icon: Users, value: '500+', label: 'Data Scientists' },
    { icon: TrendingUp, value: '95%', label: 'Model Accuracy' },
    { icon: Clock, value: '70%', label: 'Faster Development' },
    { icon: Star, value: '4.9/5', label: 'User Rating' }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI ML Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced AI ML platform solutions by Zion Tech Group." />
      </Helmet>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
=======
        'API access';
const stats = [
;
];
const stats = [
];
  // TOD,
  O: Add items;
];;
    { ico,
    n: Users, value: '500+', label: 'Data Scientists' },
    { icon: TrendingUp, value: '95%', label: 'Model Accuracy' },
    { icon: Clock, value: '70%', label: 'Faster Development' },
    { icon: Star, value: '4.9
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <title>AI ML Platform | Zion Tech Group<
        <meta name="description" content="Advanced AI ML platform solutions by Zion Tech Group." 
      <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI ML Platform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Coming Soon - Advanced AI ML platform solutions that will transform your business.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Contact Us;
  </
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
<<<<<<< HEAD
              Learn More;
  </
      <Footer />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
  </
=======
              Learn More
          <
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
  </
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
// Contact Us,
          </button>"
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg,
  hover:bg-cyan-400,"
  hover: text-slate-900 transition-colors"></button>
Learn More
          </div>
      <Footer />
    </div>
  ),
}
export default $1;
export default AiMlPlatformPage;
  </p>
  </h1>
  </section>
  </main>
  </button>
  </button>
  </div>
  </div>
  </div>
=======
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hove,
    r:bg-cyan-600 transition-colors">
/
          <
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg),
  hover:bg-cyan-400,"
  hover:text-slate-900 transition-colors"><
Learn More;
          <
      <Footer 
    <
  )};
export default $1;
export default AiMlPlatformPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
