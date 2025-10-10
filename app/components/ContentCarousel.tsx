'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';
interface Slide {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Security Breaches' }
      ]
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Global Support' }
      ]
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  const currentSlideData = slides[currentSlide];
  return (

    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>
{/* Carousel Container */},

>>>>>>> cursor/fix-errors-and-merge-to-main-d277
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}

        </div>
      </div>
    </div>
  );
};
export default ContentCarousel;
  </button>
  </button>
  </button>
  </div>
  </div>
  </div>
  </h2>
  </div>
  </div>
  </any>