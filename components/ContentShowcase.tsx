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
    id: 'ai-2026-revolutionary-breakthrough',
    title: 'AI 2026 Revolutionary Breakthrough: The Future of Enterprise AI is Here',
    excerpt: 'Discover the revolutionary AI breakthroughs of 2026 that are transforming enterprise operations. From autonomous AI systems to quantum-enhanced computing.',
    type: 'blog',
    category: 'Revolutionary Breakthrough',
    readTime: '25 min read',
    image: '🚀'
  },
  {
    id: 'ai-2026-mega-transformation-success-story',
    title: '$100M AI Transformation Success Story: Fortune 500 Mega Breakthrough',
    excerpt: 'Discover how a Fortune 500 manufacturing giant achieved $100M ROI, 95% efficiency gains, and 300% productivity improvement.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '15 min read',
    image: '🏆'
  },
  {
    id: 'ai-2026-quantum-computing-breakthrough',
    title: 'Quantum AI Computing Breakthrough 2026: 500x Performance Revolution',
    excerpt: 'Explore how quantum-enhanced AI is solving impossible optimization problems in seconds, delivering 500x faster results.',
    type: 'blog',
    category: 'Quantum AI',
    readTime: '20 min read',
    image: '⚛️'
  },
  {
    id: 'ai-2026-neural-interface-revolution',
    title: 'Neural Interface Revolution 2026: Direct Human-AI Collaboration',
    excerpt: 'Discover how neural interfaces are enabling direct human-AI collaboration and cognitive enhancement.',
    type: 'blog',
    category: 'Neural Interfaces',
    readTime: '18 min read',
    image: '🧠'
  }
];

const ContentShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured AI Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthroughs, success stories, and revolutionary AI technologies 
            that are transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((item) => (
            <Link
              key={item.id}
              href={`/${item.type === 'case-study' ? 'case-studies' : item.type}/${item.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-200 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.image}</div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'Revolutionary Breakthrough' ? 'bg-red-100 text-red-800' :
                    item.category === 'Success Story' ? 'bg-green-100 text-green-800' :
                    item.category === 'Quantum AI' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item.category}
                  </span>
                  {item.readTime && (
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  {item.type === 'case-study' ? 'View Case Study' : 'Read Article'} →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;