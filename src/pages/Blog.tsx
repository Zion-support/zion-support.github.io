import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business: 2024 Trends and Predictions',
    excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
    content: 'Full article content would go here...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'AI & Machine Learning',
    readTime: '5 min read',
    image: '/images/blog/ai-trends-2024.jpg',
    tags: ['AI', 'Business', 'Technology', 'Future']
  },
  {
    id: '2',
    title: 'Micro SaaS: Building Profitable Small-Scale Software Solutions',
    excerpt: 'Learn how to build and scale micro SaaS applications that generate consistent revenue with minimal overhead.',
    content: 'Full article content would go here...',
    author: 'Mike Chen',
    date: '2024-01-10',
    category: 'Micro SaaS',
    readTime: '7 min read',
    image: '/images/blog/micro-saas-guide.jpg',
    tags: ['Micro SaaS', 'Startup', 'Revenue', 'Software']
  },
  {
    id: '3',
    title: 'Cybersecurity Best Practices for Modern Businesses',
    excerpt: 'Essential cybersecurity strategies every business should implement to protect their digital assets and customer data.',
    content: 'Full article content would go here...',
    author: 'Alex Rodriguez',
    date: '2024-01-05',
    category: 'Cybersecurity',
    readTime: '6 min read',
    image: '/images/blog/cybersecurity-guide.jpg',
    tags: ['Security', 'Business', 'Data Protection', 'IT']
  },
  {
    id: '4',
    title: 'Cloud Migration: A Step-by-Step Guide for Enterprises',
    excerpt: 'Navigate the complexities of cloud migration with our comprehensive guide for enterprise-level implementations.',
    content: 'Full article content would go here...',
    author: 'Emily Davis',
    date: '2024-01-01',
    category: 'Cloud Computing',
    readTime: '8 min read',
    image: '/images/blog/cloud-migration.jpg',
    tags: ['Cloud', 'Migration', 'Enterprise', 'Infrastructure']
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = memo(({ post }) => (
  <article className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center text-white/50">
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-blue-300">
        <span className="px-2 py-1 bg-blue-500/20 rounded-full text-xs">
          {post.category}
        </span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
        <Link to={`/blog/${post.id}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      
      <p className="text-blue-200 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            {post.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-white text-sm font-medium">{post.author}</p>
            <p className="text-blue-300 text-xs">{new Date(post.date).toLocaleDateString()}</p>
          </div>
        </div>
        
        <Link 
          to={`/blog/${post.id}`}
          className="text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:underline"
        >
          Read More →
        </Link>
      </div>
      
      <div className="flex flex-wrap gap-2 pt-2">
        {post.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </article>
));

BlogCard.displayName = 'BlogCard';

const Blog: React.FC = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(mockBlogPosts.map(post => post.category)))];

  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights, trends, and best practices in AI, technology, and business innovation.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-blue-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 9c-2.34 0-4.29-1.009-5.824-2.709" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">No articles found</h3>
              <p className="text-blue-200 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-200 mb-8">
            Get the latest articles and insights delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
});

Blog.displayName = 'Blog';

export default Blog;