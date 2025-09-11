import React from 'react';
import Link from 'next/link';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  trend: string;
  icon: string;
  color: string;
}

const trendingItems: TrendingItem[] = [
  {
    title: "AI Enterprise Transformation 2025",
    description: "Complete implementation guide with 340% ROI and real case studies",
    href: "/blog/ai-enterprise-transformation-2025",
    category: "AI & Enterprise",
    readTime: "18 min read",
    trend: "🔥 Trending",
    icon: "🏢",
    color: "blue"
  },
  {
    title: "AI Startup Funding Guide 2025",
    description: "From seed to Series A with $47B market insights and pitch templates",
    href: "/blog/ai-startup-funding-guide-2025",
    category: "Startup Strategy",
    readTime: "22 min read",
    trend: "⭐ Popular",
    icon: "💰",
    color: "green"
  },
  {
    title: "Financial Services AI Success",
    description: "$50M cost savings, 300% efficiency gains - complete case study",
    href: "/case-studies/ai-financial-services-transformation-2025",
    category: "Case Study",
    readTime: "Case Study",
    trend: "📈 Rising",
    icon: "🏦",
    color: "purple"
  },
  {
    title: "AI Implementation Checklist",
    description: "150+ actionable items for successful AI implementation",
    href: "/resources/ai-implementation-checklist-2025",
    category: "Free Resource",
    readTime: "Download",
    trend: "💡 Insight",
    icon: "📋",
    color: "orange"
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    purple: "text-purple-600 bg-purple-100",
    orange: "text-orange-600 bg-orange-100"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function TrendingContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Expert Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with our latest articles on AI, cloud architecture, growth strategies, 
            and emerging technologies. Fresh content published weekly.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Articles
            <span>→</span>
          </Link>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh Content Drop: 2025 AI & Business Guides
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Discover our latest expert guides, case studies, and resources covering the most 
              important trends in AI, automation, and business growth for 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">☁️</div>
              <h4 className="text-xl font-bold mb-3">Cloud-Native Architecture Blueprint</h4>
              <p className="text-sm opacity-90 mb-4">
                Build scalable, resilient applications with modern cloud-native patterns and practices.
              </p>
              <Link
                href="/blog/cloud-native-architecture-2025"
                className="text-white text-sm font-medium hover:underline"
              >
                Read Article →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">🏢</div>
              <h4 className="text-xl font-bold mb-3">Enterprise AI Implementation 2025</h4>
              <p className="text-sm opacity-90 mb-4">
                Complete strategic roadmap for enterprise AI adoption, governance, and success.
              </p>
              <Link
                href="/blog/enterprise-ai-implementation-2025"
                className="text-white text-sm font-medium hover:underline"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* Trending Articles Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trending This Week</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingItems.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className={`text-xs font-medium ${getColorClasses(item.color)} mb-2 px-2 py-1 rounded-full inline-block`}>
                    {item.category}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.readTime}</span>
                    <span className="text-orange-600 font-medium">{item.trend}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Success Stories & Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories & Resources</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">📊 Latest Case Studies</h4>
              <div className="space-y-4">
                <Link href="/case-studies/ai-automation-manufacturing-2025" className="group block">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🏭</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                        AI Automation in Manufacturing
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">
                        40% cost reduction and 60% faster processing times
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Fortune 500</span>
                        <span>•</span>
                        <span>$2.3M savings</span>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link href="/case-studies/fortune-500-ai-transformation" className="group block">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                        Fortune 500 AI Transformation
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">
                        Complete digital transformation success story
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Enterprise</span>
                        <span>•</span>
                        <span>Full transformation</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4"
              >
                View All Case Studies
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">🛠️ Free Resources & Tools</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">AI Implementation Checklist</h5>
                    <p className="text-gray-600 text-sm">150+ actionable items for success</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">AI ROI Calculator</h5>
                    <p className="text-gray-600 text-sm">Calculate potential return on AI investments</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">AI Security Hardening</h5>
                    <p className="text-gray-600 text-sm">Essential security measures for AI systems</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/resources" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4"
              >
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}