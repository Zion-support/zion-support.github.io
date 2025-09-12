import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  href: string;
  icon: string;
  description: string;
  category: string;
  readTime?: string;
  result?: string;
  type?: string;
  date: string;
}

interface NewContentPromotionBannerProps {
  variant?: 'default' | 'featured' | 'compact';
  maxItems?: number;
  title?: string;
  subtitle?: string;
  gradient?: string;
  content?: ContentItem[];
}

const defaultContent: ContentItem[] = [
  {
    title: "AI 2025: Quantum Computing Breakthrough",
    href: "/blog/ai-2025-quantum-computing-breakthrough",
    icon: "⚛️",
    description: "Revolutionary applications of quantum AI",
    category: "Quantum AI",
    readTime: "28 min read",
    date: "Feb 15, 2025"
  },
  {
    title: "AI Ethics & Governance 2025",
    href: "/blog/ai-ethics-governance-2025",
    icon: "⚖️",
    description: "Building trustworthy AI systems",
    category: "AI Ethics",
    readTime: "24 min read",
    date: "Feb 12, 2025"
  },
  {
    title: "Cybersecurity AI Breakthrough",
    href: "/case-studies/ai-cybersecurity-transformation-breakthrough-2025",
    icon: "🛡️",
    description: "99.8% threat detection achieved",
    category: "Cybersecurity AI",
    result: "99.8% Detection",
    date: "Feb 10, 2025"
  },
  {
    title: "AI Implementation Master Guide 2026",
    href: "/resources/ai-implementation-master-guide-2026",
    icon: "📚",
    description: "Complete 200+ page resource",
    category: "Master Guide",
    type: "Free Download",
    date: "Feb 15, 2025"
  }
];

export default function NewContentPromotionBanner({
  variant = 'default',
  maxItems = 4,
  title = "🚀 New Content Just Released",
  subtitle = "Discover our latest AI insights, case studies, and resources",
  gradient = "from-purple-600 via-pink-600 to-red-600",
  content = defaultContent
}: NewContentPromotionBannerProps) {
  const displayContent = content.slice(0, maxItems);

  if (variant === 'compact') {
    return (
      <section className={`py-4 bg-gradient-to-r ${gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm opacity-90 mb-4">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {displayContent.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                >
                  {item.icon} {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'featured') {
    return (
      <section className={`py-8 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs opacity-90 mb-2">{item.description}</p>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span>{item.category}</span>
                    <span>{item.readTime || item.result || item.type}</span>
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
    <section className={`py-6 bg-gradient-to-r ${gradient} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-3">
            <span className="text-sm font-medium">🔥 NEW CONTENT</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">{subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {displayContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs opacity-90">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}