'use client';

import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026 = () => {
  const contentItems = [
    {
      id: 1,
      title: "AI 2026: Revolutionary Trends",
      description: "Discover the groundbreaking AI trends that will reshape industries in 2026. From quantum AI to neural interfaces, explore the future of artificial intelligence.",
      type: "Blog Post",
      link: "/blog/ai-2026-revolutionary-trends",
      image: "🚀",
      color: "from-blue-500 to-purple-500",
      readTime: "15 min read",
      publishDate: "Jan 17, 2025"
    },
    {
      id: 2,
      title: "Global Logistics AI Transformation",
      description: "How a Fortune 500 logistics company achieved 40% cost reduction and 60% efficiency gain with AI-driven automation.",
      type: "Case Study",
      link: "/case-studies/ai-transformation-global-logistics-2026",
      image: "📊",
      color: "from-green-500 to-blue-500",
      readTime: "12 min read",
      publishDate: "Jan 17, 2025"
    },
    {
      id: 3,
      title: "AI Implementation Checklist 2026",
      description: "The ultimate checklist for AI implementation in 2026. Ensure your AI projects succeed with our comprehensive, step-by-step guide.",
      type: "Resource",
      link: "/resources/ai-implementation-checklist-2026",
      image: "📋",
      color: "from-purple-500 to-pink-500",
      readTime: "8 min read",
      publishDate: "Jan 17, 2025"
    },
    {
      id: 4,
      title: "AI 2026 Masterclass",
      description: "Join our exclusive live webinar on February 15th and learn how to implement cutting-edge AI solutions that drive real business results.",
      type: "Webinar",
      link: "/webinars/ai-2026-masterclass",
      image: "🎓",
      color: "from-orange-500 to-red-500",
      readTime: "2 hours",
      publishDate: "Feb 15, 2025"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest content on AI trends, case studies, 
            and implementation guides for 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.image}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{item.readTime}</span>
                  <span>{item.publishDate}</span>
                </div>
                
                <Link
                  href={item.link}
                  className={`block w-full text-center py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${item.color} hover:opacity-90 transition-opacity`}
                >
                  {item.type === 'Webinar' ? 'Register Now' : 'Read More'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            View All Content
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;