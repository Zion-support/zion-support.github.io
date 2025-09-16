import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateContent2026Showcase = () => {
  const contentItems = [
    {
      id: 1,
      title: "AI 2026 Revolutionary Breakthrough",
      description: "Discover the most advanced AI technologies that will reshape our world in 2026",
      image: "🧠",
      category: "Artificial Intelligence",
      readTime: "15 min read",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Supremacy",
      description: "Explore how quantum processors are solving impossible problems in seconds",
      image: "⚛️",
      category: "Quantum Computing",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct mind-machine communication that changes everything we know about interfaces",
      image: "🔗",
      category: "Neural Interfaces",
      readTime: "18 min read",
      featured: false
    },
    {
      id: 4,
      title: "Synthetic Intelligence Evolution",
      description: "Next-generation AI that surpasses human intelligence while maintaining ethical alignment",
      image: "🤖",
      category: "Synthetic Intelligence",
      readTime: "20 min read",
      featured: true
    },
    {
      id: 5,
      title: "Autonomous Business Ecosystems",
      description: "Self-managing business systems that operate independently with perfect efficiency",
      image: "🏢",
      category: "Business Automation",
      readTime: "14 min read",
      featured: false
    },
    {
      id: 6,
      title: "Quantum-Neural Fusion",
      description: "The ultimate combination of quantum computing and neural networks",
      image: "⚡",
      category: "Hybrid Technologies",
      readTime: "25 min read",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🚀 ULTIMATE CONTENT 2026 SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most groundbreaking content covering AI, quantum computing, neural interfaces, 
            and the technologies that will define 2026 and beyond.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-t-2xl text-center">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">{item.image}</div>
                <div className="text-sm font-semibold text-purple-600 mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <a
                    href={`/content/${item.id}`}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Content Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="/ai-content"
              className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center hover:from-purple-200 hover:to-purple-300 transition-all duration-300"
            >
              <div className="text-4xl mb-3">🧠</div>
              <div className="font-bold text-gray-900">AI & Machine Learning</div>
            </a>
            <a
              href="/quantum-content"
              className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center hover:from-blue-200 hover:to-blue-300 transition-all duration-300"
            >
              <div className="text-4xl mb-3">⚛️</div>
              <div className="font-bold text-gray-900">Quantum Computing</div>
            </a>
            <a
              href="/neural-content"
              className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center hover:from-green-200 hover:to-green-300 transition-all duration-300"
            >
              <div className="text-4xl mb-3">🔗</div>
              <div className="font-bold text-gray-900">Neural Interfaces</div>
            </a>
            <a
              href="/business-content"
              className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center hover:from-orange-200 hover:to-orange-300 transition-all duration-300"
            >
              <div className="text-4xl mb-3">🏢</div>
              <div className="font-bold text-gray-900">Business Innovation</div>
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Content Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-purple-200">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-200">Reader Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">Content Updates</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Ahead of the Technology Curve
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get exclusive access to the latest content, insights, and breakthroughs in AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/newsletter"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe to Newsletter
            </a>
            <a
              href="/all-content"
              className="border-2 border-purple-500 text-purple-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Browse All Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2026Showcase;