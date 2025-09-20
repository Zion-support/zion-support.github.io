<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Blog - AI, Quantum Computing & Technology Insights',
  description: 'Stay updated with the latest insights, trends, and innovations in AI, quantum computing, and technology from Zion Tech Group experts.',
  keywords: ['blog', 'AI insights', 'quantum computing', 'technology trends', 'innovation', 'tech news'],
  openGraph: {
    title: 'Blog - AI, Quantum Computing & Technology Insights',
    description: 'Latest insights and innovations in AI and technology.',
    type: 'website',
    url: 'https://ziontechgroup.com/blog'
  }
}

export default function BlogPage() {
const blogPosts = [
{
title: 'The Future of AI: 2025 Predictions and Beyond',
excerpt: 'Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond.',
date: '2025-01-15',
readTime: '5 min read',
category: 'AI',
href: '/blog/ai-2025-predictions',
image: '🤖'
},
{
title: 'Quantum Computing Breakthrough: What It Means for Business',
excerpt: 'Understanding the latest quantum computing advances and their practical business applications.',
date: '2025-01-12',
readTime: '7 min read',
category: 'Quantum Computing',
href: '/blog/quantum-computing-breakthrough',
image: '⚛️'
},
{
title: 'Automation Revolution: Transforming Enterprise Operations',
excerpt: 'How intelligent automation is revolutionizing business processes and driving efficiency.',
date: '2025-01-10',
readTime: '6 min read',
category: 'Automation',
href: '/blog/automation-revolution',
image: '⚙️'
},
{
title: 'AI Ethics: Building Responsible Technology',
excerpt: 'The importance of ethical AI development and implementation in modern enterprises.',
date: '2025-01-08',
readTime: '8 min read',
category: 'Ethics',
href: '/blog/ai-ethics',
image: '⚖️' 
},
{
title: 'Digital Transformation: A Complete Guide',
excerpt: 'A comprehensive guide to successful digital transformation strategies and implementation.',
date: '2025-01-05',
readTime: '10 min read',
category: 'Digital Transformation',
href: '/blog/digital-transformation-guide',
image: '🚀' 
},
{
title: 'Machine Learning in Production: Best Practices',
excerpt: 'Essential practices for deploying and maintaining machine learning models in production environments.',
date: '2025-01-03',
readTime: '9 min read',
category: 'Machine Learning',
href: '/blog/ml-production-best-practices',
image: '🧠' 
}
] 

const categories = ['All', 'AI', 'Quantum Computing', 'Automation', 'Ethics', 'Digital Transformation', 'Machine Learning']

return ( 
<div className="min-h-screen bg-gray-900 text-white"> 
{/* Hero Section */}
<section className="bg-gradient-to-br from-blue-900 to-purple-900 py-20"> 
<div className="container mx-auto px-4"> 
<div className="max-w-4xl mx-auto text-center"> 
<h1 className="text-5xl lg:text-6xl font-bold mb-6"> 
Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insights</span> 
</h1> 
<p className="text-xl text-gray-300 mb-8"> 
Stay ahead of the curve with expert insights, trends, and innovations in AI, quantum computing, and technology. 
</p> 
</div> 
</div> 
</section> 

{/* Categories */}
<section className="py-8 bg-gray-800/30"> 
<div className="container mx-auto px-4"> 
<div className="flex flex-wrap justify-center gap-4"> 
{categories.map((category, index) => (
<button 
key={index}
className={`px-6 py-3 rounded-full font-semibold transition-colors ${
category === 'All' 
? 'bg-blue-600 text-white' 
: 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
}`}
> 
{category}
</button> 
))}
</div> 
</div> 
</section> 

{/* Featured Post */}
<section className="py-20"> 
<div className="container mx-auto px-4"> 
<div className="bg-gray-800/50 rounded-xl overflow-hidden mb-16"> 
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
<div className="p-8"> 
<div className="flex items-center space-x-4 mb-4"> 
<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span> 
<span className="text-gray-400 text-sm">AI</span> 
</div> 
<h2 className="text-3xl font-bold mb-4"> 
The Future of AI: 2025 Predictions and Beyond 
</h2> 
<p className="text-gray-300 mb-6 text-lg"> 
Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond. 
From advanced neural networks to autonomous systems, discover what's coming next. 
</p> 
<div className="flex items-center space-x-4 text-sm text-gray-400 mb-6"> 
<span>January 15, 2025</span> 
<span>•</span> 
<span>5 min read</span> 
</div> 
<Link 
href="/blog/ai-2025-predictions" 
className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
> 
Read More 
<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> 
</svg> 
</Link> 
</div> 
<div className="bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-8xl"> 
🤖 
</div> 
</div> 
</div> 
</div> 
</section> 

{/* Blog Posts Grid */}
<section className="py-20 bg-gray-800/30"> 
<div className="container mx-auto px-4"> 
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
{blogPosts.slice(1).map((post, index) => (
<Link key={index} href={post.href} className="group"> 
<div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-700/50 transition-colors group-hover:scale-105 transform duration-200"> 
<div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center text-6xl"> 
{post.image}
</div> 
<div className="p-6"> 
<div className="flex items-center space-x-4 mb-3"> 
<span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold"> 
{post.category}
</span> 
</div> 
<h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors"> 
{post.title}
</h3> 
<p className="text-gray-300 mb-4 text-sm"> 
{post.excerpt}
</p> 
<div className="flex items-center justify-between text-sm text-gray-400"> 
<span>{post.date}</span> 
<span>{post.readTime}</span> 
</div> 
</div> 
</div> 
</Link> 
))}
</div> 
</div> 
</section> 

{/* Newsletter Signup */}
<section className="py-20"> 
<div className="container mx-auto px-4"> 
<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center"> 
<h2 className="text-3xl font-bold mb-4">Stay Updated</h2> 
<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"> 
Get the latest insights, trends, and innovations delivered directly to your inbox. 
</p> 
<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"> 
<input 
type="email"
placeholder="Enter your email" 
className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
/> 
<button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"> 
Subscribe 
</button> 
</div> 
</div> 
</div> 
</section> 
</div> 
) 
=======
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Search } from "lucide-react";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'ai', name: 'Artificial Intelligence' },
  { id: 'tech', name: 'Technology' },
  { id: 'business', name: 'Business' },
  { id: 'tutorials', name: 'Tutorials' }
];

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, selectedCategory, searchQuery]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      // Mock data for now
      const mockPosts: BlogPost[] = [
        {
          id: '1',
          title: 'The Future of AI in Business',
          excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
          content: 'Full article content...',
          author: 'John Doe',
          date: '2024-01-15',
          category: 'ai',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ccad005?w=800&h=400&fit=crop',
          slug: 'future-ai-business'
        },
        {
          id: '2',
          title: 'Building Scalable Web Applications',
          excerpt: 'Best practices for creating web applications that can handle millions of users.',
          content: 'Full article content...',
          author: 'Jane Smith',
          date: '2024-01-10',
          category: 'tech',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
          slug: 'scalable-web-applications'
        }
      ];
      
      setPosts(mockPosts);
      logInfo('Blog posts fetched successfully');
    } catch (error) {
      logErrorToProduction('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
=======
import { Header } from '@/components/Header';
import { BLOG_POSTS } from '@/data/blog-posts';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = BLOG_POSTS;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(post =>
        selectedCategories.some(category => post.categories.includes(category))
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
      );
    }

    setFilteredPosts(filtered);
<<<<<<< HEAD
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          )}
        </div>
      </div>
=======
  }, [searchTerm, selectedCategories]);

  const categories = Array.from(new Set(BLOG_POSTS.flatMap(post => post.categories)));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading posts...</p>
            </div>
          ) : (
            <>
              {/* Search and Filter */}
              <div className="mb-8 space-y-4">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategories(prev =>
                          prev.includes(category)
                            ? prev.filter(c => c !== category)
                            : [...prev, category]
                        );
                      }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategories.includes(category)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Posts */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map(category => (
                          <span key={category} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {category}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">No posts found matching your criteria.</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
    </div>
  );
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
}