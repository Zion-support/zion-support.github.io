import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Atom, Bot } from 'lucide-react';

const NewContentPromotionBanner = () => {
  const newContent = [
    {
      title: "AI 2025-2026 Ultimate Innovation Showcase",
      description: "Discover revolutionary AI breakthroughs and cutting-edge technologies",
      href: "/ai-2025-2026-ultimate-innovation-showcase",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      badge: "New"
    },
    {
      title: "Quantum Computing 2026 Ultimate Breakthrough",
      description: "Experience quantum supremacy and next-generation quantum technologies",
      href: "/quantum-computing-2026-ultimate-breakthrough",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      badge: "Revolutionary"
    },
    {
      title: "Advanced Automation Solutions 2026 Ultimate",
      description: "Transform your business with intelligent automation and AI workflows",
      href: "/advanced-automation-solutions-2026-ultimate",
      icon: Bot,
      color: "from-green-500 to-emerald-500",
      badge: "Ultimate"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-purple-200 font-medium">New Content Available</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Our Latest
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most cutting-edge AI innovations, quantum breakthroughs, and automation solutions that will shape the future
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <Link
              key={index}
              href={content.href}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-r ${content.color} rounded-lg`}>
                  <content.icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                  {content.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {content.description}
              </p>
              
              <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                Explore Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators, researchers, and business leaders who are already experiencing the next generation of technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-2025-2026-ultimate-innovation-showcase"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Exploring
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/quantum-computing-2026-ultimate-breakthrough"
                className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-300"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;