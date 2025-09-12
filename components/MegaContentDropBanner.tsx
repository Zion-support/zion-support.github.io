import React from 'react';
import Link from 'next/link';

interface MegaContentDropBannerProps {
  variant?: 'featured' | 'default' | 'minimal';
  maxItems?: number;
  className?: string;
}

const megaContent = [
  {
    title: "AI Advanced Automation 2025: Complete Implementation Guide",
    description: "Master advanced AI automation with comprehensive strategies, best practices, and real-world case studies for enterprise success.",
    href: "/blog/ai-2025-advanced-automation",
    icon: "🤖",
    category: "AI Automation",
    readTime: "25 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true,
    type: "blog"
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
    featured: true,
    type: "blog"
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
    featured: true,
    type: "case-study"
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
    featured: true,
    type: "resource"
  },
  {
    title: "AI 2025 Implementation Masterclass: Advanced Strategies",
    description: "Join our exclusive 6-hour masterclass on advanced AI implementation strategies with industry experts.",
    href: "/webinars/ai-2025-implementation-masterclass-advanced",
    icon: "🎓",
    category: "Live Webinar",
    readTime: "6 hours",
    date: "Feb 15, 2025",
    badge: "LIMITED SEATS",
    featured: true,
    type: "webinar"
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
    featured: false,
    type: "blog"
  }
];

export default function MegaContentDropBanner({ 
  variant = 'default', 
  maxItems = 6,
  className = ''
}: MegaContentDropBannerProps) {
  const featuredContent = megaContent.filter(item => item.featured).slice(0, maxItems);
  const displayContent = variant === 'featured' ? featuredContent : megaContent.slice(0, maxItems);

  if (variant === 'minimal') {
    return (
      <div className={`bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🔥 MEGA CONTENT DROP - JANUARY 2025</h3>
          <p className="text-gray-600 text-sm mb-4">
            New AI guides, case studies, resources, and live training to accelerate your success in 2025.
          </p>
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Explore All Content
            <span>→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 30+ New AI Resources Just Released!
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our biggest content update yet: Advanced AI Automation, Cybersecurity Defense, 
            Manufacturing Success Stories, Implementation Checklists, and exclusive live training. 
            Everything you need to dominate AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/webinars/ai-2025-implementation-masterclass-advanced"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              🎓 Join Live Masterclass
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                    item.badge === 'LIMITED SEATS' ? 'bg-orange-500 text-white' :
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

        {/* Quick Access Links */}
        <div className="text-center">
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
              🎥 Live Training
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">30+</div>
            <div className="text-sm opacity-90">New Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">150+</div>
            <div className="text-sm opacity-90">Implementation Items</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">$200M</div>
            <div className="text-sm opacity-90">Success Case Study</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">6h</div>
            <div className="text-sm opacity-90">Live Masterclass</div>
          </div>
        </div>
      </div>
    </section>
  );
}