import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Brain, Rocket, Globe, Zap } from 'lucide-react';

export const metadata = {
  title: 'AI Blog - Latest Insights & Innovations | Zion Tech Group',
  description: 'Discover cutting-edge AI insights, case studies, and innovations. Stay ahead with our latest articles on AI metaverse, neural interfaces, space technology, and more.',
  keywords: 'AI blog, artificial intelligence, machine learning, AI insights, tech innovation, AI case studies',
};

export default function BlogPage() {
  const featuredArticles = [
    {
      title: 'AI Metaverse Enterprise 2026: Immersive Business Transformation',
      slug: '/blog/ai-metaverse-enterprise-2026',
      description: 'Transform your business with immersive AI-powered metaverse solutions achieving 95% efficiency gains and $15M+ ROI.',
      readTime: '28 min read',
      category: 'Metaverse AI',
      stats: { efficiency: '95%', roi: '$15M+' },
      icon: Globe,
      gradient: 'from-purple-600 via-blue-600 to-cyan-600',
      featured: true
    },
    {
      title: 'AI Neural Interfaces 2026: Brain-Computer Integration Revolution',
      slug: '/blog/ai-neural-interfaces-2026',
      description: 'Experience the future of human-computer interaction with AI neural interfaces achieving 99.9% accuracy and $50M+ ROI.',
      readTime: '32 min read',
      category: 'Neural AI',
      stats: { accuracy: '99.9%', roi: '$50M+' },
      icon: Brain,
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      featured: true
    },
    {
      title: 'AI Space Technology 2026: Extraterrestrial Business Revolution',
      slug: '/blog/ai-space-tech-2026',
      description: 'Launch your business into the space economy with AI-powered satellite intelligence and $100B+ market opportunity.',
      readTime: '35 min read',
      category: 'Space AI',
      stats: { market: '$100B+', success: '99.9%' },
      icon: Rocket,
      gradient: 'from-blue-600 via-purple-600 to-indigo-600',
      featured: true
    }
  ];

  const allArticles = [
    ...featuredArticles,
    {
      title: 'AI Agent Orchestration 2026: Multi-Agent System Architecture',
      slug: '/blog/ai-agent-orchestration-2026',
      description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.',
      readTime: '22 min read',
      category: 'AI Orchestration',
      stats: { automation: '95%', roi: '$5M+' },
      icon: Zap,
      gradient: 'from-green-600 via-blue-600 to-purple-600'
    },
    {
      title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
      slug: '/blog/ai-sustainability-green-tech-2026',
      description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
      readTime: '18 min read',
      category: 'Sustainability',
      stats: { energy: '80%', savings: '$2M+' },
      icon: Globe,
      gradient: 'from-green-600 via-teal-600 to-blue-600'
    },
    {
      title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
      slug: '/blog/ai-quantum-computing-2026',
      description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
      readTime: '25 min read',
      category: 'Quantum AI',
      stats: { speed: '1000x', accuracy: '95%' },
      icon: Zap,
      gradient: 'from-purple-600 via-indigo-600 to-blue-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
          <Zap className="w-4 h-4 mr-2" />
          AI INSIGHTS & INNOVATIONS
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover cutting-edge AI insights, case studies, and innovations that are transforming 
          industries and creating unprecedented opportunities for growth.
        </p>
      </div>

      {/* Featured Articles */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Link key={index} href={article.slug} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className={`relative h-64 bg-gradient-to-br ${article.gradient}`}>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <article.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{article.title.split(':')[0]}</h3>
                      <p className="text-sm opacity-90">{article.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      {Object.entries(article.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((article, index) => (
            <Link key={index} href={article.slug} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  {article.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">📝 Article</span>
                  <span className="text-sm text-gray-500">{article.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <div className="flex gap-4 mb-4">
                  {Object.entries(article.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with AI Innovations</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest AI insights, case studies, and innovations delivered to your inbox. 
            Join 10,000+ professionals staying ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}