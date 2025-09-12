import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Implementation Master Guide 2026",
      description: "200+ page comprehensive guide with frameworks, templates, and step-by-step implementation strategies for AI transformation.",
      type: "PDF Guide",
      pages: "200+ pages",
      category: "Implementation",
      icon: "📖",
      href: "/resources/ai-implementation-master-guide-2026",
      featured: true
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items and best practices for secure AI implementation across enterprise environments.",
      type: "Checklist",
      pages: "150+ items",
      category: "Security",
      icon: "🛡️",
      href: "/resources/ai-cybersecurity-checklist-2025",
      featured: true
    },
    {
      title: "AI Workforce Transformation Playbook",
      description: "Complete reskilling strategies, training frameworks, and implementation guides for workforce transformation.",
      type: "Playbook",
      pages: "150+ pages",
      category: "Workforce",
      icon: "👥",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      featured: true
    },
    {
      title: "AI ROI Calculator & Templates",
      description: "Interactive ROI calculator and financial modeling templates for AI project evaluation and business case development.",
      type: "Tool",
      pages: "Interactive",
      category: "Finance",
      icon: "💰",
      href: "/resources/ai-roi-calculator-templates-2025",
      featured: false
    },
    {
      title: "AI Governance Framework 2025",
      description: "Complete framework for responsible AI governance, including policies, procedures, and compliance checklists.",
      type: "Framework",
      pages: "100+ pages",
      category: "Governance",
      icon: "⚖️",
      href: "/resources/ai-governance-framework-2025",
      featured: false
    },
    {
      title: "AI Data Privacy Compliance Guide",
      description: "Comprehensive guide to AI data privacy regulations, compliance requirements, and implementation strategies.",
      type: "Guide",
      pages: "120+ pages",
      category: "Privacy",
      icon: "🔒",
      href: "/resources/ai-data-privacy-compliance-guide-2025",
      featured: false
    },
    {
      title: "AI Sustainability Implementation Guide",
      description: "Step-by-step guide to implementing AI-powered sustainability solutions and achieving carbon neutrality.",
      type: "Guide",
      pages: "80+ pages",
      category: "Sustainability",
      icon: "🌱",
      href: "/resources/ai-sustainability-implementation-guide-2025",
      featured: false
    },
    {
      title: "AI Startup Funding Templates",
      description: "Pitch decks, financial models, and investor presentation templates for AI startups seeking funding.",
      type: "Templates",
      pages: "50+ templates",
      category: "Startup",
      icon: "🚀",
      href: "/resources/ai-startup-funding-templates-2025",
      featured: false
    }
  ];

  const categories = ["All", "Implementation", "Security", "Workforce", "Finance", "Governance", "Privacy", "Sustainability", "Startup"];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI Resources & Implementation Guides 2025"
        description="Download our comprehensive collection of free AI resources, implementation guides, templates, and tools. Everything you need to succeed with AI in 2025."
        keywords="AI resources, implementation guides, AI templates, free downloads, AI tools, business guides"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Free AI Resources & Implementation Guides
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of free AI resources, implementation guides, 
            templates, and tools. Everything you need to succeed with AI in 2025, created by 
            our expert team and trusted by 10,000+ professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#featured-resources"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              View Featured Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Get Custom Consultation
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
            <div className="text-sm text-blue-800">Downloads</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-sm text-green-800">Resources</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-sm text-purple-800">Professionals</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-sm text-orange-800">Satisfaction</div>
          </div>
        </div>

        {/* Featured Resources */}
        <section id="featured-resources" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.filter(resource => resource.featured).map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    {resource.type}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{resource.pages}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                    Download Now →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Resources */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{resource.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{resource.pages}</span>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get New Resources First</h2>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Be the first to access new resources, implementation guides, and exclusive content. 
              Join 10,000+ AI professionals who get our latest resources delivered to their inbox.
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
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">AI</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fortune 500 Manufacturing</h4>
                  <p className="text-sm text-gray-600">AI Implementation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Using the AI Implementation Master Guide, we successfully deployed AI across 
                our manufacturing operations, achieving 40% cost reduction and 60% faster 
                processing times."
              </p>
              <div className="text-sm text-blue-600 font-medium">- CTO, Global Manufacturing Co.</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">SaaS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Growing SaaS Startup</h4>
                  <p className="text-sm text-gray-600">AI Workforce Transformation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Workforce Transformation Playbook helped us reskill our entire team for 
                the AI era. We're now 3x more productive and our employees feel confident 
                about the future."
              </p>
              <div className="text-sm text-green-600 font-medium">- Founder, Tech Startup</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Custom Resources?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team can create custom resources, implementation guides, and training 
            materials tailored to your specific needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get Custom Resources
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              View Our Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}