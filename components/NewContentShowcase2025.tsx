import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, Star, TrendingUp, Zap } from 'lucide-react';

export default function NewContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025: The Quantum Computing Revolution",
      description: "Discover how quantum computing is revolutionizing AI capabilities, delivering unprecedented processing power and solving previously impossible enterprise challenges.",
      type: "Blog Post",
      readTime: "12 min read",
      date: "January 15, 2025",
      tags: ["quantum computing", "AI 2025", "enterprise transformation"],
      href: "/blog/ai-2025-quantum-computing-revolution",
      featured: true,
      stats: {
        value: "340%",
        label: "Faster Algorithms"
      }
    },
    {
      title: "AI 2025: Autonomous Enterprise Systems",
      description: "Explore how autonomous AI systems are revolutionizing enterprise operations, creating self-managing businesses that adapt, learn, and optimize without human intervention.",
      type: "Blog Post",
      readTime: "15 min read",
      date: "January 15, 2025",
      tags: ["autonomous systems", "AI 2025", "enterprise automation"],
      href: "/blog/ai-2025-autonomous-enterprise-systems",
      featured: true,
      stats: {
        value: "95%",
        label: "Autonomous Operations"
      }
    },
    {
      title: "Quantum AI Healthcare Transformation: $2.3B Success Story",
      description: "Discover how a leading healthcare provider achieved $2.3B in value through quantum AI implementation, revolutionizing patient care and operational efficiency.",
      type: "Case Study",
      readTime: "18 min read",
      date: "January 15, 2025",
      tags: ["quantum AI", "healthcare", "success story"],
      href: "/case-studies/quantum-ai-healthcare-transformation-2025",
      featured: true,
      stats: {
        value: "$2.3B",
        label: "Value Created"
      }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Now Available
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our latest insights on quantum computing, autonomous enterprise systems, and real-world AI transformation success stories.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {content.type}
                  </span>
                  {content.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {content.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {content.stats.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {content.stats.label}
                    </div>
                  </div>
                </div>

                <Link
                  href={content.href}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Read {content.type === "Case Study" ? "Case Study" : "Article"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Highlights from Our New Content</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Quantum Advantage</h4>
              <p className="text-sm text-gray-600">340% faster optimization algorithms with quantum computing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Autonomous Operations</h4>
              <p className="text-sm text-gray-600">95% operational independence in routine business processes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">$2.3B value creation in real-world healthcare implementation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Insights</h4>
              <p className="text-sm text-gray-600">Comprehensive guides from Zion Tech Group experts</p>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-purple-100 mb-6">
              Explore the revolutionary impact of quantum computing on AI and enterprise applications.
            </p>
            <Link
              href="/blog/ai-2025-quantum-computing-revolution"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Autonomous Systems</h3>
            <p className="text-green-100 mb-6">
              Discover how autonomous AI systems are transforming enterprise operations.
            </p>
            <Link
              href="/blog/ai-2025-autonomous-enterprise-systems"
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Success Stories</h3>
            <p className="text-blue-100 mb-6">
              Real-world case studies showcasing AI transformation results and ROI.
            </p>
            <Link
              href="/case-studies/quantum-ai-healthcare-transformation-2025"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our new content provides the insights and strategies you need to implement cutting-edge AI solutions in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}