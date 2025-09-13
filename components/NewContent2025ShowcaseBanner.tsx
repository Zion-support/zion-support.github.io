import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Target, TrendingUp, Zap, Star } from 'lucide-react';

const NewContent2025ShowcaseBanner = () => {
  const newContent = [
    {
      type: 'Blog Post',
      title: 'AI 2025: Comprehensive Trends Analysis',
      description: 'The most comprehensive analysis of AI trends, breakthrough technologies, and future predictions',
      icon: TrendingUp,
      href: '/blog/ai-2025-comprehensive-trends-analysis',
      color: 'from-blue-500 to-purple-500'
    },
    {
      type: 'Case Study',
      title: 'Global Enterprise AI Transformation',
      description: 'How a Fortune 500 company achieved 15,000% ROI through comprehensive AI transformation',
      icon: Target,
      href: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
      color: 'from-green-500 to-blue-500'
    },
    {
      type: 'Tutorial',
      title: 'AI Implementation Masterclass',
      description: 'Complete step-by-step guide to successful enterprise AI implementation',
      icon: BookOpen,
      href: '/tutorials/ai-implementation-step-by-step-masterclass',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            New Content Available
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Fresh Insights & Breakthrough Content
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our latest comprehensive guides, real-world case studies, and expert tutorials 
            designed to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <Link key={index} href={content.href} className="group">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-105">
                  {/* Content Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                      {content.type}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    {content.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                    <span>Explore Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'New Articles', value: '25+', icon: BookOpen },
            { label: 'Case Studies', value: '15+', icon: Users },
            { label: 'Success Rate', value: '95%', icon: Target },
            { label: 'ROI Achieved', value: '15,000%', icon: Zap }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-slate-700/30">
                <IconComponent className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Ahead of the AI Revolution
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of forward-thinking leaders who are already implementing these breakthrough 
            AI strategies. Access our complete library of resources and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="h-5 w-5" />
              Explore All Content
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Users className="h-5 w-5" />
              Get Expert Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025ShowcaseBanner;