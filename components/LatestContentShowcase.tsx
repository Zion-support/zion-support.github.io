import React from 'react';
import Link from 'next/link';

export default function LatestContentShowcase() {
  const latestContent = [
    {
      title: "Advanced AI Architecture 2025",
      description: "Master the art of building scalable, resilient AI systems with microservices, edge computing, and MLOps.",
      href: "/blog/ai-2025-advanced-ai-architecture",
      category: "Architecture",
      readTime: "15 min read",
      date: "Jan 15, 2025",
      icon: "🏗️",
      color: "blue",
      featured: true
    },
    {
      title: "AI Automation Revolution",
      description: "Discover how AI automation is transforming industries and creating new opportunities for meaningful work.",
      href: "/blog/ai-2025-automation-revolution",
      category: "Automation",
      readTime: "12 min read",
      date: "Jan 16, 2025",
      icon: "🤖",
      color: "green",
      featured: true
    },
    {
      title: "Manufacturing Transformation Success",
      description: "See how a Fortune 500 manufacturing company achieved 30% efficiency gains through AI transformation.",
      href: "/case-studies/ai-manufacturing-transformation-2025",
      category: "Case Study",
      readTime: "8 min read",
      date: "Jan 17, 2025",
      icon: "🏭",
      color: "orange",
      featured: true
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete toolkit for AI implementation success with frameworks, templates, and expert guidance.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      readTime: "Comprehensive",
      date: "Jan 18, 2025",
      icon: "🛠️",
      color: "purple",
      featured: true
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      orange: "bg-orange-100 text-orange-800",
      purple: "bg-purple-100 text-purple-800"
    };
    return colors[color as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ✨ Latest Content Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fresh insights, cutting-edge research, and proven strategies from our latest content releases. 
            Stay ahead with the most current AI knowledge and implementation guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{content.icon}</div>
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getColorClasses(content.color)}`}>
                      {content.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span>{content.date}</span>
                </div>
                
                {content.featured && (
                  <div className="mt-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Content
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}