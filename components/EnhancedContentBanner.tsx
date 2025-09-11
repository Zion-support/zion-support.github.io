import React from 'react';
import Link from 'next/link';

export default function EnhancedContentBanner() {
  const featuredContent = [
    {
      title: "AI Cybersecurity Threats 2025",
      description: "Protecting your business from emerging AI security risks",
      href: "/blog/ai-cybersecurity-threats-2025",
      icon: "🔒",
      category: "Cybersecurity",
      readTime: "15 min",
      isNew: true
    },
    {
      title: "AI Productivity Automation",
      description: "Transform your workflow with intelligent automation",
      href: "/blog/ai-productivity-automation-2025",
      icon: "⚡",
      category: "Productivity",
      readTime: "18 min",
      isNew: true
    },
    {
      title: "AI Manufacturing Success",
      description: "40% cost reduction, 60% faster processing case study",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      icon: "🏭",
      category: "Manufacturing",
      readTime: "15 min",
      isNew: true
    },
    {
      title: "AI Implementation Checklist",
      description: "150+ actionable items for successful AI deployment",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "📋",
      category: "Implementation",
      readTime: "45 min",
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Fresh AI & Business Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            New this week: AI cybersecurity threats, productivity automation, manufacturing success stories, 
            and our comprehensive 150-page AI implementation checklist. Expert insights to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg" 
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  {item.isNew && (
                    <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span>{item.readTime} read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Organizations Using Our Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-sm opacity-90">Resource Downloads This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">User Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
            >
              View All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}