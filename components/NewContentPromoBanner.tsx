import React from 'react';
import Link from 'next/link';

interface NewContentPromoBannerProps {
  variant?: 'featured' | 'default' | 'minimal';
  maxItems?: number;
  className?: string;
}

const newContent = [
  {
    title: "AI Advanced Automation 2025: Complete Implementation Guide",
    description: "Master advanced AI automation with comprehensive strategies, best practices, and real-world case studies for enterprise success.",
    href: "/blog/ai-2025-advanced-automation",
    icon: "🤖",
    category: "AI Automation",
    readTime: "25 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true
  },
  {
    title: "AI Cybersecurity Threats 2025: Complete Defense Guide",
    description: "Protect your organization from emerging AI cybersecurity threats with advanced defense strategies and security best practices.",
    href: "/blog/ai-2025-cybersecurity-threats",
    icon: "🛡️",
    category: "Cybersecurity",
    readTime: "22 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true
  },
  {
    title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
    description: "How a Fortune 500 manufacturing company achieved $200M savings, 60% faster processing, and 99.7% uptime with autonomous AI.",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    icon: "💰",
    category: "Case Study",
    readTime: "18 min read",
    date: "Jan 28, 2025",
    badge: "SUCCESS",
    featured: true
  },
  {
    title: "AI Implementation Checklist 2025: 150+ Actionable Items",
    description: "Complete checklist covering every aspect of AI implementation with 150+ actionable items across 7 key categories.",
    href: "/resources/ai-implementation-checklist-2025",
    icon: "📋",
    category: "Free Resource",
    readTime: "35 min read",
    date: "Feb 8, 2025",
    badge: "FREE",
    featured: true
  },
  {
    title: "AI Breakthrough Innovations 2025: Revolutionary Technologies",
    description: "Discover the most groundbreaking AI innovations reshaping industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    category: "AI Innovations",
    readTime: "25 min read",
    date: "Jan 28, 2025",
    badge: "TRENDING",
    featured: false
  },
  {
    title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly Systems",
    description: "Learn how AI is driving sustainability initiatives and reducing carbon footprints across industries.",
    href: "/blog/ai-sustainability-green-tech-2025",
    icon: "🌱",
    category: "Sustainability",
    readTime: "20 min read",
    date: "Jan 28, 2025",
    badge: "NEW",
    featured: false
  }
];

export default function NewContentPromoBanner({ 
  variant = 'default', 
  maxItems = 4,
  className = ''
}: NewContentPromoBannerProps) {
  const featuredContent = newContent.filter(item => item.featured).slice(0, maxItems);
  const displayContent = variant === 'featured' ? featuredContent : newContent.slice(0, maxItems);

  if (variant === 'minimal') {
    return (
      <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🔥 Fresh Content Just Dropped</h3>
          <p className="text-gray-600 text-sm mb-4">
            New AI guides, case studies, and resources to accelerate your success in 2025.
          </p>
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Explore All Content
            <span>→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 25+ New AI Resources Just Released!
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our biggest content update yet: Advanced AI Automation, Cybersecurity Defense, 
            Manufacturing Success Stories, and comprehensive implementation guides. Everything you need 
            to succeed with AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/resources/ai-implementation-master-guide-2026"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📚 Download Master Guide
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.badge === 'NEW' ? 'bg-green-500 text-white' :
                    item.badge === 'FREE' ? 'bg-blue-500 text-white' :
                    item.badge === 'SUCCESS' ? 'bg-yellow-500 text-white' :
                    item.badge === 'TRENDING' ? 'bg-red-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Quick Links */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              📚 All Articles
            </Link>
            <Link
              href="/case-studies"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              📊 Case Studies
            </Link>
            <Link
              href="/resources"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              📋 Free Resources
            </Link>
            <Link
              href="/webinars"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              🎥 Webinars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}