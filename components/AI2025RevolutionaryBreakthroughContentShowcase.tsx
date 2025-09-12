import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Target, Award, TrendingUp, Users, Clock, DollarSign, CheckCircle } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthrough Announcement",
      description: "Discover the most significant AI breakthroughs of 2025 that are transforming industries with 2000%+ ROI. Neural interfaces, quantum computing, and autonomous systems are here.",
      href: "/blog/ai-2025-revolutionary-breakthrough-announcement",
      type: "Blog Post",
      category: "Breakthrough",
      stats: "2,000%+ ROI",
      icon: Star,
      color: "from-red-500 to-pink-500",
      featured: true
    },
    {
      title: "Revolutionary Breakthrough Success - 2,000% ROI Case Study",
      description: "How a Fortune 500 manufacturing company achieved 2,000% ROI through our AI 2025 revolutionary breakthrough implementation, transforming their entire operation.",
      href: "/case-studies/ai-2025-revolutionary-breakthrough-success",
      type: "Case Study",
      category: "Success Story",
      stats: "Fortune 500",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      title: "Revolutionary Breakthrough Implementation Guide",
      description: "Complete step-by-step playbook for implementing AI 2025 revolutionary breakthroughs. Achieve 2,000%+ ROI with neural interfaces, quantum computing, and autonomous systems.",
      href: "/resources/ai-2025-revolutionary-breakthrough-implementation-guide",
      type: "Implementation Guide",
      category: "Resource",
      stats: "6 months",
      icon: Target,
      color: "from-blue-500 to-indigo-500",
      featured: true
    }
  ];

  const relatedContent = [
    {
      title: "Neural Interface Revolution",
      description: "95% accuracy improvement with direct brain-computer interface technology",
      href: "/blog/ai-2025-neural-interface-revolution",
      type: "Blog Post",
      stats: "95% Accuracy"
    },
    {
      title: "Quantum Computing Breakthrough",
      description: "10,000x performance improvement with quantum AI systems",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      type: "Blog Post",
      stats: "10,000x Faster"
    },
    {
      title: "Autonomous Systems Revolution",
      description: "99.8% operational autonomy across manufacturing and logistics",
      href: "/blog/ai-2025-autonomous-systems",
      type: "Blog Post",
      stats: "99.8% Autonomy"
    },
    {
      title: "Fortune 500 Transformation",
      description: "1,500% ROI through comprehensive AI transformation",
      href: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      type: "Case Study",
      stats: "1,500% ROI"
    },
    {
      title: "Global Enterprise Success",
      description: "1,200% ROI across 25 countries with AI implementation",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      stats: "1,200% ROI"
    },
    {
      title: "Healthcare Breakthrough",
      description: "95% patient recovery improvement with neural interface diagnostics",
      href: "/case-studies/ai-2025-neural-interface-healthcare-breakthrough",
      type: "Case Study",
      stats: "95% Recovery"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
            🚀 REVOLUTIONARY BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most significant AI breakthroughs of 2025. Neural interfaces, quantum computing, 
            and autonomous systems delivering unprecedented ROI and transformation.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">2,000%+</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Companies Transformed</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">$50B+</div>
            <div className="text-sm text-gray-600">Value Created</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Breakthrough Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <Link key={index} href={content.href} className="group">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{content.type}</span>
                        {content.featured && (
                          <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">FEATURED</span>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {content.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-500">{content.category}</span>
                        <span className="text-sm font-bold text-green-600">{content.stats}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Related Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Breakthrough Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{content.type}</span>
                    <span className="text-sm font-bold text-green-600">{content.stats}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-sm text-blue-600 group-hover:text-blue-700">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Breakthrough Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Neural Interfaces</h4>
              <p className="text-gray-700 mb-4">
                Direct brain-computer interface technology achieving 95% accuracy and 10x faster decision making.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  95% accuracy improvement
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  10x faster decision making
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time brain monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quantum Computing</h4>
              <p className="text-gray-700 mb-4">
                10,000x performance improvement with quantum-optimized algorithms for complex problem solving.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  10,000x faster processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  99.9% optimization accuracy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  1ms response time
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Autonomous Systems</h4>
              <p className="text-gray-700 mb-4">
                99.8% operational autonomy with self-healing capabilities and predictive maintenance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  99.8% operational autonomy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 autonomous operation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Zero-defect production
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join the AI revolution and discover how these breakthroughs can transform your organization 
            with unprecedented ROI and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/ai-implementation-guide-2025" 
              className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}