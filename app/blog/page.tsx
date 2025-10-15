import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', count: 24 },
    { id: 'ai', name: 'AI', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud', name: 'Cloud', count: 5 },
    { id: 'devops', name: 'DevOps', count: 3 },
    { id: 'quantum', name: 'Quantum', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Transforming Patient Care",
      excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans.",
      category: 'ai',
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: What It Means for Cybersecurity",
      excerpt: "Understanding the implications of quantum computing advances on current encryption methods and security protocols.",
      category: 'quantum',
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Zero Trust Architecture: The New Standard for Enterprise Security",
      excerpt: "Learn how implementing zero trust principles can significantly enhance your organization's security posture.",
      category: 'cybersecurity',
      author: "Alex Thompson",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Cloud-Native Development: Best Practices for 2024",
      excerpt: "Essential strategies and tools for building scalable, resilient applications in cloud environments.",
      category: 'cloud',
      author: "Emma Wilson",
      date: "2024-01-08",
      readTime: "10 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "AI-Powered DevOps: Automating the Future of Software Delivery",
      excerpt: "Discover how artificial intelligence is transforming DevOps practices and accelerating software delivery pipelines.",
      category: 'devops',
      author: "David Park",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Machine Learning in Cybersecurity: Detecting Threats Before They Strike",
      excerpt: "How ML algorithms are being used to identify and prevent cyber threats in real-time.",
      category: 'ai',
      author: "Lisa Zhang",
      date: "2024-01-03",
      readTime: "9 min read",
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
      </Helmet>
      <SEOHead 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends."
        keywords="AI blog, cybersecurity blog, cloud computing blog, technology insights, IT solutions"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Insights, trends, and expertise from the Zion Tech Group team
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-300"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:underline">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights and trends delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-cyan-400/30 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-300"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;