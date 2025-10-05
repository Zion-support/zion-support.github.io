import React from 'react';

export default function FeaturedContentBanner2025() {
  const featuredContent = [
    {
      type: 'blog',
      title: 'AI Autonomous Enterprise Operations: Complete 2025 Guide',
      excerpt: 'Master autonomous AI operations with proven frameworks achieving 95% automation rates, $2M+ annual savings, and 99.99% uptime through comprehensive implementation strategies.',
      href: '/blog/ai-autonomous-enterprise-operations-2025',
      image: '🤖',
      category: 'Latest AI Innovation',
      readTime: '45 min read',
      publishDate: 'Jan 30, 2025'
    },
    {
      type: 'blog',
      title: 'AI Enterprise Transformation: $50M Annual Savings Blueprint',
      excerpt: 'Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies.',
      href: '/blog/ai-enterprise-transformation-2025',
      image: '💰',
      category: 'Enterprise AI',
      readTime: '38 min read',
      publishDate: 'Jan 28, 2025'
    },
    {
      type: 'case-study',
      title: 'Quantum-AI Hybrid Systems: 1000x Performance Breakthrough',
      excerpt: 'Case study revealing how quantum-classical hybrid AI systems deliver 1000x performance improvements in enterprise applications with real-world implementation results.',
      href: '/case-studies/quantum-ai-hybrid-systems',
      image: '⚡',
      category: 'Quantum Computing',
      readTime: '52 min read',
      publishDate: 'Jan 25, 2025'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🔥 FEATURED CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover breakthrough insights, proven strategies, and cutting-edge implementations that are transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{content.image}</span>
                <div>
                  <span className="text-sm font-semibold text-yellow-300">
                    {content.category}
                  </span>
                  <div className="text-xs text-blue-200">
                    {content.publishDate} • {content.readTime}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {content.title}
              </h3>
              
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {content.excerpt}
              </p>
              
              <a
                href={content.href}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Read Full Article
                <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            Explore All 2025 Content
          </a>
        </div>
      </div>
    </div>
  );
}