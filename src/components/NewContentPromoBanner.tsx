import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  BookOpen, 
  TrendingUp, 
  Zap,
  Shield,
  Cloud,
  Brain,
  Star
} from 'lucide-react';

interface NewContentPromoBannerProps {
  variant?: 'info' | 'premium' | 'success' | 'warning';
  className?: string;
}

const NewContentPromoBanner: React.FC<NewContentPromoBannerProps> = ({ 
  variant = 'premium', 
  className = '' 
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const variants = {
    info: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400/30',
    premium: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400/30',
    success: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400/30',
    warning: 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-400/30'
  };

  const featuredContent = [
    {
      title: "AI-Powered DevOps 2025",
      description: "Transform your development pipeline with intelligent automation",
      icon: Cloud,
      link: "/blog/ai-powered-devops-2025",
      category: "DevOps & AI",
      badge: "NEW"
    },
    {
      title: "Sustainable AI Computing 2025",
      description: "Green technology practices for energy-efficient AI",
      icon: Shield,
      link: "/blog/sustainable-ai-computing-2025",
      category: "Sustainability",
      badge: "NEW"
    },
    {
      title: "AI Security Best Practices 2025",
      description: "Essential security practices for protecting AI systems",
      icon: Shield,
      link: "/blog/ai-security-best-practices-2025",
      category: "Security",
      badge: "NEW"
    },
    {
      title: "AI Safety Budgets 2026",
      description: "Guardrails wired to KPIs, approvals, rollbacks",
      icon: Shield,
      link: "/blog/ai-safety-budgets-2026",
      category: "AI Strategy"
    },
    {
      title: "AI Automation Trends 2025",
      description: "The future of autonomous systems and intelligent automation",
      icon: Brain,
      link: "/blog/ai-automation-trends-2025",
      category: "AI & Automation"
    },
    {
      title: "Edge Privacy for ML 2026",
      description: "On‑device filters and scoped identifiers",
      icon: Cloud,
      link: "/blog/edge-privacy-ml-2026",
      category: "Edge"
    },
    {
      title: "Agent Evals in Prod 2026",
      description: "Online checks that predict outcomes",
      icon: TrendingUp,
      link: "/blog/agent-evals-in-prod-2026",
      category: "GenAI"
    },
    {
      title: "Cost‑Aware Inference 2026",
      description: "Warm pools and quality tiers under SLAs",
      icon: Zap,
      link: "/blog/ai-cost-aware-inference-2026",
      category: "GenAI"
    },
    {
      title: "Quantum AI Breakthrough 2026",
      description: "Revolutionary advances in quantum computing and AI",
      icon: Brain,
      link: "/blog/quantum-ai-breakthrough-2026",
      category: "Quantum AI"
    },
    {
      title: "Zero‑Trust Observability 2026",
      description: "Signed traces and least‑privilege telemetry",
      icon: Shield,
      link: "/blog/zero-trust-observability-2026",
      category: "Security"
    },
    {
      title: "AI Incident Response Playbooks",
      description: "Contain incidents in under 60 seconds",
      icon: TrendingUp,
      link: "/blog/ai-incident-response-playbooks-2025",
      category: "Security"
    },
    {
      title: "Edge Privacy Telemetry 2026",
      description: "Scoped IDs and on‑device redaction",
      icon: Brain,
      link: "/blog/edge-privacy-telemetry-2026",
      category: "Observability"
    }
  ];

  if (isDismissed) return null;

  return (
    <div className={`${variants[variant]} ${className} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <span className="text-lg font-bold">🚀 NEW CONTENT ALERT</span>
              <Star className="w-5 h-5 animate-spin" />
            </div>
            
            <h3 className="text-xl font-bold mb-2">
              Just Published: Essential AI Guides for 2025-2026
            </h3>
            
            <p className="text-white/90 mb-4 text-sm">
              Explore our latest articles on AI-powered DevOps, sustainable computing, security best practices,
              and cutting-edge innovations transforming the tech landscape.
            </p>

            {/* Featured content grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {featuredContent.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-white/80" />
                      <span className="text-xs font-medium text-white/80">{item.category}</span>
                    </div>
                    <h4 className="font-semibold text-white text-sm group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/70 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="bg-white text-purple-600 hover:bg-white/90 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Read All Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                View Case Studies
              </Link>

              <Link
                href="/services"
                className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <span className="font-semibold">16</span>
                <span>New Articles</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">3</span>
                <span>Fresh This Week</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">50+</span>
                <span>Expert Insights</span>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;