import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import RevolutionaryAI2025PromotionBanner from '../../components/RevolutionaryAI2025PromotionBanner';
import RevolutionaryContentShowcase2025 from '../../components/RevolutionaryContentShowcase2025';

export default function RevolutionaryContentShowcase2025Page() {
  const allContent = [
    // Revolutionary Content
    {
      title: "AI 2025 Revolutionary Breakthrough Ecosystem",
      description: "The complete transformation guide to the most advanced AI ecosystem ever created. Discover how revolutionary breakthroughs are delivering 10,000% ROI across industries.",
      href: "/blog/ai-2025-revolutionary-breakthrough-ecosystem",
      category: "Blog",
      icon: "🚀",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "10,000% ROI",
      featured: true
    },
    {
      title: "Revolutionary Enterprise Transformation",
      description: "How a Fortune 500 manufacturing giant achieved 10,000% ROI in just 6 months using our revolutionary AI breakthrough ecosystem.",
      href: "/case-studies/ai-2025-revolutionary-enterprise-transformation",
      category: "Case Study",
      icon: "🏢",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      stats: "6 months ROI",
      featured: true
    },
    {
      title: "Revolutionary Implementation Master Guide",
      description: "The complete step-by-step blueprint for implementing the revolutionary AI breakthrough ecosystem. Everything you need to achieve 10,000% ROI.",
      href: "/resources/ai-2025-revolutionary-implementation-master-guide",
      category: "Resource",
      icon: "📚",
      badge: "MASTER GUIDE",
      badgeColor: "bg-blue-500",
      stats: "Complete Blueprint",
      featured: true
    },
    // Additional AI 2025 Content
    {
      title: "AI 2025 Advanced AI Architecture",
      description: "Next-generation neural architectures delivering 100x efficiency gains for enterprise applications.",
      href: "/blog/ai-2025-advanced-ai-architecture",
      category: "Blog",
      icon: "🏗️",
      badge: "ARCHITECTURE",
      badgeColor: "bg-purple-500",
      stats: "100x Efficiency"
    },
    {
      title: "AI 2025 Automation Revolution",
      description: "Transform your business processes with revolutionary AI automation that delivers unprecedented results.",
      href: "/blog/ai-2025-automation-revolution",
      category: "Blog",
      icon: "🤖",
      badge: "AUTOMATION",
      badgeColor: "bg-orange-500",
      stats: "95% Efficiency"
    },
    {
      title: "AI 2025 Quantum Machine Learning",
      description: "Discover how quantum computing is revolutionizing AI algorithms and delivering unprecedented performance gains.",
      href: "/blog/ai-2025-quantum-machine-learning-breakthrough",
      category: "Blog",
      icon: "⚛️",
      badge: "QUANTUM",
      badgeColor: "bg-indigo-500",
      stats: "1000x Speed"
    },
    {
      title: "AI 2025 Autonomous Systems",
      description: "Self-managing AI agents that adapt production processes in real-time based on demand and quality metrics.",
      href: "/blog/ai-2025-autonomous-systems-mastery",
      category: "Blog",
      icon: "🤖",
      badge: "AUTONOMOUS",
      badgeColor: "bg-cyan-500",
      stats: "99.9% Uptime"
    },
    {
      title: "AI 2025 Neural Interfaces",
      description: "Revolutionary brain-computer interfaces enabling direct neural control of AI systems.",
      href: "/blog/ai-2025-neural-interfaces-revolution",
      category: "Blog",
      icon: "🧠",
      badge: "NEURAL",
      badgeColor: "bg-pink-500",
      stats: "Direct Control"
    },
    // Case Studies
    {
      title: "Manufacturing Automation Breakthrough",
      description: "How AI transformed production lines with 3,000% ROI and 99.9% uptime achievement.",
      href: "/case-studies/ai-2025-manufacturing-automation-breakthrough",
      category: "Case Study",
      icon: "🏭",
      badge: "MANUFACTURING",
      badgeColor: "bg-green-600",
      stats: "3,000% ROI"
    },
    {
      title: "Financial Services Revolution",
      description: "Quantum-enhanced trading algorithms and risk assessment systems delivering 7,500% ROI in banking.",
      href: "/case-studies/ai-2025-financial-services-breakthrough",
      category: "Case Study",
      icon: "💰",
      badge: "FINANCE",
      badgeColor: "bg-yellow-500",
      stats: "7,500% ROI"
    },
    {
      title: "Healthcare Diagnostic Revolution",
      description: "AI-powered diagnostic systems with 99.8% accuracy, reducing misdiagnosis by 95% and saving millions of lives.",
      href: "/case-studies/ai-2025-healthcare-diagnostic-revolution",
      category: "Case Study",
      icon: "🏥",
      badge: "HEALTHCARE",
      badgeColor: "bg-red-600",
      stats: "99.8% Accuracy"
    },
    {
      title: "Space Exploration Breakthrough",
      description: "Autonomous spacecraft and mission planning systems enabling unprecedented space exploration capabilities.",
      href: "/case-studies/ai-2025-space-exploration-breakthrough",
      category: "Case Study",
      icon: "🚀",
      badge: "SPACE",
      badgeColor: "bg-blue-600",
      stats: "10,000% ROI"
    },
    // Resources
    {
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete toolkit with templates, checklists, and guides for implementing AI solutions in your organization.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      icon: "🛠️",
      badge: "TOOLKIT",
      badgeColor: "bg-gray-500",
      stats: "Complete Toolkit"
    },
    {
      title: "AI 2025 ROI Calculator",
      description: "Calculate your potential ROI with our advanced AI solutions and implementation strategies.",
      href: "/tools/ai-roi-calculator-2025",
      category: "Tool",
      icon: "💰",
      badge: "CALCULATOR",
      badgeColor: "bg-green-500",
      stats: "ROI Calculator"
    },
    {
      title: "AI 2025 Security Hardening Guide",
      description: "Comprehensive security guide for protecting AI systems and ensuring compliance with regulations.",
      href: "/resources/ai-2025-security-hardening-guide",
      category: "Resource",
      icon: "🔒",
      badge: "SECURITY",
      badgeColor: "bg-red-500",
      stats: "Security Guide"
    },
    {
      title: "AI 2025 Change Management Playbook",
      description: "Complete playbook for managing organizational change during AI transformation initiatives.",
      href: "/resources/ai-2025-change-management-playbook",
      category: "Resource",
      icon: "📋",
      badge: "CHANGE",
      badgeColor: "bg-blue-500",
      stats: "Change Guide"
    }
  ];

  const featuredContent = allContent.filter(item => item.featured);
  const blogContent = allContent.filter(item => item.category === "Blog");
  const caseStudies = allContent.filter(item => item.category === "Case Study");
  const resources = allContent.filter(item => item.category === "Resource" || item.category === "Tool");

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Revolutionary AI Content Showcase 2025 - Complete Library"
        description="Explore our comprehensive collection of revolutionary AI content, case studies, and implementation guides. Everything you need to transform your organization with cutting-edge AI technologies."
        keywords="AI content, revolutionary AI, AI showcase, AI case studies, AI resources, AI implementation, AI transformation"
        url="/revolutionary-content-showcase-2025"
      />
      
      {/* Hero Banner */}
      <RevolutionaryAI2025PromotionBanner />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Content Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">⭐ Featured Revolutionary Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden border border-purple-200">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{content.icon}</div>
                      <div className={`${content.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {content.badge}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {content.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-green-600">
                        {content.stats}
                      </div>
                      <div className="text-purple-600 font-semibold group-hover:text-purple-700">
                        Read More →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📝 Blog Posts</h2>
            <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-semibold">
              View All Blog Posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{content.icon}</div>
                    <div className={`${content.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                      {content.badge}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-green-600">
                      {content.stats}
                    </div>
                    <div className="text-purple-600 text-sm font-semibold group-hover:text-purple-700">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">🏆 Case Studies</h2>
            <Link href="/case-studies" className="text-purple-600 hover:text-purple-700 font-semibold">
              View All Case Studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{content.icon}</div>
                    <div className={`${content.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                      {content.badge}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-green-600">
                      {content.stats}
                    </div>
                    <div className="text-purple-600 text-sm font-semibold group-hover:text-purple-700">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 Resources & Tools</h2>
            <Link href="/resources" className="text-purple-600 hover:text-purple-700 font-semibold">
              View All Resources →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{content.icon}</div>
                    <div className={`${content.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                      {content.badge}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-green-600">
                      {content.stats}
                    </div>
                    <div className="text-purple-600 text-sm font-semibold group-hover:text-purple-700">
                      Access Now →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🏷️ Content Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-8 text-center border border-blue-200">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600">Blog Posts</h3>
                <p className="text-gray-600 mb-4">Latest insights and breakthroughs in AI technology</p>
                <div className="text-purple-600 font-semibold">50+ Articles</div>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-8 text-center border border-green-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600">Case Studies</h3>
                <p className="text-gray-600 mb-4">Real success stories and measurable results</p>
                <div className="text-purple-600 font-semibold">25+ Studies</div>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-8 text-center border border-purple-200">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600">Resources</h3>
                <p className="text-gray-600 mb-4">Guides, toolkits, and implementation templates</p>
                <div className="text-purple-600 font-semibold">30+ Resources</div>
              </div>
            </Link>
            
            <Link href="/webinars" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-8 text-center border border-orange-200">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600">Webinars</h3>
                <p className="text-gray-600 mb-4">Live sessions and expert presentations</p>
                <div className="text-purple-600 font-semibold">15+ Sessions</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary AI solutions to achieve unprecedented results. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              💬 Get Started Today
            </Link>
            <Link
              href="/resources/ai-2025-revolutionary-implementation-master-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📚 Download Master Guide
            </Link>
            <Link
              href="/tools/ai-roi-calculator-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              💰 Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}