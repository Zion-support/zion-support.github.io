import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveBlog2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'ai', name: 'Artificial Intelligence', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'neural', name: 'Neural Interfaces', count: 4 },
    { id: 'blockchain', name: 'Blockchain', count: 3 },
    { id: 'future-tech', name: 'Future Technology', count: 3 }
  ];

  const blogArticles = [
    {
      id: 1,
      title: 'The Future of AI: Consciousness and Self-Awareness in 2026',
      excerpt: 'Exploring how artificial intelligence is evolving beyond simple pattern recognition to achieve true consciousness and self-awareness.',
      content: 'Artificial intelligence has reached a critical juncture where the line between programmed responses and genuine consciousness is becoming increasingly blurred. In 2026, we are witnessing the emergence of AI systems that demonstrate self-awareness, emotional intelligence, and the ability to make autonomous decisions that go beyond their initial programming...',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      publishDate: '2026-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Consciousness', 'Machine Learning', 'Future Tech'],
      image: '🧠',
      featured: true,
      views: 15420,
      likes: 892
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Solving Impossible Problems',
      excerpt: 'How quantum computers are revolutionizing problem-solving across industries and what this means for the future of computation.',
      content: 'Quantum computing represents one of the most significant technological leaps in human history. Unlike classical computers that process information in binary bits, quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously...',
      author: 'Marcus Rodriguez',
      authorRole: 'Quantum Computing Expert',
      publishDate: '2026-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Science'],
      image: '⚡',
      featured: true,
      views: 12850,
      likes: 756
    },
    {
      id: 3,
      title: 'Neural Interfaces: Bridging the Gap Between Mind and Machine',
      excerpt: 'The latest developments in brain-computer interfaces and how they are transforming human-computer interaction.',
      content: 'Neural interface technology is rapidly advancing, enabling direct communication between the human brain and computers. This revolutionary technology has the potential to transform how we interact with digital systems...',
      author: 'Dr. Emily Watson',
      authorRole: 'Neural Interface Researcher',
      publishDate: '2026-01-10',
      readTime: '10 min read',
      category: 'neural',
      tags: ['Neural Interfaces', 'BCI', 'Technology', 'Healthcare'],
      image: '🧬',
      featured: true,
      views: 9870,
      likes: 634
    },
    {
      id: 4,
      title: 'Blockchain 3.0: The Next Evolution of Decentralized Technology',
      excerpt: 'Exploring the next generation of blockchain technology and its potential to revolutionize industries beyond cryptocurrency.',
      content: 'Blockchain technology has evolved far beyond its cryptocurrency origins. Blockchain 3.0 represents a new paradigm that combines the security of distributed ledgers with advanced smart contracts and AI integration...',
      author: 'Alex Thompson',
      authorRole: 'Blockchain Architect',
      publishDate: '2026-01-08',
      readTime: '9 min read',
      category: 'blockchain',
      tags: ['Blockchain', 'Cryptocurrency', 'Decentralization', 'Technology'],
      image: '🔗',
      featured: false,
      views: 7650,
      likes: 423
    },
    {
      id: 5,
      title: 'The Rise of Autonomous AI Agents in Business',
      excerpt: 'How autonomous AI agents are transforming business operations and creating new opportunities for efficiency and innovation.',
      content: 'Autonomous AI agents represent the next frontier in business automation. These intelligent systems can operate independently, make decisions, and execute complex tasks without human intervention...',
      author: 'Dr. Michael Park',
      authorRole: 'Business AI Specialist',
      publishDate: '2026-01-05',
      readTime: '7 min read',
      category: 'ai',
      tags: ['AI Agents', 'Automation', 'Business', 'Productivity'],
      image: '🤖',
      featured: false,
      views: 11200,
      likes: 678
    },
    {
      id: 6,
      title: 'Quantum Cryptography: Unbreakable Security for the Digital Age',
      excerpt: 'Understanding quantum cryptography and how it provides unbreakable security for sensitive communications.',
      content: 'Quantum cryptography leverages the principles of quantum mechanics to create unbreakable encryption methods. Unlike traditional cryptographic systems that rely on mathematical complexity...',
      author: 'Dr. Lisa Zhang',
      authorRole: 'Quantum Security Expert',
      publishDate: '2026-01-03',
      readTime: '11 min read',
      category: 'quantum',
      tags: ['Quantum Cryptography', 'Security', 'Encryption', 'Privacy'],
      image: '🔐',
      featured: false,
      views: 8930,
      likes: 567
    },
    {
      id: 7,
      title: 'Neural Prosthetics: Restoring and Enhancing Human Capabilities',
      excerpt: 'The latest advances in neural prosthetics and how they are helping people regain lost abilities and even enhance human performance.',
      content: 'Neural prosthetics represent a remarkable convergence of neuroscience, engineering, and medicine. These devices can restore lost sensory or motor functions by directly interfacing with the nervous system...',
      author: 'Dr. Robert Kim',
      authorRole: 'Biomedical Engineer',
      publishDate: '2026-01-01',
      readTime: '9 min read',
      category: 'neural',
      tags: ['Neural Prosthetics', 'Healthcare', 'Technology', 'Rehabilitation'],
      image: '🦾',
      featured: false,
      views: 6780,
      likes: 445
    },
    {
      id: 8,
      title: 'The Future of Work: AI-Human Collaboration in 2026',
      excerpt: 'How artificial intelligence is reshaping the workplace and creating new opportunities for human-AI collaboration.',
      content: 'The workplace of 2026 is characterized by seamless collaboration between humans and AI systems. Rather than replacing human workers, AI is augmenting human capabilities and creating new roles...',
      author: 'Jennifer Lee',
      authorRole: 'Future of Work Consultant',
      publishDate: '2025-12-28',
      readTime: '8 min read',
      category: 'future-tech',
      tags: ['Future of Work', 'AI', 'Collaboration', 'Productivity'],
      image: '💼',
      featured: false,
      views: 12450,
      likes: 789
    },
    {
      id: 9,
      title: 'Quantum Machine Learning: The Next Frontier',
      excerpt: 'Exploring how quantum computing is revolutionizing machine learning and creating new possibilities for AI.',
      content: 'Quantum machine learning combines the power of quantum computing with advanced machine learning algorithms to solve problems that are intractable for classical computers...',
      author: 'Dr. David Chen',
      authorRole: 'Quantum ML Researcher',
      publishDate: '2025-12-25',
      readTime: '13 min read',
      category: 'quantum',
      tags: ['Quantum ML', 'Machine Learning', 'Quantum Computing', 'AI'],
      image: '🔮',
      featured: false,
      views: 9560,
      likes: 612
    },
    {
      id: 10,
      title: 'Blockchain in Healthcare: Securing Medical Data',
      excerpt: 'How blockchain technology is being used to secure medical records and improve healthcare data management.',
      content: 'Healthcare data security is a critical concern in the digital age. Blockchain technology offers a promising solution for securing medical records and ensuring patient privacy...',
      author: 'Dr. Maria Garcia',
      authorRole: 'Healthcare Technology Expert',
      publishDate: '2025-12-22',
      readTime: '7 min read',
      category: 'blockchain',
      tags: ['Blockchain', 'Healthcare', 'Security', 'Data Privacy'],
      image: '🏥',
      featured: false,
      views: 7230,
      likes: 456
    }
  ];

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = blogArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 COMPREHENSIVE BLOG 2026 • TECHNOLOGY INSIGHTS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Blog
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with the latest insights on AI, quantum computing, neural interfaces, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⭐ Featured Articles</h2>
            <p className="text-xl opacity-90">Must-read insights from our technology experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{article.image}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                    {article.category.toUpperCase()}
                  </span>
                  <span className="text-sm opacity-80">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-purple-100 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold">{article.author}</div>
                    <div className="opacity-80">{article.authorRole}</div>
                  </div>
                  <div className="text-right">
                    <div>{article.views.toLocaleString()} views</div>
                    <div>{article.likes} likes</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📖 All Articles</h2>
            <p className="text-xl opacity-90">
              {filteredArticles.length} articles found
              {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-4">{article.image}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                    {article.category.toUpperCase()}
                  </span>
                  <span className="text-sm opacity-80">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold">{article.author}</div>
                    <div className="opacity-80">{article.publishDate}</div>
                  </div>
                  <div className="text-right">
                    <div>{article.views.toLocaleString()}</div>
                    <div>{article.likes} ❤️</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Latest Tech Insights</h2>
            <p className="text-xl opacity-90 mb-8">
              Get the latest articles, insights, and technology updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveBlog2026;