import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const contentItems = [
    {
      title: "AI-Powered Business Automation",
      description: "Complete business process automation with intelligent decision-making capabilities.",
      icon: "🤖",
      category: "Automation",
      link: "/services/ai-automation",
      featured: true
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage quantum computing power for complex problem-solving and data analysis.",
      icon: "⚡",
      category: "Quantum Tech",
      link: "/services/quantum-computing",
      featured: true
    },
    {
      title: "Neural Interface Development",
      description: "Build direct brain-computer interfaces for enhanced human-AI collaboration.",
      icon: "🧠",
      category: "Neural Tech",
      link: "/services/neural-interfaces",
      featured: false
    },
    {
      title: "Autonomous Systems Architecture",
      description: "Design and deploy self-managing systems that operate without human intervention.",
      icon: "🌐",
      category: "Autonomous Systems",
      link: "/services/autonomous-systems",
      featured: false
    },
    {
      title: "Predictive Analytics Platform",
      description: "Advanced AI models that predict future trends and business outcomes.",
      icon: "📊",
      category: "Analytics",
      link: "/services/predictive-analytics",
      featured: true
    },
    {
      title: "Cybersecurity AI Defense",
      description: "Next-generation AI-powered cybersecurity solutions for enterprise protection.",
      icon: "🔒",
      category: "Security",
      link: "/services/cybersecurity",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🎯 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI and technology solutions that are transforming industries and revolutionizing business operations.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`relative group ${
                item.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                  >
                    <span>Explore Solution</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">340%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of enterprises that have already revolutionized their operations with our cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;