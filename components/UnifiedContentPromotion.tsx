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
  publishedDate: string;
  readTime: string;
  category: string;
}

const featuredContent: ContentItem[] = [
  {
  },
  {
    id: '1',
    title: 'AI 2027: Quantum Consciousness Fusion',
    description: 'Revolutionary breakthrough combining quantum computing with consciousness simulation, achieving 100,000x processing speed and genuine artificial awareness capabilities.',
    link: '/blog/ai-2027-quantum-consciousness-fusion',
    badge: 'Quantum Breakthrough',
    badgeColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
    icon: '⚛️',
    publishedDate: 'February 15, 2027',
    readTime: '15 min read',
    category: 'Quantum AI'
  },
  {
    id: '10',
    title: 'E2E AI Tracing 2026: From Prompts to Outcomes',
    description: 'Instrument prompts, tools, calls, budgets, and outcomes. Wire traces to KPI‑linked scorecards for reliable autonomy.',
    link: '/blog/ai-2026-e2e-ai-tracing',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-sky-600',
    icon: '🧭',
    publishedDate: 'January 30, 2026',
    readTime: '12 min read',
    category: 'AI Operations'
  },
  {
    id: '9',
    title: 'Enterprise Autonomy Blueprint 2026: From Pilots to Production',
    description: 'Playbooks for governed, reliable autonomy with budgets, live traces, and rollback.',
    link: '/blog/ai-enterprise-autonomy-blueprint-2026',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    icon: '🧭',
    publishedDate: 'September 30, 2025',
    readTime: '9 min read',
    category: 'AI Operations'
  },
  {
    id: '2',
    title: 'AI 2027: Neuromorphic Quantum Breakthrough',
    description: 'Brain-inspired computing meets quantum physics, achieving 1,000,000x energy efficiency and human-level processing capabilities that surpass neural networks.',
    link: '/blog/ai-2027-neuromorphic-quantum-breakthrough',
    badge: 'Neuromorphic Revolution',
    badgeColor: 'bg-gradient-to-r from-green-600 to-teal-600',
    icon: '🧠',
    publishedDate: 'February 20, 2027',
    readTime: '14 min read',
    category: 'Neuromorphic AI'
  },
  {
    id: '3',
    title: '$2.5B ROI Success: Quantum Neuromorphic AI',
    description: 'Fortune 100 company achieves unprecedented transformation with consciousness-driven AI, delivering $2.5B ROI in 18 months through quantum neuromorphic breakthrough.',
    link: '/case-studies/ai-2027-quantum-neuromorphic-success-story',
    badge: 'Mega Success',
    badgeColor: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    icon: '🏆',
    publishedDate: 'February 25, 2027',
    readTime: '12 min read',
    category: 'Success Story'
  },
  {
    id: '4',
    title: 'AI Operational Resilience 2026: Designing for Failure and Recovery',
    description: 'Blueprint for 99.99% uptime with policy tests, isolation, chaos drills, and auto-remediation.',
    link: '/blog/ai-operational-resilience-2026',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    icon: '🧯',
    publishedDate: 'September 30, 2025',
    readTime: '14 min read',
    category: 'Operations'
  },
  {
    id: '5',
    title: 'AI Agent Observability 2026: Metrics, Traces, and Guardrails',
    description: 'Instrument agents with metrics, traces, and guardrails to ship reliable autonomy with confidence.',
    link: '/blog/ai-agent-observability-2026',
    badge: 'Hot',
    badgeColor: 'bg-gradient-to-r from-pink-600 to-rose-600',
    icon: '🔎',
    publishedDate: 'September 30, 2025',
    readTime: '12 min read',
    category: 'AI Reliability'
  },
  {
    id: '6',
    title: 'AI Operational Excellence: Autonomous Agents Driving 10x Efficiency',
    description: 'How production-grade agents orchestrate operations safely with guardrails and observability.',
    link: '/blog/ai-operational-excellence-agents-2026',
    badge: 'New 2026 Insight',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-sky-600',
    icon: '⚙️',
    publishedDate: 'September 30, 2025',
    readTime: '14 min read',
    category: 'Enterprise Automation'
  },
  {
    id: '7',
    title: 'Intelligent Data Fabric 2026: Real-Time AI for Connected Enterprises',
    description: 'Unify batch, streaming, and unstructured data to power low-latency AI decisions.',
    link: '/blog/ai-intelligent-data-fabric-2026',
    badge: 'New 2026 Guide',
    badgeColor: 'bg-gradient-to-r from-amber-600 to-orange-600',
    icon: '🧩',
    publishedDate: 'September 30, 2025',
    readTime: '15 min read',
    category: 'Data & AI Architecture'
  },
  {
    id: '8',
    title: 'Autonomous Data Governance 2026: Policies-as-Code & Continuous Compliance',
    description: 'Encode policies, enforce at gates, and verify with lineage and audits for safer AI.',
    link: '/blog/ai-2026-autonomous-data-governance',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-teal-600 to-emerald-600',
    icon: '🛡️',
    publishedDate: 'September 30, 2025',
    readTime: '16 min read',
    category: 'Data Governance'
  }
  ,
  {
    id: '11',
    title: 'AI 2026 Agentic Workflow Orchestration',
    description: 'Guardrails, reviews, and online evals for reliable multi-agent workflows that achieve measurable ROI.',
    link: '/blog/ai-2026-agentic-workflow-orchestration',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-fuchsia-600 to-purple-600',
    icon: '🧩',
    publishedDate: 'October 1, 2025',
    readTime: '16 min read',
    category: 'Implementation Guide'
  }
  ,
  {
    id: '12',
    title: 'AI Insights: New Content Highlights — Sept 30, 2025',
    description: 'Today’s newest additions across workflows, data fabric, and resilience—what changed and why it matters.',
    link: '/blog/ai-september-30-2025-new-content-highlights',
    badge: 'Fresh',
    badgeColor: 'bg-gradient-to-r from-sky-600 to-indigo-600',
    icon: '🆕',
    publishedDate: 'September 30, 2025',
    readTime: '8 min read',
    category: 'Featured Article'
  }
  ,
  {
    id: '13',
    title: 'AI Strategic Roadmaps — October 2025',
    description: 'Quarterly plan for governed autonomy, cost-aware routing, and data fabric foundations with milestones and risks.',
    link: '/blog/ai-october-2025-strategic-roadmaps',
    badge: 'Roadmap',
    badgeColor: 'bg-gradient-to-r from-emerald-600 to-green-600',
    icon: '🗺️',
    publishedDate: 'October 1, 2025',
    readTime: '10 min read',
    category: 'Implementation Guide'
  }
];

export default function UnifiedContentPromotion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeContent = featuredContent[activeIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold uppercase tracking-wide">Latest Content & Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Enterprise with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
              Proven AI Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Real-world success stories, breakthrough technologies, and actionable insights
            that drive measurable business results
          </p>
        </div>

        {/* Main Featured Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                {activeContent.icon}
              </div>
              <div>
                <span className={`${activeContent.badgeColor} text-white px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-2`}>
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

            <div className="flex items-center gap-4 text-sm opacity-75">
              <span>{activeContent.publishedDate}</span>
              <span>•</span>
              <span>{activeContent.readTime}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={activeContent.link}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2"
              >
                Read Full Story
                <span className="text-xl">→</span>
              </Link>
              <Link to="/blog"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                Explore All Content
              </Link>
            </div>
          </div>

          {/* Visual Stats */}
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
                $500M+
              </div>
              <div className="text-lg font-semibold mb-1">Client Savings</div>
              <div className="text-sm opacity-75">Total cost reduction</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                95%
              </div>
              <div className="text-lg font-semibold mb-1">Efficiency Gains</div>
              <div className="text-sm opacity-75">Average improvement</div>
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
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              setActiveIndex((current) => (current - 1 + featuredContent.length) % featuredContent.length);
            }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            ←
          </button>

          <div className="flex gap-3">
            {featuredContent.map((_, index) => (
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
              setActiveIndex((current) => (current + 1) % featuredContent.length);
            }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {featuredContent.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setActiveIndex(index)}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                index === activeIndex ? 'border-white/50' : 'border-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className={`${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {item.badge}
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h4>
              <p className="text-sm opacity-75 line-clamp-2">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}