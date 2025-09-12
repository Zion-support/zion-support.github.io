import React from 'react';
import Link from 'next/link';

export default function AI2026ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Discover revolutionary AI breakthroughs including quantum-enhanced systems, neural interfaces, and autonomous technologies that will transform industries.",
      href: "/blog/ai-2026-breakthrough-innovations",
      category: "Innovation",
      readTime: "15 min",
      icon: "🧠",
      featured: true
    },
    {
      title: "Global Financial Transformation: 8000% ROI",
      description: "How a Fortune 100 financial services company achieved unprecedented ROI through comprehensive AI transformation, revolutionizing customer experience.",
      href: "/case-studies/ai-2026-global-financial-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min",
      icon: "💰",
      featured: true
    },
    {
      title: "Ultimate Implementation Master Guide",
      description: "The most comprehensive AI implementation blueprint for 2026. Complete 150-page guide with templates, checklists, and step-by-step roadmaps.",
      href: "/resources/ai-2026-ultimate-implementation-master-guide",
      category: "Guide",
      readTime: "45 min",
      icon: "📚",
      featured: true
    }
  ];

  const latestContent = [
    {
      title: "Quantum Machine Learning Revolution",
      description: "Deep dive into quantum-enhanced AI systems and their transformative potential for solving complex optimization problems.",
      href: "/blog/ai-2026-quantum-machine-learning-revolution",
      category: "Technology",
      readTime: "18 min",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Breakthroughs",
      description: "Explore brain-computer interfaces and their applications in healthcare, workplace productivity, and human augmentation.",
      href: "/blog/ai-2026-neural-interface-breakthroughs",
      category: "Innovation",
      readTime: "14 min",
      icon: "🧠"
    },
    {
      title: "Autonomous Systems Mastery",
      description: "Next-generation autonomous systems that can learn, adapt, and make complex decisions without human intervention.",
      href: "/blog/ai-2026-autonomous-systems-mastery",
      category: "Automation",
      readTime: "16 min",
      icon: "🤖"
    },
    {
      title: "Multimodal AI Applications",
      description: "Advanced AI systems that can process text, images, audio, and video simultaneously for more natural interactions.",
      href: "/blog/ai-2026-multimodal-ai-applications",
      category: "Technology",
      readTime: "13 min",
      icon: "🎯"
    },
    {
      title: "Edge AI Revolution",
      description: "Bringing AI processing closer to data sources for real-time decision-making and reduced latency applications.",
      href: "/blog/ai-2026-edge-ai-revolution",
      category: "Infrastructure",
      readTime: "11 min",
      icon: "⚡"
    },
    {
      title: "Ethical AI Governance",
      description: "Comprehensive framework for responsible AI development, deployment, and governance in enterprise environments.",
      href: "/blog/ai-2026-ethical-ai-governance",
      category: "Governance",
      readTime: "17 min",
      icon: "⚖️"
    }
  ];

  const caseStudies = [
    {
      title: "Manufacturing AI Transformation",
      description: "How a global manufacturer achieved 3000% ROI through AI-powered automation and predictive maintenance.",
      href: "/case-studies/ai-2026-manufacturing-transformation-breakthrough",
      roi: "3000%",
      industry: "Manufacturing",
      icon: "🏭"
    },
    {
      title: "Healthcare AI Breakthrough",
      description: "Revolutionary AI implementation in healthcare achieving 95% diagnostic accuracy and 60% cost reduction.",
      href: "/case-studies/ai-2026-healthcare-transformation-breakthrough",
      roi: "2500%",
      industry: "Healthcare",
      icon: "🏥"
    },
    {
      title: "Retail AI Success Story",
      description: "E-commerce transformation with AI-powered personalization resulting in 400% revenue growth.",
      href: "/case-studies/ai-2026-retail-transformation-breakthrough",
      roi: "4000%",
      industry: "Retail",
      icon: "🛍️"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-blue-800">🚀 NEW CONTENT 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI 2026 Content Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough innovations, proven success stories, and comprehensive implementation guides 
            that will transform your business with cutting-edge AI technologies.
          </p>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">⭐ Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">{content.icon}</div>
                    <div>
                      <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{content.readTime} read</span>
                    </div>
                    <div className="text-blue-600 font-medium text-sm group-hover:text-blue-800">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">📚 Latest Articles</h3>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 h-full">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">{content.icon}</div>
                    <div>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.readTime} read</span>
                    <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">💼 Success Stories</h3>
            <Link 
              href="/case-studies" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Case Studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Link key={index} href={study.href} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{study.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{study.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{study.industry}</span>
                    <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🛠️ Implementation Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/ai-2026-ultimate-implementation-master-guide" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-center h-full">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Master Guide</h4>
                <p className="text-sm text-gray-600 mb-3">Complete 150-page implementation blueprint</p>
                <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">Download →</span>
              </div>
            </Link>
            
            <Link href="/resources/ai-2026-implementation-toolkit" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-center h-full">
                <div className="text-4xl mb-3">🛠️</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Toolkit</h4>
                <p className="text-sm text-gray-600 mb-3">Templates, checklists, and tools</p>
                <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">Get Toolkit →</span>
              </div>
            </Link>
            
            <Link href="/tools/ai-roi-calculator-2026" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-center h-full">
                <div className="text-4xl mb-3">🧮</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">ROI Calculator</h4>
                <p className="text-sm text-gray-600 mb-3">Calculate your AI investment returns</p>
                <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">Calculate →</span>
              </div>
            </Link>
            
            <Link href="/webinars" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-center h-full">
                <div className="text-4xl mb-3">🎥</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Webinars</h4>
                <p className="text-sm text-gray-600 mb-3">Live sessions with AI experts</p>
                <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">Join →</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI 2026?</h3>
          <p className="text-lg mb-6 opacity-90">
            Don't get left behind in the AI revolution. Our expert team can help you implement 
            these breakthrough innovations and achieve unprecedented ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/resources/ai-2026-ultimate-implementation-master-guide"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}