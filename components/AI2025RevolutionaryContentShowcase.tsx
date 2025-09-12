import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Brain, Rocket, Zap, Star, Clock, Users, Target, CheckCircle } from 'lucide-react';

export default function AI2025RevolutionaryContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most transformative AI innovations of 2025 that are reshaping industries and delivering extraordinary ROI.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "Blog Post",
      readTime: "15 min",
      featured: true,
      metrics: {
        roi: "2000%",
        accuracy: "99.7%",
        efficiency: "300%"
      },
      tags: ["Breakthrough", "Innovation", "ROI"],
      icon: Zap,
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Global Enterprise Transformation: 2000% ROI Success",
      description: "How a Fortune 500 company achieved unprecedented ROI through revolutionary AI implementation across their global operations.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min",
      featured: true,
      metrics: {
        roi: "2000%",
        savings: "$2.4B",
        timeframe: "18 months"
      },
      tags: ["Success Story", "Enterprise", "Fortune 500"],
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "The most comprehensive AI implementation guide for 2025. Everything you need to successfully deploy AI technologies.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource Guide",
      readTime: "25+ guides",
      featured: true,
      metrics: {
        guides: "25+",
        templates: "50+",
        success: "95%"
      },
      tags: ["Toolkit", "Implementation", "Guide"],
      icon: Brain,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const additionalContent = [
    {
      id: 4,
      title: "Quantum-Neural Fusion Architecture",
      description: "Revolutionary AI processing that combines quantum computing with neural networks for 15,000% ROI potential.",
      href: "/blog/ai-2025-quantum-neural-fusion",
      category: "Technical Deep Dive",
      readTime: "20 min",
      metrics: { roi: "15,000%" },
      tags: ["Quantum", "Neural Networks", "Architecture"],
      icon: Rocket
    },
    {
      id: 5,
      title: "Autonomous Enterprise Systems",
      description: "Self-managing AI systems that achieved 8,500% ROI through complete business process automation.",
      href: "/case-studies/ai-2025-autonomous-enterprise-systems",
      category: "Case Study",
      readTime: "10 min",
      metrics: { roi: "8,500%" },
      tags: ["Automation", "Enterprise", "Autonomous"],
      icon: Target
    },
    {
      id: 6,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces delivering 5,000% ROI in healthcare with 95% patient recovery rates.",
      href: "/blog/ai-2025-neural-interface-technology",
      category: "Innovation",
      readTime: "18 min",
      metrics: { roi: "5,000%" },
      tags: ["Neural Interface", "Healthcare", "Innovation"],
      icon: Brain
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most groundbreaking AI content of 2025, featuring breakthrough technologies, 
            success stories, and implementation guides that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Breakthrough Content
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => {
              const IconComponent = content.icon;
              return (
                <div 
                  key={content.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${content.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-6 h-6" />
                          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                            {content.category}
                          </span>
                        </div>
                        {content.featured && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-300" />
                            <span className="text-sm font-medium">Featured</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{content.title}</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{content.description}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(content.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {content.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {content.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Expert Reviewed
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={content.href}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Revolutionary Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content) => {
              const IconComponent = content.icon;
              return (
                <div 
                  key={content.id}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-3">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {content.category}
                        </span>
                        <span className="text-xs text-gray-500">{content.readTime}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {content.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">{content.description}</p>
                      
                      {/* Metrics */}
                      <div className="flex items-center gap-4 mb-4">
                        {Object.entries(content.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-green-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {content.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link 
                        href={content.href}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Explore More Revolutionary Content?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Discover our complete library of AI breakthrough content, case studies, and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Star className="w-5 h-5" />
              View All Content
            </Link>
            <Link 
              href="/newsletter"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}