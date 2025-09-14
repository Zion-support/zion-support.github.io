import React from 'react';
import Link from 'next/link';

export default function FeaturedContentShowcase2026() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2026 Revolutionary Breakthrough Revolution",
      description: "The most comprehensive analysis of revolutionary AI breakthroughs that will transform every industry and achieve 15,000% ROI.",
      type: "Blog Post",
      category: "Revolutionary AI",
      roi: "15,000%",
      status: "BREAKTHROUGH",
      href: "/blog/ai-2026-revolutionary-breakthrough-revolution",
      icon: "🚀",
      gradient: "from-red-500 to-pink-500",
      features: ["Quantum-Neural Fusion", "15,000% ROI Potential", "Complete Business Transformation"]
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion Enterprise Transformation",
      description: "Real case study of GlobalTech Enterprises achieving 15,000% ROI through quantum-neural fusion technology implementation.",
      type: "Case Study",
      category: "Enterprise Success",
      roi: "15,000%",
      status: "PROVEN SUCCESS",
      href: "/case-studies/ai-2026-quantum-neural-fusion-enterprise-transformation-breakthrough",
      icon: "🏆",
      gradient: "from-green-500 to-emerald-500",
      features: ["$4.2B Additional Profit", "95% Automation", "Market Leadership"]
    },
    {
      id: 3,
      title: "AI 2026 Ultimate Implementation Master Guide",
      description: "Complete roadmap for implementing revolutionary AI technologies with step-by-step guidance for 5,000%+ ROI achievement.",
      type: "Implementation Guide",
      category: "Strategic Planning",
      roi: "5,000%+",
      status: "ESSENTIAL",
      href: "/resources/ai-2026-ultimate-implementation-master-guide",
      icon: "📚",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Complete Roadmap", "Risk Mitigation", "ROI Optimization"]
    },
    {
      id: 4,
      title: "Quantum Computing Breakthroughs 2030",
      description: "Revolutionary guide to quantum computing breakthroughs that will transform reality and create infinite possibilities.",
      type: "Resource Guide",
      category: "Future Technology",
      roi: "Infinite",
      status: "REVOLUTIONARY",
      href: "/resources/quantum-computing-breakthroughs-2030",
      icon: "⚛️",
      gradient: "from-purple-500 to-indigo-500",
      features: ["Quantum Supremacy", "Reality Transformation", "Universal Applications"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">⭐ FEATURED CONTENT 2026</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Showcase
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI content that will transform your business and 
            achieve unprecedented ROI. Each piece represents a breakthrough in AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredContent.map((content) => (
            <div 
              key={content.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${content.gradient} p-6 text-white relative`}>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full">
                    {content.status}
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{content.icon}</div>
                  <div>
                    <div className="text-sm opacity-90">{content.type}</div>
                    <div className="text-xs opacity-75">{content.category}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {content.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {content.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full">
                    <span className="text-sm font-bold">ROI: {content.roi}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={content.href}
                  className={`block w-full bg-gradient-to-r ${content.gradient} text-white text-center py-3 rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105`}
                >
                  {content.type === "Blog Post" && "🚀 Read Revolutionary Post"}
                  {content.type === "Case Study" && "🏆 View Success Story"}
                  {content.type === "Implementation Guide" && "📚 Get Complete Guide"}
                  {content.type === "Resource Guide" && "⚛️ Explore Quantum Future"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving revolutionary results with our 
              AI 2026 breakthrough technologies. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-2026-ultimate-implementation-master-guide"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                📚 Get Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all"
              >
                🚀 Start Transformation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}