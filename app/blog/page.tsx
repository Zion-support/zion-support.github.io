'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, TrendingUp, BookOpen, Zap, Brain, Shield } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured?: boolean;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise: A Comprehensive Guide',
    excerpt: 'Explore how artificial intelligence is transforming enterprise operations and what businesses need to know to stay competitive.',
    content: 'Full content here...',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Enterprise', 'Technology'],
    featured: true,
    readTime: '8 min read',
    image: '/images/blog/ai-enterprise.jpg'
  },
  {
    id: '2',
    title: 'Cybersecurity Best Practices for 2024',
    excerpt: 'Essential cybersecurity strategies every organization should implement to protect against evolving threats.',
    content: 'Full content here...',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    category: 'Cybersecurity',
    tags: ['Security', 'Best Practices', '2024'],
    readTime: '6 min read',
    image: '/images/blog/cybersecurity.jpg'
  },
  {
    id: '3',
    title: 'Cloud Migration Strategies: A Step-by-Step Guide',
    excerpt: 'Learn the best practices for migrating your infrastructure to the cloud with minimal disruption.',
    content: 'Full content here...',
    author: 'Jennifer Liu',
    date: '2024-01-05',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Migration', 'Infrastructure'],
    readTime: '10 min read',
    image: '/images/blog/cloud-migration.jpg'
  },
  {
    id: '4',
    title: 'The Rise of Quantum Computing in Business',
    excerpt: 'Understanding quantum computing and its potential impact on business operations and data processing.',
    content: 'Full content here...',
    author: 'Dr. Alex Thompson',
    date: '2024-01-01',
    category: 'Emerging Technologies',
    tags: ['Quantum Computing', 'Innovation', 'Future Tech'],
    readTime: '7 min read',
    image: '/images/blog/quantum-computing.jpg'
  },
  {
    id: '5',
    title: 'Digital Transformation: Lessons from Industry Leaders',
    excerpt: 'Key insights from successful digital transformation initiatives across various industries.',
    content: 'Full content here...',
    author: 'Maria Garcia',
    date: '2023-12-28',
    category: 'Digital Transformation',
    tags: ['Digital Transformation', 'Strategy', 'Leadership'],
    readTime: '9 min read',
    image: '/images/blog/digital-transformation.jpg'
  },
  {
    id: '6',
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'Best practices for designing and implementing microservices that can scale with your business.',
    content: 'Full content here...',
    author: 'David Kim',
    date: '2023-12-25',
    category: 'Software Development',
    tags: ['Microservices', 'Architecture', 'Scalability'],
    readTime: '12 min read',
    image: '/images/blog/microservices.jpg'
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: Brain },
    { id: 'Cybersecurity', name: 'Security', icon: Shield },
    { id: 'Cloud Computing', name: 'Cloud', icon: Zap },
    { id: 'Emerging Technologies', name: 'Emerging Tech', icon: TrendingUp },
    { id: 'Digital Transformation', name: 'Digital Transform', icon: ArrowRight },
    { id: 'Software Development', name: 'Development', icon: Code }
  ];

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology, and business innovation. Expert articles, case studies, and industry trends from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, technology insights, business innovation, artificial intelligence articles, tech trends, digital transformation, cybersecurity, cloud computing"
        />
        <meta property="og:title" content="Blog - Zion Tech Group | AI & Technology Insights" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, technology, and business innovation." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group | AI & Technology Insights" />
        <meta name="twitter:description" content="Stay updated with the latest insights on AI, technology, and business innovation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay ahead with expert insights on AI, cybersecurity, cloud computing, and emerging technologies
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{featuredPost.author}</p>
                          <p className="text-sm text-gray-500">{featuredPost.date}</p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.date}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest technology insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}