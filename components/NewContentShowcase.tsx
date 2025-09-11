import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase() {
  const newContent = [
    {
      title: "AI Cybersecurity Threats 2025",
      description: "Protecting your business from emerging AI security risks",
      href: "/blog/ai-cybersecurity-threats-2025",
      type: "Article",
      readTime: "15 min read",
      icon: "🔒",
      category: "Cybersecurity",
      isNew: true
    },
    {
      title: "AI Productivity Automation 2025",
      description: "Transform your workflow with intelligent automation",
      href: "/blog/ai-productivity-automation-2025",
      type: "Article",
      readTime: "18 min read",
      icon: "⚡",
      category: "Productivity",
      isNew: true
    },
    {
      title: "AI Customer Support Automation",
      description: "Resolve faster, cut costs with intelligent support",
      href: "/blog/ai-customer-support-automation-2025",
      type: "Article",
      readTime: "12 min read",
      icon: "🎧",
      category: "Customer Support",
      isNew: true
    },
    {
      title: "AI Manufacturing Success Story",
      description: "40% cost reduction, 60% faster processing case study",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      type: "Case Study",
      readTime: "15 min read",
      icon: "🏭",
      category: "Manufacturing",
      isNew: true
    },
    {
      title: "AI Implementation Checklist 2025",
      description: "150+ actionable items for successful AI deployment",
      href: "/resources/ai-implementation-checklist-2025",
      type: "Resource",
      readTime: "45 min to complete",
      icon: "📋",
      category: "Implementation",
      isNew: true
    },
    {
      title: "AI Enterprise Transformation 2025",
      description: "Complete implementation guide with 340% ROI",
      href: "/blog/ai-enterprise-transformation-2025",
      type: "Article",
      readTime: "18 min read",
      icon: "🏢",
      category: "Enterprise",
      isNew: false
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 JUST PUBLISHED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fresh AI & Business Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our latest expert insights, case studies, and resources. 
            Fresh content published weekly to keep you ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Content
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}