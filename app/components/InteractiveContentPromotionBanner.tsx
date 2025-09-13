import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function InteractiveContentPromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const interactiveFeatures = [
    {
      title: "AI Interactive Learning Hub",
      description: "Master AI through hands-on, interactive experiences with real-time feedback",
      icon: "🧠",
      link: "/ai-interactive-learning-hub",
      stats: "50K+ Active Learners",
      color: "from-blue-600 to-purple-600",
      badge: "NEW"
    },
    {
      title: "AI Success Stories Showcase", 
      description: "Real transformation stories with measurable results and ROI metrics",
      icon: "🏆",
      link: "/ai-success-stories-showcase",
      stats: "500+ Success Stories",
      color: "from-green-600 to-blue-600",
      badge: "FEATURED"
    },
    {
      title: "AI Innovation Lab",
      description: "Experiment with cutting-edge AI tools and breakthrough technologies",
      icon: "⚡",
      link: "/ai-innovation-lab",
      stats: "200+ Interactive Demos",
      color: "from-purple-600 to-pink-600",
      badge: "COMING SOON"
    },
    {
      title: "AI Career Accelerator",
      description: "Complete learning paths from beginner to AI expert with industry recognition",
      icon: "🚀",
      link: "/ai-career-accelerator",
      stats: "95% Job Placement",
      color: "from-orange-600 to-red-600",
      badge: "POPULAR"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % interactiveFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-green-400/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-pink-400/20 rounded-full animate-pulse delay-3000"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium animate-pulse">🎮 INTERACTIVE CONTENT - LIVE NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Interactive Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of learning with our interactive AI content, success stories, 
            and hands-on experiences that adapt to your learning style
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {interactiveFeatures.slice(0, 2).map((feature, index) => (
            <Link 
              key={index}
              to={feature.link}
              className={`group relative overflow-hidden rounded-2xl p-8 border-2 transition-all duration-500 hover:scale-105 ${
                index === currentSlide 
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-900/50 to-purple-900/50' 
                  : 'border-white/20 bg-white/5 hover:border-cyan-400/50'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                   style={{ background: `linear-gradient(135deg, ${feature.color})` }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{feature.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {feature.badge}
                      </span>
                      <span className="text-sm text-gray-300">{feature.stats}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  <span>Explore Now</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {interactiveFeatures.slice(2, 4).map((feature, index) => (
            <Link 
              key={index + 2}
              to={feature.link}
              className="group relative overflow-hidden rounded-xl p-6 border border-white/10 bg-white/5 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                   style={{ background: `linear-gradient(135deg, ${feature.color})` }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {feature.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  {feature.description}
                </p>
                <div className="text-xs text-gray-400">{feature.stats}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Interactive Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-sm text-gray-300">Active Learners</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-gray-300">Success Stories</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center">
            <div className="text-3xl font-bold text-white mb-2">200+</div>
            <div className="text-sm text-gray-300">Interactive Demos</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full px-8 py-4">
            <span className="text-white font-semibold text-lg">Start Your Interactive AI Journey Today</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            Join thousands of learners already mastering AI through interactive experiences
          </p>
        </div>
      </div>
    </div>
  );
}