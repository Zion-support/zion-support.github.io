import React from 'react';
import Link from 'next/link';

export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI Enterprise Adoption 2025: Complete Implementation Guide",
      description: "Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.",
      type: "Article",
      readTime: "20 min read",
      href: "/blog/ai-enterprise-adoption-2025",
      color: "blue"
    },
    {
      id: 2,
      title: "AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain",
      description: "See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.",
      type: "Case Study",
      readTime: "Manufacturing",
      href: "/case-studies/ai-supply-chain-optimization-2025",
      color: "green"
    },
    {
      id: 3,
      title: "AI Autonomous Agents 2025: Enterprise Implementation Guide",
      description: "Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.",
      type: "Article",
      readTime: "18 min read",
      href: "/blog/ai-autonomous-agents-2025",
      color: "purple"
    },
    {
      id: 4,
      title: "FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings",
      description: "See how a leading fintech achieved 70% risk reduction with automated governance frameworks.",
      type: "Case Study",
      readTime: "FinTech",
      href: "/case-studies/fintech-ai-risk-compliance-2025",
      color: "green"
    },
    {
      id: 5,
      title: "AI Multimodal Integration 2026: The Future of Enterprise AI",
      description: "Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration.",
      type: "Article",
      readTime: "22 min read",
      href: "/blog/ai-multimodal-integration-2026",
      color: "purple"
    },
    {
      id: 6,
      title: "Manufacturing AI Transformation: 85% Efficiency Gain",
      description: "See how a leading manufacturer achieved 85% efficiency improvements and $12M annual savings.",
      type: "Case Study",
      readTime: "Manufacturing",
      href: "/case-studies/manufacturing-ai-transformation",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-800';
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'purple':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, case studies, and implementation guides that are 
            helping enterprises achieve remarkable AI transformation results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <Link key={content.id} href={content.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getColorClasses(content.color)}`}>
                    {content.type}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  {content.type === 'Article' ? 'Read Article' : 'View Case Study'} →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl mr-4"
          >
            View All Articles
          </Link>
          <Link
            href="/case-studies"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}