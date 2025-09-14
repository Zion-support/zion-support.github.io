import React from 'react';
import Link from 'next/link';

const RevolutionaryContentShowcase2025 = () => {
  const contentItems = [
    {
      title: "AI Automation Success Story",
      description: "Fortune 500 company achieves 500% ROI through intelligent automation",
      category: "Case Study",
      readTime: "8 min read",
      featured: true,
      href: "/blog/ai-automation-success-story-2025",
      icon: "🤖",
      stats: "500% ROI"
    },
    {
      title: "Quantum Computing Business Applications",
      description: "Revolutionary applications transforming industries in 2025",
      category: "Technology",
      readTime: "12 min read",
      featured: true,
      href: "/blog/quantum-computing-business-applications-2025",
      icon: "⚛️",
      stats: "2025 Ready"
    },
    {
      title: "Neural Interface Revolution",
      description: "Brain-computer interfaces transforming business operations",
      category: "Innovation",
      readTime: "10 min read",
      featured: true,
      href: "/case-studies/neural-interface-revolution-2025",
      icon: "🧠",
      stats: "Revolutionary"
    },
    {
      title: "Advanced AI Solutions",
      description: "Cutting-edge AI implementations for enterprise success",
      category: "AI Solutions",
      readTime: "6 min read",
      featured: false,
      href: "/services/ai-solutions",
      icon: "🚀",
      stats: "Enterprise"
    },
    {
      title: "Cloud Infrastructure Optimization",
      description: "Scalable cloud solutions for modern businesses",
      category: "Cloud",
      readTime: "7 min read",
      featured: false,
      href: "/services/cloud-infrastructure",
      icon: "☁️",
      stats: "Scalable"
    },
    {
      title: "Micro SaaS Development",
      description: "Custom micro SaaS applications solving business challenges",
      category: "Development",
      readTime: "5 min read",
      featured: false,
      href: "/services/micro-saas",
      icon: "💼",
      stats: "Custom"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📚 REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Future of Technology
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore groundbreaking case studies, cutting-edge technology insights, 
            and transformative business applications that will reshape your industry.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 text-sm font-medium">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats and Link */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-purple-600">
                    {item.stats}
                  </span>
                  <Link 
                    href={item.href}
                    className="text-purple-600 hover:text-purple-800 font-semibold text-sm group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">📊</div>
            <h4 className="font-bold text-gray-900 mb-2">Analytics</h4>
            <p className="text-gray-600 text-sm mb-4">Advanced analytics and insights</p>
            <Link href="/analytics" className="text-purple-600 text-sm font-semibold">
              Explore →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🔒</div>
            <h4 className="font-bold text-gray-900 mb-2">Security</h4>
            <p className="text-gray-600 text-sm mb-4">Cybersecurity solutions</p>
            <Link href="/security" className="text-purple-600 text-sm font-semibold">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">Performance</h4>
            <p className="text-gray-600 text-sm mb-4">Optimization strategies</p>
            <Link href="/performance" className="text-purple-600 text-sm font-semibold">
              Discover →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🎯</div>
            <h4 className="font-bold text-gray-900 mb-2">Strategy</h4>
            <p className="text-gray-600 text-sm mb-4">Business transformation</p>
            <Link href="/strategy" className="text-purple-600 text-sm font-semibold">
              Plan →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies leveraging cutting-edge technology 
            to achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;