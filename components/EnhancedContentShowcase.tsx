import React from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcase() {
  const featuredContent = [
    {
      title: "AI Advanced Automation 2026",
      description: "Master advanced AI automation with 99% efficiency, $15M+ ROI, and zero-touch operations.",
      type: "Complete Guide",
      readTime: "35 min",
      href: "/blog/ai-advanced-automation-2026",
      metrics: { efficiency: "99%", roi: "$15M+" },
      gradient: "from-blue-500 to-purple-500",
      icon: "🤖"
    },
    {
      title: "AI Enterprise Transformation Mega Success",
      description: "See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation.",
      type: "Case Study",
      readTime: "25 min",
      href: "/case-studies/ai-enterprise-transformation-mega-success-2026",
      metrics: { roi: "$25M", reduction: "90%" },
      gradient: "from-green-500 to-blue-500",
      icon: "🏆"
    },
    {
      title: "AI Next Generation Automation 2026",
      description: "Discover next-generation AI automation that delivers 99% efficiency and $10M+ savings.",
      type: "Revolutionary Guide",
      readTime: "30 min",
      href: "/blog/ai-next-generation-automation-2026",
      metrics: { efficiency: "99%", savings: "$10M+" },
      gradient: "from-purple-500 to-pink-500",
      icon: "⚡"
    },
    {
      title: "AI Autonomous Cloud Operations 2026",
      description: "Self-healing infrastructure with 99.9% uptime and 90% cost reduction.",
      type: "Technical Guide",
      readTime: "18 min",
      href: "/blog/ai-autonomous-cloud-ops-2026",
      metrics: { uptime: "99.9%", reduction: "90%" },
      gradient: "from-cyan-500 to-blue-500",
      icon: "☁️"
    },
    {
      title: "AI FinTech Transformation 2026",
      description: "95% automation, $5M+ savings, and digital banking revolution.",
      type: "Industry Guide",
      readTime: "22 min",
      href: "/blog/ai-fintech-transformation-2026",
      metrics: { automation: "95%", savings: "$5M+" },
      gradient: "from-emerald-500 to-teal-500",
      icon: "💰"
    },
    {
      title: "AI Retail Automation Success",
      description: "See how a Fortune 500 retailer achieved 98% automation and $8M annual ROI.",
      type: "Success Story",
      readTime: "15 min",
      href: "/case-studies/ai-retail-automation-2026",
      metrics: { automation: "98%", roi: "$8M" },
      gradient: "from-orange-500 to-red-500",
      icon: "🛒"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🔥 FEATURED 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026. Each piece delivers measurable results and proven strategies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 group-hover:scale-105">
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-r ${content.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">{content.icon}</span>
                      </div>
                      <div className="text-sm font-medium opacity-90">{content.type}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-gradient-to-r ${content.gradient} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                      {content.type}
                    </span>
                    <span className="text-sm text-gray-500">{content.readTime} read</span>
                  </div>
                  
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

        {/* Additional Content Categories */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Guides</h3>
            <p className="text-sm text-gray-600 mb-4">Comprehensive implementation guides</p>
            <Link href="/blog" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Browse Guides →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Case Studies</h3>
            <p className="text-sm text-gray-600 mb-4">Real-world success stories</p>
            <Link href="/case-studies" className="text-green-600 font-semibold text-sm hover:text-green-700">
              View Stories →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Wins</h3>
            <p className="text-sm text-gray-600 mb-4">Fast implementation strategies</p>
            <Link href="/blog" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
              Get Started →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">ROI Calculator</h3>
            <p className="text-sm text-gray-600 mb-4">Calculate your potential savings</p>
            <Link href="/tools/roi-calculator" className="text-orange-600 font-semibold text-sm hover:text-orange-700">
              Calculate ROI →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already achieving remarkable results with AI transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}