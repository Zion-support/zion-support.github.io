'use client';
<<<<<<< HEAD

import React from 'react';
import { ArrowRight, Phone, Zap, Shield, Brain, Globe } from 'lucide-react';

const AdvancedAccessibilityEnhancer: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Scale your business worldwide with our comprehensive solutions',
    },
  ];
=======

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Advanced AI technology to transform your business operations and improve efficiency',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast processing and real-time analytics for optimal results',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with customers worldwide with our scalable solutions',
  }
];
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6

const AdvancedAccessibilityEnhancer: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced Accessibility Enhancer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your digital experience with our cutting-edge accessibility solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Get Started Today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
=======
    <>
      <Helmet>
        <title>Advanced Accessibility - Zion Tech Group</title>
        <meta name="description" content="Advanced accessibility solutions for modern web applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Advanced Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Making your applications accessible to everyone with cutting-edge technology and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
  );
};

export default AdvancedAccessibilityEnhancer;