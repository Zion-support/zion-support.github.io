import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
}

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogPosts: BlogPost[] = useMemo(() => [
    {
      id: 'ai-enterprise-transformation-2025',
      title: 'AI Enterprise Transformation 2025',
      description: 'Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies.',
      category: 'AI Strategy',
      readTime: '50 min read',
      date: '2025-01-15',
      path: '/blog/ai-enterprise-transformation-2025',
      image: '/api/placeholder/600/400',
      featured: true,
      stats: { views: 18750, engagement: 97 }
    },
    {
      id: 'ai-2025-2026-mega-trends',
      title: 'AI Mega Trends 2025-2026',
      description: 'Discover the groundbreaking AI trends and breakthroughs that will revolutionize enterprise operations in 2025-2026.',
      category: 'AI Trends',
      readTime: '15 min read',
      date: '2025-01-10',
      path: '/blog/ai-2025-2026-mega-trends-breakthrough',
      image: '/api/placeholder/600/400',
      featured: true,
      stats: { views: 12300, engagement: 89 }
    },
    {
      id: 'ai-cost-optimization-breakthrough',
      title: 'AI Cost Optimization Breakthrough',
      description: 'Learn how AI-driven cost optimization strategies can reduce operational expenses by up to 60% while improving efficiency.',
      category: 'Cost Optimization',
      readTime: '25 min read',
      date: '2025-01-05',
      path: '/blog/ai-cost-optimization-breakthrough-2026',
      image: '/api/placeholder/600/400',
      featured: false,
      stats: { views: 8900, engagement: 85 }
    },
    {
      id: 'ai-autonomous-business-systems',
      title: 'AI Autonomous Business Systems',
      description: 'Explore how autonomous AI systems are reshaping business operations and creating self-managing organizations.',
      category: 'Automation',
      readTime: '30 min read',
      date: '2024-12-28',
      path: '/blog/ai-autonomous-business-systems-2026',
      image: '/api/placeholder/600/400',
      featured: false,
      stats: { views: 15600, engagement: 92 }
    }
  ], []);

  const categories = ['all', 'AI Strategy', 'AI Trends', 'Cost Optimization', 'Automation'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI & Technology Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and breakthroughs in AI and technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 ${post.featured ? 'md:col-span-2' : ''}`}>
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  {post.stats && (
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>{post.stats.views.toLocaleString()} views</span>
                      <span>•</span>
                      <span>{post.stats.engagement}% engagement</span>
                    </div>
                  )}
                  
                  <Link
                    to={post.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogPage;