"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, Zap, Target, Award, TrendingUp, Users } from 'lucide-react';

const AI2025RevolutionaryBreakthroughBanner = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Neural Architecture Revolution",
      description: "Breakthrough AI that thinks like humans but processes like supercomputers",
      stat: "10x Intelligence Boost"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Quantum Processing Power",
      description: "Harness quantum computing for unprecedented speed and accuracy",
      stat: "1000x Faster Processing"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Precision Automation",
      description: "AI that makes perfect decisions every time, every scenario",
      stat: "99.99% Accuracy Rate"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Industry Recognition",
      description: "Award-winning technology trusted by Fortune 500 companies",
      stat: "50+ Industry Awards"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-500/30 rounded-full blur-xl animate-bounce delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            REVOLUTIONARY BREAKTHROUGH 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI That Changes
            </span>
            <br />
            <span className="text-4xl md:text-6xl">Everything</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Experience the most advanced artificial intelligence system ever created. 
            Our revolutionary breakthrough technology is already transforming industries 
            and reshaping the future of human-AI collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/ai-2025-breakthrough" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Brain className="mr-3 w-6 h-6 group-hover:animate-pulse" />
              Explore the Breakthrough
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Users className="mr-3 w-6 h-6" />
              Watch Live Demo
            </Link>
          </div>
        </div>

        {/* Dynamic Feature Showcase */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Revolutionary Features</h3>
            <p className="text-gray-300">Discover what makes our AI breakthrough truly extraordinary</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl transition-all duration-500 ${
                  index === currentFeature 
                    ? 'bg-gradient-to-br from-blue-600/40 to-purple-600/40 scale-105 shadow-2xl' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                  <div className="text-2xl font-bold text-blue-400">{feature.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 backdrop-blur-sm">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
            <div className="text-gray-300">Average Productivity Increase</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 backdrop-blur-sm">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
            <div className="text-gray-300">Businesses Transformed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-600/20 to-red-600/20 rounded-xl p-6 backdrop-blur-sm">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-yellow-400 mb-2">$50B</div>
            <div className="text-gray-300">Cost Savings Generated</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl p-12 backdrop-blur-sm border border-white/20">
          <h3 className="text-4xl font-bold mb-4">Join the AI Revolution</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Don't get left behind. Be among the first to experience this revolutionary AI breakthrough 
            that's already changing the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started" 
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Sparkles className="mr-3 w-6 h-6" />
              Get Started Now
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-5 border-2 border-white/50 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryBreakthroughBanner;