// import React from 'react';
import { Link } from 'react-router-dom';

const ContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      title: "AI Implementation Roadmap 2026",
      description: "Comprehensive guide to implementing AI solutions in your organization",
      type: "Guide",
      href: "/guides/ai-2026-implementation-roadmap",
      icon: "📋"
    },
    {
      title: "Autonomous Business Processes",
      description: "Learn how to automate your business processes with AI",
      type: "Guide", 
      href: "/guides/autonomous-business-processes-implementation-guide-2026",
      icon: "🤖"
    },
    {
      title: "Latest AI Trends",
      description: "Stay updated with the latest developments in artificial intelligence",
      type: "Blog",
      href: "/blog",
      icon: "📰"
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Content & Resources
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access our latest guides, insights, and resources to accelerate your digital transformation
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredContent.map((content, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
            <div className="text-3xl mb-4">{content.icon}</div>
            <div className="mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                {content.type}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{content.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{content.description}</p>
            <Link
              to={content.href}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          to="/blog"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          View All Resources
        </Link>
      </div>
    </div>
  );
};

export default ContentShowcase;