import React from 'react';
import Link from 'next/link';

export default function NewContent2026Showcase() {
  const newBlogPosts = [
    {
      title: "AI Brain-Computer Interfaces: The Next Frontier",
      description: "Discover how AI-powered brain-computer interfaces are revolutionizing human-computer interaction in 2026.",
      href: "/blog/ai-brain-computer-interfaces-2026",
      category: "Neural AI",
      readTime: "12 min read",
      gradient: "from-purple-500 to-pink-500",
      icon: "🧠"
    },
    {
      title: "AI Quantum Machine Learning: The Next Computing Revolution",
      description: "Explore how quantum machine learning is transforming artificial intelligence with exponential speedups.",
      href: "/blog/ai-quantum-machine-learning-2026",
      category: "Quantum AI",
      readTime: "15 min read",
      gradient: "from-indigo-500 to-purple-500",
      icon: "⚛️"
    },
    {
      title: "AI Autonomous Enterprise Systems: The Future of Business",
      description: "Learn how autonomous enterprise systems are creating self-managing, self-optimizing business operations.",
      href: "/blog/ai-autonomous-enterprise-systems-2026",
      category: "Enterprise AI",
      readTime: "18 min read",
      gradient: "from-emerald-500 to-teal-500",
      icon: "🤖"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Quantum Finance Transformation: $500M ROI Success",
      description: "How we helped a Fortune 500 financial institution achieve $500M ROI through quantum AI implementation.",
      href: "/case-studies/ai-quantum-finance-transformation-2026",
      category: "Finance AI",
      roi: "$500M ROI",
      gradient: "from-green-500 to-emerald-500",
      icon: "💰"
    },
    {
      title: "AI Space Mission Automation: $2B Mission Success",
      description: "Revolutionary space mission operations using AI, achieving 99.9% mission success rate and $2B savings.",
      href: "/case-studies/ai-space-mission-automation-2026",
      category: "Space AI",
      roi: "$2B Savings",
      gradient: "from-blue-500 to-indigo-500",
      icon: "🚀"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>✨</span>
            <span>NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cutting-Edge AI Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights, breakthroughs, and success stories in artificial intelligence, 
            quantum computing, and autonomous systems.
          </p>
        </div>

        {/* Blog Posts Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Latest Blog Posts</h3>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
            >
              View All Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newBlogPosts.map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{post.icon}</span>
                    <span className={`bg-gradient-to-r ${post.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {post.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <span className="text-blue-600 group-hover:text-blue-800 font-semibold">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Featured Case Studies</h3>
            <Link 
              href="/case-studies" 
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {newCaseStudies.map((study, index) => (
              <Link
                key={index}
                href={study.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
              >
                <div className={`h-2 bg-gradient-to-r ${study.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{study.icon}</span>
                    <div>
                      <span className={`bg-gradient-to-r ${study.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {study.category}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">{study.roi}</div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 group-hover:text-blue-800 font-semibold">
                      Read Success Story →
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Featured</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Discover how our cutting-edge AI solutions can drive unprecedented growth and innovation for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}