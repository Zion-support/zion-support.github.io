import { ArrowRight, Clock, Sparkles, Star, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface LatestContentBannerProps {
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'premium';
  autoRotate?: boolean;
  rotationInterval?: number;
}

const contentHighlights = [
  {
    id: 1,
    title: "🛡️ NEW: AI Risk Register That Actually Drives Action",
    description: "Turn AI risks into tracked mitigations with owners and policy tests",
    ctaText: "Read Playbook",
    ctaLink: "/blog/ai-risk-register-2025",
    badge: "New",
    stats: "7 min read",
    variant: "warning" as const
  },
  {
    id: 2,
    title: "📈 Practical AI Evals That Predict Business Outcomes",
    description: "Design scorecards that correlate with revenue, CSAT, and retention",
    ctaText: "See Scorecards",
    ctaLink: "/blog/practical-evals-scorecards-2025",
    badge: "Featured",
    stats: "6 min read",
    variant: "success" as const
  },
  {
    id: 3,
    title: "💸 Cloud FinOps Guardrails Engineers Actually Use",
    description: "Budgets, alerts, and PR gates that reduce waste 25–40%",
    ctaText: "Cut Spend",
    ctaLink: "/blog/cloud-finops-guardrails-2025",
    badge: "Hot",
    stats: "8 min read",
    variant: "info" as const
  },
  {
    id: 4,
    title: "🧪 RAG Architectures That Work in Production",
    description: "Freshness, hybrid search, and evals that scale",
    ctaText: "Read Guide",
    ctaLink: "/blog/practical-rag-in-production-2025",
    badge: "Popular",
    stats: "8 min read",
    variant: "premium" as const
  },
  {
    id: 5,
    title: "🧰 Serverless Inference Cost Playbook",
    description: "Adaptive batching, warm pools, and quality tiers without P95 pain",
    ctaText: "Optimize",
    ctaLink: "/blog/serverless-inference-cost-playbook-2025",
    badge: "Guide",
    stats: "7 min read",
    variant: "success" as const
  }
  ,
  {
    id: 5,
    title: "🧭 PLAYBOOK: AI Sales Copilot (90‑Day Plan)",
    description: "Workflows, guardrails, and KPIs to lift win‑rates with an AI copilot",
    ctaText: "Read Playbook",
    ctaLink: "/blog/ai-sales-copilot-playbook-2025",
    badge: "New",
    stats: "8 min read",
    variant: "info" as const
  },
  {
    id: 6,
    title: "🧭 NEW: AI Platform Engineering 2025",
    description: "Golden paths, eval systems, and governance for safe, fast AI delivery",
    ctaText: "Read Guide",
    ctaLink: "/blog/ai-platform-engineering-2025",
    badge: "Long‑Form",
    stats: "10 min read",
    variant: "info" as const
  },
  {
    id: 7,
    title: "🔍 AI Agent Observability",
    description: "Traces, policy tests, and human feedback that keep quality high",
    ctaText: "Learn How",
    ctaLink: "/blog/ai-agent-observability-2025",
    badge: "Featured",
    stats: "7 min read",
    variant: "success" as const
  },
  {
    id: 8,
    title: "🛡️ Secure RAG 2025",
    description: "Authorization-aware retrieval and prompt firewalls for enterprise RAG",
    ctaText: "See Patterns",
    ctaLink: "/blog/secure-rag-2025",
    badge: "Security",
    stats: "8 min read",
    variant: "warning" as const
  }
  ,
  {
    id: 8,
    title: "📚 New: AI Platform ROI + Secure ML Supply Chain",
    description: "Fresh long-form guides on platform scorecards and end-to-end ML provenance.",
    ctaText: "Read Now",
    ctaLink: "/blog/ai-platform-roi-2025",
    badge: "New",
    stats: "Featured",
    variant: "info" as const
  }
];

// Additions
contentHighlights.push(
  {
    id: 9,
    title: "🧠 Enterprise RAG Blueprint v2",
    description: "Hybrid search, freshness, and auth-aware retrieval with layered evals.",
    ctaText: "Read Guide",
    ctaLink: "/blog/enterprise-rag-blueprint-2025",
    badge: "New",
    stats: "9 min read",
    variant: "premium" as const
  },
  {
    id: 10,
    title: "💸 FinOps Scorecards Engineers Use",
    description: "Guardrails and PR checks that cut cloud waste 25–40%.",
    ctaText: "See Playbook",
    ctaLink: "/blog/finops-scorecards-2025",
    badge: "Featured",
    stats: "6 min read",
    variant: "success" as const
  },
  {
    id: 11,
    title: "💸 Cloud FinOps Guardrails Engineers Actually Use",
    description: "Budgets, alerts, and PR gates that reduce waste 25–40%",
    ctaText: "Cut Spend",
    ctaLink: "/blog/cloud-finops-guardrails-2025",
    badge: "Hot",
    stats: "6 min read",
    variant: "info" as const
  },
  {
    id: 12,
    title: "📈 Practical AI Evals That Predict Business Outcomes",
    description: "Scorecards that correlate with revenue, CSAT, and retention",
    ctaText: "See Scorecards",
    ctaLink: "/blog/practical-evals-scorecards-2025",
    badge: "Featured",
    stats: "6 min read",
    variant: "success" as const
  },
  {
    id: 13,
    title: "🧰 Serverless Inference Cost Playbook",
    description: "Adaptive batching, warm pools, and quality tiers without P95 pain",
    ctaText: "Optimize",
    ctaLink: "/blog/serverless-inference-cost-playbook-2025",
    badge: "Guide",
    stats: "7 min read",
    variant: "success" as const
  }
);

export const LatestContentBanner: React.FC<LatestContentBannerProps> = ({
  className = "",
  variant = 'default',
  autoRotate = true,
  rotationInterval = 8000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % contentHighlights.length
      );
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentContent = contentHighlights[currentIndex];

  const variantStyles = {
    default: 'bg-gradient-to-r from-blue-600 to-purple-600',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',
    warning: 'bg-gradient-to-r from-orange-600 to-red-600',
    info: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    premium: 'bg-gradient-to-r from-purple-600 to-pink-600'
  };

  const getVariantStyle = (contentVariant: string) => {
    switch (contentVariant) {
      case 'success': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      case 'warning': return 'bg-gradient-to-r from-orange-600 to-red-600';
      case 'info': return 'bg-gradient-to-r from-cyan-600 to-blue-600';
      case 'premium': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      default: return variantStyles[variant];
    }
  };

  return (
    <div className={`relative overflow-hidden ${getVariantStyle(currentContent.variant)} ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <Sparkles className="w-6 h-6 text-white animate-pulse" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-20">
        <TrendingUp className="w-5 h-5 text-white animate-bounce" />
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Star className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white truncate">
                    {currentContent.title}
                  </h3>
                  <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full font-medium backdrop-blur-sm">
                    {currentContent.badge}
                  </span>
                </div>
                <p className="text-sm text-white/90 mb-2">
                  {currentContent.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-white/80">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {currentContent.stats}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Updated today
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 ml-4">
              <Link
                to={currentContent.ctaLink}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-2 shadow-lg"
              >
                {currentContent.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Dismiss banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          {autoRotate && (
            <div className="flex justify-center space-x-2 mt-3">
              {contentHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to content ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner;