"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
ArrowRightBrainCpuDatabaseNetworkShieldZapTargetTrendingUpUsers

const AI2025BreakthroughShowcaseBanner = () => {
  const [currentFeaturesetCurrentFeature] = useState(0);

  const breakthroughFeatures = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling unprecedented human-AI collaboration",
      impact: "Revolutionary",
      stats: "10x Cognitive Enhancement"
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-600" />,
      title: "Quantum AI Processing",
      description: "Quantum-powered AI algorithms solving previously impossible computational challenges",
      impact: "Breakthrough",
      stats: "1000x Processing Speed"
    },
    {
      icon: <Database className="w-12 h-12 text-green-600" />,
      title: "Autonomous Data Intelligence",
      description: "Self-evolving AI systems that continuously learn and optimize without human intervention",
      impact: "Transformative",
      stats: "99.9% Accuracy"
    },
    {
      icon: <Network className="w-12 h-12 text-orange-600" />,
      title: "Distributed AI Networks",
      description: "Decentralized AI networks that collaborate globally for maximum efficiency",
      impact: "Revolutionary",
      stats: "Global Scale"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: "AI Security Fortress",
      description: "Advanced AI-powered security systems that adapt and evolve against threats",
      impact: "Critical",
      stats: "Zero Breaches"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Instant Decision Making",
      description: "Real-time AI decision engines that process complex scenarios in milliseconds",
      impact: "Game-Changing",
      stats: "0.001s Response Time"
    }
  ];

  const achievements = [
    { number: "500+"label: "AI Models Deployed" },
    { number: "99.9%"label: "Uptime Achieved" },
    { number: "10M+"label: "Decisions Processed" },
    { number: "150+"label: "Countries Served" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % breakthroughFeatures.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
            <Brain className="w-5 h-5 mr-2" />
            AI 2025 Breakthrough Technology
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary AI Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of artificial intelligence with our groundbreaking 2025 technology suite 'that', 's reshaping industries worldwide.
          </p>
        </div>

        {/* Rotating Feature Showcase */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {breakthroughFeatures[currentFeature].icon}
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">
                      {breakthroughFeatures[currentFeature].title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                      {breakthroughFeatures[currentFeature].impact}
                    </span>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  {breakthroughFeatures[currentFeature].description}
                </p>
                <div className="text-2xl font-bold text-blue-400">
                  {breakthroughFeatures[currentFeature].stats}
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievementindex) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-3xl font-bold text-blue-400 mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-gray-300">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Dots */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {breakthroughFeatures.map((_index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentFeature ? 'bg-blue-400 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Stack Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { name: "Machine Learning"icon: <Brain className="w-8 h-8" />progress: 95 },
            { name: "Deep Learning"icon: <Cpu className="w-8 h-8" />progress: 92 },
            { name: "Neural Networks"icon: <Network className="w-8 h-8" />progress: 98 },
            { name: "Quantum AI"icon: <Zap className="w-8 h-8" />progress: 88 }
          ].map((techindex) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-blue-400 mb-3 flex justify-center">
                {tech.icon}
              </div>
              <h4 className="font-semibold text-white mb-2">{tech.name}</h4>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${tech.progress}%` }}
                />
              </div>
              <span className="text-sm text-gray-300">{tech.progress}% Complete</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and transform your business with our cutting-edge 2025 breakthrough technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-solutions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore AI Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025BreakthroughShowcaseBanner;
