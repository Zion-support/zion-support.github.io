import React from 'react';
import Link from 'next/link';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime: string;
  featured?: boolean;
  icon: string;
}

interface RevolutionaryContentBannerProps {
  variant?: 'featured' | 'trending' | 'latest';
  maxItems?: number;
}

const featuredContent: ContentItem[] = [
  {
    id: 1,
    title: "AI Advanced Neural Architectures 2025: Next-Generation Deep Learning Systems",
    description: "Explore revolutionary neural architectures reshaping AI in 2025. From transformer variants to neuromorphic computing.",
    href: "/blog/ai-2025-advanced-neural-architectures",
    type: "blog",
    category: "AI Architecture",
    readTime: "35 min read",
    featured: true,
    icon: "🧠"
  },
  {
    id: 2,
    title: "AI Autonomous Systems 2025: The Future of Self-Operating Technology",
    description: "Discover how AI is creating truly independent systems that operate, learn, and adapt without human intervention.",
    href: "/blog/ai-2025-autonomous-systems",
    type: "blog",
    category: "Autonomous Systems",
    readTime: "32 min read",
    featured: true,
    icon: "🤖"
  },
  {
    id: 3,
    title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
    description: "How a Fortune 500 manufacturing company achieved $200M in annual savings with autonomous AI systems.",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    type: "case-study",
    category: "Manufacturing",
    readTime: "Case Study",
    featured: true,
    icon: "🏭"
  },
  {
    id: 4,
    title: "AI Implementation Master Guide 2026: Complete 200+ Page Blueprint",
    description: "The most comprehensive AI implementation guide available. Everything you need to successfully implement AI.",
    href: "/resources/ai-implementation-master-guide-2026",
    type: "resource",
    category: "Implementation",
    readTime: "200+ pages",
    featured: true,
    icon: "📖"
  }
];

const trendingContent: ContentItem[] = [
  {
    id: 5,
    title: "AI Cybersecurity Transformation: 99.8% Threat Detection Success",
    description: "How AI-powered cybersecurity achieved 99.8% threat detection accuracy and 85% reduction in security incidents.",
    href: "/case-studies/ai-cybersecurity-transformation-breakthrough-2025",
    type: "case-study",
    category: "Cybersecurity",
    readTime: "Case Study",
    icon: "🛡️"
  },
  {
    id: 6,
    title: "AI Sustainability Transformation: 60% Energy Reduction Success",
    description: "How a major corporation achieved 60% energy reduction and carbon neutrality through AI optimization.",
    href: "/case-studies/ai-sustainability-transformation-2025",
    type: "case-study",
    category: "Sustainability",
    readTime: "Case Study",
    icon: "🌱"
  },
  {
    id: 7,
    title: "AI Workforce Transformation Playbook 2025: Complete Reskilling Guide",
    description: "Comprehensive playbook for AI workforce transformation with proven strategies and implementation frameworks.",
    href: "/resources/ai-workforce-transformation-playbook-2025",
    type: "resource",
    category: "Workforce",
    readTime: "150+ pages",
    icon: "👥"
  },
  {
    id: 8,
    title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
    description: "Comprehensive cybersecurity checklist for AI implementations covering data protection and compliance.",
    href: "/resources/ai-cybersecurity-checklist-2025",
    type: "resource",
    category: "Security",
    readTime: "150+ items",
    icon: "🛡️"
  }
];

export default function RevolutionaryContentBanner({ variant = 'featured', maxItems = 4 }: RevolutionaryContentBannerProps) {
  const getContent = () => {
    switch (variant) {
      case 'featured':
        return featuredContent.slice(0, maxItems);
      case 'trending':
        return trendingContent.slice(0, maxItems);
      case 'latest':
        return [...featuredContent, ...trendingContent].slice(0, maxItems);
      default:
        return featuredContent.slice(0, maxItems);
    }
  };

  const getBannerConfig = () => {
    switch (variant) {
      case 'featured':
        return {
          title: "🚀 Revolutionary AI Content Drop - January 2025",
          subtitle: "100+ New AI Resources: The Complete 2025 Transformation Toolkit!",
          description: "Just released: AI Advanced Neural Architectures, Autonomous Systems, $200M Manufacturing Success Case Study, plus comprehensive implementation guides and expert frameworks.",
          bgGradient: "from-purple-600 via-pink-600 to-red-600",
          buttonText: "🚀 Explore All New Content",
          buttonHref: "/content-showcase"
        };
      case 'trending':
        return {
          title: "🔥 Trending AI Success Stories",
          subtitle: "Real Results from Real Companies: Proven AI Implementation Success",
          description: "Discover how leading companies are achieving breakthrough results with AI. From cybersecurity transformations to sustainability initiatives.",
          bgGradient: "from-green-600 via-blue-600 to-purple-600",
          buttonText: "📊 View All Case Studies",
          buttonHref: "/case-studies"
        };
      case 'latest':
        return {
          title: "✨ Latest AI Insights & Resources",
          subtitle: "Fresh Content Just Published: Expert Analysis & Implementation Guides",
          description: "Stay ahead with our latest articles, case studies, and resources covering the most important trends in AI for 2025.",
          bgGradient: "from-indigo-600 via-purple-600 to-pink-600",
          buttonText: "📚 Read Latest Articles",
          buttonHref: "/blog"
        };
      default:
        return {
          title: "🚀 Revolutionary AI Content Drop",
          subtitle: "The Complete 2025 Transformation Toolkit",
          description: "Discover our comprehensive collection of AI resources, implementation guides, and expert insights.",
          bgGradient: "from-purple-600 via-pink-600 to-red-600",
          buttonText: "🚀 Explore All Content",
          buttonHref: "/content-showcase"
        };
    }
  };

  const content = getContent();
  const config = getBannerConfig();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Architecture':
        return 'bg-blue-100 text-blue-800';
      case 'Autonomous Systems':
        return 'bg-green-100 text-green-800';
      case 'Manufacturing':
        return 'bg-orange-100 text-orange-800';
      case 'Implementation':
        return 'bg-purple-100 text-purple-800';
      case 'Cybersecurity':
        return 'bg-red-100 text-red-800';
      case 'Sustainability':
        return 'bg-emerald-100 text-emerald-800';
      case 'Workforce':
        return 'bg-indigo-100 text-indigo-800';
      case 'Security':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className={`py-20 bg-gradient-to-r ${config.bgGradient} text-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-6">
            <span className="text-lg font-bold">{config.title}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            {config.subtitle}
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-10 max-w-6xl mx-auto leading-relaxed">
            {config.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href={config.buttonHref}
              className="bg-white text-purple-600 px-12 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-xl shadow-2xl transform hover:scale-105"
            >
              {config.buttonText}
            </Link>
            <Link
              href="/resources"
              className="border-3 border-white text-white px-12 py-5 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-xl"
            >
              📚 Download Free Resources
            </Link>
            <Link
              href="/contact"
              className="border-3 border-white text-white px-12 py-5 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-xl"
            >
              🚀 Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:underline">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3 line-clamp-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-xs opacity-75">{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-90 mb-6">
            Join 10,000+ AI professionals who are transforming their businesses with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300"
            >
              📧 Subscribe to AI Insights
            </Link>
            <Link
              href="/webinars"
              className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300"
            >
              🎓 Attend Free Webinars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}