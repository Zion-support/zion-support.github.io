import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Implementation Master Guide 2026",
      description: "200+ page comprehensive guide with frameworks, templates, and step-by-step implementation strategies for AI transformation.",
      type: "Guide",
      pages: "200+",
      downloadCount: "15,000+",
      icon: "📖",
      href: "/resources/ai-implementation-master-guide-2026",
      featured: true
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items and best practices for secure AI implementation across your organization.",
      type: "Checklist",
      pages: "50+",
      downloadCount: "8,500+",
      icon: "🛡️",
      href: "/resources/ai-cybersecurity-checklist-2025"
    },
    {
      title: "AI Workforce Transformation Playbook",
      description: "Complete reskilling strategies and implementation guides for preparing your team for the AI era.",
      type: "Playbook",
      pages: "150+",
      downloadCount: "12,000+",
      icon: "👥",
      href: "/resources/ai-workforce-transformation-playbook-2025"
    },
    {
      title: "AI ROI Calculator & Templates",
      description: "Interactive ROI calculator and financial modeling templates for AI project justification and planning.",
      type: "Tool",
      pages: "25+",
      downloadCount: "20,000+",
      icon: "💰",
      href: "/resources/ai-roi-calculator-templates"
    },
    {
      title: "AI Governance Framework",
      description: "Complete framework for responsible AI governance, ethics, and compliance across your organization.",
      type: "Framework",
      pages: "100+",
      downloadCount: "6,500+",
      icon: "⚖️",
      href: "/resources/ai-governance-framework"
    },
    {
      title: "AI Sustainability Implementation Guide",
      description: "Step-by-step guide to implementing AI-powered sustainability initiatives and achieving carbon neutrality.",
      type: "Guide",
      pages: "120+",
      downloadCount: "4,200+",
      icon: "🌱",
      href: "/resources/ai-sustainability-implementation-guide"
    },
    {
      title: "AI Data Privacy Compliance Checklist",
      description: "Comprehensive checklist for ensuring AI systems comply with GDPR, CCPA, and other privacy regulations.",
      type: "Checklist",
      pages: "75+",
      downloadCount: "9,800+",
      icon: "🔒",
      href: "/resources/ai-data-privacy-compliance-checklist"
    },
    {
      title: "AI Project Management Templates",
      description: "Complete set of templates for planning, executing, and managing AI projects from conception to deployment.",
      type: "Templates",
      pages: "40+",
      downloadCount: "11,500+",
      icon: "📋",
      href: "/resources/ai-project-management-templates"
    }
  ];

  const categories = [
    { name: "All Resources", count: resources.length, active: true },
    { name: "Implementation Guides", count: resources.filter(r => r.type === "Guide").length },
    { name: "Checklists", count: resources.filter(r => r.type === "Checklist").length },
    { name: "Frameworks", count: resources.filter(r => r.type === "Framework").length },
    { name: "Tools & Templates", count: resources.filter(r => r.type === "Tool" || r.type === "Templates").length },
    { name: "Playbooks", count: resources.filter(r => r.type === "Playbook").length }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI Resources & Implementation Guides | Zion Tech Group"
        description="Download our comprehensive collection of free AI resources, implementation guides, checklists, and templates. Everything you need to succeed with AI in 2025."
        keywords="AI resources, implementation guides, AI checklists, AI templates, free downloads, AI frameworks"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free AI Resources & Implementation Guides
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of free AI resources, implementation guides, checklists, 
            and templates. Everything you need to successfully implement AI in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#featured-resources"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Expert Help
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700">Free Resources</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100K+</div>
            <div className="text-gray-700">Downloads</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-700">Industries Served</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-700">Success Rate</div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <section id="featured-resources" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.filter(r => r.featured).map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.pages} pages</span>
                  <span>{resource.downloadCount} downloads</span>
                </div>
                <Link
                  href={resource.href}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Download Free
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* All Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  {resource.featured && (
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.pages} pages</span>
                  <span>{resource.downloadCount} downloads</span>
                </div>
                <Link
                  href={resource.href}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Download Free
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with New Resources</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified when we release new resources, guides, and templates. Join 25,000+ professionals 
            who trust our content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </section>

        {/* Related Content */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Latest AI Articles & Insights
                </h3>
                <p className="text-gray-600 text-sm">
                  Read our latest articles on AI trends, implementation strategies, and industry insights
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Success Stories & Case Studies
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn from real-world AI implementations and success stories from leading companies
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}