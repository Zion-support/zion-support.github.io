import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Newspaper, Brain, Atom, Rocket, Shield, Calendar, User, Tag, ArrowRight, ExternalLink, TrendingUp, Lightbulb, Clock, BookOpen, Search } from 'lucide-react';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 7 }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary Quantum AI Platform",
      excerpt: "Our latest quantum AI platform combines quantum computing with artificial intelligence to deliver unprecedented performance and capabilities for enterprise applications.",
      category: "Product Launch",
      author: "Zion Tech Group Team",
      date: "2025-01-15",
      readTime: "5 min read",
      tags: ["Quantum Computing", "AI", "Product Launch"]
    },
    {
      id: 2,
      title: "New Partnership with Global Healthcare Consortium",
      excerpt: "We're excited to announce our strategic partnership with the Global Healthcare Consortium to revolutionize medical diagnostics using our AI-powered healthcare solutions.",
      category: "Partnership",
      author: "Business Development",
      date: "2025-01-12",
      readTime: "4 min read",
      tags: ["Healthcare", "Partnership", "AI"]
    },
    {
      id: 3,
      title: "Breakthrough in Autonomous Cybersecurity Systems",
      excerpt: "Our research team has achieved a major breakthrough in autonomous cybersecurity, developing systems that can detect and respond to threats in real-time without human intervention.",
      category: "Research",
      author: "Research Team",
      date: "2025-01-10",
      readTime: "6 min read",
      tags: ["Cybersecurity", "Research", "Autonomous Systems"]
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase().includes(selectedCategory);
    const matchesYear = selectedYear === 'all' || article.date.includes(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20">
        <main className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              News & Updates
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with our latest breakthroughs, partnerships, and insights in AI, quantum computing, and emerging technologies.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article key={article.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-white/80 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest updates, insights, and exclusive content.
              </p>
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-700">
                Get Updates
              </Link>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}