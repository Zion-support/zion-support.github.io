'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Sparkles, Rocket, TrendingUp, Award, ArrowRight, Star, Zap, Target, Users, CheckCircle } from 'lucide-react';

const RevolutionaryAI2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryAI2025BannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    if (!isDismissed) {
      const interval = setInterval(() => {
        setCurrentFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionaryAI2025BannerDismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const features = [
    {
      title: "Generative AI 3.0",
      description: "99.7% accuracy in enterprise applications",
      icon: <Sparkles className="w-6 h-6" />,
      metric: "99.7%",
      metricLabel: "Accuracy"
    },
    {
      title: "Quantum-Enhanced ML",
      description: "1,200x faster processing for complex algorithms",
      icon: <Zap className="w-6 h-6" />,
      metric: "1,200x",
      metricLabel: "Faster Processing"
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing infrastructure with predictive capabilities",
      icon: <Rocket className="w-6 h-6" />,
      metric: "92%",
      metricLabel: "Automation"
    },
    {
      title: "Real-time Analytics",
      description: "Instant insights and decision support",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "99.9%",
      metricLabel: "Uptime"
    }
  ];

  const currentFeatureData = features[currentFeature];

  return (
    <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-4 left-4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Rocket className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">REVOLUTIONARY AI 2025</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">BREAKTHROUGH TECHNOLOGY</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Revolutionary Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                The AI Revolution is Here
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Experience the breakthrough technologies that are transforming enterprises worldwide. 
                From <span className="font-bold text-yellow-300">Generative AI 3.0</span> to 
                <span className="font-bold text-yellow-300"> Quantum-Enhanced Machine Learning</span>, 
                discover the future of business intelligence.
              </p>
            </div>

            {/* Feature Showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/20 rounded-full">
                    {currentFeatureData.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{currentFeatureData.title}</h3>
                    <p className="text-purple-100">{currentFeatureData.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-yellow-300">{currentFeatureData.metric}</div>
                  <div className="text-sm text-purple-100">{currentFeatureData.metricLabel}</div>
                </div>
              </div>

              {/* Feature Navigation Dots */}
              <div className="flex items-center justify-center space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentFeature ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">600% ROI in 18 months</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">94% success rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Real-time processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Enterprise-grade security</span>
              </div>
            </div>
          </div>

          {/* Right Side - Technology Stack and CTA */}
          <div className="space-y-8">
            {/* Technology Stack */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Revolutionary Technology Stack</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                  </div>
                  <h4 className="font-semibold mb-2">Generative AI 3.0</h4>
                  <p className="text-sm text-purple-100">Multimodal intelligence with 99.7% accuracy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="font-semibold mb-2">Quantum ML</h4>
                  <p className="text-sm text-purple-100">1,200x faster processing capabilities</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-green-300" />
                  </div>
                  <h4 className="font-semibold mb-2">Autonomous Systems</h4>
                  <p className="text-sm text-purple-100">Self-managing infrastructure</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-300" />
                  </div>
                  <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                  <p className="text-sm text-purple-100">Instant insights and predictions</p>
                </div>
              </div>
            </div>

            {/* Success Statistics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-sm text-purple-100">Companies Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-green-300 mb-2">$3.2B</div>
                <div className="text-sm text-purple-100">Average Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">340%</div>
                <div className="text-sm text-purple-100">Efficiency Gains</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-300 mb-2">18</div>
                <div className="text-sm text-purple-100">Months to ROI</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-center">Ready to Join the Revolution?</h3>
              <p className="text-purple-100 mb-6 text-center">
                Transform your business with cutting-edge AI technologies that deliver measurable results.
              </p>
              
              <div className="space-y-3">
                <Link
                  href="/blog/ai-2025-enterprise-transformation-ultimate-guide"
                  className="w-full bg-white text-purple-600 px-6 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explore AI 2025 Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/contact"
                  className="w-full border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025Banner;