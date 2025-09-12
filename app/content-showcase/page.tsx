import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Quantum Computing Breakthrough: Revolutionary Applications",
      description: "Discover how quantum computing is revolutionizing AI in 2025. Explore breakthrough applications, real-world implementations, and the future of quantum AI systems.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚡",
      category: "AI Technology",
      readTime: "25 min read",
      isNew: true,
      featured: true
    },
    {
      title: "AI 2025 Neural Interfaces: Brain-Computer Integration Revolution",
      description: "Discover how neural interfaces are revolutionizing human-AI interaction in 2025. Explore brain-computer integration, neural prosthetics, and the future of direct thought-to-AI communication.",
      href: "/blog/ai-2025-neural-interfaces-brain-computer",
      icon: "🧠",
      category: "AI Technology",
      readTime: "22 min read",
      isNew: true,
      featured: true
    },
    {
      title: "AI 2025 Space Technology: Autonomous Systems Revolution",
      description: "Discover how AI is revolutionizing space technology in 2025. Explore autonomous satellite systems, space exploration AI, and the future of intelligent space operations.",
      href: "/blog/ai-2025-space-technology-autonomous-systems",
      icon: "🛰️",
      category: "AI Technology",
      readTime: "28 min read",
      isNew: true,
      featured: true
    }
  ];

  const caseStudies = [
    {
      title: "AI Quantum Financial Optimization: $2.3B Success Story",
      description: "How a major investment bank achieved $2.3B in additional returns using AI quantum optimization. Complete case study with implementation details and ROI analysis.",
      href: "/case-studies/ai-quantum-financial-optimization-2025",
      icon: "💰",
      category: "Case Study",
      type: "Financial Services",
      isNew: true,
      featured: true
    },
    {
      title: "AI Autonomous Manufacturing: $200M Success",
      description: "How autonomous AI systems transformed manufacturing operations, achieving $200M in savings and 40% efficiency improvements.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "🏭",
      category: "Case Study",
      type: "Manufacturing",
      isNew: true,
      featured: true
    },
    {
      title: "AI Healthcare Diagnosis: 95% Accuracy Achieved",
      description: "Revolutionary AI system for medical diagnosis and treatment, achieving 95% accuracy and 60% faster diagnosis times.",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: "🏥",
      category: "Case Study",
      type: "Healthcare",
      isNew: true,
      featured: true
    }
  ];

  const resources = [
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download the comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices for successful AI adoption.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Free Resource",
      type: "Master Guide",
      isNew: true,
      featured: true
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation. Complete checklist covering all aspects of AI security and compliance.",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: "🛡️",
      category: "Free Resource",
      type: "Checklist",
      isNew: true,
      featured: true
    },
    {
      title: "AI Workforce Transformation Playbook 2025",
      description: "Complete reskilling strategies and implementation guides for transforming your workforce for the AI era.",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      icon: "👥",
      category: "Free Resource",
      type: "Playbook",
      isNew: true,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Resources"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Discover breakthrough technologies, success stories, and implementation guides for 2025."
        keywords="AI content, technology resources, AI articles, case studies, implementation guides, AI trends 2025"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 BREAKTHROUGH CONTENT - JANUARY 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🎯 Content Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: Revolutionary AI technologies, $2.3B success stories, 
            and comprehensive implementation guides. Everything you need to succeed with AI in 2025.
          </p>
        </div>

        {/* Featured Articles */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">⚡ Featured Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{content.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                    {content.isNew && (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">💰 Success Stories</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Case Studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} href={study.href} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{study.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.type}
                    </span>
                    {study.isNew && (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Case Study</span>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 Free Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                      {resource.category}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                    {resource.isNew && (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Free Download</span>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download Now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive AI implementation guide and expert consultation. 
            Join thousands of successful AI implementations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-implementation-master-guide-2026"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Download Free Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}