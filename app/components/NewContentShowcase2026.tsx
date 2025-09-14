import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026 = () => {
  const newContent = [
    {
      title: "AI 2026: Enterprise Automation Revolution",
      description: "Discover how AI 2026 is revolutionizing enterprise automation with autonomous business processes and unprecedented efficiency gains.",
      category: "AI Innovation",
      readTime: "18 min read",
      image: "/images/blog/ai-2026-enterprise-automation.jpg",
      href: "/blog/ai-2026-enterprise-automation-revolution",
      featured: true,
      stats: {
        automation: "85%",
        productivity: "500%",
        costReduction: "80%"
      }
    },
    {
      title: "AI 2026: Quantum Computing Breakthrough",
      description: "Explore the revolutionary quantum computing breakthroughs enabling unprecedented AI capabilities and solving impossible problems.",
      category: "Quantum Computing",
      readTime: "20 min read",
      image: "/images/blog/ai-2026-quantum-computing.jpg",
      href: "/blog/ai-2026-quantum-computing-breakthrough",
      featured: true,
      stats: {
        speed: "1000x",
        accuracy: "99.9%",
        problems: "Impossible → Possible"
      }
    },
    {
      title: "AI 2026 Global Transformation: $2.5B Success",
      description: "How a global enterprise achieved $2.5B in additional revenue through comprehensive AI 2026 transformation in just 8 months.",
      category: "Case Study",
      readTime: "25 min read",
      image: "/images/case-studies/ai-2026-global-transformation.jpg",
      href: "/case-studies/ai-2026-global-transformation-success",
      featured: true,
      stats: {
        revenue: "$2.5B+",
        roi: "500%",
        timeline: "8 months"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI 2026 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest insights into AI 2026 breakthroughs, enterprise automation, 
            quantum computing, and real-world transformation success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 flex items-center justify-center">
                  <div className="text-6xl">
                    {index === 0 && "🤖"}
                    {index === 1 && "⚛️"}
                    {index === 2 && "🌍"}
                  </div>
                </div>
                {content.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  {Object.entries(content.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={content.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                >
                  Read Full Article
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            More AI 2026 Content Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🧠</div>
              <h4 className="font-semibold text-gray-900 mb-2">Neural Networks 2026</h4>
              <p className="text-sm text-gray-600">Advanced neural architectures</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Security</h4>
              <p className="text-sm text-gray-600">Quantum-safe AI systems</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏥</div>
              <h4 className="font-semibold text-gray-900 mb-2">Healthcare AI</h4>
              <p className="text-sm text-gray-600">Medical AI breakthroughs</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
              <p className="text-sm text-gray-600">Smart factory automation</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with AI 2026 Breakthroughs
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our latest AI 2026 research, case studies, and implementation guides. 
              Be the first to know about revolutionary AI breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;