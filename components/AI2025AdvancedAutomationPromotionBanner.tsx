import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Target, TrendingUp, CheckCircle, Star, Users, Clock } from 'lucide-react';

export default function AI2025AdvancedAutomationPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            🚀 NEW 2025 BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2025 Advanced Automation Solutions
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI automation solutions that deliver 
            <span className="font-bold text-yellow-300"> 5000%+ ROI consistently</span> across 500+ implementations.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-300 mr-3" />
              <h3 className="text-xl font-bold">Lightning-Fast Implementation</h3>
            </div>
            <p className="text-white/90 mb-4">
              Deploy advanced automation solutions in 30 days or less with our proven framework.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Rapid deployment
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Minimal disruption
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Immediate ROI
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-purple-300 mr-3" />
              <h3 className="text-xl font-bold">Intelligent Automation</h3>
            </div>
            <p className="text-white/90 mb-4">
              AI-powered automation that learns, adapts, and optimizes continuously for maximum efficiency.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Self-learning systems
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Adaptive workflows
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Predictive optimization
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
              <h3 className="text-xl font-bold">Proven ROI</h3>
            </div>
            <p className="text-white/90 mb-4">
              Achieve 5000%+ ROI with our battle-tested automation solutions across 500+ implementations.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                5000%+ ROI average
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                ROI within 90 days
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Guaranteed results
              </li>
            </ul>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-white/90">Successful Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">5000%+</div>
            <div className="text-white/90">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">30</div>
            <div className="text-white/90">Days Implementation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">95%</div>
            <div className="text-white/90">Customer Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-advanced-automation-solutions"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-lg"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
          </div>
          <p className="text-white/80 mt-4 text-sm">
            Join industry leaders achieving unprecedented automation success
          </p>
        </div>
      </div>
    </div>
  );
}