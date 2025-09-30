import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI & Tech Blog | Latest Insights, Guides & Case Studies | Zion Tech Group',
  description: 'Stay ahead with our latest AI insights, implementation guides, and success stories. Expert content on AI transformation, automation, and digital innovation.',
  keywords: 'AI blog, tech insights, AI guides, case studies, AI transformation, automation, digital innovation',
  openGraph: {
    title: 'AI & Tech Blog | Latest Insights, Guides & Case Studies',
    description: 'Stay ahead with our latest AI insights, implementation guides, and success stories.',
    type: 'website',
    url: 'https://ziontechgroup.com/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI & Tech Blog',
      },
    ],
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
      excerpt: 'Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with proven strategies.',
      href: '/blog/ai-enterprise-transformation-2026',
      category: 'Featured Article',
      readTime: '25 min read',
      publishedDate: 'January 20, 2026',
      image: '/blog/ai-enterprise-transformation-2026.jpg',
      tags: ['AI Transformation', 'Enterprise AI', 'ROI', 'Implementation']
    },
    {
      title: 'AI Autonomous Systems 2026: Enterprise Implementation Guide',
      excerpt: 'Deploy intelligent autonomous systems that work 24/7 to optimize your business operations. Achieve 400% efficiency gains and reduce costs by 80%.',
      href: '/blog/ai-autonomous-systems-2026',
      category: 'New Article',
      readTime: '22 min read',
      publishedDate: 'January 20, 2026',
      image: '/blog/ai-autonomous-systems-2026.jpg',
      tags: ['Autonomous AI', 'AI Agents', 'Automation', 'Efficiency']
    },
    {
      title: 'AI Multimodal Integration 2025: The Future of Enterprise AI',
      excerpt: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration. Achieve 250% efficiency gains.',
      href: '/blog/ai-multimodal-integration-2025',
      category: 'Featured Article',
      readTime: '22 min read',
      publishedDate: 'January 20, 2025',
      image: '/blog/ai-multimodal-integration-2025.jpg',
      tags: ['Multimodal AI', 'Enterprise AI', 'Integration', 'Efficiency']
    },
    {
      title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
      excerpt: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.',
      href: '/blog/ai-enterprise-adoption-2025',
      category: 'New Article',
      readTime: '20 min read',
      publishedDate: 'January 20, 2025',
      image: '/blog/ai-enterprise-adoption-2025.jpg',
      tags: ['AI Adoption', 'Enterprise AI', 'ROI', 'Strategy']
    },
    {
      title: 'AI Trends 2025: Top 10 Predictions & Industry Insights',
      excerpt: 'Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.',
      href: '/blog/ai-trends-2025-predictions',
      category: 'Featured Article',
      readTime: '15 min read',
      publishedDate: 'January 20, 2025',
      image: '/blog/ai-trends-2025-predictions.jpg',
      tags: ['AI Trends', 'Predictions', 'Industry Insights', 'Technology']
    },
    {
      title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
      excerpt: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.',
      href: '/blog/ai-autonomous-agents-2025',
      category: 'New Article',
      readTime: '18 min read',
      publishedDate: 'January 20, 2025',
      image: '/blog/ai-autonomous-agents-2025.jpg',
      tags: ['Autonomous Agents', 'AI Implementation', 'ROI', 'Enterprise']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI & Tech Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead with our latest AI insights, implementation guides, and success stories from industry experts.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link key={index} href={post.href} className="group">
            <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    post.category === 'Featured Article' ? 'bg-blue-100 text-blue-800' :
                    post.category === 'New Article' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.publishedDate}</span>
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest AI Insights
          </h2>
          <p className="text-gray-600 mb-6">
            Get weekly updates on AI trends, tech innovations, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}