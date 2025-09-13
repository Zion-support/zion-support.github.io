import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock } from 'lucide-react';

const AI2025UltimateContentRevolutionShowcase: React.FC = () => {
  const contentItems = [
    {
      id: 1,
      title: "Neural Synthesis Breakthroughs 2025",
      description: "Discover the latest advances in neural network architectures that enable human-level understanding and generation.",
      category: "AI Research",
      readTime: "15 min",
      views: "12.5K",
      rating: 4.9,
      image: "/api/placeholder/400/250",
      href: "/neural-synthesis-breakthroughs-2025"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Explore how quantum computers are solving previously impossible problems in optimization and cryptography.",
      category: "Quantum Tech",
      readTime: "20 min",
      views: "8.7K",
      rating: 4.8,
      image: "/api/placeholder/400/250",
      href: "/quantum-computing-revolution-2025"
    },
    {
      id: 3,
      title: "Autonomous AI Systems Guide",
      description: "Learn how to implement self-managing AI systems that adapt and optimize without human intervention.",
      category: "Automation",
      readTime: "25 min",
      views: "15.2K",
      rating: 4.9,
      image: "/api/placeholder/400/250",
      href: "/autonomous-ai-systems-guide"
    },
    {
      id: 4,
      title: "Edge AI Implementation",
      description: "Deploy AI models at the edge for real-time processing and reduced latency in critical applications.",
      category: "Edge Computing",
      readTime: "18 min",
      views: "9.3K",
      rating: 4.7,
      image: "/api/placeholder/400/250",
      href: "/edge-ai-implementation-2025"
    },
    {
      id: 5,
      title: "AI Ethics & Governance",
      description: "Navigate the complex landscape of AI ethics, bias mitigation, and responsible AI development.",
      category: "Ethics",
      readTime: "22 min",
      views: "6.8K",
      rating: 4.8,
      image: "/api/placeholder/400/250",
      href: "/ai-ethics-governance-2025"
    },
    {
      id: 6,
      title: "Multimodal AI Applications",
      description: "Build AI systems that understand text, images, audio, and video simultaneously for richer interactions.",
      category: "Multimodal",
      readTime: "30 min",
      views: "11.4K",
      rating: 4.9,
      image: "/api/placeholder/400/250",
      href: "/multimodal-ai-applications"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into the most comprehensive collection of AI insights, breakthrough technologies, 
            and revolutionary solutions that will shape the future of business and technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item) => (
            <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/80 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{item.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link 
                  to={item.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Join the AI Revolution
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Get exclusive access to cutting-edge AI research, implementation guides, 
                and breakthrough technologies that are reshaping industries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/ai-2025-ultimate-content-revolution"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Explore All Content
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  to="/newsletter"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Subscribe to Updates
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
                <div className="text-sm text-gray-300">Articles</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-1">50K+</div>
                <div className="text-sm text-gray-300">Readers</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-indigo-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateContentRevolutionShowcase;