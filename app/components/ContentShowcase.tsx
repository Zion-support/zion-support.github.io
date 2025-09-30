import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD

export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI Enterprise Transformation 2026: Complete Implementation Guide",
      description: "Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and 70% cost reduction.",
      type: "Article",
      category: "Enterprise AI",
      readTime: "20 min read",
      link: "/blog/ai-enterprise-transformation-2026",
      featured: true,
      metrics: "300% ROI",
      color: "blue"
    },
    {
      id: 2,
      title: "AI Autonomous Systems 2026: Enterprise Implementation Guide",
      description: "Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns. Achieve 80% automation and 90% efficiency gains.",
      type: "Article",
      category: "Autonomous AI",
      readTime: "18 min read",
      link: "/blog/ai-autonomous-systems-2026",
      featured: true,
      metrics: "80% Automation",
      color: "purple"
    },
    {
      id: 3,
      title: "Manufacturing AI Transformation: 60% Cost Reduction & 90% Efficiency Gain",
      description: "See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement through AI-powered supply chain optimization and predictive maintenance.",
      type: "Case Study",
      category: "Manufacturing",
      readTime: "15 min read",
      link: "/case-studies/manufacturing-ai-transformation-2026",
      featured: true,
      metrics: "$12M Savings",
      color: "green"
    },
    {
      id: 4,
      title: "AI Trends 2025: Top 10 Predictions & Industry Insights",
      description: "Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.",
      type: "Article",
      category: "AI Trends",
      readTime: "15 min read",
      link: "/blog/ai-trends-2025-predictions",
      featured: false,
      metrics: "10 Key Trends",
      color: "indigo"
    },
    {
      id: 5,
      title: "AI Governance Framework 2025: Enterprise Implementation",
      description: "Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.",
      type: "Article",
      category: "AI Governance",
      readTime: "15 min read",
      link: "/blog/ai-governance-framework-2025",
      featured: false,
      metrics: "70% Risk Reduction",
      color: "red"
    },
    {
      id: 6,
      title: "FinTech AI Risk Compliance: 70% Risk Reduction",
      description: "See how a leading fintech achieved 70% risk reduction with automated governance frameworks.",
      type: "Case Study",
      category: "FinTech",
      readTime: "10 min read",
      link: "/case-studies/fintech-ai-risk-compliance-2025",
      featured: false,
      metrics: "$2.5M Savings",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              📚 Featured Content
            </span>
            <span className="text-gray-600 text-sm">Latest AI Insights</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest articles, case studies, and AI innovations that are transforming businesses worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => {
            const colors = getColorClasses(content.color);
            return (
              <Link key={content.id} href={content.link} className="group">
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
                  content.featured ? `${colors.border} ring-2 ${colors.bg}` : 'border-gray-200'
                } group-hover:scale-105`}>
                  {content.featured && (
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-semibold`}>
                        ⭐ Featured
                      </span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                    </div>
                  )}
                  
                  {!content.featured && (
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {content.type}
                      </span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>
                    <div className={`${colors.text} font-semibold text-sm`}>
                      {content.metrics}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className={`${colors.text} font-semibold group-hover:translate-x-2 transition-transform`}>
                      Read {content.type === 'Case Study' ? 'Case Study' : 'Article'} →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Content →
=======

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI content, from beginner guides to advanced implementation strategies. Find everything you need to master AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Learning Hub</h3>
                <p className="text-sm text-gray-500">Educational Content</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Access comprehensive guides, tutorials, and educational resources to master AI concepts and implementation strategies.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Step-by-step tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Interactive learning modules</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Expert-led webinars</span>
              </div>
            </div>
            <Link
              href="/learning-hub"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Explore Learning Hub →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Case Studies</h3>
                <p className="text-sm text-gray-500">Real Results</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Learn from real-world implementations and discover how companies achieved measurable results with AI transformation.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Industry-specific examples</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">ROI measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Implementation details</span>
              </div>
            </div>
            <Link
              href="/case-studies"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View Case Studies →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Market Insights</h3>
                <p className="text-sm text-gray-500">Expert Analysis</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Stay ahead with expert analysis, market trends, and predictions from industry leaders and practitioners.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Trend analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Market predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600">Expert interviews</span>
              </div>
            </div>
            <Link
              href="/insights"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              Read Insights →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/content-hub"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Content
>>>>>>> origin/cursor/create-and-deploy-new-content-977d
          </Link>
        </div>
      </div>
    </section>
  );
}