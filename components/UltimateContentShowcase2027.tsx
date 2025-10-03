'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  badge: string;
  badgeColor: string;
  icon: string;
  category: string;
  roi?: string;
  timeframe?: string;
}

const ultimateContent: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2027: Autonomous Enterprise Revolution',
    description: 'Discover how autonomous AI systems are revolutionizing enterprise operations, delivering 95% automation rates and $2.5B+ ROI.',
    link: '/blog/ai-2027-autonomous-enterprise-revolution',
    badge: 'REVOLUTIONARY',
    badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    icon: '🚀',
    category: 'Enterprise AI',
    roi: '$2.5B+',
    timeframe: '18 months'
  },
  {
    id: '2',
    title: '$1.2B Success Story: AI Revolutionary Breakthrough',
    description: 'Fortune 100 company achieves unprecedented transformation through AI 2027 breakthrough technology.',
    link: '/case-studies/ai-2027-revolutionary-breakthrough-success',
    badge: 'MEGA SUCCESS',
    badgeColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    icon: '🏆',
    category: 'Success Story',
    roi: '$1.2B',
    timeframe: '18 months'
  },
  {
    id: '3',
    title: 'Neural Architecture Search: 2026 Breakthrough',
    description: 'Revolutionary NAS technology delivering 300-500% performance improvements and 95% energy efficiency gains.',
    link: '/blog/ai-2026-neural-architecture-search-breakthrough',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    icon: '🧠',
    category: 'AI Development',
    roi: '$200M',
    timeframe: '12 months'
  },
  {
    id: '4',
    title: 'Federated Learning: Privacy-First AI',
    description: 'Transform AI capabilities with privacy-preserving federated learning delivering 300% performance improvements.',
    link: '/blog/ai-2026-federated-learning-enterprise-breakthrough',
    badge: 'PRIVACY-FIRST',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    icon: '🔒',
    category: 'Privacy AI',
    roi: '$150M',
    timeframe: '15 months'
  },
  {
    id: '5',
    title: 'Quantum AI 2027: Consciousness Fusion',
    description: 'Revolutionary breakthrough combining quantum computing with consciousness simulation, achieving 100,000x processing speed.',
    link: '/blog/ai-2027-quantum-consciousness-fusion',
    badge: 'QUANTUM',
    badgeColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    icon: '⚛️',
    category: 'Quantum AI',
    roi: '$3B+',
    timeframe: '24 months'
  },
  {
    id: '6',
    title: 'Neuromorphic Computing: Brain-Inspired AI',
    description: 'Brain-inspired computing meets quantum physics, achieving 1,000,000x energy efficiency and human-level processing.',
    link: '/blog/ai-2027-neuromorphic-computing-breakthrough',
    badge: 'NEUROMORPHIC',
    badgeColor: 'bg-gradient-to-r from-teal-600 to-green-600',
    icon: '🧬',
    category: 'Neuromorphic AI',
    roi: '$2.5B',
    timeframe: '20 months'
  }
];

export default function UltimateContentShowcase2027() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % ultimateContent.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeContent = ultimateContent[activeIndex];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold uppercase tracking-wide">Ultimate Content Showcase 2027</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
              Transforms Enterprises
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough technologies, proven success stories, and actionable insights 
            that deliver measurable business transformation
          </p>
        </div>

        {/* Main Featured Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl">
                {activeContent.icon}
              </div>
              <div>
                <span className={`${activeContent.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-2`}>
                  {activeContent.badge}
                </span>
                <p className="text-sm opacity-75">{activeContent.category}</p>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              {activeContent.title}
            </h3>

            <p className="text-lg opacity-90 leading-relaxed">
              {activeContent.description}
            </p>

            {/* ROI Stats */}
            {activeContent.roi && (
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-green-300 mb-1">{activeContent.roi}</div>
                  <div className="text-sm opacity-75">Proven ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-blue-300 mb-1">{activeContent.timeframe}</div>
                  <div className="text-sm opacity-75">Implementation</div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={activeContent.link}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2"
              >
                Read Full Story
                <span className="text-xl">→</span>
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                Explore All Content
              </Link>
            </div>
          </div>

          {/* Visual Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
                300%
              </div>
              <div className="text-lg font-semibold mb-1">Average ROI</div>
              <div className="text-sm opacity-75">Proven across 200+ clients</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                $5B+
              </div>
              <div className="text-lg font-semibold mb-1">Total Client Savings</div>
              <div className="text-sm opacity-75">Cumulative cost reduction</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                95%
              </div>
              <div className="text-lg font-semibold mb-1">Automation Rate</div>
              <div className="text-sm opacity-75">Average enterprise level</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">
                6 mo
              </div>
              <div className="text-lg font-semibold mb-1">ROI Timeline</div>
              <div className="text-sm opacity-75">Average payback period</div>
            </div>
          </div>
        </div>

        {/* Content Carousel Indicators */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              setActiveIndex((current) => (current - 1 + ultimateContent.length) % ultimateContent.length);
            }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            ←
          </button>

          <div className="flex gap-3">
            {ultimateContent.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-white'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              setIsAutoPlaying(false);
              setActiveIndex((current) => (current + 1) % ultimateContent.length);
            }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultimateContent.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setActiveIndex(index)}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                index === activeIndex ? 'border-white/50' : 'border-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <span className={`${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {item.badge}
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h4>
              <p className="text-sm opacity-75 line-clamp-2 mb-3">{item.description}</p>
              {item.roi && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-300 font-bold">{item.roi} ROI</span>
                  <span className="opacity-75">{item.timeframe}</span>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg opacity-75 mb-6">
            Ready to achieve similar breakthrough results for your enterprise?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Transformation
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}