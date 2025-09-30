"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase2026() {
  const [activeTab, setActiveTab] = useState('articles');

  const content = {
    articles: [
      {
        title: "AI Enterprise Automation 2026: Complete Implementation Guide",
        description: "Master AI enterprise automation with our comprehensive 2026 guide. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.",
        category: "Featured Article",
        readTime: "20 min read",
        href: "/blog/ai-enterprise-automation-2026",
        metrics: { roi: "300%", efficiency: "90%", costReduction: "70%" }
      },
      {
        title: "AI Trends 2026: Top 10 Predictions & Industry Insights",
        description: "Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies.",
        category: "Trending Now",
        readTime: "15 min read",
        href: "/blog/ai-trends-2026-predictions",
        metrics: { marketSize: "$1.8T", adoption: "85%", growth: "300%" }
      },
      {
        title: "AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain",
        description: "See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.",
        category: "Success Story",
        readTime: "Manufacturing",
        href: "/blog/ai-supply-chain-optimization-2025",
        metrics: { savings: "$12M", efficiency: "90%", costReduction: "60%" }
      }
    ],
    caseStudies: [
      {
        title: "TechCorp: 90% Efficiency Gain with AI",
        description: "See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.",
        industry: "E-commerce",
        href: "/case-studies/techcorp-ai-transformation",
        metrics: { savings: "$500K", efficiency: "90%", roi: "280%" }
      },
      {
        title: "FinServe: GenAI Risk Mitigation & Compliance",
        description: "How a fintech leader cut AI risk by 70% and achieved audit-ready compliance.",
        industry: "Fintech",
        href: "/case-studies/finserve-genai-risk-mitigation",
        metrics: { riskReduction: "70%", compliance: "100%", accuracy: "99.7%" }
      },
      {
        title: "RetailAI Corp: 150% Revenue Growth",
        description: "See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.",
        industry: "Retail",
        href: "/case-studies/retail-ai-transformation",
        metrics: { revenueGrowth: "150%", costReduction: "80%", roi: "340%" }
      }
    ],
    calculators: [
      {
        title: "AI ROI Calculator",
        description: "Calculate your potential ROI from AI implementation with our interactive calculator.",
        href: "/tools/ai-roi-calculator",
        features: ["ROI Projection", "Cost Analysis", "Timeline Planning"]
      },
      {
        title: "AI Cost Optimization Tool",
        description: "Optimize your AI costs and identify savings opportunities with our advanced tool.",
        href: "/tools/ai-cost-optimization",
        features: ["Cost Analysis", "Optimization Tips", "Savings Projection"]
      },
      {
        title: "AI Implementation Planner",
        description: "Plan your AI implementation journey with our comprehensive planning tool.",
        href: "/tools/ai-implementation-planner",
        features: ["Roadmap Creation", "Resource Planning", "Risk Assessment"]
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Interactive Content Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Revolutionary
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}AI Content Library
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, real-world success stories, and interactive tools designed to transform your business operations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'articles'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Articles & Guides
            </button>
            <button
              onClick={() => setActiveTab('caseStudies')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'caseStudies'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveTab('calculators')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'calculators'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Interactive Tools
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content[activeTab as keyof typeof content].map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeTab === 'articles' ? 'bg-blue-100 text-blue-800' :
                    activeTab === 'caseStudies' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {activeTab === 'articles' ? item.category : 
                     activeTab === 'caseStudies' ? item.industry :
                     'Interactive Tool'}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {activeTab === 'articles' ? item.readTime :
                     activeTab === 'caseStudies' ? 'Success Story' :
                     'Free Tool'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics Display */}
                {item.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(item.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features for Calculators */}
                {activeTab === 'calculators' && 'features' in item && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.features.map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                  {activeTab === 'articles' ? 'Read Article' :
                   activeTab === 'caseStudies' ? 'View Case Study' :
                   'Try Tool'} →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already leveraging our AI expertise to achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}