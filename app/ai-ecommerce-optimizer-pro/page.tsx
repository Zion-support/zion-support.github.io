'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart, Target, TrendingUp } from 'lucide-react';

const AiEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Product Recommendations',
      description: 'Increase sales with intelligent product suggestions based on customer behavior and preferences.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Analytics Dashboard',
      description: 'Get deep insights into customer behavior, sales patterns, and conversion optimization opportunities.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Dynamic Pricing Optimization',
      description: 'Automatically adjust prices based on demand, competition, and market conditions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Real-time Inventory Management',
      description: 'Prevent stockouts and overstocking with AI-driven inventory predictions.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Customer Segmentation',
      description: 'Identify and target customer segments with personalized marketing campaigns.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Fraud Detection',
      description: 'Protect your business with advanced AI-powered fraud detection and prevention.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Increase Revenue',
      description: 'Boost sales by up to 35% with optimized product recommendations and pricing'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
      title: 'Reduce Cart Abandonment',
      description: 'Decrease cart abandonment rates by 25% with personalized checkout experiences'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Improve Customer Experience',
      description: 'Deliver personalized shopping experiences that keep customers coming back'
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing e-commerce platform and tools'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI E-commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Optimizer Pro</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your e-commerce business with AI-powered optimization tools that increase sales, improve customer experience, and maximize revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI e-commerce optimizer includes everything you need to maximize your online store's performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Optimizer?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your E-commerce Store?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful online stores using our AI optimization platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEcommerceOptimizerProPage;