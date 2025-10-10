import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, Globe, Brain, Star}}from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {,
import { Cloud, Zap, Shield, Brain, Globe, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',},
    {id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600',},
    {id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
      color: 'from-orange-500 to-red-600',},
    {id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',},
    {id: 5,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',}];
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600'
    }
  ];
      color: 'from-orange-500 to-red-600'
      color: 'from-red-500 to-pink-600'
    }
  ];
      rating: 5;,}];

  useEffect(() => {const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);}, 3000);
    }, 4000);
  return(<div className="py-16 px-4">)</div>
      <div className="max-w-7xl mx-auto">{/* Header */</div>} <div className="text-center mb-16">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
        {/* Features Carousel */} <div className="mb-16">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,</div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {features[currentFeature].title} </h3>
              <p className="text-xl text-gray-300 mb-6">{features[currentFeature].description</p>} </p>
              <div className="flex space-x-2">{features.map((_, index) => (</div>
                  <button;
                    key={index}onClick={() =>setCurrentFeature(index)</button>}className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'bg-blue-500' : 'bg-gray-400'}`}
                  />
                ))}
              </div>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    index === currentFeature
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5" />
                    <span className="font-medium">{feature.title}</span>
                  </div>
                </button>
              ))}
            {/* Feature Visual */} <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color}rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" ,)})}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
