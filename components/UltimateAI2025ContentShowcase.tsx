import React from 'react';
import Link from 'next/link';

const UltimateAI2025ContentShowcase = () => {
  const contentItems = [
    {
      title: "AI 2025: The Revolutionary Breakthrough - Ultimate Success Guide to 2,000% ROI",
      description: "Unlock unprecedented growth with AI 2025's revolutionary breakthroughs. This ultimate guide provides a complete roadmap to achieving 2,000% ROI and transforming your enterprise.",
      type: "Ultimate Guide",
      readingTime: "25 min read",
      metrics: "2,000% ROI",
      url: "/blog/ai-2025-revolutionary-breakthrough-ultimate-success-guide"
    },
    {
      title: "Fortune 500 AI Transformation: $5.2B Annual Savings with 2,000% ROI - Ultimate Success Story",
      description: "Discover how a Fortune 500 manufacturing leader achieved an astounding 2,000% ROI and $5.2 billion in annual savings through a comprehensive AI transformation.",
      type: "Success Story",
      readingTime: "22 min read",
      metrics: "$5.2B Savings",
      url: "/case-studies/fortune-500-ai-transformation-2000-roi-ultimate-success-story"
    },
    {
      title: "AI 2025 Implementation: Ultimate Framework for 2,000% ROI - Complete Resource Guide",
      description: "Master the implementation of AI 2025 technologies with our comprehensive framework. Step-by-step guide to achieving 2,000% ROI and transforming your business operations.",
      type: "Implementation Guide",
      readingTime: "18 min read",
      metrics: "Complete Framework",
      url: "/resources/ai-2025-implementation-ultimate-framework-2000-roi"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Ultimate AI 2025 Content
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Discover our most comprehensive collection of AI 2025 content, featuring breakthrough technologies, proven success stories, and step-by-step implementation guides.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  {item.type}
                </span>
                <span className="text-blue-200 text-sm">{item.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-blue-100 mb-6 line-clamp-3">
                {item.description}
              </p>
              
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <div className="text-sm text-blue-200 mb-1">Key Metric</div>
                <div className="text-lg font-bold text-yellow-400">{item.metrics}</div>
              </div>
              
              <Link 
                href={item.url}
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300"
              >
                Read Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-3xl font-bold mb-2 text-yellow-400">2,000%</h3>
              <p className="text-blue-100">Average ROI Achieved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-3xl font-bold mb-2 text-yellow-400">$5.2B+</h3>
              <p className="text-blue-100">Total Client Savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-3xl font-bold mb-2 text-yellow-400">99.8%</h3>
              <p className="text-blue-100">Efficiency Improvement</p>
            </div>
          </div>
          
          <Link 
            href="/content"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Ultimate Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateAI2025ContentShowcase;