import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentRecommendation() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedGoal, setSelectedGoal] = useState('all');

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'finance', label: 'Finance' },
    { value: 'retail', label: 'Retail' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'technology', label: 'Technology' }
  ];

  const goals = [
    { value: 'all', label: 'All Goals' },
    { value: 'automation', label: 'Process Automation' },
    { value: 'cost-reduction', label: 'Cost Reduction' },
    { value: 'efficiency', label: 'Efficiency Gains' },
    { value: 'customer-experience', label: 'Customer Experience' },
    { value: 'roi', label: 'ROI Optimization' }
  ];

  const contentRecommendations = [
    {
      id: 1,
      title: "AI Advanced Automation 2026",
      description: "Master advanced AI automation with 99% efficiency and $15M+ ROI",
      type: "Complete Guide",
      industry: ["manufacturing", "technology", "finance"],
      goal: ["automation", "efficiency", "roi"],
      href: "/blog/ai-advanced-automation-2026",
      metrics: { efficiency: "99%", roi: "$15M+" },
      gradient: "from-blue-500 to-purple-500",
      icon: "🤖",
      readTime: "35 min"
    },
    {
      id: 2,
      title: "AI Enterprise Transformation Mega Success",
      description: "Fortune 500 case study: $25M ROI with comprehensive AI transformation",
      type: "Case Study",
      industry: ["manufacturing", "technology"],
      goal: ["roi", "automation", "efficiency"],
      href: "/case-studies/ai-enterprise-transformation-mega-success-2026",
      metrics: { roi: "$25M", reduction: "90%" },
      gradient: "from-green-500 to-blue-500",
      icon: "🏆",
      readTime: "25 min"
    },
    {
      id: 3,
      title: "AI FinTech Transformation 2026",
      description: "95% automation, $5M+ savings, and digital banking revolution",
      type: "Industry Guide",
      industry: ["finance"],
      goal: ["automation", "cost-reduction", "roi"],
      href: "/blog/ai-fintech-transformation-2026",
      metrics: { automation: "95%", savings: "$5M+" },
      gradient: "from-emerald-500 to-teal-500",
      icon: "💰",
      readTime: "22 min"
    },
    {
      id: 4,
      title: "AI Retail Automation Success",
      description: "98% automation and $8M annual ROI for Fortune 500 retailer",
      type: "Success Story",
      industry: ["retail"],
      goal: ["automation", "roi", "efficiency"],
      href: "/case-studies/ai-retail-automation-2026",
      metrics: { automation: "98%", roi: "$8M" },
      gradient: "from-orange-500 to-red-500",
      icon: "🛒",
      readTime: "15 min"
    },
    {
      id: 5,
      title: "AI Healthcare Transformation Guide",
      description: "40% better diagnostics, 60% improved outcomes with AI",
      type: "Industry Guide",
      industry: ["healthcare"],
      goal: ["efficiency", "customer-experience"],
      href: "/blog/ai-healthcare-transformation-2025",
      metrics: { improvement: "40%", outcomes: "60%" },
      gradient: "from-pink-500 to-purple-500",
      icon: "🏥",
      readTime: "18 min"
    },
    {
      id: 6,
      title: "AI Customer Experience Revolution",
      description: "80% faster response times, 90% cost reduction in customer service",
      type: "Guide",
      industry: ["retail", "technology", "finance"],
      goal: ["customer-experience", "cost-reduction", "efficiency"],
      href: "/blog/ai-customer-experience-revolution-2026",
      metrics: { speed: "80%", reduction: "90%" },
      gradient: "from-cyan-500 to-blue-500",
      icon: "💬",
      readTime: "20 min"
    }
  ];

  const filteredContent = contentRecommendations.filter(content => {
    const industryMatch = selectedIndustry === 'all' || content.industry.includes(selectedIndustry);
    const goalMatch = selectedGoal === 'all' || content.goal.includes(selectedGoal);
    return industryMatch && goalMatch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎯 PERSONALIZED RECOMMENDATIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Content Tailored to Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Get personalized content recommendations based on your industry and goals. 
            Discover the most relevant AI guides, case studies, and success stories for your business.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Your Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {industries.map(industry => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Your Goal
              </label>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {goals.map(goal => (
                  <option key={goal.value} value={goal.value}>
                    {goal.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <Link key={content.id} href={content.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 group-hover:scale-105">
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-r ${content.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {content.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">{content.icon}</span>
                      </div>
                      <div className="text-sm font-medium opacity-90">{content.readTime} read</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4">
                    {Object.entries(content.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                      Read {content.type} →
                    </div>
                    <div className="text-xs text-gray-400">
                      {Math.floor(Math.random() * 5000) + 1000} views
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more recommendations
            </p>
            <button
              onClick={() => {
                setSelectedIndustry('all');
                setSelectedGoal('all');
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Need More Specific Recommendations?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our AI experts can provide personalized content recommendations based on your specific business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}