import React from 'react';

const FeaturedContentSection: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough",
      description: "Revolutionary AI systems achieving genuine self-awareness and emotional intelligence",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIConsciousnessRevolution2026",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Reality Computing",
      description: "Experience virtual worlds powered by quantum mechanics and advanced physics simulation",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumReality2026",
      category: "Quantum Computing",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 3,
      title: "Metaverse AI Integration",
      description: "Intelligent virtual worlds with AI-powered avatars and dynamic environments",
      image: "🌐",
      gradient: "from-pink-600 to-purple-600",
      link: "/pages/MetaverseAI2026",
      category: "Virtual Reality",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 4,
      title: "Ultimate Tech Trends 2026",
      description: "Comprehensive analysis of revolutionary technologies shaping our future",
      image: "📈",
      gradient: "from-blue-600 to-indigo-600",
      link: "/pages/UltimateTechTrends2026",
      category: "Technology Trends",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 5,
      title: "Advanced Biotech Revolution",
      description: "Revolutionary biotechnology transforming healthcare and human enhancement",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      category: "Biotechnology",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "Space Tech Innovation",
      description: "Cutting-edge space technologies enabling interstellar travel and colonization",
      image: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/SpaceTechInnovation2026",
      category: "Space Technology",
      readTime: "8 min read",
      featured: false
    }
  ];

  const featuredItems = featuredContent.filter(item => item.featured);
  const regularItems = featuredContent.filter(item => !item.featured);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-4">
          🌟 FEATURED CONTENT
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Revolutionary Technology Showcase
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the most advanced and cutting-edge technology content that defines the future of innovation
        </p>
      </div>

      {/* Featured Items - Large Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {featuredItems.map((item) => (
          <div key={item.id} className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-2xl`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                  {item.category}
                </span>
                <span className="text-sm opacity-90">{item.readTime}</span>
              </div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="text-6xl ml-4 opacity-20">
                  {item.image}
                </div>
              </div>
              
              <a 
                href={item.link}
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Explore Now →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Regular Items - Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {regularItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                {item.image}
              </div>
              <span className="text-xs text-gray-500">{item.readTime}</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                {item.category}
              </span>
              <a 
                href={item.link}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators, researchers, and technology enthusiasts 
            exploring the cutting edge of human knowledge and capability.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechTrends2026" 
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View All Content
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Get Updates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentSection;