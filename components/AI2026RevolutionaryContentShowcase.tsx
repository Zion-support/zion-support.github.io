import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Star, Globe, Users } from 'lucide-react';

export default function AI2026RevolutionaryContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2026 Quantum-Neural Fusion Breakthrough",
      description: "Revolutionary quantum-neural fusion technology delivering 15,000% ROI and 99.7% accuracy",
      href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      category: "Breakthrough",
      roi: "15,000%",
      accuracy: "99.7%",
      icon: Brain,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      title: "AI 2026 Future Predictions Revolution",
      description: "Advanced predictive analytics with 95% accuracy forecasting future trends and opportunities",
      href: "/blog/ai-2026-future-predictions-breakthrough",
      category: "Predictions",
      roi: "8,500%",
      accuracy: "95%",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "AI 2026 Autonomous Manufacturing Revolution",
      description: "Self-managing manufacturing systems achieving 8,500% ROI with zero defects",
      href: "/case-studies/ai-2026-autonomous-manufacturing-revolution",
      category: "Manufacturing",
      roi: "8,500%",
      accuracy: "100%",
      icon: Zap,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      title: "AI 2026 Global Enterprise Transformation",
      description: "Fortune 500 companies achieving 5,000% ROI through revolutionary AI systems",
      href: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
      category: "Enterprise",
      roi: "5,000%",
      accuracy: "98%",
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    }
  ];

  const latestContent = [
    {
      title: "AI 2026 Neural Interface Revolution",
      description: "Next-generation neural interfaces achieving 95% patient recovery success",
      href: "/blog/ai-2026-neural-interface-revolution",
      category: "Healthcare",
      roi: "3,000%",
      icon: Brain
    },
    {
      title: "AI 2026 Energy Sector Transformation",
      description: "Revolutionary energy optimization achieving 4,000% ROI",
      href: "/case-studies/ai-2026-energy-sector-transformation-breakthrough",
      category: "Energy",
      roi: "4,000%",
      icon: Zap
    },
    {
      title: "AI 2026 Financial Services Revolution",
      description: "Quantum-enhanced financial systems delivering 6,000% ROI",
      href: "/case-studies/ai-2026-financial-services-revolution",
      category: "Finance",
      roi: "6,000%",
      icon: TrendingUp
    },
    {
      title: "AI 2026 Ultimate Implementation Guide",
      description: "Complete guide to implementing AI 2026 revolutionary systems",
      href: "/resources/ai-2026-ultimate-implementation-master-guide",
      category: "Resources",
      roi: "∞",
      icon: Star
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs px-4 py-2 rounded-full font-bold">
              AI 2026 REVOLUTIONARY
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-4 py-2 rounded-full font-bold">
              BREAKTHROUGH
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2026 Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the future of AI with our revolutionary 2026 content featuring quantum-neural fusion, 
            autonomous systems, and breakthrough technologies delivering unprecedented ROI.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Breakthrough Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${content.bgGradient} border ${content.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${content.gradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          {content.category}
                        </span>
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          {content.roi} ROI
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {content.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{content.roi} ROI</span>
                      </div>
                      {content.accuracy && (
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          <span>{content.accuracy} Accuracy</span>
                        </div>
                      )}
                    </div>
                    
                    <Link 
                      href={content.href}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Latest Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🚀 Latest AI 2026 Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-green-600 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span>{content.roi} ROI</span>
                    </div>
                    
                    <Link 
                      href={content.href}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready for the AI 2026 Revolution?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies achieving unprecedented ROI with our revolutionary AI 2026 
            quantum-neural fusion technology and autonomous systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-lg"
            >
              <Star className="w-5 h-5" />
              Start Your AI 2026 Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/ai-2026-ultimate-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}