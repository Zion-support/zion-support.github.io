import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Clock, Award, Zap, Brain, Target, Shield } from 'lucide-react';

export default function UltimateContentShowcase2025() {
  const contentItems = [
    {
      title: "AI 2025 Advanced Automation Solutions",
      description: "Cutting-edge automation solutions delivering 5000%+ ROI with intelligent workflows and enterprise-grade systems.",
      href: "/ai-2025-advanced-automation-solutions",
      category: "Automation",
      roi: "5000%+",
      icon: Zap,
      color: "blue",
      featured: true
    },
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI technologies transforming businesses with unprecedented 10,000% ROI achievements.",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "Breakthrough",
      roi: "10,000%+",
      icon: Brain,
      color: "purple",
      featured: true
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "Next-generation quantum computing and neural network convergence delivering 15,000% ROI potential.",
      href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      category: "Future Tech",
      roi: "15,000%+",
      icon: Target,
      color: "indigo",
      featured: true
    },
    {
      title: "Enterprise AI Transformation Success",
      description: "Real-world case studies showing Fortune 500 companies achieving massive ROI with AI implementation.",
      href: "/case-studies/ai-2025-ultimate-breakthrough-success",
      category: "Case Study",
      roi: "8,500%+",
      icon: Award,
      color: "green",
      featured: false
    },
    {
      title: "AI 2025 Implementation Master Guide",
      description: "Comprehensive blueprint for AI transformation success with step-by-step implementation frameworks.",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      category: "Guide",
      roi: "2,500%+",
      icon: Shield,
      color: "orange",
      featured: false
    },
    {
      title: "Revolutionary Tech Showcase 2025",
      description: "Latest technological innovations and breakthrough solutions transforming industries worldwide.",
      href: "/revolutionary-tech-showcase",
      category: "Innovation",
      roi: "6,200%+",
      icon: TrendingUp,
      color: "pink",
      featured: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-200 bg-blue-50",
      purple: "from-purple-500 to-purple-600 border-purple-200 bg-purple-50",
      indigo: "from-indigo-500 to-indigo-600 border-indigo-200 bg-indigo-50",
      green: "from-green-500 to-green-600 border-green-200 bg-green-50",
      orange: "from-orange-500 to-orange-600 border-orange-200 bg-orange-50",
      pink: "from-pink-500 to-pink-600 border-pink-200 bg-pink-50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            🚀 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive collection of AI breakthrough content, implementation guides, 
            and success stories delivering unprecedented ROI across all industries.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => {
            const IconComponent = item.icon;
            const colorClasses = getColorClasses(item.color);
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  item.featured ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                {item.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-t-2xl text-center font-semibold text-sm">
                    ⭐ FEATURED CONTENT
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-2xl font-bold text-green-600">{item.roi}</span>
                      <span className="text-sm text-gray-500 ml-1">ROI</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">4.9/5</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={item.href}
                    className={`w-full bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    Explore Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Proven Success Across Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">8,500%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">30</div>
              <div className="text-gray-600">Days Avg. Implementation</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join industry leaders achieving unprecedented success with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}