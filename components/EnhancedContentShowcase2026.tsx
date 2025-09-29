import React from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcase2026() {
  const featuredContent = [
    {
      type: 'blog',
      title: 'AI 2026 Mega Breakthroughs: The Revolutionary Technologies Reshaping Enterprise',
      description: 'Discover the groundbreaking AI technologies of 2026 that are transforming enterprise operations, from quantum-enhanced machine learning to autonomous business systems.',
      href: '/blog/ai-2026-mega-breakthroughs',
      category: 'AI Innovation',
      readTime: '15 min read',
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-purple-100 text-purple-800',
      image: '🚀'
    },
    {
      type: 'case-study',
      title: 'AI Mega Transformation Success 2026: $100M ROI in 18 Months',
      description: 'How a Fortune 500 company achieved unprecedented success through comprehensive AI transformation, delivering $100M in ROI while revolutionizing their entire operation.',
      href: '/case-studies/ai-mega-transformation-success-2026',
      category: 'Success Story',
      readTime: '12 min read',
      badge: 'SUCCESS STORY',
      badgeColor: 'bg-green-100 text-green-800',
      image: '🏆'
    },
    {
      type: 'blog',
      title: 'AI Quantum Computing Breakthrough 2026: 1000x Performance Revolution',
      description: 'Discover how quantum computing is revolutionizing AI with 1000x performance gains, real-world applications, and enterprise implementation strategies.',
      href: '/blog/ai-quantum-computing-breakthrough-2026',
      category: 'Quantum AI',
      readTime: '20 min read',
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-blue-100 text-blue-800',
      image: '⚡'
    },
    {
      type: 'case-study',
      title: 'AI Quantum Optimization Success 2026: 1000x Performance Breakthrough',
      description: 'How a financial services company achieved 1000x performance improvements using quantum-enhanced AI optimization, delivering $50M in additional value.',
      href: '/case-studies/ai-quantum-optimization-success-2026',
      category: 'Quantum Success',
      readTime: '14 min read',
      badge: 'QUANTUM BREAKTHROUGH',
      badgeColor: 'bg-purple-100 text-purple-800',
      image: '🔬'
    },
    {
      type: 'blog',
      title: 'AI Sustainability & Green Tech 2026: Building a Carbon-Neutral Future',
      description: 'Discover how AI is driving sustainability initiatives, reducing carbon footprints, and enabling green technology solutions for a sustainable future.',
      href: '/blog/ai-sustainability-green-tech-2026',
      category: 'Sustainability',
      readTime: '16 min read',
      badge: 'SUSTAINABILITY',
      badgeColor: 'bg-green-100 text-green-800',
      image: '🌱'
    },
    {
      type: 'case-study',
      title: 'AI Sustainability Transformation 2026: Carbon Neutral in 12 Months',
      description: 'How a global manufacturing company achieved carbon neutrality using AI-powered sustainability solutions, reducing emissions by 90% and saving $75M annually.',
      href: '/case-studies/ai-sustainability-transformation-2026',
      category: 'Green Success',
      readTime: '13 min read',
      badge: 'SUSTAINABILITY SUCCESS',
      badgeColor: 'bg-green-100 text-green-800',
      image: '🌍'
    },
    {
      type: 'blog',
      title: 'AI Future Workplace 2026: The Human-AI Collaboration Revolution',
      description: 'Explore how AI is transforming the workplace of the future, enabling seamless human-AI collaboration and unprecedented productivity gains.',
      href: '/blog/ai-future-workplace-2026',
      category: 'Future of Work',
      readTime: '17 min read',
      badge: 'FUTURE',
      badgeColor: 'bg-indigo-100 text-indigo-800',
      image: '🏢'
    },
    {
      type: 'blog',
      title: 'AI Enterprise Automation Revolution 2026: Complete Business Transformation Guide',
      description: 'Master the AI automation revolution with our comprehensive guide to enterprise transformation, featuring real-world case studies and implementation strategies.',
      href: '/blog/ai-enterprise-automation-revolution-2026',
      category: 'Enterprise AI',
      readTime: '18 min read',
      badge: 'GUIDE',
      badgeColor: 'bg-blue-100 text-blue-800',
      image: '🤖'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Innovation Content 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, breakthrough technologies, and real-world success stories 
            that are shaping the future of enterprise automation and intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{content.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${content.badgeColor}`}>
                        {content.badge}
                      </span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600">{content.category}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <Link
                  href={content.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:underline"
                >
                  {content.type === 'blog' ? 'Read Article' : 'View Case Study'}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              📚 Explore All Blog Articles
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              🏆 View All Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}