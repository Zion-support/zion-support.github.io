<<<<<<< HEAD
=======
import React from 'react';
import ContentCard from './ContentCard';

const featuredContent = [
  {
    title: "AI 2025: The Enterprise Automation Revolution",
    description: "Discover how AI is transforming enterprise operations in 2025 with intelligent automation, predictive analytics, and autonomous decision-making systems.",
    href: "/blog/ai-2025-enterprise-automation-revolution",
    category: "AI & Automation",
    date: "2025-01-14",
    featured: true,
    tags: ["AI", "Enterprise", "Automation", "2025"]
  },
  {
    title: "AI 2025: Next-Generation Cybersecurity Revolution",
    description: "Explore how AI is revolutionizing cybersecurity with advanced threat detection, autonomous response systems, and predictive security analytics.",
    href: "/blog/ai-2025-cybersecurity-revolution-next-generation-threat-protection",
    category: "Cybersecurity",
    date: "2025-01-14",
    featured: true,
    tags: ["AI", "Cybersecurity", "Threat Detection", "2025"]
  },
  {
    title: "Fortune 500 AI Transformation: 340% ROI Success Story",
    description: "How a Fortune 500 company achieved 340% ROI increase through comprehensive AI transformation, reducing operational costs by 60%.",
    href: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story",
    category: "Case Study",
    date: "2025-01-14",
    featured: true,
    tags: ["Fortune 500", "AI Transformation", "ROI", "Success Story"]
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
            Discover the latest insights, case studies, and resources on AI, automation, and technology transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <ContentCard
              key={index}
              title={content.title}
              description={content.description}
              href={content.href}
              category={content.category}
              date={content.date}
              featured={content.featured}
              tags={content.tags}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            View All Content
          </a>
        </div>
      </div>
    </section>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default FeaturedContent;