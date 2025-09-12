import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service' | 'resource';
  featured: boolean;
  category: string;
  readTime: string;
  isNew: boolean;
  icon: string;
}

const featuredContent: ContentItem[] = [
  {
    title: "Advanced AI Architecture Patterns for 2025",
    description: "Building scalable, cost-effective systems with 300%+ ROI",
    href: "/blog/ai-2025-advanced-ai-architecture",
    category: "AI Architecture",
    readTime: "25 min read",
    isNew: true,
    icon: "🏗️",
    featured: true
  },
  {
    title: "AI Automation Trends 2025",
    description: "Complete guide to enterprise transformation with 400%+ ROI",
    href: "/blog/ai-2025-automation-trends",
    category: "AI Automation",
    readTime: "22 min read",
    isNew: true,
    icon: "🤖",
    featured: true
  },
  {
    title: "$200M Manufacturing Success Case Study",
    description: "How Fortune 500 achieved 60% efficiency gains with autonomous AI",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "💰",
    featured: true
  },
  {
    title: "AI Implementation Master Guide 2026",
    description: "200+ page comprehensive guide with frameworks and templates",
    href: "/resources/ai-implementation-master-guide-2026",
    category: "Free Resource",
    readTime: "200+ pages",
    isNew: true,
    icon: "📚",
    featured: true
  }
];

const trendingContent: ContentItem[] = [
  {
    title: "AI Workforce Transformation 2025",
    description: "Reskilling strategies for the AI era",
    href: "/blog/ai-workforce-transformation-2025",
    category: "Workforce",
    readTime: "18 min read",
    icon: "👥"
  },
  {
    title: "AI Sustainability & Green Tech",
    description: "Building eco-friendly AI systems",
    href: "/blog/ai-sustainability-green-tech-2025",
    category: "Sustainability",
    readTime: "20 min read",
    icon: "🌱"
  },
  {
    title: "AI Cybersecurity Checklist 2025",
    description: "150+ security items for secure AI implementation",
    href: "/resources/ai-cybersecurity-checklist-2025",
    category: "Security",
    readTime: "Free Download",
    icon: "🛡️"
  },
  {
    title: "Edge AI: Privacy by Design",
    description: "On-device intelligence for instant, compliant CX",
    href: "/blog/edge-ai-privacy-by-design-2025",
    category: "Edge Computing",
    readTime: "8 min read",
    icon: "🔐"
  }
];

const EnhancedContentPromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI Neural Architecture Revolution 2025',
      description: 'Discover how revolutionary neural architectures are transforming AI capabilities with 40% improvement in long-context understanding.',
      href: '/blog/ai-2025-neural-architecture-revolution',
      type: 'blog',
      featured: true,
      category: 'AI Architecture',
      readTime: '25 min',
      isNew: true
    },
    {
      id: '2',
      title: 'Quantum Machine Learning 2025',
      description: 'Explore how quantum computing is revolutionizing machine learning with exponential speedup potential and breakthrough applications.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      featured: true,
      category: 'Quantum AI',
      readTime: '28 min',
      isNew: true
    },
    {
      id: '3',
      title: 'AI Ethical Governance Framework 2025',
      description: 'Comprehensive guide to building trustworthy AI systems with bias mitigation, transparency, and regulatory compliance.',
      href: '/blog/ai-2025-ethical-governance-framework',
      type: 'blog',
      featured: true,
      category: 'AI Ethics',
      readTime: '32 min',
      isNew: true
    },
    {
      id: '4',
      title: 'AI Manufacturing Transformation: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved 300% ROI and $200M savings through AI transformation.',
      href: '/case-studies/ai-manufacturing-transformation-2025',
      type: 'case-study',
      featured: true,
      category: 'Case Study',
      readTime: '35 min',
      isNew: true
    },
    {
      id: '5',
      title: 'AI Enterprise Automation Revolution 2025',
      description: 'Discover how AI is transforming enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      featured: true,
      category: 'Automation',
      readTime: '22 min',
      isNew: false
    },
    {
      id: '6',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our comprehensive 200+ page AI implementation guide with templates, best practices, and real-world examples.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      featured: true,
      category: 'Implementation',
      readTime: '200+ pages',
      isNew: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const currentContent = newContent[currentIndex];

  if (!isVisible) return null;
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close banner"
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'service':
        return '🚀';
      case 'resource':
        return '📚';
      default:
        return '✨';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'service':
        return 'from-purple-500 to-pink-500';
      case 'resource':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Architecture':
        return 'bg-blue-100 text-blue-800';
      case 'Quantum AI':
        return 'bg-purple-100 text-purple-800';
      case 'AI Ethics':
        return 'bg-green-100 text-green-800';
      case 'Case Study':
        return 'bg-emerald-100 text-emerald-800';
      case 'Automation':
        return 'bg-orange-100 text-orange-800';
      case 'Implementation':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3 animate-bounce">{getTypeIcon(currentContent.type)}</span>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(currentContent.category)}`}>
                    {currentContent.category}
                  </span>
                  {currentContent.isNew && (
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
              </div>
              
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
                <h3 className="text-3xl font-bold mb-3 leading-tight">
                  {currentContent.title}
                </h3>
                <p className="text-lg text-indigo-100 mb-4 leading-relaxed">
                  {currentContent.description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm opacity-75">⏱️ {currentContent.readTime} read</span>
                  <span className="text-sm opacity-75">•</span>
                  <span className="text-sm opacity-75">📅 Just Published</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Link 
                  href={currentContent.href}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentContent.type === 'resource' ? 'Download Now' : 'Read More'}
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors text-lg font-medium flex items-center gap-2"
                >
                  View All Content 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-3">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newContent.slice(0, 3).map((item, index) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{getTypeIcon(item.type)}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      {item.isNew && (
                        <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-indigo-100 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span>⏱️ {item.readTime}</span>
                    <span className="group-hover:text-white transition-colors">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/75 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
>>>>>>> cursor/create-and-deploy-new-content-d46f
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT DROP</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Fresh AI & Business Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: Advanced AI Architecture, Automation Trends, 
            $200M Success Case Study, and comprehensive implementation guides. Expert insights 
            to accelerate your success in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📖 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    {item.isNew && (
                      <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:underline">
                    {item.title}
                  </h4>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Trending This Week</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-15 transition-all duration-300 border border-white border-opacity-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm group-hover:underline">
                        {item.title}
                      </h4>
                      <p className="text-xs opacity-90 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Content Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-sm opacity-90">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">340%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📋 Download Free Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
=======
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-6000 ease-linear"
          style={{ width: `${((currentIndex + 1) / newContent.length) * 100}%` }}
        />
      </div>
    </div>
>>>>>>> cursor/create-and-deploy-new-content-d46f
  );
};

export default EnhancedContentPromotionBanner;