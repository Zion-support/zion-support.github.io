import React from 'react';
import Link from 'next/link';

export default function AI2027ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2027 Future Predictions",
      description: "Revolutionary breakthrough technologies including neural interfaces, quantum AI, and autonomous systems that will reshape industries.",
      href: "/blog/ai-2027-future-predictions",
      category: "Blog Post",
      icon: "🔮",
      featured: true,
      metrics: "500+ predictions"
    },
    {
      title: "Automotive AI Breakthrough Case Study",
      description: "How a leading automotive manufacturer achieved 500% ROI using cutting-edge AI 2027 technologies including neural interfaces.",
      href: "/case-studies/ai-2027-automotive-transformation-breakthrough",
      category: "Case Study",
      icon: "🚗",
      featured: true,
      metrics: "500% ROI"
    },
    {
      title: "AI 2027 Implementation Master Guide",
      description: "Complete roadmap for implementing neural interfaces, quantum AI, and autonomous systems in your organization.",
      href: "/resources/ai-2027-implementation-master-guide",
      category: "Resource",
      icon: "📚",
      featured: true,
      metrics: "12-month roadmap"
    }
  ];

  const additionalContent = [
    {
      title: "Neural Interface Integration Guide",
      description: "Step-by-step implementation of brain-computer interfaces for enterprise operations.",
      href: "/resources/neural-interface-integration-guide-2027",
      category: "Resource",
      icon: "🧠",
      metrics: "90% efficiency gain"
    },
    {
      title: "Quantum AI Optimization Playbook",
      description: "Advanced quantum computing strategies for solving complex optimization problems.",
      href: "/resources/quantum-ai-optimization-playbook-2027",
      category: "Resource",
      icon: "⚛️",
      metrics: "1000x faster"
    },
    {
      title: "Autonomous Systems Implementation",
      description: "Building self-managing business operations with minimal human intervention.",
      href: "/resources/autonomous-systems-implementation-2027",
      category: "Resource",
      icon: "🤖",
      metrics: "95% automation"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🔮 AI 2027 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Coming in 2027
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most advanced AI predictions, breakthrough case studies, and comprehensive 
            implementation guides that will transform your business operations.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="group">
                <Link href={item.href} className="block">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{item.icon}</div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                          {item.featured && (
                            <span className="inline-block ml-2 px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                              FEATURED
                            </span>
                          )}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-purple-600">
                          {item.metrics}
                        </span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <div key={index} className="group">
                <Link href={item.href} className="block">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl mr-3">{item.icon}</div>
                      <span className="text-sm font-semibold text-gray-500">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-purple-600">
                        {item.metrics}
                      </span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get started with AI 2027 technologies and join the companies already achieving 
            unprecedented success with these breakthrough innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/ai-roi-calculator-2026"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Calculate Your ROI
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}