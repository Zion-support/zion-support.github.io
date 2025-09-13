import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

const AutomationMasteryPromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/20 rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      <div className="relative p-6 md:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium text-sm">New Mastery Guide</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Master AI Business Automation in 2025
            </h2>
            <p className="text-gray-300 mb-4 max-w-2xl">
              Transform your business operations with our comprehensive automation mastery guide. 
              Learn proven strategies, implementation frameworks, and real-world case studies.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                95% Cost Reduction
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                300% Productivity
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                24/7 Operations
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/blog/ai-2025-ultimate-business-automation-mastery"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                Explore Mastery Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/resources/ai-2025-automation-implementation-toolkit"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Download Toolkit
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">300%</div>
                <div className="text-xs text-gray-300">Productivity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-300">Templates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-xs text-gray-300">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-300">Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationMasteryPromotionBanner;