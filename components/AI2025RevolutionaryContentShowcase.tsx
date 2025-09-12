import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Rocket, Brain, Target, CheckCircle, Clock, Users, DollarSign } from 'lucide-react';

const AI2025RevolutionaryContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most transformative AI technologies of 2025 with 2000%+ ROI potential",
      type: "Blog Post",
      readTime: "15 min",
      featured: true,
      roi: "2000%",
      category: "Breakthrough Technology",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      image: "/images/ai-2025-breakthroughs.jpg",
      tags: ["Revolutionary", "Breakthrough", "ROI", "2025"]
    },
    {
      id: 2,
      title: "Global Enterprise Transformation Success",
      description: "How a Fortune 500 company achieved 2000% ROI through AI transformation",
      type: "Case Study",
      readTime: "12 min",
      featured: true,
      roi: "2000%",
      category: "Enterprise Success",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      image: "/images/enterprise-transformation.jpg",
      tags: ["Fortune 500", "Success", "ROI", "Transformation"]
    },
    {
      id: 3,
      title: "Ultimate AI Implementation Toolkit",
      description: "Complete guide to AI transformation with templates, checklists, and ROI calculators",
      type: "Resource Guide",
      readTime: "45 min",
      featured: true,
      roi: "100% Success",
      category: "Implementation",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      image: "/images/implementation-toolkit.jpg",
      tags: ["Toolkit", "Guide", "Implementation", "Templates"]
    }
  ];

  const additionalContent = [
    {
      id: 4,
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "In-depth analysis of AI trends and predictions for 2025",
      type: "Analysis",
      readTime: "20 min",
      roi: "Insights",
      category: "Trends",
      href: "/blog/ai-2025-comprehensive-trends-analysis",
      tags: ["Trends", "Analysis", "Predictions"]
    },
    {
      id: 5,
      title: "Fortune 500 AI Transformation",
      description: "1500% ROI success story in Fortune 500 implementation",
      type: "Case Study",
      readTime: "10 min",
      roi: "1500%",
      category: "Success Story",
      href: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      tags: ["Fortune 500", "Success", "ROI"]
    },
    {
      id: 6,
      title: "AI 2025 ROI Calculator",
      description: "Calculate your potential AI investment returns and ROI",
      type: "Tool",
      readTime: "5 min",
      roi: "Calculator",
      category: "Tools",
      href: "/tools/ai-2025-roi-calculator",
      tags: ["Calculator", "ROI", "Tools"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-blue-600" />
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              REVOLUTIONARY CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most transformative AI content of 2025. From breakthrough technologies to 
            proven success stories with 2000%+ ROI.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                      BREAKTHROUGH
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Star className="w-5 h-5 text-yellow-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">{content.roi}</div>
                      <div className="text-sm opacity-90">ROI Potential</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                      {content.type}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                      {content.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {content.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{content.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{content.roi} ROI</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={content.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all group-hover:scale-105 transform"
                  >
                    <span>Explore Content</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content) => (
              <Link key={content.id} href={content.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded">
                        {content.type}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        {content.roi}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {content.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ companies that have achieved 2000%+ ROI with our AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/ai-2025-ultimate-implementation-toolkit"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Target className="w-5 h-5" />
                Get Implementation Toolkit
              </Link>
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <DollarSign className="w-5 h-5" />
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryContentShowcase;