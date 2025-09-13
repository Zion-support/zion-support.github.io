import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026: React.FC = () => {
  const newContentItems = [
    {
      id: 1,
      title: "AI-Powered Business Automation Guide 2026",
      description: "Discover the latest AI automation strategies that are transforming businesses worldwide. Learn how to implement cutting-edge solutions for maximum ROI.",
      category: "Automation",
      readTime: "8 min read",
      publishDate: "2026-01-15",
      featured: true,
      image: "/images/ai-automation-2026.jpg",
      tags: ["AI", "Automation", "Business", "ROI"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs in Enterprise",
      description: "Explore how quantum computing is revolutionizing data processing, cryptography, and optimization in enterprise environments.",
      category: "Quantum Computing",
      readTime: "12 min read",
      publishDate: "2026-01-12",
      featured: true,
      image: "/images/quantum-computing-2026.jpg",
      tags: ["Quantum", "Enterprise", "Innovation"]
    },
    {
      id: 3,
      title: "Neural Interface Technology: The Future is Here",
      description: "Dive deep into neural interface developments that are bridging the gap between human cognition and artificial intelligence.",
      category: "Neural Interfaces",
      readTime: "10 min read",
      publishDate: "2026-01-10",
      featured: false,
      image: "/images/neural-interface-2026.jpg",
      tags: ["Neural", "Interface", "Future Tech"]
    },
    {
      id: 4,
      title: "AI-Driven Customer Experience Transformation",
      description: "Learn how AI is reshaping customer interactions and creating personalized experiences at scale across industries.",
      category: "Customer Experience",
      readTime: "6 min read",
      publishDate: "2026-01-08",
      featured: false,
      image: "/images/customer-experience-ai.jpg",
      tags: ["AI", "Customer", "Experience"]
    },
    {
      id: 5,
      title: "Sustainable AI: Green Computing for the Future",
      description: "Explore eco-friendly AI implementations and sustainable computing practices that reduce environmental impact.",
      category: "Sustainability",
      readTime: "9 min read",
      publishDate: "2026-01-05",
      featured: true,
      image: "/images/sustainable-ai-2026.jpg",
      tags: ["Sustainability", "Green AI", "Environment"]
    },
    {
      id: 6,
      title: "Edge AI: Bringing Intelligence to the Edge",
      description: "Understand how edge AI is enabling real-time decision making and reducing latency in critical applications.",
      category: "Edge Computing",
      readTime: "7 min read",
      publishDate: "2026-01-03",
      featured: false,
      image: "/images/edge-ai-2026.jpg",
      tags: ["Edge AI", "Real-time", "Performance"]
    }
  ];

  const featuredContent = newContentItems.filter(item => item.featured);
  const regularContent = newContentItems.filter(item => !item.featured);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Latest Content & Insights 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge content covering the latest in AI, quantum computing, 
            neural interfaces, and emerging technologies that are shaping the future.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            ⭐ Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-blue-600 bg-opacity-80 px-2 py-1 rounded text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <span className="text-sm text-gray-500">{item.publishDate}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/content/${item.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            📚 Latest Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularContent.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="ml-auto text-sm text-gray-500">{item.readTime}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.publishDate}</span>
                  <Link 
                    href={`/content/${item.id}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            📧 Stay Updated with Latest Content
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get notified when we publish new articles, insights, and breakthrough discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;