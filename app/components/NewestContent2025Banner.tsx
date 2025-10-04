import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, TrendingUp, Star } from 'lucide-react';

const NewestContent2025Banner: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'AI Autonomous Workflows 2025',
      slug: 'ai-autonomous-workflows-2025',
      excerpt: 'Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration',
      category: 'Enterprise Automation',
      icon: '🤖',
      badge: 'NEW',
      readTime: '8 min read',
      publishDate: '2025-01-15'
    },
    {
      id: 2,
      title: 'Quantum-Neural Fusion Systems',
      slug: 'quantum-neural-fusion-systems',
      excerpt: 'Revolutionary AI that combines quantum computing with neural networks for unprecedented performance',
      category: 'Quantum AI',
      icon: '⚡',
      badge: 'BREAKTHROUGH',
      readTime: '12 min read',
      publishDate: '2025-01-14'
    },
    {
      id: 3,
      title: 'Meta-Cognitive Intelligence Platform',
      slug: 'meta-cognitive-intelligence-platform',
      excerpt: 'AI that thinks about thinking - the next evolution in artificial intelligence',
      category: 'Advanced AI',
      icon: '🧠',
      badge: 'REVOLUTIONARY',
      readTime: '15 min read',
      publishDate: '2025-01-13'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
              Latest Content 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover breakthrough technologies and cutting-edge solutions that are reshaping enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <Link
              key={content.id}
              href={`/blog/${content.slug}`}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  {content.badge}
                </span>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl mb-4">{content.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{content.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-purple-300">
                    {content.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {content.readTime}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-purple-400 font-semibold transition-colors group-hover:text-purple-300">
                Read More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewestContent2025Banner;