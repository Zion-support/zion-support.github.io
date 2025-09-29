import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Zap, Shield, Cloud, ArrowRight } from 'lucide-react';

export default function NewContentPromoBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const contentItems = [
    {
      title: "AI Neural Interfaces 2026",
      description: "Brain-computer integration with 95% accuracy",
      icon: Brain,
      link: "/blog/ai-neural-interfaces-2026",
      category: "Neural AI"
    },
    {
      title: "AI Space Technology 2026",
      description: "Autonomous space operations and exploration",
      icon: Zap,
      link: "/blog/ai-space-tech-2026",
      category: "Space AI"
    },
    {
      title: "$15M ROI Success Story",
      description: "Neural interface transformation case study",
      icon: Shield,
      link: "/case-studies/ai-neural-interface-success-2026",
      category: "Case Study"
    },
    {
      title: "AI Quantum Computing 2026",
      description: "Next-generation intelligence revolution",
      icon: Cloud,
      link: "/blog/ai-quantum-computing-2026",
      category: "Quantum AI"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Neural AI": "bg-purple-100 text-purple-800",
      "Space AI": "bg-blue-100 text-blue-800",
      "Case Study": "bg-green-100 text-green-800",
      "Quantum AI": "bg-indigo-100 text-indigo-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                🔥 JUST PUBLISHED 2026
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Revolutionary AI Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                & Breakthrough Technologies
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-6">
              Discover the latest AI innovations, neural interfaces, space technology, and real-world success stories 
              that are reshaping the future of business and technology in 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Explore All Content
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all inline-flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                View Success Stories
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <span className="font-semibold">4</span>
                <span>New Articles</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">1</span>
                <span>New Case Study</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">$15M+</span>
                <span>Proven ROI</span>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            ×
          </button>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                href={item.link}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-yellow-300 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}