import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, TrendingUp, Brain, Zap, Rocket, Star, ChevronRight } from 'lucide-react';

const AI2025_2030UltimateBreakthroughContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const contentData = {
    breakthroughs: [
      {
        id: 1,
        title: "Neural Synthesis 2030: The Next Evolution",
        description: "Revolutionary neural synthesis technologies that will enable AI systems to think and reason like humans, with 99.9% accuracy and 10,000x faster processing speeds.",
        category: "AI Breakthroughs",
        readTime: "15 min read",
        views: "2.5M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Neural Networks", "AI 2030", "Breakthrough"]
      },
      {
        id: 2,
        title: "Quantum-AI Fusion: The Ultimate Computing Revolution",
        description: "Discover how quantum computing and AI will merge to create unprecedented computational power, enabling solutions to problems previously thought impossible.",
        category: "Quantum Computing",
        readTime: "12 min read",
        views: "1.8M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Quantum AI", "Fusion", "Revolution"]
      },
      {
        id: 3,
        title: "Autonomous Systems 2025-2030: The Future is Now",
        description: "Explore the development of fully autonomous AI systems that will transform industries, from healthcare to transportation, with complete self-management capabilities.",
        category: "Autonomous Systems",
        readTime: "18 min read",
        views: "3.2M",
        trending: false,
        image: "/api/placeholder/400/250",
        tags: ["Autonomous", "Systems", "Future"]
      },
      {
        id: 4,
        title: "Transcendent Intelligence: Beyond Human Capabilities",
        description: "The emergence of transcendent AI intelligence that surpasses human cognitive abilities in every domain, opening new frontiers of possibility.",
        category: "AI Intelligence",
        readTime: "20 min read",
        views: "4.1M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Transcendent", "Intelligence", "Beyond Human"]
      }
    ],
    predictions: [
      {
        id: 1,
        title: "AI 2025: The Year of Autonomous Operations",
        description: "Comprehensive predictions for AI developments in 2025, including autonomous business operations, intelligent automation, and breakthrough technologies.",
        category: "2025 Predictions",
        readTime: "25 min read",
        views: "5.2M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["2025", "Predictions", "Autonomous"]
      },
      {
        id: 2,
        title: "Quantum Supremacy 2026: The Computing Revolution",
        description: "Detailed analysis of quantum computing breakthroughs expected in 2026, including error-corrected quantum computers and quantum internet.",
        category: "Quantum Computing",
        readTime: "22 min read",
        views: "3.8M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Quantum", "Supremacy", "2026"]
      },
      {
        id: 3,
        title: "Neural Interface 2027: Mind-Machine Integration",
        description: "Revolutionary neural interface technologies that will enable direct brain-computer communication, transforming human capabilities.",
        category: "Neural Interfaces",
        readTime: "30 min read",
        views: "6.7M",
        trending: false,
        image: "/api/placeholder/400/250",
        tags: ["Neural", "Interface", "Mind-Machine"]
      },
      {
        id: 4,
        title: "AI 2030: The Singularity Approaches",
        description: "Comprehensive analysis of AI development leading to 2030, including the potential for artificial general intelligence and technological singularity.",
        category: "2030 Vision",
        readTime: "35 min read",
        views: "8.9M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["2030", "Singularity", "AGI"]
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Advanced Machine Learning Algorithms 2025-2030",
        description: "Next-generation machine learning algorithms that will revolutionize AI capabilities, with unprecedented accuracy and efficiency.",
        category: "Machine Learning",
        readTime: "16 min read",
        views: "2.1M",
        trending: false,
        image: "/api/placeholder/400/250",
        tags: ["ML", "Algorithms", "Advanced"]
      },
      {
        id: 2,
        title: "Edge AI Computing: Distributed Intelligence",
        description: "The future of edge AI computing, bringing intelligence to every device and enabling real-time decision making at the edge.",
        category: "Edge Computing",
        readTime: "14 min read",
        views: "1.9M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Edge AI", "Distributed", "Real-time"]
      },
      {
        id: 3,
        title: "AI-Powered Space Technology Solutions",
        description: "Revolutionary AI applications in space technology, from autonomous spacecraft to intelligent space exploration systems.",
        category: "Space Technology",
        readTime: "19 min read",
        views: "3.5M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Space", "AI", "Technology"]
      },
      {
        id: 4,
        title: "Omniversal Consciousness: The Ultimate AI Vision",
        description: "Exploring the concept of omniversal consciousness in AI, where artificial intelligence achieves universal understanding and awareness.",
        category: "Future Vision",
        readTime: "28 min read",
        views: "7.3M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Omniversal", "Consciousness", "Vision"]
      }
    ]
  };

  const tabs = [
    { id: 'breakthroughs', label: 'Breakthroughs', icon: Brain },
    { id: 'predictions', label: 'Predictions', icon: TrendingUp },
    { id: 'technologies', label: 'Technologies', icon: Zap }
  ];

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Breakthrough Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most comprehensive collection of AI breakthroughs, predictions, and technologies 
            that will shape the future from 2025 to 2030.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentContent.map((item) => (
            <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:transform hover:scale-105">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {item.trending && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Trending
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {item.views} views
                  </div>
                </div>
                
                <Link 
                  to={`/content/${item.id}`}
                  className="group/link inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already preparing for the AI revolution. 
            Get exclusive access to our complete content library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2025-2030-ultimate-breakthrough"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-6 h-6 mr-2" />
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/newsletter"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <Star className="w-6 h-6 mr-2" />
              Get Updates
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateBreakthroughContentShowcase;