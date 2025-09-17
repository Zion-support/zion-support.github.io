import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Brain, Zap, Rocket, Star } from 'lucide-react';
const NewContentNavigation2026 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const newContentItems = [
    {
      title: "Synthetic Intelligence 2026",
      description: "Beyond Human Cognition",
      link: "/blog/synthetic-intelligence-2026-beyond-human-cognition",
      icon: Brain,
      category: "Blog Post",
      featured: true
    },
    {
      title: "Interdimensional Computing",
      description: "Processing Across Realities",
      link: "/blog/interdimensional-computing-processing-across-realities",
      icon: Zap,
      category: "Blog Post",
      featured: true
    },
    {
      title: "Reality Engineering",
      description: "Programming the Physical World",
      link: "/blog/reality-engineering-programming-physical-world",
      icon: Rocket,
      category: "Blog Post",
      featured: true
    },
    {
      title: "Synthetic Intelligence Systems",
      description: "Revolutionary AI Services",
      link: "/services/synthetic-intelligence-001",
      icon: Brain,
      category: "Service",
      featured: true
    },
    {
      title: "Interdimensional Computing Platform",
      description: "Multi-Reality Solutions",
      link: "/services/interdimensional-computing-001",
      icon: Zap,
      category: "Service",
      featured: true
    },
    {
      title: "Reality Engineering Solutions",
      description: "Physics Programming",
      link: "/services/reality-engineering-001",
      icon: Rocket,
      category: "Service",
      featured: true
    }
  ];
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <Sparkles className="w-4 h-4" />
        New 2026 Content
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Revolutionary Content 2026
            </h3>
            <p className="text-cyan-100 text-sm">Explore the future of technology</p>
          </div>
          {/* Content List */}
          <div className="max-h-96 overflow-y-auto">
            {newContentItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="group flex items-start gap-3 p-4 hover:bg-white/5 transition-colors duration-200 border-b border-white/5 last:border-b-0"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors truncate">
                      {item.title}
                    </h4>
                    {item.featured && (
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors line-clamp-1">
                    {item.description}
                  </p>
                  <span className="inline-block mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* Footer */}
          <div className="bg-slate-800/50 p-4 border-t border-white/5">
            <div className="flex gap-2">
              <Link
                to="/blog"
                className="flex-1 bg-white/10 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-white/20 transition-colors duration-200"
              >
                All Blog Posts
              </Link>
              <Link
                to="/services"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );

};

export default NewContentNavigation2026;
