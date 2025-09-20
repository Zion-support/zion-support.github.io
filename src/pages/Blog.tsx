import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
    excerpt: "Explore the latest AI trends transforming enterprise operations and how businesses can leverage these technologies for competitive advantage.",
    author: "Dr. Sarah Chen",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Enterprise", "Technology"],
    image: "/api/placeholder/600/400",
    featured: true,
    slug: "future-ai-enterprise-2025"
  },
  {
    id: 2,
    title: "Quantum Computing Breakthrough: What It Means for Your Business",
    excerpt: "Understanding the latest quantum computing advances and their practical applications in solving complex business problems.",
    author: "Prof. Michael Rodriguez",
    date: "2025-01-12",
    readTime: "12 min read",
    category: "Quantum Computing",
    tags: ["Quantum", "Computing", "Innovation"],
    image: "/api/placeholder/600/400",
    featured: true,
    slug: "quantum-computing-breakthrough-business"
  },
  {
    id: 3,
    title: "Micro SaaS Revolution: Building Scalable Solutions",
    excerpt: "How micro SaaS platforms are changing the software landscape and creating new opportunities for businesses.",
    author: "Alex Thompson",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Micro SaaS",
    tags: ["SaaS", "Software", "Business"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "micro-saas-revolution-scalable-solutions"
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of AI: New Threats and Solutions",
    excerpt: "Examining how AI is both creating new security challenges and providing innovative solutions to protect enterprise data.",
    author: "Lisa Park",
    date: "2025-01-08",
    readTime: "10 min read",
    category: "Cybersecurity",
    tags: ["Security", "AI", "Enterprise"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "cybersecurity-age-ai-threats-solutions"
  }
];

const categories = [
  { name: "AI & Machine Learning", count: 15 },
  { name: "Quantum Computing", count: 8 },
  { name: "Cybersecurity", count: 12 },
  { name: "Micro SaaS", count: 6 }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEO
        title="Blog - Zion Tech Group | Technology Insights & Industry News"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group's expert team."
        keywords="technology blog AI insights quantum computing cybersecurity digital transformation tech news"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <GradientHeading className="text-5xl md:text-6xl font-bold text-white mb-6">
                Technology Insights
              </GradientHeading>
              <p className="text-xl text-gray-300 mb-8">
                Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and the latest technology trends shaping our future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.slice(0, 4).map((category, index) => (
                  <span
                    key={category.name}
                    className="px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder-gray-400"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-md text-white"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Featured Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => (
                      <Card key={post.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">
                              {post.category}
                            </span>
                            <span className="text-yellow-400 text-xs font-medium">Featured</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center gap-4">
                              <span>{post.author}</span>
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Regular Posts */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
                <div className="space-y-8">
                  {regularPosts.map((post) => (
                    <Card key={post.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="text-4xl opacity-20">📄</div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">
                                {post.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="text-gray-300 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span>{post.author}</span>
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span>{post.readTime}</span>
                              </div>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                Read More →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                      >
                        <span className="text-gray-300 group-hover:text-white">{category.name}</span>
                        <span className="text-sm text-gray-400">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-4">
                    Get the latest technology insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}