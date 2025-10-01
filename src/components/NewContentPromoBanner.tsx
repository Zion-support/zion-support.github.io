import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Star } from 'lucide-react';

interface NewContentPromoBannerProps {
  className?: string;
  variant?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  featuredItems?: Array<{ title: string; category: string; link: string; }>;
}

const NewContentPromoBanner: React.FC<NewContentPromoBannerProps> = ({ 
  className: _className = "",
  variant: _variant = "default",
  title: _title,
  description: _description,
  ctaText: _ctaText,
  ctaLink: _ctaLink,
  featuredItems: _featuredItems
}) => {
  const newContent = [
    {
      title: "Real‑Time Decision Engines 2026",
      description: "10M/sec under 1ms using warm pools, intent prefetching, and tiered caches",
      slug: "real-time-decision-engines-2026",
      category: "Platform Engineering",
      icon: "⚡",
      impact: "<1ms Latency",
      savings: "Massive Throughput",
      featured: true,
      trending: true
    },
    {
      title: "Federated Learning 2026",
      description: "Enterprise FL with secure aggregation and DP noise—no centralization required",
      slug: "federated-learning-enterprise-2026",
      category: "Machine Learning",
      icon: "🧩",
      impact: "Zero PII",
      savings: "Regional Training",
      featured: true,
      trending: true
    },
    {
      title: "AI Financial Modeling 2027",
      description: "KPI‑linked evals and rollback for 95%+ accuracy and reliable forecasts",
      slug: "cognitive-financial-modeling-2027",
      category: "FinTech AI",
      icon: "💹",
      impact: "95%+ Accuracy",
      savings: "Risk Controls",
      featured: true,
      trending: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/80 via-purple-900/80 to-slate-900/80 backdrop-blur-lg relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-bold text-yellow-300">BREAKTHROUGH CONTENT</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-300">3 NEW BREAKTHROUGHS</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300">LIMITED TIME</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Revolutionary AI Breakthroughs 2025–2027
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI with <span className="font-bold text-yellow-300">3 breakthrough technologies</span> that are revolutionizing enterprise operations: 
            <span className="block mt-2 text-lg text-cyan-300">
              Meta-Cognitive AI • Quantum-Neural Networks • Autonomous Operations
            </span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {newContent.map((content, _index) => (
            <div
              key={content.slug}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                <div className="flex flex-col gap-2">
                  {content.trending && (
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      <span>TRENDING</span>
                    </div>
                  )}
                  {content.featured && (
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold shadow-lg">
                      <Star className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                  )}
                  <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
                    BREAKTHROUGH
                  </span>
                </div>
              </div>

              {/* Category */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 text-xs font-semibold border border-pink-500/30">
                  {content.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                {content.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {content.description}
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-green-400">{content.impact}</div>
                  <div className="text-xs text-gray-400">Impact</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-blue-400">{content.savings}</div>
                  <div className="text-xs text-gray-400">Savings</div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={`/blog/${content.slug}`}
                className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                <span>Explore Breakthrough</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                🚀 Ready to Transform Your Enterprise?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join 500+ leading organizations already achieving breakthrough results with our revolutionary AI technologies. 
                Get early access to the future of enterprise automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Get Early Access</span>
                </a>
                <a
                  href="/revolutionary-breakthroughs-2025"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore All Breakthroughs</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-300">3</div>
              <div className="text-sm text-gray-400">Revolutionary Breakthroughs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">500+</div>
              <div className="text-sm text-gray-400">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300">$50M+</div>
              <div className="text-sm text-gray-400">Average Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-300">98%</div>
              <div className="text-sm text-gray-400">Automation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromoBanner;