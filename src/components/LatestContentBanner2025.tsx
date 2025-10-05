import React from 'react';

const LatestContentBanner2025: React.FC = () => {
  const latestArticles = [
    {
      title: "AI 2026 Mega Breakthrough Revolution",
      description: "Meta-Cognitive AI, Quantum-Neural Networks, Autonomous Operations - $50M+ Annual Savings",
      slug: "ai-2026-mega-breakthrough-revolution",
      category: "Revolutionary AI",
      emoji: "🚀",
      highlight: "BREAKTHROUGH",
      impact: "$50M+ Savings"
    },
    {
      title: "Zero‑PII Telemetry v2",
      description: "Decision‑grade signals without centralized IDs — privacy‑first analytics",
      slug: "edge-2025-oct-01-zero-pii-telemetry-v2",
      category: "Observability",
      emoji: "🛡️",
      highlight: "NEW",
      impact: "Privacy-First"
    },
    {
      title: "Quantum Edge Computing Revolution",
      description: "Sub-millisecond processing with 200-250x speed improvements in enterprise applications",
      slug: "quantum-edge-computing-revolution-2025",
      category: "Quantum Computing",
      emoji: "⚡",
      highlight: "REVOLUTIONARY",
      impact: "200x Faster"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🔥 LATEST CONTENT 2025</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Latest Content Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover the most recent breakthroughs in AI, quantum computing, and enterprise solutions that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{article.emoji}</div>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  {article.highlight}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{article.impact}</div>
                  <div className="text-sm text-blue-200">Impact</div>
                </div>
                <div className="text-sm text-blue-300">
                  {article.category}
                </div>
              </div>

              <a
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors group-hover:bg-white/30"
              >
                Read Full Article
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/blog"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
          >
            Explore All Latest Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner2025;