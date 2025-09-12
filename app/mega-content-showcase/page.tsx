import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function MegaContentShowcase() {
  const megaContent = [
    {
      id: 1,
      title: "AI Advanced Automation 2025: Complete Enterprise Implementation Guide",
      description: "Master advanced AI automation for enterprise in 2025. Learn implementation strategies, ROI optimization, and real-world case studies with 300% efficiency gains.",
      category: "AI Automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      featured: true,
      trending: true,
      icon: "🤖",
      href: "/blog/ai-2025-advanced-automation",
      tags: ["AI Automation", "Enterprise", "Implementation", "ROI"]
    },
    {
      id: 2,
      title: "AI Cybersecurity Threats 2025: Complete Defense Strategy",
      description: "Protect your organization from emerging AI cybersecurity threats. Learn about advanced attack vectors, defense strategies, and security best practices.",
      category: "Cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-cybersecurity-threats",
      tags: ["Cybersecurity", "AI Threats", "Defense", "Security"]
    },
    {
      id: 3,
      title: "$200M Manufacturing Success: AI Autonomous Systems Case Study",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details, ROI analysis, and lessons learned.",
      category: "Case Study",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-28",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 4,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
      category: "Resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-28",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
    },
    {
      id: 5,
      title: "AI 2025 Breakthrough Innovations: Revolutionary Technologies",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.",
      category: "AI Innovations",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-25",
      featured: false,
      trending: true,
      icon: "🚀",
      href: "/blog/ai-2025-breakthrough-innovations",
      tags: ["AI Innovations", "Technology", "Future", "Breakthrough"]
    },
    {
      id: 6,
      title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
      description: "Learn how to transform your workforce for the AI era. Complete reskilling strategies, implementation guides, and real-world success stories.",
      category: "AI Automation",
      type: "Article",
      readTime: "18 min read",
      publishDate: "2025-01-23",
      featured: false,
      trending: false,
      icon: "👥",
      href: "/blog/ai-workforce-transformation-2025",
      tags: ["Workforce", "Reskilling", "AI Training", "Transformation"]
    },
    {
      id: 7,
      title: "AI Data Privacy & Compliance 2025: Complete Guide",
      description: "Navigate the complex landscape of AI data privacy regulations. Learn about GDPR, CCPA, and emerging AI-specific compliance requirements.",
      category: "Cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-20",
      featured: false,
      trending: false,
      icon: "🔒",
      href: "/blog/ai-data-privacy-compliance-2025",
      tags: ["Privacy", "Compliance", "GDPR", "Data Protection"]
    },
    {
      id: 8,
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI",
      description: "Learn how to build sustainable AI systems that reduce environmental impact while maintaining performance. Complete guide to green AI practices.",
      category: "Sustainability",
      type: "Article",
      readTime: "20 min read",
      publishDate: "2025-01-18",
      featured: false,
      trending: false,
      icon: "🌱",
      href: "/blog/ai-sustainability-green-tech-2025",
      tags: ["Sustainability", "Green Tech", "Environment", "Eco-Friendly"]
    },
    {
      id: 9,
      title: "AI Healthcare Diagnosis Success 2025: 95% Accuracy Case Study",
      description: "Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.",
      category: "Case Study",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-15",
      featured: false,
      trending: false,
      icon: "🏥",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      tags: ["Healthcare", "AI Success", "Case Study", "Medical AI"]
    },
    {
      id: 10,
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Download our comprehensive AI cybersecurity checklist with 150+ security items to ensure your AI systems are protected against emerging threats.",
      category: "Resources",
      type: "Free Download",
      readTime: "150+ items",
      publishDate: "2025-01-12",
      featured: false,
      trending: false,
      icon: "📋",
      href: "/resources/ai-cybersecurity-checklist-2025",
      tags: ["Checklist", "Security", "AI Safety", "Free Download"]
    }
  ];

  const featuredContent = megaContent.filter(item => item.featured);
  const trendingContent = megaContent.filter(item => item.trending);

  return (
    <>
      <SEO
        title="Mega Content Drop - 25+ New AI Resources | Zion Tech Group"
        description="Discover our biggest content update yet: 25+ new AI resources including advanced automation guides, cybersecurity strategies, case studies, and implementation resources."
        keywords="AI content, mega content drop, AI resources, new content, AI guides, case studies, implementation resources"
        url="/mega-content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-3 mb-8">
                <span className="text-lg font-medium">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                🎉 25+ New AI Resources Just Released!
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
                Our biggest content update yet: Advanced AI Automation, Cybersecurity Defense, 
                Manufacturing Success Stories, and comprehensive implementation guides. Everything you 
                need to succeed with AI in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="#featured-content"
                  className="bg-purple-600 text-white px-12 py-6 rounded-xl font-semibold hover:bg-purple-700 transition-colors text-xl shadow-lg"
                >
                  🎯 Explore All New Content
                </Link>
                <Link
                  href="/resources/ai-implementation-master-guide-2026"
                  className="border-2 border-purple-600 text-purple-600 px-12 py-6 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-colors text-xl"
                >
                  📚 Download Master Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 text-lg">New Resources</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600 text-lg">Pages of Content</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">10</div>
                <div className="text-gray-600 text-lg">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">5</div>
                <div className="text-gray-600 text-lg">Free Downloads</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section id="featured-content" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ⭐ Featured Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most impactful new resources, handpicked for their strategic value and 
                immediate applicability to your AI transformation journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredContent.map((item) => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">NEW</span>
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">FEATURED</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.readTime}</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                📚 Complete Content Library
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore all 25+ new resources organized by category. From implementation guides 
                to case studies, find exactly what you need to accelerate your AI success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {megaContent.map((item) => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="flex items-center gap-2">
                        {item.trending && <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">TRENDING</span>}
                        {item.featured && <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">FEATURED</span>}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.readTime}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                        item.type === 'Free Download' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Download our comprehensive AI Implementation Master Guide 2026 and get started 
              with your AI transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="bg-white text-purple-600 px-12 py-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-xl shadow-lg"
              >
                📚 Download Master Guide (200+ pages)
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-12 py-6 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors text-xl"
              >
                🚀 Get Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}