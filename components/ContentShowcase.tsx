import React from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'blog' | 'case-study' | 'service';
  category: string;
  readTime?: string;
  image?: string;
}

const featuredContent: ContentItem[] = [
  {
    id: 'ai-2026-comprehensive-future-guide',
    title: 'AI 2026: The Complete Future Guide',
    excerpt: 'Discover revolutionary AI technologies that will reshape enterprise operations in 2026. From quantum computing to neural interfaces, explore breakthrough innovations delivering unprecedented ROI.',
    type: 'blog',
    category: 'Comprehensive Guide',
    readTime: '25 min read',
    image: '🚀'
  },
  {
    id: 'ai-2026-mega-transformation-success-story',
    title: 'AI 2026 Mega Transformation: $100M ROI Success Story',
    excerpt: 'How a Fortune 500 manufacturing company achieved $100M ROI through comprehensive AI 2026 transformation across 47 countries.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '15 min read',
    image: '🏭'
  },
  {
    id: 'ai-2026-revolutionary-solutions',
    title: 'AI 2026 Revolutionary Solutions',
    excerpt: 'Transform your enterprise with cutting-edge AI technologies achieving 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'service',
    category: 'Featured Service',
    readTime: '5 min read',
    image: '⚡'
  },
  {
    id: 'quantum-ai-computing',
    title: 'Quantum AI Computing: The Next Frontier',
    excerpt: 'Explore how quantum computing is revolutionizing AI processing, delivering 1000x faster results and solving previously impossible optimization problems.',
    type: 'blog',
    category: 'Technology Deep Dive',
    readTime: '18 min read',
    image: '⚛️'
  },
  {
    id: 'neural-interfaces-enterprise',
    title: 'Neural Interfaces: Direct Brain-AI Communication',
    excerpt: 'Discover how neural interfaces are enabling direct brain-computer communication, revolutionizing human-AI collaboration and productivity.',
    type: 'blog',
    category: 'Breakthrough Technology',
    readTime: '20 min read',
    image: '🧠'
  },
  {
    id: 'autonomous-ai-agents',
    title: 'Autonomous AI Agents: Self-Managing Enterprise Systems',
    excerpt: 'Learn how autonomous AI agents are creating self-managing enterprise systems that operate independently with 99.9% accuracy.',
    type: 'blog',
    category: 'Enterprise AI',
    readTime: '14 min read',
    image: '🤖'
  }
];

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, success stories, and revolutionary AI solutions 
            that are transforming enterprise operations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((item) => (
            <Link
              key={item.id}
              href={`/${item.type === 'blog' ? 'blog' : item.type === 'case-study' ? 'case-studies' : 'services'}/${item.id}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'Comprehensive Guide' ? 'bg-purple-100 text-purple-800' :
                    item.category === 'Success Story' ? 'bg-green-100 text-green-800' :
                    item.category === 'Featured Service' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Technology Deep Dive' ? 'bg-indigo-100 text-indigo-800' :
                    item.category === 'Breakthrough Technology' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                  {item.readTime && (
                    <span className="text-gray-500 text-sm">{item.readTime}</span>
                  )}
                </div>
                
                <div className="text-4xl mb-4">{item.image}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Learn More'} →
                  </div>
                  <div className="text-gray-500 text-sm capitalize">
                    {item.type.replace('-', ' ')}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Case Studies
            </Link>
            <Link
              href="/services"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}