import React from 'react';

export default function ContentShowcase() {
  const content = [
    {
      title: "AI Implementation Guide",
      description: "Complete guide to implementing AI in your enterprise",
      category: "Guide",
      readTime: "15 min read"
    },
    {
      title: "Case Study: Manufacturing AI",
      description: "How we helped a manufacturer achieve 40% efficiency gains",
      category: "Case Study",
      readTime: "8 min read"
    },
    {
      title: "Future of Enterprise AI",
      description: "Trends and predictions for enterprise AI adoption",
      category: "Insights",
      readTime: "12 min read"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Featured Content
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {item.category}
              </span>
              <span className="text-sm text-gray-500">{item.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {item.description}
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}