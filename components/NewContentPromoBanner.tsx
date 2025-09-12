import React from 'react';
import Link from 'next/link';

interface NewContentPromoBannerProps {
  variant?: 'featured' | 'default' | 'minimal';
  maxItems?: number;
  className?: string;
}

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service' | 'webinar';
  featured: boolean;
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

<<<<<<< HEAD
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
=======
  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: The Generative AI Enterprise Revolution',
      description: 'Discover how generative AI is revolutionizing enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-generative-ai-enterprise-revolution',
      type: 'blog',
      featured: true
    },
    {
      id: '2',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Explore how AI is revolutionizing cybersecurity with 99.7% threat detection accuracy and automated response systems.',
      href: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      featured: true
    },
    {
      id: '3',
      title: 'AI Retail Transformation: 400% Revenue Growth',
      description: 'Complete case study: How a major retail chain achieved 400% revenue growth through AI-powered personalization.',
      href: '/case-studies/ai-2025-retail-transformation-breakthrough',
      type: 'case-study',
      featured: true
    },
    {
      id: '4',
      title: 'AI 2025 Implementation Masterclass: Advanced Strategies',
      description: 'Join our exclusive 6-hour masterclass on advanced AI implementation strategies with industry experts.',
      href: '/webinars/ai-2025-implementation-masterclass-advanced',
      type: 'webinar',
      featured: true
    },
    {
      id: '5',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      featured: true
    },
    {
      id: '6',
      title: 'AI Automation Services',
      description: 'Transform your business with cutting-edge AI automation solutions. 90% faster processing, 60% cost reduction.',
      href: '/services/ai-automation',
      type: 'service',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 5000);

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
      case 'webinar':
        return '🎓';
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
      case 'webinar':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{getTypeIcon(currentContent.type)}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type === 'case-study' ? 'Case Study' : 
                   currentContent.type === 'service' ? 'Service' : 
                   currentContent.type === 'webinar' ? 'Webinar' : 'New Article'}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {currentContent.title}
              </h3>
              <p className="text-lg text-indigo-100 mb-4">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href={currentContent.href}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Read More
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  View All Content →
                </Link>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-2">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
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