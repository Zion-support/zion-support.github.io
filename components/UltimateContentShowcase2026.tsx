import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const contentCategories = [
    {
      title: "Quantum AI Revolution",
      description: "The next frontier in artificial intelligence",
      articles: [
        {
          title: "Quantum Neural Networks: The Future of AI",
          excerpt: "Discover how quantum computing is revolutionizing neural network architectures",
          readTime: "12 min",
          category: "Quantum Computing",
          featured: true
        },
        {
          title: "Quantum Machine Learning Algorithms",
          excerpt: "Advanced algorithms that leverage quantum properties for superior performance",
          readTime: "15 min",
          category: "Machine Learning",
          featured: false
        }
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing AI that runs your business",
      articles: [
        {
          title: "Autonomous Business Operations: A Complete Guide",
          excerpt: "How AI can manage entire business processes without human intervention",
          readTime: "20 min",
          category: "Business Automation",
          featured: true
        },
        {
          title: "Self-Healing AI Systems",
          excerpt: "AI that detects and fixes its own problems automatically",
          readTime: "10 min",
          category: "System Design",
          featured: false
        }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer communication",
      articles: [
        {
          title: "Brain-Computer Interfaces: The Next Evolution",
          excerpt: "Revolutionary technology that connects human minds directly to AI systems",
          readTime: "18 min",
          category: "Neural Technology",
          featured: true
        },
        {
          title: "Thought-Controlled AI Systems",
          excerpt: "Control AI systems using only your thoughts and intentions",
          readTime: "14 min",
          category: "Human-AI Interaction",
          featured: false
        }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Synthetic Intelligence",
      description: "AI that creates and manages its own data",
      articles: [
        {
          title: "Synthetic Data Generation at Scale",
          excerpt: "How AI creates realistic data for training and testing purposes",
          readTime: "16 min",
          category: "Data Science",
          featured: true
        },
        {
          title: "Self-Improving AI Systems",
          excerpt: "AI that continuously improves its own capabilities",
          readTime: "13 min",
          category: "AI Development",
          featured: false
        }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-sm font-medium text-cyan-300">🌟 ULTIMATE CONTENT 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
            Ultimate Content Showcase
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore the most comprehensive collection of AI contentinsightsand technologies 
            that are shaping the future of business and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {contentCategories.map((categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="mb-8">
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                  {category.title}
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-gray-300 text-lg">{category.description}</p>
              </div>

              <div className="space-y-6">
                {category.articles.map((articleIndex) => (
                  <div key={articleIndex} className={`p-6 rounded-xl border ${
                    article.featured 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30' 
                      : 'bg-white/5 border-white/10'
                  }`}>
                    {article.featured && (
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        FEATURED
                      </div>
                    )}
                    
                    <h4 className="text-xl font-bold mb-3 text-white">{article.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      <Link
                        href={`/content/${category.title.toLowerCase().replace(/\s+/g'-')}/${article.title.toLowerCase().replace(/\s+/g'-')}`}
                        className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href={`/category/${category.title.toLowerCase().replace(/\s+/g'-')}`}
                  className={`bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
                  View All {category.title} Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Explore the Future?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who are already using these cutting-edge AI technologies 
              to transform their businesses and accelerate their success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/all-content"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Browse All Content
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;