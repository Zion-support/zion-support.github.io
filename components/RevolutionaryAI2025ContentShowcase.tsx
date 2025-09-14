import React from 'react';
import Link from 'next/link';

const RevolutionaryAI2025ContentShowcase = () => {
  const contentItems = [
    {
      title: "AI 2025: The Revolutionary Breakthrough - Ultimate Success Guide to 2,000% ROI",
      description: "Unlock unprecedented growth with AI 2025's revolutionary breakthroughs. This ultimate guide provides a complete roadmap to achieving 2,000% ROI and transforming your enterprise.",
      type: "Blog Post",
      readingTime: "25 min read",
      tags: ["AI Revolution"Business Transformation"ROI"Fortune 500"],
      url: "/blog/ai-2025-revolutionary-breakthrough-ultimate-success-guide"
    },
    {
      title: "Fortune 500 AI Transformation: $5.2B Annual Savings with 2,000% ROI - Ultimate Success Story",
      description: "Discover how a Fortune 500 manufacturing leader achieved an astounding 2,000% ROI and $5.2 billion in annual savings through a comprehensive AI transformation.",
      type: "Case Study",
      readingTime: "22 min read",
      tags: ["Fortune 500"AI Transformation"ROI Success"Manufacturing"],
      url: "/case-studies/fortune-500-ai-transformation-2000-roi-ultimate-success-story"
    },
    {
      title: "AI 2025 Implementation: Ultimate Framework for 2,000% ROI - Complete Resource Guide",
      description: "Master the implementation of AI 2025 technologies with our comprehensive framework. Step-by-step guide to achieving 2,000% ROI and transforming your business operations.",
      type: "Resource",
      readingTime: "18 min read",
      tags: ["Implementation"Framework"ROI"AI 2025"],
      url: "/resources/ai-2025-implementation-ultimate-framework-2000-roi"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI 2025 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI 2025 contentfeaturing breakthrough technologiesuccess storiesand implementation guides.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contentItems.map((itemindex) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readingTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={item.url}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/content"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025ContentShowcase;