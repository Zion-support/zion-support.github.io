import React from 'react';
import Link from 'next/link';
import { Download, FileText, CheckCircle, Clock, Users, Star, ArrowRight, BookOpen, Shield, Zap, Globe, Target } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Implementation Master Guide 2026",
      description: "200+ page comprehensive guide with frameworks, templates, and step-by-step implementation strategies for AI adoption across industries.",
      category: "Implementation Guide",
      type: "PDF",
      pages: "200+",
      downloadCount: "15,000+",
      rating: 4.9,
      isNew: true,
      isFeatured: true,
      icon: "📖",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["AI Strategy", "Implementation", "Templates", "Frameworks"]
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation, covering data protection, model security, and compliance requirements.",
      category: "Security Checklist",
      type: "PDF",
      pages: "50",
      downloadCount: "8,500+",
      rating: 4.8,
      isNew: true,
      isFeatured: true,
      icon: "🛡️",
      href: "/resources/ai-cybersecurity-checklist-2025",
      tags: ["Security", "Compliance", "Checklist", "AI Safety"]
    },
    {
      title: "AI Workforce Transformation Playbook",
      description: "Complete reskilling strategies and implementation guides for preparing your workforce for the AI era.",
      category: "Workforce Guide",
      type: "PDF",
      pages: "150+",
      downloadCount: "12,000+",
      rating: 4.7,
      isNew: true,
      isFeatured: false,
      icon: "👥",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      tags: ["Workforce", "Training", "Reskilling", "Change Management"]
    },
    {
      title: "AI ROI Calculator & Templates",
      description: "Interactive ROI calculator and Excel templates for measuring AI investment returns and business impact.",
      category: "Calculator",
      type: "Excel",
      pages: "25",
      downloadCount: "20,000+",
      rating: 4.9,
      isNew: false,
      isFeatured: true,
      icon: "💰",
      href: "/resources/ai-roi-calculator-templates",
      tags: ["ROI", "Calculator", "Templates", "Business Case"]
    },
    {
      title: "AI Governance Framework 2025",
      description: "Complete framework for responsible AI governance, including policies, procedures, and compliance guidelines.",
      category: "Governance",
      type: "PDF",
      pages: "100+",
      downloadCount: "6,500+",
      rating: 4.6,
      isNew: false,
      isFeatured: false,
      icon: "⚖️",
      href: "/resources/ai-governance-framework-2025",
      tags: ["Governance", "Compliance", "Policies", "Ethics"]
    },
    {
      title: "AI Project Management Templates",
      description: "Comprehensive project management templates for AI initiatives, including timelines, budgets, and risk assessments.",
      category: "Templates",
      type: "Excel/Word",
      pages: "75",
      downloadCount: "9,000+",
      rating: 4.5,
      isNew: false,
      isFeatured: false,
      icon: "📋",
      href: "/resources/ai-project-management-templates",
      tags: ["Project Management", "Templates", "Planning", "Execution"]
    },
    {
      title: "AI Data Privacy Compliance Guide",
      description: "Complete guide to AI data privacy regulations including GDPR, CCPA, and emerging AI-specific privacy laws.",
      category: "Compliance",
      type: "PDF",
      pages: "80",
      downloadCount: "7,200+",
      rating: 4.7,
      isNew: true,
      isFeatured: false,
      icon: "🔒",
      href: "/resources/ai-data-privacy-compliance-guide",
      tags: ["Privacy", "Compliance", "GDPR", "CCPA"]
    },
    {
      title: "AI Sustainability Best Practices",
      description: "Guide to building eco-friendly AI systems and reducing environmental impact through green AI practices.",
      category: "Sustainability",
      type: "PDF",
      pages: "60",
      downloadCount: "5,800+",
      rating: 4.6,
      isNew: true,
      isFeatured: false,
      icon: "🌱",
      href: "/resources/ai-sustainability-best-practices",
      tags: ["Sustainability", "Green AI", "Environment", "Best Practices"]
    }
  ];

  const categories = [
    { name: "All Resources", count: resources.length, icon: BookOpen, color: "from-blue-500 to-purple-500" },
    { name: "Implementation Guides", count: resources.filter(r => r.category.includes("Implementation")).length, icon: Target, color: "from-green-500 to-teal-500" },
    { name: "Security & Compliance", count: resources.filter(r => r.category.includes("Security") || r.category.includes("Compliance")).length, icon: Shield, color: "from-red-500 to-orange-500" },
    { name: "Templates & Tools", count: resources.filter(r => r.category.includes("Template") || r.category.includes("Calculator")).length, icon: FileText, color: "from-purple-500 to-pink-500" },
    { name: "Workforce & Training", count: resources.filter(r => r.category.includes("Workforce")).length, icon: Users, color: "from-cyan-500 to-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">📚 FREE RESOURCES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Implementation Resources
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                & Expert Guides
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download our comprehensive collection of AI implementation guides, checklists, templates, 
              and tools. Everything you need to successfully implement AI in your organization.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
              <span>50+ Resources</span>
              <span>•</span>
              <span>100K+ Downloads</span>
              <span>•</span>
              <span>Updated Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Free Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-blue-200">Total Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resource Categories</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 group-hover:border-blue-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">{category.count}</p>
                  <p className="text-sm text-gray-500">Resources</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and highly-rated resources for AI implementation and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-blue-300 overflow-hidden">
                  {/* Resource Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {resource.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        {resource.isNew && (
                          <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {resource.isFeatured && (
                          <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        {resource.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Resource Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        <span>{resource.pages} pages</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{resource.downloadCount}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resource Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <Link
                      href={resource.href}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Free
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get New Resources First</h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our newsletter and be the first to access new resources, 
            implementation guides, and exclusive content.
          </p>
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  required
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-sm text-gray-500">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                <strong>What you'll get:</strong> Weekly resource updates, exclusive guides, 
                early access to new content, and implementation tips from AI experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Custom Resources?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Looking for specific AI implementation resources or custom guides for your organization? 
            Our experts can create tailored resources to meet your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Request Custom Resources
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}