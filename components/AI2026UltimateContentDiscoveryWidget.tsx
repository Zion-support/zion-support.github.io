import React from 'react';
import Link from 'next/link';

export default function AI2026UltimateContentDiscoveryWidget() {
  const featuredContent = [
    {
      title: "AI 2026 Ultimate Breakthrough Showcase",
      description: "Experience revolutionary AI breakthroughs including quantum-neural fusion and consciousness AI",
      href: "/ai-2026-ultimate-breakthrough-showcase",
      type: "Showcase",
      roi: "15,000%",
      badge: "BREAKTHROUGH",
      color: "purple"
    },
    {
      title: "Quantum-Neural Fusion Success Story",
      description: "How a Fortune 500 company achieved 15,000% ROI through revolutionary AI implementation",
      href: "/case-studies/ai-2026-quantum-neural-fusion-success",
      type: "Case Study",
      roi: "15,000%",
      badge: "SUCCESS",
      color: "blue"
    },
    {
      title: "AI 2026 Revolutionary Breakthroughs",
      description: "Comprehensive analysis of the most significant AI breakthroughs transforming industries",
      href: "/blog/ai-2026-revolutionary-breakthroughs",
      type: "Blog Post",
      roi: "∞",
      badge: "ANALYSIS",
      color: "green"
    },
    {
      title: "AI 2026 Implementation Master Guide",
      description: "Complete step-by-step guide to implementing AI 2026 breakthrough technologies",
      href: "/resources/ai-2026-ultimate-implementation-master-guide",
      type: "Resource",
      roi: "99.8%",
      badge: "GUIDE",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-pink-500 border-purple-200 bg-purple-50",
      blue: "from-blue-500 to-cyan-500 border-blue-200 bg-blue-50",
      green: "from-green-500 to-emerald-500 border-green-200 bg-green-50",
      indigo: "from-indigo-500 to-purple-500 border-indigo-200 bg-indigo-50"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-4">
            🔍 AI 2026 CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Discover Revolutionary AI 2026 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2026 breakthrough content, case studies, and implementation guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredContent.map((content, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${getColorClasses(content.color)}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getColorClasses(content.color)} text-white`}>
                    {content.type}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${getColorClasses(content.color).split(' ')[2]} text-${content.color}-700`}>
                    {content.badge}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{content.roi}</div>
                    <div className="text-xs text-gray-500">ROI Potential</div>
                  </div>
                  <Link 
                    href={content.href}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r ${getColorClasses(content.color)} text-white hover:shadow-lg transition-all duration-300`}
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transition-all duration-300"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </div>
  );
}