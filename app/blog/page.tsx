import React from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowRight, TrendingUp, Clock, Eye } from 'lucide-react';

export const metadata = {
  title: 'Blog - Zion Tech Group | Latest AI & Technology Insights',
  description: 'Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from our expert team at Zion Tech Group.',
  keywords: 'AI blog, technology insights, quantum computing, cybersecurity, innovation, business transformation',
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  url: string;
  image: string;
  views?: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-revolution-2025',
    title: 'The AI Revolution of 2025: Transformative Technologies Reshaping Business',
    excerpt: 'Discover how cutting-edge AI technologies are revolutionizing industries and creating unprecedented opportunities for business growth and innovation.',
    author: 'Zion Tech Group',
    date: '2025-01-17',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Technology', 'Innovation', 'Business Transformation'],
    featured: true,
    url: '/blog/ai-revolution-2025',
    image: '🤖',
    views: 2847
  },
  {
    id: 'quantum-computing-breakthrough',
    title: 'Quantum Computing Breakthrough: Unlocking the Future of Problem-Solving',
    excerpt: 'Explore how quantum computing is revolutionizing cryptography, optimization, and scientific research, opening new possibilities for businesses worldwide.',
    author: 'Zion Tech Group',
    date: '2025-01-16',
    readTime: '10 min read',
    category: 'Quantum Computing',
    tags: ['Quantum Computing', 'Technology', 'Innovation', 'Cryptography'],
    featured: true,
    url: '/blog/quantum-computing-breakthrough',
    image: '⚛️',
    views: 1923
  },
  {
    id: 'multimodal-ai-applications',
    title: 'Multimodal AI: The Future of Human-Computer Interaction',
    excerpt: 'Learn how multimodal AI systems are transforming the way we interact with technology, from voice assistants to autonomous vehicles.',
    author: 'Zion Tech Group',
    date: '2025-01-15',
    readTime: '6 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Multimodal', 'Technology', 'User Experience'],
    featured: false,
    url: '/blog/multimodal-ai-applications',
    image: '🧠',
    views: 1456
  },
  {
    id: 'sustainable-tech-solutions',
    title: 'Building a Sustainable Future with Green Technology',
    excerpt: 'Discover how innovative technologies are helping businesses reduce their carbon footprint while improving efficiency and profitability.',
    author: 'Zion Tech Group',
    date: '2025-01-14',
    readTime: '7 min read',
    category: 'Sustainability',
    tags: ['Sustainability', 'Green Tech', 'Innovation', 'Environment'],
    featured: false,
    url: '/blog/sustainable-tech-solutions',
    image: '🌱',
    views: 1234
  },
  {
    id: 'cybersecurity-trends-2025',
    title: 'Cybersecurity Trends 2025: Protecting Your Digital Assets',
    excerpt: 'Stay ahead of emerging cybersecurity threats with our comprehensive guide to the latest security trends and best practices.',
    author: 'Zion Tech Group',
    date: '2025-01-13',
    readTime: '9 min read',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'Security', 'Technology', 'Best Practices'],
    featured: false,
    url: '/blog/cybersecurity-trends-2025',
    image: '🔒',
    views: 1876
  },
  {
    id: 'edge-computing-future',
    title: 'Edge Computing: Bringing Intelligence to the Edge',
    excerpt: 'Explore how edge computing is revolutionizing data processing and enabling real-time applications across industries.',
    author: 'Zion Tech Group',
    date: '2025-01-12',
    readTime: '5 min read',
    category: 'Edge Computing',
    tags: ['Edge Computing', 'Technology', 'Data Processing', 'Real-time'],
    featured: false,
    url: '/blog/edge-computing-future',
    image: '⚡',
    views: 987
  },
  // New content added September 2025
  {
    id: 'ai-go-to-market-2025',
    title: 'AI Go-To-Market 2025: From Zero to Traction',
    excerpt: 'Positioning, pricing, and distribution strategies that work for AI products in 2025.',
    author: 'Zion Tech Group',
    date: '2025-09-12',
    readTime: '12 min read',
    category: 'Growth & Marketing',
    tags: ['Go-To-Market', 'Pricing', 'Growth', 'AI'],
    featured: true,
    url: '/blog/ai-go-to-market-2025',
    image: '📈',
    views: 0
  },
  {
    id: 'startup-pricing-strategy-2025',
    title: 'Startup Pricing Strategy 2025: Validate, Launch, Scale',
    excerpt: 'Data-driven pricing strategies to validate willingness to pay and scale with confidence.',
    author: 'Zion Tech Group',
    date: '2025-09-12',
    readTime: '11 min read',
    category: 'Startup Strategy',
    tags: ['Pricing', 'Monetization', 'SaaS', 'AI'],
    featured: false,
    url: '/blog/startup-pricing-strategy-2025',
    image: '💵',
    views: 0
  },
  {
    id: 'cloud-native-architecture-2025',
    title: 'Cloud-Native Architecture in 2025: Building for Scale and Resilience',
    excerpt: 'Modern patterns and practices to build scalable, resilient, and cost-effective systems.',
    author: 'Zion Tech Group',
    date: '2025-09-12',
    readTime: '14 min read',
    category: 'Cloud & DevOps',
    tags: ['Cloud', 'Architecture', 'DevOps', 'Scalability'],
    featured: false,
    url: '/blog/cloud-native-architecture-2025',
    image: '☁️',
    views: 0
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest Insights & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
            and the cutting-edge technologies shaping our future.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} href={post.url} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl group-hover:scale-110 transition-transform">
                        {post.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views?.toLocaleString()}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-purple-400 group-hover:text-purple-300">
                          <span className="font-medium">Read Article</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link key={post.id} href={post.url} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20 h-full">
                  <div className="text-center mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform mb-4">
                      {post.image}
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views?.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 text-sm font-medium">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get the latest articles, case studies, and technology insights delivered directly to your inbox. 
              Join thousands of professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}