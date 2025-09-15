'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Zap, Star, Target, Brain, Atom } from 'lucide-react';

interface BreakthroughItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'breakthrough' | 'revolution' | 'mastery' | 'framework';
  metrics: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  featured: boolean;
}

const breakthroughItems: BreakthroughItem[] = [
  {
    id: 'quantum-ai-breakthrough',
    title: 'AI 2026: Quantum AI Breakthrough',
    description: 'Discover the quantum AI breakthrough that will revolutionize computing with 10,000x speed improvements and solve previously impossible problems.',
    url: '/blog/ai-2026-quantum-ai-breakthrough',
    category: 'breakthrough',
    metrics: {
      primary: '10,000x',
      secondary: '99.9%',
      tertiary: '∞'
    },
    color: 'text-purple-700',
    bgColor: 'bg-gradient-to-r from-purple-50 to-indigo-50',
    borderColor: 'border-purple-200',
    icon: '⚛️',
    featured: true
  },
  {
    id: 'autonomous-operations',
    title: 'AI 2026: Autonomous Operations Framework',
    description: 'Build self-healing, self-optimizing systems that reduce manual intervention by 90% and achieve 99.9% uptime.',
    url: '/blog/ai-2026-autonomous-operations-framework',
    category: 'framework',
    metrics: {
      primary: '90%',
      secondary: '99.9%',
      tertiary: '75%'
    },
    color: 'text-indigo-700',
    bgColor: 'bg-gradient-to-r from-indigo-50 to-blue-50',
    borderColor: 'border-indigo-200',
    icon: '🔧',
    featured: true
  },
  {
    id: 'predictive-maintenance',
    title: 'AI 2026: Predictive Maintenance Revolution',
    description: 'Revolutionize maintenance operations with AI-powered analytics that reduce downtime by 85% and costs by 60%.',
    url: '/blog/ai-2026-predictive-maintenance-revolution',
    category: 'revolution',
    metrics: {
      primary: '85%',
      secondary: '60%',
      tertiary: '95%'
    },
    color: 'text-emerald-700',
    bgColor: 'bg-gradient-to-r from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
    icon: '⚡',
    featured: true
  },
  {
    id: 'enterprise-automation',
    title: 'AI 2026: Enterprise Automation Mastery',
    description: 'Master enterprise automation with 95% process automation, 80% cost reduction, and 300% productivity gains.',
    url: '/blog/ai-2026-enterprise-automation-mastery',
    category: 'mastery',
    metrics: {
      primary: '95%',
      secondary: '80%',
      tertiary: '300%'
    },
    color: 'text-orange-700',
    bgColor: 'bg-gradient-to-r from-orange-50 to-red-50',
    borderColor: 'border-orange-200',
    icon: '🎯',
    featured: false
  }
];

const categoryIcons = {
  breakthrough: Atom,
  framework: Target,
  revolution: Zap,
  mastery: Star
};

const categoryLabels = {
  breakthrough: 'Breakthrough',
  framework: 'Framework',
  revolution: 'Revolution',
  mastery: 'Mastery'
};

export default function QuantumAIBreakthroughBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakthroughItems.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('quantumAIBreakthroughBanner_dismissed', 'true');
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % breakthroughItems.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + breakthroughItems.length) % breakthroughItems.length);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('quantumAIBreakthroughBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = breakthroughItems[currentIndex];
  const IconComponent = categoryIcons[currentItem.category];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-30"></div>
      </div>
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 px-8 py-4 rounded-full text-lg font-bold mb-8">
              <Atom className="w-6 h-6" />
              Quantum AI Breakthrough 2026
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              The Future of Computing is Here
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Experience unprecedented breakthroughs in AI, quantum computing, and enterprise automation that will transform your organization's capabilities forever.
            </p>
          </div>

          {/* Main Content Carousel */}
          <div 
            className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-8 right-8 z-10 p-3 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full shadow-lg hover:shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Featured Badge */}
            {currentItem.featured && (
              <div className="absolute top-8 left-8 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center gap-3 shadow-lg">
                  <Star className="w-5 h-5" />
                  Featured Breakthrough
                </div>
              </div>
            )}

            {/* Content */}
            <div className={`${currentItem.bgColor} p-16 md:p-20`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl ${currentItem.bgColor} border-2 ${currentItem.borderColor} text-4xl`}>
                      {currentItem.icon}
                    </div>
                    <div>
                      <div className={`text-lg font-bold ${currentItem.color} uppercase tracking-wide`}>
                        {categoryLabels[currentItem.category]}
                      </div>
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-6 h-6 ${currentItem.color}`} />
                        <span className="text-lg text-gray-600">AI 2026 Series</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {currentItem.title}
                  </h3>

                  <p className="text-2xl text-gray-600 leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${currentItem.color} mb-3`}>
                        {currentItem.metrics.primary}
                      </div>
                      <div className="text-lg text-gray-600 font-medium">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${currentItem.color} mb-3`}>
                        {currentItem.metrics.secondary}
                      </div>
                      <div className="text-lg text-gray-600 font-medium">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${currentItem.color} mb-3`}>
                        {currentItem.metrics.tertiary}
                      </div>
                      <div className="text-lg text-gray-600 font-medium">Potential</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      href={currentItem.url}
                      className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        currentItem.category === 'breakthrough' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' :
                        currentItem.category === 'framework' ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700' :
                        currentItem.category === 'revolution' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700' :
                        'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
                      }`}
                    >
                      <Brain className="w-6 h-6 mr-3" />
                      Explore {categoryLabels[currentItem.category]}
                    </Link>
                    <Link
                      href="/content"
                      className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-lg"
                    >
                      <Target className="w-6 h-6 mr-3" />
                      View All Content
                    </Link>
                  </div>
                </div>

                {/* Right Content - Visual */}
                <div className="relative">
                  <div className={`${currentItem.bgColor} rounded-3xl p-12 border-2 ${currentItem.borderColor} relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-6 right-6 text-8xl">{currentItem.icon}</div>
                      <div className="absolute bottom-6 left-6 text-6xl opacity-50">{currentItem.icon}</div>
                    </div>
                    
                    <div className="relative text-center">
                      <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${currentItem.bgColor} border-4 ${currentItem.borderColor} mb-10 text-6xl`}>
                        {currentItem.icon}
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-8">
                        {categoryLabels[currentItem.category]} Highlights
                      </h4>
                      <div className="space-y-6 text-left">
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700 font-medium text-lg">Revolutionary technology</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700 font-medium text-lg">Proven implementation</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700 font-medium text-lg">Expert guidance</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700 font-medium text-lg">Measurable results</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700 font-medium text-lg">Future-ready solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-8 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="p-4 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full shadow-lg hover:shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-4 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full shadow-lg hover:shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center gap-4">
                {breakthroughItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <div className="text-lg text-gray-500 font-medium">
                {currentIndex + 1} of {breakthroughItems.length}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-2xl text-gray-600 mb-10">
              Ready to experience the future of AI and quantum computing?
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Atom className="w-8 h-8 mr-4" />
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-12 py-6 border-2 border-purple-600 text-purple-700 rounded-2xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl"
              >
                <Brain className="w-8 h-8 mr-4" />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}