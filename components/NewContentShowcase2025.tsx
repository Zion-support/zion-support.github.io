import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase2025() {
  const newContent = [
    {
      title: "AI 2025 Advanced Automation Mastery",
      description: "Complete implementation guide with proven methodologies for achieving 2,400% ROI",
      type: "Implementation Guide",
      category: "AI Automation",
      href: "/blog/ai-2025-advanced-automation-mastery",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🎯",
      metrics: "2,400% ROI"
    },
    {
      title: "Global Enterprise Automation Success",
      description: "Fortune 500 case study showing $180M annual savings and 95% efficiency gains",
      type: "Case Study",
      category: "Success Stories",
      href: "/case-studies/ai-2025-global-enterprise-automation-success",
      badge: "SUCCESS",
      badgeColor: "bg-green-500",
      icon: "🏆",
      metrics: "$180M Savings"
    },
    {
      title: "AI 2025 Quantum Computing Breakthroughs",
      description: "Revolutionary quantum computing solutions delivering 15,000% ROI in pilot programs",
      type: "Technology Guide",
      category: "Quantum Computing",
      href: "/blog/ai-2025-quantum-computing-breakthroughs",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-500",
      icon: "⚛️",
      metrics: "15,000% ROI"
    },
    {
      title: "Neural Interface Revolution 2025",
      description: "Breakthrough neural interface technology achieving 99.7% accuracy in healthcare applications",
      type: "Technology Guide",
      category: "Neural Interfaces",
      href: "/blog/ai-2025-neural-interface-revolution",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-500",
      icon: "🧠",
      metrics: "99.7% Accuracy"
    },
    {
      title: "Enterprise AI Transformation Blueprint",
      description: "Step-by-step blueprint for transforming enterprise operations with AI automation",
      type: "Implementation Guide",
      category: "Enterprise AI",
      href: "/resources/ai-2025-enterprise-transformation-blueprint",
      badge: "ESSENTIAL",
      badgeColor: "bg-indigo-500",
      icon: "🏢",
      metrics: "500% ROI"
    },
    {
      title: "AI 2025 ROI Calculator Pro",
      description: "Advanced ROI calculator with predictive analytics for AI implementation projects",
      type: "Tool",
      category: "ROI Analysis",
      href: "/tools/ai-2025-roi-calculator-pro",
      badge: "NEW",
      badgeColor: "bg-yellow-500",
      icon: "🧮",
      metrics: "Predictive Analytics"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW CONTENT JUST RELEASED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring proven strategies, real case studies, 
            and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{content.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{content.type}</span>
                  <span className="text-sm font-medium text-blue-600">{content.metrics}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {content.category}
                  </span>
                  <Link
                    href={content.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span className="mr-2">📚</span>
            Explore All Content
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}