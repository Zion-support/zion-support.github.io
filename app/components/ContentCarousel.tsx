'use client';

import React, { use State, use Effect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  icon: React.Component Type<any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentCarousel: React.FC = () => {
  const [current Slide, set Current Slide] = use State(0);

  const slides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10 x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }]
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100 ms', label: 'Response Time' },
        { value: '10 M+', label: 'Requests/Day' }]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Security Breaches' }]
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Global Support' }]
    }
  ];

  const next Slide = () => {
    set Current Slide((prev) => (prev + 1) % slides.length);
  };

  const prev Slide = () => {
    set Current Slide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  use Effect(() => {
    const timer = set Interval(next Slide, 5000);
    return () => clear Interval(timer);
  }, []);

  const current Slide Data = slides[current Slide];

  return (
    <div className="bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7 xlmx-auto">
        {/* Header */}
        <div className="text-centermb-16">
          <h2 className="text-3 xlmd:text-4 xl font-bold text-white mb-6">
            Discover Our <span className="text-transparentbg-clip-textbg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lgrounded-2 xl p-8 md:p-12 border border-white/20 overflow-hidden">
            <div className="gridgrid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="flexitems-centergap-4">
                  <div className="w-16 h-16bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <currentSl ide Data.icon className="w-8 h-8text-white" />
                  </div>
                  <div>
                    <h3 className="text-2 xlmd:text-3 xl font-bold text-white mb-2">
                      {current Slide Data.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {current Slide Data.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lgfont-semiboldtext-white mb-4">Key Features:</h4>
                  <div className="gridgrid-cols-1 sm:grid-cols-2 gap-3">
                    {current Slide Data.features.map((feature, index) => (
                      <divkey={index} className="flexitems-centerspace-x-3">
                        <CheckCircle className="w-5 h-5text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                {current Slide Data.stats && (
                  <div className="gridgrid-cols-3 gap-6">
                    {current Slide Data.stats.map((stat, index) => (
                      <divkey={index} className="text-center">
                        <div className="text-2 xlfont-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flexflex-colsm:flex-row gap-4">
                  <but ton className="inline-flexitems-centergap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Zap className="w-5 h-5" />
                    Get Started
                  </butn>
                  <but ton className="inline-flexitems-centergap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                  </butn>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-squarebg-gradient-to-brfrom-purple-500/20 to-blue-500/20 rounded-2 xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <currentSl ide Data.icon className="w-16 h-16text-white" />
                    </div>
                    <div className="text-4 xlfont-bold text-white mb-2">
                      {current Slide Data.title}
                    </div>
                    <div className="text-gray-300">
                      Slide {current Slide + 1} of {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <but tonon Click={prev Slide}
            className="absoluteleft-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </butn>
          <but tonon Click={next Slide}
            className="absoluteright-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </butn>

          {/* Dots Indicator */}
          <div className="flexjustify-centermt-8 space-x-2">
            {slides.map((_, index) => (
              <but tonkey={index}
                on Click={() => set Current Slide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === current Slide ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="gridgrid-cols-1 md:grid-cols-3 gap-8 max-w-4 xl mx-auto">
            <div className="flexitems-centerjustify-center gap-3 text-white">
              <Star className="w-6 h-6text-yellow-400" />
              <div className="text-left">
                <div className="text-2 xlfont-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>
            <div className="flexitems-centerjustify-center gap-3 text-white">
              <Users className="w-6 h-6text-blue-400" />
              <div className="text-left">
                <div className="text-2 xlfont-bold">10,000+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
            </div>
            <div className="flexitems-centerjustify-center gap-3 text-white">
              <TrendingUp className="w-6 h-6text-green-400" />
              <div className="text-left">
                <div className="text-2 xlfont-bold">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;