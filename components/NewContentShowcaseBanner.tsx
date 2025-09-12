import React from 'react';
import Link from 'next/link';

interface NewContentShowcaseBannerProps {
  variant?: 'default' | 'premium' | 'minimal';
  maxItems?: number;
}

export default function NewContentShowcaseBanner({ 
  variant = 'default', 
  maxItems = 6 
}: NewContentShowcaseBannerProps) {
  const newContent = [
    {
      title: "AI 2025: Enterprise Automation Revolution",
      description: "Complete implementation guide with 340% ROI strategies and real-world case studies.",
      href: "/blog/ai-2025-enterprise-automation-revolution",
      icon: "🚀",
      category: "Featured Article",
      readTime: "25 min read",
      date: "Jan 30, 2025",
      featured: true
    },
    {
      title: "$200M Manufacturing Success: AI Autonomous Systems",
      description: "How a Fortune 500 manufacturer achieved $200M savings with AI autonomous systems.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      category: "Case Study",
      readTime: "18 min read",
      date: "Jan 30, 2025",
      featured: true
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "200+ pages of proven frameworks, templates, and strategies for successful AI adoption.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Free Resource",
      readTime: "200+ pages",
      date: "Jan 30, 2025",
      featured: true
    },
    {
      title: "AI Healthcare Diagnosis Success: 95% Accuracy",
      description: "How a major healthcare system achieved 95% accuracy and 60% faster diagnosis times.",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: "🏥",
      category: "Case Study",
      readTime: "15 min read",
      date: "Jan 28, 2025",
      featured: false
    },
    {
      title: "AI Cybersecurity Revolution 2025",
      description: "Protecting against next-gen threats with advanced AI security architectures.",
      href: "/blog/ai-2025-cybersecurity-revolution",
      icon: "🛡️",
      category: "Article",
      readTime: "22 min read",
      date: "Jan 28, 2025",
      featured: false
    },
    {
      title: "Quantum Computing Breakthrough 2025",
      description: "Discover how quantum computing is revolutionizing AI and machine learning.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚛️",
      category: "Article",
      readTime: "28 min read",
      date: "Jan 28, 2025",
      featured: false
    }
  ];

  const featuredContent = newContent.filter(item => item.featured).slice(0, maxItems);
  const regularContent = newContent.filter(item => !item.featured).slice(0, maxItems - featuredContent.length);
  const displayContent = [...featuredContent, ...regularContent].slice(0, maxItems);

  if (variant === 'minimal') {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">✨ New This Week</h2>
          <Link 
            href="/content-showcase" 
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayContent.slice(0, 3).map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>{item.category}</span>
                      <span className="mx-1">•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'premium') {
    return (
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🎉 MASSIVE CONTENT DROP - JANUARY 2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🚀 50+ New AI Resources Just Released!
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover groundbreaking content: AI Breakthrough Innovations 2025, Enterprise Automation Revolution, 
              Manufacturing Success Stories, plus exclusive case studies, implementation blueprints, and free downloadable resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/content-showcase"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Explore All New Content
              </Link>
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                📖 Read Latest Article
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-3 line-clamp-3">{item.description}</p>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden mb-16">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fresh AI & Tech Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            New this week: Enterprise Automation Revolution, Manufacturing Success Stories, 
            and comprehensive implementation resources. Expert insights to accelerate your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/content-showcase"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}