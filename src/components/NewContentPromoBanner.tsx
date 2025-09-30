import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Star, Rocket, Brain, Atom, Bot, Shield } from 'lucide-react';

const NewContentPromoBanner: React.FC = () => {
  const newContent = [
    {
      title: "AI Governance Risk Budgets 2026",
      description: "Owners, SLAs, rollback triggers",
      icon: Shield,
      link: "/blog/ai-governance-risk-budgets-2026",
      category: "AI Governance"
    },
    {
      title: "Privacy‑First Feature Flags 2026",
      description: "Geo budgets, instant rollback",
      icon: Zap,
      link: "/blog/privacy-first-feature-flags-2026",
      category: "Architecture"
    },
    {
      title: "Reliable Agent Actions 2026",
      description: "Deterministic tools and traces",
      icon: TrendingUp,
      link: "/blog/reliable-agent-actions-2026",
      category: "GenAI"
    },
    {
      title: "Secure ML Supply Chain 2026",
      description: "SBOMs and attestations",
      icon: Brain,
      link: "/blog/secure-ml-supply-chain-2026",
      category: "Security"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-6 rounded-lg mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Fresh Content Just Dropped
          </h2>
          <p className="text-blue-100">
            Explore our latest insights on AI governance, privacy-first architecture, and reliable agent systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {newContent.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <item.icon className="w-5 h-5 text-blue-200" />
                <span className="text-xs font-medium text-blue-200 uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
              <h3 className="font-semibold text-white mb-1 text-sm">
                {item.title}
              </h3>
              <p className="text-blue-100 text-xs mb-3">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-flex items-center gap-1 text-blue-200 hover:text-white text-xs font-medium transition-colors"
              >
                Read more
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            <Rocket className="w-4 h-4" />
            Explore All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;