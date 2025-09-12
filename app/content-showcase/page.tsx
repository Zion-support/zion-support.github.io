import React from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import ErrorBoundary from '../../components/ErrorBoundary';
import { BookOpen, Briefcase, Download, TrendingUp, Lightbulb, Shield, Factory, DollarSign } from 'lucide-react';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI 2025: The Year Ahead - 15 Predictions That Will Shape Technology",
      description: "Discover the 15 most important AI predictions for 2025, from AGI breakthroughs to enterprise transformation. Expert insights on what's coming next.",
      href: "/blog/ai-2025-year-ahead-predictions",
      icon: "🤖",
      category: "AI Predictions",
      readTime: "25 min read",
      date: "Jan 15, 2025",
      featured: true
    },
    {
      title: "AI Automation Enterprise Success Stories 2025: Real Results from Fortune 500 Companies",
      description: "Discover how Fortune 500 companies achieved 300% ROI with AI automation. Real case studies, implementation strategies, and actionable insights for enterprise transformation.",
      href: "/blog/ai-automation-enterprise-success-2025",
      icon: "🏢",
      category: "Enterprise AI",
      readTime: "18 min read",
      date: "Jan 20, 2025",
      featured: true
    },
    {
      title: "AI Implementation Success Framework 2025: From Strategy to Governance",
      description: "Discover Zion Tech Group's comprehensive AI Implementation Success Framework for 2025. Learn how to navigate strategy, data, talent, and governance for successful AI adoption.",
      href: "/blog/ai-implementation-success-framework-2025",
      icon: "✅",
      category: "AI Strategy",
      readTime: "18 min read",
      date: "Feb 01, 2025"
    },
    {
      title: "AI Multimodal Applications 2025: Beyond Text to Vision and Audio",
      description: "Complete guide to building multimodal AI systems that process text, images, audio, and video for enhanced user experiences and business applications.",
      href: "/blog/ai-multimodal-applications-2025",
      icon: "🎭",
      category: "AI Technology",
      readTime: "12 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Edge Computing Revolution 2025: Bringing Intelligence to the Edge",
      description: "Explore how edge AI is revolutionizing real-time applications, from autonomous vehicles to smart cities, with 300% market growth expected in 2025.",
      href: "/blog/ai-edge-computing-revolution-2025",
      icon: "⚡",
      category: "Edge AI",
      readTime: "15 min read",
      date: "Jan 25, 2025"
    },
    {
      title: "AI Governance and Ethics 2025: Building Responsible AI Systems",
      description: "Comprehensive guide to AI governance, ethics, and compliance in 2025. Learn how to build responsible AI systems that meet regulatory requirements.",
      href: "/blog/ai-governance-ethics-2025",
      icon: "⚖️",
      category: "AI Governance",
      readTime: "20 min read",
      date: "Jan 30, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Healthcare Diagnosis Breakthrough 2025: 95% Accuracy Achievement",
      description: "How a leading healthcare provider achieved 95% diagnostic accuracy and 80% faster processing times using advanced AI systems, resulting in $50M in cost savings.",
      href: "/case-studies/ai-healthcare-diagnosis-breakthrough-2025",
      icon: "🏥",
      category: "Healthcare AI",
      readTime: "12 min read",
      date: "Jan 18, 2025",
      featured: true
    },
    {
      title: "Manufacturing AI Optimization: 60% Cost Reduction Success Story",
      description: "Case study of how a Fortune 500 manufacturer achieved 60% cost reduction and 200% efficiency gains through AI-powered process optimization.",
      href: "/case-studies/manufacturing-ai-optimization-2025",
      icon: "🏭",
      category: "Manufacturing AI",
      readTime: "10 min read",
      date: "Jan 22, 2025"
    },
    {
      title: "Financial Services AI Transformation: $2B in New Revenue",
      description: "How a major bank leveraged AI to generate $2B in new revenue through intelligent automation and predictive analytics.",
      href: "/case-studies/financial-ai-transformation-2025",
      icon: "💰",
      category: "Financial AI",
      readTime: "14 min read",
      date: "Jan 26, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Enterprise Readiness Assessment 2025",
      description: "Comprehensive assessment tool to evaluate your organization's AI readiness across 8 key dimensions. Get personalized recommendations and strategic roadmap.",
      href: "/resources/ai-enterprise-readiness-assessment-2025",
      icon: "📊",
      category: "Assessment Tools",
      type: "Free Download",
      featured: true
    },
    {
      title: "AI Implementation Master Guide 2025",
      description: "300+ page comprehensive guide covering AI strategy, implementation, governance, and best practices. Includes templates, frameworks, and real-world examples.",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      category: "Implementation Guides",
      type: "Premium Guide",
      featured: true
    },
    {
      title: "AI ROI Calculator 2025",
      description: "Interactive tool to calculate potential ROI from AI investments. Input your business metrics and get detailed projections and recommendations.",
      href: "/resources/ai-roi-calculator-2025",
      icon: "🧮",
      category: "Business Tools",
      type: "Free Tool"
    },
    {
      title: "AI Ethics Checklist 2025",
      description: "Comprehensive checklist to ensure your AI systems meet ethical standards and regulatory requirements. Updated for 2025 regulations.",
      href: "/resources/ai-ethics-checklist-2025",
      icon: "✅",
      category: "Compliance",
      type: "Free Download"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Content Showcase - AI Resources, Case Studies & Blog Posts",
    "description": "Explore our comprehensive collection of AI resources, case studies, and blog posts. Stay updated with the latest AI trends and insights.",
    "url": "https://zion.app/content-showcase",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        ...newBlogPosts.map((post, index) => ({
          "@type": "Article",
          "position": index + 1,
          "name": post.title,
          "description": post.description,
          "url": `https://zion.app${post.href}`,
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        })),
        ...newCaseStudies.map((study, index) => ({
          "@type": "Article",
          "position": newBlogPosts.length + index + 1,
          "name": study.title,
          "description": study.description,
          "url": `https://zion.app${study.href}`,
          "datePublished": study.date,
          "author": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        }))
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - AI Resources, Case Studies & Blog Posts | Zion Tech Group"
        description="Explore our comprehensive collection of AI resources, case studies, and blog posts. Stay updated with the latest AI trends, insights, and implementation guides."
        keywords="AI resources, AI case studies, AI blog posts, AI implementation guides, AI trends 2025, artificial intelligence content"
        url="/content-showcase"
      />
      
      <StructuredData data={structuredData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI resources, case studies, and insights. 
            Stay ahead with the latest trends, implementation guides, and real-world success stories.
          </p>
        </div>

        {/* Content Filtering */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              All Content
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              AI Predictions
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Enterprise AI
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Healthcare AI
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Free Resources
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Case Studies
            </button>
          </div>
        </div>

        {/* Featured Blog Posts */}
        <ErrorBoundary>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Blog Posts</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newBlogPosts.filter(post => post.featured).map((post, index) => (
                <a
                  key={index}
                  href={post.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{post.icon}</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </ErrorBoundary>

        {/* Featured Case Studies */}
        <ErrorBoundary>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Case Studies</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newCaseStudies.filter(study => study.featured).map((study, index) => (
                <a
                  key={index}
                  href={study.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{study.icon}</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {study.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{study.readTime}</span>
                    <span>{study.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </ErrorBoundary>

        {/* Featured Resources */}
        <ErrorBoundary>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Download className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newResources.filter(resource => resource.featured).map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-600">{resource.type}</span>
                    <span className="text-sm text-gray-500">Download</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </ErrorBoundary>

        {/* All Blog Posts */}
        <ErrorBoundary>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">All Blog Posts</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newBlogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{post.icon}</div>
                  <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </ErrorBoundary>

        {/* All Case Studies */}
        <ErrorBoundary>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-yellow-600" />
              <h2 className="text-3xl font-bold text-gray-900">All Case Studies</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newCaseStudies.map((study, index) => (
                <a
                  key={index}
                  href={study.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{study.icon}</div>
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {study.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{study.readTime}</span>
                    <span>{study.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </ErrorBoundary>

        {/* All Resources */}
        <ErrorBoundary>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900">All Resources</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{resource.icon}</div>
                  <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-600">{resource.type}</span>
                    <span className="text-sm text-gray-500">Download</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </ErrorBoundary>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't just read about AI—implement it. Our experts can help you turn these insights into real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}