import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Implementation Playbook 2025",
      description: "Complete 200+ page guide with strategies, templates, checklists, and case studies for successful AI implementation.",
      href: "/resources/ai-implementation-playbook-2025",
      category: "Implementation Guide",
      type: "PDF Download",
      pages: "200+ pages",
      icon: "📋",
      featured: true
    },
    {
      title: "AI Startup Funding Templates 2025",
      description: "Complete collection of pitch deck templates, financial models, and funding strategy guides for AI startups.",
      href: "/resources/ai-startup-funding-templates-2025",
      category: "Startup Resources",
      type: "Template Pack",
      pages: "50+ templates",
      icon: "💰",
      featured: true
    },
    {
      title: "AI Data Governance Framework",
      description: "Comprehensive framework for AI data governance, privacy compliance, and ethical AI practices in enterprise environments.",
      href: "/resources/ai-data-governance-framework-2025",
      category: "Governance",
      type: "Framework",
      pages: "150+ pages",
      icon: "🛡️",
      featured: false
    },
    {
      title: "AI ROI Calculator Tool",
      description: "Interactive tool to calculate potential ROI, cost savings, and efficiency gains from AI implementation projects.",
      href: "/resources/ai-roi-calculator-tool-2025",
      category: "Tools",
      type: "Interactive Tool",
      pages: "Excel/Web",
      icon: "📊",
      featured: false
    },
    {
      title: "AI Ethics & Compliance Guide",
      description: "Complete guide to AI ethics, regulatory compliance, and responsible AI practices for enterprise organizations.",
      href: "/resources/ai-ethics-compliance-guide-2025",
      category: "Compliance",
      type: "Guide",
      pages: "120+ pages",
      icon: "⚖️",
      featured: false
    },
    {
      title: "AI Security Hardening Checklist",
      description: "Comprehensive checklist for securing AI systems, protecting data, and implementing security best practices.",
      href: "/resources/ai-security-hardening-checklist-2025",
      category: "Security",
      type: "Checklist",
      pages: "30+ items",
      icon: "🔒",
      featured: false
    }
  ];

  const categories = ["All", "Implementation Guide", "Startup Resources", "Governance", "Tools", "Compliance", "Security"];

  return (
    <>
      <SEO
        title="Free AI Resources & Implementation Guides - Download Now"
        description="Download our comprehensive collection of free AI resources, implementation guides, templates, and tools. Everything you need to succeed with AI in 2025."
        keywords="AI resources, free downloads, AI templates, implementation guides, AI tools, AI frameworks"
        url="/resources"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🎁 FREE RESOURCES</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free AI Resources & Implementation Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Download our comprehensive collection of free AI resources, implementation guides, 
              templates, and tools. Everything you need to succeed with AI in 2025.
            </p>
          </div>

          {/* Featured Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.filter(resource => resource.featured).map((resource, index) => (
                <Link key={index} href={resource.href} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">{resource.icon}</div>
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        FREE
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          {resource.category}
                        </span>
                        <span className="text-gray-500 text-sm">{resource.type}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{resource.pages}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold text-sm">ZT</span>
                          </div>
                          <span className="text-sm text-gray-600">Zion Tech Group</span>
                        </div>
                        <span className="text-green-600 font-medium group-hover:underline">
                          Download Now →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* All Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Link key={index} href={resource.href} className="group">
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                      <div className="text-6xl">{resource.icon}</div>
                      <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        FREE
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                          {resource.category}
                        </span>
                        <span className="text-gray-500 text-xs">{resource.type}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{resource.pages}</span>
                        <span className="text-green-600 font-medium group-hover:underline">
                          Download →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Resource Categories */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Resource Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Guides</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guides for implementing AI in your organization with proven methodologies.
                </p>
                <Link href="/resources?category=implementation" className="text-blue-600 hover:underline text-sm font-medium">
                  View Guides →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Startup Resources</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Templates, guides, and tools specifically designed for AI startups and entrepreneurs.
                </p>
                <Link href="/resources?category=startup" className="text-blue-600 hover:underline text-sm font-medium">
                  View Resources →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Governance & Compliance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Frameworks and guides for AI governance, ethics, and regulatory compliance.
                </p>
                <Link href="/resources?category=governance" className="text-blue-600 hover:underline text-sm font-medium">
                  View Frameworks →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools & Calculators</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Interactive tools and calculators to help you plan and measure AI initiatives.
                </p>
                <Link href="/resources?category=tools" className="text-blue-600 hover:underline text-sm font-medium">
                  View Tools →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Privacy</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Checklists and guides for securing AI systems and protecting sensitive data.
                </p>
                <Link href="/resources?category=security" className="text-blue-600 hover:underline text-sm font-medium">
                  View Security →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Templates & Checklists</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ready-to-use templates and checklists for various AI implementation activities.
                </p>
                <Link href="/resources?category=templates" className="text-blue-600 hover:underline text-sm font-medium">
                  View Templates →
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get New Resources Delivered Weekly
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be the first to access new resources, templates, and guides as we publish them. 
              Join 10,000+ professionals who rely on our content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}