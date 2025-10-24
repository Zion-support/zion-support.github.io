'use client';
import React from 'react';
import { Brain, TrendingUp, Shield, BarChart, Users, Clock, Star } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Brain } from 'lucide-react';
import { Brain, TrendingUp, Shield, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const AIMLPlatformPage: React.FC = () => {
const features = [
    {
  // TODO: Add content
};
  icon: Brain,
      title: 'Complete ML Platform',
      description: 'End-to-end machine learning platform with model development, training, and deployment',
      benefits: ['Rapid model development', 'Automated training', 'Seamless deployment'];
    },
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and monitoring for machine learning models',
      benefits: ['Real-time monitoring', 'Performance tracking', 'Model optimization']
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative tools for data scientists and ML engineers',
      benefits: ['Shared workspaces', 'Version control', 'Knowledge sharing']
    }
  ];
  const pricingPlans = [
      name: 'Team',
      price: '$2,499',
      description: 'Ideal for development teams',
        'Up to 25 models',
        'Advanced ML tools',
        'Priority support',
        'High-performance compute',
        'Advanced analytics',
        'Team collaboration'
      popular: true,

const Page: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI ML Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced AI ML platform solutions by Zion Tech Group." /> </Helmet>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI ML Platform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">// Coming Soon - Advanced AI ML platform solutions that will transform your business.
          
          
          
          
          
          
          
          
          
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">// Contact Us
            
          
          
          
          
          
          
          
          
          </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">Learn More
          </div>
      <Footer />
  );
};

export default Page;
