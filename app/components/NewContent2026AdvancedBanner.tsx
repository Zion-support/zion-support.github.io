'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Play, BookOpen, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'framework' | 'revolution' | 'guide';
  metrics: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  color: string;
  bgColor: string;
  borderColor: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'autonomous-operations',
    title: 'AI 2026: Autonomous Operations Framework',
    description: 'Build self-healing, self-optimizing systems that reduce manual intervention by 90% and achieve 99.9% uptime.',
    url: '/blog/ai-2026-autonomous-operations-framework',
    type: 'framework',
    metrics: {
      primary: '90%',
      secondary: '99.9%',
      tertiary: '75%'
    },
    color: 'text-indigo-700',
    bgColor: 'bg-gradient-to-r from-indigo-50 to-purple-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'predictive-maintenance',
    title: 'AI 2026: Predictive Maintenance Revolution',
    description: 'Revolutionize maintenance operations with AI-powered analytics that reduce downtime by 85% and costs by 60%.',
    url: '/blog/ai-2026-predictive-maintenance-revolution',
    type: 'revolution',
    metrics: {
      primary: '85%',
      secondary: '60%',
      tertiary: '95%'
    },
    color: 'text-emerald-700',
    bgColor: 'bg-gradient-to-r from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200'
  },
  {
    id: 'responsible-ai-operations',
    title: 'AI 2026: Responsible AI Operations Blueprint',
    description: 'Implement policy-as-code, evals, and incident playbooks to ship reliable AI at scale.',
    url: '/blog/ai-2026-responsible-ai-operations-blueprint',
    type: 'guide',
    metrics: {
      primary: '99.9%',
      secondary: '67%',
      tertiary: '72%'
    },
    color: 'text-purple-700',
    bgColor: 'bg-gradient-to-r from-purple-50 to-indigo-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'cost-optimization',
    title: 'AI 2026: Foundational Models Cost Optimization',
    description: 'Reduce AI infrastructure costs by 30-70% with intelligent routing, caching, and distillation strategies.',
    url: '/blog/ai-2026-foundational-models-cost-optimization-playbook',
    type: 'guide',
    metrics: {
      primary: '30-70%',
      secondary: '2.4x',
      tertiary: '95%'
    },
    color: 'text-orange-700',
    bgColor: 'bg-gradient-to-r from-orange-50 to-red-50',
    borderColor: 'border-orange-200'
  }
];

const typeIcons = {
  framework: BookOpen,
  revolution: Zap,
  guide: Play
};

const typeLabels = {
  framework: 'Framework',
  revolution: 'Revolution',
  guide: 'Playbook'
};

export default function NewContent2026AdvancedBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2026AdvancedBanner_dismissed', 'true');
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2026AdvancedBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];
  const IconComponent = typeIcons[currentItem.type];

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              New Advanced Content
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI 2026: Advanced Operations & Intelligence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover cutting-edge frameworks and revolutionary approaches to autonomous operations, predictive maintenance, and responsible AI implementation.
            </p>
          </div>

          {/* Main Content Carousel */}
          <div 
            className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className={`${currentItem.bgColor} p-8 md:p-12`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${currentItem.bgColor} border ${currentItem.borderColor}`}>
                      <IconComponent className={`w-6 h-6 ${currentItem.color}`} />
                    </div>
                    <span className={`text-sm font-semibold ${currentItem.color}`}>
                      {typeLabels[currentItem.type]}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {currentItem.title}
                  </h3>

                  <p className="text-lg text-gray-600">
                    {currentItem.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${currentItem.color} mb-1`}>
                        {currentItem.metrics.primary}
                      </div>
                      <div className="text-sm text-gray-600">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${currentItem.color} mb-1`}>
                        {currentItem.metrics.secondary}
                      </div>
                      <div className="text-sm text-gray-600">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${currentItem.color} mb-1`}>
                        {currentItem.metrics.tertiary}
                      </div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={currentItem.url}
                      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
                        currentItem.type === 'framework' ? 'bg-indigo-600 hover:bg-indigo-700' :
                        currentItem.type === 'revolution' ? 'bg-emerald-600 hover:bg-emerald-700' :
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Read {typeLabels[currentItem.type]}
                    </Link>
                    <Link
                      href="/content"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    >
                      Explore All Content
                    </Link>
                  </div>
                </div>

                {/* Right Content - Visual */}
                <div className="relative">
                  <div className={`${currentItem.bgColor} rounded-xl p-8 border ${currentItem.borderColor}`}>
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${currentItem.bgColor} border-2 ${currentItem.borderColor} mb-6`}>
                        <IconComponent className={`w-10 h-10 ${currentItem.color}`} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {typeLabels[currentItem.type]} Highlights
                      </h4>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700">Proven implementation framework</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700">Real-world case studies</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700">Step-by-step guidance</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${currentItem.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700">Measurable ROI metrics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <div className="text-sm text-gray-500">
                {currentIndex + 1} of {contentItems.length}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Ready to transform your operations with advanced AI frameworks?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}