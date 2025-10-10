'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, BarChart, Shield, Zap, ArrowRight, Star, Users, Award } from 'lucide-react';

const AiEnvironmentalPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Environmental Monitoring',
      description: 'AI-powered tracking of air quality, water resources, and ecosystem health'
    },
    {
      icon: BarChart,
      title: 'Climate Analytics',
      description: 'Advanced climate modeling and prediction for better environmental planning'
    },
    {
      icon: Shield,
      title: 'Pollution Detection',
      description: 'Real-time identification and tracking of environmental pollutants and hazards'
    },
    {
      icon: Zap,
      title: 'Sustainability Optimization',
      description: 'Smart recommendations for reducing environmental impact and carbon footprint'
    }
  ];

  const benefits = [
    'Reduce carbon footprint by 40%',
    'Improve environmental compliance by 90%',
    'Lower operational costs by 25%',
    'Enhance sustainability reporting',
    'Predict environmental risks',
    'Achieve net-zero goals faster'
  ];

  const stats = [
    { icon: Globe, value: '40%', label: 'Carbon Reduction' },
    { icon: BarChart, value: '90%', label: 'Compliance Rate' },
    { icon: Shield, value: '25%', label: 'Cost Savings' },
    { icon: Users, value: '100+', label: 'Organizations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Environmental Solutions - Zion Tech Group</title>
        <meta name="description" content="AI-powered environmental solutions that reduce carbon footprint by 40% and improve compliance by 90% for sustainable business operations." />
        <meta name="keywords" content="AI environmental, sustainability AI, climate monitoring, environmental compliance, carbon reduction" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Environmental</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Protect our planet with AI-powered environmental solutions that reduce carbon footprint by 40% and improve compliance by 90%.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Environmental AI Features</h2>
            <p className="text-gray-300 text-lg">Advanced technology for a sustainable future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Build a Sustainable Future</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI environmental solutions help organizations reduce their environmental impact, achieve sustainability goals, and contribute to a healthier planet.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Globe className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Environmental Impact Assessment</h3>
              <p className="text-gray-300 mb-6">
                Get a comprehensive analysis of your organization's environmental impact and personalized recommendations for improvement.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Request Assessment
                </button>
                <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Sustainability Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join the Environmental Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the solution. Transform your organization with AI environmental solutions that make a real difference for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <ArrowRight className="w-5 h-5" />
                Start Your Green Journey
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Star className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEnvironmentalPage;