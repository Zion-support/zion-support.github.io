import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, CheckCircle, Zap, Brain, Shield } from 'lucide-react';

interface UnifiedContentPromotionProps {
  className?: string;
}

export default function UnifiedContentPromotion({ className = '' }: UnifiedContentPromotionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "AI-Powered Enterprise Solutions",
      subtitle: "Transform Your Business with Cutting-Edge AI",
      description: "Achieve 300% ROI with our advanced AI automation, machine learning, and intelligent process optimization solutions.",
      features: ["300% ROI Guarantee", "70% Cost Reduction", "90% Efficiency Gains"],
      cta: "Get Free AI Assessment",
      icon: Brain,
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-900/20 to-blue-900/20"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      subtitle: "Next-Generation Computing Power",
      description: "Unlock unprecedented computational capabilities with our quantum computing infrastructure and algorithms.",
      features: ["Exponential Speed", "Advanced Security", "Future-Ready"],
      cta: "Explore Quantum Solutions",
      icon: Zap,
      gradient: "from-cyan-600 to-purple-600",
      bgGradient: "from-cyan-900/20 to-purple-900/20"
    },
    {
      id: 3,
      title: "Cybersecurity Excellence",
      subtitle: "Fortify Your Digital Assets",
      description: "Protect your business with enterprise-grade cybersecurity solutions and 24/7 threat monitoring.",
      features: ["Zero-Trust Architecture", "24/7 Monitoring", "Compliance Ready"],
      cta: "Secure Your Business",
      icon: Shield,
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-900/20 to-orange-900/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentPromotion = promotions[currentSlide];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1)_76%,transparent_77%)] bg-[length:50px_50px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 500+ Enterprises
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join industry leaders who have achieved 300% ROI, 70% cost reduction, and 90% efficiency gains 
            with our cutting-edge AI and technology solutions.
          </p>
        </div>

        {/* Main Promotion Card */}
        <div className="relative">
          <div className={`relative bg-gradient-to-br ${currentPromotion.bgGradient} backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden`}>
            {/* Card Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentPromotion.gradient} rounded-xl flex items-center justify-center`}>
                    <currentPromotion.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {currentPromotion.title}
                    </h2>
                    <p className="text-cyan-400 font-medium">
                      {currentPromotion.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {currentPromotion.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {currentPromotion.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`cyber-button bg-gradient-to-r ${currentPromotion.gradient} hover:scale-105 transform transition-all duration-200`}>
                    {currentPromotion.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`w-full h-80 bg-gradient-to-br ${currentPromotion.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
                  <div className="relative z-10 text-center">
                    <currentPromotion.icon className="w-24 h-24 text-white/80 mx-auto mb-4" />
                    <div className="text-white/60 text-sm font-medium">Interactive Demo</div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-1000" />
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </div>
  );
}