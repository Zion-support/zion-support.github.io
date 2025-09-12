import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "Advanced AI Architecture 2025",
      description: "Master the latest AI architecture patterns for 2025. Learn about microservices, MLOps, vector databases, and production deployment strategies that scale.",
      href: "/blog/ai-2025-advanced-ai-architecture",
      type: "blog",
      category: "Architecture",
      readTime: "25 min read",
      featured: true,
      icon: "🏗️"
    },
    {
      id: 2,
      title: "AI Cybersecurity Revolution 2025",
      description: "Discover the latest AI cybersecurity threats and defense strategies for 2025. Learn about adversarial attacks, AI-powered security tools, and enterprise protection frameworks.",
      href: "/blog/ai-2025-cybersecurity-revolution",
      type: "blog",
      category: "Security",
      readTime: "22 min read",
      featured: true,
      icon: "🛡️"
    },
    {
      id: 3,
      title: "$200M Manufacturing Success Case Study",
      description: "How a Fortune 500 manufacturing giant transformed their operations with autonomous AI systems, achieving unprecedented cost savings and efficiency gains.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      type: "case-study",
      category: "Manufacturing",
      readTime: "18 min read",
      featured: true,
      icon: "💰"
    },
    {
      id: 4,
      title: "AI Implementation Master Guide 2026",
      description: "The most comprehensive AI implementation guide available. 200+ pages of proven frameworks, checklists, templates, and step-by-step strategies.",
      href: "/resources/ai-implementation-master-guide-2026",
      type: "resource",
      category: "Implementation",
      readTime: "200+ pages",
      featured: true,
      icon: "📚"
    }
  ];

  const latestContent = [
    {
      id: 5,
      title: "AI Trends 2025 Predictions",
      description: "15 predictions shaping the future of AI in 2025, from breakthrough innovations to enterprise adoption trends.",
      href: "/blog/ai-2025-trends-predictions",
      type: "blog",
      category: "Trends",
      readTime: "28 min read",
      icon: "🔮"
    },
    {
      id: 6,
      title: "AI Workforce Transformation 2025",
      description: "Complete guide to reskilling strategies for the AI era, including implementation frameworks and success stories.",
      href: "/blog/ai-2025-workforce-transformation",
      type: "blog",
      category: "Workforce",
      readTime: "20 min read",
      icon: "👥"
    },
    {
      id: 7,
      title: "AI Sustainability & Green Tech",
      description: "Building eco-friendly AI systems for the future. Learn about energy optimization and sustainable AI practices.",
      href: "/blog/ai-2025-sustainability-green-tech",
      type: "blog",
      category: "Sustainability",
      readTime: "18 min read",
      icon: "🌱"
    },
    {
      id: 8,
      title: "AI Go-To-Market Strategy 2025",
      description: "Positioning, pricing, and distribution strategies that work for AI products in 2025. From zero to traction playbook.",
      href: "/blog/ai-2025-ai-go-to-market",
      type: "blog",
      category: "Strategy",
      readTime: "15 min read",
      icon: "📈"
    }
  ];

  const resources = [
    {
      id: 9,
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation and compliance with industry standards.",
      href: "/resources/ai-cybersecurity-checklist-2025",
      type: "resource",
      category: "Security",
      readTime: "150+ items",
      icon: "🔒"
    },
    {
      id: 10,
      title: "AI Workforce Transformation Playbook",
      description: "Complete reskilling strategies and implementation guides for organizations transitioning to AI-driven operations.",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      type: "resource",
      category: "Workforce",
      readTime: "150+ pages",
      icon: "👨‍💼"
    },
    {
      id: 11,
      title: "AI ROI Calculator",
      description: "Calculate potential return on AI investments with our comprehensive ROI calculator and financial modeling tools.",
      href: "/tools/ai-roi-calculator",
      type: "tool",
      category: "Finance",
      readTime: "Interactive",
      icon: "💰"
    },
    {
      id: 12,
      title: "AI Implementation Checklist",
      description: "Step-by-step checklist for successful AI implementation, from planning to deployment and optimization.",
      href: "/resources/ai-implementation-checklist-2025",
      type: "resource",
      category: "Implementation",
      readTime: "100+ items",
      icon: "✅"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      case 'tool':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Architecture':
        return 'bg-blue-100 text-blue-800';
      case 'Security':
        return 'bg-red-100 text-red-800';
      case 'Manufacturing':
        return 'bg-green-100 text-green-800';
      case 'Implementation':
        return 'bg-purple-100 text-purple-800';
      case 'Trends':
        return 'bg-yellow-100 text-yellow-800';
      case 'Workforce':
        return 'bg-indigo-100 text-indigo-800';
      case 'Sustainability':
        return 'bg-emerald-100 text-emerald-800';
      case 'Strategy':
        return 'bg-pink-100 text-pink-800';
      case 'Finance':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - AI Resources, Guides & Case Studies 2025"
        description="Explore our comprehensive collection of AI resources, implementation guides, case studies, and expert insights. Everything you need to succeed with AI in 2025."
        keywords="AI resources, AI guides, AI case studies, AI implementation, AI strategy, 2025"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 COMPREHENSIVE AI RESOURCE LIBRARY</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Complete AI Transformation Toolkit
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI resources, implementation guides, case studies, and expert insights. 
            Everything you need to master AI in 2025, from strategic planning to technical implementation.
          </p>
        </header>

        {/* Featured Content */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Content</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredContent.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:scale-105">
                  <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-8 text-white relative`}>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                        {item.type === 'case-study' ? 'Case Study' : 
                         item.type === 'resource' ? 'Resource' : 'Article'}
                      </span>
                    </div>
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <span className="text-sm opacity-75">{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestContent.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources & Tools */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Resources & Tools</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500 to-blue-500"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Architecture & Technical</h3>
              <p className="text-gray-600 mb-6">Deep technical guides, architecture patterns, and implementation frameworks for developers and architects.</p>
              <div className="space-y-2">
                <Link href="/blog/ai-2025-advanced-ai-architecture" className="block text-blue-600 hover:text-blue-800 font-medium">
                  → Advanced AI Architecture
                </Link>
                <Link href="/blog/ai-2025-advanced-rag-systems" className="block text-blue-600 hover:text-blue-800 font-medium">
                  → Advanced RAG Systems
                </Link>
                <Link href="/blog/ai-2025-mlops-production" className="block text-blue-600 hover:text-blue-800 font-medium">
                  → MLOps for Production
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">AI security best practices, compliance frameworks, and risk management strategies for enterprise AI.</p>
              <div className="space-y-2">
                <Link href="/blog/ai-2025-cybersecurity-revolution" className="block text-red-600 hover:text-red-800 font-medium">
                  → AI Cybersecurity Revolution
                </Link>
                <Link href="/resources/ai-cybersecurity-checklist-2025" className="block text-red-600 hover:text-red-800 font-medium">
                  → Security Checklist
                </Link>
                <Link href="/blog/ai-2025-ai-governance-ethics" className="block text-red-600 hover:text-red-800 font-medium">
                  → AI Governance & Ethics
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business & Strategy</h3>
              <p className="text-gray-600 mb-6">Strategic AI implementation guides, ROI frameworks, and business transformation strategies.</p>
              <div className="space-y-2">
                <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="block text-green-600 hover:text-green-800 font-medium">
                  → $200M Manufacturing Success
                </Link>
                <Link href="/blog/ai-2025-ai-go-to-market" className="block text-green-600 hover:text-green-800 font-medium">
                  → AI Go-To-Market Strategy
                </Link>
                <Link href="/resources/ai-implementation-master-guide-2026" className="block text-green-600 hover:text-green-800 font-medium">
                  → Master Implementation Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get expert guidance on implementing AI solutions that drive real business value. 
            Our team has helped 500+ companies achieve AI success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free AI Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Download All Resources
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}