import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI 2025: Quantum Computing Breakthrough - Revolutionary Applications",
      description: "Discover how quantum computing is revolutionizing AI in 2025. Explore breakthrough applications, quantum machine learning, and the future of quantum-enhanced artificial intelligence.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚛️",
      category: "Quantum AI",
      readTime: "22 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI 2025: Ethical Governance Framework - Responsible AI Implementation",
      description: "Comprehensive guide to implementing ethical AI governance in 2025. Learn about responsible AI frameworks, bias mitigation, transparency requirements, and regulatory compliance.",
      href: "/blog/ai-2025-ethical-governance-framework",
      icon: "⚖️",
      category: "AI Ethics",
      readTime: "28 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI 2025: Edge Computing Revolution - On-Device AI Transformation",
      description: "Explore the edge computing revolution in AI. Discover how on-device processing, real-time inference, and distributed AI systems are transforming industries in 2025.",
      href: "/blog/ai-2025-edge-computing-revolution",
      icon: "⚡",
      category: "Edge AI",
      readTime: "20 min read",
      date: "Jan 30, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Financial Services Transformation Breakthrough: $2.5B Savings & 400% ROI",
      description: "How a major financial institution achieved unprecedented results with AI implementation, saving $2.5 billion and achieving 400% ROI through intelligent automation and predictive analytics.",
      href: "/case-studies/ai-financial-services-transformation-breakthrough-2025",
      icon: "🏦",
      category: "Financial Services",
      readTime: "15 min read",
      date: "Jan 30, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Comprehensive 200+ page guide covering everything from AI strategy development to implementation, featuring real-world case studies, best practices, and actionable frameworks.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📖",
      category: "Implementation Guide",
      readTime: "Download",
      date: "Jan 30, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Articles, Case Studies & Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Stay updated with the latest AI innovations, implementation guides, and industry insights."
        keywords="AI articles, AI case studies, AI resources, artificial intelligence content, AI implementation guides, AI best practices"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium">🎉 FRESH CONTENT DROP - FEBRUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover our latest collection of AI articles, case studies, and resources. 
            Stay ahead with cutting-edge insights, real-world implementations, and expert guidance.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Revolutionary AI Content: Quantum Computing, Edge AI & Ethical Governance!
            </h2>
            <p className="text-xl opacity-90 mb-6 max-w-4xl mx-auto">
              Discover our latest breakthrough content: Quantum Computing AI Revolution, Edge Computing Transformation,
              Ethical AI Governance Framework, plus $2.5B Financial Services Case Study and 200+ Page Master Guide.
              Get expert insights on the technologies reshaping 2025 and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2025-quantum-computing-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚛️</div>
                <h3 className="text-lg font-semibold mb-2">Quantum Computing AI Revolution</h3>
                <p className="text-sm opacity-90 mb-3">Revolutionary quantum AI applications</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>22 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            <Link href="/blog/ai-2025-ethical-governance-framework" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚖️</div>
                <h3 className="text-lg font-semibold mb-2">Ethical AI Governance Framework</h3>
                <p className="text-sm opacity-90 mb-3">Complete responsible AI implementation guide</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>28 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            <Link href="/case-studies/ai-financial-services-transformation-breakthrough-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                <h3 className="text-lg font-semibold mb-2">$2.5B Financial AI Success</h3>
                <p className="text-sm opacity-90 mb-3">400% ROI and massive cost savings</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📖</div>
                <h3 className="text-lg font-semibold mb-2">AI Master Guide 2026</h3>
                <p className="text-sm opacity-90 mb-3">200+ page comprehensive implementation guide</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* New Blog Posts */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newBlogPosts.map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{post.icon}</span>
                    <div className="flex-1">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:underline">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* New Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Case Studies</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Case Studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newCaseStudies.map((study, index) => (
              <Link key={index} href={study.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{study.icon}</span>
                    <div className="flex-1">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                        {study.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{study.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{study.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="flex items-center text-green-600 font-medium group-hover:underline">
                    Read Case Study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* New Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newResources.map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{resource.icon}</span>
                    <div className="flex-1">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                        {resource.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{resource.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{resource.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center text-purple-600 font-medium group-hover:underline">
                    Download Resource →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get notified about new articles, case studies, and resources. Join thousands of 
            professionals staying ahead with AI insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}