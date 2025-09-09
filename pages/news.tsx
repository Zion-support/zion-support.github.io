import React, { useState } from 'react';
import Head from 'next/head';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
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

  const categories = [
    { id: 'all', name: 'All News', count: newsItems.length },
    { id: 'ai', name: 'AI & Technology', count: 18 },
    { id: 'quantum', name: 'Quantum Computing', count: 12 },
    { id: 'space', name: 'Space Technology', count: 8 },
    { id: 'security', name: 'Cybersecurity', count: 7 }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>News & Updates | Zion Tech Group</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights." />
      </Head>
      
      <main className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">News & Updates</h1>
          
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
            />
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-black'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map(item => (
              <article key={item.id} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {item.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-white">{item.title}</h2>
                <p className="text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-cyan-400 text-sm font-medium">
                  {item.readTime} • Read More →
                </div>
              </article>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No news found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}