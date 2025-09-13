import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Atom, Bot } from 'lucide-react';

const newContentItems = [
  {
    title: "AI Innovation Showcase 2026",
    description: "Discover revolutionary AI breakthroughs",
    href: "/ai-innovation-showcase-2026",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    badge: "New"
  },
  {
    title: "Quantum Computing Solutions",
    description: "Explore quantum technology advances",
    href: "/quantum-computing-solutions-2026",
    icon: Atom,
    color: "from-blue-500 to-cyan-500",
    badge: "Featured"
  },
  {
    title: "Advanced Automation 2026",
    description: "Transform your business processes",
    href: "/advanced-automation-solutions-2026",
    icon: Bot,
    color: "from-green-500 to-emerald-500",
    badge: "Popular"
  }
];

export default function NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            New Content Available
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Latest Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI, quantum computing, and automation solutions that are reshaping the future of technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newContentItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:border-purple-400/50">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                    item.badge === 'Featured' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>

                <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  Explore Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified about new content, features, and breakthrough technologies as they're released.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Subscribe to Updates
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                View All Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}