import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentPromotionBanner() {
  const featuredContent = [
    {
      title: "Edge Inference Patterns That Actually Reduce Latency",
      category: "AI Infrastructure",
      readTime: "7 min read",
      isNew: true,
    },
    {
      title: "North‑Star Engineering Metrics: Fewer KPIs, Better Outcomes",
      category: "Leadership",
      readTime: "5 min read",
      isNew: true,
    },
    {
      title: "OpenTelemetry in Production: Traces That Engineers Use",
      category: "Observability",
      readTime: "6 min read",
      isNew: true,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured Content
          </h2>
          <p className="text-xl mb-8">
            Discover our latest insights and breakthrough technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-blue-200">
                  {content.category}
                </span>
                {content.isNew && (
                  <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {content.title}
              </h3>
              <p className="text-sm text-blue-100 mb-4">
                {content.readTime}
              </p>
              <Link
                to="/blog"
                className="text-blue-200 hover:text-white font-medium text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
}