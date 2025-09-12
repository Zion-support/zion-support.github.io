import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function AIResources2025() {
  const featuredResources = [
    {
      title: "AI Implementation Master Guide 2026",
      description: "The most comprehensive AI implementation guide available. 200+ pages of proven frameworks, checklists, templates, and step-by-step strategies.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      pages: "200+ pages"
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation and compliance with industry standards.",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: "🛡️",
      category: "Security",
      type: "Free Download",
      pages: "150+ items"
    },
    {
      title: "AI Workforce Transformation Playbook",
      description: "Complete reskilling strategies and implementation guides for transforming your workforce for the AI era.",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      icon: "👥",
      category: "Workforce",
      type: "Free Download",
      pages: "150+ pages"
    },
    {
      title: "AI ROI Calculator Tool",
      description: "Calculate the potential return on investment for your AI projects with our comprehensive calculator.",
      href: "/tools/ai-roi-calculator",
      icon: "💰",
      category: "Tools",
      type: "Interactive Tool"
    }
  ];

  const latestArticles = [
    {
      title: "AI Advanced Automation 2025: Complete Enterprise Implementation Guide",
      description: "Master advanced AI automation with our comprehensive guide. Learn enterprise strategies, implementation frameworks, and real-world case studies for maximum ROI.",
      href: "/blog/ai-2025-advanced-automation",
      icon: "🤖",
      category: "AI Automation",
      readTime: "25 min read",
      isNew: true
    },
    {
      title: "AI Cybersecurity Threats 2025: Complete Defense Strategy",
      description: "Protect your organization from emerging AI cybersecurity threats. Learn about advanced attack vectors, defense strategies, and security best practices.",
      href: "/blog/ai-2025-cybersecurity-threats",
      icon: "🛡️",
      category: "Cybersecurity",
      readTime: "22 min read",
      isNew: true
    },
    {
      title: "AI Healthcare Diagnosis Breakthrough 2025",
      description: "Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs. Real implementation strategies and case studies.",
      href: "/blog/ai-2025-healthcare-diagnosis-breakthrough",
      icon: "🏥",
      category: "Healthcare",
      readTime: "22 min read",
      isNew: true
    },
    {
      title: "AI Financial Services Transformation 2025",
      description: "Complete case study: How a major bank achieved 300% ROI through strategic AI implementation. Real results, implementation strategies, and lessons learned.",
      href: "/case-studies/ai-financial-services-transformation-2025",
      icon: "💰",
      category: "Finance",
      readTime: "18 min read",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Resources 2025 - Complete Collection of AI Guides, Tools & Case Studies"
        description="Discover our comprehensive collection of AI resources for 2025. Free guides, tools, case studies, and implementation frameworks to accelerate your AI journey."
        keywords="AI resources 2025, AI guides, AI tools, AI case studies, AI implementation, free AI resources"
        url="/ai-resources-2025"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 COMPLETE AI RESOURCE COLLECTION 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Resources 2025: Your Complete Toolkit
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need to succeed with AI in 2025. Free guides, tools, case studies, 
            and implementation frameworks from industry experts.
          </p>
        </header>

        {/* Featured Resources */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {resource.category}
                      </span>
                      {resource.pages && (
                        <span className="text-gray-500">{resource.pages}</span>
                      )}
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      {resource.type} →
                    </span>
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
            <div className="flex-1 h-px bg-gradient-to-r from-green-500 to-blue-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {latestArticles.map((article, index) => (
              <Link key={index} href={article.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      {article.isNew && (
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {article.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
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