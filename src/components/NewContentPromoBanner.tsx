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
      title: "AI Safety Budgets 2026",
      description: "Guardrails wired to KPIs, approvals, rollbacks",
      icon: Shield,
      link: "/blog/ai-safety-budgets-2026",
      category: "AI Strategy"
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
      icon: Brain,
      link: "/blog/agent-evals-prod-2026",
      category: "GenAI"
    }
  ];

  if (isDismissed) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-lg ${variants[variant]} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full filter blur-2xl"></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">NEW CONTENT</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">BREAKTHROUGH</span>
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

        {/* Main Content */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">
            🚀 Revolutionary AI Breakthroughs 2026
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Discover the latest breakthrough technologies: Meta-Cognitive AI (95% decision accuracy), 
            Quantum-Neural Networks (1000x speed), and Autonomous Operations (98% automation).
          </p>

          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <content.icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{content.category}</span>
                </div>
                <h3 className="font-bold mb-1">{content.title}</h3>
                <p className="text-sm opacity-80">{content.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/blog"
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl px-6 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-white/90 rounded-xl px-6 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              <Star className="w-4 h-4" />
              <span>Get Early Access</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm opacity-80">AI Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">1000x</div>
            <div className="text-sm opacity-80">Speed Boost</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">$50M+</div>
            <div className="text-sm opacity-80">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm opacity-80">Automation Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;