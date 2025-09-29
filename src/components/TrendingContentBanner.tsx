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
      title: "AI Platform ROI Scorecards",
      description: "Outcome metrics that drive investment decisions",
      views: "9.1K",
      readTime: "7 min",
      category: "AI Strategy",
      icon: TrendingUp,
      link: "/blog/ai-platform-roi-scorecards-2025",
      badge: "NEW"
    },
    {
      title: "Secure ML Supply Chain",
      description: "SBOMs, attestations, and policy gates",
      views: "10.4K",
      readTime: "8 min",
      category: "Security",
      icon: Shield,
      link: "/blog/secure-ml-supply-chain-attestations-2025",
      badge: "TRENDING"
    },
    {
      title: "Enterprise RAG Blueprint v2",
      description: "Freshness, hybrid search, and evals",
      views: "7.9K",
      readTime: "9 min",
      category: "GenAI",
      icon: Brain,
      link: "/blog/enterprise-rag-blueprint-v2-2025",
      badge: "HOT"
    },
    {
      title: "Serverless Inference Cost Playbook",
      description: "40–70% savings without P95 pain",
      views: "12.1K",
      readTime: "7 min",
      category: "GenAI",
      icon: Zap,
      link: "/blog/serverless-inference-cost-playbook-2025",
      badge: "POPULAR"
    }
  ];

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