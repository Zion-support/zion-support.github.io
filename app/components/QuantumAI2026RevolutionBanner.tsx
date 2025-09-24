'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Target, TrendingUp } from 'lucide-react';

const QuantumAI2026RevolutionBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/quantum-pattern.svg')] bg-repeat opacity-10"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 QUANTUM AI 2026 REVOLUTION</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quantum AI Revolution 2026
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate breakthrough in quantum computing and AI. 
            Achieve <span className="text-yellow-400 font-bold">500% ROI</span> with revolutionary quantum AI solutions.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <Brain className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">1000x Faster Processing</h3>
            <p className="text-gray-300">
              Quantum AI delivers exponential computational power for complex optimization problems.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <Target className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">99.9% Accuracy</h3>
            <p className="text-gray-300">
              Achieve unprecedented precision in predictions, optimization, and decision-making.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">500% ROI Guaranteed</h3>
            <p className="text-gray-300">
              Proven results with Fortune 500 companies achieving massive returns on investment.
            </p>
          </div>
        </div>

        {/* Featured Content Links */}
        <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-10 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Quantum AI Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/blog/ai-2026-quantum-computing-revolution-ultimate-breakthrough"
              className="group bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    Quantum Computing Revolution Guide
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Complete guide to quantum AI implementation, breakthrough applications, and enterprise transformation.
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/case-studies/fortune-500-quantum-ai-transformation-2026-ultimate-success"
              className="group bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    Fortune 500 Success Story
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">
                    How a Fortune 500 company achieved 500% ROI through quantum AI transformation.
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    Read Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/services/quantum-ai"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum AI Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Quantum AI Consultation
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-300">
            <div className="flex items-center">
              <span className="text-yellow-400 font-bold">500+</span>
              <span className="ml-1">Quantum AI Projects</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 font-bold">$5.2B+</span>
              <span className="ml-1">Client Value Created</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 font-bold">99.9%</span>
              <span className="ml-1">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026RevolutionBanner;