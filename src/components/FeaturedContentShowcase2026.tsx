import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedContentShowcase2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI Revolutionary Breakthrough 2026",
      description: "Discover the most advanced AI technologies transforming industries worldwide with unprecedented capabilities and breakthrough innovations.",
      image: "🚀",
      link: "/ai-revolutionary-breakthrough-2026",
      category: "AI Innovation",
      readTime: "8 min read",
      featured: true,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Witness quantum supremacy and explore how quantum processors are solving previously impossible problems in record time.",
      image: "⚡",
      link: "/quantum-computing-revolution-2026",
      category: "Quantum Tech",
      readTime: "12 min read",
      featured: true,
      gradient: "from-cyan-600 to-purple-600"
    },
    {
      id: 3,
      title: "Emotional Intelligence AI",
      description: "Advanced AI systems with human-level emotional intelligence, enabling deeper understanding and natural interactions.",
      image: "🧠",
      link: "/emotional-intelligence-ai",
      category: "AI Psychology",
      readTime: "6 min read",
      featured: false,
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Autonomous Learning Systems",
      description: "Self-improving AI that continuously learns and adapts without human intervention, creating exponentially smarter solutions.",
      image: "🎯",
      link: "/autonomous-learning-systems",
      category: "Machine Learning",
      readTime: "10 min read",
      featured: false,
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Content 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our most revolutionary and groundbreaking content that's shaping the future of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Articles */}
          {featuredContent.filter(item => item.featured).map((item) => (
            <div key={item.id} className="group">
              <Link to={item.link} className="block">
                <div className={`bg-gradient-to-r ${item.gradient} p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                      <span className="text-white/80 text-sm">{item.category}</span>
                      <span className="text-white/60 text-sm">•</span>
                      <span className="text-white/60 text-sm">{item.readTime}</span>
                    </div>
                    
                    <div className="text-6xl mb-4">{item.image}</div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                      <span className="font-semibold">Read More</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredContent.filter(item => !item.featured).map((item) => (
            <div key={item.id} className="group">
              <Link to={item.link} className="block">
                <div className={`bg-gradient-to-r ${item.gradient} p-6 rounded-xl text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-white/80 text-sm">{item.category}</span>
                      <span className="text-white/60 text-sm">•</span>
                      <span className="text-white/60 text-sm">{item.readTime}</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            View All Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentShowcase2026;