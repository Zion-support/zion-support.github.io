import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  ArrowRight, 
  Eye, 
  Clock, 
  Star,
  BookOpen,
  Zap,
  Brain,
  Cloud,
  Shield
} from 'lucide-react';

const TrendingContentBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingItems = [
    {
      title: "AI Autonomous Infrastructure 2026",
      description: "Self‑healing, self‑optimizing, self‑scaling platforms with budgets.",
      views: "12.4K",
      readTime: "9 min",
      category: "Platform Engineering",
      icon: TrendingUp,
      link: "/blog/ai-autonomous-infrastructure-2026",
      badge: "HOT"
    },
    {
      title: "AI Safety Budgets 2026",
      description: "Budgeted actions, approvals, and rollbacks that keep AI features safe.",
      views: "13.2K",
      readTime: "7 min",
      category: "AI Governance",
      icon: Shield,
      link: "/blog/ai-safety-budgets-2026",
      badge: "NEW"
    },
    {
      title: "Edge Personalization 2026",
      description: "Private, sub‑100ms personalization with signed configs and caches.",
      views: "9.7K",
      readTime: "8 min",
      category: "Edge Computing",
      icon: Zap,
      link: "/blog/edge-personalization-2026",
      badge: "HOT"
    },
    {
      title: "Zero‑Trust for GenAI 2026",
      description: "Prompt firewalls, egress, signed outputs for safe GenAI.",
      views: "11.8K",
      readTime: "8 min",
      category: "Security",
      icon: Shield,
      link: "/blog/zero-trust-for-genai-2026",
      badge: "NEW"
    },
    {
      title: "Zero‑Trust for GenAI 2026",
      description: "Prompt firewalls, egress controls, and signed outputs at scale.",
      views: "10.9K",
      readTime: "7 min",
      category: "Security",
      icon: Shield,
      link: "/blog/zero-trust-for-genai-2026",
      badge: "TRENDING"
    },
    {
      title: "Quantum‑AI Hybrid Blueprint 2026",
      description: "Near‑term wins by combining QC libs with AI orchestration.",
      views: "9.1K",
      readTime: "8 min",
      category: "Quantum",
      icon: Brain,
      link: "/blog/quantum-ai-hybrid-blueprint-2026",
      badge: "NEW"
    },
    {
      title: "Edge LLM Caching Blueprint 2026",
      description: "Sub‑100ms prompts via tiered caches and freshness windows.",
      views: "8.9K",
      readTime: "6 min",
      category: "Architecture",
      icon: Zap,
      link: "/blog/edge-llm-caching-blueprint-2026",
      badge: "POPULAR"
    }
  ];

  // Newly promoted items
  trendingItems.push(
    {
      title: "AI Data Lineage for GenAI 2026",
      description: "Trace prompts, datasets, and outputs with signed SBOMs and lineage.",
      views: "7.4K",
      readTime: "7 min",
      category: "AI Governance",
      icon: Shield,
      link: "/blog/ai-data-lineage-for-genai-2026",
      badge: "NEW"
    },
    {
      title: "Edge Secure Feature Stores 2026",
      description: "Sub‑100ms private features with signed configs and on‑device caches.",
      views: "6.8K",
      readTime: "6 min",
      category: "Architecture",
      icon: Zap,
      link: "/blog/edge-secure-feature-stores-2026",
      badge: "HOT"
    },
    {
      title: "LLM Evaluation Playbooks 2026",
      description: "Online canaries and KPI‑linked scorecards that predict outcomes.",
      views: "8.1K",
      readTime: "8 min",
      category: "AI Strategy",
      icon: TrendingUp,
      link: "/blog/llm-evaluation-playbooks-2026",
      badge: "TRENDING"
    }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [trendingItems.length]);

  const currentItem = trendingItems[currentIndex];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'HOT': return 'bg-red-500 text-white';
      case 'NEW': return 'bg-green-500 text-white';
      case 'TRENDING': return 'bg-blue-500 text-white';
      case 'POPULAR': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const Icon = currentItem.icon;

  return (
    <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:shadow-2xl transition-all duration-500 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-zion-cyan animate-pulse" />
              <span className="text-sm font-semibold text-zion-cyan">TRENDING NOW</span>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(currentItem.badge)} animate-bounce`}>
              {currentItem.badge}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-zion-blue/20 p-3 rounded-lg group-hover:bg-zion-blue/30 transition-colors">
              <Icon className="w-6 h-6 text-zion-cyan group-hover:scale-110 transition-transform" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-zion-slate-light uppercase tracking-wider">
                  {currentItem.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {currentItem.title}
              </h3>
              
              <p className="text-zion-slate-light text-sm mb-3">
                {currentItem.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-zion-slate-light">
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{currentItem.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{currentItem.readTime} read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <Link
            to={currentItem.link}
            className="bg-zion-cyan text-white hover:bg-zion-blue-light px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group/btn"
          >
            <BookOpen className="w-4 h-4" />
            Read Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          {/* Navigation dots */}
          <div className="flex gap-2">
            {trendingItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-zion-cyan scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full bg-white/10 rounded-full h-1">
        <div 
          className="bg-gradient-to-r from-zion-cyan to-zion-blue-light h-1 rounded-full transition-all duration-100 ease-linear"
          style={{ width: `${((currentIndex + 1) / trendingItems.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default TrendingContentBanner;