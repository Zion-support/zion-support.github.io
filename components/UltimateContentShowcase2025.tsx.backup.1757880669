import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Content Revolution",
      description: "The breakthrough delivering 50,000% ROI through revolutionary content automation",
      image: "🤖",
      category: "AI Revolution",
      readTime: "8 min read",
      featured: true,
      href: "/blog/ai-2025-ultimate-content-revolution-breakthrough"
    },
    {
      title: "Neural Superintelligence Breakthrough",
      description: "How advanced AI is transforming business operations and decision-making",
      image: "🧠",
      category: "Neural AI",
      readTime: "6 min read",
      featured: true,
      href: "/blog/ai-2025-2026-neural-superintelligence-breakthrough"
    },
    {
      title: "Quantum Machine Learning Revolution",
      description: "The future of computing and its impact on enterprise applications",
      image: "⚛️",
      category: "Quantum Computing",
      readTime: "10 min read",
      featured: true,
      href: "/blog/ai-2025-2026-quantum-machine-learning-breakthrough"
    },
    {
      title: "Autonomous Business Operations",
      description: "Complete guide to implementing self-managing business systems",
      image: "🏢",
      category: "Automation",
      readTime: "12 min read",
      featured: true,
      href: "/blog/ai-2025-autonomous-business-operations-revolution"
    },
    {
      title: "Enterprise AI Transformation",
      description: "How Fortune 500 companies are achieving 1,000%+ ROI with AI",
      image: "📈",
      category: "Enterprise",
      readTime: "9 min read",
      featured: true,
      href: "/blog/ai-2025-enterprise-ai-revolution-ultimate-guide"
    },
    {
      title: "Cybersecurity Revolution 2025",
      description: "Next-generation threat protection and AI-powered security",
      image: "🔒",
      category: "Security",
      readTime: "7 min read",
      featured: true,
      href: "/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
    }
  ];

  const caseStudies = [
    {
      title: "50,000% ROI Success Story",
      company: "Global Tech Solutions Inc.",
      industry: "Technology Services",
      roi: "50,000%",
      description: "How AI Content Revolution transformed a Fortune 500 company",
      href: "/case-studies/ai-2025-ultimate-content-revolution-50000-roi-success-story"
    },
    {
      title: "Fortune 500 Transformation",
      company: "Manufacturing Giant",
      industry: "Manufacturing",
      roi: "15,000%",
      description: "Complete enterprise transformation through AI automation",
      href: "/case-studies/fortune-500-ai-transformation-15000-roi-ultimate-success"
    },
    {
      title: "Startup to Unicorn",
      company: "Tech Startup",
      industry: "Technology",
      roi: "10,000%",
      description: "From startup to unicorn in 18 months with AI",
      href: "/case-studies/ai-2025-startup-to-unicorn-transformation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🚀 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content That's
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transforming Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the breakthrough content and success stories that are delivering unprecedented 
            results across every industry with AI-powered solutions.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex items-center gap-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <Link
                      href={item.href}
                      className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{study.roi}</div>
                  <div className="text-sm opacity-90 mb-4">ROI Achieved</div>
                  
                  <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                  <div className="text-sm opacity-90 mb-2">{study.company}</div>
                  <div className="text-xs opacity-75 mb-4">{study.industry}</div>
                  
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <Link
                    href={study.href}
                    className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the companies already achieving extraordinary results with our AI-powered solutions. 
            Get your personalized demonstration today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Demo
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;