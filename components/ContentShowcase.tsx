import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI Foundation Models 2026: Enterprise Implementation Guide",
      description: "Master AI foundation models with 90% cost reduction and 300% performance improvement.",
      category: "AI Architecture",
      readTime: "25 min",
      link: "/blog/ai-foundation-models-2026",
      featured: true,
      metrics: {
        costReduction: "90%",
        performance: "300%"
      }
    },
    {
      id: 2,
      title: "AI Operational Excellence 2026: 90% Automation & $8M+ Savings",
      description: "Achieve operational excellence with AI-driven automation and $8M+ annual savings.",
      category: "AI Operations",
      readTime: "20 min",
      link: "/blog/ai-operational-excellence-2026",
      featured: true,
      metrics: {
        automation: "90%",
        savings: "$8M+"
      }
    },
    {
      id: 3,
      title: "AI Agent Orchestration 2026: Multi-Agent System Architecture",
      description: "Master multi-agent systems with 95% automation efficiency and $5M+ ROI.",
      category: "AI Engineering",
      readTime: "22 min",
      link: "/blog/ai-agent-orchestration-2026",
      featured: true,
      metrics: {
        efficiency: "95%",
        roi: "$5M+"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ FEATURED CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI strategies, real-world case studies, and breakthrough technologies 
            that are transforming industries in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <Link key={content.id} href={content.link} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  {content.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">📝 Article</span>
                  <span className="text-sm text-gray-500">{content.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {content.description}
                </p>
                
                <div className="flex gap-4 mb-4">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Explore All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}