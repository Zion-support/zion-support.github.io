import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
<<<<<<< HEAD
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface EnhancedContentPromotionBannerProps {
  title: string;
  subtitle: string;
  description: string;
  content: ContentItem[];
  variant?: 'default' | 'featured' | 'trending';
  maxItems?: number;
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
  const featuredContent: ContentItem[] = [
    {
      id: 'ai-advanced-automation',
      title: 'AI Advanced Automation 2025: Complete Implementation Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Learn strategies that deliver 300%+ ROI and 60% cost reduction.',
      href: '/blog/ai-2025-advanced-automation',
      icon: '🤖',
      category: 'AI Automation',
      readTime: '22 min read',
      isNew: true
    },
    {
      id: 'generative-agents-production',
      title: 'Generative AI Agents in Production 2025',
      description: 'Deploy and manage AI agents in production environments. Achieve 99.9% uptime and 400%+ ROI with proven strategies.',
      href: '/blog/ai-2025-generative-agents-in-production',
      icon: '🧠',
      category: 'AI Agents',
      readTime: '28 min read',
      isTrending: true
    },
    {
      id: 'cybersecurity-breakthrough',
      title: '$50M Cybersecurity Transformation Success',
      description: 'How a Fortune 500 company achieved 99.8% threat detection accuracy and $50M in security cost savings.',
      href: '/case-studies/ai-cybersecurity-transformation-breakthrough-2025',
      icon: '🛡️',
      category: 'Case Study',
      type: 'Success Story',
      isNew: true
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our 200+ page comprehensive guide with templates, checklists, and proven strategies for AI success.',
      href: '/resources/ai-implementation-master-guide-2026',
      icon: '📚',
      category: 'Free Resource',
      type: '200+ Pages',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = featuredContent[currentIndex];
=======
=======
>>>>>>> eeadc7135fa1d00c9e6745c2bfdd5df450b12512
export default function EnhancedContentPromotionBanner({
  title,
  subtitle,
  description,
  content,
  variant = 'default',
  maxItems = 4,
  className = ''
}: EnhancedContentPromotionBannerProps) {
  const displayedContent = content.slice(0, maxItems);
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          subtitle: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-indigo-600 hover:bg-gray-100',
          buttonOutline: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20',
          cardText: 'text-white',
          cardSubtext: 'text-white opacity-75'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          subtitle: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-orange-600 hover:bg-gray-100',
          buttonOutline: 'border-2 border-white text-white hover:bg-white hover:text-orange-600',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20',
          cardText: 'text-white',
          cardSubtext: 'text-white opacity-75'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          subtitle: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-blue-600 hover:bg-gray-100',
          buttonOutline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20',
          cardText: 'text-white',
          cardSubtext: 'text-white opacity-75'
        };
    }
  };

  const styles = getVariantStyles();
<<<<<<< HEAD
>>>>>>> 94c34cf87ce80fe1dec962245ab12c3fa6ded719

  if (!isVisible) return null;
=======
=======
  type: 'article' | 'case-study' | 'resource';
  readTime?: string;
  isNew?: boolean;
  isTrending?: boolean;
  icon: string;
}

const featuredContent: ContentItem[] = [
  {
    title: "AI 2025 Advanced Architecture Patterns",
    description: "Master advanced AI architecture patterns for scalable, production-ready systems",
    href: "/blog/ai-2025-advanced-ai-architecture",
    type: "article",
    readTime: "25 min read",
    isNew: true,
    icon: "🏗️"
  },
  {
    title: "AI Automation Trends 2025",
    description: "Discover the revolutionary AI automation trends transforming businesses",
    href: "/blog/ai-2025-automation-trends",
    type: "article",
    readTime: "22 min read",
    isTrending: true,
    icon: "🤖"
  },
  {
    title: "$200M Manufacturing Success Case Study",
    description: "How a Fortune 500 manufacturer achieved unprecedented results with autonomous AI",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    type: "case-study",
    readTime: "18 min read",
    isNew: true,
    icon: "💰"
  },
  {
    title: "AI Implementation Master Guide 2026",
    description: "200+ page comprehensive guide with frameworks and templates",
    href: "/resources/ai-implementation-master-guide-2026",
    type: "resource",
    readTime: "200+ pages",
    isNew: true,
    icon: "📖"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'article':
      return 'bg-blue-100 text-blue-800';
    case 'case-study':
      return 'bg-green-100 text-green-800';
    case 'resource':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'article':
      return 'Article';
    case 'case-study':
      return 'Case Study';
    case 'resource':
      return 'Resource';
    default:
      return 'Content';
  }
};
>>>>>>> cursor/create-and-deploy-new-content-d918
>>>>>>> eeadc7135fa1d00c9e6745c2bfdd5df450b12512

export default function EnhancedContentPromotionBanner() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
=======
    <section className={`py-20 ${styles.container} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center ${styles.badge} rounded-full px-6 py-2 mb-6`}>
            <span className={`text-sm font-medium ${styles.badgeText}`}>{subtitle}</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.title}`}>
            {title}
          </h2>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.description}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className={`px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg ${styles.button}`}
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className={`px-10 py-4 rounded-lg font-semibold transition-colors text-lg ${styles.buttonOutline}`}
            >
              📚 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${styles.card} p-6 rounded-xl transition-all duration-300 border border-white border-opacity-20`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${styles.cardText}`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-3 ${styles.cardSubtext}`}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                    <span className={styles.cardSubtext}>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.readTime && (
                      <span className={styles.cardSubtext}>{item.readTime}</span>
                    )}
                    {item.type && (
                      <>
                        <span className={styles.cardSubtext}>•</span>
                        <span className={styles.cardSubtext}>{item.type}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Link
            href="/resources"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-block mr-4 ${styles.button}`}
          >
            📋 Download Free Resources
          </Link>
          <Link
            href="/case-studies"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-block ${styles.buttonOutline}`}
          >
            📊 View Case Studies
          </Link>
=======
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
>>>>>>> eeadc7135fa1d00c9e6745c2bfdd5df450b12512
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Revolutionary AI Content Update
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: Advanced AI Architecture, Automation Trends, 
            $200M Manufacturing Success Case Study, and comprehensive implementation guides. 
            Get expert insights on the technologies transforming 2025 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/blog/ai-2025-advanced-ai-architecture"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg" 
            >
              📖 Read Latest Article
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {item.isNew && (
                      <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        TRENDING
                      </span>
                    )}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span>{item.readTime}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="mt-12 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">More Fresh Content This Week</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <div className="font-semibold">AI Sustainability & Green Tech</div>
                  <div className="opacity-75">Building eco-friendly AI systems</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-semibold">AI Robotics & Automation</div>
                  <div className="opacity-75">The future of intelligent machines</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <div className="font-semibold">AI Cybersecurity Checklist</div>
                  <div className="opacity-75">150+ security items for secure AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
            >
              View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block mr-4"
            >
              Browse Case Studies
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block"
            >
              Download Resources
            </Link>
          </div>
<<<<<<< HEAD
=======
    <section className={`py-20 ${styles.container} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center ${styles.badge} rounded-full px-6 py-2 mb-6`}>
            <span className={`text-sm font-medium ${styles.badgeText}`}>{subtitle}</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.title}`}>
            {title}
          </h2>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.description}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className={`px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg ${styles.button}`}
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className={`px-10 py-4 rounded-lg font-semibold transition-colors text-lg ${styles.buttonOutline}`}
            >
              📚 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${styles.card} p-6 rounded-xl transition-all duration-300 border border-white border-opacity-20`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${styles.cardText}`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-3 ${styles.cardSubtext}`}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                    <span className={styles.cardSubtext}>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.readTime && (
                      <span className={styles.cardSubtext}>{item.readTime}</span>
                    )}
                    {item.type && (
                      <>
                        <span className={styles.cardSubtext}>•</span>
                        <span className={styles.cardSubtext}>{item.type}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Link
            href="/resources"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-block mr-4 ${styles.button}`}
          >
            📋 Download Free Resources
          </Link>
          <Link
            href="/case-studies"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-block ${styles.buttonOutline}`}
          >
            📊 View Case Studies
          </Link>
>>>>>>> 94c34cf87ce80fe1dec962245ab12c3fa6ded719
=======
>>>>>>> cursor/create-and-deploy-new-content-d918
>>>>>>> eeadc7135fa1d00c9e6745c2bfdd5df450b12512
        </div>
      </div>
    </section>
  );
}