'use client'
import React, { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}
const BlogPage: React.FC = () => {
const [searchTerm, setSearchTerm] = useState();
const [selectedCategory, setSelectedCategory] = useState('all')'
  // Sample blog posts data
const blogPosts: BlogPost[] = [
    {
      id: '1','
      title: 'The Future of AI in Enterprise Solutions','
      excerpt: 'Discover how artificial intelligence is revolutionizing enterprise operations and driving unprecedented growth.','
      content: 'Full article content here...','
      author: 'Zion Tech Team','
      date: '2024-01-15','
      readTime: '5 min read','
      category: 'AI & Machine Learning','
      tags: ['AI', 'Enterprise', 'Automation'],'
      featured: true,
      image: '/images/blog/ai-enterprise.jpg'
    },
    {
      id: '2','
      title: 'Cybersecurity Best Practices for 2024','
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats.','
      content: 'Full article content here...','
      author: 'Security Team','
      date: '2024-01-10','
      readTime: '7 min read','
      category: 'Cybersecurity','
      tags: ['Security', 'Best Practices', '2024'],'
      featured: false,
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: '3','
      title: 'Cloud Migration Strategies','
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud successfully.','
      content: 'Full article content here...','
      author: 'Cloud Team','
      date: '2024-01-05','
      readTime: '6 min read','
      category: 'Cloud Computing','
      tags: ['Cloud', 'Migration', 'Infrastructure'],'
      featured: false,
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: '4','
      title: 'Microservices Architecture Benefits','
      excerpt: 'Understanding the advantages of microservices for modern application development.','
      content: 'Full article content here...','
      author: 'Development Team','
      date: '2024-01-01','
      readTime: '8 min read','
      category: 'Software Development','
      tags: ['Microservices', 'Architecture', 'Development'],'
      featured: true,
      image: '/images/blog/microservices.jpg'
    }
  ]
const categories = ['all', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Software Development']'
const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory'
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
const featuredPosts = blogPosts.filter(post => post.featured);
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and technology trends from Zion Tech Group experts." />"
        <meta name="keywords" content="AI blog, IT insights, technology trends, cybersecurity, cloud computing, software development" /> " <meta property="og:title" content="Blog - Zion Tech Group" />"
        <meta property="og:description" content="Latest insights on AI and IT solutions" /> " <meta property="og:type" content="website" />"
        <meta property="og:url" content="https://ziontechgroup.com/blog" /> " </Helmet>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        {/* Hero Section */}
        <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto text-center"> " <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> "
                Tech Blog </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Stay updated with the latest insights on AI, IT solutions, cybersecurity, and technology trends.
            </p>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-8 px-4">"
          <div className="max-w-7xl mx-auto"> " <div className="flex flex-col md:flex-row gap-4 mb-8">"
              <div className="relative flex-1"> " <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">"
                    {category === 'all' ? 'All Categories' : category}'
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
        {/* Featured Posts */},
    {featuredPosts.length > 0 && (
          <section className="py-8 px-4">"
            <div className="max-w-7xl mx-auto"> " <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2> " <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"> " <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">"
                      <div className="text-6xl opacity-50"> 📝 </div>"
                    </div>
                    <div className="p-6">"
                      <div className="flex items-center gap-2 mb-3"> " <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">"
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span> " </div>"
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">"
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>"
                      <div className="flex items-center justify-between"> " <div className="flex items-center gap-2 text-sm text-gray-400">"
                          <User className="w-4 h-4" /> " <span>{post.author}</span>"
                          <Calendar className="w-4 h-4 ml-2" />"
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}``
                          className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" /> " </Link>"
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )},
    {/* All Posts */}
        <section className="py-8 px-4"> " <div className="max-w-7xl mx-auto">"
            <h2 className="text-3xl font-bold text-white mb-8"> All Articles </h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">}}"
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center"> " <div className="text-4xl opacity-50">📝</div> " </div>"
                  <div className="p-6"> " <div className="flex items-center gap-2 mb-3">"
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">"
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>"
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">"
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p> " <div className="flex items-center justify-between">"
                      <div className="flex items-center gap-2 text-sm text-gray-400"> " <User className="w-4 h-4" />"
                        <span>{post.author}</span>
                        <Calendar className="w-4 h-4 ml-2" /> " <span>{new Date(post.date).toLocaleDateString()}</span>"
                      </div>
                      <Link
                        to={`/blog/${post.id}`}``
                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                      > Read More <ArrowRight className="w-4 h-4" />"
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">"
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">}}"
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">}}"
                <p className="text-gray-400 text-lg"> No articles found matching your criteria. </p>"
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default BlogPage;}}}