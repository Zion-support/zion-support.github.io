import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime: string;
  category: string;
  isNew?: boolean;
  isHot?: boolean;
}

const featuredContent: ContentItem[] = [
  {
    title: "AI Advanced Automation 2025",
    description: "Complete enterprise guide with 40-60% efficiency gains and $50M ROI case studies",
    href: "/blog/ai-2025-advanced-automation",
    icon: "🤖",
    readTime: "18 min read",
    category: "Automation",
    isNew: true
  },
  {
    title: "AI Healthcare Diagnosis Revolution",
    description: "95-98% diagnostic accuracy breakthrough transforming medical care worldwide",
    href: "/blog/ai-healthcare-diagnosis-revolution-2025",
    icon: "🏥",
    readTime: "22 min read",
    category: "Healthcare",
    isHot: true
  },
  {
    title: "Fortune 500 AI Success Story",
    description: "$50M savings and 60% efficiency gains through advanced AI automation",
    href: "/case-studies/ai-2025-advanced-automation-success",
    icon: "🏆",
    readTime: "15 min read",
    category: "Case Study",
    isNew: true
  },
  {
    title: "AI Implementation Playbook",
    description: "Complete 150-page guide with templates, checklists, and step-by-step instructions",
    href: "/resources/ai-automation-implementation-playbook-2025",
    icon: "📋",
    readTime: "45 min read",
    category: "Resource",
    isNew: true
  }
];

export default function EnhancedContentPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🎉 Revolutionary AI Content Just Dropped!
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough AI innovations, Fortune 500 success stories, and comprehensive 
            implementation guides. Get the insights and tools you need to lead the AI transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Explore All New Content
            </Link>
            <Link
              href="/resources/ai-automation-implementation-playbook-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg hover:shadow-xl transform hover:scale-105"
            >
              📥 Download Free Playbook
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-25 transition-all duration-300 border border-white border-opacity-20 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex gap-2">
                    {item.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        NEW
                      </span>
                    )}
                    {item.isHot && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        HOT
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm opacity-90 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span>{item.readTime}</span>
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">📊 Content Impact Statistics</h3>
            <p className="opacity-90">Real results from our latest content releases</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50K+</div>
              <div className="text-sm opacity-90">Downloads This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">95%</div>
              <div className="text-sm opacity-90">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">$2.5M</div>
              <div className="text-sm opacity-90">Client Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">500+</div>
              <div className="text-sm opacity-90">Successful Implementations</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI strategies to achieve 
              breakthrough results. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}