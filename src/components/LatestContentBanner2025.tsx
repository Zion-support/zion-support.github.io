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
      impact: "Zero PII"
    },
    {
      title: "Live Evals & Scorecards",
      description: "Ship GenAI fast without regressions — KPI‑wired canaries",
      slug: "genai-2025-oct-01-eval-scorecards-live-canaries",
      category: "GenAI",
      emoji: "📈",
      highlight: "NEW",
      impact: "No regressions"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Latest Content 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestArticles.map((article, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{article.emoji}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">{article.highlight}</span>
              </div>
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm opacity-90">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner2025;