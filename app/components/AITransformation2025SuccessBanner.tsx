'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, CheckCircle, TrendingUp, DollarSign, Users, Zap, ArrowRight, Star, Award } from 'lucide-react';

const AITransformation2025SuccessBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    roi: 0,
    savings: 0,
    efficiency: 0,
    satisfaction: 0
  });

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('aiTransformation2025SuccessBannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  // Animate numbers on mount
  useEffect(() => {
    if (!isDismissed) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      const animateValue = (start: number, end: number, callback: (value: number) => void) => {
        const increment = (end - start) / steps;
        let current = start;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          callback(Math.round(current));
        }, stepDuration);
      };

      animateValue(0, 600, (value) => setAnimatedNumbers(prev => ({ ...prev, roi: value })));
      animateValue(0, 3200, (value) => setAnimatedNumbers(prev => ({ ...prev, savings: value })));
      animateValue(0, 340, (value) => setAnimatedNumbers(prev => ({ ...prev, efficiency: value })));
      animateValue(0, 97, (value) => setAnimatedNumbers(prev => ({ ...prev, satisfaction: value })));
    }
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('aiTransformation2025SuccessBannerDismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const successStories = [
    {
      company: "Global Manufacturing Corp",
      industry: "Automotive",
      revenue: "$25B",
      results: {
        roi: "650%",
        savings: "$2.8B",
        efficiency: "78%"
      }
    },
    {
      company: "MegaBank International", 
      industry: "Financial Services",
      revenue: "$18B",
      results: {
        roi: "580%",
        savings: "$1.2B",
        efficiency: "67%"
      }
    },
    {
      company: "Regional Health System",
      industry: "Healthcare", 
      revenue: "$3.2B",
      results: {
        roi: "720%",
        savings: "$280M",
        efficiency: "92%"
      }
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20"></div>
        <div className="absolute top-8 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">PROVEN SUCCESS</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <ArrowRight className="w-4 h-4" />
              <span className="text-sm font-semibold">600% ROI ACHIEVED</span>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Transformation Success Stories 2025
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Real companies achieving extraordinary results with our proven AI transformation strategies. 
            Join the <span className="font-bold text-yellow-300">500+ organizations</span> that have 
            achieved <span className="font-bold text-yellow-300">600% ROI</span> in just 18 months.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="text-4xl font-bold text-yellow-300 mb-2">{animatedNumbers.roi}%</div>
            <div className="text-sm text-emerald-100">Average ROI</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="w-8 h-8 text-green-300" />
            </div>
            <div className="text-4xl font-bold text-green-300 mb-2">${animatedNumbers.savings}M</div>
            <div className="text-sm text-emerald-100">Annual Savings</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-blue-300" />
            </div>
            <div className="text-4xl font-bold text-blue-300 mb-2">{animatedNumbers.efficiency}%</div>
            <div className="text-sm text-emerald-100">Efficiency Gains</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-8 h-8 text-purple-300" />
            </div>
            <div className="text-4xl font-bold text-purple-300 mb-2">{animatedNumbers.satisfaction}%</div>
            <div className="text-sm text-emerald-100">Success Rate</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium text-emerald-100">{story.industry}</span>
                </div>
                <Star className="w-5 h-5 text-yellow-300" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{story.company}</h3>
              <p className="text-sm text-emerald-200 mb-4">Revenue: {story.revenue}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-emerald-100">ROI</span>
                  <span className="text-lg font-bold text-yellow-300">{story.results.roi}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-emerald-100">Savings</span>
                  <span className="text-lg font-bold text-green-300">{story.results.savings}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-emerald-100">Efficiency</span>
                  <span className="text-lg font-bold text-blue-300">{story.results.efficiency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Why Our Clients Achieve 600% ROI</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-yellow-300" />
              </div>
              <h4 className="font-semibold mb-2">Proven Framework</h4>
              <p className="text-sm text-emerald-100">Battle-tested strategies from 500+ successful implementations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-semibold mb-2">Rapid Implementation</h4>
              <p className="text-sm text-emerald-100">Achieve results in 18 months with our accelerated approach</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-300" />
              </div>
              <h4 className="font-semibold mb-2">Expert Support</h4>
              <p className="text-sm text-emerald-100">Dedicated AI transformation experts guide you every step</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">Guaranteed Results</h4>
              <p className="text-sm text-emerald-100">94% success rate with measurable ROI within 18 months</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Join These Success Stories?</h3>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Transform your business with the same proven strategies that delivered 600% ROI for Fortune 500 companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies/ai-transformation-2025-600-percent-roi-success-story"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Read Full Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITransformation2025SuccessBanner;