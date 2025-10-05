import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      icon: "🛡️",
      link: "/blog/ai-safety-budgets-2026"
    },
    {
      title: "Edge Inference Patterns",
      description: "Actually reduce latency with proven frameworks",
      icon: "⚡",
      link: "/blog/edge-inference-patterns"
    },
    {
      title: "North-Star Engineering Metrics",
      description: "Fewer KPIs, better outcomes",
      icon: "⭐",
      link: "/blog/north-star-engineering-metrics"
    }
  ];

  if (isDismissed) return null;

  return (
    <div className={`${variants[variant]} border rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <div>
              <h3 className="font-bold text-lg">New Content Available</h3>
              <p className="text-sm opacity-90">Latest AI insights and breakthrough technologies</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {featuredContent.map((content, index) => (
              <Link
                key={index}
                to={content.link}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="text-lg">{content.icon}</span>
                <div>
                  <div className="text-sm font-semibold">{content.title}</div>
                  <div className="text-xs opacity-80">{content.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/blog"
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Explore All
          </Link>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-white/80 hover:text-white text-xl"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;