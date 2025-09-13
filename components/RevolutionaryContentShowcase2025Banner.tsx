import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, BookOpen, Users, TrendingUp, Zap, Brain, Target } from 'lucide-react';

const RevolutionaryContentShowcase2025Banner = () => {
  const contentItems = [
    {
      title: "AI 2025-2026 Ultimate Trends",
      description: "Revolutionary breakthrough predictions",
      href: "/blog/ai-2025-2026-ultimate-trends-breakthrough",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "50,000% ROI Case Study",
      description: "Revolutionary enterprise transformation",
      href: "/case-studies/ai-2025-revolutionary-enterprise-transformation-50000-roi",
      icon: Target,
      color: "text-green-400"
    },
    {
      title: "Ultimate Implementation Guide",
      description: "Complete business transformation blueprint",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      icon: BookOpen,
      color: "text-purple-400"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-blue-500/20 rounded-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative px-6 py-8 md:px-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
              <Star className="h-4 w-4 mr-2" />
              Revolutionary Content Showcase 2025
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Discover the Ultimate
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Content Revolution
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore breakthrough AI trends, revolutionary case studies, and comprehensive 
              implementation guides that will transform your business with unprecedented ROI.
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contentItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300">
                      <span>Explore Now</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">50,000%</div>
              <div className="text-sm text-gray-400">Maximum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">10,000x</div>
              <div className="text-sm text-gray-400">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Autonomous Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Explore All Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Users className="h-5 w-5 mr-2" />
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-8 right-8 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default RevolutionaryContentShowcase2025Banner;