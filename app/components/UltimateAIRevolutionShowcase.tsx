'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAIRevolutionShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', count: 12 },
    { id: 'guides', name: 'Ultimate Guides', count: 4 },
    { id: 'case-studies', name: 'Success Stories', count: 4 },
    { id: 'blog', name: 'Blog Posts', count: 4 }
  ];

  const content = [
    {
      id: 1,
      title: "AI 2025: The Ultimate AI Revolution - Ultimate Breakthrough Guide to 30,000% ROI",
      description: "Discover how Fortune 500 companies are achieving extraordinary results through next-generation AI implementations.",
      type: "Ultimate Guide",
      category: "guides",
      metrics: "30,000% ROI • $150B Savings • 99.99% Accuracy",
      readingTime: "45 min read",
      featured: true,
      link: "/resources/ai-revolution-implementation-ultimate-guide-2025",
      image: "🤖"
    },
    {
      id: 2,
      title: "Fortune 500 AI Revolution Success: $150B Annual Savings - 30,000% ROI Success Story",
      description: "Learn how a Fortune 50 manufacturing company achieved the highest documented ROI in AI transformation history.",
      type: "Case Study",
      category: "case-studies",
      metrics: "30,000% ROI • $150B Savings • 18 Months",
      readingTime: "25 min read",
      featured: true,
      link: "/case-studies/fortune-500-ai-revolution-30000-roi-success-story",
      image: "📊"
    },
    {
      id: 3,
      title: "Revolutionary AI Technologies: Quantum-Enhanced AI • Neural Superintelligence",
      description: "Explore the cutting-edge AI technologies transforming business operations and delivering unprecedented results.",
      type: "Blog Post",
      category: "blog",
      metrics: "1,000x Processing • 99.99% Accuracy • 5,000% Efficiency",
      readingTime: "35 min read",
      featured: true,
      link: "/blog/ai-2025-ultimate-ai-revolution-2025-ultimate-breakthrough",
      image: "⚡"
    },
    {
      id: 4,
      title: "Quantum-Neural Fusion Computing: The Next Frontier of AI",
      description: "Discover how quantum computing is revolutionizing AI capabilities and delivering exponential performance gains.",
      type: "Ultimate Guide",
      category: "guides",
      metrics: "1,000x Speed • 99.99% Accuracy • $100B Market",
      readingTime: "40 min read",
      featured: false,
      link: "/resources/quantum-neural-fusion-computing-guide-2025",
      image: "🔬"
    },
    {
      id: 5,
      title: "Fortune 500 Quantum AI Success: $50B Savings in 12 Months",
      description: "Case study of how a major financial institution achieved extraordinary results with quantum-enhanced AI.",
      type: "Case Study",
      category: "case-studies",
      metrics: "25,000% ROI • $50B Savings • 12 Months",
      readingTime: "20 min read",
      featured: false,
      link: "/case-studies/fortune-500-quantum-ai-success-story",
      image: "💎"
    },
    {
      id: 6,
      title: "Neural Superintelligence: The Future of Business Intelligence",
      description: "Explore how neural superintelligence is transforming decision-making and strategic planning in enterprises.",
      type: "Blog Post",
      category: "blog",
      metrics: "10,000x Learning • 99.9% Accuracy • Human-Level Reasoning",
      readingTime: "30 min read",
      featured: false,
      link: "/blog/neural-superintelligence-business-intelligence-2025",
      image: "🧠"
    },
    {
      id: 7,
      title: "Synthetic Intelligence Implementation Guide: Complete Roadmap to 20,000% ROI",
      description: "Comprehensive guide to implementing synthetic intelligence systems that evolve and improve autonomously.",
      type: "Ultimate Guide",
      category: "guides",
      metrics: "20,000% ROI • Self-Evolving • Autonomous Innovation",
      readingTime: "50 min read",
      featured: false,
      link: "/resources/synthetic-intelligence-implementation-guide-2025",
      image: "🔮"
    },
    {
      id: 8,
      title: "Manufacturing AI Transformation: $75B Savings with Autonomous Systems",
      description: "How a global manufacturing leader achieved complete operational autonomy and extraordinary cost savings.",
      type: "Case Study",
      category: "case-studies",
      metrics: "28,000% ROI • $75B Savings • 95% Automation",
      readingTime: "22 min read",
      featured: false,
      link: "/case-studies/manufacturing-ai-transformation-75000-roi",
      image: "🏭"
    },
    {
      id: 9,
      title: "Autonomous Business Systems: The Path to Complete Operational Autonomy",
      description: "Learn how to build self-managing business systems that operate with minimal human intervention.",
      type: "Blog Post",
      category: "blog",
      metrics: "95% Autonomy • 1,000% Efficiency • Self-Optimizing",
      readingTime: "28 min read",
      featured: false,
      link: "/blog/autonomous-business-systems-complete-guide-2025",
      image: "🤖"
    },
    {
      id: 10,
      title: "AI Security and Compliance: Ultimate Guide to Secure AI Implementation",
      description: "Comprehensive security framework for implementing AI systems while maintaining compliance and data protection.",
      type: "Ultimate Guide",
      category: "guides",
      metrics: "Zero Breaches • 100% Compliance • Enterprise Security",
      readingTime: "35 min read",
      featured: false,
      link: "/resources/ai-security-compliance-ultimate-guide-2025",
      image: "🔒"
    },
    {
      id: 11,
      title: "Healthcare AI Revolution: $200B Savings with Diagnostic AI",
      description: "How a major health system achieved extraordinary results with AI-powered diagnostic and treatment systems.",
      type: "Case Study",
      category: "case-studies",
      metrics: "22,000% ROI • $200B Savings • 99.9% Accuracy",
      readingTime: "24 min read",
      featured: false,
      link: "/case-studies/healthcare-ai-revolution-200000-roi-success",
      image: "🏥"
    },
    {
      id: 12,
      title: "Future of AI: What's Next in the AI Revolution",
      description: "Explore the emerging trends and technologies that will shape the future of AI and business transformation.",
      type: "Blog Post",
      category: "blog",
      metrics: "AGI Development • Quantum AI • Synthetic Consciousness",
      readingTime: "32 min read",
      featured: false,
      link: "/blog/future-of-ai-revolution-2025-2030",
      image: "🚀"
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 ULTIMATE AI REVOLUTION CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the complete collection of AI transformation guides, success stories, and breakthrough technologies that are reshaping business operations worldwide.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">30,000%</div>
            <div className="text-gray-600">Maximum ROI Achieved</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500B+</div>
            <div className="text-gray-600">Total Savings Documented</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
            <div className="text-gray-600">Accuracy Achieved</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Fortune 500 Success Stories</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.type}
                    </div>
                    <div className="text-4xl">{item.image}</div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-1">Success Metrics:</div>
                    <div className="text-sm text-gray-600">{item.metrics}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                    <Link
                      href={item.link}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    item.type === 'Ultimate Guide' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : item.type === 'Case Study'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {item.type}
                  </div>
                  <div className="text-3xl">{item.image}</div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-1">Success Metrics:</div>
                  <div className="text-sm text-gray-600">{item.metrics}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.link}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your AI Revolution?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of Fortune 500 companies achieving extraordinary results with our proven AI transformation framework.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/ai-revolution-2025"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAIRevolutionShowcase;