import React, { useState } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Showcase - Complete Library of Resources, Guides & Tools',
  description: 'Explore our comprehensive AI content library featuring breakthrough guides, exclusive case studies, interactive tools, and implementation resources for 2025.',
  keywords: 'AI content, AI resources, AI guides, AI tools, AI case studies, AI implementation, content library',
  openGraph: {
    title: 'AI Content Showcase - Complete Library of Resources, Guides & Tools',
    description: 'Explore our comprehensive AI content library featuring breakthrough guides, exclusive case studies, interactive tools, and implementation resources.',
    type: 'website',
  },
};

export default function ContentShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Content', count: 50 },
    { id: 'ai-automation', name: 'AI Automation', count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8 },
    { id: 'case-studies', name: 'Case Studies', count: 16 },
    { id: 'resources', name: 'Resources', count: 8 },
    { id: 'trends', name: 'Trends & Insights', count: 5 }
  ];

  const content = [
    {
      id: 0,
      title: "AI Enterprise Automation Revolution 2025: Complete Implementation Guide",
      description: "Discover how AI is revolutionizing enterprise automation in 2025. Learn implementation strategies, best practices, and real-world success stories with 340% ROI.",
      category: "ai-automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🚀",
      href: "/blog/ai-2025-enterprise-automation-revolution",
      tags: ["AI Automation", "Enterprise", "Implementation", "ROI"]
    },
    {
      id: 1,
      title: "Advanced AI Cost Optimization 2025: Reduce Expenses by 60% While Maintaining Performance",
      description: "Master advanced AI cost optimization strategies for 2025. Learn proven techniques to reduce AI expenses by 60% while maintaining performance and quality.",
      category: "ai-automation",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "⚡",
      href: "/blog/ai-cost-optimization-advanced-2025",
      tags: ["Cost Optimization", "AI Performance", "Efficiency", "ROI"]
    },
    {
      id: 2,
      title: "$200M Manufacturing Success: AI Autonomous Systems Case Study 2025",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details, ROI analysis, and lessons learned.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 3,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of proven frameworks, templates, and strategies to successfully adopt AI across your organization.",
      category: "resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
    },
    {
      id: 4,
      title: "AI Cybersecurity Revolution 2025: Protecting Against Next-Gen Threats",
      description: "Discover the AI cybersecurity revolution transforming enterprise security in 2025. Learn about advanced threat detection, automated response, and zero-trust AI architectures.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-cybersecurity-revolution",
      tags: ["AI Cybersecurity", "Threat Detection", "Zero Trust", "Security"]
    },
    {
      id: 5,
      title: "Quantum Computing Breakthrough 2025: The AI Revolution Accelerates",
      description: "Discover the quantum computing breakthroughs revolutionizing AI in 2025. Learn about quantum machine learning, quantum advantage, and the future of computational intelligence.",
      category: "trends",
      type: "Article",
      readTime: "28 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "⚛️",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      tags: ["Quantum Computing", "Quantum AI", "Machine Learning", "Innovation"]
    },
    {
      id: 6,
      title: "AI Healthcare Diagnosis Success 2025: 95% Accuracy Case Study",
      description: "Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-10",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🏥",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      tags: ["Healthcare", "AI Success", "Case Study", "Medical AI"]
    },
    {
      id: 7,
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Download our comprehensive AI cybersecurity checklist with 150+ security items to ensure your AI systems are protected against emerging threats.",
      category: "resources",
      type: "Free Download",
      readTime: "150+ items",
      publishDate: "2024-12-22",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📋",
      href: "/resources/ai-cybersecurity-checklist-2025",
      tags: ["Checklist", "Security", "AI Safety", "Free Download"]
    },
    {
      id: 8,
      title: "Edge AI Agents 2025: Running Autonomous Agents in Production",
      description: "Architectures, safety, and observability for deploying autonomous agents at the edge.",
      category: "ai-automation",
      type: "Article",
      readTime: "21 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🤖",
      href: "/blog/ai-2025-edge-agents-in-production",
      tags: ["Edge AI", "Agents", "Observability", "Safety"]
    },
    {
      id: 9,
      title: "AI 2025 Breakthrough Innovations: Revolutionary Technologies",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.",
      category: "trends",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-05",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "🚀",
      href: "/blog/ai-2025-breakthrough-innovations",
      tags: ["AI Innovations", "Technology", "Future", "Breakthrough"]
    },
    {
      id: 10,
      title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
      description: "Learn how to transform your workforce for the AI era. Complete reskilling strategies, implementation guides, and real-world success stories.",
      category: "ai-automation",
      type: "Article",
      readTime: "18 min read",
      publishDate: "2025-01-03",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "👥",
      href: "/blog/ai-workforce-transformation-2025",
      tags: ["Workforce", "Reskilling", "AI Training", "Transformation"]
    },
    {
      id: 11,
      title: "AI Data Privacy & Compliance 2025: Complete Guide",
      description: "Navigate the complex landscape of AI data privacy regulations. Learn about GDPR, CCPA, and emerging AI-specific compliance requirements.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-01",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🔒",
      href: "/blog/ai-data-privacy-compliance-2025",
      tags: ["Privacy", "Compliance", "GDPR", "Data Protection"]
    },
    {
      id: 12,
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI",
      description: "Learn how to build sustainable AI systems that reduce environmental impact while maintaining performance. Complete guide to green AI practices.",
      category: "trends",
      type: "Article",
      readTime: "20 min read",
      publishDate: "2024-12-28",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🌱",
      href: "/blog/ai-sustainability-green-tech-2025",
      tags: ["Sustainability", "Green Tech", "Environment", "Eco-Friendly"]
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'oldest':
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      case 'trending':
        return b.trending ? 1 : -1;
      case 'featured':
        return b.featured ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Content Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The most comprehensive AI content library ever assembled. From breakthrough guides to interactive tools - 
              everything you need to master AI in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Start with Latest Guide
              </Link>
              <Link
                href="/tools/ai-roi-calculator"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Try AI Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 MASSIVE CONTENT DROP - JANUARY 2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🎉 50+ New AI Resources Just Released!
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover groundbreaking content: AI Enterprise Automation Revolution, Advanced Cost Optimization, 
              $200M Manufacturing Success Story, plus exclusive case studies, implementation blueprints, and free downloadable resources. 
              Get expert insights on the technologies reshaping industries and driving unprecedented growth in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Read the latest enterprise automation article"
              >
                Read Latest Article
              </Link>
              <Link
                href="/case-studies/ai-autonomous-manufacturing-success-2025"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Read the $200M manufacturing success story"
              >
                📖 Read Success Story
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Download free AI implementation guide"
              >
                📚 Download Free Guide
              </Link>
            </div>
          </div>

          {/* Featured New Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-lg font-semibold mb-2">AI Enterprise Automation Revolution</h3>
                <p className="text-sm opacity-90 mb-3">Complete implementation guide with 340% ROI and real case studies</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-cost-optimization-advanced-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold mb-2">Advanced AI Cost Optimization</h3>
                <p className="text-sm opacity-90 mb-3">Reduce AI expenses by 60% while maintaining performance</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>22 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-lg font-semibold mb-2">$200M Manufacturing Success Story</h3>
                <p className="text-sm opacity-90 mb-3">Fortune 500 manufacturer achieves massive savings with AI</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Master Guide</h3>
                <p className="text-sm opacity-90 mb-3">200+ page complete implementation guide with checklists</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="trending">Trending</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedContent.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex items-center gap-2">
                      {item.featured && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Trending
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{item.readTime}</span>
                    <span>{item.publishDate}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest AI Content
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly updates on new content, tools, and exclusive insights delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
}