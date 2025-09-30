import React, { useState } from 'react';

export default function InteractiveContentShowcase2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Content', icon: '🌟' },
    { id: 'ai', label: 'AI & ML', icon: '🤖' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', label: 'Automation', icon: '⚡' },
    { id: 'enterprise', label: 'Enterprise', icon: '🏢' },
    { id: 'case-studies', label: 'Case Studies', icon: '📊' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Meta-Cognitive AI: The Future of Intelligent Systems',
      category: 'ai',
      type: '📚 Comprehensive Guide',
      description: 'Deep dive into AI that thinks about thinking, achieving 95% decision accuracy.',
      readTime: '15 min read',
      publishedDate: '2026-01-15',
      featured: true,
      href: '/blog/meta-cognitive-ai-comprehensive-guide-2026',
      stats: { views: '12.5K', likes: '847', shares: '234' }
    },
    {
      id: 2,
      title: 'Quantum-Neural Networks: 1000x Processing Power',
      category: 'quantum',
      type: '⚛️ Technical Deep Dive',
      description: 'Revolutionary processing power combining quantum computing with neural networks.',
      readTime: '20 min read',
      publishedDate: '2026-01-14',
      featured: true,
      href: '/blog/quantum-neural-networks-technical-deep-dive-2026',
      stats: { views: '18.2K', likes: '1.2K', shares: '456' }
    },
    {
      id: 3,
      title: 'Autonomous Operations: 98% Automation Success Story',
      category: 'automation',
      type: '🤖 Case Study',
      description: 'How we achieved 98% automation rates with self-healing AI systems.',
      readTime: '12 min read',
      publishedDate: '2026-01-13',
      featured: false,
      href: '/blog/autonomous-operations-success-story-2026',
      stats: { views: '9.8K', likes: '634', shares: '189' }
    },
    {
      id: 4,
      title: 'Enterprise AI Transformation: $50M Annual Savings',
      category: 'enterprise',
      type: '💰 Success Story',
      description: 'Fortune 500 company achieves $50M annual savings with AI transformation.',
      readTime: '18 min read',
      publishedDate: '2026-01-12',
      featured: true,
      href: '/blog/enterprise-ai-transformation-50m-savings-2026',
      stats: { views: '22.1K', likes: '1.5K', shares: '678' }
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthrough: Real-World Applications',
      category: 'quantum',
      type: '🔬 Research Paper',
      description: 'Latest quantum computing breakthroughs and their practical applications.',
      readTime: '25 min read',
      publishedDate: '2026-01-11',
      featured: false,
      href: '/blog/quantum-computing-real-world-applications-2026',
      stats: { views: '7.3K', likes: '421', shares: '156' }
    },
    {
      id: 6,
      title: 'AI Governance Framework: Ensuring Safe AI Deployment',
      category: 'ai',
      type: '🛡️ Framework Guide',
      description: 'Comprehensive framework for safe and ethical AI deployment in enterprise.',
      readTime: '22 min read',
      publishedDate: '2026-01-10',
      featured: false,
      href: '/blog/ai-governance-framework-safe-deployment-2026',
      stats: { views: '11.7K', likes: '789', shares: '267' }
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/50 to-blue-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
              🎯 Interactive Content Discovery
            </span>
          </div>
          
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary 2026 Content Hub
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest breakthrough content with our interactive content discovery system. 
            Filter by category, explore trending topics, and find exactly what you need.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 relative"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  🔥 FEATURED
                </div>
              )}
              
              {/* Content Type */}
              <div className="text-sm text-gray-400 mb-3">{item.type}</div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>📖 {item.readTime}</span>
                <span>📅 {new Date(item.publishedDate).toLocaleDateString()}</span>
              </div>
              
              {/* Engagement Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>👀 {item.stats.views}</span>
                  <span>❤️ {item.stats.likes}</span>
                  <span>📤 {item.stats.shares}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors duration-300">
                  Read Full Article →
                </span>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
            📚 Load More Content
          </button>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-purple-400">📧 Never Miss New Content</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified about our latest breakthrough content, AI insights, and revolutionary technologies. 
            Join 10,000+ professionals staying ahead of the AI revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}