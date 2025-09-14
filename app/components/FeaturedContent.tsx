import React from 'react';
import ContentCard from './ContentCard';

const featuredContent = [
  {
    title: "🚀 AI 2025: Enterprise Automation Breakthrough - Ultimate Guide",
    description: "The definitive guide to AI automation in 2025. Discover breakthrough technologies, implementation strategies, and real-world success stories transforming businesses worldwide.",
    category: "AI & Automation",
    date: "Jan 15, 2025",
    href: "/blog/ai-2025-enterprise-automation-breakthrough-ultimate-guide",
    featured: true,
    badge: "NEW"
  },
  {
    title: "💰 Global Retail Giant: 450% ROI with AI Transformation",
    description: "Exclusive case study: How a global retail chain achieved 450% ROI, 60% cost reduction, and 200% increase in customer satisfaction with comprehensive AI transformation.",
    category: "Case Study",
    date: "Jan 15, 2025",
    href: "/case-studies/global-retail-ai-transformation-2025-ultimate-success",
    featured: true,
    badge: "FEATURED"
  },
  {
    title: "📋 AI Implementation Roadmap 2025: Complete Enterprise Guide",
    description: "The ultimate step-by-step roadmap for implementing AI in your enterprise. Includes timelines, checklists, and best practices for successful AI transformation.",
    category: "Implementation Guide",
    date: "Jan 15, 2025",
    href: "/resources/ai-implementation-roadmap-2025-complete-guide",
    featured: true,
    badge: "GUIDE"
  }
];

export default function FeaturedContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, success stories, and expert guidance on AI transformation and technology innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <ContentCard
              key={index}
              title={content.title}
              description={content.description}
              category={content.category}
              date={content.date}
              href={content.href}
              featured={content.featured}
              badge={content.badge}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            View All Content →
          </a>
        </div>
      </div>
    </section>
  );
}