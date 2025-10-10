'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';
interface Slide {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  stats: { value: string; label: string }[];
}
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making',
        'Real-time Insights'
      ],
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '50%', label: 'Cost Reduction' },
        { value: '24/7', label: 'Availability' }
      ]
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Globe,
      features: [
        'Auto-scaling Resources',
        'Global CDN',
        'Disaster Recovery',
        'Security Compliance',
        'Cost Optimization',
        '24/7 Monitoring'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '40%', label: 'Faster Deploy' },
        { value: '60%', label: 'Cost Savings' }
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: Shield,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Continuous Monitoring'
      ],
      stats: [
        { value: '100%', label: 'Secure' },
        { value: '0', label: 'Breaches' },
        { value: '24/7', label: 'Protection' }
      ]
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights and business intelligence',
      icon: TrendingUp,
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Custom Reports',
        'Data Visualization',
        'Business Intelligence',
        'Performance Metrics'
      ],
      stats: [
        { value: '85%', label: 'Better Decisions' },
        { value: '30%', label: 'Revenue Growth' },
        { value: '50%', label: 'Time Saved' }
      ]
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)}, 5000);
    return () => clearInterval(timer)}, [slides.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)};
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)};
  const currentSlideData = slides[currentSlide];
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>
        {/* Carousel */}
        <div className="relative">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md: p-12 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {currentSlideData.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">
              {currentSlideData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our solutions to drive growth and innovation.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center mx-auto">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )};
export default ContentCarousel