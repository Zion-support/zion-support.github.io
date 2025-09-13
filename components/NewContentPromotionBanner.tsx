import React from 'react';
import { ArrowRight, Star, Clock, Users, Zap, Brain, Target, Award } from 'lucide-react';

const NewContentPromotionBanner = () => {
  const newContent = [
    {
      title: "AI 2025-2026 Ultimate Showcase",
      description: "Discover revolutionary AI technologies that will define the next era",
      link: "/ai-2025-2026-ultimate-showcase",
      type: "Technology Showcase",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      badge: "New"
    },
    {
      title: "Interactive Learning Hub",
      description: "Master AI through hands-on tutorials and comprehensive courses",
      link: "/ai-interactive-learning-hub",
      type: "Learning Platform",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      badge: "Featured"
    },
    {
      title: "AI Success Stories 2025",
      description: "Real case studies showing extraordinary business results",
      link: "/ai-success-stories-2025",
      type: "Case Studies",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      badge: "Popular"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
            <Zap className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">New Content Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Latest AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, interactive learning experiences, and real-world success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newContent.map((content, index) => (
            <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  content.badge === 'New' ? 'bg-green-500/20 text-green-300' :
                  content.badge === 'Featured' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {content.badge}
                </span>
              </div>

              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <content.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {content.title}
                  </h3>
                  <p className="text-sm text-purple-300 font-medium">{content.type}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>1.2k+ views</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>4.9</span>
                  </div>
                </div>
                <a
                  href={content.link}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group-hover:scale-105"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/content-showcase"
            className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
          >
            View All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;