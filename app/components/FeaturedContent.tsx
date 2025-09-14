import React from 'react';
import ContentCard from './ContentCard';

const featuredContent = [
  {
    title: "AI 2025: The Enterprise Automation Revolution",
    description: "Discover how AI is transforming enterprise operations in 2025 with intelligent automation, predictive analytics, and autonomous decision-making systems.",
    category: "AI & Automation",
    date: "Jan 14, 2025",
    href: "/blog/ai-2025-enterprise-automation-revolution",
    featured: true
  },
  {
    title: "AI 2025: Next-Generation Cybersecurity Revolution",
    description: "Explore how AI is revolutionizing cybersecurity in 2025 with advanced threat detection, autonomous response systems, and predictive security analytics.",
    category: "Cybersecurity",
    date: "Jan 14, 2025",
    href: "/blog/ai-2025-cybersecurity-revolution-next-generation-threat-protection",
    featured: true
  },
  {
    title: "Global Enterprise AI Transformation: Ultimate Success Story",
    description: "Discover how a Fortune 500 company achieved 340% ROI through comprehensive AI transformation, reducing costs by 67% while increasing efficiency by 89%.",
    category: "Case Study",
    date: "Jan 14, 2025",
    href: "/case-studies/global-enterprise-ai-transformation-2025-ultimate-success",
    featured: true
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