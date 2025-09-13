import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  const contentCategories = [
    {
      title: "AI 2025 Breakthrough Content",
      description: "Revolutionary AI content and implementation guides for 2025",
      icon: "🚀",
      color: "from-blue-500 to-purple-600",
      content: [
        {
          title: "AI 2025 Advanced Automation Mastery",
          description: "Complete guide to implementing revolutionary AI automation systems that deliver 2000%+ ROI",
          href: "/blog/ai-2025-advanced-automation-mastery",
          type: "Implementation Guide",
          badge: "BREAKTHROUGH"
        },
        {
          title: "Enterprise Transformation Breakthrough",
          description: "How a Fortune 500 company achieved 3000% ROI through revolutionary AI implementation",
          href: "/case-studies/ai-2025-enterprise-transformation-breakthrough",
          type: "Success Story",
          badge: "NEW"
        },
        {
          title: "AI 2025 Revolutionary Trends",
          description: "Comprehensive analysis of AI trends that will transform every industry in 2025",
          href: "/blog/ai-2025-revolutionary-trends-predictions",
          type: "Trends Analysis",
          badge: "HOT"
        }
      ]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing implementations and breakthroughs",
      icon: "⚛️",
      color: "from-purple-500 to-pink-600",
      content: [
        {
          title: "Quantum Computing 2025",
          description: "Revolutionary quantum computing solutions delivering unprecedented processing power",
          href: "/quantum-computing-solutions-2025",
          type: "Technology Guide",
          badge: "REVOLUTIONARY"
        },
        {
          title: "Quantum-AI Fusion",
          description: "Breakthrough integration of quantum computing with artificial intelligence",
          href: "/blog/quantum-ai-fusion-2025",
          type: "Innovation",
          badge: "FUTURE"
        }
      ]
    },
    {
      title: "Neural Interface Technology",
      description: "Breakthrough neural interface technologies and applications",
      icon: "🧠",
      color: "from-green-500 to-blue-600",
      content: [
        {
          title: "Neural Interface Revolution",
          description: "Transform human-computer interaction with breakthrough neural technologies",
          href: "/blog/neural-interface-revolution-2025",
          type: "Technology",
          badge: "BREAKTHROUGH"
        },
        {
          title: "Brain-Computer Integration",
          description: "Complete guide to implementing brain-computer interfaces in enterprise environments",
          href: "/resources/brain-computer-integration-guide",
          type: "Implementation",
          badge: "NEW"
        }
      ]
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing AI systems and autonomous operations",
      icon: "🤖",
      color: "from-orange-500 to-red-600",
      content: [
        {
          title: "Autonomous Systems Mastery",
          description: "Complete framework for implementing self-managing AI systems",
          href: "/resources/autonomous-systems-mastery-guide",
          type: "Framework",
          badge: "ESSENTIAL"
        },
        {
          title: "Self-Healing AI Systems",
          description: "AI systems that detect and fix issues automatically without human intervention",
          href: "/blog/self-healing-ai-systems-2025",
          type: "Innovation",
          badge: "REVOLUTIONARY"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Revolutionary AI Resources & Implementation Guides"
        description="Explore our comprehensive library of AI content, case studies, implementation guides, and breakthrough technologies. Transform your business with proven AI frameworks and strategies."
        keywords="AI content, implementation guides, case studies, AI resources, business transformation, AI frameworks, technology guides"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-blue-800">🚀 COMPREHENSIVE CONTENT LIBRARY</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover our comprehensive library of breakthrough AI content, implementation guides, 
            case studies, and cutting-edge technologies that are transforming businesses worldwide.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Articles & Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Implementation Frameworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="space-y-16">
          {contentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                    <p className="text-lg opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.content.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-sm text-blue-600 font-semibold">{item.type}</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                        <span>Read More</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Featured Content</h2>
            <p className="text-lg text-gray-600">
              Our most popular and impactful content that's transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/ai-2025-advanced-automation-mastery"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Automation Mastery</h3>
              <p className="text-gray-600 mb-4">Complete guide to implementing revolutionary AI automation systems</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">BREAKTHROUGH</span>
                <span className="text-sm text-gray-500">50K+ views</span>
              </div>
            </Link>
            
            <Link
              href="/case-studies/ai-2025-enterprise-transformation-breakthrough"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Transformation</h3>
              <p className="text-gray-600 mb-4">How a Fortune 500 company achieved 3000% ROI</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">SUCCESS</span>
                <span className="text-sm text-gray-500">75K+ views</span>
              </div>
            </Link>
            
            <Link
              href="/quantum-computing-solutions-2025"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quantum Computing 2025</h3>
              <p className="text-gray-600 mb-4">Revolutionary quantum computing solutions and implementations</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">FUTURE</span>
                <span className="text-sm text-gray-500">30K+ views</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already achieving breakthrough results with our proven AI frameworks. 
              Get access to all our content and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}